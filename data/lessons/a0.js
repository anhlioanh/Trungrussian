/* ============================================================
   a0.js — NỘI DUNG CẤP A0 (Vỡ lòng)
   Mỗi bài: intro → blocks (lý thuyết) → vocab (nạp vào flashcard) → ex (bài tập)
   ============================================================ */

const LESSON_DATA = {};

/* ---------------------------------------------------------- BÀI 1 */
LESSON_DATA['a0-01'] = {
  level: 'a0',
  intro: 'Trước khi học chữ nào, em cần biết một điều làm mọi thứ nhẹ hẳn đi: bảng chữ cái Nga <b>không phải chữ tượng hình</b>. Nó là chữ cái ghi âm, giống hệt tiếng Việt — mỗi chữ một âm, ghép lại thành từ. Học thuộc 33 chữ là đọc được cả tiếng Nga.',
  blocks: [
    { t: 'h', text: 'Chuyện của bảng chữ cái' },
    { t: 'p', html: 'Chữ Nga tên là <b>Cyrillic</b> (кириллица), do hai nhà truyền giáo Kirill và Mefodiy tạo ra từ thế kỷ IX, dựa trên chữ Hy Lạp. Vì thế một số chữ nhìn quen (А, К, М, О, Т — y hệt chữ Latinh), một số nhìn quen nhưng đọc khác hẳn (Р đọc là “r”, В đọc là “v”), và một số hoàn toàn mới (Ж, Щ, Ы).' },
    { t: 'p', html: 'Cả bảng có <b>33 chữ</b>: 10 nguyên âm, 21 phụ âm, 2 chữ không đọc thành tiếng. Nghe nhiều nhưng người Việt có lợi thế lớn: tiếng Việt cũng dùng bảng chữ cái ghi âm, nên em chỉ cần đổi “mặt chữ”, không phải đổi cách nghĩ.' },
    { t: 'h', text: 'Toàn bộ 33 chữ, nhìn một lần cho biết mặt' },
    { t: 'alphabet' },
    { t: 'note', html: '<b>Đừng cố học thuộc bảng này ngay bây giờ.</b> Nhìn qua cho quen mắt thôi. Từ bài 2 chúng ta chia nhỏ ra 4 nhóm, mỗi bài vài chữ, học tới đâu đọc được từ thật tới đó.' },
    { t: 'h', text: 'Kế hoạch 4 nhóm' },
    { t: 'table', head: ['Nhóm', 'Gồm những chữ', 'Vì sao xếp chung'], rows: [
      ['1. Quen mặt quen tiếng', 'А К М О Т', 'Giống chữ Latinh, đọc cũng gần như tiếng Việt. Học 10 phút là xong.'],
      ['2. Bạn giả', 'В Е Н Р С У Х', 'Nhìn tưởng biết rồi, hoá ra đọc khác. Đây là nhóm dễ nhầm nhất.'],
      ['3. Chữ mới', 'Б Г Д Ж З И Й Л П Ф Ц Ч Ш Щ Э Ю Я Ё', 'Mặt chữ lạ, nhưng lạ thì không nhầm được, học lại nhanh.'],
      ['4. Không thành tiếng', 'Ы Ъ Ь', 'Ы là nguyên âm khó nhất; Ъ và Ь không có âm riêng, chỉ làm thay đổi chữ bên cạnh.']
    ]},
    { t: 'tip', html: 'Mẹo học của thầy: mỗi ngày <b>15 phút</b> đều đặn ăn đứt một buổi cày 3 tiếng rồi nghỉ một tuần. Trí nhớ ngôn ngữ ăn theo số lần gặp lại, không ăn theo tổng thời gian.' }
  ],
  vocab: [],
  ex: [
    { t: 'choice', q: 'Bảng chữ cái tiếng Nga có bao nhiêu chữ?', options: ['26', '29', '33', '36'], a: 2, why: '33 chữ: 10 nguyên âm, 21 phụ âm và 2 chữ không đọc thành tiếng (Ъ, Ь).' },
    { t: 'choice', q: 'Chữ Cyrillic bắt nguồn từ bảng chữ cái nào?', options: ['Chữ Latinh', 'Chữ Hy Lạp', 'Chữ Ả Rập', 'Chữ Hán'], a: 1, why: 'Kirill và Mefodiy dựng bảng chữ này trên nền chữ Hy Lạp, nên nhiều chữ giống chữ Hy Lạp hơn là chữ Latinh.' },
    { t: 'choice', q: 'Trong bốn chữ sau, chữ nào KHÔNG có trong bảng chữ cái Nga?', options: ['Ж', 'Щ', 'W', 'Ы'], a: 2, why: 'Tiếng Nga không có chữ W. Ж, Щ, Ы đều là chữ Nga chính hiệu.' },
    { t: 'choice', q: 'Vì sao nhóm “bạn giả” (В, Р, С, Х…) lại nguy hiểm nhất?', options: ['Vì chúng khó viết', 'Vì mắt đã quen đọc chúng theo kiểu Latinh nên hay đọc sai', 'Vì chúng hiếm gặp', 'Vì chúng không có âm'], a: 1, why: 'Mắt em đã đọc “P” là “p” suốt bao năm. Trong tiếng Nga Р là “r”. Chính thói quen cũ gây lỗi, chứ chữ không khó.' }
  ]
};

/* ---------------------------------------------------------- BÀI 2 */
LESSON_DATA['a0-02'] = {
  level: 'a0',
  intro: 'Năm chữ đầu tiên — món quà của tiếng Nga dành cho người mới. Chúng vừa giống chữ Latinh em đã biết, vừa đọc gần đúng như tiếng Việt. Học xong bài này em đọc được từ tiếng Nga đầu tiên trong đời.',
  blocks: [
    { t: 'letters', items: [
      { L: 'А а', say: 'а', read: 'a', note: 'Đúng bằng chữ “a” tiếng Việt. Miệng mở rộng.', ex: 'ма́ма', exvn: 'mẹ' },
      { L: 'К к', say: 'к', read: 'k', note: 'Như “c/k” trong “cá”, “kem”.', ex: 'кот', exvn: 'con mèo' },
      { L: 'М м', say: 'м', read: 'm', note: 'Như “m” tiếng Việt.', ex: 'мак', exvn: 'hoa anh túc' },
      { L: 'О о', say: 'о', read: 'o', note: 'Như “ô” tiếng Việt, môi tròn. (Khi không mang trọng âm nó đổi thành “a” — bài 7 sẽ nói kỹ.)', ex: 'ток', exvn: 'dòng điện' },
      { L: 'Т т', say: 'т', read: 't', note: 'Như “t” trong “tôi”. Đầu lưỡi chạm chân răng trên.', ex: 'там', exvn: 'ở đó, đằng kia' }
    ]},
    { t: 'h', text: 'Ghép lại thành từ thật' },
    { t: 'words', items: [
      { ru: 'ма́ма', vn: 'mẹ', note: 'Từ đầu tiên của mọi đứa trẻ Nga — và của em.' },
      { ru: 'кот', vn: 'con mèo (đực)' },
      { ru: 'там', vn: 'ở đó' },
      { ru: 'так', vn: 'như vậy, thế đấy' },
      { ru: 'мак', vn: 'hoa anh túc' },
      { ru: 'том', vn: 'tập (sách)' },
      { ru: 'ток', vn: 'dòng điện' },
      { ru: 'кака́о', vn: 'ca cao' },
      { ru: 'а́том', vn: 'nguyên tử' },
      { ru: 'ка́мка', vn: 'gấm hoa (từ hiếm — chỉ để luyện ghép chữ)' }
    ]},
    { t: 'tip', html: 'Bấm nút loa bên cạnh từng từ để nghe. Nghe <b>rồi đọc theo thành tiếng</b> — đọc thầm trong đầu không tính. Cơ miệng cần tập, y như cơ tay.' },
    { t: 'h', text: 'Một điều nhỏ mà quan trọng' },
    { t: 'p', html: 'Trong từ <span class="ru">ма́ма</span> có dấu sắc trên chữ а đầu tiên. Đó <b>không phải dấu thanh</b> như tiếng Việt — tiếng Nga không có thanh điệu. Nó chỉ đánh dấu <b>âm tiết được nhấn mạnh</b>. Người Nga viết thường không ghi dấu này, sách dạy tiếng mới ghi để người học biết đường nhấn.' }
  ],
  vocab: [
    { ru: 'ма́ма', vn: 'mẹ' }, { ru: 'кот', vn: 'con mèo' }, { ru: 'там', vn: 'ở đó' },
    { ru: 'так', vn: 'như vậy' }, { ru: 'мак', vn: 'hoa anh túc' }, { ru: 'том', vn: 'tập sách' },
    { ru: 'ток', vn: 'dòng điện' }, { ru: 'кака́о', vn: 'ca cao' }, { ru: 'а́том', vn: 'nguyên tử' }
  ],
  ex: [
    { t: 'choice', q: 'Từ <span class="ru ru-big">кот</span> đọc là gì?', options: ['xốt', 'cot / kot', 'sot', 'nốt'], a: 1, why: 'К = “k”, о = “o”, т = “t”. Ghép lại: “kot”.' },
    { t: 'type', q: 'Nghe và gõ lại bằng chữ Nga:', say: 'мама', a: 'мама', hint: 'Bốn chữ, chữ м và а xen kẽ.' },
    { t: 'choice', q: '“Ở đó, đằng kia” trong tiếng Nga là:', options: ['так', 'там', 'том', 'ток'], a: 1, why: 'там = ở đó. Đừng nhầm với так (như vậy) — chỉ khác một chữ.' },
    { t: 'match', q: 'Nối từ với nghĩa:', pairs: [['ма́ма', 'mẹ'], ['кот', 'con mèo'], ['мак', 'hoa anh túc'], ['а́том', 'nguyên tử']] },
    { t: 'type', q: 'Viết từ “ca cao” bằng chữ Nga (không cần dấu nhấn):', a: 'какао', hint: 'Bắt đầu bằng к, có hai chữ а và hai chữ к… à không, một к nữa ở giữa.' },
    { t: 'listen', q: 'Nghe rồi gõ lại:', say: 'атом', a: 'атом' }
  ]
};

