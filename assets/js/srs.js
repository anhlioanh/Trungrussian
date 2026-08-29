/* ============================================================
   srs.js — lặp lại ngắt quãng (thuật toán SM-2 rút gọn)
   Ý tưởng: từ nào em sắp quên thì nó hiện lại đúng lúc đó,
   từ nào đã chắc thì giãn ra hàng tuần, hàng tháng.
   ============================================================ */

const SRS = {
  /* lấy các thẻ đến hạn hôm nay */
  dueCards(limit) {
    const d = Store.load(), t = today();
    const arr = Object.keys(d.cards)
      .filter(k => (d.cards[k].due || t) <= t)
      .map(k => Object.assign({ ru: k }, d.cards[k]));
    /* thẻ mới (n=0) xếp sau thẻ đang ôn để không bị ngợp */
    arr.sort((a, b) => (a.n === 0) - (b.n === 0) || (a.due < b.due ? -1 : 1));
    return limit ? arr.slice(0, limit) : arr;
  },

  allCards() {
    const d = Store.load();
    return Object.keys(d.cards).map(k => Object.assign({ ru: k }, d.cards[k]));
  },

  /* q: 0 = quên hẳn, 3 = khó, 4 = nhớ được, 5 = quá dễ */
  answer(ru, q) {
    const d = Store.load();
    const c = d.cards[ru];
    if (!c) return;
    if (q < 3) {
      c.n = 0; c.iv = 0; c.due = today();          // học lại ngay trong phiên này
    } else {
      c.n = (c.n || 0) + 1;
      c.iv = c.n === 1 ? 1 : c.n === 2 ? 6 : Math.round((c.iv || 1) * (c.ef || 2.5));
      if (c.iv > 365) c.iv = 365;
      c.due = plusDays(c.iv);
    }
    const ef = (c.ef || 2.5) + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    c.ef = Math.max(1.3, Math.round(ef * 100) / 100);
    c.last = today();
    Store.save();
  },

  /* thống kê phân bố mức nhớ */
  breakdown() {
    const all = this.allCards();
    return {
      total: all.length,
      fresh: all.filter(c => c.n === 0).length,
      learning: all.filter(c => c.n >= 1 && c.n < 3).length,
      solid: all.filter(c => c.n >= 3).length,
      due: all.filter(c => c.due <= today()).length
    };
  },

  /* nạp toàn bộ từ vựng của một cấp (dùng khi em muốn học vượt) */
  seedLevel(levelId) {
    let n = 0;
    (LESSONS[levelId] || []).forEach(l => {
      const data = LESSON_DATA[l.id];
      if (data && data.vocab) n += seedCards(data.vocab);
    });
    return n;
  }
};
