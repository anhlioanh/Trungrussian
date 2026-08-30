/* ============================================================
   a2.js — NỘI DUNG CẤP A2 (Cơ sở / Базовый уровень)
   ============================================================ */

/* ---------------------------------------------------------- BÀI 1 */
LESSON_DATA['a2-01'] = {
  level: 'a2',
  intro: 'Chào mừng em lên A2. Bài đầu tiên là <b>khái niệm khó nhất của tiếng Nga</b> — và cũng là thứ khiến tiếng Nga khác hẳn tiếng Việt: <b>thể động từ</b>. Mỗi động từ tiếng Nga có <b>hai bản</b>, và chọn sai bản là câu đúng ngữ pháp nhưng sai ý.',
  blocks: [
    { t: 'h', text: 'Hai bản của cùng một động từ' },
    { t: 'p', html: 'Tiếng Việt nói "tôi đọc sách" và "tôi đọc xong sách" — thêm chữ "xong". Tiếng Nga không thêm chữ, mà <b>đổi hẳn động từ</b>:' },
    { t: 'table', head: ['Chưa hoàn thành (НСВ)', 'Hoàn thành (СВ)', 'Nghĩa'], rows: [
      ['чита́ть', 'прочита́ть', 'đọc'],
      ['писа́ть', 'написа́ть', 'viết'],
      ['де́лать', 'сде́лать', 'làm'],
      ['смотре́ть', 'посмотре́ть', 'xem'],
      ['покупа́ть', 'купи́ть', 'mua'],
      ['говори́ть', 'сказа́ть', 'nói'],
      ['брать', 'взять', 'lấy'],
      ['дава́ть', 'дать', 'đưa'],
      ['начина́ть', 'нача́ть', 'bắt đầu'],
      ['у́жинать', 'поу́жинать', 'ăn tối']
    ]},
    { t: 'h', text: 'Khác nhau ở chỗ nào' },
    { t: 'table', head: ['', 'Chưa hoàn thành', 'Hoàn thành'], rows: [
      ['Nhìn vào', 'Quá trình, việc đang diễn ra', 'Kết quả, việc đã xong'],
      ['Số lần', 'Lặp lại, thường xuyên', 'Một lần duy nhất'],
      ['Câu hỏi hợp', 'Làm gì? Làm bao lâu?', 'Làm xong chưa? Kết quả ra sao?'],
      ['Ví dụ', 'Вчера́ я <b>чита́л</b> кни́гу. (đã ngồi đọc)', 'Вчера́ я <b>прочита́л</b> кни́гу. (đọc hết rồi)']
    ]},
    { t: 'warn', html: 'Đây là chỗ người Việt sai nhiều nhất ở A2, vì tiếng Việt dùng chữ <b>"đã"</b> cho cả hai. <span class="ru">Вчера́ я чита́л</span> = "hôm qua tôi có đọc" (không nói xong hay chưa). <span class="ru">Вчера́ я прочита́л</span> = "hôm qua tôi đọc xong". Cả hai đều dịch là "đã đọc".' },
    { t: 'h', text: 'Điều lạ nhất: thể hoàn thành KHÔNG có thì hiện tại' },
    { t: 'p', html: 'Nghĩ kỹ thì hợp lý: việc đã xong thì không thể đang diễn ra. Nên bảng thì của hai thể khác nhau:' },
    { t: 'table', head: ['Thì', 'чита́ть (НСВ)', 'прочита́ть (СВ)'], rows: [
      ['Quá khứ', 'чита́л — đã đọc (quá trình)', 'прочита́л — đã đọc xong'],
      ['Hiện tại', 'чита́ю — đang đọc', '<b>không có</b>'],
      ['Tương lai', 'бу́ду чита́ть — sẽ ngồi đọc', 'прочита́ю — sẽ đọc xong']
    ]},
    { t: 'tip', html: 'Nhìn dòng cuối cho kỹ: <span class="ru">прочита́ю</span> trông y như thì hiện tại nhưng lại mang nghĩa <b>tương lai</b>. Đó là "tương lai đơn" mà anh hẹn em ở bài A1-11. Giờ em có đủ hai kiểu tương lai: <span class="ru">бу́ду чита́ть</span> (sẽ đọc, chưa biết xong không) và <span class="ru">прочита́ю</span> (sẽ đọc xong).' },
    { t: 'h', text: 'Từ chỉ dấu — nghe là biết chọn thể nào' },
    { t: 'table', head: ['Chọn НСВ khi có', 'Chọn СВ khi có'], rows: [
      ['ча́сто (thường), обы́чно (thường thì)', 'вдруг (bỗng nhiên)'],
      ['ка́ждый день (mỗi ngày)', 'уже́ (đã… rồi)'],
      ['всегда́ (luôn luôn)', 'наконе́ц (cuối cùng thì)'],
      ['до́лго (lâu), два часа́ (suốt hai tiếng)', 'бы́стро (nhanh gọn), сра́зу (ngay lập tức)'],
      ['иногда́ (thỉnh thoảng)', 'вчера́ ве́чером (tối qua — một lần)']
    ]},
    { t: 'words', items: [
      { ru: 'Я ча́сто чита́ю кни́ги.', vn: 'Tôi hay đọc sách. (lặp lại → НСВ)' },
      { ru: 'Я уже́ прочита́л э́ту кни́гу.', vn: 'Tôi đọc xong quyển này rồi. (kết quả → СВ)' },
      { ru: 'Он до́лго писа́л письмо́.', vn: 'Anh ấy viết thư rất lâu. (quá trình → НСВ)' },
      { ru: 'Он написа́л письмо́ и пошёл спать.', vn: 'Anh ấy viết xong thư rồi đi ngủ. (xong → СВ)' },
      { ru: 'Ка́ждый ве́чер мы у́жинали вме́сте.', vn: 'Tối nào chúng tôi cũng ăn tối cùng nhau.' },
      { ru: 'Вчера́ мы поу́жинали и посмотре́ли фильм.', vn: 'Hôm qua chúng tôi ăn tối xong rồi xem phim.' }
    ]},
    { t: 'note', html: 'Đừng cố học thuộc quy tắc trong một buổi. Thể động từ là thứ người học tiếng Nga mất <b>hàng năm</b> để nắm chắc, kể cả người giỏi. Ở A2 em chỉ cần: học từ mới thì học <b>cả cặp</b>, và nhớ được mấy từ chỉ dấu ở bảng trên.' }
  ],
  vocab: [
    { ru: 'прочита́ть', vn: 'đọc xong' }, { ru: 'написа́ть', vn: 'viết xong' },
    { ru: 'сде́лать', vn: 'làm xong' }, { ru: 'посмотре́ть', vn: 'xem xong' },
    { ru: 'купи́ть', vn: 'mua (xong)' }, { ru: 'сказа́ть', vn: 'nói (một lần)' },
    { ru: 'взять', vn: 'lấy' }, { ru: 'нача́ть', vn: 'bắt đầu' },
    { ru: 'уже́', vn: 'đã… rồi' }, { ru: 'вдруг', vn: 'bỗng nhiên' },
    { ru: 'наконе́ц', vn: 'cuối cùng thì' }, { ru: 'сра́зу', vn: 'ngay lập tức' },
    { ru: 'обы́чно', vn: 'thường thì' }, { ru: 'иногда́', vn: 'thỉnh thoảng' }
  ],
  ex: [
    { t: 'choice', q: 'Chọn đúng: Ка́ждый день я ___ газе́ту.', options: ['прочита́ю', 'чита́ю', 'прочита́л', 'прочита́ть'], a: 1, why: '“Mỗi ngày” là hành động lặp lại → thể chưa hoàn thành, thì hiện tại: читаю.' },
    { t: 'choice', q: 'Chọn đúng: Я уже́ ___ э́ту кни́гу, мо́жешь взять.', options: ['чита́л', 'прочита́л', 'чита́ю', 'бу́ду чита́ть'], a: 1, why: '“уже” báo kết quả đã có — sách đã đọc xong → прочитал.' },
    { t: 'choice', q: 'Thể hoàn thành <b>không có</b> thì nào?', options: ['Quá khứ', 'Hiện tại', 'Tương lai', 'Không thiếu thì nào'], a: 1, why: 'Việc đã hoàn thành thì không thể đang diễn ra, nên thể hoàn thành chỉ có quá khứ và tương lai.' },
    { t: 'choice', q: '<span class="ru ru-big">прочита́ю</span> mang nghĩa gì?', options: ['Tôi đang đọc', 'Tôi đã đọc xong', 'Tôi sẽ đọc xong', 'Tôi hay đọc'], a: 2, why: 'Thể hoàn thành chia như hiện tại nhưng nghĩa là tương lai — “tương lai đơn”.' },
    { t: 'choice', q: 'Câu nào nhấn mạnh <b>quá trình</b> chứ không phải kết quả?', options: ['Он написа́л письмо́.', 'Он до́лго писа́л письмо́.', 'Он напи́шет письмо́.', 'Письмо́ напи́сано.'], a: 1, why: '“долго” + thể chưa hoàn thành = kể về quá trình kéo dài, không nói xong hay chưa.' },
    { t: 'match', q: 'Nối cặp thể:', pairs: [['де́лать', 'сде́лать'], ['покупа́ть', 'купи́ть'], ['говори́ть', 'сказа́ть'], ['брать', 'взять']] },
    { t: 'type', q: 'Điền thể hoàn thành của <span class="ru">смотре́ть</span>:', a: 'посмотреть', alt: ['посмотре́ть'], hint: 'Thêm tiền tố по-.' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'я уже прочитал', a: 'я уже прочитал' }
  ]
};

/* ---------------------------------------------------------- BÀI 2 */
LESSON_DATA['a2-02'] = {
  level: 'a2',
  intro: 'Ở A1 em học bốn động từ "đi". Bây giờ mỗi động từ ấy nhận thêm <b>tiền tố</b> — và mỗi tiền tố đổi hẳn hướng đi. Học xong bài này em nói chính xác được: đến, rời khỏi, đi vào, đi ra, băng qua, ghé qua.',
  blocks: [
    { t: 'h', text: 'Bảng tiền tố' },
    { t: 'table', head: ['Tiền tố', 'Nghĩa', 'Đi bộ', 'Đi xe'], rows: [
      ['по-', 'bắt đầu đi, lên đường', 'пойти́', 'пое́хать'],
      ['при-', 'đến nơi', 'прийти́', 'прие́хать'],
      ['у-', 'rời đi hẳn', 'уйти́', 'уе́хать'],
      ['в-', 'đi vào trong', 'войти́', 'въе́хать'],
      ['вы-', 'đi ra ngoài', 'вы́йти', 'вы́ехать'],
      ['пере-', 'băng qua, chuyển sang', 'перейти́', 'перее́хать'],
      ['под-', 'tiến lại gần', 'подойти́', 'подъе́хать'],
      ['от-', 'lùi ra xa', 'отойти́', 'отъе́хать'],
      ['до-', 'đi đến tận nơi', 'дойти́', 'дое́хать'],
      ['за-', 'ghé qua chốc lát', 'зайти́', 'зае́хать']
    ]},
    { t: 'tip', html: 'Nhìn kỹ: tiền tố tiếng Nga hoạt động y như các từ chỉ hướng của tiếng Việt — vào, ra, qua, lại, tới, đi. Chỉ khác là chúng dính vào đầu động từ chứ không đứng riêng.' },
    { t: 'h', text: 'Câu thật' },
    { t: 'words', items: [
      { ru: 'Я пошёл в магази́н.', vn: 'Tôi đi ra cửa hàng. (lên đường)' },
      { ru: 'Он пришёл домо́й в семь часо́в.', vn: 'Anh ấy về đến nhà lúc 7 giờ.' },
      { ru: 'Она́ уже́ ушла́.', vn: 'Cô ấy đi rồi. (không còn ở đây)' },
      { ru: 'Войди́те, пожа́луйста!', vn: 'Mời vào ạ!' },
      { ru: 'Он вы́шел на мину́ту.', vn: 'Anh ấy ra ngoài một phút.' },
      { ru: 'Перейди́те доро́гу на светофо́ре.', vn: 'Anh sang đường ở chỗ đèn giao thông.' },
      { ru: 'Подойди́те сюда́!', vn: 'Lại đây!' },
      { ru: 'Мы дое́хали до це́нтра за полчаса́.', vn: 'Chúng tôi đi tới trung tâm mất nửa tiếng.' },
      { ru: 'Зайди́ ко мне ве́чером.', vn: 'Tối ghé qua chỗ tớ nhé.' },
      { ru: 'Ле́том я уе́ду во Вьетна́м.', vn: 'Mùa hè tôi sẽ về Việt Nam.' }
    ]},
    { t: 'h', text: 'Điều quan trọng: tiền tố tạo ra cặp thể mới' },
    { t: 'p', html: 'Động từ chuyển động có tiền tố lập tức trở thành <b>thể hoàn thành</b>, và có bản chưa hoàn thành riêng của nó:' },
    { t: 'table', head: ['Chưa hoàn thành', 'Hoàn thành', 'Nghĩa'], rows: [
      ['приходи́ть', 'прийти́', 'đến (bộ)'],
      ['уходи́ть', 'уйти́', 'rời đi (bộ)'],
      ['входи́ть', 'войти́', 'đi vào'],
      ['выходи́ть', 'вы́йти', 'đi ra'],
      ['приезжа́ть', 'прие́хать', 'đến (xe)'],
      ['уезжа́ть', 'уе́хать', 'rời đi (xe)']
    ]},
    { t: 'words', items: [
      { ru: 'Он ка́ждый день прихо́дит в во́семь.', vn: 'Ngày nào anh ấy cũng đến lúc 8 giờ. (lặp lại)' },
      { ru: 'Он пришёл в во́семь.', vn: 'Anh ấy đến lúc 8 giờ. (một lần, hôm đó)' }
    ]},
    { t: 'warn', html: 'Chú ý chính tả hai từ hay viết sai: <span class="ru"><b>прийти́</b></span> (có chữ й) và <span class="ru"><b>вы́йти</b></span> (trọng âm rơi vào <b>вы</b>, khác mọi tiền tố còn lại). Tiền tố <b>вы-</b> luôn kéo trọng âm về mình ở thể hoàn thành.' },
    { t: 'h', text: 'Hội thoại' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Ты куда́ пошёл?', vn: 'Cậu đi đâu đấy?' },
      { who: 'Б', ru: 'Вы́йду на мину́ту, зайду́ в апте́ку.', vn: 'Tớ ra ngoài một lát, ghé qua hiệu thuốc.' },
      { who: 'А', ru: 'Когда́ придёшь?', vn: 'Khi nào cậu về?' },
      { who: 'Б', ru: 'Че́рез полчаса́. Ты никуда́ не уходи́!', vn: 'Nửa tiếng nữa. Cậu đừng đi đâu đấy!' }
    ]}
  ],
  vocab: [
    { ru: 'прийти́', vn: 'đến nơi (bộ)' }, { ru: 'уйти́', vn: 'rời đi (bộ)' },
    { ru: 'войти́', vn: 'đi vào' }, { ru: 'вы́йти', vn: 'đi ra' },
    { ru: 'перейти́', vn: 'băng qua' }, { ru: 'подойти́', vn: 'lại gần' },
    { ru: 'дойти́', vn: 'đi đến tận nơi' }, { ru: 'зайти́', vn: 'ghé qua' },
    { ru: 'прие́хать', vn: 'đến nơi (xe)' }, { ru: 'уе́хать', vn: 'đi khỏi (xe)' },
    { ru: 'че́рез', vn: 'sau (khoảng thời gian)' }, { ru: 'полчаса́', vn: 'nửa tiếng' }
  ],
  ex: [
    { t: 'choice', q: 'Chọn đúng: Он ___ в ко́мнату и сел.', options: ['вы́шел', 'вошёл', 'ушёл', 'подошёл'], a: 1, why: 'в- = đi vào trong: вошёл в комнату.' },
    { t: 'choice', q: '"Cô ấy đi rồi, không còn ở đây" nói là:', options: ['Она́ пришла́.', 'Она́ ушла́.', 'Она́ вошла́.', 'Она́ подошла́.'], a: 1, why: 'у- nghĩa là rời đi hẳn.' },
    { t: 'choice', q: 'Tiền tố nào nghĩa là "ghé qua chốc lát"?', options: ['при-', 'за-', 'до-', 'от-'], a: 1, why: 'зайти / заехать = tạt qua, ghé qua.' },
    { t: 'type', q: 'Điền: ___ доро́гу на светофо́ре. (hãy băng qua đường)', a: 'перейдите', alt: ['перейди́те', 'перейди'], hint: 'Tiền tố пере- + thể mệnh lệnh lịch sự.' },
    { t: 'choice', q: 'Từ nào có trọng âm rơi vào <b>tiền tố</b>?', options: ['прийти́', 'уйти́', 'вы́йти', 'зайти́'], a: 2, why: 'Tiền tố вы- luôn kéo trọng âm về mình ở thể hoàn thành: вы́йти, вы́шел.' },
    { t: 'choice', q: 'Câu nào nói về việc <b>lặp lại hằng ngày</b>?', options: ['Он пришёл в во́семь.', 'Он прихо́дит в во́семь.', 'Он придёт в во́семь.', 'Он ушёл в во́семь.'], a: 1, why: 'приходит là thể chưa hoàn thành, thì hiện tại → hành động lặp lại.' },
    { t: 'match', q: 'Nối:', pairs: [['при-', 'đến nơi'], ['у-', 'rời đi'], ['вы-', 'đi ra'], ['под-', 'lại gần']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'он пришёл домой', a: 'он пришёл домой' }
  ]
};