/* ---------------------------------------------------------- BÀI 3 */
LESSON_DATA['a0-03'] = {
  level: 'a0',
  intro: 'Đây là bài quan trọng nhất của cả cấp A0. Bảy chữ dưới đây nhìn y như chữ Latinh nhưng đọc <b>hoàn toàn khác</b>. Ai học tiếng Nga cũng vấp ở đây. Em cứ vấp thoải mái — vấp bây giờ để sau này khỏi vấp.',
  blocks: [
    { t: 'letters', items: [
      { L: 'В в', say: 'в', read: 'v', note: 'KHÔNG phải “b”. Đọc là “v” như trong “vui”.', ex: 'вот', exvn: 'đây này, đây rồi' },
      { L: 'Е е', say: 'е', read: 'ye (iê)', note: 'Không phải “e” trơn mà là “ye”, như “iê” trong “tiên”.', ex: 'не́бо', exvn: 'bầu trời' },
      { L: 'Н н', say: 'н', read: 'n', note: 'KHÔNG phải “h”. Đọc là “n” như trong “nam”.', ex: 'нос', exvn: 'cái mũi' },
      { L: 'Р р', say: 'р', read: 'r rung', note: 'KHÔNG phải “p”. Là “r” <b>rung lưỡi</b>, đầu lưỡi rung vào vòm trên. Đây là âm khó nhất với người Việt — bài 8 có bài tập riêng.', ex: 'рот', exvn: 'cái miệng' },
      { L: 'С с', say: 'с', read: 's', note: 'KHÔNG phải “c”. Đọc là “x/s” như trong “xa”.', ex: 'сок', exvn: 'nước ép' },
      { L: 'У у', say: 'у', read: 'u', note: 'Như “u” tiếng Việt, môi chúm tròn mạnh.', ex: 'у́хо', exvn: 'cái tai' },
      { L: 'Х х', say: 'х', read: 'kh', note: 'KHÔNG phải “x”. Đọc là “kh” như trong “khô”.', ex: 'хорошо́', exvn: 'tốt, ổn' }
    ]},
    { t: 'warn', html: '<b>Bốn cái bẫy phải nhớ nằm lòng:</b><br>Р là <b>R</b>, không phải P.<br>С là <b>S</b>, không phải C.<br>Н là <b>N</b>, không phải H.<br>В là <b>V</b>, không phải B.<br>Cứ đọc to bốn dòng này mỗi lần mở bài học, một tuần là hết nhầm.' },
    { t: 'h', text: 'Bây giờ em đã đọc được 12 chữ — đủ để đọc những từ này' },
    { t: 'words', items: [
      { ru: 'вот', vn: 'đây này' },
      { ru: 'он', vn: 'anh ấy, nó' },
      { ru: 'она́', vn: 'cô ấy' },
      { ru: 'нос', vn: 'cái mũi' },
      { ru: 'сок', vn: 'nước ép' },
      { ru: 'у́хо', vn: 'cái tai' },
      { ru: 'мост', vn: 'cây cầu' },
      { ru: 'метро́', vn: 'tàu điện ngầm' },
      { ru: 'сестра́', vn: 'chị / em gái' },
      { ru: 'рестора́н', vn: 'nhà hàng' },
      { ru: 'самова́р', vn: 'ấm samovar (ấm đun nước Nga)' },
      { ru: 'хорошо́', vn: 'tốt, ổn, được rồi' },
      { ru: 'космона́вт', vn: 'nhà du hành vũ trụ' },
      { ru: 'Москва́', vn: 'Moskva (thủ đô nước Nga)' }
    ]},
    { t: 'note', html: 'Nhìn <span class="ru">Москва́</span> mà đọc ra “Mát-xcơ-va” là em vừa đọc được tên thủ đô nước Nga bằng chính chữ của họ. Mới hai bài học thôi đấy.' }
  ],
  vocab: [
    { ru: 'вот', vn: 'đây này' }, { ru: 'он', vn: 'anh ấy' }, { ru: 'она́', vn: 'cô ấy' },
    { ru: 'нос', vn: 'cái mũi' }, { ru: 'сок', vn: 'nước ép' }, { ru: 'у́хо', vn: 'cái tai' },
    { ru: 'мост', vn: 'cây cầu' }, { ru: 'метро́', vn: 'tàu điện ngầm' }, { ru: 'сестра́', vn: 'chị/em gái' },
    { ru: 'рестора́н', vn: 'nhà hàng' }, { ru: 'хорошо́', vn: 'tốt, ổn' }, { ru: 'Москва́', vn: 'Moskva' }
  ],
  ex: [
    { t: 'choice', q: 'Chữ <span class="ru ru-big">Р р</span> đọc là:', options: ['p', 'r (rung lưỡi)', 'b', 'ph'], a: 1, why: 'Р là “r” rung. Đây là bẫy số một của người mới học.' },
    { t: 'choice', q: 'Từ <span class="ru ru-big">нос</span> nghĩa là gì?', options: ['cái tai', 'cái mũi', 'cái miệng', 'con mèo'], a: 1, why: 'н = n, о = o, с = s → “nos” = cái mũi.' },
    { t: 'choice', q: 'Từ <span class="ru ru-big">Москва́</span> đọc gần nhất với:', options: ['Mốt-cơ-va', 'Mát-xcơ-va', 'Nốt-xkva', 'Bốt-xkva'], a: 1, why: 'М-о-с-к-в-а. Chữ о không mang trọng âm nên nghe thành “a”, và в = “v”.' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'сестра', a: 'сестра' },
    { t: 'type', q: 'Gõ từ nghĩa là “tốt, ổn” (7 chữ, bắt đầu bằng х):', a: 'хорошо', hint: 'х-о-р-о-ш-о — à, chữ ш bài sau mới học, em cứ gõ theo mẫu trong bài.' },
    { t: 'match', q: 'Nối:', pairs: [['мост', 'cây cầu'], ['метро́', 'tàu điện ngầm'], ['она́', 'cô ấy'], ['рестора́н', 'nhà hàng']] },
    { t: 'choice', q: 'Chữ nào trong các chữ sau đọc là “s”?', options: ['С', 'Х', 'Н', 'В'], a: 0, why: 'С = s. Х = kh, Н = n, В = v.' }
  ]
};

