/* ============================================================
   auth.js — tài khoản người học và đồng bộ tiến độ lên Supabase
   Cần nạp SAU supabase-js, supabase-config.js và core.js
   ============================================================ */

const SB_OK = typeof SUPABASE_URL === 'string' && /^https:\/\/.+\.supabase\.co/.test(SUPABASE_URL)
  && typeof SUPABASE_ANON_KEY === 'string' && SUPABASE_ANON_KEY.length > 30;

const sb = (SB_OK && window.supabase) ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const Auth = {
  user: null,
  profile: null,
  syncTimer: null,
  syncing: false,

  /* ---------- phiên đăng nhập ---------- */
  async session() {
    if (!sb) return null;
    const { data } = await sb.auth.getSession();
    return data.session || null;
  },

  async boot() {
    if (!sb) return null;
    const s = await this.session();
    if (!s) return null;
    this.user = s.user;
    await this.loadProfile();
    await this.pull();
    Store.onSave = () => this.scheduleSync();
    await this.push();            // đẩy bản đã trộn lên cho hai bên khớp nhau
    return this.user;
  },

  async loadProfile() {
    const { data } = await sb.from('profiles').select('*').eq('id', this.user.id).maybeSingle();
    this.profile = data || null;
    /* phòng khi trigger chưa kịp tạo hồ sơ */
    if (!this.profile) {
      const meta = this.user.user_metadata || {};
      await sb.from('profiles').insert({
        id: this.user.id, email: this.user.email,
        full_name: meta.full_name || meta.name || ''
      });
      const r = await sb.from('profiles').select('*').eq('id', this.user.id).maybeSingle();
      this.profile = r.data || null;
    }
  },

  isTeacher() { return !!(this.profile && this.profile.role === 'teacher'); },

  displayName() {
    if (this.profile && this.profile.full_name) return this.profile.full_name;
    if (this.user) return (this.user.email || '').split('@')[0];
    return '';
  },

  /* ---------- đăng ký / đăng nhập / đăng xuất ---------- */
  async signUp(email, password, fullName) {
    return sb.auth.signUp({
      email, password,
      options: { data: { full_name: fullName }, emailRedirectTo: location.origin + '/dangnhap.html' }
    });
  },
  async signIn(email, password) {
    return sb.auth.signInWithPassword({ email, password });
  },
  async signInGoogle(next) {
    return sb.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: location.origin + '/dangnhap.html' + (next ? '?next=' + encodeURIComponent(next) : '') }
    });
  },
  async resetPassword(email) {
    return sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + '/dangnhap.html' });
  },
  async signOut() {
    if (sb) await sb.auth.signOut();
    Store.reset();
    location.href = 'dangnhap.html';
  },

  /* ---------- đồng bộ tiến độ ---------- */
  /* kéo từ máy chủ về, trộn với dữ liệu đang có trong máy */
  async pull() {
    const { data, error } = await sb.from('progress').select('data').eq('user_id', this.user.id).maybeSingle();
    if (error) { console.warn('Không tải được tiến độ:', error.message); return; }
    const local = Store.load();
    const remote = (data && data.data) ? data.data : null;
    if (!remote) { await this.push(); return; }
    Store._data = mergeProgress(local, remote);
    Store.save();
  },

  /* đẩy lên máy chủ */
  async push() {
    if (!sb || !this.user || this.syncing) return;
    this.syncing = true;
    try {
      const d = Store.load();
      const st = (typeof courseStats === 'function') ? courseStats() : { doneLessons: 0, cards: 0, streak: 0 };
      const { error } = await sb.from('progress').upsert({
        user_id: this.user.id,
        data: d,
        lessons_done: st.doneLessons || 0,
        words: st.cards || 0,
        streak: (d.streak && d.streak.days) || 0,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' });
      if (error) console.warn('Không lưu được tiến độ:', error.message);
      flashSync(error ? 'err' : 'ok');
    } finally { this.syncing = false; }
  },

  scheduleSync() {
    clearTimeout(this.syncTimer);
    flashSync('wait');
    this.syncTimer = setTimeout(() => this.push(), 1200);
  },

  /* ghi lại một lần thi */
  async logExam(level, score, passed) {
    if (!sb || !this.user) return;
    await sb.from('exam_results').insert({ user_id: this.user.id, level, score, passed });
  },

  /* ---------- cổng gác: trang nào cũng gọi hàm này ---------- */
  async guard(run) {
    if (!SB_OK || !sb) { showSetupNotice(); return; }
    let u = null;
    try { u = await this.boot(); } catch (e) { console.warn(e); }
    if (!u) {
      const next = location.pathname.split('/').pop() + location.search;
      location.replace('dangnhap.html?next=' + encodeURIComponent(next));
      return;
    }
    run();                 // trang tự dựng thanh điều hướng trước
    renderUserChip();      // rồi mới gắn chip người dùng vào
  }
};

/* ---------- trộn hai bản tiến độ, luôn giữ cái tiến xa hơn ---------- */
function mergeProgress(a, b) {
  const out = JSON.parse(JSON.stringify(b));
  out.learner = b.learner || a.learner || '';

  out.lessons = Object.assign({}, a.lessons, b.lessons);
  Object.keys(a.lessons || {}).forEach(k => {
    const x = a.lessons[k], y = (b.lessons || {})[k];
    if (!y) { out.lessons[k] = x; return; }
    out.lessons[k] = { done: x.done || y.done, score: Math.max(x.score || 0, y.score || 0), total: y.total || x.total, at: y.at || x.at, wrong: y.wrong || x.wrong };
  });

  out.cards = Object.assign({}, a.cards, b.cards);
  Object.keys(a.cards || {}).forEach(k => {
    const x = a.cards[k], y = (b.cards || {})[k];
    if (y && (x.n || 0) > (y.n || 0)) out.cards[k] = x;
  });

  out.exams = Object.assign({}, a.exams, b.exams);
  Object.keys(a.exams || {}).forEach(k => {
    const x = a.exams[k], y = (b.exams || {})[k];
    if (!y) { out.exams[k] = x; return; }
    out.exams[k] = { best: Math.max(x.best || 0, y.best || 0), passed: x.passed || y.passed, at: y.at || x.at, last: y.last ?? x.last };
  });

  const as = a.streak || { days: 0, last: '' }, bs = b.streak || { days: 0, last: '' };
  out.streak = (as.days > bs.days) ? as : bs;
  out.settings = Object.assign({}, a.settings, b.settings);
  return out;
}

/* ---------- giao diện: chip người dùng trên thanh điều hướng ---------- */
function renderUserChip() {
  const box = document.querySelector('.nav-links');
  if (!box || document.getElementById('user-chip')) return;
  const wrap = document.createElement('span');
  wrap.id = 'user-chip';
  wrap.innerHTML =
    (Auth.isTeacher() ? '<a href="giaovien.html">Giáo viên</a>' : '') +
    `<span class="uchip" title="${escAttr(Auth.user.email || '')}">
       <span class="uavatar">${esc((Auth.displayName()[0] || '?').toUpperCase())}</span>
       <span class="uname">${esc(Auth.displayName())}</span>
       <button type="button" id="signout" title="Đăng xuất">Thoát</button>
     </span>`;
  box.appendChild(wrap);
  document.getElementById('signout').onclick = () => { if (confirm('Đăng xuất khỏi tài khoản này?')) Auth.signOut(); };
}

/* ---------- đèn báo trạng thái lưu ---------- */
function flashSync(state) {
  let el = document.getElementById('syncdot');
  if (!el) {
    el = document.createElement('div');
    el.id = 'syncdot';
    document.body.appendChild(el);
  }
  el.className = state;
  el.textContent = state === 'wait' ? 'Đang lưu…' : state === 'ok' ? 'Đã lưu' : 'Lưu lỗi — kiểm tra mạng';
  el.style.opacity = '1';
  clearTimeout(el._t);
  if (state !== 'wait') el._t = setTimeout(() => { el.style.opacity = '0'; }, 1800);
}

/* ---------- màn hình báo chưa cấu hình Supabase ---------- */
function showSetupNotice() {
  document.body.innerHTML = `
    <div class="wrap narrow" style="padding:60px 20px">
      <div class="card">
        <h1>Chưa nối cơ sở dữ liệu</h1>
        <p class="soft">Web đã sẵn sàng nhưng chưa có khoá Supabase. Mở file
          <code>assets/js/supabase-config.js</code> và dán <b>Project URL</b> cùng <b>anon key</b>
          lấy ở Supabase → Settings → API, rồi đẩy lên lại.</p>
        <p class="small muted">Hướng dẫn đầy đủ nằm trong README.md, mục “Nối Supabase”.</p>
      </div>
    </div>`;
}
