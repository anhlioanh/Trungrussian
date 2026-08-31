/* ============================================================
   core.js — cấu hình, lưu tiến độ, phát âm, tiện ích chung
   ============================================================ */

/* ----- 1. Cấu hình website (đổi tên web ở đây là đổi hết) ----- */
const SITE = {
  name: 'Học tiếng Nga cùng Oanh',
  short: 'Cùng Oanh',
  mark: 'О',
  tagline: 'Từ con số 0 đến C2 — bằng tiếng Việt, miễn phí, học tới đâu nhớ tới đó',
  author: 'Trung'
};

/* Ba bài đầu cho học thử, không cần tài khoản.
   Thêm/bớt bài ở đây là đổi phạm vi học thử. */
const FREE_LESSONS = ['a0-01', 'a0-02', 'a0-03'];

/* ----- 2. Lưu trữ tiến độ (localStorage, không cần máy chủ) ----- */
const KEY = 'htn.v1';

const Store = {
  _data: null,
  load() {
    if (this._data) return this._data;
    let d = null;
    try { d = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { d = null; }
    this._data = Object.assign({
      learner: '',           // tên học viên (in lên chứng nhận)
      lessons: {},           // { 'a0-01': {done:true, score:8, total:10, at:'...'} }
      cards: {},             // SRS: { 'мама': {ef:2.5, n:0, due:'2026-08-29', last:0} }
      exams: {},             // { 'a0': {best:92, passed:true, at:'...', code:'...'} }
      streak: { last: '', days: 0 },
      history: {},           // { '2026-08-30': {lessons:2, cards:14, exams:1} }
      placed: null,          // cấp độ do bài kiểm tra đầu vào xác định: 'a1', 'b1'…
      placedAt: '',
      settings: { rate: 0.85 }
    }, d || {});
    return this._data;
  },
  onSave: null,          // auth.js gắn vào đây để đồng bộ lên Supabase
  save() {
    try { localStorage.setItem(KEY, JSON.stringify(this._data)); } catch (e) {}
    if (typeof this.onSave === 'function') { try { this.onSave(); } catch (e) {} }
  },
  get(path, fallback) {
    const d = this.load();
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), d) ?? fallback;
  },
  reset() {
    try { localStorage.removeItem(KEY); } catch (e) {}
    this._data = null;
  }
};

/* điểm danh chuỗi ngày học */
function touchStreak() {
  const d = Store.load();
  const today = new Date().toISOString().slice(0, 10);
  if (d.streak.last === today) return;
  const y = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  d.streak.days = (d.streak.last === y) ? d.streak.days + 1 : 1;
  d.streak.last = today;
  Store.save();
}

/* ghi lại hoạt động trong ngày để vẽ biểu đồ 30 ngày */
function bumpHistory(kind, n) {
  const d = Store.load();
  const t = today();
  d.history = d.history || {};
  d.history[t] = d.history[t] || { lessons: 0, cards: 0, exams: 0 };
  d.history[t][kind] = (d.history[t][kind] || 0) + (n || 1);
  /* chỉ giữ 120 ngày gần nhất cho gọn */
  const keys = Object.keys(d.history).sort();
  while (keys.length > 120) delete d.history[keys.shift()];
  Store.save();
}

/* ----- 2b. Điểm kinh nghiệm, cấp hiệu và huy hiệu ----- */
const XP_RULES = {
  lesson: 20,      // mỗi bài học xong
  correct: 2,      // mỗi câu bài tập làm đúng
  card: 1,         // mỗi thẻ từ vựng đã ôn ít nhất một lần
  cardSolid: 3,    // cộng thêm nếu thẻ đã nhớ chắc
  examPass: 100,   // mỗi kì thi đạt
  streakDay: 5     // mỗi ngày trong chuỗi học liên tiếp
};