/* ---------------------------------------------------------- BÀI 3 */
LESSON_DATA['a2-03'] = {
  level: 'a2',
  intro: 'Đến giờ câu của em vẫn ngắn. <span class="ru">кото́рый</span> là chiếc cầu nối hai câu thành một — "quyển sách <b>mà</b> tôi đọc hôm qua". Nắm được nó là văn của em dài ra và người lớn hẳn.',
  blocks: [
    { t: 'h', text: 'Quy tắc vàng — hai nửa độc lập nhau' },
    { t: 'p', html: '<span class="ru">кото́рый</span> có hai thứ phải quyết cùng lúc, và <b>chúng đến từ hai chỗ khác nhau</b>:' },
    { t: 'table', head: ['Cái gì', 'Lấy từ đâu'], rows: [
      ['<b>Giống và số</b> (который / которая / которое / которые)', 'Từ danh từ ở <b>vế trước</b> mà nó thay thế'],
      ['<b>Cách</b> (какой падеж)', 'Từ vai trò của nó trong <b>vế sau</b>, chính mệnh đề chứa nó']
    ]},
    { t: 'tip', html: 'Đây là chỗ ai cũng vấp lúc đầu. Cứ hỏi hai câu tách rời: <b>(1)</b> "Nó thay cho từ nào?" → chọn giống. <b>(2)</b> "Trong nửa câu sau nó làm gì?" → chọn cách. Hỏi xong hai câu là ra đáp án.' },
    { t: 'h', text: 'Xem từng ví dụ' },
    { t: 'words', items: [
      { ru: 'Э́то студе́нт, кото́рый живёт здесь.', vn: 'Đây là cậu sinh viên (mà) sống ở đây. — thay студент (đực), làm chủ ngữ → cách 1' },
      { ru: 'Э́то кни́га, кото́рую я чита́л.', vn: 'Đây là quyển sách (mà) tôi đã đọc. — thay книга (cái), làm tân ngữ → cách 4' },
      { ru: 'Э́то дом, в кото́ром я живу́.', vn: 'Đây là ngôi nhà (mà) tôi ở. — thay дом (đực), sau в chỉ nơi chốn → cách 6' },
      { ru: 'Э́то друг, кото́рому я звони́л.', vn: 'Đây là người bạn (mà) tôi đã gọi. — звонить đòi cách 3' },
      { ru: 'Э́то же́нщина, о кото́рой я говори́л.', vn: 'Đây là người phụ nữ (mà) tôi đã nhắc tới. — sau о → cách 6' },
      { ru: 'Э́то лю́ди, кото́рые рабо́тают со мной.', vn: 'Đây là những người làm việc cùng tôi. — số nhiều, chủ ngữ' }
    ]},
    { t: 'h', text: 'Bảng dạng đầy đủ' },
    { t: 'table', head: ['Cách', 'Đực', 'Cái', 'Trung', 'Số nhiều'], rows: [
      ['1', 'кото́рый', 'кото́рая', 'кото́рое', 'кото́рые'],
      ['2', 'кото́рого', 'кото́рой', 'кото́рого', 'кото́рых'],
      ['3', 'кото́рому', 'кото́рой', 'кото́рому', 'кото́рым'],
      ['4 (vật)', 'кото́рый', 'кото́рую', 'кото́рое', 'кото́рые'],
      ['4 (người)', 'кото́рого', 'кото́рую', '—', 'кото́рых'],
      ['5', 'кото́рым', 'кото́рой', 'кото́рым', 'кото́рыми'],
      ['6', 'о кото́ром', 'о кото́рой', 'о кото́ром', 'о кото́рых']
    ]},
    { t: 'warn', html: 'Trong tiếng Nga, <b>luôn có dấu phẩy</b> trước <span class="ru">кото́рый</span>. Không có ngoại lệ. Người Nga viết sai chỗ này bị coi là cẩu thả, nên em cứ đặt dấu phẩy cho quen tay.' },
    { t: 'h', text: 'Giới từ đứng trước, không đứng sau' },
    { t: 'p', html: 'Tiếng Anh cho phép "the house I live <b>in</b>". Tiếng Nga thì không — giới từ luôn đi liền trước <span class="ru">кото́рый</span>:' },
    { t: 'words', items: [
      { ru: 'дом, <b>в</b> кото́ром я живу́', vn: 'ngôi nhà tôi đang ở' },
      { ru: 'друг, <b>с</b> кото́рым я учи́лся', vn: 'người bạn tôi từng học cùng' },
      { ru: 'кни́га, <b>о</b> кото́рой все говоря́т', vn: 'quyển sách mà ai cũng nhắc tới' }
    ]}
  ],
  vocab: [
    { ru: 'кото́рый', vn: 'mà, người mà, cái mà' }, { ru: 'же́нщина', vn: 'phụ nữ' },
    { ru: 'мужчи́на', vn: 'đàn ông' }, { ru: 'лю́ди', vn: 'mọi người' },
    { ru: 'учи́ться', vn: 'học (ở đâu)' }, { ru: 'сосе́д', vn: 'hàng xóm' }
  ],
  ex: [
    { t: 'choice', q: 'Điền: Э́то кни́га, ___ я чита́л вчера́.', options: ['кото́рый', 'кото́рая', 'кото́рую', 'кото́рой'], a: 2, why: 'книга là giống cái (→ котор-ая họ), nhưng ở vế sau nó là tân ngữ của читал → cách 4: которую.' },
    { t: 'choice', q: 'Điền: Э́то дом, в ___ я живу́.', options: ['кото́рый', 'кото́ром', 'кото́рого', 'кото́рым'], a: 1, why: 'Sau giới từ в chỉ nơi chốn là cách 6: в котором.' },
    { t: 'choice', q: 'Giống của <span class="ru">кото́рый</span> lấy từ đâu?', options: ['Từ chủ ngữ của cả câu', 'Từ danh từ ở vế trước mà nó thay thế', 'Từ động từ vế sau', 'Luôn là giống đực'], a: 1, why: 'Giống và số lấy từ danh từ được thay; còn cách thì lấy từ vai trò trong vế sau.' },
    { t: 'choice', q: 'Điền: Э́то друг, ___ я звони́л вчера́.', options: ['кото́рый', 'кото́рого', 'кото́рому', 'кото́рым'], a: 2, why: 'звонить đòi cách 3 → которому.' },
    { t: 'choice', q: 'Trong tiếng Nga, trước <span class="ru">кото́рый</span> thì:', options: ['Không bao giờ có dấu phẩy', 'Luôn có dấu phẩy', 'Tuỳ câu dài ngắn', 'Chỉ có dấu phẩy khi viết trang trọng'], a: 1, why: 'Luôn luôn có dấu phẩy, không ngoại lệ.' },
    { t: 'type', q: 'Điền: Э́то лю́ди, ___ рабо́тают со мной. (số nhiều, chủ ngữ)', a: 'которые', alt: ['кото́рые'], hint: 'Số nhiều, cách 1.' },
    { t: 'match', q: 'Nối:', pairs: [['кото́рую', 'cái mà (tân ngữ, giống cái)'], ['в кото́ром', 'trong cái mà (giống đực)'], ['кото́рому', 'cho người mà'], ['с кото́рым', 'với người mà']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'это книга которую я читал', a: 'это книга которую я читал' }
  ]
};

/* ---------------------------------------------------------- BÀI 4 */
LESSON_DATA['a2-04'] = {
  level: 'a2',
  intro: 'Vì sao, cho nên, để mà — những chữ nối khiến em nói được <b>lý do</b> chứ không chỉ kể sự việc. Bài này ngắn nhưng dùng đến trong mọi cuộc trò chuyện tử tế.',
  blocks: [
    { t: 'h', text: 'Nguyên nhân và kết quả — đừng lẫn hai từ' },
    { t: 'table', head: ['Từ', 'Nghĩa', 'Đặt ở đâu', 'Ví dụ'], rows: [
      ['потому́ что', 'bởi vì', 'trước <b>nguyên nhân</b>', 'Я не пришёл, <b>потому́ что</b> был бо́лен.'],
      ['поэ́тому', 'cho nên', 'trước <b>kết quả</b>', 'Я был бо́лен, <b>поэ́тому</b> не пришёл.'],
      ['так как', 'bởi lẽ', 'thường mở đầu câu', '<b>Так как</b> был дождь, мы оста́лись до́ма.'],
      ['из-за + cách 2', 'tại, do (điều xấu)', 'trước danh từ', 'Из-за дождя́ мы не пое́хали.'],
      ['благодаря́ + cách 3', 'nhờ có (điều tốt)', 'trước danh từ', 'Благодаря́ дру́гу я нашёл рабо́ту.']
    ]},
    { t: 'warn', html: 'Cặp <span class="ru">потому́ что</span> ↔ <span class="ru">поэ́тому</span> ngược nhau hoàn toàn. Nhớ mẹo: <b>потому что</b> chỉ về phía sau (nguyên nhân), <b>поэтому</b> chỉ về phía trước (hệ quả). Nói nhầm là câu thành vô nghĩa.' },
    { t: 'note', html: '<span class="ru">из-за</span> dùng cho chuyện <b>xấu</b>, <span class="ru">благодаря́</span> dùng cho chuyện <b>tốt</b>. Nói <span class="ru">благодаря́ боле́зни</span> (nhờ có bệnh) là người Nga bật cười — trừ khi em cố tình đùa.' },
    { t: 'h', text: 'Để làm gì — hai kiểu ЧТОБЫ' },
    { t: 'p', html: 'Đây là điểm ngữ pháp thật sự của bài. <span class="ru">что́бы</span> có <b>hai cách dùng khác hẳn nhau</b>, chọn theo một câu hỏi duy nhất: <b>hai vế có cùng một người làm không?</b>' },
    { t: 'table', head: ['Trường hợp', 'Cấu trúc', 'Ví dụ'], rows: [
      ['<b>Cùng một người</b>', 'что́бы + <b>nguyên thể</b>', 'Я пришёл, что́бы <b>поговори́ть</b> с тобо́й.<br><span class="muted">Tôi đến để nói chuyện với cậu. (tôi đến, tôi nói)</span>'],
      ['<b>Hai người khác nhau</b>', 'что́бы + <b>dạng quá khứ</b>', 'Я хочу́, что́бы ты <b>пришёл</b>.<br><span class="muted">Tôi muốn cậu đến. (tôi muốn, cậu đến)</span>']
    ]},
    { t: 'warn', html: 'Vế sau <span class="ru">что́бы</span> ở trường hợp thứ hai <b>trông giống quá khứ nhưng không phải quá khứ</b>. <span class="ru">Я хочу́, что́бы ты пришёл</span> nói về <b>tương lai</b> — chỉ là tiếng Nga mượn hình thức quá khứ cho mục đích này. Người Việt hay dịch nhầm thành "tôi muốn cậu đã đến".' },
    { t: 'words', items: [
      { ru: 'Я учу́ ру́сский, что́бы учи́ться в Росси́и.', vn: 'Tôi học tiếng Nga để đi học ở Nga. (cùng người)' },
      { ru: 'Роди́тели хотя́т, что́бы я учи́лся.', vn: 'Bố mẹ muốn tôi đi học. (khác người)' },
      { ru: 'Скажи́, что́бы он позвони́л мне.', vn: 'Bảo anh ấy gọi cho tôi nhé.' },
      { ru: 'Я встал ра́но, что́бы не опозда́ть.', vn: 'Tôi dậy sớm để khỏi muộn.' }
    ]},
    { t: 'h', text: 'Vài từ nối hay dùng nữa' },
    { t: 'words', items: [
      { ru: 'но', vn: 'nhưng' }, { ru: 'а', vn: 'còn, thì (đối chiếu nhẹ)' },
      { ru: 'и́ли', vn: 'hoặc' }, { ru: 'то́же', vn: 'cũng (khẳng định)' },
      { ru: 'та́кже', vn: 'cũng, ngoài ra' }, { ru: 'зато́', vn: 'bù lại' },
      { ru: 'хотя́', vn: 'mặc dù' }, { ru: 'е́сли', vn: 'nếu' }
    ]},
    { t: 'note', html: 'Phân biệt <span class="ru">но</span> và <span class="ru">а</span>: <span class="ru">но</span> là "nhưng" đối lập thật (<span class="ru">Ма́ленький, но краси́вый</span> — nhỏ nhưng đẹp), còn <span class="ru">а</span> chỉ là "còn" so sánh hai bên (<span class="ru">Я студе́нт, а он врач</span> — tôi là sinh viên, còn anh ấy là bác sĩ).' }
  ],
  vocab: [
    { ru: 'потому́ что', vn: 'bởi vì' }, { ru: 'поэ́тому', vn: 'cho nên' },
    { ru: 'так как', vn: 'bởi lẽ' }, { ru: 'из-за', vn: 'tại, do (điều xấu)' },
    { ru: 'благодаря́', vn: 'nhờ có' }, { ru: 'что́бы', vn: 'để, để mà' },
    { ru: 'хотя́', vn: 'mặc dù' }, { ru: 'зато́', vn: 'bù lại' },
    { ru: 'бо́лен / больна́', vn: 'ốm (nam / nữ)' }, { ru: 'опозда́ть', vn: 'đến muộn' }
  ],
  ex: [
    { t: 'choice', q: 'Điền: Я был бо́лен, ___ не пришёл.', options: ['потому́ что', 'поэ́тому', 'что́бы', 'хотя́'], a: 1, why: 'Vế sau là kết quả → поэтому (cho nên).' },
    { t: 'choice', q: 'Điền: Я не пришёл, ___ был бо́лен.', options: ['потому́ что', 'поэ́тому', 'что́бы', 'и́ли'], a: 0, why: 'Vế sau là nguyên nhân → потому что (bởi vì).' },
    { t: 'choice', q: 'Điền: Я хочу́, что́бы ты ___ .', options: ['прийти́', 'придёшь', 'пришёл', 'приходи́шь'], a: 2, why: 'Hai vế khác người → чтобы + dạng quá khứ, dù ý nói tương lai.' },
    { t: 'choice', q: 'Điền: Я пришёл, что́бы ___ с тобо́й.', options: ['поговори́ть', 'поговори́л', 'поговорю́', 'говори́шь'], a: 0, why: 'Cùng một người làm cả hai việc → чтобы + nguyên thể.' },
    { t: 'choice', q: 'Từ nào dùng cho chuyện <b>tốt</b>?', options: ['из-за', 'благодаря́', 'несмотря́ на', 'хотя́'], a: 1, why: 'благодаря = nhờ có (tốt); из-за = tại vì (xấu).' },
    { t: 'choice', q: 'Câu <span class="ru">Я студе́нт, ___ он врач</span> dùng từ nào?', options: ['но', 'а', 'и́ли', 'зато́'], a: 1, why: 'а dùng khi so sánh hai bên, dịch là “còn”. но là “nhưng” đối lập thật.' },
    { t: 'match', q: 'Nối:', pairs: [['хотя́', 'mặc dù'], ['зато́', 'bù lại'], ['е́сли', 'nếu'], ['и́ли', 'hoặc']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'я учу русский чтобы учиться в России', a: 'я учу русский чтобы учиться в россии' }
  ]
};

/* ---------------------------------------------------------- BÀI 5 */
LESSON_DATA['a2-05'] = {
  level: 'a2',
  intro: 'Cao hơn, rẻ hơn, tốt nhất — bài này cho em so sánh. Tin vui: cách so sánh của tiếng Nga <b>gọn hơn tiếng Anh</b>, chỉ một đuôi duy nhất cho gần hết mọi tính từ.',
  blocks: [
    { t: 'h', text: 'So sánh hơn: thêm đuôi -ЕЕ' },
    { t: 'p', html: 'Bỏ đuôi tính từ, thêm <b>-ее</b>. Dạng này <b>không đổi theo giống, số hay cách</b> — một hình duy nhất dùng cho tất cả.' },
    { t: 'table', head: ['Tính từ', 'So sánh hơn', 'Nghĩa'], rows: [
      ['бы́стрый', 'быстре́е', 'nhanh hơn'],
      ['интере́сный', 'интере́снее', 'thú vị hơn'],
      ['краси́вый', 'краси́вее', 'đẹp hơn'],
      ['тру́дный', 'трудне́е', 'khó hơn'],
      ['холо́дный', 'холодне́е', 'lạnh hơn'],
      ['ва́жный', 'важне́е', 'quan trọng hơn']
    ]},
    { t: 'h', text: 'Mười dạng bất quy tắc phải thuộc' },
    { t: 'table', head: ['Tính từ', 'So sánh hơn', 'Nghĩa'], rows: [
      ['хоро́ший', '<b>лу́чше</b>', 'tốt hơn'],
      ['плохо́й', '<b>ху́же</b>', 'tệ hơn'],
      ['большо́й', '<b>бо́льше</b>', 'to hơn, nhiều hơn'],
      ['ма́ленький', '<b>ме́ньше</b>', 'nhỏ hơn, ít hơn'],
      ['ста́рый', '<b>ста́рше</b>', 'lớn tuổi hơn'],
      ['молодо́й', '<b>моло́же</b>', 'trẻ hơn'],
      ['дорого́й', '<b>доро́же</b>', 'đắt hơn'],
      ['дешёвый', '<b>деше́вле</b>', 'rẻ hơn'],
      ['высо́кий', '<b>вы́ше</b>', 'cao hơn'],
      ['лёгкий', '<b>ле́гче</b>', 'dễ hơn, nhẹ hơn']
    ]},
    { t: 'tip', html: 'Nhóm bất quy tắc chính là nhóm em dùng nhiều nhất hằng ngày — <span class="ru">лу́чше, ху́же, бо́льше, ме́ньше</span>. Học thuộc mười từ này là đủ dùng 80% trường hợp.' },
    { t: 'h', text: 'So sánh với ai — hai cách nói' },
    { t: 'table', head: ['Cách', 'Cấu trúc', 'Ví dụ'], rows: [
      ['Có <span class="ru">чем</span>', 'so sánh + <b>чем</b> + cách 1', 'Он ста́рше, <b>чем</b> я.'],
      ['Không có <span class="ru">чем</span>', 'so sánh + <b>cách 2</b>', 'Он ста́рше <b>меня́</b>.']
    ]},
    { t: 'p', html: 'Hai câu nghĩa y hệt nhau. Kiểu thứ hai gọn hơn nên người Nga nói nhiều hơn. Chú ý: kiểu có <span class="ru">чем</span> <b>luôn có dấu phẩy</b> phía trước.' },
    { t: 'words', items: [
      { ru: 'Москва́ бо́льше, чем Ирку́тск.', vn: 'Moskva lớn hơn Irkutsk.' },
      { ru: 'Э́та кни́га интере́снее той.', vn: 'Quyển này hay hơn quyển kia.' },
      { ru: 'Сего́дня холодне́е, чем вчера́.', vn: 'Hôm nay lạnh hơn hôm qua.' },
      { ru: 'Он на два го́да ста́рше меня́.', vn: 'Anh ấy hơn tôi hai tuổi.' }
    ]},
    { t: 'note', html: 'Muốn nói <b>hơn bao nhiêu</b> thì dùng <span class="ru">на</span> + cách 4: <span class="ru">на два го́да ста́рше</span> (hơn hai tuổi), <span class="ru">на сто рубле́й доро́же</span> (đắt hơn một trăm rúp).' },
    { t: 'h', text: 'So sánh nhất: САМЫЙ + tính từ' },
    { t: 'p', html: 'Cách này dễ nhất: thêm <span class="ru">са́мый</span> trước tính từ, và <b>са́мый phải hoà hợp</b> với danh từ như mọi tính từ khác.' },
    { t: 'words', items: [
      { ru: 'са́мый большо́й го́род', vn: 'thành phố lớn nhất' },
      { ru: 'са́мая краси́вая пе́сня', vn: 'bài hát đẹp nhất' },
      { ru: 'са́мое тру́дное сло́во', vn: 'từ khó nhất' },
      { ru: 'са́мые лу́чшие друзья́', vn: 'những người bạn tốt nhất' }
    ]},
    { t: 'tip', html: 'Có một kiểu nói tắt rất Nga: <span class="ru">лу́чше всех</span> (hơn tất cả mọi người), <span class="ru">лу́чше всего́</span> (hơn tất cả mọi thứ). Ví dụ: <span class="ru">Она́ поёт лу́чше всех.</span> — Cô ấy hát hay nhất.' }
  ],
  vocab: [
    { ru: 'лу́чше', vn: 'tốt hơn' }, { ru: 'ху́же', vn: 'tệ hơn' },
    { ru: 'бо́льше', vn: 'nhiều hơn, to hơn' }, { ru: 'ме́ньше', vn: 'ít hơn, nhỏ hơn' },
    { ru: 'ста́рше', vn: 'lớn tuổi hơn' }, { ru: 'моло́же', vn: 'trẻ hơn' },
    { ru: 'доро́же', vn: 'đắt hơn' }, { ru: 'деше́вле', vn: 'rẻ hơn' },
    { ru: 'са́мый', vn: 'nhất' }, { ru: 'чем', vn: 'hơn (so sánh)' },
    { ru: 'ва́жный', vn: 'quan trọng' }, { ru: 'лу́чше всех', vn: 'hơn tất cả mọi người' }
  ],
  ex: [
    { t: 'type', q: 'So sánh hơn của <span class="ru">интере́сный</span>:', a: 'интереснее', alt: ['интере́снее'], hint: 'Bỏ đuôi, thêm -ее.' },
    { t: 'choice', q: 'So sánh hơn của <span class="ru ru-big">хоро́ший</span> là:', options: ['хоро́шее', 'хороши́е', 'лу́чше', 'са́мый хоро́ший'], a: 2, why: 'Bất quy tắc: хороший → лучше.' },
    { t: 'choice', q: 'Câu nào <b>đúng</b>?', options: ['Он ста́рше как я.', 'Он ста́рше чем меня́.', 'Он ста́рше меня́.', 'Он ста́рше от меня́.'], a: 2, why: 'Hai kiểu đúng: “старше, чем я” (cách 1 sau чем) hoặc “старше меня” (cách 2, không có чем).' },
    { t: 'choice', q: 'Dạng so sánh hơn có đổi theo giống không?', options: ['Có, như tính từ thường', 'Không, một hình duy nhất', 'Chỉ đổi ở số nhiều', 'Chỉ đổi với giống cái'], a: 1, why: 'Dạng -ее và các dạng bất quy tắc không đổi theo giống, số hay cách.' },
    { t: 'type', q: '"Thành phố lớn nhất": ___ большо́й го́род', a: 'самый', alt: ['са́мый'], hint: 'город là giống đực.' },
    { t: 'choice', q: '"Anh ấy hơn tôi hai tuổi" nói là:', options: ['Он ста́рше меня́ два го́да.', 'Он на два го́да ста́рше меня́.', 'Он ста́рше на два го́да чем я.', 'Он два го́да ста́рше.'], a: 1, why: 'Chênh lệch dùng на + cách 4 đặt trước từ so sánh.' },
    { t: 'match', q: 'Nối:', pairs: [['деше́вле', 'rẻ hơn'], ['вы́ше', 'cao hơn'], ['ме́ньше', 'ít hơn'], ['ле́гче', 'dễ hơn']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'сегодня холоднее чем вчера', a: 'сегодня холоднее чем вчера' }
  ]
};

/* ---------------------------------------------------------- BÀI 6 */
LESSON_DATA['a2-06'] = {
  level: 'a2',
  intro: 'Một chữ nhỏ xíu — <span class="ru">бы</span> — mở ra cả thế giới của những điều <b>chưa có thật</b>: giá mà, nếu như, tôi muốn được… Và tiện thể, nó cũng là cách nói lịch sự nhất tiếng Nga.',
  blocks: [
    { t: 'h', text: 'Công thức: dạng quá khứ + БЫ' },
    { t: 'p', html: 'Đơn giản đến bất ngờ. Lấy động từ ở <b>dạng quá khứ</b>, thêm <span class="ru">бы</span>. Không có thì, không có ngôi — chỉ chia theo giống như quá khứ bình thường.' },
    { t: 'words', items: [
      { ru: 'Я бы пое́хал в Москву́.', vn: 'Tôi thì tôi sẽ đi Moskva. (nam nói)' },
      { ru: 'Я бы пое́хала в Москву́.', vn: 'Tôi thì tôi sẽ đi Moskva. (nữ nói)' },
      { ru: 'Мы бы помогли́ тебе́.', vn: 'Chúng tôi thì sẽ giúp cậu.' },
      { ru: 'Он бы не сказа́л так.', vn: 'Anh ấy sẽ không nói thế đâu.' }
    ]},
    { t: 'note', html: '<span class="ru">бы</span> đứng linh hoạt: <span class="ru">Я бы пое́хал</span> hoặc <span class="ru">Я пое́хал бы</span> — cả hai đều đúng. Thường nó đứng ngay sau từ mà người nói muốn nhấn.' },
    { t: 'h', text: 'Câu điều kiện không có thật: ЕСЛИ БЫ' },
    { t: 'p', html: 'Cấu trúc đối xứng đẹp — <b>cả hai vế đều có бы</b>, cả hai đều ở dạng quá khứ:' },
    { t: 'words', items: [
      { ru: 'Е́сли бы у меня́ бы́ло вре́мя, я бы пое́хал.', vn: 'Giá mà tôi có thời gian thì tôi đã đi.' },
      { ru: 'Е́сли бы я знал ру́сский, я бы понима́л всё.', vn: 'Nếu tôi biết tiếng Nga thì tôi đã hiểu hết.' },
      { ru: 'Е́сли бы не дождь, мы бы гуля́ли.', vn: 'Nếu không có mưa thì chúng tôi đã đi dạo.' }
    ]},
    { t: 'warn', html: 'Phân biệt hai chữ "nếu":<br>• <span class="ru"><b>е́сли</b></span> (không có бы) — điều kiện <b>có thật, có thể xảy ra</b>: <span class="ru">Е́сли бу́дет вре́мя, я прие́ду.</span> (Nếu có thời gian tôi sẽ đến.)<br>• <span class="ru"><b>е́сли бы</b></span> — điều kiện <b>trái thực tế</b>, biết là không xảy ra: <span class="ru">Е́сли бы бы́ло вре́мя…</span> (Giá mà có thời gian… — nhưng không có.)' },
    { t: 'h', text: 'Công dụng thứ hai: nói cho lịch sự' },
    { t: 'p', html: 'Đây mới là chỗ em dùng <span class="ru">бы</span> nhiều nhất trong đời sống. Thêm <span class="ru">бы</span> vào là câu nhờ vả mềm hẳn đi:' },
    { t: 'table', head: ['Nói thẳng', 'Nói lịch sự', 'Nghĩa'], rows: [
      ['Я хочу́ ко́фе.', 'Я <b>хоте́л бы</b> ко́фе.', 'Tôi muốn cà phê.'],
      ['Вы мо́жете помо́чь?', '<b>Не могли́ бы</b> вы помо́чь?', 'Anh giúp tôi được không ạ?'],
      ['Дай мне кни́гу.', 'Ты не <b>дал бы</b> мне кни́гу?', 'Cậu đưa tớ quyển sách được không?'],
      ['Пойдём в кино́.', 'Не <b>хоте́л бы</b> ты пойти́ в кино́?', 'Cậu có muốn đi xem phim không?']
    ]},
    { t: 'tip', html: '<span class="ru">Не могли́ бы вы…</span> là câu nhờ vả lịch sự chuẩn mực nhất tiếng Nga. Học thuộc nguyên cụm này — dùng được với cảnh sát, giáo sư, người lạ trên đường, ai cũng được.' },
    { t: 'h', text: 'Ước và tiếc' },
    { t: 'words', items: [
      { ru: 'Я хоте́л бы жить в Росси́и.', vn: 'Tôi ước được sống ở Nga.' },
      { ru: 'Жаль, что я не знал.', vn: 'Tiếc là tôi đã không biết.' },
      { ru: 'Лу́чше бы я оста́лся до́ма.', vn: 'Giá mà tôi ở nhà thì hơn.' },
      { ru: 'Что бы ты сде́лал на моём ме́сте?', vn: 'Ở vào chỗ tôi thì cậu làm gì?' }
    ]},
    { t: 'note', html: 'Nhắc lại từ bài 4: <span class="ru">что́бы</span> chính là <span class="ru">что</span> + <span class="ru">бы</span> dính lại. Vì thế vế sau nó mới phải ở dạng quá khứ — cùng một quy luật, không phải hai thứ rời rạc.' }
  ],
  vocab: [
    { ru: 'бы', vn: 'thì, giá mà (giả định)' }, { ru: 'е́сли бы', vn: 'giá mà, nếu như' },
    { ru: 'Не могли́ бы вы…', vn: 'Anh/chị làm ơn… được không ạ' },
    { ru: 'Я хоте́л бы', vn: 'Tôi muốn (lịch sự)' }, { ru: 'жаль', vn: 'tiếc là' },
    { ru: 'оста́ться', vn: 'ở lại' }, { ru: 'помо́чь', vn: 'giúp (một lần)' },
    { ru: 'на моём ме́сте', vn: 'ở vào chỗ tôi' }
  ],
  ex: [
    { t: 'choice', q: 'Điền: Е́сли бы я знал, я ___ сказа́л.', options: ['бы', 'бу́ду', 'был', 'быть'], a: 0, why: 'Câu điều kiện không có thật thì cả hai vế đều có бы.' },
    { t: 'choice', q: 'Sau <span class="ru">бы</span>, động từ ở dạng nào?', options: ['Nguyên thể', 'Hiện tại', 'Quá khứ', 'Mệnh lệnh'], a: 2, why: 'Luôn là dạng quá khứ, chia theo giống: я бы поехал / поехала.' },
    { t: 'choice', q: 'Câu nào là điều kiện <b>có thật, có thể xảy ra</b>?', options: ['Е́сли бы бы́ло вре́мя, я бы пое́хал.', 'Е́сли бу́дет вре́мя, я прие́ду.', 'Е́сли бы я знал…', 'Лу́чше бы я оста́лся.'], a: 1, why: 'Không có бы → điều kiện thật, hoàn toàn có thể xảy ra.' },
    { t: 'type', q: 'Nhờ vả lịch sự: Не ___ бы вы помо́чь?', a: 'могли', alt: ['могли́'], hint: 'Dạng quá khứ số nhiều của мочь.' },
    { t: 'choice', q: 'Oanh muốn nói "Tôi muốn cà phê" cho lịch sự:', options: ['Я хочу́ ко́фе.', 'Я хоте́л бы ко́фе.', 'Я хоте́ла бы ко́фе.', 'Дай ко́фе.'], a: 2, why: 'бы + dạng quá khứ, và Oanh là nữ nên dùng хотела.' },
    { t: 'choice', q: '<span class="ru ru-big">что́бы</span> thực chất là ghép của:', options: ['что + был', 'что + бы', 'чтоб + ы', 'что + быть'], a: 1, why: 'Đúng vậy — nên vế sau nó mới phải ở dạng quá khứ.' },
    { t: 'match', q: 'Nối:', pairs: [['жаль', 'tiếc là'], ['оста́ться', 'ở lại'], ['помо́чь', 'giúp'], ['е́сли бы', 'giá mà']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'я хотел бы кофе', a: 'я хотел бы кофе' }
  ]
};

/* ---------------------------------------------------------- BÀI 7 */
LESSON_DATA['a2-07'] = {
  level: 'a2',
  intro: 'Ở A1 em hỏi được đường. Bây giờ em phải <b>hiểu câu trả lời dài</b> — và tự chỉ đường cho người khác. Bài này cũng dạy em đi tàu điện ngầm Nga, thứ mà lần đầu ai cũng hoảng.',
  blocks: [
    { t: 'h', text: 'Hỏi đường kiểu người bản xứ' },
    { t: 'words', items: [
      { ru: 'Как добра́ться до це́нтра?', vn: 'Đến trung tâm thì đi thế nào ạ? (câu vạn năng nhất)' },
      { ru: 'Как лу́чше дое́хать до вокза́ла?', vn: 'Đến nhà ga đi cách nào tiện nhất ạ?' },
      { ru: 'Ско́лько остано́вок?', vn: 'Mấy bến ạ?' },
      { ru: 'На како́й остано́вке выходи́ть?', vn: 'Xuống ở bến nào ạ?' },
      { ru: 'Э́то далеко́ отсю́да?', vn: 'Từ đây có xa không ạ?' },
      { ru: 'Я пра́вильно иду́?', vn: 'Tôi đi đúng đường chứ ạ?' }
    ]},
    { t: 'h', text: 'Câu trả lời — nghe cho quen' },
    { t: 'words', items: [
      { ru: 'Иди́те пря́мо до перекрёстка.', vn: 'Anh đi thẳng đến ngã tư.' },
      { ru: 'Пото́м поверни́те напра́во.', vn: 'Rồi rẽ phải.' },
      { ru: 'Перейди́те доро́гу на светофо́ре.', vn: 'Sang đường ở chỗ đèn giao thông.' },
      { ru: 'Вам ну́жно прое́хать три остано́вки.', vn: 'Anh phải đi ba bến.' },
      { ru: 'Сади́тесь на два́дцать пе́рвый авто́бус.', vn: 'Anh lên xe buýt số 21.' },
      { ru: 'Выходи́те на сле́дующей.', vn: 'Anh xuống ở bến sau.' },
      { ru: 'Э́то в двух шага́х отсю́да.', vn: 'Ngay gần đây thôi. (nghĩa đen: cách hai bước chân)' },
      { ru: 'Мину́т де́сять пешко́м.', vn: 'Đi bộ chừng mười phút.' }
    ]},
    { t: 'tip', html: 'Để ý <span class="ru">мину́т де́сять</span> — đảo ngược so với <span class="ru">де́сять мину́т</span>. Đảo trật tự số và danh từ là cách người Nga nói <b>"khoảng chừng"</b>: <span class="ru">часа́ два</span> (chừng hai tiếng), <span class="ru">рубле́й сто</span> (khoảng trăm rúp). Một mẹo nhỏ mà nghe rất bản xứ.' },
    { t: 'h', text: 'Đi tàu điện ngầm' },
    { t: 'words', items: [
      { ru: 'метро́', vn: 'tàu điện ngầm' }, { ru: 'ста́нция', vn: 'ga' },
      { ru: 'ли́ния', vn: 'tuyến' }, { ru: 'пересадка', vn: 'chuyển tuyến' },
      { ru: 'вход / вы́ход', vn: 'lối vào / lối ra' }, { ru: 'вы́ход в го́род', vn: 'lối ra phố' },
      { ru: 'эскала́тор', vn: 'thang cuốn' }, { ru: 'ваго́н', vn: 'toa tàu' },
      { ru: 'Сде́лайте переса́дку на «Пло́щади Револю́ции».', vn: 'Anh chuyển tuyến ở ga Quảng trường Cách mạng.' },
      { ru: 'Осторо́жно, две́ри закрыва́ются.', vn: 'Chú ý, cửa đang đóng. (câu loa đọc trên mọi chuyến tàu)' }
    ]},
    { t: 'note', html: 'Câu <span class="ru">Осторо́жно, две́ри закрыва́ются. Сле́дующая ста́нция…</span> em sẽ nghe hàng trăm lần mỗi khi đi metro ở Nga. Nghe quen câu này là tai em bắt đầu quen nhịp tiếng Nga tự nhiên.' },
    { t: 'h', text: 'Hội thoại đầy đủ' },
    { t: 'dialog', lines: [
      { who: 'О', ru: 'Извини́те, как добра́ться до Кра́сной пло́щади?', vn: 'Xin lỗi, đến Quảng trường Đỏ đi thế nào ạ?' },
      { who: 'Н', ru: 'На метро́. Сади́тесь на кра́сную ли́нию, е́дьте до ста́нции «Охо́тный ряд».', vn: 'Đi metro. Chị lên tuyến đỏ, đi đến ga Okhotny Ryad.' },
      { who: 'О', ru: 'Ско́лько остано́вок?', vn: 'Mấy bến ạ?' },
      { who: 'Н', ru: 'Четы́ре. Пото́м вы́ход в го́род и налево — уви́дите сра́зу.', vn: 'Bốn bến. Rồi ra lối lên phố, rẽ trái là thấy ngay.' },
      { who: 'О', ru: 'А пешко́м далеко́?', vn: 'Đi bộ có xa không ạ?' },
      { who: 'Н', ru: 'Мину́т со́рок. Лу́чше на метро́.', vn: 'Chừng bốn mươi phút. Đi metro tiện hơn.' },
      { who: 'О', ru: 'Поняла́, спаси́бо большо́е!', vn: 'Tôi hiểu rồi, cảm ơn chị nhiều!' }
    ]}
  ],
  vocab: [
    { ru: 'добра́ться', vn: 'đến được (nơi nào)' }, { ru: 'поверну́ть', vn: 'rẽ' },
    { ru: 'перекрёсток', vn: 'ngã tư' }, { ru: 'сле́дующий', vn: 'tiếp theo' },
    { ru: 'переса́дка', vn: 'chuyển tuyến' }, { ru: 'эскала́тор', vn: 'thang cuốn' },
    { ru: 'осторо́жно', vn: 'cẩn thận' }, { ru: 'отсю́да', vn: 'từ đây' },
    { ru: 'в двух шага́х', vn: 'ngay gần đây' }, { ru: 'сади́ться', vn: 'lên (xe), ngồi xuống' }
  ],
  ex: [
    { t: 'choice', q: 'Câu hỏi đường vạn năng nhất là:', options: ['Где э́то?', 'Как добра́ться до…?', 'Что э́то?', 'Ско́лько сто́ит?'], a: 1, why: 'Как добраться до… dùng được cho mọi phương tiện và mọi điểm đến.' },
    { t: 'choice', q: '<span class="ru ru-big">мину́т де́сять</span> nghĩa là:', options: ['Đúng 10 phút', 'Khoảng 10 phút', '10 giờ', 'Ít hơn 10 phút'], a: 1, why: 'Đảo trật tự số và danh từ là cách nói “khoảng chừng”.' },
    { t: 'choice', q: '<span class="ru ru-big">переса́дка</span> nghĩa là:', options: ['Lối ra', 'Chuyển tuyến', 'Vé tàu', 'Thang cuốn'], a: 1, why: 'Chuyển từ tuyến metro này sang tuyến khác.' },
    { t: 'type', q: 'Điền: Пото́м ___ напра́во. (hãy rẽ)', a: 'поверните', alt: ['поверни́те', 'поверни'], hint: 'Thể mệnh lệnh lịch sự của повернуть.' },
    { t: 'choice', q: 'Câu loa nào em sẽ nghe trên mọi chuyến metro Nga?', options: ['Осторо́жно, две́ри закрыва́ются.', 'Ско́лько сто́ит биле́т?', 'До свида́ния!', 'Прия́тного аппети́та!'], a: 0, why: 'Câu báo cửa đóng, đọc ở mỗi ga.' },
    { t: 'choice', q: '"Ngay gần đây thôi" nói kiểu Nga là:', options: ['Э́то далеко́.', 'Э́то в двух шага́х.', 'Э́то на метро́.', 'Э́то напро́тив.'], a: 1, why: 'Nghĩa đen “cách hai bước chân”.' },
    { t: 'match', q: 'Nối:', pairs: [['перекрёсток', 'ngã tư'], ['сле́дующий', 'tiếp theo'], ['эскала́тор', 'thang cuốn'], ['отсю́да', 'từ đây']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'как добраться до центра', a: 'как добраться до центра' }
  ]
};

/* ---------------------------------------------------------- BÀI 8 */
LESSON_DATA['a2-08'] = {
  level: 'a2',
  intro: 'Ốm ở nước ngoài mà không nói được mình đau chỗ nào là chuyện đáng sợ thật sự. Bài này ngắn nhưng em nên thuộc kỹ — hy vọng không bao giờ phải dùng.',
  blocks: [
    { t: 'h', text: 'Nói mình đau ở đâu' },
    { t: 'p', html: 'Cấu trúc tiếng Nga <b>ngược với tiếng Việt</b>: không phải "tôi đau đầu" mà là "<b>đầu đang đau ở chỗ tôi</b>". Bộ phận cơ thể làm chủ ngữ, người bệnh ở cách 2 sau <span class="ru">у</span>.' },
    { t: 'table', head: ['Tiếng Nga', 'Nghĩa đen', 'Dịch thường'], rows: [
      ['У меня́ боли́т голова́.', 'Ở chỗ tôi, cái đầu đang đau', 'Tôi đau đầu.'],
      ['У меня́ боли́т го́рло.', 'Ở chỗ tôi, cái họng đang đau', 'Tôi đau họng.'],
      ['У неё боля́т зу́бы.', 'Ở chỗ cô ấy, những cái răng đang đau', 'Cô ấy đau răng.']
    ]},
    { t: 'warn', html: 'Vì bộ phận cơ thể là chủ ngữ nên động từ phải hoà hợp với nó: <span class="ru"><b>боли́т</b></span> khi một chỗ (голова́, го́рло, живо́т), <span class="ru"><b>боля́т</b></span> khi nhiều chỗ (зу́бы, глаза́, но́ги). Nói <span class="ru">я боли́т</span> là sai hoàn toàn.' },
    { t: 'h', text: 'Bộ phận cơ thể' },
    { t: 'words', items: [
      { ru: 'голова́', vn: 'đầu' }, { ru: 'го́рло', vn: 'họng' },
      { ru: 'живо́т', vn: 'bụng' }, { ru: 'спина́', vn: 'lưng' },
      { ru: 'зуб / зу́бы', vn: 'răng' }, { ru: 'глаз / глаза́', vn: 'mắt' },
      { ru: 'у́хо / у́ши', vn: 'tai' }, { ru: 'рука́ / ру́ки', vn: 'tay' },
      { ru: 'нога́ / но́ги', vn: 'chân' }, { ru: 'се́рдце', vn: 'tim' }
    ]},
    { t: 'h', text: 'Triệu chứng' },
    { t: 'words', items: [
      { ru: 'Я пло́хо себя́ чу́вствую.', vn: 'Tôi thấy trong người không ổn.' },
      { ru: 'У меня́ температу́ра.', vn: 'Tôi bị sốt.' },
      { ru: 'У меня́ на́сморк и ка́шель.', vn: 'Tôi bị sổ mũi và ho.' },
      { ru: 'Я простуди́лся. / Я простуди́лась.', vn: 'Tôi bị cảm. (nam / nữ)' },
      { ru: 'Меня́ тошни́т.', vn: 'Tôi buồn nôn.' },
      { ru: 'У меня́ кру́жится голова́.', vn: 'Tôi chóng mặt.' },
      { ru: 'Я не могу́ спать.', vn: 'Tôi không ngủ được.' }
    ]},
    { t: 'h', text: 'Ở phòng khám' },
    { t: 'words', items: [
      { ru: 'поликли́ника', vn: 'phòng khám' }, { ru: 'больни́ца', vn: 'bệnh viện' },
      { ru: 'ско́рая по́мощь', vn: 'xe cấp cứu' }, { ru: 'реце́пт', vn: 'đơn thuốc' },
      { ru: 'лека́рство', vn: 'thuốc' }, { ru: 'табле́тки', vn: 'thuốc viên' },
      { ru: 'уко́л', vn: 'tiêm' }, { ru: 'ана́лизы', vn: 'xét nghiệm' }
    ]},
    { t: 'dialog', lines: [
      { who: 'В', ru: 'На что жа́луетесь?', vn: 'Chị thấy khó chịu chỗ nào?' },
      { who: 'О', ru: 'У меня́ боли́т го́рло и температу́ра три́дцать во́семь.', vn: 'Tôi đau họng, sốt 38 độ.' },
      { who: 'В', ru: 'Давно́?', vn: 'Bị lâu chưa?' },
      { who: 'О', ru: 'Два дня.', vn: 'Hai hôm rồi ạ.' },
      { who: 'В', ru: 'Откро́йте рот… Э́то просту́да. Я вы́пишу реце́пт.', vn: 'Chị há miệng… Cảm thôi. Tôi kê đơn cho chị.' },
      { who: 'О', ru: 'Спаси́бо. Как принима́ть лека́рство?', vn: 'Cảm ơn bác sĩ. Thuốc uống thế nào ạ?' },
      { who: 'В', ru: 'Три ра́за в день по́сле еды́. Выздора́вливайте!', vn: 'Ngày ba lần sau khi ăn. Chúc chị chóng khỏi!' }
    ]},
    { t: 'tip', html: 'Câu chia tay khi ai đó ốm: <span class="ru"><b>Выздора́вливай!</b></span> (với bạn) hoặc <span class="ru"><b>Выздора́вливайте!</b></span> (lịch sự) — "chóng khỏe nhé". Người Nga nói câu này thường xuyên, và nghe nó ấm hơn nhiều so với "get well soon".' },
    { t: 'note', html: 'Số cấp cứu ở Nga là <b>103</b> (hoặc 112 cho mọi trường hợp khẩn cấp). Câu cần thuộc: <span class="ru">Вы́зовите ско́рую по́мощь!</span> — Gọi xe cấp cứu đi!' }
  ],
  vocab: [
    { ru: 'боли́т', vn: 'đau (một chỗ)' }, { ru: 'боля́т', vn: 'đau (nhiều chỗ)' },
    { ru: 'голова́', vn: 'đầu' }, { ru: 'го́рло', vn: 'họng' }, { ru: 'живо́т', vn: 'bụng' },
    { ru: 'температу́ра', vn: 'sốt, nhiệt độ' }, { ru: 'просту́да', vn: 'cảm lạnh' },
    { ru: 'лека́рство', vn: 'thuốc' }, { ru: 'реце́пт', vn: 'đơn thuốc' },
    { ru: 'больни́ца', vn: 'bệnh viện' }, { ru: 'ско́рая по́мощь', vn: 'xe cấp cứu' },
    { ru: 'Выздора́вливайте!', vn: 'Chúc chóng khỏe!' }
  ],
  ex: [
    { t: 'choice', q: '"Tôi đau đầu" nói đúng là:', options: ['Я боли́т голова́.', 'У меня́ боли́т голова́.', 'Мне боли́т голова́.', 'Я боле́ю го́лову.'], a: 1, why: 'Bộ phận cơ thể làm chủ ngữ, người bệnh đứng sau у ở cách 2.' },
    { t: 'choice', q: 'Điền: У неё ___ зу́бы.', options: ['боли́т', 'боля́т', 'боле́ть', 'бо́лен'], a: 1, why: 'зубы số nhiều nên động từ cũng số nhiều: болят.' },
    { t: 'choice', q: 'Bác sĩ hỏi <span class="ru">На что жа́луетесь?</span> nghĩa là:', options: ['Chị tên gì?', 'Chị thấy khó chịu chỗ nào?', 'Chị bao nhiêu tuổi?', 'Chị có bảo hiểm không?'], a: 1, why: 'Câu mở đầu chuẩn mực của bác sĩ Nga, nghĩa đen “chị than phiền về điều gì”.' },
    { t: 'type', q: 'Chúc người ốm chóng khỏe (lịch sự):', a: 'выздоравливайте', alt: ['выздора́вливайте'], hint: 'Bắt đầu bằng вы-, kết thúc bằng -йте.' },
    { t: 'choice', q: '"Tôi bị sốt" nói là:', options: ['Я горя́чий.', 'У меня́ температу́ра.', 'Мне жа́рко.', 'Я тёплый.'], a: 1, why: 'Мне жарко chỉ là “tôi thấy nóng”, không phải sốt.' },
    { t: 'choice', q: 'Số gọi cấp cứu ở Nga là:', options: ['113', '103', '911', '115'], a: 1, why: '103 cho cấp cứu y tế, 112 cho mọi tình huống khẩn cấp.' },
    { t: 'match', q: 'Nối:', pairs: [['на́сморк', 'sổ mũi'], ['ка́шель', 'ho'], ['реце́пт', 'đơn thuốc'], ['спина́', 'lưng']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'у меня болит голова', a: 'у меня болит голова' }
  ]
};

/* ---------------------------------------------------------- BÀI 9 */
LESSON_DATA['a2-09'] = {
  level: 'a2',
  intro: 'Người Nga nói chuyện thời tiết nhiều như người Việt hỏi "ăn cơm chưa". Và ở Siberia thì thời tiết <b>không phải chuyện xã giao</b> — âm ba mươi độ là chuyện thật.',
  blocks: [
    { t: 'h', text: 'Hôm nay trời thế nào' },
    { t: 'words', items: [
      { ru: 'Кака́я сего́дня пого́да?', vn: 'Hôm nay thời tiết thế nào?' },
      { ru: 'Сего́дня тепло́.', vn: 'Hôm nay ấm.' },
      { ru: 'Сего́дня жа́рко.', vn: 'Hôm nay nóng.' },
      { ru: 'Сего́дня прохла́дно.', vn: 'Hôm nay mát.' },
      { ru: 'Сего́дня хо́лодно.', vn: 'Hôm nay lạnh.' },
      { ru: 'Идёт дождь.', vn: 'Trời đang mưa.' },
      { ru: 'Идёт снег.', vn: 'Trời đang có tuyết.' },
      { ru: 'Све́тит со́лнце.', vn: 'Trời nắng.' },
      { ru: 'Ду́ет си́льный ве́тер.', vn: 'Gió thổi mạnh.' },
      { ru: 'Не́бо я́сное / па́смурное.', vn: 'Trời quang / trời âm u.' }
    ]},
    { t: 'note', html: 'Nhắc lại từ A1: mưa và tuyết trong tiếng Nga <b>đi</b> chứ không rơi — <span class="ru">идёт дождь</span>. Còn nắng thì <b>chiếu sáng</b> — <span class="ru">све́тит со́лнце</span>. Cách hình dung của người Nga hơi khác ta, nhưng nhớ được thì rất dễ nhớ.' },
    { t: 'h', text: 'Nói nhiệt độ' },
    { t: 'table', head: ['Tiếng Nga', 'Nghĩa'], rows: [
      ['пять гра́дусов тепла́', '+5 độ (nghĩa đen: năm độ ấm)'],
      ['пять гра́дусов моро́за', '−5 độ (năm độ băng giá)'],
      ['плюс два́дцать', '+20'],
      ['ми́нус три́дцать', '−30'],
      ['ноль гра́дусов', '0 độ']
    ]},
    { t: 'warn', html: 'Nhớ quy luật số đếm từ A1: <span class="ru">оди́н гра́дус · два гра́дуса · пять гра́дусов</span>. Nghe dự báo thời tiết mà bắt được cái đuôi này là đoán ra con số ngay cả khi nghe không rõ.' },
    { t: 'h', text: 'Bốn mùa nước Nga' },
    { t: 'table', head: ['Mùa', 'Vào mùa…', 'Đặc trưng'], rows: [
      ['зима́', 'зимо́й', 'Tháng 12–2. Tuyết dày, ngày rất ngắn. Ở Irkutsk thường −25 đến −35.'],
      ['весна́', 'весно́й', 'Tháng 3–5. Tuyết tan, đường lầy — người Nga gọi là <span class="ru">распу́тица</span>.'],
      ['ле́то', 'ле́том', 'Tháng 6–8. Nóng bất ngờ, có nơi lên +30. Ngày rất dài.'],
      ['о́сень', 'о́сенью', 'Tháng 9–11. Đẹp nhất trong năm, gọi là <span class="ru">золота́я о́сень</span>.']
    ]},
    { t: 'words', items: [
      { ru: 'моро́з', vn: 'giá rét' }, { ru: 'снег', vn: 'tuyết' },
      { ru: 'су́гроб', vn: 'đống tuyết' }, { ru: 'гололёд', vn: 'băng trơn trên đường' },
      { ru: 'о́ттепель', vn: 'đợt ấm giữa mùa đông' }, { ru: 'листопа́д', vn: 'mùa lá rụng' },
      { ru: 'прогно́з пого́ды', vn: 'dự báo thời tiết' }, { ru: 'зо́нтик', vn: 'cái ô' }
    ]},
    { t: 'tip', html: 'Từ <span class="ru"><b>гололёд</b></span> đáng nhớ nhất trong danh sách này: mặt đường đóng băng trơn như gương. Mùa đông Nga người ta ngã gãy tay vì nó nhiều hơn vì lạnh. Nghe dự báo có từ này là đi chậm lại.' },
    { t: 'h', text: 'Trò chuyện về thời tiết' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Ну и моро́з сего́дня!', vn: 'Trời hôm nay rét quá!' },
      { who: 'Б', ru: 'Да, ми́нус три́дцать. А за́втра обеща́ют ещё холодне́е.', vn: 'Ừ, âm ba mươi. Mai người ta bảo còn lạnh hơn.' },
      { who: 'А', ru: 'Ужа́с. Я не привы́к к тако́му хо́лоду.', vn: 'Kinh khủng. Tôi chưa quen với cái lạnh thế này.' },
      { who: 'Б', ru: 'Ничего́, привы́кнешь. Гла́вное — тёплая ша́пка.', vn: 'Không sao, rồi quen thôi. Quan trọng nhất là cái mũ ấm.' }
    ]},
    { t: 'note', html: 'Câu <span class="ru">Гла́вное — тёплая ша́пка</span> không phải đùa. Ở Nga đi ra ngoài mùa đông mà không đội mũ là bị người lạ nhắc trên đường. Với họ đó là chuyện chăm sóc nhau, không phải xen vào việc người khác.' }
  ],
  vocab: [
    { ru: 'пого́да', vn: 'thời tiết' }, { ru: 'тепло́', vn: 'ấm' }, { ru: 'прохла́дно', vn: 'mát' },
    { ru: 'моро́з', vn: 'giá rét' }, { ru: 'гололёд', vn: 'băng trơn' },
    { ru: 'гра́дус', vn: 'độ' }, { ru: 'ве́тер', vn: 'gió' }, { ru: 'не́бо', vn: 'bầu trời' },
    { ru: 'прогно́з пого́ды', vn: 'dự báo thời tiết' }, { ru: 'зо́нтик', vn: 'cái ô' },
    { ru: 'привы́кнуть', vn: 'quen với' }, { ru: 'гла́вное', vn: 'điều quan trọng nhất' }
  ],
  ex: [
    { t: 'choice', q: '"Trời đang mưa" nói là:', options: ['Дождь па́дает.', 'Идёт дождь.', 'Есть дождь.', 'Дождь идти́.'], a: 1, why: 'Mưa trong tiếng Nga “đi”: идёт дождь.' },
    { t: 'choice', q: '<span class="ru ru-big">пять гра́дусов моро́за</span> nghĩa là:', options: ['+5 độ', '−5 độ', '5 giờ', '15 độ'], a: 1, why: 'мороза = độ băng giá, tức là dưới không.' },
    { t: 'choice', q: '<span class="ru ru-big">гололёд</span> là gì?', options: ['Đống tuyết', 'Băng trơn trên mặt đường', 'Gió lạnh', 'Mưa đá'], a: 1, why: 'Mặt đường đóng băng — nguy hiểm hơn cái lạnh nhiều.' },
    { t: 'type', q: 'Điền: Кака́я сего́дня ___ ? (thời tiết)', a: 'погода', alt: ['пого́да'], hint: 'Giống cái, kết thúc bằng -а.' },
    { t: 'choice', q: 'Mùa thu Nga được gọi bằng cái tên đẹp nào?', options: ['бе́лая о́сень', 'золота́я о́сень', 'кра́сная о́сень', 'до́лгая о́сень'], a: 1, why: 'Золотая осень — mùa thu vàng, mùa đẹp nhất trong năm.' },
    { t: 'choice', q: '"Trời nắng" nói là:', options: ['Идёт со́лнце.', 'Све́тит со́лнце.', 'Есть со́лнце.', 'Со́лнце тепло́.'], a: 1, why: 'Mặt trời “chiếu sáng”: светит солнце.' },
    { t: 'match', q: 'Nối:', pairs: [['зимо́й', 'vào mùa đông'], ['о́ттепель', 'đợt ấm giữa mùa đông'], ['ве́тер', 'gió'], ['зо́нтик', 'cái ô']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'сегодня очень холодно', a: 'сегодня очень холодно' }
  ]
};

/* ---------------------------------------------------------- BÀI 10 */
LESSON_DATA['a2-10'] = {
  level: 'a2',
  intro: 'Bài này không có ngữ pháp mới — nó là bài <b>ghép mọi thứ lại</b>. Kể một chuyến đi là lúc em dùng cùng lúc: thì quá khứ, thể động từ, động từ chuyển động có tiền tố, và các từ nối. Đây mới là tiếng Nga thật.',
  blocks: [
    { t: 'h', text: 'Bộ xương của một câu chuyện' },
    { t: 'table', head: ['Vị trí', 'Từ dùng', 'Nghĩa'], rows: [
      ['Mở', 'снача́ла', 'đầu tiên'],
      ['Nối', 'пото́м · зате́м', 'rồi sau đó'],
      ['Nối', 'по́сле э́того', 'sau chuyện đó'],
      ['Nối', 'че́рез два дня', 'hai ngày sau'],
      ['Nối', 'кро́ме того́', 'ngoài ra'],
      ['Kết', 'в конце́ · наконе́ц', 'cuối cùng thì'],
      ['Cảm nghĩ', 'мне о́чень понра́вилось', 'tôi thích lắm']
    ]},
    { t: 'tip', html: 'Bảy từ này là <b>khung xương</b>. Người học giỏi kể chuyện không phải vì biết nhiều từ hơn, mà vì biết dùng những từ nối này để câu chuyện có mạch.' },
    { t: 'h', text: 'Câu hỏi người ta sẽ hỏi em' },
    { t: 'words', items: [
      { ru: 'Где ты был ле́том?', vn: 'Hè cậu đi đâu?' },
      { ru: 'Как ты отдохну́л?', vn: 'Cậu nghỉ ngơi thế nào?' },
      { ru: 'С кем ты е́здил?', vn: 'Cậu đi với ai?' },
      { ru: 'Как дое́хали?', vn: 'Đi đường có ổn không?' },
      { ru: 'Что интере́сного ви́дели?', vn: 'Thấy có gì hay không?' },
      { ru: 'Тебе́ понра́вилось?', vn: 'Cậu có thích không?' }
    ]},
    { t: 'h', text: 'Một câu chuyện mẫu' },
    { t: 'dialog', lines: [
      { who: '1', ru: 'Ле́том я е́здила на Байка́л с подру́гой.', vn: 'Hè tôi đi Baikal với một cô bạn.' },
      { who: '2', ru: 'Снача́ла мы прие́хали в Ирку́тск на по́езде.', vn: 'Đầu tiên chúng tôi đến Irkutsk bằng tàu.' },
      { who: '3', ru: 'Пото́м мы пое́хали в Листвя́нку на авто́бусе.', vn: 'Rồi đi xe buýt tới Listvyanka.' },
      { who: '4', ru: 'Мы жи́ли в ма́ленькой гости́нице у са́мого о́зера.', vn: 'Chúng tôi ở một khách sạn nhỏ ngay sát hồ.' },
      { who: '5', ru: 'Пого́да была́ отли́чная: све́тило со́лнце, бы́ло тепло́.', vn: 'Thời tiết tuyệt: nắng đẹp, trời ấm.' },
      { who: '6', ru: 'Ка́ждый день мы гуля́ли и фотографи́ровали.', vn: 'Ngày nào chúng tôi cũng đi dạo và chụp ảnh.' },
      { who: '7', ru: 'Оди́н раз мы да́же купа́лись — вода́ была́ о́чень холо́дная!', vn: 'Có một lần chúng tôi còn tắm — nước lạnh kinh khủng!' },
      { who: '8', ru: 'По́сле э́того мы верну́лись в Ирку́тск и посмотре́ли го́род.', vn: 'Sau đó chúng tôi quay lại Irkutsk và đi xem thành phố.' },
      { who: '9', ru: 'В конце́ мы купи́ли сувени́ры для роди́телей.', vn: 'Cuối cùng chúng tôi mua quà lưu niệm cho bố mẹ.' },
      { who: '10', ru: 'Мне о́чень понра́вилось. Обяза́тельно пое́ду ещё раз.', vn: 'Tôi thích lắm. Nhất định sẽ còn quay lại.' }
    ]},
    { t: 'note', html: 'Đọc lại và để ý cách hai thể động từ chia việc: <span class="ru">гуля́ли, фотографи́ровали</span> (chưa hoàn thành — việc lặp đi lặp lại mỗi ngày) nhưng <span class="ru">прие́хали, купи́ли, верну́лись</span> (hoàn thành — mỗi việc xảy ra một lần và xong). Đó chính là bài 1 đang làm việc trong câu thật.' },
    { t: 'h', text: 'Từ vựng du lịch' },
    { t: 'words', items: [
      { ru: 'о́тпуск', vn: 'kỳ nghỉ phép' }, { ru: 'кани́кулы', vn: 'kỳ nghỉ học (luôn số nhiều)' },
      { ru: 'гости́ница', vn: 'khách sạn' }, { ru: 'путеше́ствие', vn: 'chuyến du lịch' },
      { ru: 'экску́рсия', vn: 'chuyến tham quan' }, { ru: 'сувени́р', vn: 'quà lưu niệm' },
      { ru: 'о́зеро', vn: 'cái hồ' }, { ru: 'мо́ре', vn: 'biển' }, { ru: 'го́ры', vn: 'núi' },
      { ru: 'купа́ться', vn: 'tắm, bơi' }, { ru: 'фотографи́ровать', vn: 'chụp ảnh' },
      { ru: 'верну́ться', vn: 'quay về' }, { ru: 'обяза́тельно', vn: 'nhất định' }
    ]},
    { t: 'tip', html: 'Bài tập cho em ngoài web: viết <b>mười câu</b> về một chuyến đi có thật của em, theo đúng khung "снача́ла — пото́м — по́сле э́того — в конце́". Mười câu ấy dùng lại được cả đời, chỉ cần thay tên địa danh.' }
  ],
  vocab: [
    { ru: 'снача́ла', vn: 'đầu tiên' }, { ru: 'пото́м', vn: 'rồi sau đó' },
    { ru: 'по́сле э́того', vn: 'sau chuyện đó' }, { ru: 'в конце́', vn: 'cuối cùng' },
    { ru: 'о́тпуск', vn: 'kỳ nghỉ phép' }, { ru: 'гости́ница', vn: 'khách sạn' },
    { ru: 'путеше́ствие', vn: 'chuyến du lịch' }, { ru: 'сувени́р', vn: 'quà lưu niệm' },
    { ru: 'купа́ться', vn: 'tắm, bơi' }, { ru: 'верну́ться', vn: 'quay về' },
    { ru: 'понра́виться', vn: 'thích, ưng' }, { ru: 'обяза́тельно', vn: 'nhất định' }
  ],
  ex: [
    { t: 'choice', q: 'Từ nào mở đầu một câu chuyện?', options: ['наконе́ц', 'снача́ла', 'по́сле э́того', 'зато́'], a: 1, why: 'сначала = đầu tiên, mở đầu chuỗi sự việc.' },
    { t: 'choice', q: 'Trong câu <span class="ru">Ка́ждый день мы гуля́ли</span>, vì sao dùng thể chưa hoàn thành?', options: ['Vì câu ở quá khứ', 'Vì hành động lặp lại mỗi ngày', 'Vì có hai người', 'Vì гулять không có thể hoàn thành'], a: 1, why: '“каждый день” báo hành động lặp lại → thể chưa hoàn thành.' },
    { t: 'choice', q: '<span class="ru ru-big">кани́кулы</span> khác <span class="ru ru-big">о́тпуск</span> ở chỗ:', options: ['Không khác gì', 'каникулы là nghỉ học, отпуск là nghỉ phép đi làm', 'каникулы dài hơn', 'отпуск chỉ dùng cho mùa hè'], a: 1, why: 'Học sinh, sinh viên có каникулы; người đi làm có отпуск.' },
    { t: 'type', q: 'Điền: Мне о́чень ___ ! (tôi thích lắm)', a: 'понравилось', alt: ['понра́вилось'], hint: 'Dạng quá khứ giống trung của понравиться.' },
    { t: 'choice', q: '"Chúng tôi quay lại Irkutsk" dùng động từ nào?', options: ['пое́хали', 'верну́лись', 'уе́хали', 'прие́хали'], a: 1, why: 'вернуться = quay về chỗ cũ.' },
    { t: 'match', q: 'Nối:', pairs: [['гости́ница', 'khách sạn'], ['экску́рсия', 'chuyến tham quan'], ['о́зеро', 'cái hồ'], ['сувени́р', 'quà lưu niệm']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'летом я ездила на Байкал', a: 'летом я ездила на байкал' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'мне очень понравилось', a: 'мне очень понравилось' }
  ]
};

/* ---------------------------------------------------------- BÀI 11 */
LESSON_DATA['a2-11'] = {
  level: 'a2',
  intro: 'Ngày mấy, năm bao nhiêu, thế kỷ nào — bài này cho em nói được về thời gian một cách chính xác. Cũng là bài em cần khi điền giấy tờ ở Nga.',
  blocks: [
    { t: 'h', text: 'Số thứ tự' },
    { t: 'words', items: [
      { ru: 'пе́рвый', vn: 'thứ nhất' }, { ru: 'второ́й', vn: 'thứ hai' },
      { ru: 'тре́тий', vn: 'thứ ba' }, { ru: 'четвёртый', vn: 'thứ tư' },
      { ru: 'пя́тый', vn: 'thứ năm' }, { ru: 'шесто́й', vn: 'thứ sáu' },
      { ru: 'седьмо́й', vn: 'thứ bảy' }, { ru: 'восьмо́й', vn: 'thứ tám' },
      { ru: 'девя́тый', vn: 'thứ chín' }, { ru: 'деся́тый', vn: 'thứ mười' },
      { ru: 'двадца́тый', vn: 'thứ hai mươi' }, { ru: 'со́тый', vn: 'thứ một trăm' }
    ]},
    { t: 'note', html: 'Số thứ tự <b>là tính từ</b>, nên chúng hoà hợp với danh từ y như mọi tính từ khác: <span class="ru">пе́рвый уро́к · пе́рвая кни́га · пе́рвое ме́сто</span>. Riêng <span class="ru">тре́тий</span> hơi khác: <span class="ru">тре́тья, тре́тье, тре́тьи</span>.' },
    { t: 'h', text: 'Hôm nay ngày mấy' },
    { t: 'p', html: 'Ngày dùng <b>số thứ tự giống trung</b> (vì ngầm hiểu là <span class="ru">число́</span>), còn tháng ở <b>cách 2</b>:' },
    { t: 'words', items: [
      { ru: 'Како́е сего́дня число́?', vn: 'Hôm nay ngày mấy?' },
      { ru: 'Сего́дня пе́рвое сентября́.', vn: 'Hôm nay mùng 1 tháng 9.' },
      { ru: 'Сего́дня тридца́тое а́вгуста.', vn: 'Hôm nay ngày 30 tháng 8.' },
      { ru: 'Восьмо́е ма́рта', vn: 'Mùng 8 tháng 3 (ngày Quốc tế Phụ nữ, lễ lớn ở Nga)' }
    ]},
    { t: 'warn', html: 'Muốn nói "<b>vào</b> ngày nào" thì đổi sang cách 2: <span class="ru">Пе́рвого сентября́ начина́ется уче́бный год.</span> — Ngày 1 tháng 9 năm học bắt đầu. Không có giới từ nào cả, chỉ đổi đuôi.' },
    { t: 'h', text: 'Năm — chỉ chữ cuối cùng là số thứ tự' },
    { t: 'p', html: 'Đây là chỗ khác hẳn tiếng Việt. Cả con số đọc như số đếm bình thường, <b>riêng chữ cuối</b> chuyển thành số thứ tự:' },
    { t: 'table', head: ['Năm', 'Đọc là', 'Ghi chú'], rows: [
      ['2026', 'две ты́сячи два́дцать шесто́й год', 'chỉ “шестой” là số thứ tự'],
      ['1999', 'ты́сяча девятьсо́т девяно́сто девя́тый год', 'ba số đầu là số đếm'],
      ['2000', 'двухты́сячный год', 'trường hợp riêng']
    ]},
    { t: 'words', items: [
      { ru: 'В како́м году́?', vn: 'Vào năm nào?' },
      { ru: 'В две ты́сячи два́дцать шесто́м году́.', vn: 'Vào năm 2026. (в + cách 6)' },
      { ru: 'Я роди́лся в две ты́сячи пе́рвом году́.', vn: 'Tôi sinh năm 2001. (nam)' },
      { ru: 'Я родила́сь в две ты́сячи тре́тьем году́.', vn: 'Tôi sinh năm 2003. (nữ)' }
    ]},
    { t: 'tip', html: 'Câu <span class="ru">Я роди́лся / родила́сь в … году́</span> em sẽ phải nói mỗi lần điền giấy tờ, khai báo tạm trú, đăng ký ở trường. Học thuộc nguyên khối, chỉ thay con số.' },
    { t: 'h', text: 'Thế kỷ' },
    { t: 'words', items: [
      { ru: 'век', vn: 'thế kỷ' },
      { ru: 'девятна́дцатый век', vn: 'thế kỷ XIX' },
      { ru: 'двадца́тый век', vn: 'thế kỷ XX' },
      { ru: 'два́дцать пе́рвый век', vn: 'thế kỷ XXI' },
      { ru: 'в девятна́дцатом ве́ке', vn: 'vào thế kỷ XIX' }
    ]},
    { t: 'note', html: 'Người Nga viết thế kỷ bằng <b>số La Mã</b>: XIX век, XX век. Gặp trong sách sử và bảo tàng liên tục, nên nhìn quen là hơn.' },
    { t: 'h', text: 'Vài mốc hay dùng' },
    { t: 'words', items: [
      { ru: 'в про́шлом году́', vn: 'năm ngoái' },
      { ru: 'в э́том году́', vn: 'năm nay' },
      { ru: 'в бу́дущем году́', vn: 'năm sau' },
      { ru: 'на про́шлой неде́ле', vn: 'tuần trước' },
      { ru: 'в про́шлом ме́сяце', vn: 'tháng trước' },
      { ru: 'два го́да наза́д', vn: 'hai năm trước' }
    ]}
  ],
  vocab: [
    { ru: 'число́', vn: 'ngày (trong tháng)' }, { ru: 'пе́рвый', vn: 'thứ nhất' },
    { ru: 'тре́тий', vn: 'thứ ba' }, { ru: 'век', vn: 'thế kỷ' },
    { ru: 'роди́ться', vn: 'sinh ra' }, { ru: 'в про́шлом году́', vn: 'năm ngoái' },
    { ru: 'в бу́дущем году́', vn: 'năm sau' }, { ru: 'наза́д', vn: 'trước đây' },
    { ru: 'уче́бный год', vn: 'năm học' }
  ],
  ex: [
    { t: 'choice', q: '"Hôm nay ngày 30 tháng 8" nói là:', options: ['Сего́дня три́дцать а́вгуст.', 'Сего́дня тридца́тое а́вгуста.', 'Сего́дня тридца́тый а́вгуст.', 'Сего́дня три́дцать а́вгуста.'], a: 1, why: 'Ngày dùng số thứ tự giống trung, tháng ở cách 2.' },
    { t: 'choice', q: 'Trong năm <b>2026</b>, chữ nào là số thứ tự?', options: ['две', 'ты́сячи', 'два́дцать', 'шесто́й'], a: 3, why: 'Chỉ chữ cuối cùng chuyển thành số thứ tự, các phần trước đọc như số đếm.' },
    { t: 'type', q: 'Điền: Я роди́лся в две ты́сячи пе́рвом ___ .', a: 'году', alt: ['году́'], hint: 'Dạng đặc biệt của год sau в.' },
    { t: 'choice', q: '"Vào ngày 1 tháng 9" nói là:', options: ['В пе́рвое сентября́', 'Пе́рвого сентября́', 'На пе́рвое сентября́', 'Пе́рвое сентября́'], a: 1, why: 'Chuyển sang cách 2, không cần giới từ.' },
    { t: 'choice', q: 'Số thứ tự nào có dạng khác thường?', options: ['пе́рвый', 'второ́й', 'тре́тий', 'пя́тый'], a: 2, why: 'третий đổi thành третья, третье, третьи — khác các số còn lại.' },
    { t: 'choice', q: 'Người Nga viết thế kỷ bằng:', options: ['Số Ả Rập', 'Số La Mã', 'Chữ cái', 'Cả hai đều không'], a: 1, why: 'XIX век, XX век — số La Mã, gặp khắp trong sách sử và bảo tàng.' },
    { t: 'match', q: 'Nối:', pairs: [['в про́шлом году́', 'năm ngoái'], ['в бу́дущем году́', 'năm sau'], ['два го́да наза́д', 'hai năm trước'], ['век', 'thế kỷ']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'какое сегодня число', a: 'какое сегодня число' }
  ]
};

/* ---------------------------------------------------------- BÀI 12 */
LESSON_DATA['a2-12'] = {
  level: 'a2',
  intro: 'Mọi ngôn ngữ đều có những từ không chịu theo quy tắc — và thường đó lại là những từ dùng nhiều nhất. Bài này gom hết chúng vào một chỗ để em khỏi phải vấp từng cái một.',
  blocks: [
    { t: 'h', text: 'Nhóm -МЯ: mười từ đặc biệt' },
    { t: 'p', html: 'Là giống trung, nhưng khi biến cách thì <b>mọc thêm -ен-</b>. Hai từ em dùng nhiều nhất:' },
    { t: 'table', head: ['Cách', 'вре́мя (thời gian)', 'и́мя (tên)'], rows: [
      ['1', 'вре́мя', 'и́мя'],
      ['2', 'вре́мени', 'и́мени'],
      ['3', 'вре́мени', 'и́мени'],
      ['4', 'вре́мя', 'и́мя'],
      ['5', 'вре́менем', 'и́менем'],
      ['6', 'о вре́мени', 'об и́мени'],
      ['Số nhiều', 'времена́', 'имена́']
    ]},
    { t: 'words', items: [
      { ru: 'У меня́ нет вре́мени.', vn: 'Tôi không có thời gian. (cách 2)' },
      { ru: 'Со вре́менем всё бу́дет хорошо́.', vn: 'Theo thời gian rồi mọi thứ sẽ ổn. (cách 5)' }
    ]},
    { t: 'h', text: 'Hai từ chỉ người thân bất quy tắc' },
    { t: 'table', head: ['Cách 1', 'Cách 2', 'Số nhiều', 'Nghĩa'], rows: [
      ['мать', 'ма́тери', 'ма́тери', 'mẹ'],
      ['дочь', 'до́чери', 'до́чери', 'con gái']
    ]},
    { t: 'note', html: 'Hai từ này cũng "mọc thêm" giống nhóm -мя: <span class="ru">мать → ма́тер-и</span>. Trong đời sống người Nga hay dùng <span class="ru">ма́ма</span> và <span class="ru">до́чка</span> cho gọn, chúng biến cách bình thường.' },
    { t: 'h', text: 'Số nhiều đổi hẳn từ' },
    { t: 'words', items: [
      { ru: 'челове́к → лю́ди', vn: 'người → mọi người' },
      { ru: 'ребёнок → де́ти', vn: 'đứa trẻ → bọn trẻ' },
      { ru: 'год → го́ды / лет', vn: 'năm — sau số từ 5 trở lên dùng лет' }
    ]},
    { t: 'warn', html: 'Nhưng khi <b>đếm người</b> thì <span class="ru">челове́к</span> quay lại: <span class="ru">пять челове́к</span> (năm người), không phải <span class="ru">пять люде́й</span>. Còn nói chung chung thì mới dùng <span class="ru">лю́ди</span>: <span class="ru">Здесь мно́го люде́й.</span>' },
    { t: 'h', text: 'Số nhiều lấy đuôi -А có trọng âm' },
    { t: 'words', items: [
      { ru: 'го́род → города́', vn: 'thành phố' },
      { ru: 'дом → дома́', vn: 'ngôi nhà' },
      { ru: 'по́езд → поезда́', vn: 'tàu hoả' },
      { ru: 'учи́тель → учителя́', vn: 'thầy giáo' },
      { ru: 'па́спорт → паспорта́', vn: 'hộ chiếu' },
      { ru: 'а́дрес → адреса́', vn: 'địa chỉ' },
      { ru: 'но́мер → номера́', vn: 'số; phòng khách sạn' },
      { ru: 'ве́чер → вечера́', vn: 'buổi tối' }
    ]},
    { t: 'tip', html: 'Nhóm này toàn từ giấy tờ và đi lại — <span class="ru">паспорта́, адреса́, номера́, поезда́</span>. Em sẽ gặp chúng ở sân bay, khách sạn và phòng đăng ký tạm trú, nên đáng học thuộc sớm.' },
    { t: 'h', text: 'Cách 2 số nhiều hay dùng' },
    { t: 'table', head: ['Số ít', 'Cách 2 số nhiều', 'Dùng trong'], rows: [
      ['челове́к', 'люде́й', 'мно́го люде́й'],
      ['ребёнок', 'дете́й', 'дво́е дете́й'],
      ['друг', 'друзе́й', 'пять друзе́й'],
      ['брат', 'бра́тьев', 'два бра́та / пять бра́тьев'],
      ['сын', 'сынове́й', 'три сы́на / пять сынове́й'],
      ['де́ньги', 'де́нег', 'нет де́нег'],
      ['год', 'лет', 'два́дцать лет']
    ]},
    { t: 'h', text: 'Những từ không bao giờ đổi' },
    { t: 'words', items: [
      { ru: 'ко́фе', vn: 'cà phê' }, { ru: 'кафе́', vn: 'quán cà phê' },
      { ru: 'метро́', vn: 'tàu điện ngầm' }, { ru: 'такси́', vn: 'taxi' },
      { ru: 'кино́', vn: 'điện ảnh, rạp phim' }, { ru: 'пальто́', vn: 'áo khoác dài' },
      { ru: 'ра́дио', vn: 'radio' }, { ru: 'меню́', vn: 'thực đơn' },
      { ru: 'фами́лия', vn: 'họ (từ này thì đổi bình thường — đừng nhầm)' }
    ]},
    { t: 'note', html: 'Toàn từ mượn từ tiếng Pháp và tiếng Anh. Tiếng Nga "tha" cho chúng khỏi biến cách vì đuôi của chúng không hợp với hệ thống — một trong số ít chỗ tiếng Nga dễ tính.' }
  ],
  vocab: [
    { ru: 'вре́мя', vn: 'thời gian' }, { ru: 'и́мя', vn: 'tên' },
    { ru: 'мать', vn: 'mẹ' }, { ru: 'дочь', vn: 'con gái' },
    { ru: 'лю́ди', vn: 'mọi người' }, { ru: 'де́ти', vn: 'bọn trẻ' },
    { ru: 'па́спорт', vn: 'hộ chiếu' }, { ru: 'а́дрес', vn: 'địa chỉ' },
    { ru: 'но́мер', vn: 'số; phòng khách sạn' }, { ru: 'пальто́', vn: 'áo khoác dài' },
    { ru: 'фами́лия', vn: 'họ' }
  ],
  ex: [
    { t: 'type', q: 'Điền: У меня́ нет ___ (вре́мя)', a: 'времени', alt: ['вре́мени'], hint: 'Nhóm -мя mọc thêm -ен-.' },
    { t: 'choice', q: '"Năm người" nói đúng là:', options: ['пять люде́й', 'пять челове́к', 'пять челове́ка', 'пять лю́ди'], a: 1, why: 'Khi đếm người thì dùng человек; людей dùng khi nói chung chung (много людей).' },
    { t: 'choice', q: 'Số nhiều của <span class="ru ru-big">па́спорт</span> là:', options: ['па́спорты', 'паспорта́', 'паспорти́', 'па́спортов'], a: 1, why: 'Thuộc nhóm lấy đuôi -а có trọng âm: паспорта, адреса, номера.' },
    { t: 'choice', q: 'Từ nào <b>không bao giờ</b> đổi đuôi?', options: ['фами́лия', 'пальто́', 'вре́мя', 'дочь'], a: 1, why: 'пальто là từ mượn tiếng Pháp, không biến cách. фамилия thì đổi bình thường.' },
    { t: 'type', q: 'Điền: Здесь мно́го ___ (челове́к → dạng chung chung)', a: 'людей', alt: ['люде́й'], hint: 'Cách 2 số nhiều, đổi hẳn gốc từ.' },
    { t: 'choice', q: 'Cách 2 số nhiều của <span class="ru ru-big">де́ньги</span> là:', options: ['де́ньгов', 'де́нег', 'де́ньги', 'де́ньгей'], a: 1, why: 'нет денег — bỏ đuôi và thêm nguyên âm nối.' },
    { t: 'match', q: 'Nối:', pairs: [['лю́ди', 'mọi người'], ['де́ти', 'bọn trẻ'], ['города́', 'các thành phố'], ['адреса́', 'các địa chỉ']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'у меня нет времени', a: 'у меня нет времени' }
  ]
};

/* ---------------------------------------------------------- BÀI 13 */
LESSON_DATA['a2-13'] = {
  level: 'a2',
  intro: 'Hai chữ <b>-ся</b> dính vào đuôi động từ, và động từ đổi nghĩa. Đây là một trong những cơ chế đẹp nhất của tiếng Nga — một đuôi nhỏ làm được bốn việc khác nhau.',
  blocks: [
    { t: 'h', text: 'Quy tắc gắn: -ся hay -сь' },
    { t: 'table', head: ['Sau', 'Dùng', 'Ví dụ'], rows: [
      ['phụ âm hoặc й, ь', '-ся', 'учу́<b>сь</b>… nhưng у́чит<b>ся</b>, учи́л<b>ся</b>'],
      ['nguyên âm', '-сь', 'учу́<b>сь</b>, у́чишь<b>ся</b>, учи́ла<b>сь</b>']
    ]},
    { t: 'p', html: 'Nói gọn: sau <b>nguyên âm</b> thì <b>-сь</b>, sau <b>phụ âm</b> thì <b>-ся</b>. Đọc lên là tai tự chọn đúng.' },
    { t: 'table', head: ['Ngôi', 'учи́ться (học)', 'Ngôi', 'учи́ться'], rows: [
      ['я', 'учу́сь', 'мы', 'у́чимся'],
      ['ты', 'у́чишься', 'вы', 'у́читесь'],
      ['он / она́', 'у́чится', 'они́', 'у́чатся']
    ]},
    { t: 'h', text: 'Bốn việc mà -ся làm được' },
    { t: 'table', head: ['Loại', 'Nghĩa', 'Ví dụ'], rows: [
      ['<b>1. Tự làm với mình</b>', 'hành động quay về chính người làm', 'мыть (rửa cái gì) → мы́ться (tắm rửa)<br>одева́ть (mặc cho ai) → одева́ться (mặc quần áo)'],
      ['<b>2. Lẫn nhau</b>', 'hai bên cùng làm với nhau', 'встреча́ться (gặp nhau)<br>целова́ться (hôn nhau)<br>здоро́ваться (chào nhau)'],
      ['<b>3. Trạng thái</b>', 'không có ai tác động, tự nó vậy', 'начина́ться (bắt đầu)<br>конча́ться (kết thúc)<br>открыва́ться (mở cửa)'],
      ['<b>4. Chỉ có bản -ся</b>', 'không tồn tại bản không -ся', 'смея́ться (cười)<br>боя́ться (sợ)<br>нра́виться (thích)<br>занима́ться (làm, theo đuổi)']
    ]},
    { t: 'h', text: 'Cặp đối chiếu — thấy rõ nghĩa đổi thế nào' },
    { t: 'table', head: ['Không có -ся', 'Có -ся'], rows: [
      ['Ма́ма мо́ет ребёнка. <span class="muted">Mẹ tắm cho con.</span>', 'Ребёнок мо́ется. <span class="muted">Đứa bé tự tắm.</span>'],
      ['Я начина́ю уро́к. <span class="muted">Tôi bắt đầu buổi học.</span>', 'Уро́к начина́ется. <span class="muted">Buổi học bắt đầu.</span>'],
      ['Он у́чит ру́сский. <span class="muted">Anh ấy học tiếng Nga.</span>', 'Он у́чится в шко́ле. <span class="muted">Anh ấy đi học ở trường.</span>'],
      ['Она́ открыва́ет дверь. <span class="muted">Cô ấy mở cửa.</span>', 'Дверь открыва́ется. <span class="muted">Cửa mở ra.</span>']
    ]},
    { t: 'warn', html: 'Cặp <span class="ru">учи́ть</span> ↔ <span class="ru">учи́ться</span> là chỗ người Việt sai nhiều nhất:<br>• <span class="ru">учи́ть</span> + cách 4 = học thuộc <b>môn gì</b>: <span class="ru">Я учу́ ру́сский язы́к.</span><br>• <span class="ru">учи́ться</span> + nơi chốn = đi học <b>ở đâu</b>: <span class="ru">Я учу́сь в университе́те.</span><br>Nói <span class="ru">Я учу́сь ру́сский язы́к</span> là sai.' },
    { t: 'h', text: 'Những động từ -ся em dùng hằng ngày' },
    { t: 'words', items: [
      { ru: 'учи́ться', vn: 'đi học (ở đâu)' },
      { ru: 'занима́ться', vn: 'làm, theo đuổi (+ cách 5)' },
      { ru: 'встреча́ться', vn: 'gặp nhau' },
      { ru: 'находи́ться', vn: 'toạ lạc, nằm ở' },
      { ru: 'начина́ться', vn: 'bắt đầu' },
      { ru: 'конча́ться', vn: 'kết thúc' },
      { ru: 'нра́виться', vn: 'thích, làm vừa lòng' },
      { ru: 'смея́ться', vn: 'cười' },
      { ru: 'боя́ться', vn: 'sợ (+ cách 2)' },
      { ru: 'улыба́ться', vn: 'mỉm cười' },
      { ru: 'возвраща́ться', vn: 'quay về' },
      { ru: 'познако́миться', vn: 'làm quen' }
    ]},
    { t: 'words', items: [
      { ru: 'Я занима́юсь иссле́дованием.', vn: 'Tôi làm nghiên cứu. (+ cách 5)' },
      { ru: 'Где нахо́дится вокза́л?', vn: 'Nhà ga nằm ở đâu?' },
      { ru: 'Уро́к начина́ется в де́вять.', vn: 'Buổi học bắt đầu lúc 9 giờ.' },
      { ru: 'О́чень прия́тно познако́миться!', vn: 'Rất vui được làm quen!' },
      { ru: 'Я бою́сь соба́к.', vn: 'Tôi sợ chó. (бояться + cách 2)' }
    ]},
    { t: 'tip', html: '<span class="ru">Где нахо́дится…?</span> là cách hỏi đường lịch sự và chuẩn mực hơn <span class="ru">Где…?</span> trống không. Dùng khi hỏi người lạ.' }
  ],
  vocab: [
    { ru: 'учи́ться', vn: 'đi học (ở đâu)' }, { ru: 'занима́ться', vn: 'làm, theo đuổi' },
    { ru: 'встреча́ться', vn: 'gặp nhau' }, { ru: 'находи́ться', vn: 'nằm ở, toạ lạc' },
    { ru: 'начина́ться', vn: 'bắt đầu' }, { ru: 'конча́ться', vn: 'kết thúc' },
    { ru: 'смея́ться', vn: 'cười' }, { ru: 'боя́ться', vn: 'sợ' },
    { ru: 'улыба́ться', vn: 'mỉm cười' }, { ru: 'возвраща́ться', vn: 'quay về' },
    { ru: 'познако́миться', vn: 'làm quen' }, { ru: 'одева́ться', vn: 'mặc quần áo' }
  ],
  ex: [
    { t: 'choice', q: 'Câu nào <b>đúng</b>?', options: ['Я учу́сь ру́сский язы́к.', 'Я учу́ ру́сский язы́к.', 'Я учу́сь ру́сским языко́м.', 'Я учу́ в университе́те.'], a: 1, why: 'учить + cách 4 = học môn gì. учиться + nơi chốn = đi học ở đâu.' },
    { t: 'type', q: 'Điền: Я ___ в университе́те. (đi học ở đâu)', a: 'учусь', alt: ['учу́сь'], hint: 'Ngôi я của учиться.' },
    { t: 'choice', q: 'Sau nguyên âm thì gắn đuôi nào?', options: ['-ся', '-сь', 'cả hai như nhau', 'không gắn gì'], a: 1, why: 'Sau nguyên âm dùng -сь (учусь, училась), sau phụ âm dùng -ся (учится, учился).' },
    { t: 'choice', q: '<span class="ru ru-big">Уро́к начина́ется</span> nghĩa là:', options: ['Tôi bắt đầu buổi học', 'Buổi học bắt đầu', 'Buổi học đã bắt đầu rồi', 'Hãy bắt đầu buổi học'], a: 1, why: 'Đuôi -ся biến hành động thành trạng thái tự diễn ra, không ai tác động.' },
    { t: 'choice', q: 'Động từ nào <b>không tồn tại</b> ở dạng không có -ся?', options: ['мы́ться', 'учи́ться', 'смея́ться', 'встреча́ться'], a: 2, why: 'Không có động từ “смеять”. Cùng nhóm này có бояться, нравиться, заниматься.' },
    { t: 'choice', q: 'Hỏi đường lịch sự nhất là:', options: ['Где вокза́л?', 'Где нахо́дится вокза́л?', 'Вокза́л где?', 'Что вокза́л?'], a: 1, why: 'Где находится… nghe lịch sự và chuẩn mực hơn khi hỏi người lạ.' },
    { t: 'match', q: 'Nối:', pairs: [['боя́ться', 'sợ'], ['улыба́ться', 'mỉm cười'], ['возвраща́ться', 'quay về'], ['познако́миться', 'làm quen']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'я учусь в университете', a: 'я учусь в университете' }
  ]
};

/* ---------------------------------------------------------- BÀI 14 */
LESSON_DATA['a2-14'] = {
  level: 'a2',
  intro: 'Cần, phải, có thể, được phép — bốn ý mà tiếng Việt nói dễ dàng nhưng tiếng Nga chia thành hai kiểu câu hoàn toàn khác nhau. Nắm được sự khác nhau ấy là bài này xong.',
  blocks: [
    { t: 'h', text: 'Hai kiểu câu: có chủ ngữ và không có chủ ngữ' },
    { t: 'table', head: ['Kiểu', 'Cấu trúc', 'Ví dụ'], rows: [
      ['<b>Không có chủ ngữ</b>', 'người ở <b>cách 3</b> + từ + nguyên thể', '<b>Мне</b> на́до идти́. — Tôi phải đi.'],
      ['<b>Có chủ ngữ</b>', 'người ở <b>cách 1</b> + должен + nguyên thể', '<b>Я</b> до́лжен идти́. — Tôi phải đi.']
    ]},
    { t: 'warn', html: 'Đây là chỗ vấp: câu kiểu thứ nhất <b>không có chủ ngữ</b> theo nghĩa ngữ pháp. Người ta đứng ở cách 3 (<span class="ru">мне, тебе́, ему́</span>) chứ không phải cách 1. Nói <span class="ru">Я на́до идти́</span> là sai.' },
    { t: 'h', text: 'Nhóm không có chủ ngữ' },
    { t: 'table', head: ['Từ', 'Nghĩa', 'Sắc thái'], rows: [
      ['на́до', 'phải, cần', 'đời thường, hay dùng nhất'],
      ['ну́жно', 'cần', 'hơi trang trọng hơn на́до, gần như đồng nghĩa'],
      ['мо́жно', 'có thể, được phép', 'xin phép'],
      ['нельзя́', 'không được phép, không thể', 'cấm'],
      ['тру́дно / легко́', 'khó / dễ', 'đánh giá'],
      ['по́здно / ра́но', 'muộn / sớm', 'đánh giá']
    ]},
    { t: 'words', items: [
      { ru: 'Мне на́до идти́.', vn: 'Tôi phải đi rồi.' },
      { ru: 'Тебе́ ну́жно отдохну́ть.', vn: 'Cậu cần nghỉ ngơi.' },
      { ru: 'Мо́жно войти́?', vn: 'Cho tôi vào được không ạ?' },
      { ru: 'Здесь нельзя́ кури́ть.', vn: 'Ở đây cấm hút thuốc.' },
      { ru: 'Мне тру́дно говори́ть бы́стро.', vn: 'Tôi khó nói nhanh được.' },
      { ru: 'Уже́ по́здно, пора́ спать.', vn: 'Muộn rồi, đến giờ đi ngủ.' }
    ]},
    { t: 'tip', html: '<span class="ru"><b>Мо́жно?</b></span> đứng một mình là câu xin phép vạn năng — gõ cửa phòng, muốn ngồi ghế trống, muốn cầm thử món đồ. Một từ, dùng được khắp nơi. Trả lời: <span class="ru">Мо́жно.</span> hoặc <span class="ru">Коне́чно!</span>' },
    { t: 'h', text: 'ДОЛЖЕН — có chủ ngữ, phải hoà hợp' },
    { t: 'table', head: ['Ai nói', 'Dạng', 'Ví dụ'], rows: [
      ['Nam', 'до́лжен', 'Я до́лжен рабо́тать.'],
      ['Nữ', 'должна́', 'Я должна́ рабо́тать.'],
      ['Trung', 'должно́', 'Э́то должно́ быть здесь.'],
      ['Số nhiều', 'должны́', 'Мы должны́ рабо́тать.']
    ]},
    { t: 'note', html: 'Sắc thái khác nhau: <span class="ru">на́до</span> là hoàn cảnh bắt buộc ("phải đi thôi, muộn rồi"), còn <span class="ru">до́лжен</span> là <b>bổn phận</b>, trách nhiệm cá nhân ("tôi có nghĩa vụ phải làm"). Người Nga cảm nhận rõ sự khác nhau này.' },
    { t: 'h', text: 'Nói về quá khứ và tương lai' },
    { t: 'p', html: 'Thêm <span class="ru">бы́ло</span> cho quá khứ, <span class="ru">бу́дет</span> cho tương lai — và chúng luôn ở dạng <b>giống trung</b> vì câu không có chủ ngữ:' },
    { t: 'words', items: [
      { ru: 'Мне на́до бы́ло идти́.', vn: 'Tôi đã phải đi.' },
      { ru: 'Мне на́до бу́дет идти́.', vn: 'Tôi sẽ phải đi.' },
      { ru: 'Мо́жно бы́ло войти́.', vn: 'Lúc đó vào được.' },
      { ru: 'Я до́лжен был рабо́тать.', vn: 'Tôi đã phải làm việc. (có chủ ngữ nên был hoà hợp)' }
    ]},
    { t: 'h', text: 'Cấm và cho phép trên biển báo' },
    { t: 'words', items: [
      { ru: 'Нельзя́!', vn: 'Không được!' },
      { ru: 'Вход воспрещён', vn: 'Cấm vào' },
      { ru: 'Не кури́ть', vn: 'Cấm hút thuốc' },
      { ru: 'Мо́жно плати́ть ка́ртой?', vn: 'Trả thẻ được không ạ?' },
      { ru: 'Извини́те, мне пора́.', vn: 'Xin lỗi, tôi phải đi rồi.' }
    ]}
  ],
  vocab: [
    { ru: 'на́до', vn: 'phải, cần' }, { ru: 'ну́жно', vn: 'cần' },
    { ru: 'мо́жно', vn: 'có thể, được phép' }, { ru: 'нельзя́', vn: 'không được phép' },
    { ru: 'до́лжен / должна́', vn: 'phải (bổn phận)' }, { ru: 'пора́', vn: 'đến lúc rồi' },
    { ru: 'отдохну́ть', vn: 'nghỉ ngơi' }, { ru: 'плати́ть', vn: 'trả tiền' },
    { ru: 'ка́рта', vn: 'thẻ; bản đồ' }
  ],
  ex: [
    { t: 'choice', q: 'Câu nào <b>đúng</b>?', options: ['Я на́до идти́.', 'Мне на́до идти́.', 'Меня́ на́до идти́.', 'Мной на́до идти́.'], a: 1, why: 'надо đi với người ở cách 3, câu không có chủ ngữ.' },
    { t: 'choice', q: 'Oanh nói "Tôi phải làm việc" bằng должен:', options: ['Я до́лжен рабо́тать.', 'Я должна́ рабо́тать.', 'Мне должна́ рабо́тать.', 'Я должны́ рабо́тать.'], a: 1, why: 'должен hoà hợp với người nói; Oanh là nữ nên dùng должна.' },
    { t: 'choice', q: 'Xin phép vào phòng nói gọn nhất là:', options: ['Хочу́ войти́.', 'Мо́жно?', 'На́до войти́.', 'Я до́лжен войти́.'], a: 1, why: 'Можно? một từ, dùng được ở mọi tình huống xin phép.' },
    { t: 'choice', q: 'Khác nhau giữa <span class="ru">на́до</span> và <span class="ru">до́лжен</span>:', options: ['Không khác gì', 'надо là hoàn cảnh bắt buộc, должен là bổn phận cá nhân', 'должен lịch sự hơn', 'надo chỉ dùng ở quá khứ'], a: 1, why: 'Sắc thái: hoàn cảnh ép buộc ≠ trách nhiệm mình mang.' },
    { t: 'type', q: 'Điền: Здесь ___ кури́ть. (cấm)', a: 'нельзя', alt: ['нельзя́'], hint: 'Từ chỉ sự cấm đoán.' },
    { t: 'choice', q: '"Tôi đã phải đi" nói là:', options: ['Мне на́до идти́ был.', 'Мне на́до бы́ло идти́.', 'Мне была́ на́до идти́.', 'Я на́до был идти́.'], a: 1, why: 'Câu không có chủ ngữ nên dùng было ở giống trung.' },
    { t: 'match', q: 'Nối:', pairs: [['пора́', 'đến lúc rồi'], ['плати́ть', 'trả tiền'], ['отдохну́ть', 'nghỉ ngơi'], ['нельзя́', 'không được phép']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'мне надо идти', a: 'мне надо идти' }
  ]
};

/* ---------------------------------------------------------- BÀI 15 */
LESSON_DATA['a2-15'] = {
  level: 'a2',
  intro: 'Gọi điện bằng tiếng nước ngoài khó hơn nói mặt đối mặt nhiều — không có nét mặt, không đọc được khẩu hình. Bài này cho em bộ câu để không bị đứng hình khi chuông reo.',
  blocks: [
    { t: 'h', text: 'Nhấc máy và gọi đi' },
    { t: 'words', items: [
      { ru: 'Алло́!', vn: 'A lô!' },
      { ru: 'Слу́шаю.', vn: 'Tôi nghe đây.' },
      { ru: 'Э́то Оа́нь. Мо́жно Ири́ну?', vn: 'Oanh đây. Cho tôi gặp Irina ạ?' },
      { ru: 'Позови́те, пожа́луйста, Ива́на.', vn: 'Làm ơn gọi giúp Ivan ạ.' },
      { ru: 'Кто э́то говори́т?', vn: 'Ai đang nói đấy ạ?' },
      { ru: 'Мину́точку.', vn: 'Chờ một chút ạ.' },
      { ru: 'Его́ нет до́ма.', vn: 'Anh ấy không có nhà.' },
      { ru: 'Переда́ть что-нибу́дь?', vn: 'Có nhắn gì không ạ?' },
      { ru: 'Перезвони́те, пожа́луйста, по́зже.', vn: 'Anh gọi lại sau giúp ạ.' },
      { ru: 'Вы не туда́ попа́ли.', vn: 'Anh gọi nhầm số rồi ạ.' }
    ]},
    { t: 'tip', html: 'Người Nga nhấc máy thường nói <span class="ru">Алло́</span> hoặc <span class="ru">Да</span>, còn ở cơ quan thì nói <span class="ru">Слу́шаю</span> hoặc đọc luôn tên đơn vị. Không có thói quen tự xưng tên ngay như người Mỹ.' },
    { t: 'h', text: 'Khi nghe không rõ' },
    { t: 'words', items: [
      { ru: 'Пло́хо слы́шно.', vn: 'Nghe không rõ ạ.' },
      { ru: 'Повтори́те, пожа́луйста.', vn: 'Anh nhắc lại giúp ạ.' },
      { ru: 'Говори́те, пожа́луйста, ме́дленнее.', vn: 'Anh nói chậm hơn giúp ạ.' },
      { ru: 'Как пи́шется?', vn: 'Viết thế nào ạ?' },
      { ru: 'По бу́квам, пожа́луйста.', vn: 'Anh đánh vần giúp ạ.' },
      { ru: 'Я вас не по́нял. / не поняла́.', vn: 'Tôi chưa hiểu ạ. (nam / nữ)' }
    ]},
    { t: 'warn', html: 'Ba câu cứu mạng khi gọi điện: <span class="ru">Пло́хо слы́шно</span> · <span class="ru">Повтори́те, пожа́луйста</span> · <span class="ru">Ме́дленнее, пожа́луйста</span>. Không ai phiền lòng khi em nói mấy câu đó cả — người Nga biết em là người nước ngoài và thường nói chậm lại ngay.' },
    { t: 'h', text: 'Hẹn gặp qua điện thoại' },
    { t: 'dialog', lines: [
      { who: 'О', ru: 'Алло́, Ири́на? Э́то Оа́нь.', vn: 'A lô, Irina à? Oanh đây.' },
      { who: 'И', ru: 'Приве́т, Оа́нь! Как дела́?', vn: 'Chào Oanh! Khoẻ không?' },
      { who: 'О', ru: 'Хорошо́, спаси́бо. Ты свобо́дна за́втра ве́чером?', vn: 'Ổn, cảm ơn cậu. Mai tối cậu rảnh không?' },
      { who: 'И', ru: 'Ду́маю, да. А что?', vn: 'Chắc là rảnh. Có việc gì thế?' },
      { who: 'О', ru: 'Мо́жет, схо́дим в кино́?', vn: 'Hay mình đi xem phim nhé?' },
      { who: 'И', ru: 'С удово́льствием! Во ско́лько?', vn: 'Đi chứ! Mấy giờ?' },
      { who: 'О', ru: 'В семь, у метро́. Договори́лись?', vn: 'Bảy giờ, ở chỗ metro. Chốt nhé?' },
      { who: 'И', ru: 'Договори́лись! До за́втра.', vn: 'Chốt! Mai gặp.' }
    ]},
    { t: 'note', html: 'Ba cụm trong đoạn trên đáng thuộc nguyên khối: <span class="ru">Мо́жет, схо́дим…?</span> (hay là mình đi…?), <span class="ru">С удово́льствием!</span> (rất sẵn lòng!), <span class="ru">Во ско́лько?</span> (mấy giờ?).' },
    { t: 'h', text: 'Viết email và tin nhắn' },
    { t: 'table', head: ['Mức', 'Mở đầu', 'Kết thúc'], rows: [
      ['Trang trọng', 'Уважа́емый Ива́н Петро́вич!', 'С уваже́нием, Чунг'],
      ['Công việc bình thường', 'Здра́вствуйте, Ири́на!', 'С наилу́чшими пожела́ниями'],
      ['Thân mật', 'Приве́т!', 'Пока́! / Обнима́ю']
    ]},
    { t: 'words', items: [
      { ru: 'Пишу́ вам по по́воду…', vn: 'Tôi viết thư về việc…' },
      { ru: 'Прошу́ вас…', vn: 'Tôi xin nhờ ông/bà…' },
      { ru: 'Прилага́ю файл.', vn: 'Tôi gửi kèm tệp.' },
      { ru: 'Жду ва́шего отве́та.', vn: 'Mong nhận được hồi âm.' },
      { ru: 'Зара́нее спаси́бо.', vn: 'Xin cảm ơn trước.' }
    ]},
    { t: 'tip', html: 'Với thầy hướng dẫn, giáo vụ, phòng ban ở Nga — luôn dùng cột <b>trang trọng</b>. Thư tiếng Nga trang trọng hơn thư tiếng Anh nhiều, viết quá thân mật bị coi là thiếu lễ độ.' }
  ],
  vocab: [
    { ru: 'Алло́', vn: 'A lô' }, { ru: 'Мину́точку', vn: 'Chờ một chút' },
    { ru: 'перезвони́ть', vn: 'gọi lại' }, { ru: 'Пло́хо слы́шно', vn: 'Nghe không rõ' },
    { ru: 'по бу́квам', vn: 'đánh vần' }, { ru: 'свобо́ден / свобо́дна', vn: 'rảnh' },
    { ru: 'С удово́льствием', vn: 'Rất sẵn lòng' }, { ru: 'Во ско́лько?', vn: 'Mấy giờ?' },
    { ru: 'по по́воду', vn: 'về việc' }, { ru: 'прилага́ю', vn: 'tôi gửi kèm' },
    { ru: 'Зара́нее спаси́бо', vn: 'Cảm ơn trước' }
  ],
  ex: [
    { t: 'choice', q: 'Gọi nhầm số, người ta nói:', options: ['Мину́точку.', 'Вы не туда́ попа́ли.', 'Слу́шаю.', 'Перезвони́те.'], a: 1, why: 'Nghĩa đen “anh rơi không đúng chỗ” — tức là nhầm số.' },
    { t: 'choice', q: 'Nghe không rõ thì nói:', options: ['Я не зна́ю.', 'Пло́хо слы́шно.', 'До свида́ния.', 'Мо́жно?'], a: 1, why: 'Câu chuẩn khi đường truyền kém hoặc nghe không rõ.' },
    { t: 'type', q: 'Trả lời lời mời một cách vui vẻ: С ___ !', a: 'удовольствием', alt: ['удово́льствием'], hint: 'Cách 5 của удовольствие.' },
    { t: 'choice', q: 'Viết email cho thầy hướng dẫn, mở đầu bằng:', options: ['Приве́т!', 'Здоро́во!', 'Уважа́емый Ива́н Петро́вич!', 'Эй!'], a: 2, why: 'Thư tiếng Nga trang trọng hơn tiếng Anh; với thầy phải dùng Уважаемый + tên và tên đệm.' },
    { t: 'choice', q: '<span class="ru ru-big">Во ско́лько?</span> nghĩa là:', options: ['Bao nhiêu tiền?', 'Mấy giờ?', 'Bao nhiêu người?', 'Ở đâu?'], a: 1, why: 'Hỏi giờ hẹn. Đừng nhầm với Который час? (mấy giờ rồi).' },
    { t: 'type', q: 'Nhờ người ta đánh vần: По ___ , пожа́луйста.', a: 'буквам', alt: ['бу́квам'], hint: 'Cách 3 số nhiều của буква.' },
    { t: 'match', q: 'Nối:', pairs: [['Мину́точку', 'Chờ một chút'], ['перезвони́ть', 'gọi lại'], ['свобо́дна', 'rảnh (nữ)'], ['Зара́нее спаси́бо', 'Cảm ơn trước']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'повторите пожалуйста', a: 'повторите пожалуйста' }
  ]
};

/* ---------------------------------------------------------- BÀI 16 */
LESSON_DATA['a2-16'] = {
  level: 'a2',
  intro: 'Thuê nhà ở Nga là một trong những việc đầu tiên em phải làm khi sang. Bài này cho em đủ từ để đọc tin đăng, hỏi chủ nhà, và mô tả chỗ mình ở.',
  blocks: [
    { t: 'h', text: 'Các loại chỗ ở' },
    { t: 'words', items: [
      { ru: 'кварти́ра', vn: 'căn hộ' }, { ru: 'ко́мната', vn: 'căn phòng; phòng thuê riêng' },
      { ru: 'общежи́тие', vn: 'ký túc xá' }, { ru: 'дом', vn: 'nhà riêng' },
      { ru: 'сту́дия', vn: 'căn hộ studio' }, { ru: 'подъе́зд', vn: 'sảnh chung cư, cửa vào' },
      { ru: 'эта́ж', vn: 'tầng' }, { ru: 'лифт', vn: 'thang máy' }
    ]},
    { t: 'note', html: 'Tin đăng cho thuê ở Nga viết <b>однокомнатная / двухкомнатная кварти́ра</b> — đếm theo <b>số phòng ở</b>, không tính bếp và nhà tắm. Viết tắt là <b>1-к.кв., 2-к.кв.</b> Người Việt hay hiểu nhầm thành số phòng ngủ.' },
    { t: 'h', text: 'Trong nhà có gì' },
    { t: 'words', items: [
      { ru: 'ку́хня', vn: 'bếp' }, { ru: 'спа́льня', vn: 'phòng ngủ' },
      { ru: 'гости́ная', vn: 'phòng khách' }, { ru: 'ва́нная', vn: 'phòng tắm' },
      { ru: 'туале́т', vn: 'nhà vệ sinh' }, { ru: 'балко́н', vn: 'ban công' },
      { ru: 'коридо́р', vn: 'hành lang' }, { ru: 'окно́', vn: 'cửa sổ' },
      { ru: 'мебель', vn: 'đồ đạc, nội thất' }, { ru: 'крова́ть', vn: 'giường' },
      { ru: 'шкаф', vn: 'tủ' }, { ru: 'холоди́льник', vn: 'tủ lạnh' },
      { ru: 'стира́льная маши́на', vn: 'máy giặt' }, { ru: 'плита́', vn: 'bếp nấu' }
    ]},
    { t: 'warn', html: 'Ở Nga <span class="ru">ва́нная</span> (phòng tắm) và <span class="ru">туале́т</span> (nhà vệ sinh) thường là <b>hai phòng riêng biệt</b>. Tin đăng ghi <span class="ru">санузе́л разде́льный</span> (tách riêng) hoặc <span class="ru">совмещённый</span> (chung một phòng).' },
    { t: 'h', text: 'Mô tả chỗ ở của em' },
    { t: 'words', items: [
      { ru: 'Я снима́ю кварти́ру.', vn: 'Tôi thuê một căn hộ.' },
      { ru: 'Я живу́ в общежи́тии.', vn: 'Tôi ở ký túc xá.' },
      { ru: 'Кварти́ра на пя́том этаже́.', vn: 'Căn hộ ở tầng năm.' },
      { ru: 'В ко́мнате есть стол, крова́ть и шкаф.', vn: 'Trong phòng có bàn, giường và tủ.' },
      { ru: 'О́кна выхо́дят во двор.', vn: 'Cửa sổ nhìn ra sân trong.' },
      { ru: 'Ря́дом есть магази́н и остано́вка.', vn: 'Gần đó có cửa hàng và bến xe.' }
    ]},
    { t: 'h', text: 'Hỏi khi đi thuê' },
    { t: 'dialog', lines: [
      { who: 'О', ru: 'Здра́вствуйте, я по объявле́нию. Кварти́ра ещё свобо́дна?', vn: 'Chào anh, tôi gọi theo tin đăng. Căn hộ còn trống không ạ?' },
      { who: 'Х', ru: 'Да, свобо́дна. Что вас интересу́ет?', vn: 'Còn ạ. Chị muốn hỏi gì?' },
      { who: 'О', ru: 'Ско́лько сто́ит в ме́сяц?', vn: 'Một tháng bao nhiêu ạ?' },
      { who: 'Х', ru: 'Три́дцать ты́сяч плюс коммуна́льные услу́ги.', vn: 'Ba mươi nghìn cộng tiền dịch vụ.' },
      { who: 'О', ru: 'Ме́бель есть? И стира́льная маши́на?', vn: 'Có nội thất không ạ? Máy giặt nữa?' },
      { who: 'Х', ru: 'Всё есть. Кварти́ра по́лностью обста́влена.', vn: 'Có hết. Căn hộ đủ đồ.' },
      { who: 'О', ru: 'А како́й эта́ж? Лифт рабо́тает?', vn: 'Tầng mấy ạ? Thang máy có chạy không?' },
      { who: 'Х', ru: 'Седьмо́й, лифт есть. Хоти́те посмотре́ть?', vn: 'Tầng bảy, có thang máy. Chị muốn xem không?' },
      { who: 'О', ru: 'Да, когда́ мо́жно?', vn: 'Vâng, khi nào xem được ạ?' }
    ]},
    { t: 'tip', html: 'Từ quan trọng nhất trong đoạn trên là <span class="ru"><b>коммуна́льные услу́ги</b></span> (viết tắt <b>ЖКХ</b> hoặc <span class="ru">коммуна́лка</span>) — tiền điện nước, sưởi, rác. Mùa đông Nga tiền sưởi rất đáng kể, nên luôn hỏi giá đã gồm khoản này chưa.' },
    { t: 'words', items: [
      { ru: 'снима́ть', vn: 'thuê (nhà)' }, { ru: 'хозя́ин / хозя́йка', vn: 'chủ nhà' },
      { ru: 'объявле́ние', vn: 'tin đăng' }, { ru: 'догово́р', vn: 'hợp đồng' },
      { ru: 'зало́г', vn: 'tiền đặt cọc' }, { ru: 'в ме́сяц', vn: 'mỗi tháng' },
      { ru: 'коммуна́льные услу́ги', vn: 'tiền điện nước dịch vụ' }, { ru: 'сосе́ди', vn: 'hàng xóm' }
    ]}
  ],
  vocab: [
    { ru: 'кварти́ра', vn: 'căn hộ' }, { ru: 'снима́ть', vn: 'thuê nhà' },
    { ru: 'эта́ж', vn: 'tầng' }, { ru: 'ме́бель', vn: 'nội thất' },
    { ru: 'холоди́льник', vn: 'tủ lạnh' }, { ru: 'стира́льная маши́на', vn: 'máy giặt' },
    { ru: 'хозя́ин', vn: 'chủ nhà' }, { ru: 'догово́р', vn: 'hợp đồng' },
    { ru: 'зало́г', vn: 'tiền đặt cọc' }, { ru: 'коммуна́льные услу́ги', vn: 'tiền dịch vụ điện nước' },
    { ru: 'объявле́ние', vn: 'tin đăng' }, { ru: 'сосе́ди', vn: 'hàng xóm' }
  ],
  ex: [
    { t: 'choice', q: '<span class="ru ru-big">двухко́мнатная кварти́ра</span> nghĩa là:', options: ['Hai phòng ngủ', 'Hai phòng ở, chưa tính bếp và nhà tắm', 'Hai tầng', 'Hai căn hộ'], a: 1, why: 'Tin đăng Nga đếm số phòng ở, không tính bếp và khu vệ sinh.' },
    { t: 'choice', q: '<span class="ru ru-big">коммуна́льные услу́ги</span> là gì?', options: ['Tiền thuê nhà', 'Tiền điện nước, sưởi, rác', 'Tiền đặt cọc', 'Phí môi giới'], a: 1, why: 'Khoản này mùa đông Nga khá lớn vì tiền sưởi — luôn hỏi giá đã gồm chưa.' },
    { t: 'type', q: 'Điền: Я ___ кварти́ру. (tôi thuê căn hộ)', a: 'снимаю', alt: ['снима́ю'], hint: 'Ngôi я của снимать.' },
    { t: 'choice', q: 'Ở Nga, <span class="ru">ва́нная</span> và <span class="ru">туале́т</span> thường:', options: ['Là một phòng', 'Là hai phòng riêng', 'Không có trong căn hộ', 'Chỉ có ở nhà riêng'], a: 1, why: 'Thường tách riêng — tin đăng ghi санузел раздельный.' },
    { t: 'choice', q: '"Căn hộ ở tầng năm" nói là:', options: ['Кварти́ра на пять эта́ж.', 'Кварти́ра на пя́том этаже́.', 'Кварти́ра в пя́тый эта́ж.', 'Кварти́ра пя́тый эта́ж.'], a: 1, why: 'на + số thứ tự + этаже (cách 6).' },
    { t: 'choice', q: '<span class="ru ru-big">зало́г</span> nghĩa là:', options: ['Hợp đồng', 'Tiền đặt cọc', 'Tiền thuê tháng đầu', 'Chủ nhà'], a: 1, why: 'Khoản đặt cọc, thường bằng một tháng tiền nhà.' },
    { t: 'match', q: 'Nối:', pairs: [['холоди́льник', 'tủ lạnh'], ['балко́н', 'ban công'], ['хозя́ин', 'chủ nhà'], ['объявле́ние', 'tin đăng']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'сколько стоит в месяц', a: 'сколько стоит в месяц' }
  ]
};

/* ---------------------------------------------------------- BÀI 17 */
LESSON_DATA['a2-17'] = {
  level: 'a2',
  intro: 'Nói về công việc — của mình và của người khác. Bài này gom lại cách dùng cách 5 cho nghề nghiệp mà em học ở A1, và thêm bộ từ để nói về nơi làm, việc làm, và cả chuyện xin việc.',
  blocks: [
    { t: 'h', text: 'Ba cách nói về nghề' },
    { t: 'table', head: ['Cấu trúc', 'Ví dụ', 'Sắc thái'], rows: [
      ['Он + nghề (cách 1)', 'Он врач.', 'Danh tính: anh ấy <b>là</b> bác sĩ'],
      ['рабо́тать + cách 5', 'Он рабо́тает врачо́м.', 'Công việc đang làm'],
      ['рабо́тать + nơi chốn', 'Он рабо́тает в больни́це.', 'Nơi làm việc']
    ]},
    { t: 'words', items: [
      { ru: 'Кем вы рабо́таете?', vn: 'Anh làm nghề gì? (nghĩa đen: làm với tư cách ai)' },
      { ru: 'Где вы рабо́таете?', vn: 'Anh làm ở đâu?' },
      { ru: 'Я рабо́таю инжене́ром на заво́де.', vn: 'Tôi làm kỹ sư ở nhà máy.' },
      { ru: 'Я учу́сь в аспиранту́ре.', vn: 'Tôi đang học nghiên cứu sinh.' },
      { ru: 'Я ещё не рабо́таю.', vn: 'Tôi chưa đi làm.' }
    ]},
    { t: 'note', html: 'Câu hỏi <span class="ru">Кем вы рабо́таете?</span> dùng <b>cách 5</b> ngay trong từ để hỏi — <span class="ru">кем</span> là dạng cách 5 của <span class="ru">кто</span>. Trả lời cũng phải ở cách 5: <span class="ru">инжене́ром, врачо́м, учи́телем</span>.' },
    { t: 'h', text: 'Nơi làm việc' },
    { t: 'words', items: [
      { ru: 'о́фис', vn: 'văn phòng' }, { ru: 'заво́д', vn: 'nhà máy' },
      { ru: 'фи́рма', vn: 'công ty' }, { ru: 'компа́ния', vn: 'công ty' },
      { ru: 'лаборато́рия', vn: 'phòng thí nghiệm' }, { ru: 'ка́федра', vn: 'bộ môn' },
      { ru: 'больни́ца', vn: 'bệnh viện' }, { ru: 'шко́ла', vn: 'trường học' }
    ]},
    { t: 'warn', html: 'Nhắc lại bẫy в/на từ A1: <span class="ru">в о́фисе, в лаборато́рии, в больни́це</span> nhưng <span class="ru">на заво́де, на ка́федре, на фи́рме, на рабо́те</span>. Nhóm НА không có logic, phải thuộc.' },
    { t: 'h', text: 'Nói về ngày làm việc' },
    { t: 'words', items: [
      { ru: 'Я рабо́таю с девяти́ до шести́.', vn: 'Tôi làm từ 9 giờ đến 6 giờ.' },
      { ru: 'Рабо́чий день', vn: 'ngày làm việc' },
      { ru: 'Выходно́й', vn: 'ngày nghỉ' },
      { ru: 'Обе́денный переры́в', vn: 'giờ nghỉ trưa' },
      { ru: 'Я рабо́таю уда́лённо.', vn: 'Tôi làm việc từ xa.' },
      { ru: 'У меня́ мно́го рабо́ты.', vn: 'Tôi nhiều việc lắm.' },
      { ru: 'Я о́чень уста́л. / уста́ла.', vn: 'Tôi mệt lắm. (nam / nữ)' }
    ]},
    { t: 'note', html: '<span class="ru">с девяти́ до шести́</span> — giới từ <span class="ru">с</span> và <span class="ru">до</span> đều đòi <b>cách 2</b>. Đây là kiểu nói giờ giấc chuẩn: <span class="ru">с утра́ до ве́чера</span> (từ sáng đến tối), <span class="ru">с понеде́льника до пя́тницы</span> (từ thứ hai đến thứ sáu).' },
    { t: 'h', text: 'Xin việc' },
    { t: 'words', items: [
      { ru: 'иска́ть рабо́ту', vn: 'tìm việc' },
      { ru: 'резюме́', vn: 'CV (không đổi đuôi)' },
      { ru: 'собесе́дование', vn: 'phỏng vấn' },
      { ru: 'о́пыт рабо́ты', vn: 'kinh nghiệm làm việc' },
      { ru: 'зарпла́та', vn: 'lương' },
      { ru: 'ваканси́я', vn: 'vị trí tuyển dụng' },
      { ru: 'нача́льник', vn: 'sếp' },
      { ru: 'колле́га', vn: 'đồng nghiệp' }
    ]},
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Кем вы рабо́таете?', vn: 'Anh làm nghề gì ạ?' },
      { who: 'Б', ru: 'Я инжене́р. Рабо́таю на заво́де, занима́юсь дви́гателями.', vn: 'Tôi là kỹ sư. Làm ở nhà máy, chuyên về động cơ.' },
      { who: 'А', ru: 'Интере́сно! А давно́?', vn: 'Hay đấy! Lâu chưa ạ?' },
      { who: 'Б', ru: 'Три го́да. Ра́ньше учи́лся в Ирку́тске.', vn: 'Ba năm rồi. Trước tôi học ở Irkutsk.' },
      { who: 'А', ru: 'И как вам рабо́та?', vn: 'Anh thấy công việc thế nào?' },
      { who: 'Б', ru: 'Нра́вится. Хотя́ иногда́ о́чень уста́ю.', vn: 'Tôi thích. Dù đôi khi mệt lắm.' }
    ]},
    { t: 'tip', html: 'Chú ý <span class="ru">занима́юсь дви́гателями</span> — động từ <span class="ru">занима́ться</span> đòi <b>cách 5</b>, đúng như em học ở A1 bài 17. Đây là cách nói chuyên môn rất tự nhiên: <span class="ru">занима́юсь иссле́дованием, занима́юсь спо́ртом, занима́юсь му́зыкой</span>.' }
  ],
  vocab: [
    { ru: 'Кем вы рабо́таете?', vn: 'Anh làm nghề gì?' }, { ru: 'о́фис', vn: 'văn phòng' },
    { ru: 'заво́д', vn: 'nhà máy' }, { ru: 'фи́рма', vn: 'công ty' },
    { ru: 'зарпла́та', vn: 'lương' }, { ru: 'собесе́дование', vn: 'phỏng vấn' },
    { ru: 'резюме́', vn: 'CV' }, { ru: 'о́пыт рабо́ты', vn: 'kinh nghiệm làm việc' },
    { ru: 'нача́льник', vn: 'sếp' }, { ru: 'колле́га', vn: 'đồng nghiệp' },
    { ru: 'выходно́й', vn: 'ngày nghỉ' }, { ru: 'уста́ть', vn: 'mệt' },
    { ru: 'аспиранту́ра', vn: 'hệ nghiên cứu sinh' }
  ],
  ex: [
    { t: 'choice', q: '<span class="ru ru-big">Кем вы рабо́таете?</span> hỏi về:', options: ['Nơi làm việc', 'Nghề nghiệp', 'Mức lương', 'Sếp của anh'], a: 1, why: 'кем là cách 5 của кто — hỏi “làm với tư cách ai”, tức nghề nghiệp.' },
    { t: 'type', q: 'Điền cách 5: Я рабо́таю ___ (инжене́р).', a: 'инженером', alt: ['инжене́ром'], hint: 'работать đòi cách 5.' },
    { t: 'choice', q: 'Chọn giới từ đúng: Он рабо́тает ___ заво́де.', options: ['в', 'на', 'о', 'к'], a: 1, why: 'завод thuộc nhóm НА, cùng nhóm với работа, кафедра, фирма.' },
    { t: 'choice', q: '<span class="ru">с девяти́ до шести́</span> — hai giới từ này đòi cách nào?', options: ['Cách 1', 'Cách 2', 'Cách 3', 'Cách 4'], a: 1, why: 'с và до đều đòi cách 2: с утра до вечера.' },
    { t: 'type', q: 'Điền cách 5: Я занима́юсь ___ (иссле́дование).', a: 'исследованием', alt: ['иссле́дованием'], hint: 'заниматься đòi cách 5.' },
    { t: 'choice', q: '<span class="ru ru-big">собесе́дование</span> nghĩa là:', options: ['Hợp đồng', 'Phỏng vấn xin việc', 'Cuộc họp', 'Lương'], a: 1, why: 'Buổi phỏng vấn tuyển dụng.' },
    { t: 'match', q: 'Nối:', pairs: [['зарпла́та', 'lương'], ['нача́льник', 'sếp'], ['колле́га', 'đồng nghiệp'], ['выходно́й', 'ngày nghỉ']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'кем вы работаете', a: 'кем вы работаете' }
  ]
};

/* ---------------------------------------------------------- BÀI 18 */
LESSON_DATA['a2-18'] = {
  level: 'a2',
  intro: 'Sở thích là chủ đề dễ nói nhất và cũng là chủ đề giúp em kết bạn nhanh nhất. Bài này cho em nói được mình thích gì, và hỏi lại người ta cho tự nhiên.',
  blocks: [
    { t: 'h', text: 'Ba cách nói "tôi thích"' },
    { t: 'table', head: ['Cấu trúc', 'Ví dụ', 'Ghi chú'], rows: [
      ['люби́ть + cách 4', 'Я люблю́ му́зыку.', 'yêu thích lâu dài, mạnh'],
      ['нра́виться + cách 3', 'Мне нра́вится э́та пе́сня.', 'thấy hay, ưng — nhẹ hơn'],
      ['интересова́ться + cách 5', 'Я интересу́юсь исто́рией.', 'quan tâm, tìm hiểu'],
      ['занима́ться + cách 5', 'Я занима́юсь спо́ртом.', 'chơi, tập luyện thường xuyên']
    ]},
    { t: 'warn', html: 'Bốn động từ, bốn cách khác nhau — đây chính là "quản lý cách của động từ" mà anh nói ở A1. Học động từ thì học luôn cách nó đòi, không đoán bằng cảm tính.' },
    { t: 'h', text: 'Nói về sự khác nhau giữa любить và нравиться' },
    { t: 'words', items: [
      { ru: 'Я люблю́ ру́сские фи́льмы.', vn: 'Tôi thích phim Nga. (nói chung, lâu dài)' },
      { ru: 'Мне понра́вился э́тот фильм.', vn: 'Tôi thấy bộ phim này hay. (một lần cụ thể)' }
    ]},
    { t: 'note', html: 'Nhắc lại A1 bài 16: với <span class="ru">нра́виться</span>, <b>thứ được thích mới là chủ ngữ</b>. Nên nếu thích nhiều thứ thì động từ đổi: <span class="ru">Мне нра́вятся э́ти пе́сни.</span> Và ở quá khứ nó hoà hợp theo thứ được thích: <span class="ru">Мне понра́вил<b>ся</b> фильм</span> · <span class="ru">Мне понра́вила<b>сь</b> кни́га</span>.' },
    { t: 'h', text: 'Từ vựng sở thích' },
    { t: 'words', items: [
      { ru: 'му́зыка', vn: 'âm nhạc' }, { ru: 'кино́', vn: 'điện ảnh' },
      { ru: 'чте́ние', vn: 'việc đọc sách' }, { ru: 'спорт', vn: 'thể thao' },
      { ru: 'путеше́ствия', vn: 'du lịch' }, { ru: 'фотогра́фия', vn: 'nhiếp ảnh' },
      { ru: 'рисова́ние', vn: 'vẽ' }, { ru: 'гото́вка', vn: 'nấu ăn' },
      { ru: 'игра́ на гита́ре', vn: 'chơi ghi-ta' }, { ru: 'компью́терные и́гры', vn: 'trò chơi điện tử' },
      { ru: 'та́нцы', vn: 'khiêu vũ' }, { ru: 'сериа́л', vn: 'phim truyền hình dài tập' }
    ]},
    { t: 'h', text: 'Thể loại phim và nhạc' },
    { t: 'words', items: [
      { ru: 'коме́дия', vn: 'phim hài' }, { ru: 'дра́ма', vn: 'phim chính kịch' },
      { ru: 'боеви́к', vn: 'phim hành động' }, { ru: 'у́жасы', vn: 'phim kinh dị' },
      { ru: 'мультфи́льм', vn: 'phim hoạt hình' }, { ru: 'документа́льный фильм', vn: 'phim tài liệu' },
      { ru: 'класси́ческая му́зыка', vn: 'nhạc cổ điển' }, { ru: 'рок', vn: 'nhạc rock' },
      { ru: 'наро́дная пе́сня', vn: 'dân ca' }
    ]},
    { t: 'tip', html: 'Muốn kết bạn với người Nga nhanh: hỏi họ về <b>phim hoạt hình Liên Xô</b> (<span class="ru">сове́тские мультфи́льмы</span>). Ai lớn lên ở Nga cũng xem <span class="ru">«Ну, погоди́!»</span> và <span class="ru">«Чебура́шка»</span>, và ai cũng có chuyện để kể về chúng. Đây cũng là tài liệu nghe lý tưởng cho A2 — lời thoại chậm, hình ảnh đỡ nghĩa.' },
    { t: 'h', text: 'Hội thoại làm quen' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Чем ты увлека́ешься?', vn: 'Cậu thích làm gì lúc rảnh?' },
      { who: 'Б', ru: 'Я люблю́ чита́ть и занима́юсь пла́ванием.', vn: 'Tớ thích đọc sách và đi bơi.' },
      { who: 'А', ru: 'А кака́я му́зыка тебе́ нра́вится?', vn: 'Cậu thích nhạc gì?' },
      { who: 'Б', ru: 'Ра́зная. Сейча́с слу́шаю ру́сский рок.', vn: 'Nhiều loại. Dạo này tớ nghe rock Nga.' },
      { who: 'А', ru: 'Пра́вда? Кого́ и́менно?', vn: 'Thật à? Cụ thể là ai thế?' },
      { who: 'Б', ru: 'Ки́но, ДДТ. Помога́ет учи́ть язы́к.', vn: 'Kino, DDT. Nghe cũng giúp học tiếng.' },
      { who: 'А', ru: 'Отли́чная иде́я!', vn: 'Ý hay đấy!' }
    ]},
    { t: 'note', html: '<span class="ru">Чем ты увлека́ешься?</span> là câu hỏi sở thích tự nhiên nhất — nghĩa đen "cậu say mê thứ gì". <span class="ru">увлека́ться</span> cũng đòi cách 5, cùng nhóm với <span class="ru">занима́ться</span> và <span class="ru">интересова́ться</span>.' }
  ],
  vocab: [
    { ru: 'увлека́ться', vn: 'say mê (+ cách 5)' }, { ru: 'интересова́ться', vn: 'quan tâm (+ cách 5)' },
    { ru: 'спорт', vn: 'thể thao' }, { ru: 'пла́вание', vn: 'bơi lội' },
    { ru: 'чте́ние', vn: 'việc đọc sách' }, { ru: 'фотогра́фия', vn: 'nhiếp ảnh' },
    { ru: 'коме́дия', vn: 'phim hài' }, { ru: 'мультфи́льм', vn: 'phim hoạt hình' },
    { ru: 'сериа́л', vn: 'phim dài tập' }, { ru: 'ра́зный', vn: 'khác nhau, nhiều loại' },
    { ru: 'иде́я', vn: 'ý tưởng' }
  ],
  ex: [
    { t: 'choice', q: '<span class="ru">интересова́ться</span> đòi cách nào?', options: ['Cách 2', 'Cách 3', 'Cách 4', 'Cách 5'], a: 3, why: 'Я интересуюсь историей — cách 5, cùng nhóm với заниматься và увлекаться.' },
    { t: 'type', q: 'Điền cách 4: Я люблю́ ___ (му́зыка).', a: 'музыку', alt: ['му́зыку'], hint: 'любить đòi cách 4.' },
    { t: 'choice', q: 'Điền: Мне ___ э́ти пе́сни.', options: ['нра́вится', 'нра́вятся', 'нра́вилась', 'нра́виться'], a: 1, why: 'песни số nhiều là chủ ngữ nên động từ cũng số nhiều: нравятся.' },
    { t: 'choice', q: 'Câu hỏi sở thích tự nhiên nhất là:', options: ['Что ты де́лаешь?', 'Чем ты увлека́ешься?', 'Где ты рабо́таешь?', 'Как ты живёшь?'], a: 1, why: 'Nghĩa đen “cậu say mê thứ gì” — câu hỏi chuẩn về sở thích.' },
    { t: 'choice', q: 'Khác nhau giữa <span class="ru">люби́ть</span> và <span class="ru">нра́виться</span>:', options: ['Không khác', 'любить mạnh và lâu dài, нравиться nhẹ hơn và thường về một việc cụ thể', 'нравиться lịch sự hơn', 'любить chỉ dùng cho người'], a: 1, why: 'Я люблю русские фильмы (nói chung) ≠ Мне понравился этот фильм (một phim cụ thể).' },
    { t: 'type', q: 'Điền cách 5: Я занима́юсь ___ (спорт).', a: 'спортом', alt: ['спо́ртом'], hint: 'Giống đực ở cách 5 lấy đuôi -ом.' },
    { t: 'match', q: 'Nối:', pairs: [['коме́дия', 'phim hài'], ['мультфи́льм', 'phim hoạt hình'], ['пла́вание', 'bơi lội'], ['чте́ние', 'việc đọc sách']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'мне нравится русская музыка', a: 'мне нравится русская музыка' }
  ]
};

/* ---------------------------------------------------------- BÀI 19 */
LESSON_DATA['a2-19'] = {
  level: 'a2',
  intro: 'Ngân hàng, bưu điện, phòng đăng ký — những nơi em bắt buộc phải đến khi sống ở Nga, và cũng là nơi tiếng Nga khó nhất vì toàn từ hành chính. Bài này chuẩn bị trước cho em.',
  blocks: [
    { t: 'h', text: 'Ở ngân hàng' },
    { t: 'words', items: [
      { ru: 'банк', vn: 'ngân hàng' }, { ru: 'счёт', vn: 'tài khoản' },
      { ru: 'ка́рта', vn: 'thẻ' }, { ru: 'банкома́т', vn: 'cây ATM' },
      { ru: 'нали́чные', vn: 'tiền mặt' }, { ru: 'перево́д', vn: 'chuyển khoản' },
      { ru: 'ку́рс валю́ты', vn: 'tỷ giá' }, { ru: 'обме́н валю́ты', vn: 'đổi ngoại tệ' },
      { ru: 'ко́миссия', vn: 'phí dịch vụ' }, { ru: 'паро́ль', vn: 'mật khẩu' }
    ]},
    { t: 'words', items: [
      { ru: 'Я хочу́ откры́ть счёт.', vn: 'Tôi muốn mở tài khoản.' },
      { ru: 'Мо́жно плати́ть ка́ртой?', vn: 'Trả thẻ được không ạ?' },
      { ru: 'Где ближа́йший банкома́т?', vn: 'Cây ATM gần nhất ở đâu ạ?' },
      { ru: 'Како́й сего́дня курс?', vn: 'Hôm nay tỷ giá bao nhiêu ạ?' },
      { ru: 'Есть ли ко́миссия?', vn: 'Có mất phí không ạ?' }
    ]},
    { t: 'warn', html: 'Đừng bao giờ đọc to mật khẩu hay mã PIN cho ai, kể cả người mặc đồng phục ngân hàng. Câu cần thuộc để từ chối lịch sự: <span class="ru">Извини́те, я не бу́ду э́того де́лать.</span> — Xin lỗi, tôi sẽ không làm việc đó.' },
    { t: 'h', text: 'Ở bưu điện' },
    { t: 'words', items: [
      { ru: 'по́чта', vn: 'bưu điện' }, { ru: 'посы́лка', vn: 'bưu kiện' },
      { ru: 'письмо́', vn: 'thư' }, { ru: 'ма́рка', vn: 'tem' },
      { ru: 'конве́рт', vn: 'phong bì' }, { ru: 'и́ндекс', vn: 'mã bưu chính' },
      { ru: 'отправить', vn: 'gửi đi' }, { ru: 'получи́ть', vn: 'nhận' },
      { ru: 'квита́нция', vn: 'biên lai' }
    ]},
    { t: 'words', items: [
      { ru: 'Я хочу́ отпра́вить посы́лку во Вьетна́м.', vn: 'Tôi muốn gửi bưu kiện về Việt Nam.' },
      { ru: 'Ско́лько идёт письмо́?', vn: 'Thư đi mất bao lâu ạ?' },
      { ru: 'Я пришёл получи́ть посы́лку.', vn: 'Tôi đến lấy bưu kiện.' },
      { ru: 'Вот мой па́спорт.', vn: 'Hộ chiếu của tôi đây ạ.' }
    ]},
    { t: 'h', text: 'Giấy tờ — bộ từ quan trọng nhất bài' },
    { t: 'words', items: [
      { ru: 'докуме́нты', vn: 'giấy tờ' }, { ru: 'па́спорт', vn: 'hộ chiếu' },
      { ru: 'ви́за', vn: 'thị thực' }, { ru: 'регистра́ция', vn: 'đăng ký tạm trú' },
      { ru: 'миграцио́нная ка́рта', vn: 'thẻ di trú' }, { ru: 'спра́вка', vn: 'giấy xác nhận' },
      { ru: 'заявле́ние', vn: 'đơn' }, { ru: 'по́дпись', vn: 'chữ ký' },
      { ru: 'печа́ть', vn: 'con dấu' }, { ru: 'ко́пия', vn: 'bản sao' },
      { ru: 'о́чередь', vn: 'hàng chờ, xếp hàng' }, { ru: 'окно́ №5', vn: 'quầy số 5' }
    ]},
    { t: 'words', items: [
      { ru: 'Заполни́те, пожа́луйста, э́ту фо́рму.', vn: 'Anh điền vào mẫu này giúp ạ.' },
      { ru: 'Распиши́тесь здесь.', vn: 'Anh ký vào đây.' },
      { ru: 'Каки́е докуме́нты ну́жны?', vn: 'Cần những giấy tờ gì ạ?' },
      { ru: 'Мне ну́жна спра́вка из университе́та.', vn: 'Tôi cần giấy xác nhận của trường.' },
      { ru: 'Кто после́дний?', vn: 'Ai là người cuối hàng ạ?' }
    ]},
    { t: 'tip', html: 'Câu <span class="ru"><b>Кто после́дний?</b></span> là nghi thức xếp hàng của người Nga: em đến, hỏi to câu đó, ai đó giơ tay, em đứng sau người ấy — và từ đó em được đi loanh quanh mà vẫn giữ chỗ. Không hỏi câu này mà đứng vào hàng là bị nhắc ngay.' },
    { t: 'h', text: 'Hội thoại ở quầy' },
    { t: 'dialog', lines: [
      { who: 'Р', ru: 'Слу́шаю вас.', vn: 'Tôi nghe đây ạ.' },
      { who: 'О', ru: 'Здра́вствуйте. Мне ну́жно сде́лать регистра́цию.', vn: 'Chào chị. Tôi cần làm đăng ký tạm trú.' },
      { who: 'Р', ru: 'Па́спорт и миграцио́нную ка́рту, пожа́луйста.', vn: 'Cho tôi hộ chiếu và thẻ di trú.' },
      { who: 'О', ru: 'Вот, пожа́луйста. Ещё что-нибу́дь ну́жно?', vn: 'Đây ạ. Còn cần gì nữa không ạ?' },
      { who: 'Р', ru: 'Ко́пию ви́зы. Заполни́те заявле́ние и распиши́тесь внизу́.', vn: 'Bản sao visa. Chị điền đơn rồi ký ở dưới.' },
      { who: 'О', ru: 'Извини́те, я не по́няла. Повтори́те, пожа́луйста, ме́дленнее.', vn: 'Xin lỗi, tôi chưa hiểu. Chị nói chậm lại giúp ạ.' },
      { who: 'Р', ru: 'Заявле́ние — вот здесь. По́дпись — вот тут, внизу́.', vn: 'Đơn — chỗ này. Chữ ký — chỗ này, ở dưới.' },
      { who: 'О', ru: 'Поняла́, спаси́бо. Когда́ бу́дет гото́во?', vn: 'Tôi hiểu rồi, cảm ơn chị. Khi nào xong ạ?' },
      { who: 'Р', ru: 'Че́рез три рабо́чих дня.', vn: 'Ba ngày làm việc nữa.' }
    ]},
    { t: 'note', html: 'Để ý câu Oanh nói giữa chừng: <span class="ru">Извини́те, я не поняла́. Повтори́те, пожа́луйста, ме́дленнее.</span> Đó là câu quan trọng nhất bài này. Ở chỗ hành chính không ai chê em vì không hiểu — nhưng gật đầu bừa rồi ký nhầm giấy thì mới phiền.' }
  ],
  vocab: [
    { ru: 'счёт', vn: 'tài khoản; hoá đơn' }, { ru: 'банкома́т', vn: 'cây ATM' },
    { ru: 'нали́чные', vn: 'tiền mặt' }, { ru: 'посы́лка', vn: 'bưu kiện' },
    { ru: 'отпра́вить', vn: 'gửi đi' }, { ru: 'получи́ть', vn: 'nhận' },
    { ru: 'регистра́ция', vn: 'đăng ký tạm trú' }, { ru: 'спра́вка', vn: 'giấy xác nhận' },
    { ru: 'заявле́ние', vn: 'đơn' }, { ru: 'по́дпись', vn: 'chữ ký' },
    { ru: 'ко́пия', vn: 'bản sao' }, { ru: 'о́чередь', vn: 'hàng chờ' },
    { ru: 'заполни́ть', vn: 'điền (vào mẫu)' }, { ru: 'гото́во', vn: 'xong rồi' }
  ],
  ex: [
    { t: 'choice', q: 'Đến xếp hàng ở Nga, câu đầu tiên em nói là:', options: ['Я после́дний.', 'Кто после́дний?', 'Где о́чередь?', 'Мо́жно?'], a: 1, why: 'Hỏi ai là người cuối hàng, rồi đứng sau người đó — nghi thức xếp hàng chuẩn của người Nga.' },
    { t: 'choice', q: '<span class="ru ru-big">спра́вка</span> nghĩa là:', options: ['Đơn xin', 'Giấy xác nhận', 'Chữ ký', 'Bản sao'], a: 1, why: 'Giấy xác nhận do cơ quan cấp. Còn đơn xin là заявление.' },
    { t: 'type', q: 'Điền: ___ , пожа́луйста, э́ту фо́рму. (hãy điền)', a: 'заполните', alt: ['заполни́те'], hint: 'Thể mệnh lệnh lịch sự của заполнить.' },
    { t: 'choice', q: '<span class="ru ru-big">Распиши́тесь здесь</span> nghĩa là:', options: ['Đọc ở đây', 'Ký vào đây', 'Viết tên ở đây', 'Đợi ở đây'], a: 1, why: 'расписаться = ký tên. Danh từ liên quan là подпись (chữ ký).' },
    { t: 'choice', q: 'Câu quan trọng nhất khi làm giấy tờ mà chưa hiểu là:', options: ['Хорошо́, хорошо́.', 'Да, коне́чно.', 'Повтори́те, пожа́луйста, ме́дленнее.', 'Спаси́бо, до свида́ния.'], a: 2, why: 'Gật đầu bừa rồi ký nhầm giấy phiền hơn nhiều so với việc nhờ nhắc lại.' },
    { t: 'type', q: 'Điền: Мо́жно плати́ть ___ ? (bằng thẻ, cách 5)', a: 'картой', alt: ['ка́ртой'], hint: 'Công cụ thì để trần ở cách 5, không cần giới từ.' },
    { t: 'match', q: 'Nối:', pairs: [['посы́лка', 'bưu kiện'], ['нали́чные', 'tiền mặt'], ['ко́пия', 'bản sao'], ['регистра́ция', 'đăng ký tạm trú']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'какие документы нужны', a: 'какие документы нужны' }
  ]
};

/* ---------------------------------------------------------- BÀI 20 */
LESSON_DATA['a2-20'] = {
  level: 'a2',
  intro: 'Biết ngôn ngữ mà không biết phong tục thì vẫn là người ngoài. Bài này về những ngày lễ và thói quen mà người Nga coi là hiển nhiên — và người nước ngoài hay vấp.',
  blocks: [
    { t: 'h', text: 'Những ngày lễ lớn' },
    { t: 'table', head: ['Ngày', 'Tên', 'Ghi chú'], rows: [
      ['1 tháng 1', '<span class="ru">Но́вый год</span>', 'Lễ lớn nhất năm, quan trọng hơn Giáng sinh nhiều. Nghỉ khoảng 10 ngày.'],
      ['7 tháng 1', '<span class="ru">Рождество́</span>', 'Giáng sinh Chính thống giáo, theo lịch Julius.'],
      ['23 tháng 2', '<span class="ru">День защи́тника Оте́чества</span>', 'Ngày của nam giới — phụ nữ tặng quà cho đàn ông.'],
      ['8 tháng 3', '<span class="ru">Междунаро́дный же́нский день</span>', 'Ngày phụ nữ — đàn ông tặng hoa cho tất cả phụ nữ quen biết.'],
      ['9 tháng 5', '<span class="ru">День Побе́ды</span>', 'Ngày Chiến thắng — ngày trang nghiêm nhất trong năm.'],
      ['1 tháng 9', '<span class="ru">День зна́ний</span>', 'Ngày khai giảng, học sinh mang hoa tặng thầy cô.']
    ]},
    { t: 'note', html: 'Người Nga đón <b>Năm mới</b> chứ không phải Giáng sinh. Cây thông là <span class="ru">ёлка</span> và nó dựng cho Năm mới; ông già Noel tên là <span class="ru">Дед Моро́з</span>, đi cùng cháu gái <span class="ru">Снегу́рочка</span> chứ không phải đàn tuần lộc.' },
    { t: 'h', text: 'Chúc mừng thế nào' },
    { t: 'words', items: [
      { ru: 'С Но́вым го́дом!', vn: 'Chúc mừng năm mới!' },
      { ru: 'С днём рожде́ния!', vn: 'Chúc mừng sinh nhật!' },
      { ru: 'С пра́здником!', vn: 'Chúc mừng ngày lễ!' },
      { ru: 'Поздравля́ю!', vn: 'Xin chúc mừng!' },
      { ru: 'Жела́ю сча́стья и здоро́вья!', vn: 'Chúc hạnh phúc và mạnh khoẻ!' },
      { ru: 'Всего́ до́брого!', vn: 'Chúc mọi điều tốt lành!' }
    ]},
    { t: 'tip', html: 'Công thức chúc mừng của tiếng Nga rất gọn: <span class="ru"><b>С</b></span> + <b>cách 5</b>. Nhớ một công thức, ghép được mọi lời chúc: <span class="ru">С Но́вым го́дом, С пра́здником, С побе́дой, С прие́здом</span> (mừng anh đã đến nơi).' },
    { t: 'h', text: 'Phong tục dễ vấp' },
    { t: 'table', head: ['Phong tục', 'Vì sao'], rows: [
      ['Tặng hoa <b>số lẻ</b>', 'Số chẵn chỉ dành cho đám tang. Tặng 10 bông là điềm gở — luôn tặng 3, 5, 7, 9.'],
      ['Không bắt tay qua ngưỡng cửa', 'Điềm cãi nhau. Bước hẳn vào rồi hãy chào.'],
      ['Cởi giày khi vào nhà', 'Bắt buộc. Chủ nhà thường đưa dép đi trong nhà (<span class="ru">та́почки</span>).'],
      ['Không huýt sáo trong nhà', 'Người ta tin là mất tiền.'],
      ['<span class="ru">Прися́дем на доро́жку</span>', 'Trước chuyến đi xa, cả nhà ngồi im một lát cho may mắn.'],
      ['Không chúc mừng sinh nhật trước ngày', 'Bị coi là xui. Chúc đúng ngày hoặc sau.']
    ]},
    { t: 'warn', html: 'Cái bẫy hoa số chẵn là thứ người Việt hay mắc nhất. Ở Việt Nam bó hoa mấy bông cũng được; ở Nga tặng người sống <b>số chẵn</b> là mang ý nghĩa tang lễ. Vào tiệm hoa Nga cứ nói <span class="ru">не́чётное коли́чество</span> (số lẻ) là người bán hiểu ngay.' },
    { t: 'h', text: 'Ở nhà người Nga' },
    { t: 'words', items: [
      { ru: 'Проходи́те!', vn: 'Mời vào!' },
      { ru: 'Разува́йтесь, пожа́луйста.', vn: 'Anh cởi giày giúp ạ.' },
      { ru: 'Сади́тесь за стол.', vn: 'Mời ngồi vào bàn.' },
      { ru: 'Уго́щайтесь!', vn: 'Mời anh dùng tự nhiên!' },
      { ru: 'Спаси́бо, всё бы́ло о́чень вку́сно.', vn: 'Cảm ơn, mọi thứ ngon lắm ạ.' },
      { ru: 'Я в го́сти к дру́гу.', vn: 'Tôi sang nhà bạn chơi.' }
    ]},
    { t: 'note', html: 'Sang nhà người Nga chơi thì <b>không nên đến tay không</b>. Một hộp bánh, một hộp sô cô la, hoặc hoa cho nữ chủ nhà — thứ gì cũng được, nhưng phải có. Đó là phép lịch sự cơ bản, giống như ta mang trái cây sang nhà người khác.' }
  ],
  vocab: [
    { ru: 'пра́здник', vn: 'ngày lễ' }, { ru: 'Но́вый год', vn: 'Năm mới' },
    { ru: 'Дед Моро́з', vn: 'ông già Tuyết' }, { ru: 'ёлка', vn: 'cây thông Nô-en' },
    { ru: 'День Побе́ды', vn: 'Ngày Chiến thắng' }, { ru: 'поздравля́ть', vn: 'chúc mừng' },
    { ru: 'жела́ть', vn: 'chúc' }, { ru: 'пода́рок', vn: 'món quà' },
    { ru: 'цветы́', vn: 'hoa' }, { ru: 'та́почки', vn: 'dép đi trong nhà' },
    { ru: 'в го́сти', vn: 'sang chơi nhà ai' }, { ru: 'уго́щаться', vn: 'dùng đồ ăn (tự nhiên)' }
  ],
  ex: [
    { t: 'choice', q: 'Tặng hoa cho người Nga, em chọn:', options: ['Số chẵn', 'Số lẻ', 'Số nào cũng được', 'Càng nhiều càng tốt'], a: 1, why: 'Số chẵn chỉ dành cho đám tang. Luôn tặng 3, 5, 7, 9 bông.' },
    { t: 'choice', q: 'Lễ lớn nhất trong năm của người Nga là:', options: ['Рождество́', 'Но́вый год', 'День Побе́ды', 'Па́сха'], a: 1, why: 'Năm mới quan trọng hơn Giáng sinh nhiều, nghỉ khoảng mười ngày.' },
    { t: 'choice', q: 'Công thức chúc mừng tiếng Nga là:', options: ['В + cách 6', 'С + cách 5', 'На + cách 4', 'К + cách 3'], a: 1, why: 'С Новым годом, С днём рождения, С праздником — luôn là с + cách 5.' },
    { t: 'choice', q: 'Vào nhà người Nga, việc đầu tiên phải làm là:', options: ['Bắt tay ở cửa', 'Cởi giày', 'Ngồi ngay vào bàn', 'Huýt sáo cho vui'], a: 1, why: 'Cởi giày là bắt buộc; chủ nhà thường đưa тапочки. Bắt tay qua ngưỡng cửa thì bị coi là điềm xấu.' },
    { t: 'type', q: 'Chúc mừng sinh nhật: С днём ___ !', a: 'рождения', alt: ['рожде́ния'], hint: 'Cách 2 của рождение.' },
    { t: 'choice', q: '<span class="ru ru-big">Дед Моро́з</span> đi cùng ai?', options: ['Đàn tuần lộc', 'Снегу́рочка — cháu gái', 'Một con gấu', 'Đi một mình'], a: 1, why: 'Ông già Tuyết Nga đi cùng cháu gái Snegurochka, không có tuần lộc.' },
    { t: 'match', q: 'Nối:', pairs: [['пода́рок', 'món quà'], ['цветы́', 'hoa'], ['та́почки', 'dép trong nhà'], ['поздравля́ть', 'chúc mừng']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'с новым годом', a: 'с новым годом' }
  ]
};

/* ---------------------------------------------------------- BÀI 21 */
LESSON_DATA['a2-21'] = {
  level: 'a2',
  intro: 'Đọc báo Nga là bước nhảy lớn. Bài này không dạy từ mới nhiều — nó dạy em <b>cách đọc</b>: bắt ý chính mà không cần hiểu từng chữ.',
  blocks: [
    { t: 'h', text: 'Ba nguyên tắc đọc' },
    { t: 'table', head: ['Nguyên tắc', 'Vì sao'], rows: [
      ['<b>Đọc tiêu đề và câu đầu trước</b>', 'Báo Nga viết theo hình tháp ngược: thông tin quan trọng nhất nằm ngay đầu. Đọc hai dòng đầu là biết bài nói gì.'],
      ['<b>Không tra từ điển ngay</b>', 'Đọc hết một đoạn đã. Phần lớn từ lạ đoán được qua ngữ cảnh, và tra liên tục làm mất mạch.'],
      ['<b>Tìm gốc từ quen</b>', 'Tiếng Nga xây từ theo gốc. Không biết <span class="ru">учени́к</span> nhưng biết <span class="ru">учи́ть</span> là đoán được ngay.']
    ]},
    { t: 'h', text: 'Họ hàng từ vựng — sức mạnh của gốc từ' },
    { t: 'table', head: ['Gốc', 'Các từ cùng họ'], rows: [
      ['уч-', 'учи́ть (dạy/học) · учи́ться (đi học) · учени́к (học trò) · учи́тель (thầy giáo) · учёный (nhà khoa học) · уче́бник (sách giáo khoa)'],
      ['раб-', 'рабо́та (công việc) · рабо́тать (làm việc) · рабо́чий (công nhân) · рабо́тник (nhân viên)'],
      ['гово́р-', 'говори́ть (nói) · разгово́р (cuộc nói chuyện) · перегово́ры (đàm phán) · погово́рка (câu tục ngữ)'],
      ['стро́-', 'стро́ить (xây) · строи́тель (thợ xây) · строи́тельство (việc xây dựng) · постро́йка (công trình)']
    ]},
    { t: 'tip', html: 'Đây là món quà lớn nhất mà tiếng Nga tặng người học chăm chỉ: học một gốc từ được cả chùm. Biết <b>bốn gốc</b> ở bảng trên là em vừa hiểu thêm hai chục từ mà không phải học thuộc từ nào.' },
    { t: 'h', text: 'Từ hay gặp trong tiêu đề báo' },
    { t: 'words', items: [
      { ru: 'но́вости', vn: 'tin tức' }, { ru: 'сообща́ть', vn: 'đưa tin' },
      { ru: 'заяви́ть', vn: 'tuyên bố' }, { ru: 'по слова́м…', vn: 'theo lời…' },
      { ru: 'по да́нным…', vn: 'theo số liệu…' }, { ru: 'соста́вить', vn: 'đạt mức (con số)' },
      { ru: 'увели́читься', vn: 'tăng lên' }, { ru: 'уме́ньшиться', vn: 'giảm xuống' },
      { ru: 'состоя́ться', vn: 'diễn ra' }, { ru: 'прои́зойти́', vn: 'xảy ra' }
    ]},
    { t: 'h', text: 'Đọc thử một mẩu tin' },
    { t: 'p', html: '<span class="ru">В Ирку́тске откры́лся но́вый университе́тский ко́рпус. По слова́м ре́ктора, в но́вом зда́нии бу́дут учи́ться бо́лее двух ты́сяч студе́нтов. Строи́тельство продолжа́лось три го́да. В зда́нии есть совреме́нные лаборато́рии и больша́я библиоте́ка. Откры́тие состоя́лось пе́рвого сентября́, в День зна́ний.</span>' },
    { t: 'p', html: '<b>Dịch:</b> Ở Irkutsk vừa khánh thành một toà nhà mới của trường đại học. Theo lời hiệu trưởng, sẽ có hơn hai nghìn sinh viên học trong toà nhà mới. Việc xây dựng kéo dài ba năm. Trong toà nhà có các phòng thí nghiệm hiện đại và một thư viện lớn. Lễ khánh thành diễn ra ngày 1 tháng 9, đúng Ngày tri thức.' },
    { t: 'note', html: 'Đọc lại mẩu tin và tìm: <span class="ru">откры́лся</span> và <span class="ru">откры́тие</span> cùng gốc; <span class="ru">строи́тельство</span> và <span class="ru">продолжа́лось</span>; <span class="ru">учи́ться</span> và <span class="ru">студе́нтов</span>. Đây chính là cách người đọc giỏi bám vào một văn bản lạ — không đọc từng từ mà nhận ra <b>chùm nghĩa</b>.' },
    { t: 'h', text: 'Câu hỏi tự kiểm tra sau khi đọc' },
    { t: 'words', items: [
      { ru: 'О чём э́тот текст?', vn: 'Bài này nói về cái gì?' },
      { ru: 'Где э́то произошло́?', vn: 'Chuyện xảy ra ở đâu?' },
      { ru: 'Когда́?', vn: 'Khi nào?' },
      { ru: 'Кто об э́том говори́т?', vn: 'Ai là người nói điều đó?' },
      { ru: 'Каки́е ци́фры есть в те́ксте?', vn: 'Trong bài có những con số nào?' }
    ]},
    { t: 'tip', html: 'Năm câu hỏi trên chính là bộ khung của bài thi đọc hiểu ТРКИ. Tập trả lời chúng sau mỗi văn bản là em vừa luyện đọc vừa luyện thi cùng lúc.' }
  ],
  vocab: [
    { ru: 'но́вости', vn: 'tin tức' }, { ru: 'сообща́ть', vn: 'đưa tin' },
    { ru: 'по слова́м', vn: 'theo lời' }, { ru: 'по да́нным', vn: 'theo số liệu' },
    { ru: 'увели́читься', vn: 'tăng lên' }, { ru: 'уме́ньшиться', vn: 'giảm xuống' },
    { ru: 'состоя́ться', vn: 'diễn ra' }, { ru: 'произойти́', vn: 'xảy ra' },
    { ru: 'зда́ние', vn: 'toà nhà' }, { ru: 'строи́тельство', vn: 'việc xây dựng' },
    { ru: 'откры́тие', vn: 'lễ khánh thành; sự phát hiện' }, { ru: 'совреме́нный', vn: 'hiện đại' }
  ],
  ex: [
    { t: 'choice', q: 'Đọc báo Nga nên bắt đầu từ đâu?', options: ['Đoạn cuối', 'Tiêu đề và câu đầu', 'Tra hết từ mới trước', 'Đoạn giữa'], a: 1, why: 'Báo viết theo hình tháp ngược — thông tin quan trọng nhất nằm ngay đầu.' },
    { t: 'choice', q: '<span class="ru ru-big">уче́бник</span> đoán nghĩa nhờ gốc nào?', options: ['раб-', 'уч-', 'стро-', 'говор-'], a: 1, why: 'Cùng gốc với учить, учиться, учитель → sách giáo khoa.' },
    { t: 'choice', q: '<span class="ru ru-big">строи́тельство</span> nghĩa là:', options: ['Thợ xây', 'Việc xây dựng', 'Xây (động từ)', 'Công trình đã xong'], a: 1, why: 'Đuôi -ство tạo danh từ chỉ quá trình hoặc lĩnh vực.' },
    { t: 'choice', q: 'Theo mẩu tin trong bài, việc xây dựng kéo dài bao lâu?', options: ['Một năm', 'Hai năm', 'Ba năm', 'Năm năm'], a: 2, why: 'Строительство продолжалось три года.' },
    { t: 'choice', q: '<span class="ru ru-big">по слова́м ре́ктора</span> nghĩa là:', options: ['Nói với hiệu trưởng', 'Theo lời hiệu trưởng', 'Hiệu trưởng nói to', 'Lời của hiệu trưởng bị nhắc lại'], a: 1, why: 'Cụm cố định dùng để dẫn nguồn tin, rất hay gặp trên báo.' },
    { t: 'choice', q: 'Gặp từ lạ giữa đoạn, nên làm gì trước?', options: ['Tra từ điển ngay', 'Bỏ bài', 'Đọc hết đoạn rồi mới tra', 'Chép lại từ đó'], a: 2, why: 'Tra liên tục làm mất mạch; phần lớn từ lạ đoán được qua ngữ cảnh.' },
    { t: 'match', q: 'Nối:', pairs: [['увели́читься', 'tăng lên'], ['уме́ньшиться', 'giảm xuống'], ['состоя́ться', 'diễn ra'], ['зда́ние', 'toà nhà']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'о чём этот текст', a: 'о чём этот текст' }
  ]
};

/* ---------------------------------------------------------- BÀI 22 */
LESSON_DATA['a2-22'] = {
  level: 'a2',
  intro: 'Nghe là kỹ năng khó nhất, và cũng là kỹ năng người học hay bỏ bê nhất vì nó khiến ta thấy mình kém. Bài này cho em <b>phương pháp</b> — và giải thích vì sao em nghe không kịp.',
  blocks: [
    { t: 'h', text: 'Vì sao nghe khó hơn đọc' },
    { t: 'table', head: ['Khi đọc', 'Khi nghe'], rows: [
      ['Từ tách rời nhau bằng khoảng trắng', 'Cả câu dính thành một dòng âm thanh'],
      ['Em kiểm soát tốc độ', 'Người nói kiểm soát tốc độ'],
      ['Đọc lại được', 'Trôi qua là mất'],
      ['Chữ viết đầy đủ', 'Âm bị nuốt: <span class="ru">сейча́с</span> → “щас”, <span class="ru">что</span> → “чё”']
    ]},
    { t: 'note', html: 'Chỗ cuối là quan trọng nhất: người Nga nói nhanh <b>nuốt âm rất mạnh</b>. <span class="ru">Здра́вствуйте</span> thành “здрасьте”, <span class="ru">говори́т</span> thành “грит”, <span class="ru">то́лько</span> thành “токо”. Em nghe không ra không phải vì kém từ vựng, mà vì âm thật khác âm em học.' },
    { t: 'h', text: 'Phương pháp ba lượt' },
    { t: 'table', head: ['Lượt', 'Làm gì', 'Mục tiêu'], rows: [
      ['<b>Lượt 1</b>', 'Nghe hết, không dừng, không đọc phụ đề', 'Bắt <b>chủ đề</b>: họ đang nói về cái gì'],
      ['<b>Lượt 2</b>', 'Nghe từng đoạn, dừng lại ghi những gì bắt được', 'Bắt <b>chi tiết</b>: ai, ở đâu, bao nhiêu'],
      ['<b>Lượt 3</b>', 'Nghe cùng phụ đề hoặc lời thoại', 'Đối chiếu: chỗ nào nghe sai, vì sao']
    ]},
    { t: 'warn', html: 'Sai lầm phổ biến: mở phụ đề ngay từ lượt đầu. Làm thế thì em đang <b>đọc</b> chứ không phải nghe, và tai không tiến bộ chút nào. Phụ đề chỉ dùng ở lượt ba.' },
    { t: 'h', text: 'Nghe gì ở trình độ A2' },
    { t: 'table', head: ['Nguồn', 'Vì sao hợp'], rows: [
      ['Phim hoạt hình Liên Xô', 'Nói chậm, câu ngắn, hình ảnh đỡ nghĩa. <span class="ru">«Ну, погоди́!»</span>, <span class="ru">«Чебура́шка»</span>, <span class="ru">«Малы́ш и Ка́рлсон»</span>'],
      ['Bài hát có lời in kèm', 'Nghe đi nghe lại được, nhịp giúp nhớ'],
      ['Podcast cho người học', 'Người nói cố ý chậm và rõ'],
      ['Tin thời tiết', 'Cấu trúc lặp lại mỗi ngày, số liệu dễ bắt']
    ]},
    { t: 'tip', html: 'Bắt đầu bằng <b>tin thời tiết</b> là mẹo ít người nghĩ tới nhưng rất hiệu quả: mỗi bản tin dùng đúng một bộ câu, ngày nào cũng lặp lại. Nghe một tuần là em hiểu gần hết — và cảm giác "mình hiểu được" ấy quý hơn nhiều so với việc nghe bài khó rồi nản.' },
    { t: 'h', text: 'Câu cứu khi nghe không kịp' },
    { t: 'words', items: [
      { ru: 'Извини́те, я не расслы́шал. / не расслы́шала.', vn: 'Xin lỗi, tôi nghe không rõ.' },
      { ru: 'Повтори́те, пожа́луйста.', vn: 'Anh nhắc lại giúp ạ.' },
      { ru: 'Говори́те, пожа́луйста, поме́дленнее.', vn: 'Anh nói chậm hơn một chút ạ.' },
      { ru: 'Что зна́чит э́то сло́во?', vn: 'Từ này nghĩa là gì ạ?' },
      { ru: 'Как э́то по-ру́сски?', vn: 'Cái này tiếng Nga gọi là gì?' },
      { ru: 'Я вас пра́вильно по́нял?', vn: 'Tôi hiểu đúng ý anh chứ ạ?' }
    ]},
    { t: 'note', html: 'Câu cuối — <span class="ru">Я вас пра́вильно по́нял?</span> — là câu của người học thông minh. Thay vì gật bừa, em nhắc lại ý mình vừa hiểu và hỏi cho chắc. Người Nga rất quý thái độ đó.' },
    { t: 'h', text: 'Nghe thử: một đoạn hội thoại đời thường' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Слу́шай, ты не зна́ешь, где здесь по́чта?', vn: 'Này, cậu có biết bưu điện ở đâu quanh đây không?' },
      { who: 'Б', ru: 'По́чта? Ка́жется, за угло́м. Там, где апте́ка.', vn: 'Bưu điện à? Hình như ở góc phố kia. Chỗ có hiệu thuốc ấy.' },
      { who: 'А', ru: 'А она́ сейча́с рабо́тает?', vn: 'Giờ này còn mở không?' },
      { who: 'Б', ru: 'До шести́, ка́жется. Но лу́чше поторопи́сь.', vn: 'Đến sáu giờ thì phải. Nhưng cậu nên nhanh lên.' },
      { who: 'А', ru: 'Спаси́бо большо́е!', vn: 'Cảm ơn cậu nhiều!' },
      { who: 'Б', ru: 'Не́ за что.', vn: 'Có gì đâu.' }
    ]},
    { t: 'tip', html: 'Bấm loa nghe cả đoạn <b>ba lần</b> theo đúng phương pháp ba lượt ở trên: lần một không nhìn chữ, lần hai nghe từng câu, lần ba mới đọc theo. Đây là bài tập em có thể làm lại với mọi hội thoại trong web này.' }
  ],
  vocab: [
    { ru: 'расслы́шать', vn: 'nghe rõ' }, { ru: 'поме́дленнее', vn: 'chậm hơn một chút' },
    { ru: 'Что зна́чит…?', vn: 'Nghĩa là gì?' }, { ru: 'Как э́то по-ру́сски?', vn: 'Tiếng Nga gọi là gì?' },
    { ru: 'ка́жется', vn: 'hình như' }, { ru: 'за угло́м', vn: 'ở góc phố' },
    { ru: 'поторопи́ться', vn: 'nhanh lên' }, { ru: 'Не́ за что', vn: 'Có gì đâu' },
    { ru: 'Слу́шай', vn: 'Này (gọi bạn)' }
  ],
  ex: [
    { t: 'choice', q: 'Ở lượt nghe <b>đầu tiên</b>, mục tiêu là gì?', options: ['Hiểu từng từ', 'Bắt được chủ đề chung', 'Chép lại lời thoại', 'Tra hết từ mới'], a: 1, why: 'Lượt một chỉ cần biết họ đang nói về cái gì; chi tiết để lượt hai.' },
    { t: 'choice', q: 'Vì sao không nên mở phụ đề từ lượt đầu?', options: ['Vì phụ đề hay sai', 'Vì lúc đó em đang đọc chứ không phải nghe', 'Vì phụ đề mất tiền', 'Vì phụ đề làm chậm phim'], a: 1, why: 'Mắt sẽ làm hết việc và tai không được luyện.' },
    { t: 'choice', q: 'Người Nga nói nhanh thì <span class="ru">Здра́вствуйте</span> nghe thành:', options: ['здравствуй', 'здрасьте', 'здравствуйту', 'здравие'], a: 1, why: 'Âm bị nuốt mạnh. Đây là lý do chính khiến người học nghe không ra.' },
    { t: 'choice', q: 'Nguồn nghe nào hợp nhất cho A2?', options: ['Bản tin chính trị', 'Phim hoạt hình Liên Xô', 'Phim hành động', 'Bài giảng đại học'], a: 1, why: 'Nói chậm, câu ngắn, hình ảnh đỡ nghĩa.' },
    { t: 'type', q: 'Nhờ nói chậm hơn: Говори́те, пожа́луйста, ___ .', a: 'помедленнее', alt: ['поме́дленнее', 'медленнее'], hint: 'Có tiền tố по- nghĩa là “một chút”.' },
    { t: 'choice', q: 'Câu nào cho thấy em là người học thông minh?', options: ['Да, да, поня́тно.', 'Я вас пра́вильно по́нял?', 'Хорошо́.', 'Коне́чно.'], a: 1, why: 'Nhắc lại ý mình hiểu và hỏi cho chắc, thay vì gật bừa.' },
    { t: 'match', q: 'Nối:', pairs: [['ка́жется', 'hình như'], ['за угло́м', 'ở góc phố'], ['Не́ за что', 'Có gì đâu'], ['поторопи́ться', 'nhanh lên']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'извините я не расслышал', a: 'извините я не расслышал' }
  ]
};

/* ---------------------------------------------------------- BÀI 23 */
LESSON_DATA['a2-23'] = {
  level: 'a2',
  intro: 'Ở A1 em viết được lá thư ngắn. Bây giờ em học viết một <b>đoạn văn có bố cục</b> — mở, thân, kết. Đây cũng chính là dạng bài viết của kỳ thi ТРКИ.',
  blocks: [
    { t: 'h', text: 'Bố cục ba phần' },
    { t: 'table', head: ['Phần', 'Việc của nó', 'Bao nhiêu câu'], rows: [
      ['<b>Mở</b>', 'Nêu chủ đề, cho người đọc biết sắp đọc gì', '1–2 câu'],
      ['<b>Thân</b>', 'Kể chi tiết, có ví dụ, theo thứ tự thời gian hoặc theo ý', '4–8 câu'],
      ['<b>Kết</b>', 'Tổng kết hoặc nêu cảm nghĩ', '1–2 câu']
    ]},
    { t: 'note', html: 'Người chấm thi ТРКИ nhìn bố cục <b>trước</b> khi nhìn lỗi ngữ pháp. Một bài đúng ngữ pháp nhưng lộn xộn ăn điểm thấp hơn một bài có bố cục rõ mà sai vài chỗ nhỏ.' },
    { t: 'h', text: 'Bộ từ nối cho từng phần' },
    { t: 'table', head: ['Phần', 'Từ mở đầu câu'], rows: [
      ['Mở', 'Я хочу́ рассказа́ть о… · Речь пойдёт о… · Сего́дня я расскажу́…'],
      ['Thân — thứ tự', 'Во-пе́рвых… во-вторы́х… · Снача́ла… пото́м… · По́сле э́того…'],
      ['Thân — thêm ý', 'Кро́ме того́… · Та́кже… · Ещё оди́н приме́р…'],
      ['Thân — đối lập', 'Одна́ко… · Но… · С друго́й стороны́…'],
      ['Thân — nguyên nhân', 'Потому́ что… · Поэ́тому… · Де́ло в том, что…'],
      ['Kết', 'В заключе́ние… · Таки́м о́бразом… · Мне ка́жется, что… · Поэ́тому я счита́ю, что…']
    ]},
    { t: 'tip', html: 'Học thuộc <b>một từ trong mỗi dòng</b> là đủ. Người chấm không đếm em dùng bao nhiêu từ nối, họ chỉ cần thấy bài có mạch. Sáu từ dùng thành thạo hơn ba mươi từ dùng lúng túng.' },
    { t: 'h', text: 'Một bài viết mẫu' },
    { t: 'p', html: '<b>Đề: Расскажи́те о ва́шем родно́м го́роде.</b>' },
    { t: 'dialog', lines: [
      { who: 'Мở', ru: 'Я хочу́ рассказа́ть о моём родно́м го́роде — Хано́е.', vn: 'Tôi muốn kể về thành phố quê tôi — Hà Nội.' },
      { who: '1', ru: 'Хано́й — столи́ца Вьетна́ма. Э́то о́чень большо́й и ста́рый го́род.', vn: 'Hà Nội là thủ đô của Việt Nam. Đó là một thành phố rất lớn và cổ kính.' },
      { who: '2', ru: 'Во-пе́рвых, там о́чень краси́вая ста́рая часть с у́зкими у́лицами.', vn: 'Thứ nhất, ở đó có khu phố cổ rất đẹp với những con phố nhỏ hẹp.' },
      { who: '3', ru: 'Во-вторы́х, в го́роде мно́го озёр и парко́в, где лю́ди гуля́ют по утра́м.', vn: 'Thứ hai, thành phố có nhiều hồ và công viên, nơi người ta đi dạo buổi sáng.' },
      { who: '4', ru: 'Кро́ме того́, Хано́й изве́стен свое́й ку́хней.', vn: 'Ngoài ra, Hà Nội nổi tiếng về ẩm thực.' },
      { who: '5', ru: 'Одна́ко в го́роде о́чень мно́го тра́нспорта, и ле́том быва́ет о́чень жа́рко.', vn: 'Tuy nhiên thành phố rất đông xe cộ, và mùa hè thì rất nóng.' },
      { who: 'Kết', ru: 'Таки́м о́бразом, Хано́й — интере́сный го́род, и я о́чень скуча́ю по нему́.', vn: 'Như vậy, Hà Nội là một thành phố thú vị, và tôi rất nhớ nó.' }
    ]},
    { t: 'note', html: 'Đếm lại: một câu mở, năm câu thân, một câu kết. Bảy câu — vừa đủ cho một bài viết A2. Và để ý bài có cả mặt <b>tốt lẫn mặt dở</b> (câu số 5) — người chấm đánh giá cao vì nó cho thấy em biết trình bày cân bằng.' },
    { t: 'h', text: 'Lỗi bố cục hay gặp' },
    { t: 'table', head: ['Lỗi', 'Cách sửa'], rows: [
      ['Viết một khối không xuống dòng', 'Tách rõ ba phần, mỗi phần một đoạn'],
      ['Câu nào cũng bắt đầu bằng "Я"', 'Đổi chủ ngữ: <span class="ru">В го́роде есть… · Лю́ди там…</span>'],
      ['Không có câu kết', 'Luôn kết bằng <span class="ru">Таки́м о́бразом</span> hoặc <span class="ru">Мне ка́жется</span>'],
      ['Câu quá dài, nhiều mệnh đề', 'Ở A2 câu ngắn đúng hơn câu dài sai'],
      ['Không có ví dụ cụ thể', 'Thêm tên riêng, con số, chi tiết thật']
    ]},
    { t: 'tip', html: 'Bài tập ngoài web cho em: viết <b>bảy câu</b> theo đúng khung trên về một trong ba đề — thành phố quê em, gia đình em, hoặc một ngày bình thường của em. Viết xong đọc to lên; chỗ nào đọc thấy vấp thì thường là chỗ sai.' }
  ],
  vocab: [
    { ru: 'рассказа́ть', vn: 'kể lại' }, { ru: 'во-пе́рвых', vn: 'thứ nhất' },
    { ru: 'во-вторы́х', vn: 'thứ hai' }, { ru: 'кро́ме того́', vn: 'ngoài ra' },
    { ru: 'одна́ко', vn: 'tuy nhiên' }, { ru: 'с друго́й стороны́', vn: 'mặt khác' },
    { ru: 'таки́м о́бразом', vn: 'như vậy' }, { ru: 'в заключе́ние', vn: 'cuối cùng, kết lại' },
    { ru: 'мне ка́жется', vn: 'tôi thấy rằng' }, { ru: 'счита́ть', vn: 'cho rằng' },
    { ru: 'родно́й го́род', vn: 'thành phố quê' }, { ru: 'изве́стен', vn: 'nổi tiếng' },
    { ru: 'скуча́ть по', vn: 'nhớ (ai, cái gì)' }
  ],
  ex: [
    { t: 'choice', q: 'Người chấm thi ТРКИ nhìn cái gì <b>trước</b>?', options: ['Số lỗi ngữ pháp', 'Bố cục bài viết', 'Số từ vựng khó', 'Chữ viết đẹp hay xấu'], a: 1, why: 'Bài có mạch rõ ăn điểm cao hơn bài đúng ngữ pháp nhưng lộn xộn.' },
    { t: 'choice', q: 'Từ nào dùng để <b>kết bài</b>?', options: ['Во-пе́рвых', 'Кро́ме того́', 'Таки́м о́бразом', 'Снача́ла'], a: 2, why: 'Таким образом = như vậy, dùng để tổng kết.' },
    { t: 'choice', q: '<span class="ru ru-big">Одна́ко</span> nghĩa là:', options: ['Ngoài ra', 'Tuy nhiên', 'Vì vậy', 'Đầu tiên'], a: 1, why: 'Dùng để nêu ý đối lập, trang trọng hơn но.' },
    { t: 'choice', q: 'Một bài viết A2 nên dài khoảng:', options: ['3 câu', '7 câu', '20 câu', 'Càng dài càng tốt'], a: 1, why: 'Một câu mở, khoảng năm câu thân, một câu kết là vừa đủ.' },
    { t: 'type', q: 'Điền: ___ , в го́роде мно́го озёр. (thứ hai)', a: 'во-вторых', alt: ['во-вторы́х'], hint: 'Cặp với во-первых.' },
    { t: 'choice', q: 'Vì sao nên có cả mặt dở trong bài viết?', options: ['Để bài dài hơn', 'Vì cho thấy em biết trình bày cân bằng', 'Vì đề bài yêu cầu', 'Không nên có'], a: 1, why: 'Người chấm đánh giá cao khả năng nhìn nhiều mặt của một vấn đề.' },
    { t: 'match', q: 'Nối:', pairs: [['кро́ме того́', 'ngoài ra'], ['мне ка́жется', 'tôi thấy rằng'], ['скуча́ть по', 'nhớ ai đó'], ['родно́й го́род', 'thành phố quê']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'я хочу рассказать о моём городе', a: 'я хочу рассказать о моём городе' }
  ]
};

/* ---------------------------------------------------------- BÀI 24 */
LESSON_DATA['a2-24'] = {
  level: 'a2',
  intro: 'Bài cuối cấp A2. Gom lại toàn bộ, nhìn một lần thấy hết. Học xong bài này thì vào thi — và sau đó là ngưỡng cửa B1, mốc để vào đại học Nga.',
  blocks: [
    { t: 'h', text: 'Thể động từ — thứ quan trọng nhất cấp A2' },
    { t: 'table', head: ['', 'Chưa hoàn thành (НСВ)', 'Hoàn thành (СВ)'], rows: [
      ['Nhìn vào', 'quá trình, sự lặp lại', 'kết quả, một lần xong'],
      ['Quá khứ', 'чита́л — có ngồi đọc', 'прочита́л — đọc xong'],
      ['Hiện tại', 'чита́ю', '<b>không có</b>'],
      ['Tương lai', 'бу́ду чита́ть', 'прочита́ю'],
      ['Từ chỉ dấu', 'ча́сто · обы́чно · ка́ждый день · до́лго', 'уже́ · вдруг · наконе́ц · сра́зу']
    ]},
    { t: 'h', text: 'Động từ chuyển động có tiền tố' },
    { t: 'table', head: ['Tiền tố', 'Nghĩa', 'Tiền tố', 'Nghĩa'], rows: [
      ['при-', 'đến nơi', 'вы-', 'đi ra'],
      ['у-', 'rời đi', 'пере-', 'băng qua'],
      ['в-', 'đi vào', 'под-', 'lại gần'],
      ['до-', 'đến tận nơi', 'за-', 'ghé qua']
    ]},
    { t: 'h', text: 'Các cấu trúc câu mới ở A2' },
    { t: 'table', head: ['Cấu trúc', 'Quy tắc cốt lõi', 'Ví dụ'], rows: [
      ['кото́рый', 'giống lấy từ vế trước, cách lấy từ vế sau', 'кни́га, кото́рую я чита́л'],
      ['что́бы', 'cùng người → nguyên thể; khác người → quá khứ', 'что́бы поговори́ть / что́бы ты пришёл'],
      ['бы', 'luôn đi với dạng quá khứ', 'Я бы пое́хал'],
      ['на́до / ну́жно / мо́жно', 'người ở cách 3, câu không chủ ngữ', 'Мне на́до идти́'],
      ['до́лжен', 'người ở cách 1, hoà hợp theo giống', 'Я должна́ идти́'],
      ['-ся', 'tự làm, lẫn nhau, trạng thái', 'Уро́к начина́ется'],
      ['so sánh', '-ее hoặc dạng bất quy tắc, không đổi đuôi', 'интере́снее · лу́чше']
    ]},
    { t: 'h', text: 'Bốn động từ, bốn cách — nhớ cho kỹ' },
    { t: 'table', head: ['Động từ', 'Đòi cách', 'Ví dụ'], rows: [
      ['люби́ть', 'cách 4', 'Я люблю́ му́зыку.'],
      ['нра́виться', 'cách 3 (người)', 'Мне нра́вится му́зыка.'],
      ['занима́ться / интересова́ться / увлека́ться', 'cách 5', 'Я занима́юсь спо́ртом.'],
      ['боя́ться', 'cách 2', 'Я бою́сь соба́к.']
    ]},
    { t: 'warn', html: 'Đây là bài học lớn nhất của cả cấp A2: <b>học động từ thì học luôn cách nó đòi</b>. Không có quy luật nào đoán được — chỉ có thói quen. Nhưng một khi thành thói quen thì nó theo em suốt lên B2.' },
    { t: 'h', text: 'Học xong A2 em làm được gì' },
    { t: 'words', items: [
      { ru: 'Вчера́ я ходи́ла в магази́н и купи́ла всё, что ну́жно.', vn: 'Kể chuyện đã qua, dùng đúng thể động từ' },
      { ru: 'Э́то кни́га, кото́рую мне подари́л друг.', vn: 'Câu phức với который' },
      { ru: 'Я учу́ ру́сский, что́бы учи́ться в аспиранту́ре.', vn: 'Nói mục đích' },
      { ru: 'Мне на́до сде́лать регистра́цию. Каки́е докуме́нты ну́жны?', vn: 'Xoay xở việc hành chính' },
      { ru: 'У меня́ боли́т го́рло и температу́ра.', vn: 'Đi khám bệnh' },
      { ru: 'Я снима́ю кварти́ру на пя́том этаже́.', vn: 'Nói về chỗ ở' },
      { ru: 'Е́сли бы бы́ло вре́мя, я бы пое́хал на Байка́л.', vn: 'Nói điều giả định' },
      { ru: 'Таки́м о́бразом, мне ка́жется, что э́то интере́сно.', vn: 'Viết đoạn có bố cục' }
    ]},
    { t: 'h', text: 'Còn gì ở phía trước' },
    { t: 'p', html: 'Cấp <b>B1 (ТРКИ-1)</b> là mốc thật sự quan trọng: đó là điều kiện để vào hệ cử nhân của hầu hết trường đại học Nga. Ở đó em sẽ học <span class="ru">прича́стие</span> và <span class="ru">дееприча́стие</span> — hai công cụ giúp câu ngắn lại mà chứa nhiều ý hơn, và là dấu hiệu rõ nhất phân biệt người nói tiếng Nga "được" với người nói tiếng Nga "hay".' },
    { t: 'tip', html: 'Trước khi sang B1, hãy dành <b>hai tuần</b> chỉ để ôn thẻ từ vựng và đọc lại các hội thoại trong cấp A2 thành tiếng. Cấp A2 có khoảng 250 từ mới — thuộc chắc từng ấy thì B1 nhẹ đi rất nhiều. Vội sang cấp mới khi nền chưa chắc là cách chắc chắn nhất để mắc kẹt ở B1.' }
  ],
  vocab: [
    { ru: 'вид глаго́ла', vn: 'thể động từ' }, { ru: 'соверше́нный вид', vn: 'thể hoàn thành' },
    { ru: 'несоверше́нный вид', vn: 'thể chưa hoàn thành' }, { ru: 'управле́ние', vn: 'sự quản lý cách' },
    { ru: 'прича́стие', vn: 'tính động từ' }, { ru: 'дееприча́стие', vn: 'trạng động từ' },
    { ru: 'у́ровень', vn: 'trình độ' }
  ],
  ex: [
    { t: 'choice', q: 'Thể hoàn thành thiếu thì nào?', options: ['Quá khứ', 'Hiện tại', 'Tương lai', 'Không thiếu'], a: 1, why: 'Việc đã xong không thể đang diễn ra.' },
    { t: 'choice', q: 'Điền: Э́то кни́га, ___ мне подари́л друг.', options: ['кото́рый', 'кото́рая', 'кото́рую', 'кото́рой'], a: 2, why: 'книга giống cái, làm tân ngữ của подарил → cách 4: которую.' },
    { t: 'choice', q: '<span class="ru">нра́виться</span> đòi cách nào cho <b>người thích</b>?', options: ['Cách 1', 'Cách 3', 'Cách 4', 'Cách 5'], a: 1, why: 'Мне нравится — người ở cách 3, còn thứ được thích mới là chủ ngữ.' },
    { t: 'type', q: 'Điền cách 5: Я занима́юсь ___ (спорт).', a: 'спортом', alt: ['спо́ртом'], hint: 'заниматься đòi cách 5.' },
    { t: 'choice', q: 'Câu nào <b>đúng</b>?', options: ['Я на́до идти́.', 'Мне до́лжен идти́.', 'Мне на́до идти́.', 'Я на́до до́лжен идти́.'], a: 2, why: 'надо đi với cách 3; должен mới đi với cách 1.' },
    { t: 'choice', q: 'Điền: Я пришёл, что́бы ___ с тобо́й.', options: ['поговори́л', 'поговори́ть', 'поговорю́', 'говори́шь'], a: 1, why: 'Cùng một người làm cả hai việc → nguyên thể.' },
    { t: 'choice', q: 'Tiền tố <b>у-</b> trong động từ chuyển động nghĩa là:', options: ['đến nơi', 'rời đi hẳn', 'đi vào', 'ghé qua'], a: 1, why: 'уйти, уехать = rời khỏi, không còn ở đó.' },
    { t: 'match', q: 'Nối động từ với cách nó đòi:', pairs: [['люби́ть', 'cách 4'], ['нра́виться', 'cách 3'], ['занима́ться', 'cách 5'], ['боя́ться', 'cách 2']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'мне надо сделать регистрацию', a: 'мне надо сделать регистрацию' }
  ]
};
