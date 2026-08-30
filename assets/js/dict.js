/* ============================================================
   dict.js — TỪ ĐIỂN NỘI BỘ
   Không gọi API, không tốn tiền: từ điển được dựng ngay lúc chạy
   từ toàn bộ `vocab` của 114 bài trong LESSON_DATA.

   Làm được ba việc:
     1. Dict.lookup(từ)   — tra một từ, có dò cả dạng đã biến cách
     2. Dict.search(chuỗi)— tìm theo tiếng Nga hoặc tiếng Việt
     3. Dict.attach(khối) — biến mọi từ tiếng Nga trong khối HTML
                            thành từ bấm được, hiện thẻ tra nghĩa

   Cần nạp SAU core.js và sau các file data/lessons/*.js
   ============================================================ */

/* Bảng bổ sung: những từ xuất hiện dày đặc trong phần giảng nhưng không nằm
   trong bảng từ vựng của bài nào — đại từ đã biến cách, động từ bất quy tắc,
   liên từ, tiểu từ và thuật ngữ ngữ pháp. Đây chính là nhóm người học hay
   bấm vào nhất vì không đoán được dạng gốc. */
const DICT_CORE = [
  /* — đại từ nhân xưng đã biến cách — */
  ['я', 'tôi'], ['меня́', 'tôi (cách 2 và cách 4 của я)'], ['мне', 'tôi (cách 3 của я)'], ['мной', 'tôi (cách 5 của я)'],
  ['ты', 'bạn'], ['тебя́', 'bạn (cách 2 và 4 của ты)'], ['тебе́', 'bạn (cách 3 của ты)'], ['тобо́й', 'bạn (cách 5 của ты)'],
  ['он', 'anh ấy, nó'], ['его́', 'anh ấy/nó (cách 2 và 4); cũng có nghĩa "của anh ấy"'], ['ему́', 'anh ấy (cách 3)'], ['им', 'anh ấy (cách 5); hoặc "họ" (cách 3)'], ['нём', 'anh ấy (cách 6, sau giới từ)'],
  ['она́', 'cô ấy'], ['её', 'cô ấy (cách 2 và 4); cũng có nghĩa "của cô ấy"'], ['ей', 'cô ấy (cách 3 và 5)'], ['ней', 'cô ấy (sau giới từ)'],
  ['оно́', 'nó (giống trung)'], ['мы', 'chúng tôi'], ['нас', 'chúng tôi (cách 2 và 4)'], ['нам', 'chúng tôi (cách 3)'], ['на́ми', 'chúng tôi (cách 5)'],
  ['вы', 'các bạn; ngài (lịch sự)'], ['вас', 'các bạn (cách 2 và 4)'], ['вам', 'các bạn (cách 3)'], ['ва́ми', 'các bạn (cách 5)'],
  ['они́', 'họ'], ['их', 'họ (cách 2 và 4); cũng có nghĩa "của họ"'], ['и́ми', 'họ (cách 5)'], ['них', 'họ (sau giới từ)'],
  ['себя́', 'chính mình'], ['себе́', 'cho chính mình'], ['собо́й', 'với chính mình'],
  /* — đại từ nghi vấn và chỉ định — */
  ['кто', 'ai'], ['кого́', 'ai (cách 2 và 4)'], ['кому́', 'cho ai (cách 3)'], ['кем', 'với ai (cách 5)'], ['ком', 'về ai (cách 6)'],
  ['что', 'cái gì'], ['чего́', 'cái gì (cách 2)'], ['чему́', 'cho cái gì (cách 3)'], ['чем', 'bằng cái gì (cách 5); hoặc "hơn là"'], ['чём', 'về cái gì (cách 6)'],
  ['э́тот', 'cái này'], ['э́та', 'cái này (giống cái)'], ['э́то', 'đây là, cái này'], ['э́ти', 'những cái này'],
  ['э́того', 'cái này (cách 2/4)'], ['э́тому', 'cái này (cách 3)'], ['э́тим', 'cái này (cách 5)'], ['э́том', 'cái này (cách 6)'],
  ['тот', 'cái kia'], ['того́', 'cái kia (cách 2/4)'], ['тому́', 'cái kia (cách 3)'], ['тем', 'cái kia (cách 5)'], ['том', 'cái kia (cách 6)'],
  ['весь', 'toàn bộ'], ['вся', 'toàn bộ (giống cái)'], ['всё', 'tất cả, mọi thứ'], ['все', 'tất cả (số nhiều)'],
  ['всего́', 'tất cả (cách 2); hoặc "chỉ, tổng cộng"'], ['всех', 'tất cả (cách 2/4 số nhiều)'], ['всем', 'tất cả (cách 3)'], ['всеми', 'tất cả (cách 5)'],
  ['сам', 'tự mình'], ['са́мый', 'nhất (dùng tạo so sánh nhất)'], ['друго́й', 'khác'], ['ка́ждый', 'mỗi'], ['любо́й', 'bất kỳ'],
  /* — быть: động từ "là" — */
  ['быть', 'thì, là, ở (nguyên thể)'], ['есть', 'có (dạng hiện tại của быть); cũng là "ăn"'],
  ['был', 'đã là/đã có (giống đực)'], ['была́', 'đã là (giống cái)'], ['бы́ло', 'đã là (giống trung)'], ['бы́ли', 'đã là (số nhiều)'],
  ['бу́ду', 'tôi sẽ'], ['бу́дешь', 'bạn sẽ'], ['бу́дет', 'sẽ (ngôi 3 số ít)'], ['бу́дем', 'chúng ta sẽ'], ['бу́дете', 'các bạn sẽ'], ['бу́дут', 'họ sẽ'], ['будь', 'hãy là'],
  /* — động từ bất quy tắc hay gặp — */
  ['иду́', 'tôi đang đi (từ идти)'], ['идёт', 'đang đi (từ идти)'], ['идёшь', 'bạn đang đi'], ['иду́т', 'họ đang đi'],
  ['шёл', 'đã đi (giống đực, từ идти)'], ['шла', 'đã đi (giống cái)'], ['шли', 'đã đi (số nhiều)'],
  ['пришёл', 'đã đến (giống đực)'], ['пришла́', 'đã đến (giống cái)'], ['ушёл', 'đã rời đi'], ['придёт', 'sẽ đến'],
  ['хочу́', 'tôi muốn (từ хотеть)'], ['хо́чешь', 'bạn muốn'], ['хо́чет', 'muốn (ngôi 3)'], ['хоти́м', 'chúng tôi muốn'], ['хотя́т', 'họ muốn'], ['хоте́л', 'đã muốn'],
  ['могу́', 'tôi có thể (từ мочь)'], ['мо́жешь', 'bạn có thể'], ['мо́жет', 'có thể (ngôi 3)'], ['мо́гут', 'họ có thể'], ['мог', 'đã có thể'],
  ['зна́ю', 'tôi biết'], ['зна́ет', 'biết (ngôi 3)'], ['зна́ют', 'họ biết'], ['знал', 'đã biết'],
  ['ем', 'tôi ăn'], ['ест', 'ăn (ngôi 3)'], ['едя́т', 'họ ăn'], ['дать', 'đưa, cho'], ['даёт', 'đưa (ngôi 3)'],
  /* — liên từ, trạng từ, tiểu từ — */
  ['как', 'như thế nào; như'], ['е́сли', 'nếu'], ['что́бы', 'để mà'], ['потому́', 'bởi vì (đi với что)'], ['поэ́тому', 'vì vậy'],
  ['хотя́', 'mặc dù'], ['но', 'nhưng'], ['и́ли', 'hoặc'], ['зато́', 'bù lại'], ['одна́ко', 'tuy nhiên'],
  ['то́лько', 'chỉ, mới'], ['ещё', 'còn, nữa'], ['уже́', 'đã, rồi'], ['то́же', 'cũng'], ['та́кже', 'cũng, ngoài ra'],
  ['всегда́', 'luôn luôn'], ['никогда́', 'không bao giờ'], ['ча́сто', 'thường xuyên'], ['иногда́', 'đôi khi'], ['ре́дко', 'hiếm khi'],
  ['сейча́с', 'bây giờ'], ['пото́м', 'sau đó'], ['тогда́', 'lúc đó, khi đó'], ['сра́зу', 'ngay lập tức'], ['ско́ро', 'sắp'],
  ['куда́', 'đi đâu'], ['отку́да', 'từ đâu'], ['туда́', 'đến đó'], ['отту́да', 'từ đó'], ['почему́', 'tại sao'], ['заче́м', 'để làm gì'],
  ['о́чень', 'rất'], ['сли́шком', 'quá (mức)'], ['совсе́м', 'hoàn toàn'], ['почти́', 'gần như'], ['мно́го', 'nhiều'], ['ма́ло', 'ít'], ['немно́го', 'một chút'],
  ['раз', 'lần'], ['ведь', 'mà, chứ (tiểu từ nhấn điều ai cũng biết)'], ['же', 'thì, mà (tiểu từ nhấn)'], ['ли', 'liệu có (tiểu từ hỏi)'],
  ['бы', 'thì (tiểu từ giả định)'], ['не', 'không'], ['ни', 'không một… nào'], ['да', 'vâng, có'], ['нет', 'không; không có'],
  ['ну', 'thì, ừ thì (khẩu ngữ)'], ['вот', 'đây này'], ['лишь', 'chỉ'], ['да́же', 'thậm chí'], ['и́менно', 'chính là'],
  /* — thuật ngữ ngữ pháp dùng suốt trong bài giảng — */
  ['паде́ж', 'cách (của danh từ)'], ['имени́тельный', 'cách 1 — cách gọi tên, chủ ngữ'], ['роди́тельный', 'cách 2 — sở hữu, phủ định'],
  ['да́тельный', 'cách 3 — cho ai'], ['вини́тельный', 'cách 4 — tân ngữ trực tiếp'], ['твори́тельный', 'cách 5 — với ai, bằng gì'], ['предло́жный', 'cách 6 — luôn đi sau giới từ'],
  ['глаго́л', 'động từ'], ['существи́тельное', 'danh từ'], ['прилага́тельное', 'tính từ'], ['наре́чие', 'trạng từ'],
  ['предло́г', 'giới từ'], ['сою́з', 'liên từ'], ['части́ца', 'tiểu từ'], ['местоиме́ние', 'đại từ'], ['числи́тельное', 'số từ'],
  ['вид', 'thể (của động từ); cũng là "quang cảnh"'], ['соверше́нный', 'thể hoàn thành'], ['несоверше́нный', 'thể chưa hoàn thành'],
  ['род', 'giống (của danh từ)'], ['мужско́й', 'giống đực'], ['же́нский', 'giống cái'], ['сре́дний', 'giống trung'],
  ['число́', 'số (ít/nhiều); cũng là "con số, ngày"'], ['еди́нственное', 'số ít'], ['мно́жественное', 'số nhiều'],
  ['лицо́', 'ngôi (của động từ); cũng là "khuôn mặt"'], ['вре́мя', 'thì (của động từ); cũng là "thời gian"'],
  ['настоя́щее', 'thì hiện tại'], ['проше́дшее', 'thì quá khứ'], ['бу́дущее', 'thì tương lai'],
  ['оконча́ние', 'đuôi từ'], ['осно́ва', 'thân từ'], ['ко́рень', 'gốc từ'], ['приста́вка', 'tiền tố'], ['су́ффикс', 'hậu tố'],
  ['ударе́ние', 'trọng âm'], ['склоне́ние', 'sự biến cách'], ['спряже́ние', 'sự chia động từ'],
  ['прича́стие', 'tính động từ'], ['дееприча́стие', 'trạng động từ'], ['инфинити́в', 'động từ nguyên thể'],
  ['подлежа́щее', 'chủ ngữ'], ['сказу́емое', 'vị ngữ'], ['предложе́ние', 'câu; cũng là "lời đề nghị"'], ['сло́во', 'từ'],
  /* — danh từ tần suất cao khác — */
  ['год', 'năm'], ['го́да', 'năm (cách 2)'], ['году́', 'năm (cách 6)'], ['лет', 'năm (sau số từ 5 trở lên)'],
  ['челове́к', 'người'], ['лю́ди', 'mọi người'], ['де́ло', 'việc, chuyện'], ['вопро́с', 'câu hỏi'], ['отве́т', 'câu trả lời'],
  ['приме́р', 'ví dụ'], ['слу́чай', 'trường hợp'], ['ме́сто', 'chỗ, nơi'], ['часть', 'phần'], ['жизнь', 'cuộc sống'],
  ['внима́ние', 'sự chú ý'], ['мо́дель', 'mô hình, mẫu'], ['да́нные', 'dữ liệu'], ['усло́вие', 'điều kiện'], ['влия́ние', 'ảnh hưởng'],
  ['бо́льно', 'đau'], ['боль', 'cơn đau'], ['больно́й', 'bị ốm; người bệnh'],
  ['дома́шний', 'thuộc về nhà, ở nhà'], ['сове́тник', 'cố vấn'],
  ['дета́ль', 'chi tiết, linh kiện'], ['шко́ла', 'trường học'], ['окно́', 'cửa sổ'], ['ру́сский', 'tiếng Nga; người Nga']
];

