/* ============================================================
   record.js — GHI ÂM GIỌNG MÌNH RỒI NGHE LẠI

   Nói thẳng về giới hạn: web này KHÔNG chấm điểm phát âm.
   Trình duyệt không đo được trọng âm hay ngữ điệu, và một điểm số
   phát âm sai còn hại hơn không có điểm — người học sẽ tin là mình
   đọc chuẩn trong khi không phải.

   Cái web làm được, và làm thật tốt: cho người học nghe giọng mẫu,
   ghi lại giọng mình, rồi bật hai cái cạnh nhau. Tai người nghe ra
   khác biệt tốt hơn nhiều so với bất kỳ thuật toán chạy trong trình
   duyệt. Đây cũng đúng là cách các lớp dạy phát âm vẫn làm.

   Bản ghi chỉ nằm trong bộ nhớ của trang, đóng tab là mất — cố ý,
   để không có giọng nói của ai bị lưu lại ở đâu cả.
   ============================================================ */

const Rec = {
  stream: null,
  mr: null,
  curKey: null,
  clips: new Map(),      // key → { url, ms }
  timerId: null,
  startedAt: 0,

  supported() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  },

  /* nút ghi âm dùng lại ở mọi nơi */
  button(key, label) {
    if (!this.supported()) return '';
    return `<span class="rec-wrap" data-rec-key="${escAttr(key)}">
      <button class="rec-btn" type="button" data-rec="${escAttr(key)}"
        title="Ghi âm giọng em đọc câu này" aria-label="Ghi âm${label ? ': ' + escAttr(label) : ''}">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z"/></svg>
      </button>
      <span class="rec-slot"></span>
    </span>`;
  },

  async toggle(key, btn) {
    if (this.curKey === key) { this.stop(); return; }
    if (this.curKey) this.stop();

    if (!this.supported()) {
      this.note(key, 'Trình duyệt này không ghi âm được. Em thử Chrome hoặc Safari bản mới nhé.');
      return;
    }

    try {
      if (!this.stream) this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (e) {
      this.note(key, 'Chưa bật được micro. Em bấm vào biểu tượng khoá 🔒 trên thanh địa chỉ rồi cho phép micro nhé.');
      return;
    }

    const chunks = [];
    try {
      this.mr = new MediaRecorder(this.stream);
    } catch (e) {
      this.note(key, 'Trình duyệt này không ghi âm được.');
      return;
    }

    this.mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    this.mr.onstop = () => {
      const ms = Date.now() - this.startedAt;
      const blob = new Blob(chunks, { type: this.mr.mimeType || 'audio/webm' });
      const old = this.clips.get(key);
      if (old) URL.revokeObjectURL(old.url);
      /* bản ghi quá ngắn thường là bấm nhầm */
      if (blob.size < 800 || ms < 350) { this.note(key, 'Ngắn quá, chưa nghe được gì. Em bấm giữ lâu hơn một chút nhé.'); this.paint(key); return; }
      this.clips.set(key, { url: URL.createObjectURL(blob), ms });
      this.paint(key);
    };

    this.startedAt = Date.now();
    this.curKey = key;
    this.mr.start();
    this.paint(key);

    /* tự dừng sau 30 giây cho chắc */
    this.timerId = setTimeout(() => this.stop(), 30000);
  },

  stop() {
    clearTimeout(this.timerId);
    if (this.mr && this.mr.state === 'recording') this.mr.stop();
    const k = this.curKey;
    this.curKey = null;
    if (k) this.paint(k);
  },

  note(key, text) {
    const slot = this.slotOf(key);
    if (slot) slot.innerHTML = `<span class="rec-note">${esc(text)}</span>`;
  },

  slotOf(key) {
    const w = document.querySelector(`.rec-wrap[data-rec-key="${CSS.escape(key)}"]`);
    return w ? w.querySelector('.rec-slot') : null;
  },

  /* vẽ lại trạng thái của một nút: đang ghi / đã có bản ghi / chưa gì */
  paint(key) {
    const wrap = document.querySelector(`.rec-wrap[data-rec-key="${CSS.escape(key)}"]`);
    if (!wrap) return;
    const btn = wrap.querySelector('.rec-btn');
    const slot = wrap.querySelector('.rec-slot');
    const on = this.curKey === key;
    btn.classList.toggle('on', on);
    btn.title = on ? 'Đang ghi — bấm để dừng' : 'Ghi âm giọng em đọc câu này';

    if (on) { slot.innerHTML = `<span class="rec-live">● đang ghi… bấm lại để dừng</span>`; return; }

    const clip = this.clips.get(key);
    slot.innerHTML = clip
      ? `<button class="rec-play" type="button" data-recplay="${escAttr(key)}">▶ nghe lại giọng em</button>`
      : '';
  },

  play(key) {
    const clip = this.clips.get(key);
    if (!clip) return;
    speechSynthesis.cancel();
    const a = new Audio(clip.url);
    a.play().catch(() => {});
  }
};

document.addEventListener('click', e => {
  const r = e.target.closest('[data-rec]');
  if (r) { Rec.toggle(r.getAttribute('data-rec'), r); return; }
  const p = e.target.closest('[data-recplay]');
  if (p) { Rec.play(p.getAttribute('data-recplay')); }
});