/* ---------------------------------------------------------- BÀI 4 */
LESSON_DATA['a0-04'] = {
  level: 'a0',
  intro: 'Mười chữ mới hoàn toàn. Lạ mặt thì tốt — vì lạ nên không nhầm với gì cả, chỉ cần nhớ là xong.',
  blocks: [
    { t: 'letters', items: [
      { L: 'Б б', say: 'б', read: 'b', note: 'Như “b” tiếng Việt. Đừng nhầm với В (v) — Б có cái “bụng” tròn dưới.', ex: 'брат', exvn: 'anh/em trai' },
      { L: 'Г г', say: 'г', read: 'g', note: 'Như “g/gh” trong “gà”, “ghế”.', ex: 'го́род', exvn: 'thành phố' },
      { L: 'Д д', say: 'д', read: 'đ', note: 'Đúng bằng chữ “đ” tiếng Việt! Món quà cho người Việt.', ex: 'дом', exvn: 'ngôi nhà' },
      { L: 'З з', say: 'з', read: 'z', note: 'Âm “z” — như “d”, “gi” giọng miền Bắc trong “dì”, “gió”. Không phải “s”.', ex: 'зима́', exvn: 'mùa đông' },
      { L: 'И и', say: 'и', read: 'i', note: 'Như “i” tiếng Việt. Chú ý: viết ngược với chữ N Latinh.', ex: 'институ́т', exvn: 'viện, trường' },
      { L: 'Й й', say: 'й', read: 'y ngắn', note: 'Nguyên âm ngắn, như “y” cuối trong “ây”. Luôn đứng cạnh nguyên âm khác.', ex: 'музе́й', exvn: 'bảo tàng' },
      { L: 'Л л', say: 'л', read: 'l', note: 'Như “l” tiếng Việt nhưng nặng hơn, lưỡi bè ra.', ex: 'лимо́н', exvn: 'quả chanh' },
      { L: 'П п', say: 'п', read: 'p', note: 'Như “p” trong “pin”. Nhớ: П là P, còn Р mới là R.', ex: 'парк', exvn: 'công viên' },
      { L: 'Ф ф', say: 'ф', read: 'ph', note: 'Như “ph” trong “phở”.', ex: 'футбо́л', exvn: 'bóng đá' },
      { L: 'Э э', say: 'э', read: 'e (mở)', note: 'Như “e” trong “em” — khác với Е là “ye”.', ex: 'поэ́т', exvn: 'nhà thơ' }
    ]},
    { t: 'warn', html: '<b>Ba cặp hay lẫn:</b> Б (b) ↔ В (v) — Д (đ) ↔ Л (l) khi viết tay — И (i) ↔ Н (n). Viết tay từng chữ ra giấy 5 lần là mắt phân biệt được ngay.' },
    { t: 'h', text: 'Từ mới đọc được' },
    { t: 'words', items: [
      { ru: 'дом', vn: 'ngôi nhà' },
      { ru: 'брат', vn: 'anh / em trai' },
      { ru: 'друг', vn: 'bạn (thân)' },
      { ru: 'го́род', vn: 'thành phố' },
      { ru: 'зима́', vn: 'mùa đông' },
      { ru: 'лимо́н', vn: 'quả chanh' },
      { ru: 'парк', vn: 'công viên' },
      { ru: 'футбо́л', vn: 'bóng đá' },
      { ru: 'поэ́т', vn: 'nhà thơ' },
      { ru: 'институ́т', vn: 'viện / trường đại học' },
      { ru: 'музе́й', vn: 'bảo tàng' },
      { ru: 'биле́т', vn: 'vé' },
      { ru: 'газе́та', vn: 'tờ báo' },
      { ru: 'кино́', vn: 'rạp chiếu phim, điện ảnh' },
      { ru: 'бана́н', vn: 'quả chuối' }
    ]},
    { t: 'tip', html: 'Để ý: <span class="ru">биле́т</span> (vé), <span class="ru">музе́й</span> (bảo tàng), <span class="ru">поэ́т</span> (nhà thơ) — tiếng Nga mượn rất nhiều từ châu Âu. Em sẽ gặp hàng trăm từ đoán được nghĩa mà không cần học.' }
  ],
  vocab: [
    { ru: 'дом', vn: 'ngôi nhà' }, { ru: 'брат', vn: 'anh/em trai' }, { ru: 'друг', vn: 'bạn thân' },
    { ru: 'го́род', vn: 'thành phố' }, { ru: 'зима́', vn: 'mùa đông' }, { ru: 'лимо́н', vn: 'quả chanh' },
    { ru: 'парк', vn: 'công viên' }, { ru: 'футбо́л', vn: 'bóng đá' }, { ru: 'институ́т', vn: 'viện, trường' },
    { ru: 'музе́й', vn: 'bảo tàng' }, { ru: 'биле́т', vn: 'vé' }, { ru: 'газе́та', vn: 'tờ báo' },
    { ru: 'кино́', vn: 'điện ảnh' }
  ],
  ex: [
    { t: 'choice', q: 'Chữ <span class="ru ru-big">Д д</span> đọc gần nhất với âm nào của tiếng Việt?', options: ['d (dì)', 'đ (đi)', 't (tôi)', 'l (lá)'], a: 1, why: 'Д = “đ”. Còn âm “d” giọng Bắc (tức “z”) lại là chữ З.' },
    { t: 'choice', q: '<span class="ru ru-big">го́род</span> nghĩa là:', options: ['ngôi nhà', 'thành phố', 'công viên', 'bảo tàng'], a: 1, why: 'город = thành phố. Chú ý chữ д cuối từ nghe thành “t”: “gô-rat”.' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'дом', a: 'дом' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'парк', a: 'парк' },
    { t: 'type', q: 'Gõ từ “bóng đá” bằng chữ Nga:', a: 'футбол', hint: 'ф-у-т-б-о-л' },
    { t: 'match', q: 'Nối:', pairs: [['брат', 'anh/em trai'], ['зима́', 'mùa đông'], ['биле́т', 'vé'], ['музе́й', 'bảo tàng'], ['лимо́н', 'quả chanh']] },
    { t: 'choice', q: 'Chữ nào đọc là “ph”?', options: ['П', 'Ф', 'Б', 'В'], a: 1, why: 'Ф = ph. П = p, Б = b, В = v.' }
  ]
};

