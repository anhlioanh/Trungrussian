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
function renderNav(active) {
  const links = [
    ['index.html', 'Trang chủ'],
    ['hoc.html', 'Bài học'],
    ['flashcard.html', 'Thẻ từ vựng'],
    ['thi.html', 'Kì thi']
  ];
  return `
  <nav class="nav"><div class="nav-inner">
    <a class="logo" href="index.html">
      <span class="logo-mark">${SITE.mark}</span>
      <span class="logo-text">${SITE.name}<small>Русский язык с нуля</small></span>
    </a>
    <div class="nav-links">
      ${links.map(([h, t]) => `<a href="${h}" ${h === active ? 'class="active"' : ''}>${t}</a>`).join('')}
    </div>
  </div></nav>`;
}
function renderFooter() {
  return `<footer class="site"><div class="wrap">
    <p><strong>${SITE.name}</strong> — ${SITE.tagline}</p>
    <p class="tiny">Tiến độ học được lưu ngay trong trình duyệt của em, không gửi đi đâu cả. Xoá dữ liệu trình duyệt là mất, nên thỉnh thoảng vào Trang chủ bấm “Sao lưu tiến độ” nhé.</p>
  </div></footer>`;
}
function mountChrome(active) {
  const nav = document.getElementById('nav');
  if (nav) nav.outerHTML = renderNav(active);
  const ft = document.getElementById('footer');
  if (ft) ft.outerHTML = renderFooter();
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
  return { totalLessons, doneLessons, byLevel, cards, due, learned, streak: d.streak.days };
}