const RANKS = [
  { xp: 0,    vi: 'Người mới',   ru: 'Новичо́к' },
  { xp: 150,  vi: 'Học trò',     ru: 'Учени́к' },
  { xp: 400,  vi: 'Chăm chỉ',    ru: 'Стара́тельный' },
  { xp: 800,  vi: 'Vững vàng',   ru: 'Уве́ренный' },
  { xp: 1500, vi: 'Giỏi',        ru: 'Отли́чник' },
  { xp: 2500, vi: 'Cao thủ',     ru: 'Ма́стер' },
  { xp: 4000, vi: 'Huyền thoại', ru: 'Леге́нда' }
];

function computeXP() {
  const d = Store.load();
  let xp = 0;
  Object.values(d.lessons || {}).forEach(l => {
    if (l.done) xp += XP_RULES.lesson + (l.score || 0) * XP_RULES.correct;
  });
  Object.values(d.cards || {}).forEach(c => {
    if ((c.n || 0) >= 1) xp += XP_RULES.card;
    if ((c.n || 0) >= 3) xp += XP_RULES.cardSolid;
  });
  Object.values(d.exams || {}).forEach(e => { if (e.passed) xp += XP_RULES.examPass; });
  xp += ((d.streak && d.streak.days) || 0) * XP_RULES.streakDay;
  return xp;
}

function rankOf(xp) {
  let cur = RANKS[0], next = null;
  for (let i = 0; i < RANKS.length; i++) {
    if (xp >= RANKS[i].xp) { cur = RANKS[i]; next = RANKS[i + 1] || null; }
  }
  const span = next ? next.xp - cur.xp : 1;
  const into = next ? xp - cur.xp : 1;
  return { cur, next, pct: next ? Math.round(into / span * 100) : 100 };
}

const BADGES = [
  { id: 'first',   icon: '🌱', name: 'Bước đầu tiên',    desc: 'Học xong bài đầu tiên',           has: st => st.doneLessons >= 1 },
  { id: 'read',    icon: '🔤', name: 'Đọc được chữ Nga', desc: 'Học hết cấp A0',                  has: st => st.byLevel.a0 && st.byLevel.a0.done >= st.byLevel.a0.ready && st.byLevel.a0.ready > 0 },
  { id: 'ten',     icon: '📚', name: 'Mười bài',         desc: 'Học xong 10 bài',                 has: st => st.doneLessons >= 10 },
  { id: 'w100',    icon: '🧠', name: 'Trăm từ',          desc: '100 từ trong bộ thẻ',             has: st => st.cards >= 100 },
  { id: 'w300',    icon: '🗝️', name: 'Ba trăm từ',       desc: '300 từ trong bộ thẻ',             has: st => st.cards >= 300 },
  { id: 'solid',   icon: '💎', name: 'Nhớ chắc',         desc: '50 từ đã nhớ chắc',               has: st => st.learned >= 50 },
  { id: 'streak7', icon: '🔥', name: 'Bảy ngày',         desc: 'Học 7 ngày liên tiếp',            has: st => st.streak >= 7 },
  { id: 'streak30',icon: '⚡', name: 'Ba mươi ngày',     desc: 'Học 30 ngày liên tiếp',           has: st => st.streak >= 30 },
  { id: 'a0',      icon: '🏅', name: 'Chứng nhận A0',    desc: 'Thi đạt cuối cấp A0',             has: (st, d) => !!(d.exams.a0 && d.exams.a0.passed) },
  { id: 'a1',      icon: '🎖️', name: 'Chứng nhận A1',    desc: 'Thi đạt cuối cấp A1',             has: (st, d) => !!(d.exams.a1 && d.exams.a1.passed) },
  { id: 'perfect', icon: '🎯', name: 'Không sai câu nào', desc: 'Làm đúng 100% một bài',          has: (st, d) => Object.values(d.lessons || {}).some(l => l.done && l.total && l.score === l.total) },
  { id: 'placed',  icon: '🧭', name: 'Biết mình ở đâu',  desc: 'Làm bài kiểm tra đầu vào',        has: (st, d) => !!d.placed }
];

function earnedBadges() {
  const st = courseStats();
  const d = Store.load();
  return BADGES.map(b => Object.assign({}, b, { got: !!b.has(st, d) }));
}