/* ---------------------------------------------------------- BÀI 5 */
LESSON_DATA['a0-05'] = {
  level: 'a0',
  intro: 'Tám chữ cuối của nhóm “chữ mới”. Trong đó có bốn âm rít (Ж Ц Ч Ш Щ) mà tiếng Việt không có sẵn — nghe kỹ và bắt chước, đừng cố tìm chữ Việt tương đương cho bằng được.',
  blocks: [
    { t: 'letters', items: [
      { L: 'Ж ж', say: 'ж', read: 'zh', note: 'Cong lưỡi lên vòm rồi phát âm “gi” (giọng Bắc). Giống tiếng ong kêu. Luôn cứng.', ex: 'жена́', exvn: 'người vợ' },
      { L: 'Ц ц', say: 'ц', read: 'ts', note: '“T” và “s” dính liền thành một âm, như tiếng huýt gọi mèo “tsss”.', ex: 'цирк', exvn: 'rạp xiếc' },
      { L: 'Ч ч', say: 'ч', read: 'ch mềm', note: 'Như “ch” trong “chào”. Luôn mềm.', ex: 'чай', exvn: 'trà' },
      { L: 'Ш ш', say: 'ш', read: 'sh cứng', note: 'Như “s” giọng miền Nam nhưng cong lưỡi hơn, cứng và nặng.', ex: 'шко́ла', exvn: 'trường học' },
      { L: 'Щ щ', say: 'щ', read: 'sh mềm, dài', note: 'Giống Ш nhưng mềm và kéo dài hơn, gần “si” hơn “sờ”.', ex: 'борщ', exvn: 'canh củ dền borsch' },
      { L: 'Ю ю', say: 'ю', read: 'yu', note: 'Như “yu” trong “yêu” rút gọn: y + u.', ex: 'ю́бка', exvn: 'cái váy' },
      { L: 'Я я', say: 'я', read: 'ya', note: 'y + a. Cũng chính là từ “tôi” trong tiếng Nga.', ex: 'я́блоко', exvn: 'quả táo' },
      { L: 'Ё ё', say: 'ё', read: 'yo', note: 'y + ô. Đặc biệt: <b>luôn luôn mang trọng âm</b>, nên không bao giờ cần ghi dấu nhấn.', ex: 'ёлка', exvn: 'cây thông Nô-en' }
    ]},
    { t: 'note', html: 'Trong sách báo Nga, chữ <b>ё</b> thường bị viết thành <b>е</b> cho nhanh. Người Nga tự đoán được, còn em thì cứ nhớ: nếu đọc “е” mà thấy sai sai, thử đọc thành “ё” xem.' },
    { t: 'h', text: 'Từ mới' },
    { t: 'words', items: [
      { ru: 'чай', vn: 'trà' },
      { ru: 'час', vn: 'giờ, tiếng đồng hồ' },
      { ru: 'жена́', vn: 'vợ' },
      { ru: 'журна́л', vn: 'tạp chí' },
      { ru: 'шко́ла', vn: 'trường học' },
      { ru: 'ша́пка', vn: 'mũ (có vành hoặc lông)' },
      { ru: 'маши́на', vn: 'xe ô tô' },
      { ru: 'ча́шка', vn: 'cái tách' },
      { ru: 'борщ', vn: 'canh borsch — món quốc hồn quốc tuý' },
      { ru: 'цирк', vn: 'rạp xiếc' },
      { ru: 'юг', vn: 'phía nam' },
      { ru: 'я́блоко', vn: 'quả táo' },
      { ru: 'самолёт', vn: 'máy bay' },
      { ru: 'шокола́д', vn: 'sô cô la' },
      { ru: 'я', vn: 'tôi' }
    ]},
    { t: 'tip', html: 'Bốn âm rít Ж Ш Ч Щ nghe na ná nhau lúc đầu. Cách phân biệt: <b>Ш</b> và <b>Ж</b> cứng (lưỡi cong, âm trầm), <b>Ч</b> và <b>Щ</b> mềm (lưỡi phẳng, âm cao). Ж có tiếng thanh (rung dây thanh), Ш thì không — đặt tay lên cổ họng mà thử.' }
  ],
  vocab: [
    { ru: 'чай', vn: 'trà' }, { ru: 'час', vn: 'giờ' }, { ru: 'жена́', vn: 'vợ' },
    { ru: 'журна́л', vn: 'tạp chí' }, { ru: 'шко́ла', vn: 'trường học' }, { ru: 'маши́на', vn: 'xe ô tô' },
    { ru: 'борщ', vn: 'canh borsch' }, { ru: 'я́блоко', vn: 'quả táo' }, { ru: 'самолёт', vn: 'máy bay' },
    { ru: 'шокола́д', vn: 'sô cô la' }, { ru: 'я', vn: 'tôi' }, { ru: 'ю́бка', vn: 'cái váy' }
  ],
  ex: [
    { t: 'choice', q: 'Chữ nào <b>luôn</b> mang trọng âm, không bao giờ cần đánh dấu nhấn?', options: ['Я', 'Ю', 'Ё', 'Э'], a: 2, why: 'Ё luôn được nhấn. Nhìn thấy ё là biết ngay trọng âm rơi vào đó.' },
    { t: 'choice', q: '<span class="ru ru-big">маши́на</span> nghĩa là:', options: ['máy giặt', 'xe ô tô', 'cái máy nói chung', 'nhà máy'], a: 1, why: 'машина = xe ô tô trong tiếng Nga đời thường (nghĩa gốc là “cái máy”).' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'чай', a: 'чай' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'школа', a: 'школа' },
    { t: 'type', q: 'Gõ từ “tôi” bằng chữ Nga (một chữ cái):', a: 'я', hint: 'Chữ trông như chữ R viết ngược.' },
    { t: 'match', q: 'Nối:', pairs: [['борщ', 'canh borsch'], ['самолёт', 'máy bay'], ['журна́л', 'tạp chí'], ['я́блоко', 'quả táo'], ['цирк', 'rạp xiếc']] },
    { t: 'choice', q: 'Âm nào trong bốn âm sau là <b>mềm</b>?', options: ['Ш', 'Ж', 'Ч', 'Ц'], a: 2, why: 'Ч luôn mềm. Ш, Ж, Ц luôn cứng — ba chữ này không bao giờ mềm, dù đứng cạnh chữ gì.' }
  ]
};

/* ---------------------------------------------------------- BÀI 6 */
LESSON_DATA['a0-06'] = {
  level: 'a0',
  intro: 'Ba chữ cuối cùng. Một chữ là nguyên âm khó nhất tiếng Nga, hai chữ còn lại không có âm riêng — chúng chỉ ra hiệu cho chữ đứng trước. Học xong bài này em biết mặt đủ 33 chữ.',
  blocks: [
    { t: 'letters', items: [
      { L: 'Ы ы', say: 'ы', read: 'ư (nhưng sâu hơn)', note: 'Gần nhất với “ư” tiếng Việt, nhưng lưỡi lùi về sau và thấp hơn. Thử nói “i” rồi kéo lưỡi lùi dần về phía cổ họng — đó chính là ы. Không bao giờ đứng đầu từ.', ex: 'сын', exvn: 'con trai' },
      { L: 'Ь ь', say: 'мать', read: 'không có âm', note: 'Gọi là “dấu mềm” (мягкий знак). Nó làm chữ phụ âm đứng trước <b>mềm đi</b> — lưỡi nâng lên vòm, nghe như có chữ “i” thoáng qua.', ex: 'мать', exvn: 'mẹ (trang trọng)' },
      { L: 'Ъ ъ', say: 'подъезд', read: 'không có âm', note: 'Gọi là “dấu cứng” (твёрдый знак). Rất hiếm — chỉ dùng để tách tiền tố khỏi gốc từ, báo cho người đọc dừng một nhịp rồi mới đọc tiếp.', ex: 'подъе́зд', exvn: 'lối vào chung cư' }
    ]},
    { t: 'h', text: 'Cứng và mềm — cặp khái niệm sống còn của tiếng Nga' },
    { t: 'p', html: 'Gần như mọi phụ âm Nga đều có hai bản: <b>cứng</b> và <b>mềm</b>. Cùng một chữ, nhưng nếu sau nó là <b>Ь</b> hoặc các nguyên âm <b>Е, Ё, И, Ю, Я</b> thì nó mềm; nếu sau nó là <b>А, О, У, Ы, Э</b> thì nó cứng.' },
    { t: 'table', head: ['Cứng', 'Mềm', 'Khác nhau thế nào'], rows: [
      ['мат (chiếu)', 'мать (mẹ)', 'т cứng ↔ т mềm nhờ ь'],
      ['был (đã là)', 'быль (chuyện có thật)', 'л cứng ↔ л mềm'],
      ['нос (mũi)', 'нёс (đã mang)', 'н cứng trước о ↔ н mềm trước ё'],
      ['лук (hành)', 'люк (nắp cống)', 'л cứng trước у ↔ л mềm trước ю']
    ]},
    { t: 'warn', html: 'Cặp <b>ы / и</b> là chỗ người Việt sai nhiều nhất, vì tai ta nghe hai âm này gần như một. Hãy tập với cặp <span class="ru">мыть</span> (rửa) — <span class="ru">мить</span>… và <span class="ru">ты</span> (bạn) — <span class="ru">ти</span>. Bấm loa nghe đi nghe lại 10 lần, tai sẽ tự tách ra.' },
    { t: 'h', text: 'Từ mới' },
    { t: 'words', items: [
      { ru: 'ты', vn: 'bạn, mày (thân mật)' },
      { ru: 'вы', vn: 'các bạn / ngài (lịch sự)' },
      { ru: 'мы', vn: 'chúng tôi' },
      { ru: 'сын', vn: 'con trai' },
      { ru: 'мышь', vn: 'con chuột' },
      { ru: 'дверь', vn: 'cánh cửa' },
      { ru: 'мать', vn: 'mẹ (trang trọng)' },
      { ru: 'день', vn: 'ngày' },
      { ru: 'семья́', vn: 'gia đình' },
      { ru: 'о́чень', vn: 'rất' }
    ]},
    { t: 'tip', html: '<b>Xong rồi đấy — 33/33 chữ.</b> Từ giây phút này em đọc được mọi dòng chữ tiếng Nga trên đời, kể cả khi chưa hiểu nghĩa. Đó là ngưỡng cửa mà rất nhiều người bỏ cuộc trước khi bước qua.' }
  ],
  vocab: [
    { ru: 'ты', vn: 'bạn (thân mật)' }, { ru: 'вы', vn: 'ngài / các bạn' }, { ru: 'мы', vn: 'chúng tôi' },
    { ru: 'сын', vn: 'con trai' }, { ru: 'дверь', vn: 'cánh cửa' }, { ru: 'мать', vn: 'mẹ' },
    { ru: 'день', vn: 'ngày' }, { ru: 'семья́', vn: 'gia đình' }, { ru: 'о́чень', vn: 'rất' }
  ],
  ex: [
    { t: 'choice', q: 'Chữ <span class="ru ru-big">Ь</span> có tác dụng gì?', options: ['Đọc thành âm “i”', 'Làm phụ âm đứng trước mềm đi', 'Kéo dài nguyên âm', 'Đánh dấu trọng âm'], a: 1, why: 'Ь không có âm riêng. Nó chỉ làm phụ âm trước nó mềm đi — và điều đó đủ để đổi hẳn nghĩa của từ.' },
    { t: 'choice', q: 'Chữ nào KHÔNG bao giờ đứng đầu từ tiếng Nga?', options: ['И', 'Э', 'Ы', 'Я'], a: 2, why: 'Ы không bao giờ mở đầu một từ. Ba chữ kia thì có (и, это, я).' },
    { t: 'choice', q: '<span class="ru ru-big">мат</span> và <span class="ru ru-big">мать</span> khác nhau ở chỗ nào?', options: ['Trọng âm', 'Chữ т ở cuối cứng hay mềm', 'Số lượng âm tiết', 'Không khác gì'], a: 1, why: 'Dấu ь làm т mềm đi. Nghĩa đổi hẳn: “chiếu” thành “mẹ”.' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'семья', a: 'семья' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'дверь', a: 'дверь' },
    { t: 'match', q: 'Nối:', pairs: [['ты', 'bạn (thân mật)'], ['мы', 'chúng tôi'], ['сын', 'con trai'], ['о́чень', 'rất'], ['день', 'ngày']] }
  ]
};

