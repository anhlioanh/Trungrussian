/* ============================================================
   lecture.js — "Bài giảng tự chạy"
   Biến nội dung bài học thành một chuỗi màn hình tự lật, có giọng đọc:
   tiếng Nga đọc bằng giọng Nga, lời giảng đọc bằng giọng Việt (nếu máy có).
   Không phải video thật, nhưng người học chỉ cần bấm Play rồi ngồi xem.
   ============================================================ */

const Lecture = {
  slides: [], i: 0, playing: false, token: 0,
  viVoice: null, readVi: true, rate: 1,

  /* ---------- chọn giọng tiếng Việt nếu máy có ---------- */
  initVoice() {
    if (!('speechSynthesis' in window)) return;
    const pick = () => {
      const vs = speechSynthesis.getVoices();
      this.viVoice = vs.find(v => v.lang === 'vi-VN') || vs.find(v => (v.lang || '').startsWith('vi')) || null;
    };
    pick();
    speechSynthesis.onvoiceschanged = () => { pick(); Speech.init(); };
  },

  /* ---------- dựng danh sách màn hình từ dữ liệu bài học ---------- */
  build(id, data, meta, level) {
    const S = [];
    const push = (o) => S.push(Object.assign({ say: [], kicker: '' }, o));
    const plain = h => String(h || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

    /* màn hình mở đầu */
    push({
      cls: 'title',
      html: `<div class="lec-kicker">${esc(level.code)} · ${esc(level.name)}</div>
             <h1>${esc(meta.title)}</h1>
             <p class="lec-sub">${esc(meta.sub || '')}</p>`,
      say: [{ t: meta.title, lang: 'vi' }]
    });

    /* lời dẫn */
    push({
      cls: 'text',
      html: `<div class="lec-body">${data.intro}</div>`,
      say: [{ t: plain(data.intro), lang: 'vi' }]
    });

    let kicker = '';
    (data.blocks || []).forEach(b => {
      if (b.t === 'h') {
        kicker = b.text;
        push({ cls: 'head', html: `<h2>${esc(b.text)}</h2>`, say: [{ t: b.text, lang: 'vi' }] });
        return;
      }
      if (b.t === 'p' || b.t === 'note' || b.t === 'tip' || b.t === 'warn') {
        const box = b.t === 'p' ? '' : `callout ${b.t === 'note' ? 'note' : b.t === 'tip' ? 'tip' : ''}`;
        push({
          cls: 'text', kicker,
          html: box ? `<div class="${box}">${b.html}</div>` : `<div class="lec-body">${b.html}</div>`,
          say: [{ t: plain(b.html), lang: 'vi' }]
        });
        return;
      }
      if (b.t === 'letters') {
        b.items.forEach(it => push({
          cls: 'letter', kicker,
          html: `<div class="lec-letter ru">${esc(it.L)}</div>
                 <div class="lec-read">${esc(it.read)}</div>
                 <p class="lec-note">${it.note}</p>
                 ${it.ex ? `<div class="lec-ex"><span class="ru">${esc(it.ex)}</span> <span class="muted">— ${esc(it.exvn)}</span></div>` : ''}`,
          say: [
            { t: it.say, lang: 'ru' }, { t: it.say, lang: 'ru' },
            { t: plain(it.note), lang: 'vi' }
          ].concat(it.ex ? [{ t: it.ex, lang: 'ru' }, { t: it.exvn, lang: 'vi' }] : [])
        }));
        return;
      }
      if (b.t === 'words') {
        for (let k = 0; k < b.items.length; k += 4) {
          const chunk = b.items.slice(k, k + 4);
          push({
            cls: 'words', kicker,
            html: chunk.map(w => `<div class="lec-word"><span class="ru">${esc(w.ru)}</span><span class="muted">${esc(w.vn)}</span></div>`).join(''),
            say: chunk.flatMap(w => [{ t: w.ru, lang: 'ru' }, { t: w.vn, lang: 'vi' }])
          });
        }
        return;
      }
      if (b.t === 'dialog') {
        b.lines.forEach(l => push({
          cls: 'dialog', kicker,
          html: `<div class="lec-who">${esc(l.who)}</div>
                 <div class="lec-ru ru">${esc(l.ru)}</div>
                 <div class="lec-vn">${esc(l.vn)}</div>`,
          say: [{ t: l.ru, lang: 'ru' }, { t: l.vn, lang: 'vi' }, { t: l.ru, lang: 'ru' }]
        }));
        return;
      }
      if (b.t === 'table') {
        push({
          cls: 'table', kicker,
          html: `<div class="table-scroll"><table>
            <thead><tr>${b.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
            <tbody>${b.rows.map(r => `<tr>${r.map((c, i2) => `<td${i2 === 0 ? ' class="ru"' : ''}>${c}</td>`).join('')}</tr>`).join('')}</tbody>
          </table></div>`,
          say: [{ t: kicker || 'Bảng tổng hợp', lang: 'vi' }],
          hold: 4500 + b.rows.length * 900
        });
        return;
      }
      if (b.t === 'alphabet') {
        push({
          cls: 'table', kicker,
          html: `<div class="lec-alpha">${ALPHABET.map(([L, , read]) => `<span><b class="ru">${esc(L)}</b><small>${esc(read)}</small></span>`).join('')}</div>`,
          say: [{ t: 'Toàn bộ ba mươi ba chữ cái tiếng Nga.', lang: 'vi' }],
          hold: 6000
        });
      }
    });

    /* màn hình kết */
    push({
      cls: 'title end',
      html: `<h1>Hết phần giảng</h1>
             <p class="lec-sub">Giờ đến lượt em làm bài tập — làm xong mới nhớ được.</p>
             <button class="btn btn-primary" id="lec-toex">Xuống làm bài tập</button>`,
      say: [{ t: 'Hết phần giảng. Giờ em làm bài tập nhé.', lang: 'vi' }]
    });

    this.slides = S;
    return S;
  },

  /* ---------- mở trình chiếu ---------- */
  open() {
    if (!this.slides.length) return;
    this.i = 0;
    document.body.classList.add('lec-on');
    document.getElementById('lecture').hidden = false;
    this.render();
    this.play();
  },

  close() {
    this.pause();
    document.body.classList.remove('lec-on');
    const el = document.getElementById('lecture');
    if (el) el.hidden = true;
  },

  render() {
    const s = this.slides[this.i];
    const stage = document.getElementById('lec-stage');
    stage.className = 'lec-stage ' + (s.cls || '');
    stage.innerHTML = (s.kicker ? `<div class="lec-kicker">${esc(s.kicker)}</div>` : '') + s.html;
    document.getElementById('lec-pos').textContent = (this.i + 1) + ' / ' + this.slides.length;
    document.getElementById('lec-bar').style.width = ((this.i + 1) / this.slides.length * 100) + '%';
    const toex = document.getElementById('lec-toex');
    if (toex) toex.onclick = () => {
      this.close();
      const w = document.getElementById('ex-wrap');
      if (w) w.scrollIntoView({ behavior: 'smooth' });
    };
  },

  /* ---------- đọc một đoạn ---------- */
  speak(text, lang) {
    return new Promise(resolve => {
      const t = String(text || '').trim();
      if (!t || !('speechSynthesis' in window)) return resolve();
      if (lang === 'vi' && (!this.readVi || !this.viVoice)) return resolve();

      const clean = t.replace(/[̀-ͯ]/g, '');
      const u = new SpeechSynthesisUtterance(clean.slice(0, 240));
      if (lang === 'ru') {
        u.lang = 'ru-RU';
        if (Speech.voice) u.voice = Speech.voice;
        u.rate = 0.85 * this.rate;
      } else {
        u.lang = 'vi-VN';
        u.voice = this.viVoice;
        u.rate = 1 * this.rate;
      }
      let done = false;
      const finish = () => { if (!done) { done = true; resolve(); } };
      u.onend = finish;
      u.onerror = finish;
      setTimeout(finish, 15000);          // phòng khi trình duyệt nuốt sự kiện
      speechSynthesis.speak(u);
    });
  },

  wait(ms, tk) {
    return new Promise(r => setTimeout(() => r(), ms));
  },

  async play() {
    if (this.playing) return;
    this.playing = true;
    document.getElementById('lecture').classList.add('playing');
    const tk = ++this.token;

    while (this.playing && tk === this.token && this.i < this.slides.length) {
      const s = this.slides[this.i];
      this.render();

      for (const part of (s.say || [])) {
        if (tk !== this.token) return;
        await this.speak(part.t, part.lang);
        if (tk !== this.token) return;
        await this.wait(part.lang === 'ru' ? 500 : 250);
      }
      if (tk !== this.token) return;

      /* nếu máy không đọc được thì vẫn phải dừng đủ lâu để đọc bằng mắt */
      const spoken = (s.say || []).some(p => p.lang === 'ru' || this.viVoice);
      const chars = (s.html || '').replace(/<[^>]+>/g, '').length;
      const hold = s.hold || (spoken ? 900 : Math.max(3000, Math.min(14000, chars * 55)));
      await this.wait(hold);
      if (tk !== this.token) return;

      if (this.i >= this.slides.length - 1) { this.pause(); return; }
      this.i++;
    }
  },

  pause() {
    this.playing = false;
    this.token++;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    const el = document.getElementById('lecture');
    if (el) el.classList.remove('playing');
  },

  toggle() { this.playing ? this.pause() : this.play(); },

  go(step) {
    const wasPlaying = this.playing;
    this.pause();
    this.i = Math.max(0, Math.min(this.slides.length - 1, this.i + step));
    this.render();
    if (wasPlaying) this.play();
  },

  setRate(r) {
    this.rate = r;
    document.querySelectorAll('#lec-speed button').forEach(b =>
      b.classList.toggle('on', Number(b.dataset.r) === r));
    if (this.playing) { this.pause(); this.play(); }
  },

  /* ---------- khung giao diện, gắn một lần ---------- */
  mount() {
    if (document.getElementById('lecture')) return;
    const el = document.createElement('div');
    el.id = 'lecture';
    el.hidden = true;
    el.innerHTML = `
      <div class="lec-top">
        <div class="lec-progress"><i id="lec-bar"></i></div>
        <div class="lec-topbar">
          <span class="lec-pos" id="lec-pos"></span>
          <div class="lec-speed" id="lec-speed">
            <button data-r="0.8">chậm</button>
            <button data-r="1" class="on">vừa</button>
            <button data-r="1.3">nhanh</button>
          </div>
          <label class="lec-vi"><input type="checkbox" id="lec-readvi" checked> Đọc lời giảng</label>
          <button class="lec-x" id="lec-close" title="Đóng (Esc)">✕</button>
        </div>
      </div>
      <div class="lec-stage" id="lec-stage"></div>
      <div class="lec-ctrl">
        <button id="lec-prev" title="Màn trước (←)">‹</button>
        <button id="lec-play" class="big" title="Chạy / dừng (phím cách)"></button>
        <button id="lec-next" title="Màn sau (→)">›</button>
      </div>`;
    document.body.appendChild(el);

    document.getElementById('lec-close').onclick = () => this.close();
    document.getElementById('lec-play').onclick = () => this.toggle();
    document.getElementById('lec-prev').onclick = () => this.go(-1);
    document.getElementById('lec-next').onclick = () => this.go(1);
    document.getElementById('lec-readvi').onchange = e => { this.readVi = e.target.checked; };
    document.querySelectorAll('#lec-speed button').forEach(b =>
      b.onclick = () => this.setRate(Number(b.dataset.r)));

    document.addEventListener('keydown', e => {
      if (document.getElementById('lecture').hidden) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.go(-1);
      if (e.key === 'ArrowRight') this.go(1);
      if (e.code === 'Space') { e.preventDefault(); this.toggle(); }
    });

    /* dừng đọc khi người học chuyển sang tab khác */
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.playing) this.pause();
    });
  }
};
Lecture.initVoice();
