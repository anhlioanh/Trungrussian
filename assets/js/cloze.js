/* ============================================================
   cloze.js — ĐIỀN VÀO CHỖ TRỐNG

   Cơ chế mượn từ Clozemaster: khoét một từ trong câu THẬT rồi bắt
   người học điền lại. Nó ép nhớ ĐUÔI CÁCH — đúng chỗ người Việt yếu
   nhất — mà bài trắc nghiệm A/B/C/D không ép được, vì chọn đáp án
   thì chỉ cần nhận ra, còn điền thì phải tự dựng lại.

   Không viết nội dung mới: câu lấy từ 238 câu hội thoại trong các
   bài học và 144 câu chọn tay ở kho câu.

   Cần nạp SAU core.js, các file data/lessons/*.js và data/phrases.js
   ============================================================ */

const Cloze = {
  RU: /[а-яёА-ЯЁ][а-яёА-ЯЁ́-]*/g,

  /* chữ hay là từ chức năng ngắn — khoét mấy từ này thì học được ít */
  DULL: new Set(['и','а','но','да','не','ни','в','во','на','с','со','к','ко','о','об','у','за','по','из','от','до','для','же','ли','бы','то','я','ты','он','она','мы','вы','они','это','вот','ну']),

  bank: null,

  /* gom câu từ bài học + kho câu */
  build(guest) {
    if (this.bank) return this.bank;
    const out = [];

    if (typeof LESSON_DATA !== 'undefined') {
      Object.keys(LESSON_DATA).forEach(id => {
        if (guest && typeof FREE_LESSONS !== 'undefined' && !FREE_LESSONS.includes(id)) return;
        const lv = id.split('-')[0];
        const meta = (typeof LESSONS !== 'undefined' && (LESSONS[lv] || []).find(l => l.id === id)) || null;
        if (!meta) return;
        (LESSON_DATA[id].blocks || []).forEach(b => {
          if (b.t !== 'dialog') return;
          (b.lines || []).forEach(l => {
            if (l.ru && l.vn) out.push({ ru: l.ru, vn: l.vn, lv, lid: id, title: meta.title });
          });
        });
      });
    }

    if (typeof PHRASES !== 'undefined') {
      PHRASES.forEach(p => {
        /* bỏ nhóm "lỗi hay mắc" và "nói khác viết": ở đó cái đúng là chuyện
           đang bàn, khoét chỗ trống dễ làm người học nhớ nhầm dạng sai */
        if (p.cat === 'error' || p.cat === 'speak') return;
        if (guest && p.lv !== 'a0' && p.lv !== 'a1') return;
        out.push({ ru: p.ru, vn: p.vn, lv: p.lv || 'a1', cat: p.cat });
      });
    }

    /* Giữ câu dài vừa phải: ít nhất 3 từ thì mới còn manh mối, nhiều nhất
       12 từ thì mới còn là một câu để luyện — vài dòng hội thoại ở B2 dài
       cả đoạn văn, khoét một từ trong đó thì người học chẳng học được gì. */
    this.bank = out.filter(x => {
      const n = (x.ru.match(this.RU) || []).length;
      return n >= 3 && n <= 12;
    });
    return this.bank;
  },

  /* chọn một từ để khoét: ưu tiên từ dài, tránh từ chức năng */
  makeItem(s) {
    const words = [];
    let m;
    this.RU.lastIndex = 0;
    while ((m = this.RU.exec(s.ru)) !== null) words.push({ w: m[0], i: m.index });

    const plain = w => w.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ё/g, 'е');
    let pool = words.filter(x => !this.DULL.has(plain(x.w)) && plain(x.w).length >= 3);
    if (!pool.length) pool = words.filter(x => plain(x.w).length >= 3);
    if (!pool.length) pool = words;

    /* tránh khoét ngay từ đầu câu: mất gần hết manh mối phía trước */
    const notFirst = pool.filter(x => x.i > 0);
    if (notFirst.length) pool = notFirst;

    const pick = pool[Math.floor(Math.random() * pool.length)];
    return {
      before: s.ru.slice(0, pick.i),
      after: s.ru.slice(pick.i + pick.w.length),
      answer: pick.w,
      full: s.ru,
      vn: s.vn,
      lv: s.lv, lid: s.lid, title: s.title, cat: s.cat
    };
  },

  /* so đáp án: bỏ qua trọng âm, hoa thường, ё/е — người học không gõ được dấu nhấn */
  check(typed, answer) {
    const n = x => String(x || '').toLowerCase().normalize('NFD')
      .replace(/[̀-ͯ]/g, '').replace(/ё/g, 'е')
      .replace(/[^а-яa-z0-9-]/g, '').trim();
    return n(typed) === n(answer) && n(typed).length > 0;
  },

  /* rút ngẫu nhiên n câu, lọc theo cấp nếu có */
  draw(n, level, guest) {
    let src = this.build(guest);
    if (level && level !== 'all') src = src.filter(s => s.lv === level);
    if (!src.length) return [];
    return shuffle(src).slice(0, n).map(s => this.makeItem(s));
  }
};