/* ---------------------------------------------------------- BÀI 7 */
LESSON_DATA['a0-07'] = {
  level: 'a0',
  intro: 'Em đã đọc được chữ. Bây giờ là bí mật khiến người Nga nghe em nói mà gật đầu: <b>trọng âm</b>. Trong một từ tiếng Nga, chỉ một âm tiết được nhấn — và mọi âm tiết còn lại thì bị “nuốt” đi ít nhiều. Không nắm điều này thì đọc đúng chữ vẫn nghe rất Tây.',
  blocks: [
    { t: 'h', text: 'Quy tắc số 1 — О không nhấn đọc thành А (аканье)' },
    { t: 'p', html: 'Đây là quy tắc quan trọng nhất. Chữ <b>о</b> chỉ đọc là “ô” khi nó mang trọng âm. Ở mọi vị trí khác, nó đọc thành “a” (hoặc một âm “ơ” rất nhẹ nếu ở xa trọng âm).' },
    { t: 'table', head: ['Viết', 'Đọc thật', 'Nghĩa'], rows: [
      ['Москва́', 'Ma-skvá', 'Moskva'],
      ['хорошо́', 'kha-ra-shó', 'tốt'],
      ['молоко́', 'ma-la-kó', 'sữa'],
      ['ко́шка', 'kósh-ka', 'con mèo cái'],
      ['о́чень', 'ó-chinь', 'rất']
    ]},
    { t: 'note', html: 'Nhìn dòng <span class="ru">молоко́</span>: ba chữ о giống hệt nhau trên giấy, nhưng đọc là <b>ma-la-kó</b> — chỉ chữ cuối mang trọng âm mới giữ nguyên âm “ô”.' },
    { t: 'h', text: 'Quy tắc số 2 — Е và Я không nhấn ngả về “i”' },
    { t: 'table', head: ['Viết', 'Đọc thật', 'Nghĩa'], rows: [
      ['сестра́', 'si-strá', 'chị/em gái'],
      ['язы́к', 'yi-zýk', 'ngôn ngữ, cái lưỡi'],
      ['теа́тр', 'ti-átr', 'nhà hát']
    ]},
    { t: 'h', text: 'Quy tắc số 3 — Phụ âm hữu thanh cuối từ hoá vô thanh' },
    { t: 'p', html: 'Cuối từ, các chữ <b>б в г д ж з</b> đọc thành cặp vô thanh của chúng: <b>п ф к т ш с</b>.' },
    { t: 'table', head: ['Viết', 'Đọc thật', 'Nghĩa'], rows: [
      ['хлеб', 'khlep', 'bánh mì'],
      ['го́род', 'gó-rat', 'thành phố'],
      ['друг', 'druk', 'bạn'],
      ['нож', 'nosh', 'con dao'],
      ['раз', 'ras', 'một lần']
    ]},
    { t: 'h', text: 'Trọng âm rơi vào đâu?' },
    { t: 'p', html: 'Tin buồn: tiếng Nga <b>không có quy tắc cố định</b>. Trọng âm rơi vào đâu là chuyện của từng từ, và có thể nhảy chỗ khi từ biến đổi (<span class="ru">рука́</span> → <span class="ru">ру́ки</span>). Tin vui: học từ mới thì học luôn trọng âm của nó, y như học dấu thanh tiếng Việt. Trong web này mọi từ đều có sẵn dấu nhấn.' },
    { t: 'warn', html: '<b>Đặt sai trọng âm nguy hiểm hơn phát âm sai chữ.</b> Người Nga nghe sai một phụ âm vẫn đoán ra từ; nhưng nhấn sai chỗ thì họ không nhận ra từ đó nữa. Kinh điển: <span class="ru">за́мок</span> (lâu đài) ↔ <span class="ru">замо́к</span> (ổ khoá) — cùng một mặt chữ.' }
  ],
  vocab: [
    { ru: 'молоко́', vn: 'sữa' }, { ru: 'хлеб', vn: 'bánh mì' }, { ru: 'язы́к', vn: 'ngôn ngữ' },
    { ru: 'теа́тр', vn: 'nhà hát' }, { ru: 'ко́шка', vn: 'con mèo cái' }, { ru: 'рука́', vn: 'bàn tay' }
  ],
  ex: [
    { t: 'choice', q: 'Từ <span class="ru ru-big">молоко́</span> đọc đúng là:', options: ['mô-lô-kô', 'ma-la-kó', 'mô-la-ka', 'ma-lô-kô'], a: 1, why: 'Chỉ chữ о cuối mang trọng âm nên giữ âm “ô”. Hai chữ о trước bị giảm thành “a”.' },
    { t: 'choice', q: 'Từ <span class="ru ru-big">хлеб</span> (bánh mì) kết thúc bằng âm gì khi đọc?', options: ['b', 'p', 'v', 'ph'], a: 1, why: 'Cuối từ, б hoá vô thanh thành “p”: “khlep”.' },
    { t: 'choice', q: 'Vì sao đặt trọng âm sai lại nguy hiểm?', options: ['Vì sai ngữ pháp', 'Vì người Nga có thể không nhận ra từ đó', 'Vì viết sẽ sai chính tả', 'Vì đổi giống của danh từ'], a: 1, why: 'Trọng âm với tiếng Nga quan trọng như dấu thanh với tiếng Việt: за́мок ≠ замо́к.' },
    { t: 'choice', q: '<span class="ru ru-big">го́род</span> đọc thật là:', options: ['gô-rôd', 'ga-rôt', 'gó-rat', 'ga-rat'], a: 2, why: 'Trọng âm ở о đầu → giữ “ô”. Chữ о thứ hai giảm thành “a”, chữ д cuối hoá thành “t”.' },
    { t: 'type', q: 'Từ nào nghĩa là “sữa”? (gõ chữ Nga, không cần dấu nhấn)', a: 'молоко', hint: 'Ba âm tiết, ba chữ о.' }
  ]
};