const Dict = {
  ready: false,
  entries: [],      // [{ru, ruPlain, vn, note, lessons:[id], level}]
  byForm: new Map(),
  byStem: new Map(),

  /* bỏ dấu trọng âm, ё → е, viết thường */
  normw(s) {
    return String(s ?? '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/ё/g, 'е')
      .replace(/[^а-яa-z0-9-]/g, '');
  },

  /* dựng chỉ mục — chỉ chạy một lần */
  build() {
    if (this.ready) return;
    if (typeof LESSON_DATA === 'undefined') { this.ready = true; return; }

    const map = new Map();   // ruPlain → entry (gộp các bài dạy cùng một từ)

    Object.keys(LESSON_DATA).forEach(lid => {
      const lesson = LESSON_DATA[lid];
      (lesson.vocab || []).forEach(v => {
        if (!v || !v.ru) return;
        const plain = this.normw(v.ru);
        if (!plain) return;
        let e = map.get(plain);
        if (!e) {
          e = { ru: v.ru, ruPlain: plain, vn: v.vn || '', note: v.note || '', lessons: [], level: lesson.level || lid.split('-')[0] };
          map.set(plain, e);
        }
        /* bản có dấu trọng âm thì ưu tiên giữ */
        if (/[́]/.test(v.ru) && !/[́]/.test(e.ru)) e.ru = v.ru;
        if (v.vn && e.vn && !e.vn.includes(v.vn)) e.vn += '; ' + v.vn;
        else if (v.vn && !e.vn) e.vn = v.vn;
        if (v.note && !e.note) e.note = v.note;
        if (!e.lessons.includes(lid)) e.lessons.push(lid);
      });
    });

    /* bảng bổ sung — chỉ thêm khi bài học chưa dạy từ đó */
    DICT_CORE.forEach(([ru, vn]) => {
      const plain = this.normw(ru);
      if (!plain || map.has(plain)) return;
      map.set(plain, { ru, ruPlain: plain, vn, note: '', lessons: [], level: '', core: true });
    });

    this.entries = Array.from(map.values());

    /* chỉ mục dạng chính xác */
    this.entries.forEach(e => {
      if (!this.byForm.has(e.ruPlain)) this.byForm.set(e.ruPlain, []);
      this.byForm.get(e.ruPlain).push(e);
    });

    /* chỉ mục thân từ: cắt dần 1–3 chữ cuối để dò dạng đã biến cách */
    this.entries.forEach(e => {
      const w = e.ruPlain;
      for (let cut = 0; cut <= 5; cut++) {
        const stem = w.slice(0, w.length - cut);
        if (stem.length < 4) break;
        if (!this.byStem.has(stem)) this.byStem.set(stem, []);
        const arr = this.byStem.get(stem);
        if (!arr.includes(e)) arr.push(e);
      }
    });

    this.ready = true;
  },

  /* tra một từ. Trả về { exact:bool, items:[entry] } */
  lookup(word) {
    this.build();
    const q = this.normw(word);
    if (!q) return { exact: false, items: [] };

    if (this.byForm.has(q)) return { exact: true, items: this.byForm.get(q).slice(0, 4) };

    /* dò dạng biến cách: cắt dần đuôi của từ đang tra */
    const found = [];
    for (let cut = 1; cut <= 5; cut++) {
      const stem = q.slice(0, q.length - cut);
      if (stem.length < 4) break;
      (this.byStem.get(stem) || []).forEach(e => {
        /* thân từ phải chiếm phần lớn từ gốc, tránh khớp bừa */
        if (stem.length / e.ruPlain.length < 0.5) return;
        if (!found.includes(e)) found.push(e);
      });
      if (found.length) break;
    }
    found.sort((a, b) => Math.abs(a.ruPlain.length - q.length) - Math.abs(b.ruPlain.length - q.length));
    return { exact: false, items: found.slice(0, 4) };
  },

  /* tìm kiếm cho trang từ điển: khớp cả tiếng Nga lẫn tiếng Việt */
  search(text, limit) {
    this.build();
    const raw = String(text || '').trim().toLowerCase();
    if (!raw) return [];
    const q = this.normw(raw);
    const vi = raw.normalize('NFC');
    const out = [];

    this.entries.forEach(e => {
      let score = -1;
      if (q) {
        if (e.ruPlain === q) score = 0;
        else if (e.ruPlain.startsWith(q)) score = 1;
        else if (e.ruPlain.includes(q)) score = 2;
      }
      if (score < 0 && vi.length >= 2) {
        const evn = e.vn.toLowerCase();
        if (evn === vi) score = 0;
        else if (evn.startsWith(vi)) score = 1;
        else if (evn.includes(vi)) score = 3;
      }
      if (score >= 0) out.push({ e, score });
    });

    out.sort((a, b) => a.score - b.score || a.e.ruPlain.localeCompare(b.e.ruPlain));
    return out.slice(0, limit || 60).map(x => x.e);
  },

  /* ---------- thẻ tra nghĩa nổi ---------- */
  levelName(lv) {
    const l = (typeof COURSE !== 'undefined') && COURSE.levels.find(x => x.id === lv);
    return l ? l.code : String(lv || '').toUpperCase();
  },

  cardHTML(word, res) {
    const inDeck = w => { try { return !!Store.load().cards[w]; } catch (e) { return false; } };

    if (!res.items.length) {
      return `<div class="dict-head">
          <b class="dict-w">${esc(word)}</b>
          ${speakBtn(word, word)}
        </div>
        <p class="dict-miss">Từ này chưa có trong từ điển của web.
        Có thể nó là một dạng đã chia của động từ, hoặc là từ chưa được dạy ở bài nào.</p>`;
    }

    const rows = res.items.map(e => {
      const lessons = e.lessons.slice(0, 3).map(lid => {
        const lv = lid.split('-')[0];
        const meta = (typeof LESSONS !== 'undefined' && (LESSONS[lv] || []).find(l => l.id === lid)) || null;
        return `<a class="dict-lesson" href="hoc.html?id=${esc(lid)}">${esc(this.levelName(lv))} · ${esc(meta ? meta.title : lid)}</a>`;
      }).join('');
      const has = inDeck(e.ru);
      return `<div class="dict-entry">
        <div class="dict-head">
          <b class="dict-w">${esc(e.ru)}</b>
          ${speakBtn(e.ru, e.ru)}
          <span class="dict-lv">${e.core ? 'từ cơ bản' : esc(this.levelName(e.level))}</span>
        </div>
        <div class="dict-vn">${esc(e.vn)}</div>
        ${e.note ? `<div class="dict-note">${esc(e.note)}</div>` : ''}
        <div class="dict-lessons">${lessons}</div>
        <button class="dict-add${has ? ' has' : ''}" type="button" data-add="${escAttr(e.ru)}" data-vn="${escAttr(e.vn)}"${has ? ' disabled' : ''}>
          ${has ? '✓ đã có trong bộ thẻ' : '+ thêm vào thẻ ôn tập'}
        </button>
      </div>`;
    }).join('');

    const head = res.exact ? '' :
      `<p class="dict-guess">Trong bài từ này đang ở dạng <b>${esc(word)}</b>. Dạng gốc có lẽ là:</p>`;
    return head + rows;
  },

  closePop() {
    const p = document.getElementById('dict-pop');
    if (p) p.remove();
  },

  showPop(word, atEl) {
    this.closePop();
    const res = this.lookup(word);
    const pop = document.createElement('div');
    pop.id = 'dict-pop';
    pop.className = 'dict-pop';
    pop.innerHTML = `<button class="dict-x" type="button" aria-label="Đóng">×</button>` + this.cardHTML(word, res);
    document.body.appendChild(pop);

    /* đặt thẻ ngay dưới từ vừa bấm, không tràn ra ngoài màn hình */
    const r = atEl.getBoundingClientRect();
    const w = pop.offsetWidth, h = pop.offsetHeight;
    let left = r.left + window.scrollX + r.width / 2 - w / 2;
    left = Math.max(10 + window.scrollX, Math.min(left, window.scrollX + document.documentElement.clientWidth - w - 10));
    let top = r.bottom + window.scrollY + 8;
    if (r.bottom + h + 16 > window.innerHeight && r.top > h + 16) top = r.top + window.scrollY - h - 8;
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';

    pop.querySelector('.dict-x').onclick = () => this.closePop();
  },

  /* biến mọi từ tiếng Nga trong `root` thành từ bấm được */
  attach(root) {
    if (!root) return;
    this.build();

    const RU = /[а-яёА-ЯЁ][а-яёА-ЯЁ́-]*/g;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!/[а-яёА-ЯЁ]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        const p = n.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (p.closest('button, a, input, textarea, select, .dict-pop, .dict-word, .kb')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      const text = node.nodeValue;
      RU.lastIndex = 0;
      let m, last = 0;
      const frag = document.createDocumentFragment();
      while ((m = RU.exec(text)) !== null) {
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const span = document.createElement('span');
        span.className = 'dict-word';
        span.textContent = m[0];
        frag.appendChild(span);
        last = m.index + m[0].length;
      }
      if (!last) return;
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }
};

/* ---------- gắn sự kiện một lần cho cả trang ---------- */
document.addEventListener('click', e => {
  const w = e.target.closest('.dict-word');
  if (w) { Dict.showPop(w.textContent, w); return; }

  const add = e.target.closest('[data-add]');
  if (add) {
    const ru = add.getAttribute('data-add');
    const vn = add.getAttribute('data-vn') || '';
    const d = Store.load();
    if (!d.cards[ru]) {
      d.cards[ru] = { vn, ef: 2.5, n: 0, iv: 0, due: today() };
      Store.save();
    }
    add.classList.add('has');
    add.disabled = true;
    add.textContent = '✓ đã thêm vào bộ thẻ';
    return;
  }

  if (!e.target.closest('.dict-pop')) Dict.closePop();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') Dict.closePop(); });