/* ----- 3. Phát âm tiếng Nga bằng giọng có sẵn của trình duyệt ----- */
const Speech = {
  voice: null,
  ready: false,
  init() {
    if (!('speechSynthesis' in window)) return;
    const pick = () => {
      const vs = speechSynthesis.getVoices();
      this.voice = vs.find(v => v.lang === 'ru-RU') || vs.find(v => (v.lang || '').startsWith('ru')) || null;
      this.ready = true;
    };
    pick();
    speechSynthesis.onvoiceschanged = pick;
  },
  say(text, btn) {
    if (!('speechSynthesis' in window)) { alert('Trình duyệt này không đọc được. Em thử Chrome hoặc Safari nhé.'); return; }
    speechSynthesis.cancel();
    // bỏ dấu nhấn (dấu sắc kết hợp) trước khi đọc, không thì giọng máy bị vấp
    const clean = String(text).replace(/[̀-ͯ]/g, '').replace(/[«»"]/g, '');
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = 'ru-RU';
    if (this.voice) u.voice = this.voice;
    u.rate = Store.get('settings.rate', 0.85);
    if (btn) {
      btn.classList.add('playing');
      u.onend = u.onerror = () => btn.classList.remove('playing');
    }
    speechSynthesis.speak(u);
  },
  hasRussian() { return !!this.voice; }
};
Speech.init();

/* nút loa dùng lại ở mọi trang */
const SPEAKER_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 10v4h4l5 4V6L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1c3 .9 5 3.5 5 6.7s-2 5.8-5 6.7v2.1c4.1-.9 7-4.5 7-8.8s-2.9-7.9-7-8.8z"/></svg>';
function speakBtn(text, label) {
  return `<button class="speak" type="button" data-say="${escAttr(text)}" title="Nghe: ${escAttr(label || text)}" aria-label="Nghe phát âm">${SPEAKER_SVG}</button>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-say]');
  if (b) Speech.say(b.getAttribute('data-say'), b);
});

/* ----- 4. Tiện ích ----- */
function esc(s) {
  return String(s ?? '').replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
}
function escAttr(s) {
  return esc(s).replace(/"/g, '&quot;');
}
function qs(name) {
  return new URLSearchParams(location.search).get(name);
}
function shuffle(a) {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}
function today() { return new Date().toISOString().slice(0, 10); }
function plusDays(n) { return new Date(Date.now() + n * 86400000).toISOString().slice(0, 10); }
/* so sánh câu trả lời gõ tay: bỏ dấu nhấn, dấu câu, hoa thường, ё=е */
function norm(s) {
  return String(s ?? '')
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[̀-ͯ́]/g, '')
    .replace(/[.,!?;:"'«»\-–—]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/* ----- 5. Thanh điều hướng dùng chung ----- */
/* Biểu tượng nhỏ cho thanh tab dưới đáy (điện thoại) */
const NAV_ICONS = {
  home:  'M12 3 2 12h3v8h6v-5h2v5h6v-8h3z',
  phr:   'M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 9h10v2H7zm0 4h7v2H7z',
  drill: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z',
  card:  'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4H4V6h16zM6 11h8v2H6zm0 4h5v2H6z',
  more:  'M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'
};
function navIcon(k) {
  return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${NAV_ICONS[k]}"/></svg>`;
}

/* Trên máy tính: một hàng liên kết ở đầu trang.
   Trên điện thoại: đầu trang chỉ còn logo, còn điều hướng chuyển xuống
   thanh tab dưới đáy — đúng kiểu app, và không ăn mất 1/5 màn hình như
   khi tám mục tự xuống dòng. */
function renderNav(active) {
  const links = [
    ['index.html', 'Trang chủ'],
    ['hoc.html', 'Bài học'],
    ['khocau.html', 'Kho câu'],
    ['luyentap.html', 'Luyện tập'],
    ['flashcard.html', 'Thẻ từ vựng'],
    ['tudien.html', 'Từ điển'],
    ['thi.html', 'Kì thi'],
    ['bangdiem.html', 'Bảng điểm']
  ];
  /* năm mục hay dùng nhất nằm ở thanh dưới; phần còn lại nằm trong "Thêm" */
  const tabs = [
    ['index.html', 'Trang chủ', 'home'],
    ['khocau.html', 'Kho câu', 'phr'],
    ['luyentap.html', 'Luyện tập', 'drill'],
    ['flashcard.html', 'Thẻ từ', 'card']
  ];
  const more = [
    ['hoc.html', 'Bài học'], ['tudien.html', 'Từ điển'],
    ['thi.html', 'Kì thi'], ['bangdiem.html', 'Bảng điểm'], ['tuhoc.html', 'Tự học C1–C2']
  ];
  const moreActive = more.some(([h]) => h === active);

  return `
  <nav class="nav"><div class="nav-inner">
    <a class="logo" href="index.html">
      <span class="logo-mark">${SITE.mark}</span>
      <span class="logo-text">${SITE.name}<small>Русский язык с нуля</small></span>
    </a>
    <div class="nav-links">
      ${links.map(([h, t]) => `<a href="${h}" ${h === active ? 'class="active"' : ''}>${t}</a>`).join('')}
    </div>
  </div></nav>

  <nav class="tabbar" aria-label="Điều hướng chính">
    ${tabs.map(([h, t, ic]) => `<a href="${h}" class="${h === active ? 'on' : ''}">${navIcon(ic)}<span>${t}</span></a>`).join('')}
    <button type="button" class="tab-more ${moreActive ? 'on' : ''}" id="tab-more">${navIcon('more')}<span>Thêm</span></button>
  </nav>

  <div class="sheet-back" id="sheet-back" hidden></div>
  <div class="sheet" id="sheet" hidden>
    <div class="sheet-grab"></div>
    ${more.map(([h, t]) => `<a href="${h}" class="${h === active ? 'on' : ''}">${t}</a>`).join('')}
    <button type="button" class="sheet-close" id="sheet-close">Đóng</button>
  </div>`;
}

function renderFooter() {
  return `<footer class="site"><div class="wrap">
    <p><strong>${SITE.name}</strong> — ${SITE.tagline}</p>
    <p class="tiny">Có tài khoản thì tiến độ được lưu lại, đổi máy hay đổi điện thoại vẫn còn nguyên. Học thử không cần tài khoản: ba bài đầu mở sẵn cho mọi người.</p>
  </div></footer>`;
}
function mountChrome(active) {
  const nav = document.getElementById('nav');
  if (nav) nav.outerHTML = renderNav(active);
  const ft = document.getElementById('footer');
  if (ft) ft.outerHTML = renderFooter();

  const sheet = document.getElementById('sheet');
  const back = document.getElementById('sheet-back');
  const openBtn = document.getElementById('tab-more');
  if (sheet && back && openBtn) {
    const show = on => { sheet.hidden = !on; back.hidden = !on; };
    openBtn.onclick = () => show(sheet.hidden);
    back.onclick = () => show(false);
    document.getElementById('sheet-close').onclick = () => show(false);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') show(false); });
  }
}

/* ----- 6. Thống kê tiến độ toàn khoá ----- */
function courseStats() {
  const d = Store.load();
  let totalLessons = 0, doneLessons = 0;
  const byLevel = {};
  COURSE.levels.forEach(lv => {
    const ids = (LESSONS[lv.id] || []).map(l => l.id);
    const done = ids.filter(id => d.lessons[id] && d.lessons[id].done).length;
    byLevel[lv.id] = { total: lv.lessonCount || ids.length, ready: ids.length, done };
    totalLessons += ids.length; doneLessons += done;
  });
  const cards = Object.keys(d.cards).length;
  const due = Object.values(d.cards).filter(c => c.due <= today()).length;
  const learned = Object.values(d.cards).filter(c => c.n >= 2).length;
  return { totalLessons, doneLessons, byLevel, cards, due, learned,
           streak: (d.streak && d.streak.days) || 0, xp: computeXP() };
}