/* ---------------------------------------------------------- BÀI 8 */
LESSON_DATA['a0-08'] = {
  level: 'a0',
  intro: 'Không lý thuyết mới. Bài này chỉ có một việc: <b>đọc thành tiếng</b>. Đọc trơn được 40 từ dưới đây là em đã qua ngưỡng vỡ lòng thật sự.',
  blocks: [
    { t: 'h', text: 'Trước hết: chinh phục chữ Р' },
    { t: 'p', html: 'Âm “r” rung là ải khó nhất với người Việt. Cách tập đã được kiểm nghiệm: đặt đầu lưỡi ngay sau răng cửa trên, thổi hơi mạnh và <b>để lưỡi tự rung</b>, đừng cố điều khiển. Nhiều người bắt đầu được nhờ nói nhanh “tr-tr-tr-tr” hoặc “đ-đ-đ-đ-đ” rồi tăng tốc dần.' },
    { t: 'words', items: [
      { ru: 'ра-ра-ра', vn: 'tập rung, âm mở' },
      { ru: 'ры-ры-ры', vn: 'tập rung, âm sâu' },
      { ru: 'тра-тра-тра', vn: 'ghép sau т — dễ rung nhất' },
      { ru: 'дра-дра-дра', vn: 'ghép sau д' },
      { ru: 'ру́сский', vn: 'tiếng Nga / thuộc về Nga' }
    ]},
    { t: 'tip', html: 'Chưa rung được ngay cũng không sao. Người Nga vẫn hiểu em. Cứ tập mỗi ngày 2 phút, trung bình 2–6 tuần là bật ra được.' },
    { t: 'h', text: '40 từ luyện đọc' },
    { t: 'p', html: 'Đọc từng dòng thành tiếng. Bấm loa nghe trước, đọc theo, rồi tự đọc lại không nghe. Chưa cần thuộc nghĩa — mục tiêu là <b>mắt thấy chữ, miệng bật ra âm</b> mà không phải dịch từng chữ trong đầu.' },
    { t: 'words', items: [
      { ru: 'да', vn: 'vâng, có' }, { ru: 'нет', vn: 'không' },
      { ru: 'вода́', vn: 'nước' }, { ru: 'хлеб', vn: 'bánh mì' },
      { ru: 'ча́шка', vn: 'cái tách' }, { ru: 'ло́жка', vn: 'cái thìa' },
      { ru: 'кни́га', vn: 'quyển sách' }, { ru: 'стол', vn: 'cái bàn' },
      { ru: 'стул', vn: 'cái ghế' }, { ru: 'окно́', vn: 'cửa sổ' },
      { ru: 'ко́мната', vn: 'căn phòng' }, { ru: 'у́лица', vn: 'đường phố' },
      { ru: 'магази́н', vn: 'cửa hàng' }, { ru: 'апте́ка', vn: 'hiệu thuốc' },
      { ru: 'вокза́л', vn: 'nhà ga' }, { ru: 'аэропо́рт', vn: 'sân bay' },
      { ru: 'рабо́та', vn: 'công việc' }, { ru: 'студе́нт', vn: 'sinh viên (nam)' },
      { ru: 'студе́нтка', vn: 'sinh viên (nữ)' }, { ru: 'учи́тель', vn: 'thầy giáo' },
      { ru: 'врач', vn: 'bác sĩ' }, { ru: 'де́ньги', vn: 'tiền' },
      { ru: 'вре́мя', vn: 'thời gian' }, { ru: 'сего́дня', vn: 'hôm nay' },
      { ru: 'за́втра', vn: 'ngày mai' }, { ru: 'вчера́', vn: 'hôm qua' },
      { ru: 'у́тро', vn: 'buổi sáng' }, { ru: 'ве́чер', vn: 'buổi tối' },
      { ru: 'ночь', vn: 'đêm' }, { ru: 'неде́ля', vn: 'tuần' },
      { ru: 'друг', vn: 'bạn' }, { ru: 'любо́вь', vn: 'tình yêu' },
      { ru: 'сча́стье', vn: 'hạnh phúc' }, { ru: 'ро́дина', vn: 'quê hương' },
      { ru: 'Вьетна́м', vn: 'Việt Nam' }, { ru: 'Росси́я', vn: 'nước Nga' },
      { ru: 'ру́сский язы́к', vn: 'tiếng Nga' }, { ru: 'вьетна́мский язы́к', vn: 'tiếng Việt' },
      { ru: 'спаси́бо', vn: 'cảm ơn' }, { ru: 'пожа́луйста', vn: 'xin mời / không có gì' }
    ]},
    { t: 'note', html: 'Chú ý <span class="ru">сего́дня</span> (hôm nay): chữ <b>г</b> ở đây đọc là <b>“v”</b> — “si-vód-nya”. Đây là ngoại lệ chính tả cổ, gặp trong đuôi -его, -ого. Ghi nhớ luôn cho quen.' }
  ],
  vocab: [
    { ru: 'да', vn: 'vâng' }, { ru: 'нет', vn: 'không' }, { ru: 'вода́', vn: 'nước' },
    { ru: 'кни́га', vn: 'quyển sách' }, { ru: 'стол', vn: 'cái bàn' }, { ru: 'окно́', vn: 'cửa sổ' },
    { ru: 'магази́н', vn: 'cửa hàng' }, { ru: 'рабо́та', vn: 'công việc' }, { ru: 'студе́нтка', vn: 'nữ sinh viên' },
    { ru: 'врач', vn: 'bác sĩ' }, { ru: 'сего́дня', vn: 'hôm nay' }, { ru: 'за́втра', vn: 'ngày mai' },
    { ru: 'вчера́', vn: 'hôm qua' }, { ru: 'спаси́бо', vn: 'cảm ơn' }, { ru: 'пожа́луйста', vn: 'xin mời' },
    { ru: 'Вьетна́м', vn: 'Việt Nam' }, { ru: 'Росси́я', vn: 'nước Nga' }, { ru: 'любо́вь', vn: 'tình yêu' }
  ],
  ex: [
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'спасибо', a: 'спасибо' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'книга', a: 'книга' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'вода', a: 'вода' },
    { t: 'choice', q: 'Trong từ <span class="ru ru-big">сего́дня</span>, chữ <b>г</b> đọc là:', options: ['g', 'v', 'kh', 'không đọc'], a: 1, why: 'Ngoại lệ chính tả: сегодня đọc là “si-vód-nya”. Cùng quy tắc với đuôi -ого, -его.' },
    { t: 'match', q: 'Nối:', pairs: [['вокза́л', 'nhà ga'], ['апте́ка', 'hiệu thuốc'], ['ро́дина', 'quê hương'], ['вре́мя', 'thời gian'], ['сча́стье', 'hạnh phúc']] },
    { t: 'type', q: 'Gõ từ “Việt Nam” bằng chữ Nga:', a: 'вьетнам', hint: 'Bắt đầu bằng в, có dấu mềm ь sau đó.' },
    { t: 'choice', q: 'Cách tập âm Р hiệu quả nhất là:', options: ['Cố gồng lưỡi thật mạnh', 'Thổi hơi mạnh và để lưỡi tự rung, ghép sau т/д', 'Đọc thật chậm từng chữ', 'Thay bằng âm “l” cho dễ'], a: 1, why: 'Lưỡi rung là do luồng hơi, không do cơ. Ghép “тра”, “дра” giúp lưỡi vào đúng vị trí sẵn.' }
  ]
};

/* ---------------------------------------------------------- BÀI 9 */
LESSON_DATA['a0-09'] = {
  level: 'a0',
  intro: 'Từ bài này em bắt đầu <b>nói</b>. Người Nga rất coi trọng chuyện chào hỏi — chào đúng kiểu là thiện cảm có ngay từ giây đầu tiên.',
  blocks: [
    { t: 'h', text: 'Chào theo mức độ trang trọng' },
    { t: 'table', head: ['Tiếng Nga', 'Nghĩa', 'Dùng khi nào'], rows: [
      ['Здра́вствуйте!', 'Xin chào (trang trọng)', 'Với người lạ, người lớn tuổi, thầy cô, nhiều người. <b>An toàn nhất, cứ dùng cái này.</b>'],
      ['Здра́вствуй!', 'Chào bạn', 'Với một người quen, thân mật hơn một chút'],
      ['Приве́т!', 'Chào! Hi!', 'Bạn bè, người cùng tuổi, người thân'],
      ['До́брое у́тро!', 'Chào buổi sáng', 'Từ sáng đến khoảng 11h'],
      ['До́брый день!', 'Chào buổi trưa/chiều', 'Từ trưa đến khoảng 17h'],
      ['До́брый ве́чер!', 'Chào buổi tối', 'Từ 17h trở đi']
    ]},
    { t: 'warn', html: '<span class="ru">Здра́вствуйте</span> nhìn đáng sợ nhưng người Nga nói rất nhanh và <b>nuốt luôn chữ в đầu tiên</b>: nghe thành “zdrás-tvuy-tye”. Cứ đọc theo âm thanh, đừng đọc theo mặt chữ.' },
    { t: 'h', text: 'Tạm biệt' },
    { t: 'words', items: [
      { ru: 'До свида́ния!', vn: 'Tạm biệt (trang trọng)' },
      { ru: 'Пока́!', vn: 'Bai! (thân mật)' },
      { ru: 'До за́втра!', vn: 'Hẹn mai gặp lại' },
      { ru: 'Споко́йной но́чи!', vn: 'Chúc ngủ ngon' },
      { ru: 'Всего́ до́брого!', vn: 'Chúc mọi điều tốt lành' }
    ]},
    { t: 'h', text: 'Phép lịch sự cơ bản' },
    { t: 'words', items: [
      { ru: 'Спаси́бо!', vn: 'Cảm ơn' },
      { ru: 'Большо́е спаси́бо!', vn: 'Cảm ơn nhiều' },
      { ru: 'Пожа́луйста', vn: 'Xin mời / Làm ơn / Không có gì' },
      { ru: 'Извини́те', vn: 'Xin lỗi (trang trọng)' },
      { ru: 'Извини́', vn: 'Xin lỗi (thân mật)' },
      { ru: 'Ничего́', vn: 'Không sao đâu' }
    ]},
    { t: 'note', html: '<span class="ru">Пожа́луйста</span> là từ đa năng nhất tiếng Nga: vừa là “làm ơn”, vừa là “xin mời”, vừa là câu đáp lại lời cảm ơn. Nhớ một từ dùng được ba chỗ.' },
    { t: 'h', text: 'Hỏi thăm' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Приве́т! Как дела́?', vn: 'Chào cậu! Cậu khoẻ không? (nghĩa đen: công việc thế nào?)' },
      { who: 'Б', ru: 'Хорошо́, спаси́бо! А у тебя́?', vn: 'Tốt, cảm ơn! Còn cậu?' },
      { who: 'А', ru: 'То́же непло́хо.', vn: 'Cũng ổn.' }
    ]},
    { t: 'words', items: [
      { ru: 'Как дела́?', vn: 'Dạo này thế nào?' },
      { ru: 'Хорошо́', vn: 'Tốt' },
      { ru: 'Норма́льно', vn: 'Bình thường' },
      { ru: 'Непло́хо', vn: 'Cũng khá' },
      { ru: 'Пло́хо', vn: 'Tệ' },
      { ru: 'Так себе́', vn: 'Tàm tạm' }
    ]},
    { t: 'tip', html: 'Khác với người Việt hay hỏi “ăn cơm chưa”, người Nga hỏi <span class="ru">Как дела́?</span> và <b>chờ câu trả lời thật</b>. Trả lời một chữ “хорошо” rồi hỏi lại “А у тебя́?” là đủ lịch sự.' }
  ],
  vocab: [
    { ru: 'Здра́вствуйте', vn: 'Xin chào (trang trọng)' }, { ru: 'Приве́т', vn: 'Chào (thân mật)' },
    { ru: 'До свида́ния', vn: 'Tạm biệt' }, { ru: 'Пока́', vn: 'Bai' },
    { ru: 'Спаси́бо', vn: 'Cảm ơn' }, { ru: 'Пожа́луйста', vn: 'Làm ơn / không có gì' },
    { ru: 'Извини́те', vn: 'Xin lỗi' }, { ru: 'Как дела́?', vn: 'Khoẻ không?' },
    { ru: 'Норма́льно', vn: 'Bình thường' }, { ru: 'До́брое у́тро', vn: 'Chào buổi sáng' },
    { ru: 'До́брый ве́чер', vn: 'Chào buổi tối' }, { ru: 'Споко́йной но́чи', vn: 'Chúc ngủ ngon' }
  ],
  ex: [
    { t: 'choice', q: 'Gặp giáo sư ở trường, em chào thế nào cho đúng?', options: ['Приве́т!', 'Здра́вствуйте!', 'Пока́!', 'Как дела́?'], a: 1, why: 'Здравствуйте là lời chào trang trọng, dùng với người lớn tuổi, cấp trên, người lạ.' },
    { t: 'choice', q: '<span class="ru ru-big">Пожа́луйста</span> KHÔNG có nghĩa nào sau đây?', options: ['Làm ơn', 'Xin mời', 'Không có gì', 'Tạm biệt'], a: 3, why: 'Пожалуйста có ba nghĩa đầu. “Tạm biệt” là До свидания.' },
    { t: 'listen', q: 'Nghe và gõ lại lời chào:', say: 'привет', a: 'привет' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'спасибо', a: 'спасибо' },
    { t: 'choice', q: 'Lúc 8 giờ tối nên chào:', options: ['До́брое у́тро!', 'До́брый день!', 'До́брый ве́чер!', 'Споко́йной но́чи!'], a: 2, why: 'Sau 17h dùng Добрый вечер. Спокойной ночи chỉ dùng khi chia tay đi ngủ.' },
    { t: 'match', q: 'Nối:', pairs: [['Извини́те', 'Xin lỗi'], ['Ничего́', 'Không sao đâu'], ['Так себе́', 'Tàm tạm'], ['До за́втра', 'Hẹn mai gặp lại']] },
    { t: 'type', q: 'Bạn thân hỏi «Как дела?», em trả lời “tốt”:', a: 'хорошо', alt: ['хорошо спасибо'], hint: 'Bảy chữ cái, bắt đầu bằng х.' }
  ]
};

/* ---------------------------------------------------------- BÀI 10 */
LESSON_DATA['a0-10'] = {
  level: 'a0',
  intro: 'Bài cuối của cấp A0. Em sẽ nói được câu tiếng Nga hoàn chỉnh đầu tiên về chính mình — và viết được tên mình bằng chữ Nga.',
  blocks: [
    { t: 'h', text: 'Câu tiếng Nga không cần động từ “là”' },
    { t: 'p', html: 'Tiếng Việt nói “Tôi <b>là</b> sinh viên”. Tiếng Anh nói “I <b>am</b> a student”. Tiếng Nga ở thì hiện tại thì… bỏ luôn động từ “là”, chỉ để một dấu gạch ngang hoặc không gì cả:' },
    { t: 'words', items: [
      { ru: 'Я студе́нтка.', vn: 'Tôi là sinh viên (nữ).' },
      { ru: 'Он врач.', vn: 'Anh ấy là bác sĩ.' },
      { ru: 'Э́то дом.', vn: 'Đây là ngôi nhà.' },
      { ru: 'Москва́ — столи́ца Росси́и.', vn: 'Moskva là thủ đô của nước Nga.' }
    ]},
    { t: 'tip', html: 'Đây là <b>lợi thế lớn</b> của người Việt học tiếng Nga: cấu trúc “Tôi sinh viên” nghe rất tự nhiên với tai ta, trong khi người Anh, người Pháp phải mất công bỏ thói quen.' },
    { t: 'h', text: 'Giới thiệu bản thân' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Здра́вствуйте! Как вас зову́т?', vn: 'Xin chào! Bạn tên là gì? (trang trọng)' },
      { who: 'Б', ru: 'Меня́ зову́т Оань. А вас?', vn: 'Tôi tên là Oanh. Còn bạn?' },
      { who: 'А', ru: 'Меня́ зову́т Ири́на. О́чень прия́тно!', vn: 'Tôi tên là Irina. Rất hân hạnh!' },
      { who: 'Б', ru: 'Мне то́же о́чень прия́тно.', vn: 'Tôi cũng rất hân hạnh.' },
      { who: 'А', ru: 'Отку́да вы?', vn: 'Bạn từ đâu đến?' },
      { who: 'Б', ru: 'Я из Вьетна́ма. А вы?', vn: 'Tôi đến từ Việt Nam. Còn bạn?' },
      { who: 'А', ru: 'Я из Росси́и, из Ирку́тска.', vn: 'Tôi từ Nga, từ Irkutsk.' }
    ]},
    { t: 'note', html: '<span class="ru">Меня́ зову́т…</span> dịch sát nghĩa là “người ta gọi tôi là…”. Đừng dịch từng chữ, cứ nhớ nguyên cụm như một khối.' },
    { t: 'h', text: 'Bốn câu để dành sẵn' },
    { t: 'words', items: [
      { ru: 'Меня́ зову́т …', vn: 'Tôi tên là …' },
      { ru: 'Я из Вьетна́ма.', vn: 'Tôi đến từ Việt Nam.' },
      { ru: 'Я не понима́ю.', vn: 'Tôi không hiểu.' },
      { ru: 'Говори́те ме́дленнее, пожа́луйста.', vn: 'Xin nói chậm hơn ạ.' },
      { ru: 'Я то́лько начина́ю учи́ть ру́сский язы́к.', vn: 'Tôi mới bắt đầu học tiếng Nga.' }
    ]},
    { t: 'h', text: 'Viết tên người Việt bằng chữ Nga' },
    { t: 'table', head: ['Chữ Việt', 'Chữ Nga', 'Ví dụ'], rows: [
      ['đ', 'д', 'Đức → Дык'],
      ['d, gi, r', 'з / д', 'Dũng → Зунг'],
      ['th', 'тх', 'Thảo → Тхао'],
      ['tr, ch', 'ч', 'Trung → Чунг'],
      ['ph', 'ф', 'Phương → Фыонг'],
      ['nh (cuối)', 'нь', 'Oanh → Оань'],
      ['ng (cuối)', 'нг', 'Hoàng → Хоанг'],
      ['ư', 'ы', 'Hưng → Хынг'],
      ['ơ, â', 'о / ы', 'Sơn → Шон'],
      ['h', 'х', 'Hà → Ха']
    ]},
    { t: 'words', items: [
      { ru: 'Меня́ зову́т Оань.', vn: 'Tôi tên là Oanh.' },
      { ru: 'Меня́ зову́т Чунг.', vn: 'Tôi tên là Trung.' },
      { ru: 'Нгуе́н', vn: 'họ Nguyễn' },
      { ru: 'Ханой', vn: 'Hà Nội' },
      { ru: 'Хошими́н', vn: 'Thành phố Hồ Chí Minh' }
    ]},
    { t: 'tip', html: 'Bài tập cuối cấp A0 dành cho em: viết <b>họ tên đầy đủ của mình</b> bằng chữ Nga ra giấy, rồi đọc to lên. Đó là lần đầu tiên em tồn tại trong một ngôn ngữ mới.' },
    { t: 'h', text: 'Xong cấp A0 rồi!' },
    { t: 'p', html: 'Em đã: đọc được 33 chữ cái · hiểu trọng âm và ba quy tắc phát âm · biết khoảng 80 từ · chào hỏi và giới thiệu bản thân được. Bây giờ hãy vào phần <b>Kì thi</b> làm bài thi cuối cấp A0 — đạt từ 80% trở lên là có giấy chứng nhận mang tên em.' }
  ],
  vocab: [
    { ru: 'Меня́ зову́т', vn: 'Tôi tên là' }, { ru: 'Как вас зову́т?', vn: 'Bạn tên gì? (lịch sự)' },
    { ru: 'О́чень прия́тно', vn: 'Rất hân hạnh' }, { ru: 'Отку́да вы?', vn: 'Bạn từ đâu đến?' },
    { ru: 'Я из Вьетна́ма', vn: 'Tôi từ Việt Nam' }, { ru: 'Я не понима́ю', vn: 'Tôi không hiểu' },
    { ru: 'Э́то', vn: 'đây là' }, { ru: 'студе́нт', vn: 'sinh viên (nam)' },
    { ru: 'столи́ца', vn: 'thủ đô' }
  ],
  ex: [
    { t: 'choice', q: 'Câu “Tôi là sinh viên” trong tiếng Nga viết đúng là:', options: ['Я есть студе́нтка.', 'Я студе́нтка.', 'Я быть студе́нтка.', 'Я — есть студе́нтка.'], a: 1, why: 'Thì hiện tại tiếng Nga bỏ hẳn động từ “là”. Chỉ cần Я студентка.' },
    { t: 'choice', q: 'Người lạ hỏi tên em một cách lịch sự bằng câu nào?', options: ['Как дела́?', 'Отку́да вы?', 'Как вас зову́т?', 'О́чень прия́тно'], a: 2, why: 'Как вас зовут? = Ngài tên là gì? Với bạn bè thì nói Как тебя зовут?' },
    { t: 'type', q: 'Hoàn thành câu: “Tôi đến từ Việt Nam” — Я из ___ (gõ chữ Nga)', a: 'вьетнама', hint: 'Вьетнам đổi đuôi thành -а sau giới từ из.' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'меня зовут', a: 'меня зовут' },
    { t: 'choice', q: 'Tên “Oanh” viết bằng chữ Nga là:', options: ['Оанг', 'Оань', 'Оанх', 'Уань'], a: 1, why: 'Âm “nh” cuối tiếng Việt được ghi bằng нь trong tiếng Nga.' },
    { t: 'match', q: 'Nối:', pairs: [['О́чень прия́тно', 'Rất hân hạnh'], ['Отку́да вы?', 'Bạn từ đâu?'], ['Я не понима́ю', 'Tôi không hiểu'], ['столи́ца', 'thủ đô']] },
    { t: 'choice', q: 'Câu nào cứu em khi người Nga nói quá nhanh?', options: ['Спаси́бо!', 'Говори́те ме́дленнее, пожа́луйста.', 'До свида́ния!', 'Как дела́?'], a: 1, why: 'Говорите медленнее, пожалуйста = Xin nói chậm hơn ạ. Câu quý giá nhất của người mới học.' }
  ]
};

/* ---------------------------------------------------------- BẢNG CHỮ CÁI ĐẦY ĐỦ */
const ALPHABET = [
  ['А а', 'а', 'a'], ['Б б', 'б', 'b'], ['В в', 'в', 'v'], ['Г г', 'г', 'g'],
  ['Д д', 'д', 'đ'], ['Е е', 'е', 'ye'], ['Ё ё', 'ё', 'yo'], ['Ж ж', 'ж', 'zh'],
  ['З з', 'з', 'z'], ['И и', 'и', 'i'], ['Й й', 'й', 'y ngắn'], ['К к', 'к', 'k'],
  ['Л л', 'л', 'l'], ['М м', 'м', 'm'], ['Н н', 'н', 'n'], ['О о', 'о', 'o'],
  ['П п', 'п', 'p'], ['Р р', 'р', 'r rung'], ['С с', 'с', 's'], ['Т т', 'т', 't'],
  ['У у', 'у', 'u'], ['Ф ф', 'ф', 'ph'], ['Х х', 'х', 'kh'], ['Ц ц', 'ц', 'ts'],
  ['Ч ч', 'ч', 'ch'], ['Ш ш', 'ш', 'sh cứng'], ['Щ щ', 'щ', 'sh mềm'], ['Ъ ъ', 'подъезд', 'dấu cứng'],
  ['Ы ы', 'ы', 'ư'], ['Ь ь', 'мать', 'dấu mềm'], ['Э э', 'э', 'e'], ['Ю ю', 'ю', 'yu'],
  ['Я я', 'я', 'ya']
];
