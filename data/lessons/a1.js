/* ============================================================
   a1.js — NỘI DUNG CẤP A1 (Sơ cấp / Элементарный уровень)
   ============================================================ */

/* ---------------------------------------------------------- BÀI 1 */
LESSON_DATA['a1-01'] = {
  level: 'a1',
  intro: 'Chào mừng em lên cấp A1. Bài đầu tiên nói về thứ mà tiếng Việt hoàn toàn không có, nên phải làm quen từ đầu: <b>mọi danh từ tiếng Nga đều có giống</b> — đàn ông, đàn bà, hoặc trung tính. Cái bàn là "đàn ông", cái sách là "đàn bà". Nghe vô lý nhưng có quy tắc rõ ràng, và nắm được nó thì cả hệ thống ngữ pháp phía sau mới đứng vững.',
  blocks: [
    { t: 'h', text: 'Vì sao phải quan tâm đến giống?' },
    { t: 'p', html: 'Vì trong tiếng Nga, mọi thứ đi kèm danh từ đều phải <b>hoà hợp</b> với giống của nó: tính từ, đại từ sở hữu, động từ ở thì quá khứ. Nói sai giống thì cả câu sai theo. Ví dụ cùng một từ "của tôi":' },
    { t: 'words', items: [
      { ru: 'мой брат', vn: 'anh trai tôi', note: 'giống đực' },
      { ru: 'моя́ сестра́', vn: 'chị gái tôi', note: 'giống cái' },
      { ru: 'моё окно́', vn: 'cửa sổ của tôi', note: 'giống trung' }
    ]},
    { t: 'h', text: 'Quy tắc: nhìn chữ cuối cùng là biết' },
    { t: 'table', head: ['Kết thúc bằng', 'Giống', 'Ví dụ'], rows: [
      ['phụ âm (б, в, г, д…)', 'Đực — <b>мужско́й род</b> (он)', 'дом, брат, стол, го́род, студе́нт'],
      ['-а / -я', 'Cái — <b>же́нский род</b> (она́)', 'ма́ма, сестра́, кни́га, семья́, шко́ла'],
      ['-о / -е', 'Trung — <b>сре́дний род</b> (оно́)', 'окно́, молоко́, мо́ре, пи́сьмо'],
      ['-ь (dấu mềm)', 'Đực <b>hoặc</b> cái — phải học thuộc từng từ', 'слова́рь (đực), дверь (cái)']
    ]},
    { t: 'tip', html: 'Mẹo kiểm tra nhanh: thử thay danh từ bằng <span class="ru">он / она́ / оно́</span>. Nói được câu nào nghe xuôi thì đó là giống của nó. Người Nga nghĩ đúng như vậy — với họ cái bàn thật sự là "anh ta".' },
    { t: 'h', text: 'Những từ bẫy phải nhớ' },
    { t: 'p', html: 'Nhóm từ chỉ <b>người đàn ông</b> nhưng lại kết thúc bằng -а/-я. Nghĩa thắng hình thức: chúng là <b>giống đực</b>.' },
    { t: 'words', items: [
      { ru: 'па́па', vn: 'bố', note: 'giống đực, dù kết thúc bằng -а' },
      { ru: 'де́душка', vn: 'ông' },
      { ru: 'дя́дя', vn: 'chú, bác' },
      { ru: 'мужчи́на', vn: 'người đàn ông' },
      { ru: 'ю́ноша', vn: 'chàng trai trẻ' }
    ]},
    { t: 'warn', html: 'Nói <span class="ru">мой па́па</span> (đúng) chứ không phải <span class="ru">моя́ па́па</span>. Đây là lỗi gần như ai học tiếng Nga cũng mắc một lần.' },
    { t: 'h', text: 'Từ vựng theo giống' },
    { t: 'words', items: [
      { ru: 'стол', vn: 'cái bàn (đực)' },
      { ru: 'стул', vn: 'cái ghế (đực)' },
      { ru: 'слова́рь', vn: 'từ điển (đực, dù có -ь)' },
      { ru: 'кни́га', vn: 'quyển sách (cái)' },
      { ru: 'ру́чка', vn: 'cái bút (cái)' },
      { ru: 'тетра́дь', vn: 'quyển vở (cái, có -ь)' },
      { ru: 'окно́', vn: 'cửa sổ (trung)' },
      { ru: 'мо́ре', vn: 'biển (trung)' },
      { ru: 'письмо́', vn: 'lá thư (trung)' },
      { ru: 'преподава́тель', vn: 'giảng viên (đực)' }
    ]},
    { t: 'note', html: 'Ba từ trong lớp học rất hay đi cùng nhau và rơi vào ba giống khác nhau — nhớ bộ ba này là nhớ luôn quy tắc: <span class="ru">слова́рь</span> (đực) · <span class="ru">кни́га</span> (cái) · <span class="ru">окно́</span> (trung).' }
  ],
  vocab: [
    { ru: 'стол', vn: 'cái bàn' }, { ru: 'стул', vn: 'cái ghế' }, { ru: 'слова́рь', vn: 'từ điển' },
    { ru: 'кни́га', vn: 'quyển sách' }, { ru: 'ру́чка', vn: 'cái bút' }, { ru: 'тетра́дь', vn: 'quyển vở' },
    { ru: 'окно́', vn: 'cửa sổ' }, { ru: 'мо́ре', vn: 'biển' }, { ru: 'письмо́', vn: 'lá thư' },
    { ru: 'па́па', vn: 'bố' }, { ru: 'де́душка', vn: 'ông' }, { ru: 'мужчи́на', vn: 'người đàn ông' },
    { ru: 'преподава́тель', vn: 'giảng viên' }
  ],
  ex: [
    { t: 'choice', q: '<span class="ru ru-big">кни́га</span> thuộc giống nào?', options: ['Đực', 'Cái', 'Trung', 'Không có giống'], a: 1, why: 'Kết thúc bằng -а nên là giống cái: она книга.' },
    { t: 'choice', q: '<span class="ru ru-big">окно́</span> thuộc giống nào?', options: ['Đực', 'Cái', 'Trung', 'Cả đực và cái'], a: 2, why: 'Kết thúc bằng -о nên là giống trung: оно окно.' },
    { t: 'choice', q: 'Từ nào là <b>giống đực</b> dù kết thúc bằng -а?', options: ['ма́ма', 'па́па', 'шко́ла', 'кни́га'], a: 1, why: 'папа chỉ người đàn ông nên là giống đực. Nghĩa thắng hình thức.' },
    { t: 'choice', q: 'Cách nói đúng là:', options: ['моя́ па́па', 'мой па́па', 'моё па́па', 'мои́ па́па'], a: 1, why: 'папа là giống đực → dùng мой.' },
    { t: 'choice', q: 'Danh từ kết thúc bằng <b>-ь</b> thì:', options: ['Luôn giống cái', 'Luôn giống đực', 'Có thể đực hoặc cái, phải học thuộc', 'Luôn giống trung'], a: 2, why: 'словарь là đực, дверь là cái — cùng kết thúc -ь. Học từ nào nhớ giống từ đó.' },
    { t: 'match', q: 'Nối từ với giống của nó:', pairs: [['стол', 'đực'], ['сестра́', 'cái'], ['мо́ре', 'trung'], ['де́душка', 'đực (bẫy)']] },
    { t: 'type', q: 'Điền đại từ thay cho <span class="ru">письмо́</span> (он / она / оно):', a: 'оно', hint: 'Kết thúc bằng -о.' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'словарь', a: 'словарь' }
  ]
};

/* ---------------------------------------------------------- BÀI 2 */
LESSON_DATA['a1-02'] = {
  level: 'a1',
  intro: 'Bảy đại từ nhân xưng và cách nói "của ai". Phần này ngắn nhưng dùng đến trong mọi câu em nói từ nay về sau.',
  blocks: [
    { t: 'h', text: 'Đại từ nhân xưng' },
    { t: 'table', head: ['Tiếng Nga', 'Tiếng Việt', 'Ghi chú'], rows: [
      ['я', 'tôi', 'Luôn viết thường, trừ khi đầu câu — khác tiếng Anh'],
      ['ты', 'bạn, cậu, mày', 'Thân mật: bạn bè, người nhà, trẻ con'],
      ['он', 'anh ấy / nó', 'Dùng cho cả người nam lẫn đồ vật giống đực'],
      ['она́', 'cô ấy / nó', 'Người nữ và đồ vật giống cái'],
      ['оно́', 'nó', 'Đồ vật giống trung'],
      ['мы', 'chúng tôi, chúng ta', ''],
      ['вы', 'các bạn / ngài', 'Số nhiều, <b>hoặc</b> một người cần lịch sự'],
      ['они́', 'họ, chúng nó', 'Dùng chung cho mọi giống']
    ]},
    { t: 'warn', html: '<b>Ты hay Вы?</b> Đây là chuyện lễ nghĩa quan trọng với người Nga. Dùng <span class="ru">ты</span> với người lạ lớn tuổi là bất lịch sự; dùng <span class="ru">вы</span> với bạn thân là xa cách. Nguyên tắc an toàn: <b>người lạ, người lớn tuổi, thầy cô, cấp trên → вы</b>. Chỉ chuyển sang ты khi họ mời: <span class="ru">Дава́й на «ты»!</span>' },
    { t: 'h', text: 'Của tôi, của bạn — phải đổi theo giống' },
    { t: 'table', head: ['', 'Đực', 'Cái', 'Trung', 'Số nhiều'], rows: [
      ['của tôi', 'мой', 'моя́', 'моё', 'мои́'],
      ['của bạn (ты)', 'твой', 'твоя́', 'твоё', 'твои́'],
      ['của chúng tôi', 'наш', 'на́ша', 'на́ше', 'на́ши'],
      ['của các bạn / của ngài', 'ваш', 'ва́ша', 'ва́ше', 'ва́ши']
    ]},
    { t: 'h', text: 'Ba từ không bao giờ đổi' },
    { t: 'p', html: 'Sở hữu của ngôi thứ ba <b>giữ nguyên hình dạng</b> trong mọi trường hợp — đây là món quà cho người học:' },
    { t: 'words', items: [
      { ru: 'его́', vn: 'của anh ấy (đọc là "ye-vó", chữ г đọc thành v)' },
      { ru: 'её', vn: 'của cô ấy' },
      { ru: 'их', vn: 'của họ' }
    ]},
    { t: 'words', items: [
      { ru: 'его́ дом', vn: 'nhà của anh ấy' },
      { ru: 'его́ кни́га', vn: 'sách của anh ấy' },
      { ru: 'её брат', vn: 'anh trai của cô ấy' },
      { ru: 'их шко́ла', vn: 'trường của họ' }
    ]},
    { t: 'note', html: 'Chú ý cách hiểu: <span class="ru">его́ кни́га</span> = "sách của <b>anh ấy</b>" — chữ его không đổi theo книга, vì nó chỉ người sở hữu chứ không chỉ vật.' },
    { t: 'h', text: 'Câu mẫu' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Э́то твоя́ кни́га?', vn: 'Đây là sách của cậu à?' },
      { who: 'Б', ru: 'Нет, э́то не моя́ кни́га. Э́то её кни́га.', vn: 'Không, không phải sách của tớ. Sách của cô ấy đấy.' },
      { who: 'А', ru: 'А где твой слова́рь?', vn: 'Thế từ điển của cậu đâu?' },
      { who: 'Б', ru: 'Мой слова́рь до́ма.', vn: 'Từ điển của tớ ở nhà.' }
    ]}
  ],
  vocab: [
    { ru: 'мой', vn: 'của tôi (đực)' }, { ru: 'моя́', vn: 'của tôi (cái)' }, { ru: 'моё', vn: 'của tôi (trung)' },
    { ru: 'твой', vn: 'của bạn' }, { ru: 'наш', vn: 'của chúng tôi' }, { ru: 'ваш', vn: 'của các bạn' },
    { ru: 'его́', vn: 'của anh ấy' }, { ru: 'её', vn: 'của cô ấy' }, { ru: 'их', vn: 'của họ' },
    { ru: 'где', vn: 'ở đâu' }, { ru: 'до́ма', vn: 'ở nhà' }, { ru: 'не', vn: 'không (phủ định)' }
  ],
  ex: [
    { t: 'choice', q: 'Gặp giáo sư lần đầu, em xưng hô bằng:', options: ['ты', 'вы', 'он', 'они'], a: 1, why: 'вы dùng cho người lạ, người lớn tuổi, cấp trên — và cả khi nói với nhiều người.' },
    { t: 'type', q: 'Điền: ___ сестра́ (chị gái <b>của tôi</b>)', a: 'моя', alt: ['моя́'], hint: 'сестра là giống cái.' },
    { t: 'type', q: 'Điền: ___ окно́ (cửa sổ <b>của tôi</b>)', a: 'моё', alt: ['мое'], hint: 'окно là giống trung.' },
    { t: 'choice', q: '"Sách của cô ấy" nói đúng là:', options: ['её кни́га', 'её кни́гу', 'ей кни́га', 'она кни́га'], a: 0, why: 'её không bao giờ đổi hình dạng, dù danh từ đứng sau thuộc giống gì.' },
    { t: 'choice', q: 'Trong từ <span class="ru ru-big">его́</span>, chữ <b>г</b> đọc là:', options: ['g', 'v', 'kh', 'không đọc'], a: 1, why: 'Đọc là "ye-vó" — cùng quy tắc với сегодня mà em đã học ở A0.' },
    { t: 'match', q: 'Nối:', pairs: [['мой брат', 'anh trai tôi'], ['на́ша шко́ла', 'trường của chúng tôi'], ['их дом', 'nhà của họ'], ['твоё письмо́', 'lá thư của bạn']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'моя сестра', a: 'моя сестра' }
  ]
};

/* ---------------------------------------------------------- BÀI 3 */
LESSON_DATA['a1-03'] = {
  level: 'a1',
  intro: 'Bài này em học cách hỏi và trả lời những câu cơ bản nhất: "Đây là cái gì?", "Ai đây?", "Có phải không?". Và một điều thú vị: tiếng Nga hỏi có/không <b>không cần đổi trật tự từ</b> — chỉ cần đổi giọng.',
  blocks: [
    { t: 'h', text: 'Nhắc lại: không có động từ "là"' },
    { t: 'p', html: 'Ở thì hiện tại, tiếng Nga bỏ hẳn động từ "là". Câu chỉ gồm chủ ngữ và phần còn lại:' },
    { t: 'words', items: [
      { ru: 'Э́то стол.', vn: 'Đây là cái bàn.' },
      { ru: 'Он студе́нт.', vn: 'Anh ấy là sinh viên.' },
      { ru: 'Она́ до́ма.', vn: 'Cô ấy ở nhà.' },
      { ru: 'Мы из Вьетна́ма.', vn: 'Chúng tôi từ Việt Nam.' }
    ]},
    { t: 'h', text: 'Э́то — từ vạn năng' },
    { t: 'p', html: '<span class="ru">Э́то</span> nghĩa là "đây là / đó là", và <b>không đổi theo giống</b>. Dùng được cho mọi thứ:' },
    { t: 'words', items: [
      { ru: 'Э́то мой брат.', vn: 'Đây là anh trai tôi.' },
      { ru: 'Э́то моя́ кни́га.', vn: 'Đây là sách của tôi.' },
      { ru: 'Э́то на́ше окно́.', vn: 'Đây là cửa sổ của chúng tôi.' }
    ]},
    { t: 'warn', html: 'Đừng nhầm <span class="ru">э́то</span> (đây là) với <span class="ru">э́тот / э́та / э́то</span> (cái này — có đổi theo giống). Ở A1 em chỉ cần dùng thành thạo <span class="ru">э́то</span> trước.' },
    { t: 'h', text: 'Hai câu hỏi cơ bản: Кто? và Что?' },
    { t: 'p', html: 'Tiếng Nga tách rõ <b>người</b> và <b>vật</b>: hỏi về người dùng <span class="ru">Кто?</span>, hỏi về vật dùng <span class="ru">Что?</span> (đọc là "shto", chữ ч ở đây đọc thành "sh").' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Кто э́то?', vn: 'Ai đây?' },
      { who: 'Б', ru: 'Э́то мой преподава́тель.', vn: 'Đây là thầy giáo của tôi.' },
      { who: 'А', ru: 'Что э́то?', vn: 'Cái gì đây?' },
      { who: 'Б', ru: 'Э́то слова́рь.', vn: 'Đây là quyển từ điển.' }
    ]},
    { t: 'h', text: 'Câu hỏi có / không — chỉ đổi giọng' },
    { t: 'p', html: 'Tiếng Việt thêm "à, phải không". Tiếng Anh đảo trật tự từ. Tiếng Nga <b>không đổi gì cả</b>, chỉ nâng giọng lên ở từ trọng tâm rồi hạ xuống. Kiểu ngữ điệu này người Nga gọi là <b>ИК-3</b>.' },
    { t: 'words', items: [
      { ru: 'Э́то твоя́ кни́га.', vn: 'Đây là sách của bạn. (kể)' },
      { ru: 'Э́то твоя́ кни́га?', vn: 'Đây là sách của bạn à? (hỏi — nâng giọng ở кни́га)' },
      { ru: 'Да, моя́.', vn: 'Vâng, của tôi.' },
      { ru: 'Нет, не моя́.', vn: 'Không, không phải của tôi.' }
    ]},
    { t: 'tip', html: 'Bấm loa nghe hai câu trên — cùng một dãy chữ, khác nhau hoàn toàn ở giọng. Em tập nói cả hai kiểu, thu âm lại nghe thử; đây là kỹ năng nghe hiểu quan trọng vì người Nga nói nhanh thì chỉ còn ngữ điệu để phân biệt.' },
    { t: 'h', text: 'Phủ định: đặt НЕ ngay trước từ bị phủ định' },
    { t: 'words', items: [
      { ru: 'Я не студе́нт.', vn: 'Tôi không phải sinh viên.' },
      { ru: 'Э́то не мой дом.', vn: 'Đây không phải nhà tôi.' },
      { ru: 'Он не до́ма.', vn: 'Anh ấy không có nhà.' }
    ]},
    { t: 'note', html: '<span class="ru">не</span> luôn đứng <b>sát ngay trước</b> thành phần bị phủ định. Đổi chỗ не là đổi nghĩa: <span class="ru">Не я чита́ю</span> (không phải tôi đọc — mà người khác) khác hẳn <span class="ru">Я не чита́ю</span> (tôi không đọc).' }
  ],
  vocab: [
    { ru: 'э́то', vn: 'đây là, đó là' }, { ru: 'кто', vn: 'ai' }, { ru: 'что', vn: 'cái gì (đọc "shto")' },
    { ru: 'да', vn: 'vâng' }, { ru: 'нет', vn: 'không' }, { ru: 'то́же', vn: 'cũng' },
    { ru: 'здесь', vn: 'ở đây' }, { ru: 'там', vn: 'ở kia' }, { ru: 'сейча́с', vn: 'bây giờ' }
  ],
  ex: [
    { t: 'choice', q: 'Chỉ vào một người và hỏi "Ai đây?":', options: ['Что э́то?', 'Кто э́то?', 'Где э́то?', 'Как э́то?'], a: 1, why: 'Кто hỏi về người, Что hỏi về vật. Tiếng Nga phân biệt rất rạch ròi.' },
    { t: 'choice', q: 'Từ <span class="ru ru-big">Что</span> đọc là:', options: ['chto', 'shto', 'kto', 'tso'], a: 1, why: 'Ngoại lệ chính tả: чт trong что đọc thành "sht".' },
    { t: 'choice', q: 'Câu hỏi "Đây là sách của bạn à?" trong tiếng Nga khác câu kể ở chỗ nào?', options: ['Đảo trật tự từ', 'Thêm từ để hỏi', 'Chỉ khác ngữ điệu', 'Thêm đuôi vào động từ'], a: 2, why: 'Tiếng Nga giữ nguyên trật tự từ, chỉ nâng giọng ở từ trọng tâm (ngữ điệu ИК-3).' },
    { t: 'type', q: 'Dịch sang tiếng Nga: "Tôi không phải sinh viên (nam)."', a: 'я не студент', alt: ['я не студент.'], hint: 'Ba từ, có не ở giữa.' },
    { t: 'choice', q: 'Câu nào nghĩa là "không phải tôi đọc (mà là người khác)"?', options: ['Я не чита́ю.', 'Не я чита́ю.', 'Я чита́ю не.', 'Не чита́ю я.'], a: 1, why: 'не đứng sát trước thành phần bị phủ định. Đặt trước я là phủ định chính người đó.' },
    { t: 'match', q: 'Nối:', pairs: [['Кто э́то?', 'Ai đây?'], ['Что э́то?', 'Cái gì đây?'], ['Э́то не мой дом.', 'Đây không phải nhà tôi.'], ['Он то́же студе́нт.', 'Anh ấy cũng là sinh viên.']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'кто это', a: 'кто это' }
  ]
};

/* ---------------------------------------------------------- BÀI 4 */
LESSON_DATA['a1-04'] = {
  level: 'a1',
  intro: 'Tiếng Việt nói "một quyển sách" và "nhiều quyển sách" — chữ "sách" không đổi. Tiếng Nga thì đổi đuôi. May là quy tắc gọn: chủ yếu chỉ có <b>-ы / -и</b> cho đực và cái, <b>-а / -я</b> cho trung.',
  blocks: [
    { t: 'h', text: 'Quy tắc chính' },
    { t: 'table', head: ['Giống', 'Số ít → số nhiều', 'Ví dụ'], rows: [
      ['Đực (phụ âm)', 'thêm <b>-ы</b>', 'стол → столы́ · студе́нт → студе́нты'],
      ['Đực (-й, -ь)', 'đổi thành <b>-и</b>', 'музе́й → музе́и · слова́рь → словари́'],
      ['Cái (-а)', 'đổi -а thành <b>-ы</b>', 'кни́га… xem quy tắc chính tả bên dưới · шко́ла → шко́лы'],
      ['Cái (-я, -ь)', 'đổi thành <b>-и</b>', 'семья́ → се́мьи · тетра́дь → тетра́ди'],
      ['Trung (-о)', 'đổi thành <b>-а</b>', 'окно́ → о́кна · письмо́ → пи́сьма'],
      ['Trung (-е)', 'đổi thành <b>-я</b>', 'мо́ре → моря́']
    ]},
    { t: 'h', text: 'Quy tắc chính tả 7 chữ — nhớ một lần dùng cả đời' },
    { t: 'p', html: 'Sau bảy chữ <b>г, к, х, ж, ч, ш, щ</b> thì <b>không bao giờ viết ы</b>, phải viết <b>и</b>. Quy tắc này theo em suốt từ A1 đến C2, gặp ở hàng trăm chỗ khác nhau.' },
    { t: 'words', items: [
      { ru: 'кни́га → кни́ги', vn: 'sách (không phải книгы — vì có г)' },
      { ru: 'ру́чка → ру́чки', vn: 'bút (có ч)' },
      { ru: 'уро́к → уро́ки', vn: 'bài học (có к)' },
      { ru: 'подру́га → подру́ги', vn: 'bạn gái (có г)' },
      { ru: 'нога́ → но́ги', vn: 'chân (có г nên là -и, trọng âm nhảy về đầu)' }
    ]},
    { t: 'h', text: 'Trọng âm hay nhảy chỗ' },
    { t: 'p', html: 'Đây là chỗ người học hay quên: nhiều từ khi sang số nhiều thì <b>trọng âm chuyển sang âm tiết khác</b>. Học từ mới thì học luôn cả dạng số nhiều.' },
    { t: 'table', head: ['Số ít', 'Số nhiều', 'Nghĩa'], rows: [
      ['окно́', 'о́кна', 'cửa sổ'],
      ['письмо́', 'пи́сьма', 'lá thư'],
      ['стол', 'столы́', 'cái bàn'],
      ['сестра́', 'сёстры', 'chị gái'],
      ['страна́', 'стра́ны', 'đất nước']
    ]},
    { t: 'h', text: 'Những từ bất quy tắc thường gặp' },
    { t: 'words', items: [
      { ru: 'друг → друзья́', vn: 'bạn → những người bạn' },
      { ru: 'брат → бра́тья', vn: 'anh trai → các anh em' },
      { ru: 'сын → сыновья́', vn: 'con trai → các con trai' },
      { ru: 'ребёнок → де́ти', vn: 'đứa trẻ → bọn trẻ (đổi hẳn từ)' },
      { ru: 'челове́к → лю́ди', vn: 'con người → mọi người (đổi hẳn từ)' },
      { ru: 'го́род → города́', vn: 'thành phố → các thành phố' },
      { ru: 'дом → дома́', vn: 'ngôi nhà → các ngôi nhà' },
      { ru: 'учи́тель → учителя́', vn: 'thầy giáo → các thầy giáo' }
    ]},
    { t: 'note', html: 'Nhóm <span class="ru">города́, дома́, учителя́, паспорта́, поезда́</span> lấy đuôi <b>-а có trọng âm</b> dù là giống đực. Không nhiều từ như vậy, cứ gặp thì ghi lại thành một danh sách riêng.' },
    { t: 'warn', html: 'Có những từ <b>chỉ có số ít</b> (молоко́ — sữa, вода́ — nước, вре́мя — thời gian ở nghĩa trừu tượng) và những từ <b>chỉ có số nhiều</b> (де́ньги — tiền, часы́ — đồng hồ, очки́ — kính mắt). Nói <span class="ru">оди́н де́ньги</span> là sai.' }
  ],
  vocab: [
    { ru: 'уро́к', vn: 'bài học, tiết học' }, { ru: 'подру́га', vn: 'bạn gái (bạn nữ)' },
    { ru: 'друзья́', vn: 'những người bạn' }, { ru: 'де́ти', vn: 'bọn trẻ' },
    { ru: 'лю́ди', vn: 'mọi người' }, { ru: 'города́', vn: 'các thành phố' },
    { ru: 'страна́', vn: 'đất nước' }, { ru: 'де́ньги', vn: 'tiền (luôn số nhiều)' },
    { ru: 'часы́', vn: 'đồng hồ (luôn số nhiều)' }, { ru: 'очки́', vn: 'kính mắt (luôn số nhiều)' }
  ],
  ex: [
    { t: 'type', q: 'Số nhiều của <span class="ru ru-big">стол</span> là:', a: 'столы', alt: ['столы́'], hint: 'Thêm -ы, trọng âm nhảy về cuối.' },
    { t: 'choice', q: 'Số nhiều của <span class="ru ru-big">кни́га</span> là:', options: ['кни́гы', 'кни́ги', 'кни́га', 'кни́гу'], a: 1, why: 'Sau chữ г không bao giờ viết ы. Quy tắc 7 chữ: г к х ж ч ш щ → и.' },
    { t: 'choice', q: 'Bảy chữ nào không bao giờ đi với <b>ы</b>?', options: ['б в г д ж з к', 'г к х ж ч ш щ', 'п р с т ф х ц', 'л м н р с т в'], a: 1, why: 'г, к, х, ж, ч, ш, щ — nhớ nhóm này là tránh được hàng loạt lỗi chính tả về sau.' },
    { t: 'choice', q: 'Số nhiều của <span class="ru ru-big">челове́к</span> là:', options: ['челове́ки', 'челове́ка', 'лю́ди', 'челове́кы'], a: 2, why: 'Bất quy tắc: человек → люди, đổi hẳn sang một từ khác.' },
    { t: 'type', q: 'Số nhiều của <span class="ru ru-big">окно́</span>:', a: 'окна', alt: ['о́кна'], hint: 'Giống trung -о → -а, và trọng âm nhảy về đầu.' },
    { t: 'choice', q: 'Từ nào <b>chỉ tồn tại ở số nhiều</b>?', options: ['кни́га', 'де́ньги', 'молоко́', 'уро́к'], a: 1, why: 'деньги (tiền), часы (đồng hồ), очки (kính) luôn ở số nhiều, không có dạng số ít.' },
    { t: 'match', q: 'Nối số ít với số nhiều:', pairs: [['друг', 'друзья́'], ['ребёнок', 'де́ти'], ['го́род', 'города́'], ['мо́ре', 'моря́']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'книги', a: 'книги' }
  ]
};

/* ---------------------------------------------------------- BÀI 5 */
LESSON_DATA['a1-05'] = {
  level: 'a1',
  intro: 'Đến lúc làm cho câu của em <b>chuyển động</b>. Động từ tiếng Nga chia theo người nói — sáu dạng cho sáu ngôi. Nghe nhiều nhưng thực ra chỉ có <b>hai bộ đuôi</b> trong cả tiếng Nga, và bài này học bộ thứ nhất.',
  blocks: [
    { t: 'h', text: 'Nhóm 1 — động từ đuôi -ать / -ять' },
    { t: 'p', html: 'Cách làm: bỏ <b>-ть</b> ở dạng nguyên thể, rồi gắn đuôi vào. Lấy <span class="ru">рабо́тать</span> (làm việc) làm mẫu — bỏ -ть còn <b>рабо́та-</b>:' },
    { t: 'table', head: ['Ngôi', 'Đuôi', 'рабо́тать (làm việc)'], rows: [
      ['я', '-ю', 'я рабо́таю'],
      ['ты', '-ешь', 'ты рабо́таешь'],
      ['он / она́ / оно́', '-ет', 'он рабо́тает'],
      ['мы', '-ем', 'мы рабо́таем'],
      ['вы', '-ете', 'вы рабо́таете'],
      ['они́', '-ют', 'они́ рабо́тают']
    ]},
    { t: 'tip', html: 'Nhìn kỹ: cả sáu dạng đều có chữ <b>е</b> ở đuôi (trừ я và они). Vì thế người Nga gọi đây là <b>chia theo kiểu Е</b>. Bộ thứ hai ở bài sau sẽ toàn chữ <b>и</b>.' },
    { t: 'h', text: 'Chín động từ nhóm 1 dùng nhiều nhất' },
    { t: 'words', items: [
      { ru: 'рабо́тать', vn: 'làm việc' },
      { ru: 'знать', vn: 'biết' },
      { ru: 'чита́ть', vn: 'đọc' },
      { ru: 'де́лать', vn: 'làm' },
      { ru: 'слу́шать', vn: 'nghe' },
      { ru: 'понима́ть', vn: 'hiểu' },
      { ru: 'изуча́ть', vn: 'học, nghiên cứu (một môn)' },
      { ru: 'отдыха́ть', vn: 'nghỉ ngơi' },
      { ru: 'гуля́ть', vn: 'đi dạo' }
    ]},
    { t: 'h', text: 'Ghép thành câu thật' },
    { t: 'words', items: [
      { ru: 'Я изуча́ю ру́сский язы́к.', vn: 'Tôi học tiếng Nga.' },
      { ru: 'Ты понима́ешь?', vn: 'Bạn hiểu không?' },
      { ru: 'Он рабо́тает в Москве́.', vn: 'Anh ấy làm việc ở Moskva.' },
      { ru: 'Мы чита́ем кни́гу.', vn: 'Chúng tôi đang đọc sách.' },
      { ru: 'Вы слу́шаете му́зыку?', vn: 'Các bạn đang nghe nhạc à?' },
      { ru: 'Они́ гуля́ют в па́рке.', vn: 'Họ đang đi dạo trong công viên.' }
    ]},
    { t: 'note', html: 'Tiếng Nga <b>không có thì tiếp diễn</b> riêng. <span class="ru">Я чита́ю</span> vừa là "tôi đọc", vừa là "tôi đang đọc" — ngữ cảnh quyết định. Đỡ được cho em một cả hệ thống ngữ pháp so với tiếng Anh.' },
    { t: 'warn', html: '<b>Không được bỏ đuôi động từ.</b> Người Việt hay nói <span class="ru">Я рабо́тать</span> vì tiếng Việt không chia động từ. Người Nga nghe câu đó giống như nghe "Tôi làm việc" phát âm thành "Tôi làm-việc-nguyên-thể" — hiểu được nhưng lộ ngay là người nước ngoài. Chia đuôi cho đúng ngay từ bài đầu, đừng để thành thói quen.' },
    { t: 'h', text: 'Một mẹo tiết kiệm: bỏ đại từ được không?' },
    { t: 'p', html: 'Được, nhưng đừng vội. Vì đuôi động từ đã cho biết ngôi nên người Nga đôi khi bỏ <span class="ru">я</span> hay <span class="ru">ты</span>: <span class="ru">Не понима́ю</span> = "Không hiểu". Ở A1 em cứ nói đủ chủ ngữ cho chắc, đến B1 hãy chơi kiểu rút gọn.' }
  ],
  vocab: [
    { ru: 'рабо́тать', vn: 'làm việc' }, { ru: 'знать', vn: 'biết' }, { ru: 'чита́ть', vn: 'đọc' },
    { ru: 'де́лать', vn: 'làm' }, { ru: 'слу́шать', vn: 'nghe' }, { ru: 'понима́ть', vn: 'hiểu' },
    { ru: 'изуча́ть', vn: 'học (một môn)' }, { ru: 'отдыха́ть', vn: 'nghỉ ngơi' }, { ru: 'гуля́ть', vn: 'đi dạo' },
    { ru: 'му́зыка', vn: 'âm nhạc' }, { ru: 'ру́сский язы́к', vn: 'tiếng Nga' }
  ],
  ex: [
    { t: 'type', q: 'Chia động từ: Я ___ (рабо́тать)', a: 'работаю', alt: ['рабо́таю'], hint: 'Ngôi я lấy đuôi -ю.' },
    { t: 'type', q: 'Chia động từ: Ты ___ (чита́ть)', a: 'читаешь', alt: ['чита́ешь'], hint: 'Ngôi ты lấy đuôi -ешь.' },
    { t: 'choice', q: 'Dạng đúng cho <span class="ru">они́</span> của động từ <span class="ru">знать</span>:', options: ['зна́ет', 'зна́ем', 'зна́ют', 'зна́ешь'], a: 2, why: 'Ngôi они lấy đuôi -ют: они знают.' },
    { t: 'choice', q: 'Câu nào <b>sai</b>?', options: ['Я понима́ю.', 'Мы чита́ем.', 'Он рабо́тать.', 'Вы гуля́ете.'], a: 2, why: 'Không được để động từ ở dạng nguyên thể sau chủ ngữ. Phải là “Он работает”.' },
    { t: 'choice', q: '<span class="ru ru-big">Я чита́ю</span> dịch được thành:', options: ['Chỉ “tôi đọc”', 'Chỉ “tôi đang đọc”', 'Cả hai, tuỳ ngữ cảnh', 'Tôi đã đọc'], a: 2, why: 'Tiếng Nga không có thì tiếp diễn riêng — một dạng dùng cho cả hai nghĩa.' },
    { t: 'match', q: 'Nối:', pairs: [['отдыха́ть', 'nghỉ ngơi'], ['изуча́ть', 'học một môn'], ['слу́шать', 'nghe'], ['гуля́ть', 'đi dạo']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'я изучаю русский язык', a: 'я изучаю русский язык' },
    { t: 'type', q: 'Dịch: "Chúng tôi hiểu."', a: 'мы понимаем', hint: 'Ngôi мы lấy đuôi -ем.' }
  ]
};

/* ---------------------------------------------------------- BÀI 6 */
LESSON_DATA['a1-06'] = {
  level: 'a1',
  intro: 'Bộ đuôi thứ hai — và cũng là bộ cuối cùng. Học xong bài này em chia được <b>phần lớn động từ tiếng Nga</b> ở thì hiện tại.',
  blocks: [
    { t: 'h', text: 'Nhóm 2 — động từ đuôi -ить (và một số -еть)' },
    { t: 'p', html: 'Cách làm: bỏ <b>-ить</b>, rồi gắn đuôi. Mẫu là <span class="ru">говори́ть</span> (nói) — bỏ -ить còn <b>говор-</b>:' },
    { t: 'table', head: ['Ngôi', 'Đuôi', 'говори́ть (nói)'], rows: [
      ['я', '-ю', 'я говорю́'],
      ['ты', '-ишь', 'ты говори́шь'],
      ['он / она́ / оно́', '-ит', 'он говори́т'],
      ['мы', '-им', 'мы говори́м'],
      ['вы', '-ите', 'вы говори́те'],
      ['они́', '-ят', 'они́ говоря́т']
    ]},
    { t: 'tip', html: 'So sánh hai bộ đuôi cho dễ nhớ: nhóm 1 toàn chữ <b>Е</b> (читаешь, читает, читаем), nhóm 2 toàn chữ <b>И</b> (говоришь, говорит, говорим). Chỉ cần nghe một chữ ở giữa là biết động từ thuộc nhóm nào.' },
    { t: 'h', text: 'Động từ nhóm 2 hay dùng' },
    { t: 'words', items: [
      { ru: 'говори́ть', vn: 'nói' },
      { ru: 'учи́ть', vn: 'học thuộc, dạy' },
      { ru: 'люби́ть', vn: 'yêu, thích' },
      { ru: 'смотре́ть', vn: 'xem, nhìn' },
      { ru: 'ви́деть', vn: 'nhìn thấy' },
      { ru: 'слы́шать', vn: 'nghe thấy' },
      { ru: 'по́мнить', vn: 'nhớ' },
      { ru: 'звони́ть', vn: 'gọi điện' },
      { ru: 'стро́ить', vn: 'xây dựng' }
    ]},
    { t: 'h', text: 'Một hiện tượng cần biết: chữ Л chen vào' },
    { t: 'p', html: 'Với những động từ có gốc kết thúc bằng <b>б, п, в, ф, м</b>, khi chia ở ngôi <b>я</b> sẽ mọc thêm chữ <b>л</b>. Chỉ ở ngôi я thôi, các ngôi khác vẫn bình thường.' },
    { t: 'table', head: ['Nguyên thể', 'Ngôi я', 'Ngôi ты', 'Nghĩa'], rows: [
      ['люби́ть', 'я люб<b>л</b>ю́', 'ты лю́бишь', 'yêu, thích'],
      ['спать', 'я сп<b>л</b>ю', 'ты спишь', 'ngủ'],
      ['купи́ть', 'я куп<b>л</b>ю́', 'ты ку́пишь', 'mua'],
      ['гото́вить', 'я гото́в<b>л</b>ю', 'ты гото́вишь', 'nấu ăn, chuẩn bị']
    ]},
    { t: 'warn', html: 'Nói <span class="ru">Я люблю́ тебя́</span> (Anh yêu em) chứ không phải <span class="ru">я любю́</span>. Câu này chắc em sẽ dùng đến, nên nhớ cho kỹ.' },
    { t: 'h', text: 'Hai động từ bất quy tắc phải thuộc lòng' },
    { t: 'p', html: 'Hai động từ dùng nhiều nhất tiếng Nga lại không theo nhóm nào cả:' },
    { t: 'table', head: ['Ngôi', 'хоте́ть (muốn)', 'мочь (có thể)'], rows: [
      ['я', 'хочу́', 'могу́'],
      ['ты', 'хо́чешь', 'мо́жешь'],
      ['он / она́', 'хо́чет', 'мо́жет'],
      ['мы', 'хоти́м', 'мо́жем'],
      ['вы', 'хоти́те', 'мо́жете'],
      ['они́', 'хотя́т', 'мо́гут']
    ]},
    { t: 'note', html: 'Để ý <span class="ru">хоте́ть</span>: ba ngôi đầu chia kiểu nhóm 1 (хочешь, хочет), ba ngôi sau chia kiểu nhóm 2 (хотим, хотите, хотят). Trong tiếng Nga chỉ có vài động từ "hai mặt" như thế.' },
    { t: 'h', text: 'Câu mẫu để dùng ngay' },
    { t: 'words', items: [
      { ru: 'Я говорю́ по-ру́сски немно́го.', vn: 'Tôi nói được tiếng Nga một chút.' },
      { ru: 'Ты говори́шь по-англи́йски?', vn: 'Bạn nói được tiếng Anh không?' },
      { ru: 'Я хочу́ учи́ть ру́сский язы́к.', vn: 'Tôi muốn học tiếng Nga.' },
      { ru: 'Мы смо́трим фильм.', vn: 'Chúng tôi đang xem phim.' },
      { ru: 'Я не могу́ говори́ть бы́стро.', vn: 'Tôi không nói nhanh được.' },
      { ru: 'Она́ лю́бит му́зыку.', vn: 'Cô ấy thích âm nhạc.' }
    ]},
    { t: 'tip', html: 'Sau <span class="ru">хочу́</span> và <span class="ru">могу́</span>, động từ thứ hai giữ nguyên dạng <b>nguyên thể</b>: <span class="ru">Я хочу́ чита́ть</span>. Đây chính là chỗ người Việt hay sai vì trong tiếng Việt "tôi muốn rằng tôi đọc" nghe cũng xuôi — tiếng Nga thì không.' }
  ],
  vocab: [
    { ru: 'говори́ть', vn: 'nói' }, { ru: 'учи́ть', vn: 'học thuộc, dạy' }, { ru: 'люби́ть', vn: 'yêu, thích' },
    { ru: 'смотре́ть', vn: 'xem' }, { ru: 'ви́деть', vn: 'nhìn thấy' }, { ru: 'слы́шать', vn: 'nghe thấy' },
    { ru: 'звони́ть', vn: 'gọi điện' }, { ru: 'хоте́ть', vn: 'muốn' }, { ru: 'мочь', vn: 'có thể' },
    { ru: 'спать', vn: 'ngủ' }, { ru: 'гото́вить', vn: 'nấu ăn' }, { ru: 'по-ру́сски', vn: 'bằng tiếng Nga' },
    { ru: 'немно́го', vn: 'một chút' }, { ru: 'бы́стро', vn: 'nhanh' }
  ],
  ex: [
    { t: 'type', q: 'Chia: Я ___ по-ру́сски. (говори́ть)', a: 'говорю', alt: ['говорю́'], hint: 'Ngôi я của nhóm 2 lấy đuôi -ю.' },
    { t: 'choice', q: 'Dạng đúng cho <span class="ru">они́</span> của <span class="ru">говори́ть</span>:', options: ['говоря́т', 'говоря́ют', 'говори́ют', 'говоря́м'], a: 0, why: 'Nhóm 2 ngôi они lấy đuôi -ят: они говорят.' },
    { t: 'choice', q: '"Anh yêu em" nói đúng là:', options: ['Я любю́ тебя́.', 'Я люблю́ тебя́.', 'Я лю́бишь тебя́.', 'Я люби́ть тебя́.'], a: 1, why: 'Gốc kết thúc bằng б nên ngôi я mọc thêm л: люблю.' },
    { t: 'choice', q: 'Sau <span class="ru">Я хочу́</span>, động từ tiếp theo phải ở dạng nào?', options: ['Chia theo ngôi я', 'Nguyên thể', 'Số nhiều', 'Quá khứ'], a: 1, why: 'Я хочу читать — động từ thứ hai giữ nguyên thể, không chia.' },
    { t: 'choice', q: 'Cách phân biệt nhanh nhóm 1 và nhóm 2 khi nghe:', options: ['Nhóm 1 toàn chữ Е, nhóm 2 toàn chữ И', 'Nhóm 1 dài hơn', 'Nhóm 2 luôn có trọng âm cuối', 'Không phân biệt được'], a: 0, why: 'читаешь / читает (Е) ↔ говоришь / говорит (И). Nghe một chữ ở giữa là biết.' },
    { t: 'type', q: 'Chia: Мы ___ фильм. (смотре́ть)', a: 'смотрим', alt: ['смо́трим'], hint: 'Nhóm 2, ngôi мы lấy đuôi -им.' },
    { t: 'match', q: 'Nối:', pairs: [['звони́ть', 'gọi điện'], ['гото́вить', 'nấu ăn'], ['слы́шать', 'nghe thấy'], ['мочь', 'có thể']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'я хочу учить русский язык', a: 'я хочу учить русский язык' }
  ]
};

/* ---------------------------------------------------------- BÀI 7 */
LESSON_DATA['a1-07'] = {
  level: 'a1',
  intro: 'Đây là bài mở cánh cửa vào phần khó nhất — và hay nhất — của tiếng Nga: <b>hệ thống 6 cách</b>. Danh từ tiếng Nga đổi đuôi tuỳ theo vai trò của nó trong câu. Hôm nay em học cách đầu tiên: <b>вини́тельный падеж</b> (cách 4), dùng cho <b>đối tượng bị tác động</b> — tôi đọc CÁI GÌ, tôi yêu AI.',
  blocks: [
    { t: 'h', text: 'Vì sao tiếng Nga cần "cách"?' },
    { t: 'p', html: 'Tiếng Việt phân biệt ai làm gì bằng <b>trật tự từ</b>: "Mẹ yêu con" khác "Con yêu mẹ". Tiếng Nga phân biệt bằng <b>đuôi từ</b>, nên trật tự từ khá tự do:' },
    { t: 'words', items: [
      { ru: 'Ма́ма лю́бит дочь.', vn: 'Mẹ yêu con gái.' },
      { ru: 'Дочь лю́бит ма́ма.', vn: 'Vẫn là "mẹ yêu con gái" — vì đuôi từ mới quyết định ai làm chủ ngữ, không phải vị trí.' }
    ]},
    { t: 'note', html: 'Đây là lý do người Nga nghe được câu tiếng Nga sai đuôi là thấy khó chịu ngay: với họ, đổi đuôi là đổi nghĩa, chứ không phải chuyện làm đẹp.' },
    { t: 'h', text: 'Quy tắc cách 4: chỉ giống cái mới đổi' },
    { t: 'table', head: ['Loại danh từ', 'Đổi thế nào', 'Ví dụ'], rows: [
      ['Đực — <b>vật</b>', 'Giữ nguyên', 'журна́л → Я чита́ю журна́л.'],
      ['Trung', 'Giữ nguyên', 'окно́ → Я ви́жу окно́.'],
      ['Cái -а', 'đổi thành <b>-у</b>', 'кни́га → Я чита́ю кни́г<b>у</b>.'],
      ['Cái -я', 'đổi thành <b>-ю</b>', 'семья́ → Я люблю́ семь<b>ю́</b>.'],
      ['Cái -ь', 'Giữ nguyên', 'тетра́дь → Я ви́жу тетра́дь.'],
      ['Đực — <b>người, con vật</b>', 'thêm <b>-а / -я</b>', 'брат → Я ви́жу бра́т<b>а</b>.']
    ]},
    { t: 'tip', html: 'Nhìn bảng cho gọn: <b>chỉ hai nhóm phải đổi</b> — giống cái đuôi -а/-я, và giống đực chỉ người hoặc con vật. Mọi thứ còn lại giữ nguyên. Không đáng sợ như em tưởng.' },
    { t: 'h', text: 'Người / con vật khác đồ vật' },
    { t: 'p', html: 'Tiếng Nga chia danh từ giống đực thành <b>одушевлённые</b> (có sự sống) và <b>неодушевлённые</b> (không sự sống). Chỉ nhóm có sự sống mới đổi đuôi ở cách 4:' },
    { t: 'words', items: [
      { ru: 'Я ви́жу дом.', vn: 'Tôi thấy ngôi nhà. (vật — giữ nguyên)' },
      { ru: 'Я ви́жу бра́та.', vn: 'Tôi thấy anh trai. (người — thêm -а)' },
      { ru: 'Я зна́ю студе́нта.', vn: 'Tôi biết cậu sinh viên đó.' },
      { ru: 'Я слу́шаю преподава́теля.', vn: 'Tôi nghe thầy giáo giảng. (-ь → -я)' },
      { ru: 'Я люблю́ соба́ку.', vn: 'Tôi yêu con chó. (giống cái: -а → -у)' }
    ]},
    { t: 'h', text: 'Những động từ đòi cách 4' },
    { t: 'p', html: 'Học động từ thì học luôn nó "đòi" cách nào. Nhóm dưới đây đều đi với cách 4:' },
    { t: 'words', items: [
      { ru: 'чита́ть', vn: 'đọc — читать книгу' },
      { ru: 'знать', vn: 'biết — знать ответ' },
      { ru: 'люби́ть', vn: 'yêu — любить музыку' },
      { ru: 'изуча́ть', vn: 'học môn — изучать русский язык' },
      { ru: 'смотре́ть', vn: 'xem — смотреть фильм' },
      { ru: 'слу́шать', vn: 'nghe — слушать песню' },
      { ru: 'де́лать', vn: 'làm — делать работу' },
      { ru: 'покупа́ть', vn: 'mua — покупать газету' },
      { ru: 'понима́ть', vn: 'hiểu — понимать вопрос' }
    ]},
    { t: 'warn', html: '<b>Lỗi số một của người Việt:</b> để danh từ nguyên dạng từ điển. Tiếng Việt không đổi đuôi nên tai ta không thấy thiếu gì. Nói <span class="ru">Я чита́ю кни́га</span> là sai — phải là <span class="ru">кни́гу</span>. Cách chữa: mỗi lần nói một câu có tân ngữ, dừng nửa giây tự hỏi "từ này giống cái không?" Vài tuần là thành phản xạ.' },
    { t: 'h', text: 'Câu mẫu để nhại theo' },
    { t: 'words', items: [
      { ru: 'Я изуча́ю ру́сский язы́к.', vn: 'Tôi học tiếng Nga.' },
      { ru: 'Она́ чита́ет интере́сную кни́гу.', vn: 'Cô ấy đang đọc một quyển sách hay.' },
      { ru: 'Мы смо́трим но́вости.', vn: 'Chúng tôi xem tin tức.' },
      { ru: 'Ты понима́ешь вопро́с?', vn: 'Bạn hiểu câu hỏi không?' },
      { ru: 'Он лю́бит свою́ рабо́ту.', vn: 'Anh ấy yêu công việc của mình.' }
    ]}
  ],
  vocab: [
    { ru: 'вопро́с', vn: 'câu hỏi' }, { ru: 'отве́т', vn: 'câu trả lời' }, { ru: 'фильм', vn: 'bộ phim' },
    { ru: 'пе́сня', vn: 'bài hát' }, { ru: 'но́вости', vn: 'tin tức' }, { ru: 'покупа́ть', vn: 'mua' },
    { ru: 'соба́ка', vn: 'con chó' }, { ru: 'ко́шка', vn: 'con mèo' }, { ru: 'интере́сный', vn: 'thú vị, hay' }
  ],
  ex: [
    { t: 'type', q: 'Điền cách 4: Я чита́ю ___ (кни́га)', a: 'книгу', alt: ['кни́гу'], hint: 'Giống cái -а đổi thành -у.' },
    { t: 'type', q: 'Điền cách 4: Я ви́жу ___ (брат)', a: 'брата', alt: ['бра́та'], hint: 'Giống đực chỉ người thì thêm -а.' },
    { t: 'choice', q: 'Câu nào <b>đúng</b>?', options: ['Я смотрю́ фильм.', 'Я смотрю́ фильма.', 'Я смотрю́ фильму.', 'Я смотре́ть фильм.'], a: 0, why: 'фильм là giống đực chỉ vật nên giữ nguyên ở cách 4.' },
    { t: 'choice', q: 'Vì sao <span class="ru">Я ви́жу дом</span> không đổi đuôi mà <span class="ru">Я ви́жу бра́та</span> lại đổi?', options: ['Vì дом ngắn hơn', 'Vì брат chỉ người còn дом là đồ vật', 'Vì дом là giống trung', 'Vì брат là số nhiều'], a: 1, why: 'Giống đực chia thành có sự sống và không có sự sống. Chỉ nhóm có sự sống mới đổi đuôi ở cách 4.' },
    { t: 'type', q: 'Điền cách 4: Я люблю́ ___ (му́зыка)', a: 'музыку', alt: ['му́зыку'], hint: '-а → -у' },
    { t: 'choice', q: 'Trong tiếng Nga, cái gì quyết định ai là chủ ngữ của câu?', options: ['Vị trí đứng đầu câu', 'Đuôi của từ', 'Trọng âm', 'Dấu câu'], a: 1, why: 'Đuôi từ quyết định vai trò, nên trật tự từ tiếng Nga khá tự do.' },
    { t: 'match', q: 'Nối:', pairs: [['вопро́с', 'câu hỏi'], ['отве́т', 'câu trả lời'], ['пе́сня', 'bài hát'], ['покупа́ть', 'mua']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'я читаю книгу', a: 'я читаю книгу' }
  ]
};

/* ---------------------------------------------------------- BÀI 8 */
LESSON_DATA['a1-08'] = {
  level: 'a1',
  intro: 'Cách thứ hai em học: <b>предло́жный паде́ж</b> (cách 6). Tên của nó nghĩa là "cách đi với giới từ" — vì nó <b>không bao giờ đứng một mình</b>, luôn có в, на hoặc о đứng trước. Dùng để nói <b>ở đâu</b> và <b>về ai, về cái gì</b>.',
  blocks: [
    { t: 'h', text: 'Quy tắc gọn nhất trong sáu cách: hầu hết thành -е' },
    { t: 'table', head: ['Số ít', 'Cách 6', 'Câu'], rows: [
      ['дом', 'в до́м<b>е</b>', 'Я до́ма… nhưng: Кни́га в до́ме.'],
      ['шко́ла', 'в шко́л<b>е</b>', 'Она́ рабо́тает в шко́ле.'],
      ['окно́', 'в окн<b>е́</b>', 'Я ви́жу свет в окне́.'],
      ['Москва́', 'в Москв<b>е́</b>', 'Он живёт в Москве́.'],
      ['стол', 'на стол<b>е́</b>', 'Кни́га на столе́.']
    ]},
    { t: 'h', text: 'Ba ngoại lệ phải nhớ' },
    { t: 'table', head: ['Kết thúc bằng', 'Thành', 'Ví dụ'], rows: [
      ['-ия', '-ии', 'Росси́я → в Росси́<b>и</b> · лаборато́рия → в лаборато́ри<b>и</b>'],
      ['-ие', '-ии', 'общежи́тие → в общежи́ти<b>и</b> · зда́ние → в зда́ни<b>и</b>'],
      ['-ий', '-ии', 'санато́рий → в санато́ри<b>и</b>'],
      ['-ь (giống cái)', '-и', 'тетра́дь → в тетра́д<b>и</b> · дверь → в двер<b>и</b>']
    ]},
    { t: 'warn', html: 'Nhóm <b>-ия / -ие / -ий → -ии</b> gặp rất nhiều trong từ học thuật: <span class="ru">лаборато́рия, ауди́тория, конфере́нция, о́бщежи́тие</span>. Học nhóm này một lần cho chắc là tránh được hàng chục lỗi về sau.' },
    { t: 'h', text: 'Giới từ О — nói VỀ ai, VỀ cái gì' },
    { t: 'words', items: [
      { ru: 'Я ду́маю о тебе́.', vn: 'Anh nghĩ về em.' },
      { ru: 'Мы говори́м о рабо́те.', vn: 'Chúng tôi nói chuyện về công việc.' },
      { ru: 'Он расска́зывает о Росси́и.', vn: 'Anh ấy kể về nước Nga.' },
      { ru: 'О ком вы говори́те?', vn: 'Các anh đang nói về ai vậy?' },
      { ru: 'О чём э́та кни́га?', vn: 'Quyển sách này nói về cái gì?' }
    ]},
    { t: 'note', html: 'Trước nguyên âm, <span class="ru">о</span> đổi thành <span class="ru">об</span> cho dễ đọc: <span class="ru">об отце́</span> (về bố), <span class="ru">об э́том</span> (về chuyện này). Cùng lý do với "a / an" trong tiếng Anh.' },
    { t: 'h', text: 'Câu hỏi Где? — Ở đâu?' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Где ты сейча́с?', vn: 'Bây giờ cậu ở đâu?' },
      { who: 'Б', ru: 'Я в университе́те. А ты?', vn: 'Tớ ở trường. Còn cậu?' },
      { who: 'А', ru: 'Я до́ма. Где твоя́ сестра́?', vn: 'Tớ ở nhà. Chị cậu đâu?' },
      { who: 'Б', ru: 'Она́ на рабо́те.', vn: 'Chị ấy đang ở chỗ làm.' },
      { who: 'А', ru: 'А где мой слова́рь?', vn: 'Thế từ điển của tớ đâu?' },
      { who: 'Б', ru: 'На столе́, в ко́мнате.', vn: 'Trên bàn, trong phòng ấy.' }
    ]},
    { t: 'tip', html: 'Hai từ chỉ chỗ <b>không theo quy tắc</b> mà em dùng hằng ngày: <span class="ru">до́ма</span> (ở nhà) và <span class="ru">здесь</span> (ở đây). Chúng là trạng từ, không phải danh từ, nên không có giới từ và không đổi đuôi.' }
  ],
  vocab: [
    { ru: 'университе́т', vn: 'trường đại học' }, { ru: 'ко́мната', vn: 'căn phòng' },
    { ru: 'лаборато́рия', vn: 'phòng thí nghiệm' }, { ru: 'общежи́тие', vn: 'ký túc xá' },
    { ru: 'ду́мать', vn: 'nghĩ' }, { ru: 'жить', vn: 'sống, ở' },
    { ru: 'расска́зывать', vn: 'kể' }, { ru: 'о чём', vn: 'về cái gì' }, { ru: 'о ком', vn: 'về ai' }
  ],
  ex: [
    { t: 'type', q: 'Điền cách 6: Он живёт в ___ (Москва́)', a: 'москве', alt: ['Москве', 'Москве́'], hint: '-а đổi thành -е.' },
    { t: 'type', q: 'Điền cách 6: Я рабо́таю в ___ (лаборато́рия)', a: 'лаборатории', alt: ['лаборато́рии'], hint: '-ия là ngoại lệ, đổi thành -ии chứ không phải -е.' },
    { t: 'choice', q: 'Câu nào <b>đúng</b>?', options: ['Я живу́ в Росси́е.', 'Я живу́ в Росси́и.', 'Я живу́ в Росси́я.', 'Я живу́ в Росси́ю.'], a: 1, why: 'Россия kết thúc -ия nên cách 6 là -ии: в России.' },
    { t: 'choice', q: 'Vì sao cách 6 được gọi là "предложный"?', options: ['Vì nó dài nhất', 'Vì nó luôn đi kèm giới từ', 'Vì nó chỉ dùng cho câu đề nghị', 'Vì nó đứng cuối câu'], a: 1, why: 'предлог = giới từ. Cách 6 không bao giờ đứng một mình, luôn có в / на / о phía trước.' },
    { t: 'choice', q: '"Anh nghĩ về em" nói là:', options: ['Я ду́маю о ты.', 'Я ду́маю о тебе́.', 'Я ду́маю о тебя́.', 'Я ду́маю тебе́.'], a: 1, why: 'Sau о phải dùng cách 6: ты → о тебе.' },
    { t: 'type', q: 'Điền: Кни́га на ___ (стол)', a: 'столе', alt: ['столе́'], hint: 'Thêm -е, trọng âm rơi vào đuôi.' },
    { t: 'match', q: 'Nối:', pairs: [['общежи́тие', 'ký túc xá'], ['ко́мната', 'căn phòng'], ['жить', 'sống, ở'], ['ду́мать', 'nghĩ']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'я в университете', a: 'я в университете' }
  ]
};

/* ---------------------------------------------------------- BÀI 9 */
LESSON_DATA['a1-09'] = {
  level: 'a1',
  intro: 'Bài này chỉ về <b>hai chữ cái</b>: в và на. Nghe thì nhỏ, nhưng đây là lỗi người Việt học tiếng Nga mắc nhiều nhất và dai nhất — có người học năm năm vẫn còn sai. Nắm chắc hôm nay là đỡ được cả chặng đường dài.',
  blocks: [
    { t: 'h', text: 'Quy tắc gốc: kín hay hở' },
    { t: 'table', head: ['Giới từ', 'Dùng khi', 'Ví dụ'], rows: [
      ['<b>в</b>', 'Bên <b>trong</b> một không gian có ranh giới', 'в до́ме, в ко́мнате, в шко́ле, в маши́не, в го́роде'],
      ['<b>на</b>', 'Trên <b>bề mặt</b>, hoặc không gian <b>mở</b>', 'на столе́, на у́лице, на пло́щади, на мо́ре']
    ]},
    { t: 'p', html: 'Đến đây thì logic còn dễ. Cái khó là <b>nhóm ngoại lệ</b>: một số nơi chốn và hoạt động dùng <span class="ru">на</span> dù chúng hoàn toàn là không gian kín. Không có lý do logic — chỉ có thói quen ngôn ngữ.' },
    { t: 'h', text: 'Danh sách НА — học thuộc như học từ vựng' },
    { t: 'words', items: [
      { ru: 'на рабо́те', vn: 'ở chỗ làm' },
      { ru: 'на уро́ке', vn: 'trong giờ học' },
      { ru: 'на ле́кции', vn: 'ở buổi giảng' },
      { ru: 'на заня́тии', vn: 'ở buổi học' },
      { ru: 'на факульте́те', vn: 'ở khoa' },
      { ru: 'на ка́федре', vn: 'ở bộ môn' },
      { ru: 'на заво́де', vn: 'ở nhà máy' },
      { ru: 'на по́чте', vn: 'ở bưu điện' },
      { ru: 'на вокза́ле', vn: 'ở nhà ga' },
      { ru: 'на ста́нции', vn: 'ở ga tàu điện' },
      { ru: 'на конце́рте', vn: 'ở buổi hoà nhạc' },
      { ru: 'на собра́нии', vn: 'ở cuộc họp' },
      { ru: 'на ю́ге / на се́вере', vn: 'ở phía nam / phía bắc' }
    ]},
    { t: 'tip', html: 'Nhìn kỹ danh sách trên: phần lớn là <b>hoạt động</b> (giờ học, buổi giảng, cuộc họp, buổi hoà nhạc) chứ không phải cái phòng chứa nó. Người Nga hình dung "đang tham gia vào việc đó" chứ không phải "đang ở trong cái phòng đó". Nhớ theo hướng này dễ hơn học vẹt.' },
    { t: 'h', text: 'Đối lập với danh sách В' },
    { t: 'words', items: [
      { ru: 'в университе́те', vn: 'ở trường đại học' },
      { ru: 'в институ́те', vn: 'ở viện' },
      { ru: 'в шко́ле', vn: 'ở trường phổ thông' },
      { ru: 'в лаборато́рии', vn: 'trong phòng thí nghiệm' },
      { ru: 'в библиоте́ке', vn: 'trong thư viện' },
      { ru: 'в общежи́тии', vn: 'ở ký túc xá' },
      { ru: 'в магази́не', vn: 'trong cửa hàng' },
      { ru: 'в теа́тре', vn: 'ở nhà hát' },
      { ru: 'в Росси́и / во Вьетна́ме', vn: 'ở Nga / ở Việt Nam' }
    ]},
    { t: 'warn', html: 'Cặp bẫy kinh điển: <span class="ru">в университе́те</span> (ở trường) nhưng <span class="ru">на факульте́те</span> (ở khoa) — cùng một toà nhà, hai giới từ khác nhau. Và <span class="ru">в лаборато́рии</span> chứ <b>không phải</b> <span class="ru">на лаборато́рии</span>.' },
    { t: 'h', text: 'Ở ĐÂU hay ĐI ĐÂU — cùng giới từ, khác cách' },
    { t: 'p', html: 'Đây là điểm hay của tiếng Nga: <span class="ru">в</span> và <span class="ru">на</span> đi với <b>hai cách khác nhau</b> tuỳ theo em đang đứng yên hay đang di chuyển.' },
    { t: 'table', head: ['Câu hỏi', 'Cách dùng', 'Ví dụ'], rows: [
      ['<b>Где?</b> — Ở đâu (đứng yên)', 'в / на + <b>cách 6</b>', 'Я в университе́т<b>е</b>. · Я на рабо́т<b>е</b>.'],
      ['<b>Куда́?</b> — Đi đâu (di chuyển)', 'в / на + <b>cách 4</b>', 'Я иду́ в университе́т. · Я иду́ на рабо́т<b>у</b>.']
    ]},
    { t: 'words', items: [
      { ru: 'Я в шко́ле.', vn: 'Tôi đang ở trường. (Где?)' },
      { ru: 'Я иду́ в шко́лу.', vn: 'Tôi đang đi đến trường. (Куда?)' },
      { ru: 'Она́ на рабо́те.', vn: 'Cô ấy đang ở chỗ làm.' },
      { ru: 'Она́ идёт на рабо́ту.', vn: 'Cô ấy đang đi làm.' }
    ]},
    { t: 'note', html: 'Giới từ giữ nguyên, chỉ đuôi danh từ đổi. Nếu một nơi dùng <span class="ru">на</span> khi đứng yên thì lúc đi cũng vẫn <span class="ru">на</span> — không bao giờ đổi sang в. Nhớ được điều này thì học thuộc danh sách НА một lần là dùng cho cả hai trường hợp.' }
  ],
  vocab: [
    { ru: 'рабо́та', vn: 'công việc, chỗ làm' }, { ru: 'уро́к', vn: 'giờ học' },
    { ru: 'ле́кция', vn: 'buổi giảng' }, { ru: 'факульте́т', vn: 'khoa' },
    { ru: 'библиоте́ка', vn: 'thư viện' }, { ru: 'по́чта', vn: 'bưu điện' },
    { ru: 'вокза́л', vn: 'nhà ga' }, { ru: 'куда́', vn: 'đi đâu' }, { ru: 'идти́', vn: 'đi (bộ)' }
  ],
  ex: [
    { t: 'choice', q: 'Chọn đúng: Я рабо́таю ___ лаборато́рии.', options: ['на', 'в', 'о', 'у'], a: 1, why: 'Phòng thí nghiệm là không gian kín nên dùng в: в лаборатории. Đây là lỗi rất hay gặp.' },
    { t: 'choice', q: 'Chọn đúng: Он ___ рабо́те.', options: ['в', 'на', 'о', 'из'], a: 1, why: 'работа nằm trong danh sách НА — người Nga hình dung là "đang tham gia công việc".' },
    { t: 'choice', q: 'Chọn đúng: Она́ у́чится ___ факульте́те.', options: ['в', 'на', 'о', 'к'], a: 1, why: 'на факультете, dù cùng toà nhà với в университете. Đây là cặp bẫy kinh điển.' },
    { t: 'type', q: 'Điền đuôi đúng: Я иду́ в шко́л___ (đi ĐẾN trường)', a: 'школу', alt: ['шко́лу'], hint: 'Куда? → cách 4, giống cái -а thành -у.' },
    { t: 'type', q: 'Điền đuôi đúng: Я в шко́л___ (đang Ở trường)', a: 'школе', alt: ['шко́ле'], hint: 'Где? → cách 6, đuôi -е.' },
    { t: 'choice', q: 'Nếu một nơi dùng <span class="ru">на</span> khi trả lời Где?, thì khi trả lời Куда? nó dùng:', options: ['в', 'vẫn на', 'к', 'bỏ giới từ'], a: 1, why: 'Giới từ không đổi, chỉ đuôi danh từ đổi từ cách 6 sang cách 4.' },
    { t: 'match', q: 'Nối nơi chốn với giới từ đúng:', pairs: [['___ библиоте́ке', 'в'], ['___ по́чте', 'на'], ['___ теа́тре', 'в'], ['___ вокза́ле', 'на']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'я работаю в лаборатории', a: 'я работаю в лаборатории' }
  ]
};

/* ---------------------------------------------------------- BÀI 10 */
LESSON_DATA['a1-10'] = {
  level: 'a1',
  intro: 'Sau hai bài về cách, đây là bài <b>dễ thở</b>. Thì quá khứ tiếng Nga đơn giản đến bất ngờ: không chia theo ngôi, chỉ có bốn dạng, và cách tạo thì chỉ một bước.',
  blocks: [
    { t: 'h', text: 'Công thức: bỏ -ть, thêm -л' },
    { t: 'table', head: ['Ai nói', 'Đuôi', 'чита́ть → đọc'], rows: [
      ['Nam (я, ты, он)', '-л', 'чита́<b>л</b> — Я чита́л.'],
      ['Nữ (я, ты, она́)', '-ла', 'чита́<b>ла</b> — Я чита́ла.'],
      ['Trung (оно́)', '-ло', 'чита́<b>ло</b>'],
      ['Số nhiều (мы, вы, они́)', '-ли', 'чита́<b>ли</b> — Мы чита́ли.']
    ]},
    { t: 'warn', html: '<b>Điểm khác hẳn tiếng Việt và tiếng Anh:</b> quá khứ tiếng Nga chia theo <b>giới tính người nói</b>, không phải theo ngôi. Oanh nói <span class="ru">Я чита́ла</span>, còn Trung nói <span class="ru">Я чита́л</span> — cùng nghĩa "tôi đã đọc". Nói sai đuôi là người Nga tưởng em đang nói về người khác giới.' },
    { t: 'h', text: 'Ví dụ đủ bốn dạng' },
    { t: 'words', items: [
      { ru: 'Он рабо́тал в Москве́.', vn: 'Anh ấy đã làm việc ở Moskva.' },
      { ru: 'Она́ рабо́тала в шко́ле.', vn: 'Cô ấy đã làm việc ở trường.' },
      { ru: 'Мы говори́ли о тебе́.', vn: 'Chúng tôi đã nói về cậu.' },
      { ru: 'Они́ смотре́ли фильм.', vn: 'Họ đã xem phim.' },
      { ru: 'Я не понима́л.', vn: 'Tôi đã không hiểu. (nam nói)' },
      { ru: 'Я не понима́ла.', vn: 'Tôi đã không hiểu. (nữ nói)' }
    ]},
    { t: 'h', text: 'Động từ "là" chỉ xuất hiện ở quá khứ' },
    { t: 'p', html: 'Nhớ lại bài A0: hiện tại tiếng Nga <b>bỏ hẳn</b> động từ "là". Nhưng ở quá khứ thì nó quay lại, và bắt buộc phải có:' },
    { t: 'table', head: ['', 'Hiện tại', 'Quá khứ'], rows: [
      ['Tôi ở nhà (nam)', 'Я до́ма.', 'Я <b>был</b> до́ма.'],
      ['Tôi ở nhà (nữ)', 'Я до́ма.', 'Я <b>была́</b> до́ма.'],
      ['Trời đã lạnh', 'Хо́лодно.', '<b>Бы́ло</b> хо́лодно.'],
      ['Chúng tôi đã ở đó', 'Мы там.', 'Мы <b>бы́ли</b> там.']
    ]},
    { t: 'note', html: 'Chú ý trọng âm của <span class="ru">была́</span> — rơi vào âm cuối, khác hẳn <span class="ru">был, бы́ло, бы́ли</span>. Đây là dạng người học hay đọc sai.' },
    { t: 'h', text: 'Hai động từ bất quy tắc hay dùng' },
    { t: 'table', head: ['Nguyên thể', 'Nam', 'Nữ', 'Số nhiều'], rows: [
      ['идти́ (đi bộ)', 'шёл', 'шла', 'шли'],
      ['мочь (có thể)', 'мог', 'могла́', 'могли́']
    ]},
    { t: 'words', items: [
      { ru: 'Вчера́ я шёл в университе́т.', vn: 'Hôm qua tôi đi tới trường. (nam)' },
      { ru: 'Она́ шла домо́й.', vn: 'Cô ấy đang trên đường về nhà.' },
      { ru: 'Я не мог говори́ть по-ру́сски.', vn: 'Tôi đã không nói được tiếng Nga.' }
    ]},
    { t: 'tip', html: 'Bốn từ chỉ thời gian đi kèm quá khứ, học luôn cho tiện: <span class="ru">вчера́</span> (hôm qua), <span class="ru">ра́ньше</span> (trước đây), <span class="ru">неда́вно</span> (mới đây), <span class="ru">давно́</span> (lâu rồi).' }
  ],
  vocab: [
    { ru: 'был', vn: 'đã ở, đã là (nam)' }, { ru: 'была́', vn: 'đã ở, đã là (nữ)' },
    { ru: 'бы́ли', vn: 'đã ở, đã là (số nhiều)' }, { ru: 'вчера́', vn: 'hôm qua' },
    { ru: 'ра́ньше', vn: 'trước đây' }, { ru: 'давно́', vn: 'lâu rồi' },
    { ru: 'домо́й', vn: 'về nhà (hướng đi)' }, { ru: 'шёл', vn: 'đã đi (nam)' }
  ],
  ex: [
    { t: 'choice', q: 'Oanh kể "Tôi đã đọc quyển sách này" thì nói:', options: ['Я чита́л э́ту кни́гу.', 'Я чита́ла э́ту кни́гу.', 'Я чита́ли э́ту кни́гу.', 'Я чита́ть э́ту кни́гу.'], a: 1, why: 'Quá khứ tiếng Nga chia theo giới tính người nói. Oanh là nữ nên dùng đuôi -ла.' },
    { t: 'choice', q: 'Thì quá khứ tiếng Nga chia theo:', options: ['Ngôi (tôi, bạn, họ)', 'Giới tính và số', 'Thời điểm cụ thể', 'Không chia gì cả'], a: 1, why: 'Chỉ có 4 dạng: nam, nữ, trung, số nhiều. Ngôi không ảnh hưởng.' },
    { t: 'type', q: 'Điền: Вчера́ мы ___ в теа́тре. (быть)', a: 'были', alt: ['бы́ли'], hint: 'Số nhiều của быть ở quá khứ.' },
    { t: 'type', q: 'Điền (nữ nói): Я ___ до́ма. (быть)', a: 'была', alt: ['была́'], hint: 'Đuôi -ла, trọng âm rơi vào âm cuối.' },
    { t: 'choice', q: 'Câu nào <b>sai</b>?', options: ['Я был до́ма.', 'Я до́ма.', 'Я есть до́ма.', 'Мы бы́ли там.'], a: 2, why: 'Thì hiện tại không dùng động từ "là". “Я есть дома” là lỗi dịch từ tiếng Anh.' },
    { t: 'choice', q: 'Quá khứ của <span class="ru ru-big">идти́</span> ở giống nam là:', options: ['идёл', 'шёл', 'шла', 'ходи́л'], a: 1, why: 'идти là động từ bất quy tắc: шёл / шла / шли.' },
    { t: 'match', q: 'Nối:', pairs: [['вчера́', 'hôm qua'], ['ра́ньше', 'trước đây'], ['давно́', 'lâu rồi'], ['домо́й', 'về nhà']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'вчера я был дома', a: 'вчера я был дома' }
  ]
};

/* ---------------------------------------------------------- BÀI 11 */
LESSON_DATA['a1-11'] = {
  level: 'a1',
  intro: 'Nốt thì cuối cùng ở cấp A1. Thì tương lai cũng dễ như quá khứ: chỉ cần một động từ phụ <span class="ru">быть</span> đứng trước, còn động từ chính giữ nguyên dạng nguyên thể.',
  blocks: [
    { t: 'h', text: 'Công thức: бу́ду + nguyên thể' },
    { t: 'table', head: ['Ngôi', 'быть ở tương lai', 'Ví dụ đầy đủ'], rows: [
      ['я', 'бу́ду', 'Я <b>бу́ду</b> чита́ть.'],
      ['ты', 'бу́дешь', 'Ты <b>бу́дешь</b> рабо́тать.'],
      ['он / она́', 'бу́дет', 'Она́ <b>бу́дет</b> учи́ть ру́сский.'],
      ['мы', 'бу́дем', 'Мы <b>бу́дем</b> смотре́ть фильм.'],
      ['вы', 'бу́дете', 'Вы <b>бу́дете</b> отдыха́ть?'],
      ['они́', 'бу́дут', 'Они́ <b>бу́дут</b> говори́ть по-ру́сски.']
    ]},
    { t: 'tip', html: 'Chỉ có <span class="ru">быть</span> là chia. Động từ thứ hai <b>luôn ở dạng nguyên thể</b>, y như sau <span class="ru">хочу́</span> và <span class="ru">могу́</span> em đã học ở bài 6. Ba cấu trúc, cùng một quy luật.' },
    { t: 'h', text: 'Бу́ду đứng một mình = "sẽ ở, sẽ là"' },
    { t: 'words', items: [
      { ru: 'За́втра я бу́ду до́ма.', vn: 'Mai tôi sẽ ở nhà.' },
      { ru: 'Он бу́дет врачо́м.', vn: 'Anh ấy sẽ trở thành bác sĩ.' },
      { ru: 'Ве́чером мы бу́дем в теа́тре.', vn: 'Buổi tối chúng tôi sẽ ở nhà hát.' },
      { ru: 'Э́то бу́дет интере́сно.', vn: 'Cái đó sẽ hay đấy.' }
    ]},
    { t: 'h', text: 'Ba thì cạnh nhau cho dễ nhìn' },
    { t: 'table', head: ['Thì', 'Câu', 'Nghĩa'], rows: [
      ['Quá khứ', 'Я чита́л кни́гу.', 'Tôi đã đọc sách.'],
      ['Hiện tại', 'Я чита́ю кни́гу.', 'Tôi đọc / đang đọc sách.'],
      ['Tương lai', 'Я бу́ду чита́ть кни́гу.', 'Tôi sẽ đọc sách.']
    ]},
    { t: 'note', html: 'Để ý: chỉ có <b>hiện tại</b> là chia động từ chính theo ngôi. Quá khứ chia theo giới tính, tương lai thì động từ chính không chia gì cả. Nghĩa là em chỉ phải học thuộc <b>một</b> bộ chia — bộ hiện tại ở bài 5 và 6.' },
    { t: 'h', text: 'Từ chỉ thời gian tương lai' },
    { t: 'words', items: [
      { ru: 'за́втра', vn: 'ngày mai' },
      { ru: 'послеза́втра', vn: 'ngày kia' },
      { ru: 'ско́ро', vn: 'sắp tới, chẳng bao lâu nữa' },
      { ru: 'пото́м', vn: 'sau đó' },
      { ru: 'че́рез неде́лю', vn: 'một tuần nữa' },
      { ru: 'в бу́дущем году́', vn: 'năm sau' }
    ]},
    { t: 'warn', html: 'Tiếng Nga còn một kiểu tương lai nữa — <b>tương lai hoàn thành</b> (<span class="ru">я прочита́ю</span> = tôi sẽ đọc xong), tạo từ thể hoàn thành của động từ. Cái đó thuộc cấp A2, em chưa cần lo. Ở A1 cứ dùng <span class="ru">бу́ду + nguyên thể</span> là người Nga hiểu hết.' },
    { t: 'h', text: 'Hội thoại mẫu' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Что ты бу́дешь де́лать за́втра?', vn: 'Mai cậu sẽ làm gì?' },
      { who: 'Б', ru: 'У́тром бу́ду рабо́тать, а ве́чером бу́ду отдыха́ть.', vn: 'Sáng thì làm việc, còn tối thì nghỉ ngơi.' },
      { who: 'А', ru: 'Ты бу́дешь до́ма?', vn: 'Cậu sẽ ở nhà chứ?' },
      { who: 'Б', ru: 'Да. Пото́м бу́ду смотре́ть фильм.', vn: 'Ừ. Sau đó tớ sẽ xem phim.' }
    ]}
  ],
  vocab: [
    { ru: 'бу́ду', vn: 'tôi sẽ' }, { ru: 'за́втра', vn: 'ngày mai' }, { ru: 'ско́ро', vn: 'sắp tới' },
    { ru: 'пото́м', vn: 'sau đó' }, { ru: 'у́тром', vn: 'buổi sáng' }, { ru: 'ве́чером', vn: 'buổi tối' },
    { ru: 'неде́ля', vn: 'tuần' }, { ru: 'врач', vn: 'bác sĩ' }
  ],
  ex: [
    { t: 'type', q: 'Điền: За́втра я ___ рабо́тать.', a: 'буду', alt: ['бу́ду'], hint: 'Dạng tương lai của быть cho ngôi я.' },
    { t: 'choice', q: 'Câu nào <b>đúng</b>?', options: ['Я бу́ду чита́ю.', 'Я бу́ду чита́ть.', 'Я бу́дет чита́ть.', 'Я чита́ть бу́ду ю.'], a: 1, why: 'Chỉ быть chia, động từ chính giữ nguyên thể.' },
    { t: 'type', q: 'Điền: Они́ ___ говори́ть по-ру́сски.', a: 'будут', alt: ['бу́дут'], hint: 'Ngôi они.' },
    { t: 'choice', q: 'Thì nào <b>chia động từ chính theo ngôi</b>?', options: ['Quá khứ', 'Hiện tại', 'Tương lai', 'Cả ba'], a: 1, why: 'Quá khứ chia theo giới tính, tương lai không chia động từ chính. Chỉ hiện tại chia theo ngôi.' },
    { t: 'choice', q: '"Mai chúng tôi sẽ ở nhà hát" nói là:', options: ['За́втра мы в теа́тре.', 'За́втра мы бу́дем в теа́тре.', 'За́втра мы бы́ли в теа́тре.', 'За́втра мы быть в теа́тре.'], a: 1, why: 'будем đứng một mình cũng có nghĩa "sẽ ở, sẽ là".' },
    { t: 'match', q: 'Nối:', pairs: [['за́втра', 'ngày mai'], ['ско́ро', 'sắp tới'], ['у́тром', 'buổi sáng'], ['ве́чером', 'buổi tối']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'завтра я буду дома', a: 'завтра я буду дома' }
  ]
};

/* ---------------------------------------------------------- BÀI 12 */
LESSON_DATA['a1-12'] = {
  level: 'a1',
  intro: 'Số đếm và tiền bạc — thứ em cần ngay ngày đầu tiên đặt chân xuống nước Nga. Bài này cũng giới thiệu một quy luật nổi tiếng khó: <b>số đếm quyết định đuôi của danh từ đứng sau</b>.',
  blocks: [
    { t: 'h', text: 'Từ 1 đến 10' },
    { t: 'words', items: [
      { ru: 'оди́н', vn: '1' }, { ru: 'два', vn: '2' }, { ru: 'три', vn: '3' },
      { ru: 'четы́ре', vn: '4' }, { ru: 'пять', vn: '5' }, { ru: 'шесть', vn: '6' },
      { ru: 'семь', vn: '7' }, { ru: 'во́семь', vn: '8' }, { ru: 'де́вять', vn: '9' }, { ru: 'де́сять', vn: '10' }
    ]},
    { t: 'h', text: 'Từ 11 đến 20 — thêm đuôi -надцать' },
    { t: 'words', items: [
      { ru: 'оди́ннадцать', vn: '11' }, { ru: 'двена́дцать', vn: '12' }, { ru: 'трина́дцать', vn: '13' },
      { ru: 'четы́рнадцать', vn: '14' }, { ru: 'пятна́дцать', vn: '15' }, { ru: 'шестна́дцать', vn: '16' },
      { ru: 'семна́дцать', vn: '17' }, { ru: 'восемна́дцать', vn: '18' }, { ru: 'девятна́дцать', vn: '19' },
      { ru: 'два́дцать', vn: '20' }
    ]},
    { t: 'tip', html: 'Đuôi <b>-надцать</b> vốn là "на де́сять" (trên mười) viết dính lại. Biết gốc thì nhớ dễ hơn nhiều: <span class="ru">три + надцать</span> = mười ba.' },
    { t: 'h', text: 'Hàng chục và trăm' },
    { t: 'words', items: [
      { ru: 'три́дцать', vn: '30' }, { ru: 'со́рок', vn: '40 (không theo quy tắc nào)' },
      { ru: 'пятьдеся́т', vn: '50' }, { ru: 'шестьдеся́т', vn: '60' },
      { ru: 'се́мьдесят', vn: '70' }, { ru: 'во́семьдесят', vn: '80' },
      { ru: 'девяно́сто', vn: '90 (cũng bất quy tắc)' }, { ru: 'сто', vn: '100' }
    ]},
    { t: 'p', html: 'Ghép số thì đọc lần lượt: <span class="ru">два́дцать пять</span> (25), <span class="ru">со́рок семь</span> (47), <span class="ru">во́семьдесят три</span> (83).' },
    { t: 'h', text: 'Quy luật quan trọng nhất bài: số nào thì đuôi nấy' },
    { t: 'p', html: 'Trong tiếng Nga, <b>con số quyết định hình dạng của danh từ đứng sau</b>. Có ba nhóm:' },
    { t: 'table', head: ['Số kết thúc bằng', 'Danh từ ở dạng', 'Ví dụ với рубль (đồng rúp)'], rows: [
      ['1 (21, 31, 101…)', 'số ít, nguyên dạng', 'оди́н <b>рубль</b> · два́дцать оди́н <b>рубль</b>'],
      ['2, 3, 4 (22, 33…)', 'số ít, cách 2', 'два <b>рубля́</b> · четы́ре <b>рубля́</b>'],
      ['5 → 20, và 0', 'số nhiều, cách 2', 'пять <b>рубле́й</b> · сто <b>рубле́й</b>']
    ]},
    { t: 'words', items: [
      { ru: 'одна́ кни́га', vn: '1 quyển sách' },
      { ru: 'две кни́ги', vn: '2 quyển sách (chú ý: две chứ không phải два — với giống cái)' },
      { ru: 'пять книг', vn: '5 quyển sách' },
      { ru: 'оди́н студе́нт / два студе́нта / пять студе́нтов', vn: '1 / 2 / 5 sinh viên' }
    ]},
    { t: 'warn', html: '<b>Hai chữ "hai":</b> <span class="ru">два</span> đi với giống đực và trung, <span class="ru">две</span> đi với giống cái. <span class="ru">два стола́</span> nhưng <span class="ru">две кни́ги</span>. Chỉ số 1 và số 2 mới phân biệt giống, từ 3 trở lên thì dùng chung.' },
    { t: 'note', html: 'Đừng cố học thuộc bảng này trong một buổi. Ở A1 em chỉ cần <b>nhận ra</b> quy luật và nói đúng các số hay dùng. Cách 2 sẽ được học tử tế ở bài 13, lúc đó bảng này tự sáng ra.' },
    { t: 'h', text: 'Hỏi giá và mua bán' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Ско́лько сто́ит э́та кни́га?', vn: 'Quyển sách này bao nhiêu tiền?' },
      { who: 'Б', ru: 'Три́ста рубле́й.', vn: 'Ba trăm rúp.' },
      { who: 'А', ru: 'А э́ти две кни́ги?', vn: 'Thế hai quyển này thì sao?' },
      { who: 'Б', ru: 'Пятьсо́т рубле́й.', vn: 'Năm trăm rúp.' },
      { who: 'А', ru: 'Хорошо́, я возьму́. Спаси́бо!', vn: 'Được, tôi lấy. Cảm ơn!' }
    ]},
    { t: 'words', items: [
      { ru: 'Ско́лько сто́ит…?', vn: 'Cái… giá bao nhiêu? (một món)' },
      { ru: 'Ско́лько сто́ят…?', vn: 'Những cái… giá bao nhiêu? (nhiều món)' },
      { ru: 'до́рого', vn: 'đắt' },
      { ru: 'дёшево', vn: 'rẻ' },
      { ru: 'ру́бль', vn: 'đồng rúp' },
      { ru: 'де́ньги', vn: 'tiền' }
    ]}
  ],
  vocab: [
    { ru: 'оди́н', vn: 'một' }, { ru: 'два', vn: 'hai (đực/trung)' }, { ru: 'две', vn: 'hai (cái)' },
    { ru: 'пять', vn: 'năm' }, { ru: 'де́сять', vn: 'mười' }, { ru: 'два́дцать', vn: 'hai mươi' },
    { ru: 'сто', vn: 'một trăm' }, { ru: 'ско́лько', vn: 'bao nhiêu' },
    { ru: 'Ско́лько сто́ит?', vn: 'Giá bao nhiêu?' }, { ru: 'ру́бль', vn: 'đồng rúp' },
    { ru: 'до́рого', vn: 'đắt' }, { ru: 'дёшево', vn: 'rẻ' }
  ],
  ex: [
    { t: 'choice', q: 'Số <b>40</b> trong tiếng Nga là:', options: ['четы́рдесят', 'со́рок', 'четы́рнадцать', 'сорока́'], a: 1, why: 'сорок là từ bất quy tắc, không theo mẫu -десят như 50, 60, 70.' },
    { t: 'choice', q: '"Hai quyển sách" nói là:', options: ['два кни́ги', 'две кни́ги', 'две книг', 'два кни́га'], a: 1, why: 'книга là giống cái nên dùng две, và sau 2-4 thì danh từ ở cách 2 số ít: книги.' },
    { t: 'choice', q: 'Sau số <b>5 trở lên</b>, danh từ đứng ở dạng nào?', options: ['Nguyên dạng số ít', 'Cách 2 số ít', 'Cách 2 số nhiều', 'Cách 4'], a: 2, why: 'пять рублей, сто книг — cách 2 số nhiều.' },
    { t: 'type', q: 'Hỏi giá một món đồ:  ___ сто́ит?', a: 'сколько', alt: ['ско́лько'], hint: 'Từ để hỏi "bao nhiêu".' },
    { t: 'choice', q: '<span class="ru ru-big">де́вять</span> là số mấy?', options: ['7', '8', '9', '19'], a: 2, why: 'девять = 9. Đừng nhầm với девятнадцать = 19.' },
    { t: 'choice', q: 'Số nào phân biệt giống đực và giống cái?', options: ['Chỉ số 1', 'Số 1 và số 2', 'Mọi số', 'Không số nào'], a: 1, why: 'один/одна và два/две. Từ 3 trở lên dùng chung cho mọi giống.' },
    { t: 'match', q: 'Nối:', pairs: [['до́рого', 'đắt'], ['дёшево', 'rẻ'], ['сто', '100'], ['во́семь', '8']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'сколько стоит', a: 'сколько стоит' }
  ]
};

/* ---------------------------------------------------------- BÀI 13 */
LESSON_DATA['a1-13'] = {
  level: 'a1',
  intro: 'Nếu chỉ được chọn <b>một</b> cách để học cho thật kỹ, người Nga sẽ khuyên em chọn cách này. <b>Роди́тельный паде́ж</b> (cách 2) là cách dùng nhiều nhất tiếng Nga — nó xuất hiện trong sở hữu, phủ định, số đếm, và sau cả một loạt giới từ.',
  blocks: [
    { t: 'h', text: 'Đuôi của cách 2' },
    { t: 'table', head: ['Loại từ', 'Đuôi', 'Ví dụ'], rows: [
      ['Đực (phụ âm)', '-а', 'брат → бра́т<b>а</b> · дом → до́м<b>а</b>'],
      ['Đực (-й, -ь)', '-я', 'музе́й → музе́<b>я</b> · слова́рь → словар<b>я́</b>'],
      ['Cái -а', '-ы', 'шко́ла → шко́л<b>ы</b> · сестра́ → сестр<b>ы́</b>'],
      ['Cái -га, -ка…', '-и (quy tắc 7 chữ)', 'кни́га → кни́г<b>и</b> · ру́чка → ру́чк<b>и</b>'],
      ['Cái -я / -ия', '-и / -ии', 'неде́ля → неде́л<b>и</b> · Росси́я → Росси́<b>и</b>'],
      ['Cái -ь', '-и', 'тетра́дь → тетра́д<b>и</b>'],
      ['Trung -о', '-а', 'окно́ → окн<b>а́</b>'],
      ['Trung -е', '-я', 'мо́ре → мо́р<b>я</b>']
    ]},
    { t: 'tip', html: 'Nhớ lại quy tắc 7 chữ ở bài 4 — sau <b>г к х ж ч ш щ</b> viết и chứ không viết ы. Nó quay lại đây, và sẽ còn quay lại rất nhiều lần nữa.' },
    { t: 'h', text: 'Dùng 1 — Của ai, của cái gì' },
    { t: 'p', html: 'Tiếng Việt nói "sách <b>của</b> anh trai". Tiếng Nga không có chữ "của" — chỉ đổi đuôi từ thứ hai. Và trật tự ngược với tiếng Việt: <b>vật đứng trước, người sở hữu đứng sau</b>.' },
    { t: 'words', items: [
      { ru: 'кни́га бра́та', vn: 'sách của anh trai' },
      { ru: 'дом отца́', vn: 'nhà của bố' },
      { ru: 'столи́ца Росси́и', vn: 'thủ đô của nước Nga' },
      { ru: 'центр го́рода', vn: 'trung tâm thành phố' },
      { ru: 'дверь ко́мнаты', vn: 'cửa của căn phòng' }
    ]},
    { t: 'h', text: 'Dùng 2 — Có và không có' },
    { t: 'p', html: 'Đây là cấu trúc em sẽ dùng mỗi ngày. Tiếng Nga không nói "tôi có", mà nói "<b>ở chỗ tôi có</b>": <span class="ru">У меня́ есть…</span>' },
    { t: 'table', head: ['Khẳng định', 'Phủ định'], rows: [
      ['У меня́ есть брат. — Tôi có anh trai.', 'У меня́ <b>нет бра́та</b>. — Tôi không có anh trai.'],
      ['У меня́ есть вре́мя. — Tôi có thời gian.', 'У меня́ <b>нет вре́мени</b>. — Tôi không có thời gian.'],
      ['Здесь есть магази́н. — Ở đây có cửa hàng.', 'Здесь <b>нет магази́на</b>. — Ở đây không có cửa hàng.']
    ]},
    { t: 'warn', html: 'Quy luật sắt: sau <span class="ru">нет</span> thì danh từ <b>bắt buộc</b> ở cách 2. Nói <span class="ru">У меня́ нет брат</span> là sai. Đây là chỗ người Việt hay quên vì tiếng Việt nói "không có anh trai" — chữ "anh trai" chẳng đổi gì.' },
    { t: 'words', items: [
      { ru: 'у меня́', vn: 'ở chỗ tôi (tôi có)' },
      { ru: 'у тебя́', vn: 'ở chỗ bạn' },
      { ru: 'у него́ / у неё', vn: 'ở chỗ anh ấy / cô ấy' },
      { ru: 'у нас / у вас / у них', vn: 'ở chỗ chúng tôi / các bạn / họ' }
    ]},
    { t: 'h', text: 'Dùng 3 — Sau các giới từ' },
    { t: 'words', items: [
      { ru: 'из Вьетна́ма', vn: 'từ Việt Nam (nơi xuất phát)' },
      { ru: 'от бра́та', vn: 'từ anh trai (từ một người)' },
      { ru: 'до конца́', vn: 'cho đến hết' },
      { ru: 'о́коло до́ма', vn: 'gần nhà' },
      { ru: 'без са́хара', vn: 'không đường' },
      { ru: 'для сестры́', vn: 'dành cho chị gái' },
      { ru: 'по́сле уро́ка', vn: 'sau giờ học' }
    ]},
    { t: 'note', html: 'Câu hay dùng nhất: <span class="ru">Ко́фе без са́хара, пожа́луйста.</span> — "Cho tôi cà phê không đường." Cả câu chỉ có một chỗ đổi đuôi, mà không đổi là người ta nghe ra ngay.' },
    { t: 'h', text: 'Dùng 4 — Sau số đếm (nhắc lại bài 12)' },
    { t: 'p', html: 'Giờ thì bảng ở bài 12 đã có tên gọi: sau 2, 3, 4 là <b>cách 2 số ít</b>; từ 5 trở lên là <b>cách 2 số nhiều</b>.' },
    { t: 'words', items: [
      { ru: 'два бра́та', vn: '2 anh em (cách 2 số ít)' },
      { ru: 'пять бра́тьев', vn: '5 anh em (cách 2 số nhiều)' },
      { ru: 'три кни́ги', vn: '3 quyển sách' },
      { ru: 'де́сять книг', vn: '10 quyển sách' },
      { ru: 'два́дцать рубле́й', vn: '20 rúp' }
    ]},
    { t: 'tip', html: 'Cách 2 số nhiều có nhiều dạng, chưa cần học hết ở A1. Ba mẫu hay gặp: giống đực thêm <b>-ов</b> (студе́нтов), giống cái và trung thì <b>bỏ đuôi</b> (книг, о́кон), và nhóm mềm lấy <b>-ей</b> (рубле́й, друзе́й).' }
  ],
  vocab: [
    { ru: 'оте́ц', vn: 'bố (trang trọng)' }, { ru: 'центр', vn: 'trung tâm' },
    { ru: 'вре́мя', vn: 'thời gian' }, { ru: 'без', vn: 'không có, thiếu' },
    { ru: 'для', vn: 'dành cho' }, { ru: 'о́коло', vn: 'gần, khoảng' },
    { ru: 'по́сле', vn: 'sau khi' }, { ru: 'са́хар', vn: 'đường' },
    { ru: 'у меня́ есть', vn: 'tôi có' }, { ru: 'нет', vn: 'không có' }
  ],
  ex: [
    { t: 'type', q: 'Điền cách 2: У меня́ нет ___ (брат)', a: 'брата', alt: ['бра́та'], hint: 'Giống đực thêm -а.' },
    { t: 'type', q: 'Điền cách 2: Э́то кни́га ___ (сестра́)', a: 'сестры', alt: ['сестры́'], hint: 'Giống cái -а đổi thành -ы.' },
    { t: 'choice', q: 'Sau <span class="ru ru-big">нет</span>, danh từ phải ở cách nào?', options: ['Cách 1 (nguyên dạng)', 'Cách 2', 'Cách 4', 'Cách 6'], a: 1, why: 'нет luôn đòi cách 2: нет времени, нет магазина, нет брата.' },
    { t: 'choice', q: '"Cà phê không đường" nói là:', options: ['ко́фе без са́хар', 'ко́фе без са́хара', 'ко́фе без са́харом', 'ко́фе не са́хар'], a: 1, why: 'Giới từ без luôn đi với cách 2: без сахара.' },
    { t: 'type', q: 'Điền cách 2: Я из ___ (Вьетна́м)', a: 'вьетнама', alt: ['Вьетнама', 'Вьетна́ма'], hint: 'Giống đực thêm -а.' },
    { t: 'choice', q: '"Sách của anh trai" trong tiếng Nga viết theo thứ tự nào?', options: ['бра́та кни́га', 'кни́га бра́та', 'кни́га для брат', 'бра́т кни́га'], a: 1, why: 'Vật đứng trước, người sở hữu đứng sau và đổi sang cách 2 — ngược thứ tự với tiếng Việt.' },
    { t: 'match', q: 'Nối giới từ với nghĩa:', pairs: [['без', 'không có'], ['для', 'dành cho'], ['по́сле', 'sau khi'], ['о́коло', 'gần']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'у меня нет времени', a: 'у меня нет времени' }
  ]
};

/* ---------------------------------------------------------- BÀI 14 */
LESSON_DATA['a1-14'] = {
  level: 'a1',
  intro: 'Chủ đề đầu tiên người Nga hỏi khi làm quen là gia đình. Bài này cho em đủ từ để kể về nhà mình, và luyện luôn cách 2 vừa học ở bài trước.',
  blocks: [
    { t: 'h', text: 'Người trong nhà' },
    { t: 'words', items: [
      { ru: 'семья́', vn: 'gia đình' },
      { ru: 'роди́тели', vn: 'bố mẹ (luôn số nhiều)' },
      { ru: 'оте́ц / па́па', vn: 'bố — отец trang trọng, папа thân mật' },
      { ru: 'мать / ма́ма', vn: 'mẹ — cùng kiểu như trên' },
      { ru: 'брат', vn: 'anh / em trai' },
      { ru: 'ста́рший брат', vn: 'anh trai' },
      { ru: 'мла́дший брат', vn: 'em trai' },
      { ru: 'сестра́', vn: 'chị / em gái' },
      { ru: 'сын', vn: 'con trai' },
      { ru: 'дочь', vn: 'con gái' },
      { ru: 'муж', vn: 'chồng' },
      { ru: 'жена́', vn: 'vợ' },
      { ru: 'ба́бушка', vn: 'bà' },
      { ru: 'де́душка', vn: 'ông' },
      { ru: 'дя́дя', vn: 'chú, bác, cậu' },
      { ru: 'тётя', vn: 'cô, dì, bác gái' }
    ]},
    { t: 'note', html: 'Tiếng Nga <b>không phân biệt vai vế</b> như tiếng Việt: <span class="ru">брат</span> vừa là anh vừa là em. Muốn nói rõ thì thêm <span class="ru">ста́рший</span> (lớn hơn) hoặc <span class="ru">мла́дший</span> (nhỏ hơn). Đây là chỗ người Việt thấy thiếu, còn người Nga thấy đủ.' },
    { t: 'h', text: 'Kể về gia đình mình' },
    { t: 'words', items: [
      { ru: 'У меня́ больша́я семья́.', vn: 'Nhà tôi đông người.' },
      { ru: 'У меня́ есть ста́рший брат и мла́дшая сестра́.', vn: 'Tôi có một anh trai và một em gái.' },
      { ru: 'У меня́ нет бра́та.', vn: 'Tôi không có anh em trai.' },
      { ru: 'Мои́ роди́тели живу́т во Вьетна́ме.', vn: 'Bố mẹ tôi sống ở Việt Nam.' },
      { ru: 'Мой па́па — инжене́р.', vn: 'Bố tôi là kỹ sư.' },
      { ru: 'Моя́ ма́ма рабо́тает в шко́ле.', vn: 'Mẹ tôi làm việc ở trường học.' },
      { ru: 'Я ещё не за́мужем.', vn: 'Tôi chưa lập gia đình. (nữ nói)' },
      { ru: 'Я ещё не жена́т.', vn: 'Tôi chưa lập gia đình. (nam nói)' }
    ]},
    { t: 'warn', html: 'Hai từ chỉ tình trạng hôn nhân <b>khác nhau theo giới</b>: nam nói <span class="ru">жена́т</span>, nữ nói <span class="ru">за́мужем</span>. Nói nhầm là câu chuyện thành buồn cười ngay.' },
    { t: 'h', text: 'Nghề nghiệp hay gặp' },
    { t: 'words', items: [
      { ru: 'инжене́р', vn: 'kỹ sư' }, { ru: 'врач', vn: 'bác sĩ' },
      { ru: 'учи́тель / учи́тельница', vn: 'giáo viên (nam / nữ)' },
      { ru: 'студе́нт / студе́нтка', vn: 'sinh viên (nam / nữ)' },
      { ru: 'программи́ст', vn: 'lập trình viên' }, { ru: 'бухга́лтер', vn: 'kế toán' },
      { ru: 'води́тель', vn: 'lái xe' }, { ru: 'продаве́ц', vn: 'người bán hàng' },
      { ru: 'пенсионе́р', vn: 'người về hưu' }, { ru: 'рабо́чий', vn: 'công nhân' }
    ]},
    { t: 'tip', html: 'Nhiều nghề có dạng riêng cho nữ, thêm đuôi <b>-ка</b> hoặc <b>-ница</b>: студе́нт → студе́нтка, учи́тель → учи́тельница. Nhưng một số nghề thì dùng chung cho cả hai giới: <span class="ru">врач, инжене́р, программи́ст</span> — người ta vẫn nói <span class="ru">Она́ врач</span>.' },
    { t: 'h', text: 'Hội thoại làm quen' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'У тебя́ больша́я семья́?', vn: 'Nhà cậu đông người không?' },
      { who: 'Б', ru: 'Да. У меня́ есть роди́тели, брат и две сестры́.', vn: 'Ừ. Tớ có bố mẹ, một anh trai và hai chị em gái.' },
      { who: 'А', ru: 'А где они́ живу́т?', vn: 'Họ sống ở đâu?' },
      { who: 'Б', ru: 'Они́ живу́т во Вьетна́ме, в Хано́е.', vn: 'Họ sống ở Việt Nam, ở Hà Nội.' },
      { who: 'А', ru: 'Кто твой оте́ц?', vn: 'Bố cậu làm nghề gì?' },
      { who: 'Б', ru: 'Он инжене́р. А ма́ма — учи́тельница.', vn: 'Bố tớ là kỹ sư. Còn mẹ là giáo viên.' }
    ]}
  ],
  vocab: [
    { ru: 'семья́', vn: 'gia đình' }, { ru: 'роди́тели', vn: 'bố mẹ' }, { ru: 'оте́ц', vn: 'bố' },
    { ru: 'дочь', vn: 'con gái' }, { ru: 'сын', vn: 'con trai' }, { ru: 'муж', vn: 'chồng' },
    { ru: 'жена́', vn: 'vợ' }, { ru: 'ба́бушка', vn: 'bà' }, { ru: 'тётя', vn: 'cô, dì' },
    { ru: 'ста́рший', vn: 'lớn hơn' }, { ru: 'мла́дший', vn: 'nhỏ hơn' },
    { ru: 'инжене́р', vn: 'kỹ sư' }, { ru: 'учи́тельница', vn: 'cô giáo' }, { ru: 'программи́ст', vn: 'lập trình viên' }
  ],
  ex: [
    { t: 'choice', q: 'Từ <span class="ru ru-big">брат</span> trong tiếng Nga nghĩa là:', options: ['Chỉ anh trai', 'Chỉ em trai', 'Cả anh lẫn em trai', 'Anh em họ'], a: 2, why: 'Tiếng Nga không phân biệt vai vế. Muốn rõ thì thêm старший (anh) hoặc младший (em).' },
    { t: 'choice', q: 'Oanh nói "Tôi chưa lập gia đình" thì dùng:', options: ['Я ещё не жена́т.', 'Я ещё не за́мужем.', 'Я ещё не муж.', 'У меня́ нет жены́.'], a: 1, why: 'Nữ dùng замужем, nam dùng женат.' },
    { t: 'type', q: 'Điền cách 2: У меня́ нет ___ (сестра́)', a: 'сестры', alt: ['сестры́'], hint: 'Sau нет là cách 2, giống cái -а thành -ы.' },
    { t: 'choice', q: '"Bố mẹ" trong tiếng Nga là:', options: ['роди́тель', 'роди́тели', 'роди́теля', 'ро́дина'], a: 1, why: 'родители luôn ở số nhiều. Đừng nhầm với родина (quê hương).' },
    { t: 'type', q: 'Dịch: "Tôi có một chị gái." (dùng У меня́…)', a: 'у меня есть сестра', alt: ['у меня есть старшая сестра'], hint: 'Cấu trúc У меня есть + cách 1.' },
    { t: 'match', q: 'Nối:', pairs: [['ба́бушка', 'bà'], ['дя́дя', 'chú, cậu'], ['дочь', 'con gái'], ['врач', 'bác sĩ']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'у меня большая семья', a: 'у меня большая семья' }
  ]
};

/* ---------------------------------------------------------- BÀI 15 */
LESSON_DATA['a1-15'] = {
  level: 'a1',
  intro: 'Thứ, tháng, giờ giấc — thứ em cần để hẹn gặp, đặt lịch, và hiểu khi người ta nói "thứ Ba tuần sau". Bài này cũng cho em thấy các cách đã học quay lại làm việc thật.',
  blocks: [
    { t: 'h', text: 'Bảy ngày trong tuần' },
    { t: 'table', head: ['Thứ', 'Tiếng Nga', 'Vào thứ… (в + cách 4)'], rows: [
      ['Thứ hai', 'понеде́льник', 'в понеде́льник'],
      ['Thứ ba', 'вто́рник', 'во вто́рник'],
      ['Thứ tư', 'среда́', 'в сре́ду'],
      ['Thứ năm', 'четве́рг', 'в четве́рг'],
      ['Thứ sáu', 'пя́тница', 'в пя́тницу'],
      ['Thứ bảy', 'суббо́та', 'в суббо́ту'],
      ['Chủ nhật', 'воскресе́нье', 'в воскресе́нье']
    ]},
    { t: 'note', html: 'Ba từ giống cái (среда́, пя́тница, суббо́та) đổi đuôi thành <b>-у</b> vì đây là cách 4 — đúng quy tắc em học ở bài 7. Và <span class="ru">во вто́рник</span> dùng <b>во</b> chứ không phải <b>в</b>, chỉ vì hai phụ âm в-т đứng cạnh nhau khó đọc.' },
    { t: 'tip', html: 'Tên các thứ có logic đẹp: <span class="ru">вто́рник</span> từ <span class="ru">второ́й</span> (thứ hai), <span class="ru">четве́рг</span> từ <span class="ru">четы́ре</span> (bốn), <span class="ru">пя́тница</span> từ <span class="ru">пять</span> (năm). Còn <span class="ru">среда́</span> nghĩa là "ở giữa", và <span class="ru">воскресе́нье</span> nghĩa gốc là "sự phục sinh".' },
    { t: 'h', text: 'Mười hai tháng' },
    { t: 'words', items: [
      { ru: 'янва́рь', vn: 'tháng 1' }, { ru: 'февра́ль', vn: 'tháng 2' },
      { ru: 'март', vn: 'tháng 3' }, { ru: 'апре́ль', vn: 'tháng 4' },
      { ru: 'май', vn: 'tháng 5' }, { ru: 'ию́нь', vn: 'tháng 6' },
      { ru: 'ию́ль', vn: 'tháng 7' }, { ru: 'а́вгуст', vn: 'tháng 8' },
      { ru: 'сентя́брь', vn: 'tháng 9' }, { ru: 'октя́брь', vn: 'tháng 10' },
      { ru: 'ноя́брь', vn: 'tháng 11' }, { ru: 'дека́брь', vn: 'tháng 12' }
    ]},
    { t: 'p', html: 'Nói "vào tháng…" thì dùng <b>в + cách 6</b>: <span class="ru">в январе́, в ма́е, в сентябре́</span>. Để ý trọng âm nhảy về đuôi ở các tháng kết thúc bằng -брь.' },
    { t: 'h', text: 'Mấy giờ rồi?' },
    { t: 'words', items: [
      { ru: 'Кото́рый час?', vn: 'Mấy giờ rồi? (trang trọng)' },
      { ru: 'Ско́лько вре́мени?', vn: 'Mấy giờ rồi? (đời thường)' },
      { ru: 'Сейча́с час.', vn: 'Bây giờ 1 giờ.' },
      { ru: 'Сейча́с два часа́.', vn: 'Bây giờ 2 giờ.' },
      { ru: 'Сейча́с пять часо́в.', vn: 'Bây giờ 5 giờ.' },
      { ru: 'В во́семь часо́в', vn: 'Lúc 8 giờ' }
    ]},
    { t: 'warn', html: 'Lại là quy luật số đếm ở bài 12: <b>1 giờ</b> → <span class="ru">час</span>, <b>2–4 giờ</b> → <span class="ru">часа́</span>, <b>5 giờ trở lên</b> → <span class="ru">часо́в</span>. Cùng một từ, ba dạng. Nghe kỹ đuôi là biết mấy giờ ngay cả khi không nghe rõ con số.' },
    { t: 'h', text: 'Buổi trong ngày' },
    { t: 'words', items: [
      { ru: 'у́тром', vn: 'buổi sáng' },
      { ru: 'днём', vn: 'buổi trưa, ban ngày' },
      { ru: 'ве́чером', vn: 'buổi tối' },
      { ru: 'но́чью', vn: 'ban đêm' },
      { ru: 'сего́дня', vn: 'hôm nay' },
      { ru: 'за́втра', vn: 'ngày mai' },
      { ru: 'вчера́', vn: 'hôm qua' },
      { ru: 'на про́шлой неде́ле', vn: 'tuần trước' },
      { ru: 'на сле́дующей неде́ле', vn: 'tuần sau' }
    ]},
    { t: 'h', text: 'Hẹn gặp' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Когда́ у нас уро́к ру́сского языка́?', vn: 'Khi nào lớp tiếng Nga của chúng ta học?' },
      { who: 'Б', ru: 'В понеде́льник и в сре́ду, в де́сять часо́в.', vn: 'Thứ hai và thứ tư, lúc 10 giờ.' },
      { who: 'А', ru: 'А в пя́тницу?', vn: 'Còn thứ sáu?' },
      { who: 'Б', ru: 'В пя́тницу нет уро́ка. Мы отдыха́ем.', vn: 'Thứ sáu không có buổi học. Chúng ta nghỉ.' },
      { who: 'А', ru: 'Отли́чно! Тогда́ до понеде́льника.', vn: 'Tuyệt! Vậy hẹn gặp thứ hai nhé.' }
    ]},
    { t: 'note', html: 'Câu cuối dùng <span class="ru">до</span> + cách 2: <span class="ru">до понеде́льника</span> (cho đến thứ hai). Cùng kiểu với <span class="ru">до свида́ния</span> mà em học từ bài A0 — nghĩa đen là "cho đến lần gặp lại".' }
  ],
  vocab: [
    { ru: 'понеде́льник', vn: 'thứ hai' }, { ru: 'среда́', vn: 'thứ tư' }, { ru: 'пя́тница', vn: 'thứ sáu' },
    { ru: 'суббо́та', vn: 'thứ bảy' }, { ru: 'воскресе́нье', vn: 'chủ nhật' },
    { ru: 'янва́рь', vn: 'tháng 1' }, { ru: 'ию́нь', vn: 'tháng 6' }, { ru: 'сентя́брь', vn: 'tháng 9' },
    { ru: 'Кото́рый час?', vn: 'Mấy giờ rồi?' }, { ru: 'когда́', vn: 'khi nào' },
    { ru: 'у́тром', vn: 'buổi sáng' }, { ru: 'но́чью', vn: 'ban đêm' }, { ru: 'неде́ля', vn: 'tuần' }
  ],
  ex: [
    { t: 'choice', q: '"Vào thứ tư" nói là:', options: ['в среда́', 'в сре́ду', 'в среде́', 'во среда́'], a: 1, why: 'среда là giống cái nên ở cách 4 thành среду.' },
    { t: 'choice', q: 'Vì sao thứ ba lại là <span class="ru">во вто́рник</span> chứ không phải <span class="ru">в вто́рник</span>?', options: ['Vì вторник là giống cái', 'Vì hai phụ âm в-т cạnh nhau khó đọc', 'Vì đó là ngoại lệ ngữ pháp', 'Vì вторник bắt đầu bằng nguyên âm'], a: 1, why: 'Thuần lý do phát âm. Cùng kiểu với во Вьетнаме.' },
    { t: 'choice', q: '"Bây giờ 5 giờ" nói là:', options: ['Сейча́с пять час.', 'Сейча́с пять часа́.', 'Сейча́с пять часо́в.', 'Сейча́с пять часы́.'], a: 2, why: 'Từ 5 trở lên dùng cách 2 số nhiều: часов.' },
    { t: 'type', q: 'Điền: Уро́к в ___ (понеде́льник)', a: 'понедельник', alt: ['понеде́льник'], hint: 'Giống đực nên ở cách 4 giữ nguyên.' },
    { t: 'choice', q: '"Vào tháng chín" nói là:', options: ['в сентя́брь', 'в сентябре́', 'в сентября́', 'на сентя́брь'], a: 1, why: 'Tháng dùng в + cách 6: в сентябре, và trọng âm nhảy về đuôi.' },
    { t: 'match', q: 'Nối:', pairs: [['у́тром', 'buổi sáng'], ['ве́чером', 'buổi tối'], ['но́чью', 'ban đêm'], ['когда́', 'khi nào']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'который час', a: 'который час' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'в субботу', a: 'в субботу' }
  ]
};

/* ---------------------------------------------------------- BÀI 16 */
LESSON_DATA['a1-16'] = {
  level: 'a1',
  intro: '<b>Да́тельный паде́ж</b> (cách 3) trả lời câu hỏi "cho ai". Nhưng nó còn làm hai việc mà em dùng hằng ngày: nói <b>tuổi</b> và nói <b>cảm giác</b> — "tôi lạnh", "tôi thích cái này".',
  blocks: [
    { t: 'h', text: 'Đuôi của cách 3' },
    { t: 'table', head: ['Loại từ', 'Đuôi', 'Ví dụ'], rows: [
      ['Đực (phụ âm)', '-у', 'брат → бра́т<b>у</b>'],
      ['Đực (-й, -ь)', '-ю', 'музе́й → музе́<b>ю</b> · слова́рь → словар<b>ю́</b>'],
      ['Cái -а / -я', '-е', 'сестра́ → сестр<b>е́</b> · шко́ла → шко́л<b>е</b>'],
      ['Cái -ия', '-ии', 'Росси́я → Росси́<b>и</b>'],
      ['Cái -ь', '-и', 'тетра́дь → тетра́д<b>и</b>'],
      ['Trung', '-у / -ю', 'окно́ → окн<b>у́</b> · мо́ре → мо́р<b>ю</b>']
    ]},
    { t: 'tip', html: 'Đuôi giống cái ở cách 3 là <b>-е</b>, y hệt cách 6 (<span class="ru">сестре́</span>). Nghe thì dễ lẫn, nhưng phân biệt được bằng giới từ: cách 6 luôn có в / на / о đứng trước, cách 3 thì không.' },
    { t: 'h', text: 'Dùng 1 — Đưa, nói, gọi CHO AI' },
    { t: 'words', items: [
      { ru: 'Я даю́ кни́гу бра́ту.', vn: 'Tôi đưa sách cho anh trai.' },
      { ru: 'Он звони́т сестре́.', vn: 'Anh ấy gọi điện cho chị gái.' },
      { ru: 'Я пишу́ письмо́ дру́гу.', vn: 'Tôi viết thư cho bạn.' },
      { ru: 'Она́ помога́ет ма́ме.', vn: 'Cô ấy giúp mẹ.' },
      { ru: 'Преподава́тель объясня́ет студе́нтам.', vn: 'Thầy giảng cho các sinh viên.' }
    ]},
    { t: 'warn', html: 'Nhóm động từ này <b>bắt buộc</b> đi với cách 3, không có ngoại lệ: <span class="ru">дать, сказа́ть, показа́ть, помога́ть, звони́ть, писа́ть, объясня́ть</span>. Học động từ thì học luôn cách nó đòi — đây là cách chữa gốc rễ cho lỗi chọn đuôi bằng cảm tính.' },
    { t: 'h', text: 'Dùng 2 — Tuổi tác' },
    { t: 'p', html: 'Tiếng Nga không nói "tôi 25 tuổi" mà nói "<b>với tôi có 25 năm</b>". Người nói đứng ở cách 3:' },
    { t: 'table', head: ['Đại từ cách 3', 'Câu', 'Nghĩa'], rows: [
      ['мне', 'Мне два́дцать пять лет.', 'Tôi 25 tuổi.'],
      ['тебе́', 'Ско́лько тебе́ лет?', 'Cậu bao nhiêu tuổi?'],
      ['ему́ / ей', 'Ему́ три́дцать лет.', 'Anh ấy 30 tuổi.'],
      ['нам / вам / им', 'Ско́лько вам лет?', 'Ngài bao nhiêu tuổi? (lịch sự)']
    ]},
    { t: 'note', html: 'Từ chỉ "tuổi" cũng theo quy luật số đếm: <b>1</b> → <span class="ru">год</span>, <b>2–4</b> → <span class="ru">го́да</span>, <b>5 trở lên</b> → <span class="ru">лет</span>. Ví dụ: <span class="ru">два́дцать оди́н год · два́дцать два го́да · два́дцать пять лет</span>.' },
    { t: 'h', text: 'Dùng 3 — Cảm giác và sở thích' },
    { t: 'words', items: [
      { ru: 'Мне хо́лодно.', vn: 'Tôi lạnh.' },
      { ru: 'Мне жа́рко.', vn: 'Tôi nóng.' },
      { ru: 'Мне интере́сно.', vn: 'Tôi thấy hay.' },
      { ru: 'Мне тру́дно.', vn: 'Tôi thấy khó.' },
      { ru: 'Мне нра́вится ру́сский язы́к.', vn: 'Tôi thích tiếng Nga.' },
      { ru: 'Ей нра́вится э́та пе́сня.', vn: 'Cô ấy thích bài hát này.' }
    ]},
    { t: 'warn', html: '<span class="ru">нра́виться</span> hoạt động ngược với tiếng Việt. Câu <span class="ru">Мне нра́вится кни́га</span> dịch sát là "<b>quyển sách làm vừa lòng tôi</b>" — nên chủ ngữ là <b>quyển sách</b>, còn người thích thì ở cách 3. Vì thế nếu thích nhiều thứ thì động từ đổi: <span class="ru">Мне нра́вятся э́ти кни́ги</span>.' },
    { t: 'h', text: 'Dùng 4 — Giới từ К (đến chỗ ai)' },
    { t: 'words', items: [
      { ru: 'Я иду́ к врачу́.', vn: 'Tôi đi đến chỗ bác sĩ.' },
      { ru: 'Приходи́ ко мне!', vn: 'Đến chỗ tớ chơi đi!' },
      { ru: 'Он е́дет к роди́телям.', vn: 'Anh ấy về chỗ bố mẹ.' }
    ]},
    { t: 'tip', html: 'Phân biệt hai kiểu "đi đâu": đến một <b>nơi chốn</b> thì dùng <span class="ru">в / на</span> + cách 4 (<span class="ru">в шко́лу</span>); đến chỗ một <b>con người</b> thì dùng <span class="ru">к</span> + cách 3 (<span class="ru">к врачу́</span>).' }
  ],
  vocab: [
    { ru: 'дать', vn: 'đưa, cho' }, { ru: 'помога́ть', vn: 'giúp đỡ' }, { ru: 'писа́ть', vn: 'viết' },
    { ru: 'объясня́ть', vn: 'giải thích' }, { ru: 'нра́виться', vn: 'làm vừa lòng, thích' },
    { ru: 'мне', vn: 'với tôi, cho tôi' }, { ru: 'хо́лодно', vn: 'lạnh' }, { ru: 'жа́рко', vn: 'nóng' },
    { ru: 'тру́дно', vn: 'khó' }, { ru: 'год', vn: 'năm, tuổi' }, { ru: 'лет', vn: 'tuổi (từ 5 trở lên)' }
  ],
  ex: [
    { t: 'type', q: 'Điền cách 3: Я звоню́ ___ (сестра́)', a: 'сестре', alt: ['сестре́'], hint: 'Giống cái ở cách 3 lấy đuôi -е.' },
    { t: 'type', q: 'Điền cách 3: Он пи́шет письмо́ ___ (брат)', a: 'брату', alt: ['бра́ту'], hint: 'Giống đực lấy đuôi -у.' },
    { t: 'choice', q: '"Tôi 25 tuổi" nói là:', options: ['Я два́дцать пять лет.', 'Мне два́дцать пять лет.', 'Мне два́дцать пять год.', 'У меня́ два́дцать пять лет.'], a: 1, why: 'Người nói đứng ở cách 3 (мне), và 25 kết thúc bằng 5 nên dùng лет.' },
    { t: 'choice', q: 'Trong câu <span class="ru">Мне нра́вится кни́га</span>, chủ ngữ là:', options: ['мне', 'кни́га', 'нра́вится', 'không có chủ ngữ'], a: 1, why: 'Nghĩa đen là "quyển sách làm vừa lòng tôi" — sách mới là chủ ngữ, nên nếu nhiều sách thì thành нравятся.' },
    { t: 'choice', q: '"Tôi đi đến chỗ bác sĩ" dùng giới từ nào?', options: ['в + cách 4', 'на + cách 4', 'к + cách 3', 'у + cách 2'], a: 2, why: 'Đến chỗ một con người thì dùng к + cách 3: к врачу.' },
    { t: 'type', q: 'Điền: Ско́лько ___ лет? (hỏi "cậu bao nhiêu tuổi")', a: 'тебе', alt: ['тебе́'], hint: 'Dạng cách 3 của ты.' },
    { t: 'match', q: 'Nối:', pairs: [['хо́лодно', 'lạnh'], ['жа́рко', 'nóng'], ['тру́дно', 'khó'], ['помога́ть', 'giúp đỡ']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'мне нравится русский язык', a: 'мне нравится русский язык' }
  ]
};

/* ---------------------------------------------------------- BÀI 17 */
LESSON_DATA['a1-17'] = {
  level: 'a1',
  intro: 'Cách cuối cùng em học ở A1: <b>твори́тельный паде́ж</b> (cách 5). Tên nó đến từ chữ "творить" — tạo ra, làm — vì nghĩa gốc là <b>công cụ để làm việc gì</b>. Nhưng công dụng dùng nhiều nhất lại là "cùng với ai".',
  blocks: [
    { t: 'h', text: 'Đuôi của cách 5' },
    { t: 'table', head: ['Loại từ', 'Đuôi', 'Ví dụ'], rows: [
      ['Đực (phụ âm)', '-ом', 'брат → бра́т<b>ом</b> · стол → стол<b>о́м</b>'],
      ['Đực (-й, -ь)', '-ем / -ём', 'музе́й → музе́<b>ем</b> · слова́рь → словар<b>ём</b>'],
      ['Cái -а', '-ой', 'сестра́ → сестр<b>о́й</b> · кни́га → кни́г<b>ой</b>'],
      ['Cái -я / -ия', '-ей', 'неде́ля → неде́л<b>ей</b> · Росси́я → Росси́<b>ей</b>'],
      ['Cái -ь', '-ью', 'тетра́дь → тетра́д<b>ью</b>'],
      ['Trung', '-ом / -ем', 'окно́ → окн<b>о́м</b> · мо́ре → мо́р<b>ем</b>']
    ]},
    { t: 'h', text: 'Dùng 1 — Cùng với ai, cùng với cái gì' },
    { t: 'words', items: [
      { ru: 'Я иду́ с бра́том.', vn: 'Tôi đi cùng anh trai.' },
      { ru: 'Она́ говори́т с преподава́телем.', vn: 'Cô ấy nói chuyện với thầy giáo.' },
      { ru: 'Ко́фе с молоко́м, пожа́луйста.', vn: 'Cho tôi cà phê sữa.' },
      { ru: 'Чай с са́харом', vn: 'trà có đường' },
      { ru: 'Мы с тобо́й', vn: 'tôi với cậu' }
    ]},
    { t: 'table', head: ['Đại từ', 'Đi với с'], rows: [
      ['я', 'со мной'], ['ты', 'с тобо́й'], ['он / она́', 'с ним / с ней'],
      ['мы / вы / они́', 'с на́ми / с ва́ми / с ни́ми']
    ]},
    { t: 'note', html: 'Nhớ ở bài 13: <span class="ru">без са́хара</span> (không đường) dùng cách 2, còn <span class="ru">с са́харом</span> (có đường) dùng cách 5. Hai câu gọi đồ uống, hai cách khác nhau — gọi cà phê ở Nga là ôn được cả hai.' },
    { t: 'h', text: 'Dùng 2 — Bằng công cụ gì' },
    { t: 'words', items: [
      { ru: 'Я пишу́ ру́чкой.', vn: 'Tôi viết bằng bút.' },
      { ru: 'Мы еди́м ло́жкой.', vn: 'Chúng tôi ăn bằng thìa.' },
      { ru: 'Он рабо́тает рука́ми.', vn: 'Anh ấy làm việc bằng tay.' }
    ]},
    { t: 'tip', html: 'Ở đây <b>không có giới từ</b>. Tiếng Việt cần chữ "bằng", tiếng Nga chỉ cần đổi đuôi. Người Việt hay thêm thừa một giới từ vào — nhớ là công cụ thì để trần.' },
    { t: 'h', text: 'Dùng 3 — Nghề nghiệp và trở thành' },
    { t: 'words', items: [
      { ru: 'Он рабо́тает врачо́м.', vn: 'Anh ấy làm bác sĩ.' },
      { ru: 'Она́ рабо́тает учи́тельницей.', vn: 'Cô ấy làm giáo viên.' },
      { ru: 'Я хочу́ стать инжене́ром.', vn: 'Tôi muốn trở thành kỹ sư.' },
      { ru: 'Он был студе́нтом.', vn: 'Anh ấy đã từng là sinh viên.' },
      { ru: 'Я занима́юсь иссле́дованием.', vn: 'Tôi làm nghiên cứu.' }
    ]},
    { t: 'warn', html: 'So sánh kỹ hai câu: <span class="ru">Он врач</span> (Anh ấy <b>là</b> bác sĩ — nói về danh tính, cách 1) và <span class="ru">Он рабо́тает врачо́м</span> (Anh ấy <b>làm nghề</b> bác sĩ — nói về công việc, cách 5). Động từ <span class="ru">рабо́тать, стать, быть</span> ở quá khứ và <span class="ru">занима́ться</span> đều kéo theo cách 5.' },
    { t: 'h', text: 'Dùng 4 — Mùa và buổi trong ngày' },
    { t: 'p', html: 'Những từ chỉ thời gian em đã học ở bài 15 thực ra <b>chính là cách 5</b> của danh từ:' },
    { t: 'table', head: ['Danh từ', 'Cách 5 = trạng từ', 'Nghĩa'], rows: [
      ['у́тро', 'у́тр<b>ом</b>', 'vào buổi sáng'],
      ['день', 'дн<b>ём</b>', 'vào ban ngày'],
      ['ве́чер', 'ве́чер<b>ом</b>', 'vào buổi tối'],
      ['ночь', 'но́ч<b>ью</b>', 'vào ban đêm'],
      ['зима́', 'зим<b>о́й</b>', 'vào mùa đông'],
      ['ле́то', 'ле́т<b>ом</b>', 'vào mùa hè'],
      ['весна́', 'весн<b>о́й</b>', 'vào mùa xuân'],
      ['о́сень', 'о́сен<b>ью</b>', 'vào mùa thu']
    ]},
    { t: 'tip', html: 'Biết điều này thì em không phải học thuộc tám từ rời rạc nữa — chỉ cần nhớ danh từ gốc rồi đặt vào cách 5. Đây là kiểu tiết kiệm trí nhớ mà tiếng Nga thưởng cho người học chịu tìm quy luật.' }
  ],
  vocab: [
    { ru: 'с', vn: 'cùng với' }, { ru: 'ло́жка', vn: 'cái thìa' }, { ru: 'стать', vn: 'trở thành' },
    { ru: 'занима́ться', vn: 'làm, theo đuổi (một việc)' }, { ru: 'иссле́дование', vn: 'nghiên cứu' },
    { ru: 'зимо́й', vn: 'vào mùa đông' }, { ru: 'ле́том', vn: 'vào mùa hè' },
    { ru: 'весно́й', vn: 'vào mùa xuân' }, { ru: 'о́сенью', vn: 'vào mùa thu' },
    { ru: 'молоко́', vn: 'sữa' }
  ],
  ex: [
    { t: 'type', q: 'Điền cách 5: Я иду́ с ___ (брат)', a: 'братом', alt: ['бра́том'], hint: 'Giống đực lấy đuôi -ом.' },
    { t: 'type', q: 'Điền cách 5: Ко́фе с ___ (молоко́)', a: 'молоком', alt: ['молоко́м'], hint: 'Giống trung lấy đuôi -ом.' },
    { t: 'choice', q: '"Tôi viết bằng bút" nói là:', options: ['Я пишу́ с ру́чкой.', 'Я пишу́ ру́чкой.', 'Я пишу́ ру́чку.', 'Я пишу́ в ру́чке.'], a: 1, why: 'Công cụ thì để trần, không thêm giới từ. с chỉ dùng cho "cùng với ai".' },
    { t: 'choice', q: 'Câu nào nói về <b>nghề nghiệp</b> chứ không phải danh tính?', options: ['Он врач.', 'Он рабо́тает врачо́м.', 'Э́то врач.', 'Врач здесь.'], a: 1, why: 'работать + cách 5 nói về công việc đang làm. Он врач (cách 1) nói về danh tính.' },
    { t: 'choice', q: '<span class="ru ru-big">ле́том</span> thực chất là dạng gì của <span class="ru">ле́то</span>?', options: ['Số nhiều', 'Cách 2', 'Cách 5', 'Một trạng từ riêng biệt'], a: 2, why: 'Là cách 5 của лето. Cả tám từ chỉ mùa và buổi đều theo quy luật này.' },
    { t: 'type', q: 'Điền: Я хочу́ стать ___ (инжене́р)', a: 'инженером', alt: ['инжене́ром'], hint: 'стать đòi cách 5.' },
    { t: 'match', q: 'Nối:', pairs: [['зимо́й', 'mùa đông'], ['ле́том', 'mùa hè'], ['но́чью', 'ban đêm'], ['ло́жка', 'cái thìa']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'кофе с молоком', a: 'кофе с молоком' }
  ]
};

/* ---------------------------------------------------------- BÀI 18 */
LESSON_DATA['a1-18'] = {
  level: 'a1',
  intro: 'Đến giờ câu của em vẫn trần trụi: "nhà", "sách", "thành phố". Bài này cho em <b>tính từ</b> — để nói nhà <i>mới</i>, sách <i>hay</i>, thành phố <i>đẹp</i>. Quy tắc chỉ có một: tính từ phải <b>hoà hợp</b> với danh từ nó bổ nghĩa.',
  blocks: [
    { t: 'h', text: 'Bốn đuôi cơ bản' },
    { t: 'table', head: ['Đi với', 'Đuôi', 'но́вый (mới)', 'Câu hỏi'], rows: [
      ['Giống đực', '-ый / -ий / -о́й', 'но́в<b>ый</b> дом', 'Како́й?'],
      ['Giống cái', '-ая / -яя', 'но́в<b>ая</b> кни́га', 'Кака́я?'],
      ['Giống trung', '-ое / -ее', 'но́в<b>ое</b> окно́', 'Како́е?'],
      ['Số nhiều', '-ые / -ие', 'но́в<b>ые</b> дома́', 'Каки́е?']
    ]},
    { t: 'p', html: 'Tính từ luôn đứng <b>trước</b> danh từ, và đổi đuôi theo danh từ đó — không phải theo người nói.' },
    { t: 'h', text: 'Ba kiểu đuôi giống đực' },
    { t: 'table', head: ['Kiểu', 'Khi nào', 'Ví dụ'], rows: [
      ['-ый', 'Mặc định', 'но́вый, ста́рый, интере́сный'],
      ['-ий', 'Sau <b>г к х ж ч ш щ</b> (quy tắc 7 chữ)', 'ру́сский, хоро́ший, ма́ленький'],
      ['-о́й', 'Khi trọng âm rơi vào đuôi', 'большо́й, молодо́й, плохо́й']
    ]},
    { t: 'tip', html: 'Lại là quy tắc 7 chữ, lần thứ ba trong cấp A1 — ở số nhiều (bài 4), ở cách 2 (bài 13), và bây giờ ở tính từ. Đến giờ chắc em không cần nhìn lại bảng nữa.' },
    { t: 'h', text: 'Những tính từ dùng nhiều nhất' },
    { t: 'words', items: [
      { ru: 'но́вый', vn: 'mới' }, { ru: 'ста́рый', vn: 'cũ, già' },
      { ru: 'большо́й', vn: 'to, lớn' }, { ru: 'ма́ленький', vn: 'nhỏ' },
      { ru: 'хоро́ший', vn: 'tốt' }, { ru: 'плохо́й', vn: 'tệ' },
      { ru: 'краси́вый', vn: 'đẹp' }, { ru: 'интере́сный', vn: 'thú vị' },
      { ru: 'тру́дный', vn: 'khó' }, { ru: 'лёгкий', vn: 'dễ, nhẹ' },
      { ru: 'молодо́й', vn: 'trẻ' }, { ru: 'ру́сский', vn: 'thuộc về Nga' },
      { ru: 'вьетна́мский', vn: 'thuộc về Việt Nam' }, { ru: 'дорого́й', vn: 'đắt; thân mến' }
    ]},
    { t: 'h', text: 'Ghép thành cụm' },
    { t: 'words', items: [
      { ru: 'большо́й го́род', vn: 'thành phố lớn' },
      { ru: 'больша́я семья́', vn: 'gia đình đông người' },
      { ru: 'большо́е окно́', vn: 'cửa sổ lớn' },
      { ru: 'больши́е города́', vn: 'những thành phố lớn' },
      { ru: 'хоро́шая пого́да', vn: 'thời tiết đẹp' },
      { ru: 'интере́сная кни́га', vn: 'quyển sách hay' },
      { ru: 'ру́сский язы́к', vn: 'tiếng Nga' },
      { ru: 'вьетна́мская ку́хня', vn: 'ẩm thực Việt Nam' }
    ]},
    { t: 'h', text: 'Tính từ cũng đổi theo cách' },
    { t: 'p', html: 'Danh từ đổi đuôi theo cách thì tính từ đi kèm cũng phải đổi theo. Ở A1 em chỉ cần nắm một trường hợp hay dùng nhất — <b>cách 4 của giống cái</b>:' },
    { t: 'words', items: [
      { ru: 'Э́то интере́сная кни́га.', vn: 'Đây là quyển sách hay. (cách 1)' },
      { ru: 'Я чита́ю интере́сную кни́гу.', vn: 'Tôi đang đọc quyển sách hay. (cách 4)' },
      { ru: 'Э́то больша́я ко́мната.', vn: 'Đây là căn phòng lớn.' },
      { ru: 'Я ви́жу большу́ю ко́мнату.', vn: 'Tôi thấy căn phòng lớn.' }
    ]},
    { t: 'note', html: 'Đuôi giống cái đi thành cặp: danh từ <b>-а → -у</b> thì tính từ <b>-ая → -ую</b>. Nghe được nhịp "-ую -у" là em biết mình nói đúng.' },
    { t: 'h', text: 'Hỏi "thế nào"' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Кака́я сего́дня пого́да?', vn: 'Hôm nay thời tiết thế nào?' },
      { who: 'Б', ru: 'Хоро́шая, но хо́лодная.', vn: 'Đẹp, nhưng lạnh.' },
      { who: 'А', ru: 'Како́й у тебя́ но́вый дом?', vn: 'Nhà mới của cậu thế nào?' },
      { who: 'Б', ru: 'Небольшо́й, но о́чень краси́вый.', vn: 'Không to lắm, nhưng rất đẹp.' }
    ]},
    { t: 'tip', html: 'Thêm <span class="ru">не-</span> vào trước tính từ là được nghĩa ngược lại, y như tiếng Việt thêm "không": <span class="ru">небольшо́й</span> (không to), <span class="ru">нетру́дный</span> (không khó), <span class="ru">неинтере́сный</span> (không hay). Một mẹo nhỏ mà nhân đôi vốn tính từ của em.' }
  ],
  vocab: [
    { ru: 'но́вый', vn: 'mới' }, { ru: 'ста́рый', vn: 'cũ, già' }, { ru: 'большо́й', vn: 'to, lớn' },
    { ru: 'ма́ленький', vn: 'nhỏ' }, { ru: 'хоро́ший', vn: 'tốt' }, { ru: 'краси́вый', vn: 'đẹp' },
    { ru: 'интере́сный', vn: 'thú vị' }, { ru: 'тру́дный', vn: 'khó' }, { ru: 'лёгкий', vn: 'dễ' },
    { ru: 'пого́да', vn: 'thời tiết' }, { ru: 'ку́хня', vn: 'bếp; ẩm thực' }, { ru: 'како́й', vn: 'thế nào, loại nào' }
  ],
  ex: [
    { t: 'type', q: 'Điền đuôi: но́в___ кни́га', a: 'новая', alt: ['но́вая', 'ая'], hint: 'книга là giống cái.' },
    { t: 'choice', q: '"Thành phố lớn" nói là:', options: ['больша́я го́род', 'большо́й го́род', 'большо́е го́род', 'больши́е го́род'], a: 1, why: 'город là giống đực, và большой có trọng âm ở đuôi nên lấy dạng -ой.' },
    { t: 'choice', q: 'Vì sao <span class="ru">ру́сский</span> lấy đuôi -ий mà không phải -ый?', options: ['Vì nó là từ mượn', 'Vì trước đuôi là chữ к, thuộc quy tắc 7 chữ', 'Vì nó chỉ quốc tịch', 'Vì trọng âm ở đầu'], a: 1, why: 'Sau г к х ж ч ш щ thì viết и chứ không viết ы. Cùng quy tắc với книги ở bài 4.' },
    { t: 'type', q: 'Điền: Я чита́ю интере́сн___ кни́гу.', a: 'интересную', alt: ['интере́сную', 'ую'], hint: 'Danh từ ở cách 4 (-у) thì tính từ cũng phải theo (-ую).' },
    { t: 'choice', q: 'Tính từ đổi đuôi theo cái gì?', options: ['Theo người nói', 'Theo danh từ nó bổ nghĩa', 'Theo động từ trong câu', 'Không đổi'], a: 1, why: 'Tính từ hoà hợp với danh từ về giống, số và cách.' },
    { t: 'choice', q: '<span class="ru ru-big">небольшо́й</span> nghĩa là:', options: ['rất lớn', 'không to lắm', 'quá nhỏ', 'mới'], a: 1, why: 'Thêm не- vào trước tính từ được nghĩa ngược lại.' },
    { t: 'match', q: 'Nối:', pairs: [['ста́рый', 'cũ, già'], ['краси́вый', 'đẹp'], ['лёгкий', 'dễ'], ['пого́да', 'thời tiết']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'интересная книга', a: 'интересная книга' }
  ]
};

/* ---------------------------------------------------------- BÀI 19 */
LESSON_DATA['a1-19'] = {
  level: 'a1',
  intro: 'Từ bài này trở đi là <b>tiếng Nga dùng được ngay</b>. Mua đồ ăn, gọi món, hỏi giá, trả tiền — những câu em cần trong ngày đầu tiên đặt chân xuống nước Nga.',
  blocks: [
    { t: 'h', text: 'Chỗ mua bán' },
    { t: 'words', items: [
      { ru: 'магази́н', vn: 'cửa hàng' }, { ru: 'суперма́ркет', vn: 'siêu thị' },
      { ru: 'ры́нок', vn: 'chợ' }, { ru: 'апте́ка', vn: 'hiệu thuốc' },
      { ru: 'кафе́', vn: 'quán cà phê (không đổi đuôi)' }, { ru: 'рестора́н', vn: 'nhà hàng' },
      { ru: 'столо́вая', vn: 'nhà ăn, căng tin' }, { ru: 'ка́сса', vn: 'quầy thu ngân' }
    ]},
    { t: 'h', text: 'Đồ ăn thức uống' },
    { t: 'words', items: [
      { ru: 'хлеб', vn: 'bánh mì' }, { ru: 'молоко́', vn: 'sữa' },
      { ru: 'мя́со', vn: 'thịt' }, { ru: 'ры́ба', vn: 'cá' },
      { ru: 'о́вощи', vn: 'rau củ' }, { ru: 'фру́кты', vn: 'hoa quả' },
      { ru: 'я́йца', vn: 'trứng' }, { ru: 'сыр', vn: 'phô mai' },
      { ru: 'ма́сло', vn: 'bơ, dầu' }, { ru: 'рис', vn: 'gạo, cơm' },
      { ru: 'карто́шка', vn: 'khoai tây' }, { ru: 'суп', vn: 'súp, canh' },
      { ru: 'сала́т', vn: 'sa lát' }, { ru: 'вода́', vn: 'nước' },
      { ru: 'сок', vn: 'nước ép' }, { ru: 'ко́фе', vn: 'cà phê (không đổi đuôi)' }
    ]},
    { t: 'h', text: 'Trong cửa hàng' },
    { t: 'dialog', lines: [
      { who: 'О', ru: 'Здра́вствуйте! У вас есть хлеб?', vn: 'Xin chào! Ở đây có bánh mì không ạ?' },
      { who: 'П', ru: 'Да, коне́чно. Како́й вы хоти́те?', vn: 'Có chứ. Chị muốn loại nào?' },
      { who: 'О', ru: 'Да́йте, пожа́луйста, чёрный хлеб.', vn: 'Cho tôi bánh mì đen ạ.' },
      { who: 'П', ru: 'Что-нибу́дь ещё?', vn: 'Còn gì nữa không ạ?' },
      { who: 'О', ru: 'Ещё молоко́ и два ки́ло я́блок. Ско́лько всё сто́ит?', vn: 'Thêm sữa và hai cân táo. Tất cả bao nhiêu tiền ạ?' },
      { who: 'П', ru: 'Три́ста пятьдеся́т рубле́й.', vn: '350 rúp.' },
      { who: 'О', ru: 'Вот, пожа́луйста. Спаси́бо!', vn: 'Đây ạ. Cảm ơn!' }
    ]},
    { t: 'note', html: '<span class="ru">Да́йте, пожа́луйста…</span> là câu vạn năng khi mua bán — nghĩa là "làm ơn đưa cho tôi". Sau nó là <b>cách 4</b>: <span class="ru">да́йте хлеб</span>, <span class="ru">да́йте во́ду</span>. Thể mệnh lệnh em sẽ học kỹ ở bài 22, giờ cứ nhớ nguyên cụm.' },
    { t: 'h', text: 'Trong quán ăn' },
    { t: 'dialog', lines: [
      { who: 'О', ru: 'Меню́, пожа́луйста.', vn: 'Cho tôi xin thực đơn.' },
      { who: 'К', ru: 'Пожа́луйста. Что вы бу́дете зака́зывать?', vn: 'Đây ạ. Chị dùng gì ạ?' },
      { who: 'О', ru: 'Я бу́ду суп и сала́т. И чай без са́хара.', vn: 'Cho tôi súp và sa lát. Với trà không đường.' },
      { who: 'К', ru: 'Хорошо́. Прия́тного аппети́та!', vn: 'Vâng ạ. Chúc chị ngon miệng!' },
      { who: 'О', ru: 'Спаси́бо. Счёт, пожа́луйста.', vn: 'Cảm ơn. Cho tôi thanh toán ạ.' }
    ]},
    { t: 'tip', html: 'Để ý <span class="ru">Я бу́ду суп</span> — đúng là thì tương lai ở bài 11, nhưng trong quán ăn nó có nghĩa "tôi gọi món này". Người Nga gọi món bằng đúng cấu trúc đó, không cần động từ nào khác.' },
    { t: 'h', text: 'Câu cần thuộc lòng' },
    { t: 'words', items: [
      { ru: 'Ско́лько сто́ит?', vn: 'Bao nhiêu tiền?' },
      { ru: 'У вас есть…?', vn: 'Ở đây có… không?' },
      { ru: 'Да́йте, пожа́луйста…', vn: 'Làm ơn cho tôi…' },
      { ru: 'Я хочу́ купи́ть…', vn: 'Tôi muốn mua…' },
      { ru: 'Э́то до́рого.', vn: 'Cái này đắt quá.' },
      { ru: 'Мо́жно посмотре́ть?', vn: 'Tôi xem được không?' },
      { ru: 'Я про́сто смотрю́.', vn: 'Tôi chỉ xem thôi.' },
      { ru: 'Счёт, пожа́луйста.', vn: 'Cho tôi thanh toán.' },
      { ru: 'О́чень вку́сно!', vn: 'Ngon quá!' }
    ]},
    { t: 'warn', html: 'Ba từ <b>không bao giờ đổi đuôi</b> dù đứng ở cách nào: <span class="ru">ко́фе, кафе́, метро́</span> (và cả <span class="ru">такси́</span>). Chúng là từ mượn nước ngoài nên tiếng Nga cho miễn. Nói <span class="ru">в кафе́</span>, <span class="ru">с ко́фе</span> — y nguyên.' }
  ],
  vocab: [
    { ru: 'магази́н', vn: 'cửa hàng' }, { ru: 'ры́нок', vn: 'chợ' }, { ru: 'кафе́', vn: 'quán cà phê' },
    { ru: 'хлеб', vn: 'bánh mì' }, { ru: 'мя́со', vn: 'thịt' }, { ru: 'ры́ба', vn: 'cá' },
    { ru: 'о́вощи', vn: 'rau củ' }, { ru: 'фру́кты', vn: 'hoa quả' }, { ru: 'сыр', vn: 'phô mai' },
    { ru: 'счёт', vn: 'hoá đơn' }, { ru: 'меню́', vn: 'thực đơn' }, { ru: 'вку́сно', vn: 'ngon' },
    { ru: 'купи́ть', vn: 'mua' }, { ru: 'Прия́тного аппети́та!', vn: 'Chúc ngon miệng!' }
  ],
  ex: [
    { t: 'choice', q: 'Muốn hỏi "Ở đây có bánh mì không?" em nói:', options: ['Где хлеб?', 'У вас есть хлеб?', 'Э́то хлеб?', 'Ско́лько хлеб?'], a: 1, why: 'У вас есть…? là câu hỏi có sẵn hàng hay không, dùng ở mọi cửa hàng.' },
    { t: 'type', q: 'Xin thanh toán trong nhà hàng: ___, пожа́луйста.', a: 'счёт', alt: ['счет'], hint: 'Từ chỉ hoá đơn.' },
    { t: 'choice', q: 'Sau <span class="ru">Да́йте, пожа́луйста</span> thì danh từ ở cách nào?', options: ['Cách 1', 'Cách 2', 'Cách 4', 'Cách 6'], a: 2, why: 'Đó là tân ngữ trực tiếp nên dùng cách 4: дайте воду, дайте книгу.' },
    { t: 'choice', q: 'Từ nào <b>không bao giờ đổi đuôi</b>?', options: ['хлеб', 'ко́фе', 'вода́', 'магази́н'], a: 1, why: 'кофе, кафе, метро, такси là từ mượn nên giữ nguyên ở mọi cách.' },
    { t: 'choice', q: 'Trong quán ăn, "Cho tôi súp" nói tự nhiên nhất là:', options: ['Я хочу́ суп.', 'Я бу́ду суп.', 'Я ем суп.', 'Суп мне.'], a: 1, why: 'Người Nga gọi món bằng “Я буду…” — đúng cấu trúc thì tương lai ở bài 11.' },
    { t: 'match', q: 'Nối:', pairs: [['ры́нок', 'chợ'], ['апте́ка', 'hiệu thuốc'], ['о́вощи', 'rau củ'], ['вку́сно', 'ngon']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'сколько стоит', a: 'сколько стоит' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'дайте пожалуйста', a: 'дайте пожалуйста' }
  ]
};

/* ---------------------------------------------------------- BÀI 20 */
LESSON_DATA['a1-20'] = {
  level: 'a1',
  intro: 'Lạc đường ở một thành phố Nga mà không hỏi được là chuyện đáng sợ. Bài này cho em đủ chữ để hỏi đường, hiểu câu trả lời, và đi lại bằng mọi phương tiện.',
  blocks: [
    { t: 'h', text: 'Câu hỏi mở đường' },
    { t: 'words', items: [
      { ru: 'Скажи́те, пожа́луйста…', vn: 'Làm ơn cho hỏi… (luôn mở đầu bằng câu này)' },
      { ru: 'Где нахо́дится вокза́л?', vn: 'Nhà ga ở chỗ nào ạ?' },
      { ru: 'Как пройти́ до метро́?', vn: 'Đi bộ đến ga tàu điện ngầm thế nào ạ?' },
      { ru: 'Как прое́хать до це́нтра?', vn: 'Đi xe đến trung tâm thế nào ạ?' },
      { ru: 'Э́то далеко́?', vn: 'Có xa không ạ?' },
      { ru: 'Я заблуди́лся. / Я заблуди́лась.', vn: 'Tôi bị lạc. (nam / nữ)' }
    ]},
    { t: 'note', html: 'Phân biệt <span class="ru">пройти́</span> (đi bộ đến) và <span class="ru">прое́хать</span> (đi bằng xe đến). Hỏi sai thì người ta chỉ đường sai — chỉ cho em đi bộ 5 cây số chẳng hạn.' },
    { t: 'h', text: 'Hiểu câu trả lời' },
    { t: 'words', items: [
      { ru: 'пря́мо', vn: 'thẳng' }, { ru: 'напра́во', vn: 'sang phải' },
      { ru: 'нале́во', vn: 'sang trái' }, { ru: 'наза́д', vn: 'quay lại' },
      { ru: 'ря́дом', vn: 'ngay cạnh' }, { ru: 'бли́зко', vn: 'gần' },
      { ru: 'далеко́', vn: 'xa' }, { ru: 'напро́тив', vn: 'đối diện' },
      { ru: 'на углу́', vn: 'ở góc phố' }, { ru: 'че́рез доро́гу', vn: 'bên kia đường' }
    ]},
    { t: 'dialog', lines: [
      { who: 'О', ru: 'Скажи́те, пожа́луйста, как пройти́ до апте́ки?', vn: 'Làm ơn cho hỏi đi bộ đến hiệu thuốc thế nào ạ?' },
      { who: 'Н', ru: 'Иди́те пря́мо, пото́м напра́во. Апте́ка бу́дет на углу́.', vn: 'Chị đi thẳng, rồi rẽ phải. Hiệu thuốc ở ngay góc phố.' },
      { who: 'О', ru: 'Э́то далеко́?', vn: 'Có xa không ạ?' },
      { who: 'Н', ru: 'Нет, пять мину́т пешко́м.', vn: 'Không, đi bộ năm phút.' },
      { who: 'О', ru: 'Большо́е спаси́бо!', vn: 'Cảm ơn chị nhiều!' }
    ]},
    { t: 'h', text: 'Phương tiện — dùng НА + cách 6' },
    { t: 'table', head: ['Phương tiện', 'Đi bằng…', 'Ghi chú'], rows: [
      ['авто́бус', 'на авто́бус<b>е</b>', 'xe buýt'],
      ['метро́', 'на метро́', 'không đổi đuôi'],
      ['такси́', 'на такси́', 'không đổi đuôi'],
      ['маши́на', 'на маши́н<b>е</b>', 'ô tô riêng'],
      ['по́езд', 'на по́езд<b>е</b>', 'tàu hoả'],
      ['самолёт', 'на самолёт<b>е</b>', 'máy bay'],
      ['трамва́й', 'на трамва́<b>е</b>', 'tàu điện'],
      ['—', 'пешко́м', 'đi bộ (không có giới từ)']
    ]},
    { t: 'warn', html: 'Người Việt hay nói <span class="ru">с авто́бусом</span> vì tiếng Việt là "bằng xe buýt" — nghe như công cụ ở cách 5. Nhưng phương tiện đi lại dùng <b>на + cách 6</b>. Riêng <span class="ru">пешко́м</span> đứng trần, không giới từ.' },
    { t: 'h', text: 'Từ về thành phố' },
    { t: 'words', items: [
      { ru: 'у́лица', vn: 'đường phố' }, { ru: 'пло́щадь', vn: 'quảng trường' },
      { ru: 'остано́вка', vn: 'bến (xe buýt)' }, { ru: 'ста́нция', vn: 'ga (tàu điện ngầm)' },
      { ru: 'вокза́л', vn: 'nhà ga lớn' }, { ru: 'аэропо́рт', vn: 'sân bay' },
      { ru: 'мост', vn: 'cây cầu' }, { ru: 'светофо́р', vn: 'đèn giao thông' },
      { ru: 'перекрёсток', vn: 'ngã tư' }, { ru: 'вы́ход', vn: 'lối ra' },
      { ru: 'вход', vn: 'lối vào' }, { ru: 'биле́т', vn: 'vé' }
    ]},
    { t: 'tip', html: 'Hai từ trên biển báo mà em phải phân biệt ngay từ hôm đầu: <span class="ru"><b>ВХОД</b></span> là lối vào, <span class="ru"><b>ВЫХОД</b></span> là lối ra. Chỉ khác một chữ, mà đi nhầm là ngược hẳn hướng.' }
  ],
  vocab: [
    { ru: 'Скажи́те, пожа́луйста', vn: 'Làm ơn cho hỏi' }, { ru: 'пря́мо', vn: 'thẳng' },
    { ru: 'напра́во', vn: 'sang phải' }, { ru: 'нале́во', vn: 'sang trái' },
    { ru: 'далеко́', vn: 'xa' }, { ru: 'бли́зко', vn: 'gần' }, { ru: 'пешко́м', vn: 'đi bộ' },
    { ru: 'авто́бус', vn: 'xe buýt' }, { ru: 'по́езд', vn: 'tàu hoả' }, { ru: 'остано́вка', vn: 'bến xe' },
    { ru: 'у́лица', vn: 'đường phố' }, { ru: 'вы́ход', vn: 'lối ra' }, { ru: 'вход', vn: 'lối vào' }
  ],
  ex: [
    { t: 'choice', q: '"Đi bằng xe buýt" nói đúng là:', options: ['с авто́бусом', 'на авто́бусе', 'в авто́бус', 'авто́бусом'], a: 1, why: 'Phương tiện đi lại dùng на + cách 6.' },
    { t: 'choice', q: '"Đi bộ" trong tiếng Nga là:', options: ['на нога́х', 'пешко́м', 'с нога́ми', 'иду́'], a: 1, why: 'пешком đứng một mình, không cần giới từ.' },
    { t: 'choice', q: 'Trên biển báo, <span class="ru ru-big">ВЫХОД</span> nghĩa là:', options: ['Lối vào', 'Lối ra', 'Cấm vào', 'Nhà vệ sinh'], a: 1, why: 'ВЫХОД = lối ra, ВХОД = lối vào. Chỉ khác một chữ.' },
    { t: 'choice', q: 'Hỏi đường đi bộ thì dùng động từ nào?', options: ['прое́хать', 'пройти́', 'уе́хать', 'приходи́ть'], a: 1, why: 'пройти là đi bộ đến, проехать là đi bằng xe đến.' },
    { t: 'type', q: 'Điền: Иди́те ___ , пото́м напра́во. (đi thẳng)', a: 'прямо', alt: ['пря́мо'], hint: 'Từ chỉ hướng thẳng.' },
    { t: 'match', q: 'Nối:', pairs: [['нале́во', 'sang trái'], ['напро́тив', 'đối diện'], ['остано́вка', 'bến xe'], ['светофо́р', 'đèn giao thông']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'скажите пожалуйста', a: 'скажите пожалуйста' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'это далеко', a: 'это далеко' }
  ]
};

/* ---------------------------------------------------------- BÀI 21 */
LESSON_DATA['a1-21'] = {
  level: 'a1',
  intro: 'Tiếng Việt chỉ có một chữ "đi". Tiếng Nga có <b>bốn</b>, và chọn sai là nghĩa lệch hẳn. Đây là bài khó nhất cấp A1 — nhưng cũng là bài khiến tiếng Nga của em nghe khác hẳn người mới học.',
  blocks: [
    { t: 'h', text: 'Hai trục phân biệt' },
    { t: 'p', html: 'Tiếng Nga chia động từ chuyển động theo <b>hai câu hỏi</b> cùng lúc: <b>(1)</b> đi bằng chân hay bằng xe? <b>(2)</b> đang đi một lần theo một hướng, hay đi lại thường xuyên?' },
    { t: 'table', head: ['', 'Một lần, một hướng, lúc này', 'Thường xuyên, đi rồi về'], rows: [
      ['Đi <b>bộ</b>', '<b>идти́</b>', '<b>ходи́ть</b>'],
      ['Đi <b>bằng xe</b>', '<b>е́хать</b>', '<b>е́здить</b>']
    ]},
    { t: 'words', items: [
      { ru: 'Я иду́ в университе́т.', vn: 'Tôi đang đi tới trường (ngay bây giờ, trên đường).' },
      { ru: 'Я хожу́ в университе́т ка́ждый день.', vn: 'Ngày nào tôi cũng tới trường (đi rồi về, đều đặn).' },
      { ru: 'Я е́ду в Москву́.', vn: 'Tôi đang trên đường tới Moskva.' },
      { ru: 'Я е́зжу в Москву́ ка́ждый год.', vn: 'Năm nào tôi cũng đi Moskva.' }
    ]},
    { t: 'tip', html: 'Mẹo nhận biết nhanh: có <span class="ru">сейча́с</span> (bây giờ) thì dùng <b>идти́ / е́хать</b>; có <span class="ru">ка́ждый день, ча́сто, обы́чно</span> thì dùng <b>ходи́ть / е́здить</b>.' },
    { t: 'h', text: 'Chia bốn động từ' },
    { t: 'table', head: ['Ngôi', 'идти́', 'ходи́ть', 'е́хать', 'е́здить'], rows: [
      ['я', 'иду́', 'хожу́', 'е́ду', 'е́зжу'],
      ['ты', 'идёшь', 'хо́дишь', 'е́дешь', 'е́здишь'],
      ['он / она́', 'идёт', 'хо́дит', 'е́дет', 'е́здит'],
      ['мы', 'идём', 'хо́дим', 'е́дем', 'е́здим'],
      ['вы', 'идёте', 'хо́дите', 'е́дете', 'е́здите'],
      ['они́', 'иду́т', 'хо́дят', 'е́дут', 'е́здят']
    ]},
    { t: 'note', html: 'Để ý <span class="ru">хожу́</span> và <span class="ru">е́зжу</span> — phụ âm ở gốc biến đổi chỉ ở ngôi <b>я</b>, giống hiện tượng chữ л chen vào ở bài 6. Tiếng Nga rất hay có kiểu "ngôi я là ngôi khác người".' },
    { t: 'h', text: 'Quá khứ' },
    { t: 'table', head: ['Động từ', 'Nam', 'Nữ', 'Số nhiều'], rows: [
      ['идти́', 'шёл', 'шла', 'шли'],
      ['ходи́ть', 'ходи́л', 'ходи́ла', 'ходи́ли'],
      ['е́хать', 'е́хал', 'е́хала', 'е́хали'],
      ['е́здить', 'е́здил', 'е́здила', 'е́здили']
    ]},
    { t: 'p', html: 'Ở quá khứ có một sắc thái đẹp: <span class="ru">Вчера́ я <b>ходи́л</b> в кино́</span> nghĩa là "hôm qua tôi đi xem phim <b>rồi về</b>" — cả chuyến đi trọn vẹn. Còn <span class="ru">Я <b>шёл</b> в кино́</span> là "tôi đang trên đường đến rạp" — chuyện chưa xong.' },
    { t: 'h', text: 'Lỗi kinh điển của người Việt' },
    { t: 'warn', html: 'Vì tiếng Việt chỉ có "đi", ta hay dùng bừa <span class="ru">идти́</span> cho mọi trường hợp. Ba câu sai hay gặp nhất:<br>✗ <span class="ru">Я иду́ в Москву́</span> → phải là <span class="ru">е́ду</span> (không ai đi bộ tới Moskva).<br>✗ <span class="ru">Я иду́ в шко́лу ка́ждый день</span> → phải là <span class="ru">хожу́</span>.<br>✗ <span class="ru">Я е́зжу сейча́с домо́й</span> → phải là <span class="ru">е́ду</span>.' },
    { t: 'h', text: 'Câu dùng hằng ngày' },
    { t: 'words', items: [
      { ru: 'Куда́ ты идёшь?', vn: 'Cậu đang đi đâu đấy?' },
      { ru: 'Я иду́ домо́й.', vn: 'Tôi đang về nhà.' },
      { ru: 'Мы е́дем на метро́.', vn: 'Chúng tôi đang đi tàu điện ngầm.' },
      { ru: 'Он ча́сто хо́дит в спортза́л.', vn: 'Anh ấy hay đi phòng tập.' },
      { ru: 'Ле́том я е́зжу к роди́телям.', vn: 'Mùa hè tôi về chỗ bố mẹ.' },
      { ru: 'Идёт дождь.', vn: 'Trời đang mưa. (nghĩa đen: mưa đang đi)' }
    ]},
    { t: 'tip', html: 'Câu cuối là một món quà: người Nga nói mưa và tuyết <b>đi</b> — <span class="ru">идёт дождь</span>, <span class="ru">идёт снег</span>. Và cả thời gian cũng đi: <span class="ru">вре́мя идёт</span>.' }
  ],
  vocab: [
    { ru: 'идти́', vn: 'đi bộ (lúc này, một hướng)' }, { ru: 'ходи́ть', vn: 'đi bộ (thường xuyên)' },
    { ru: 'е́хать', vn: 'đi xe (lúc này)' }, { ru: 'е́здить', vn: 'đi xe (thường xuyên)' },
    { ru: 'ка́ждый день', vn: 'mỗi ngày' }, { ru: 'ча́сто', vn: 'thường xuyên' },
    { ru: 'обы́чно', vn: 'thường thì' }, { ru: 'дождь', vn: 'mưa' }, { ru: 'снег', vn: 'tuyết' }
  ],
  ex: [
    { t: 'choice', q: 'Chọn đúng: Я ___ в Москву́ на по́езде.', options: ['иду́', 'е́ду', 'хожу́', 'е́зжу'], a: 1, why: 'Đi tàu là bằng phương tiện, và đang đi một lần → еду.' },
    { t: 'choice', q: 'Chọn đúng: Я ___ в университе́т ка́ждый день.', options: ['иду́', 'е́ду', 'хожу́', 'е́ду сейча́с'], a: 2, why: 'Lặp đi lặp lại hằng ngày, đi bộ → хожу.' },
    { t: 'choice', q: 'Từ nào báo hiệu phải dùng <span class="ru">ходи́ть / е́здить</span>?', options: ['сейча́с', 'ка́ждый день', 'сего́дня', 'уже́'], a: 1, why: 'каждый день, часто, обычно = hành động lặp lại.' },
    { t: 'type', q: 'Điền: Куда́ ты ___ ? (idi — cậu đang đi bộ đâu đấy)', a: 'идёшь', alt: ['идешь'], hint: 'Ngôi ты của идти.' },
    { t: 'choice', q: '<span class="ru ru-big">Идёт дождь</span> nghĩa là:', options: ['Mưa đã tạnh', 'Trời đang mưa', 'Sắp mưa', 'Đi trong mưa'], a: 1, why: 'Người Nga nói mưa “đi”: идёт дождь, идёт снег.' },
    { t: 'choice', q: '<span class="ru">Вчера́ я ходи́л в кино́</span> nhấn mạnh điều gì?', options: ['Đang trên đường đến rạp', 'Cả chuyến đi rồi về, đã xong', 'Sẽ đi vào ngày mai', 'Đi bằng xe'], a: 1, why: 'ходил ở quá khứ mang nghĩa chuyến đi trọn vẹn: đi và đã về.' },
    { t: 'match', q: 'Nối:', pairs: [['идти́', 'đang đi bộ'], ['ходи́ть', 'hay đi bộ'], ['е́хать', 'đang đi xe'], ['е́здить', 'hay đi xe']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'я иду домой', a: 'я иду домой' }
  ]
};

/* ---------------------------------------------------------- BÀI 22 */
LESSON_DATA['a1-22'] = {
  level: 'a1',
  intro: 'Thể mệnh lệnh — dùng để nhờ vả, mời mọc, chỉ dẫn. Thật ra em đã dùng nó suốt từ A0 mà chưa biết tên: <span class="ru">Скажи́те, Да́йте, Извини́те</span> đều là mệnh lệnh cả.',
  blocks: [
    { t: 'h', text: 'Cách tạo: lấy từ ngôi ОНИ́' },
    { t: 'p', html: 'Ba bước: chia động từ ở ngôi <b>они́</b> → bỏ đuôi → thêm <b>-й</b> hoặc <b>-и</b>. Muốn lịch sự hoặc nói với nhiều người thì thêm <b>-те</b>.' },
    { t: 'table', head: ['Nguyên thể', 'Ngôi они́', 'Với ты', 'Với вы (lịch sự)'], rows: [
      ['чита́ть', 'чита́<b>ют</b>', 'чита́й', 'чита́й<b>те</b>'],
      ['слу́шать', 'слу́ша<b>ют</b>', 'слу́шай', 'слу́шай<b>те</b>'],
      ['рабо́тать', 'рабо́та<b>ют</b>', 'рабо́тай', 'рабо́тай<b>те</b>'],
      ['говори́ть', 'говор<b>я́т</b>', 'говори́', 'говори́<b>те</b>'],
      ['смотре́ть', 'смо́тр<b>ят</b>', 'смотри́', 'смотри́<b>те</b>'],
      ['идти́', 'ид<b>у́т</b>', 'иди́', 'иди́<b>те</b>'],
      ['писа́ть', 'пи́ш<b>ут</b>', 'пиши́', 'пиши́<b>те</b>']
    ]},
    { t: 'tip', html: 'Quy tắc chọn -й hay -и: gốc kết thúc bằng <b>nguyên âm</b> thì thêm <b>-й</b> (чита-й), kết thúc bằng <b>phụ âm</b> thì thêm <b>-и</b> (говор-и). Nghe thì phức tạp, đọc thử hai kiểu là tai tự chọn được cái xuôi.' },
    { t: 'h', text: 'Bốn dạng bất quy tắc phải thuộc' },
    { t: 'words', items: [
      { ru: 'дать → дай / да́йте', vn: 'đưa cho — Дайте, пожалуйста!' },
      { ru: 'есть → ешь / е́шьте', vn: 'ăn đi' },
      { ru: 'пить → пей / пе́йте', vn: 'uống đi' },
      { ru: 'быть → будь / бу́дьте', vn: 'hãy là — Будьте добры!' }
    ]},
    { t: 'h', text: 'Những câu mệnh lệnh em dùng mỗi ngày' },
    { t: 'words', items: [
      { ru: 'Скажи́те, пожа́луйста…', vn: 'Làm ơn cho hỏi…' },
      { ru: 'Да́йте, пожа́луйста…', vn: 'Làm ơn cho tôi…' },
      { ru: 'Повтори́те, пожа́луйста.', vn: 'Xin nhắc lại ạ.' },
      { ru: 'Говори́те ме́дленнее.', vn: 'Xin nói chậm hơn.' },
      { ru: 'Помоги́те, пожа́луйста!', vn: 'Làm ơn giúp tôi với!' },
      { ru: 'Подожди́те мину́ту.', vn: 'Đợi một phút ạ.' },
      { ru: 'Извини́те.', vn: 'Xin lỗi.' },
      { ru: 'Проходи́те, пожа́луйста.', vn: 'Mời vào ạ.' },
      { ru: 'Бу́дьте добры́…', vn: 'Làm ơn… (rất lịch sự)' }
    ]},
    { t: 'warn', html: 'Thể mệnh lệnh trần trụi nghe hơi cộc. Người Nga gần như <b>luôn</b> thêm <span class="ru">пожа́луйста</span>. So sánh: <span class="ru">Скажи́те!</span> (Nói đi!) và <span class="ru">Скажи́те, пожа́луйста</span> (Làm ơn cho hỏi). Một từ đổi hẳn thái độ.' },
    { t: 'h', text: 'Rủ rê: Дава́й / Дава́йте' },
    { t: 'words', items: [
      { ru: 'Дава́й пойдём в кафе́!', vn: 'Đi quán cà phê đi!' },
      { ru: 'Дава́йте начнём.', vn: 'Chúng ta bắt đầu nào.' },
      { ru: 'Дава́й на «ты»!', vn: 'Mình xưng "ты" với nhau nhé!' }
    ]},
    { t: 'h', text: 'Cấm đoán: не + mệnh lệnh' },
    { t: 'words', items: [
      { ru: 'Не говори́те так бы́стро.', vn: 'Đừng nói nhanh thế.' },
      { ru: 'Не волну́йтесь.', vn: 'Đừng lo.' },
      { ru: 'Не забыва́й меня́.', vn: 'Đừng quên tôi nhé.' }
    ]},
    { t: 'note', html: 'Trên biển báo ở Nga em sẽ thấy dạng khác — dùng nguyên thể cho ngắn gọn: <span class="ru">Не кури́ть</span> (cấm hút thuốc), <span class="ru">Не входи́ть</span> (cấm vào). Đó là mệnh lệnh dành cho tất cả mọi người, không nhắm vào ai cụ thể.' }
  ],
  vocab: [
    { ru: 'Повтори́те', vn: 'Nhắc lại đi' }, { ru: 'Помоги́те', vn: 'Giúp với' },
    { ru: 'Подожди́те', vn: 'Đợi đã' }, { ru: 'Бу́дьте добры́', vn: 'Làm ơn (rất lịch sự)' },
    { ru: 'Дава́йте', vn: 'Chúng ta hãy…' }, { ru: 'ме́дленнее', vn: 'chậm hơn' },
    { ru: 'Не волну́йтесь', vn: 'Đừng lo' }, { ru: 'кури́ть', vn: 'hút thuốc' }
  ],
  ex: [
    { t: 'choice', q: 'Thể mệnh lệnh được tạo từ dạng nào của động từ?', options: ['Nguyên thể', 'Ngôi я', 'Ngôi они́', 'Quá khứ'], a: 2, why: 'Lấy ngôi они, bỏ đuôi, thêm -й hoặc -и.' },
    { t: 'type', q: 'Tạo mệnh lệnh lịch sự từ <span class="ru">чита́ть</span>:', a: 'читайте', alt: ['чита́йте'], hint: 'читают → чита- → thêm -й rồi -те.' },
    { t: 'choice', q: 'Mệnh lệnh lịch sự của <span class="ru">говори́ть</span> là:', options: ['говоря́йте', 'говори́те', 'говори́йте', 'говора́йте'], a: 1, why: 'говорят → говор- kết thúc bằng phụ âm nên thêm -и: говорите.' },
    { t: 'choice', q: 'Vì sao người Nga gần như luôn thêm <span class="ru">пожа́луйста</span> vào câu mệnh lệnh?', options: ['Vì ngữ pháp bắt buộc', 'Vì mệnh lệnh trần nghe cộc', 'Vì để câu dài hơn', 'Vì đó là chủ ngữ'], a: 1, why: 'Không bắt buộc về ngữ pháp, nhưng thiếu nó thì nghe như ra lệnh.' },
    { t: 'choice', q: '"Chúng ta đi quán cà phê nào!" bắt đầu bằng từ nào?', options: ['Иди́те', 'Дава́й', 'Бу́дьте', 'Не ходи́'], a: 1, why: 'Давай / Давайте dùng để rủ rê, nghĩa là “chúng ta hãy…”.' },
    { t: 'type', q: 'Nhờ ai đó nói chậm lại: Говори́те ___ , пожа́луйста.', a: 'медленнее', alt: ['ме́дленнее'], hint: 'Nghĩa là “chậm hơn”.' },
    { t: 'match', q: 'Nối:', pairs: [['Помоги́те!', 'Giúp với!'], ['Подожди́те', 'Đợi đã'], ['Повтори́те', 'Nhắc lại đi'], ['Не волну́йтесь', 'Đừng lo']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'повторите пожалуйста', a: 'повторите пожалуйста' }
  ]
};

/* ---------------------------------------------------------- BÀI 23 */
LESSON_DATA['a1-23'] = {
  level: 'a1',
  intro: 'Bài cuối trước khi ôn tập. Viết được một lá thư hoặc tin nhắn tử tế là mốc thật sự của trình độ A1 — nó gom hết mọi thứ em đã học vào một chỗ.',
  blocks: [
    { t: 'h', text: 'Mở đầu thư' },
    { t: 'table', head: ['Mức độ', 'Cách viết', 'Dùng với ai'], rows: [
      ['Thân mật', 'Приве́т, О́ля!', 'Bạn bè, người cùng tuổi'],
      ['Trìu mến', 'Дорога́я ма́ма! · Дорого́й друг!', 'Người thân'],
      ['Lịch sự', 'Здра́вствуйте, Ива́н Петро́вич!', 'Thầy cô, cấp trên, người lạ'],
      ['Trang trọng', 'Уважа́емый профе́ссор!', 'Thư chính thức']
    ]},
    { t: 'note', html: 'Người Nga gọi nhau bằng <b>tên + tên đệm theo bố</b> khi lịch sự: <span class="ru">Ива́н Петро́вич</span> nghĩa là "Ivan con trai của Pyotr". Gọi thầy giáo bằng mỗi tên trống không là bất lịch sự, nhưng gọi bằng họ lại càng lạ. Cứ dùng tên + tên đệm.' },
    { t: 'h', text: 'Thân thư — những câu đỡ khung' },
    { t: 'words', items: [
      { ru: 'Как дела́?', vn: 'Dạo này thế nào?' },
      { ru: 'Как ты живёшь?', vn: 'Cậu sống thế nào?' },
      { ru: 'У меня́ всё хорошо́.', vn: 'Tôi vẫn ổn cả.' },
      { ru: 'Спаси́бо за письмо́.', vn: 'Cảm ơn vì lá thư.' },
      { ru: 'Извини́, что до́лго не писа́л.', vn: 'Xin lỗi vì lâu rồi không viết. (nam)' },
      { ru: 'Сейча́с я живу́ в Ирку́тске.', vn: 'Hiện tôi đang sống ở Irkutsk.' },
      { ru: 'Я изуча́ю ру́сский язы́к.', vn: 'Tôi đang học tiếng Nga.' },
      { ru: 'Здесь о́чень краси́во.', vn: 'Ở đây rất đẹp.' },
      { ru: 'Я скуча́ю по до́му.', vn: 'Tôi nhớ nhà.' }
    ]},
    { t: 'h', text: 'Kết thư' },
    { t: 'words', items: [
      { ru: 'Жду отве́та.', vn: 'Mong thư trả lời.' },
      { ru: 'Переда́й приве́т ма́ме.', vn: 'Cho tôi gửi lời chào mẹ.' },
      { ru: 'До встре́чи!', vn: 'Hẹn gặp lại!' },
      { ru: 'Пока́!', vn: 'Bai! (thân mật)' },
      { ru: 'Целу́ю.', vn: 'Hôn em / con. (rất thân)' },
      { ru: 'С уваже́нием,', vn: 'Trân trọng, (thư trang trọng)' }
    ]},
    { t: 'h', text: 'Một lá thư hoàn chỉnh' },
    { t: 'dialog', lines: [
      { who: '1', ru: 'Приве́т, Оа́нь!', vn: 'Chào Oanh!' },
      { who: '2', ru: 'Как дела́? У меня́ всё хорошо́.', vn: 'Dạo này thế nào? Tớ vẫn ổn.' },
      { who: '3', ru: 'Сейча́с я живу́ в Ирку́тске и изуча́ю ру́сский язы́к.', vn: 'Giờ tớ sống ở Irkutsk và đang học tiếng Nga.' },
      { who: '4', ru: 'Здесь хо́лодно, но о́чень краси́во. Зимо́й мно́го сне́га.', vn: 'Ở đây lạnh nhưng rất đẹp. Mùa đông nhiều tuyết lắm.' },
      { who: '5', ru: 'Ка́ждый день я хожу́ в университе́т. У меня́ есть но́вые друзья́.', vn: 'Ngày nào tớ cũng đến trường. Tớ có mấy người bạn mới.' },
      { who: '6', ru: 'А как ты? Что но́вого?', vn: 'Còn cậu thì sao? Có gì mới không?' },
      { who: '7', ru: 'Жду отве́та. Переда́й приве́т роди́телям!', vn: 'Mong thư của cậu. Cho tớ gửi lời chào bố mẹ nhé!' },
      { who: '8', ru: 'Пока́! Чунг', vn: 'Bai! Trung' }
    ]},
    { t: 'tip', html: 'Đọc lại lá thư trên và đếm xem: có cách 6 (<span class="ru">в Ирку́тске</span>), cách 4 (<span class="ru">в университе́т</span>), cách 2 (<span class="ru">мно́го сне́га</span>), cách 3 (<span class="ru">роди́телям</span>), cách 5 (<span class="ru">зимо́й</span>), tính từ hoà hợp (<span class="ru">но́вые друзья́</span>), động từ chuyển động (<span class="ru">хожу́</span>). Cả cấp A1 nằm gọn trong tám dòng.' },
    { t: 'h', text: 'Tin nhắn ngắn' },
    { t: 'words', items: [
      { ru: 'Ты где?', vn: 'Cậu ở đâu?' },
      { ru: 'Я опа́здываю на 10 мину́т.', vn: 'Tớ muộn 10 phút.' },
      { ru: 'Позвони́ мне.', vn: 'Gọi tớ nhé.' },
      { ru: 'Договори́лись!', vn: 'Chốt nhé!' },
      { ru: 'Всё в поря́дке.', vn: 'Ổn cả.' },
      { ru: 'Уже́ иду́!', vn: 'Đang đến đây!' }
    ]}
  ],
  vocab: [
    { ru: 'Дорого́й / Дорога́я', vn: 'Thân mến (mở thư)' }, { ru: 'Уважа́емый', vn: 'Kính gửi' },
    { ru: 'Жду отве́та', vn: 'Mong thư trả lời' }, { ru: 'С уваже́нием', vn: 'Trân trọng' },
    { ru: 'Переда́й приве́т', vn: 'Cho gửi lời chào' }, { ru: 'скуча́ть', vn: 'nhớ (ai đó)' },
    { ru: 'Договори́лись', vn: 'Chốt nhé' }, { ru: 'опа́здывать', vn: 'đến muộn' },
    { ru: 'Всё в поря́дке', vn: 'Ổn cả' }, { ru: 'Что но́вого?', vn: 'Có gì mới không?' }
  ],
  ex: [
    { t: 'choice', q: 'Viết thư cho giáo sư, em mở đầu bằng:', options: ['Приве́т, Ива́н!', 'Здра́вствуйте, Ива́н Петро́вич!', 'Эй, профе́ссор!', 'Дорого́й Ива́н!'], a: 1, why: 'Lịch sự thì dùng Здравствуйте + tên và tên đệm theo bố.' },
    { t: 'choice', q: '<span class="ru ru-big">Ива́н Петро́вич</span> nghĩa là gì?', options: ['Ivan họ Petrov', 'Ivan con trai của Pyotr', 'Ivan và Pyotr', 'Ông Ivan Petrovich là hai người'], a: 1, why: 'Tên đệm của người Nga tạo từ tên bố. Đây là cách gọi lịch sự chuẩn mực.' },
    { t: 'type', q: 'Kết thư trang trọng: С ___ , Чунг', a: 'уважением', alt: ['уваже́нием'], hint: 'Nghĩa là “trân trọng”, ở cách 5.' },
    { t: 'choice', q: '"Cho tớ gửi lời chào mẹ" nói là:', options: ['Скажи́ ма́ме приве́т', 'Переда́й приве́т ма́ме', 'Приве́т для ма́ма', 'Ма́ма приве́т'], a: 1, why: 'Передай привет + cách 3 (маме) là cụm cố định.' },
    { t: 'choice', q: '<span class="ru ru-big">Договори́лись!</span> dùng khi nào?', options: ['Khi chào tạm biệt', 'Khi đã thống nhất xong một việc', 'Khi xin lỗi', 'Khi không hiểu'], a: 1, why: 'Nghĩa đen là “chúng ta đã thoả thuận rồi” — tương đương “chốt nhé”.' },
    { t: 'match', q: 'Nối:', pairs: [['Жду отве́та', 'Mong thư trả lời'], ['Всё в поря́дке', 'Ổn cả'], ['Что но́вого?', 'Có gì mới không?'], ['опа́здывать', 'đến muộn']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'у меня всё хорошо', a: 'у меня всё хорошо' }
  ]
};

/* ---------------------------------------------------------- BÀI 24 */
LESSON_DATA['a1-24'] = {
  level: 'a1',
  intro: 'Bài cuối cấp A1. Không có gì mới — chỉ gom lại toàn bộ những gì em đã học thành vài bảng nhìn một lần là thấy hết. Học xong bài này thì vào thi lấy chứng nhận.',
  blocks: [
    { t: 'h', text: 'Sáu cách — bảng tổng hợp' },
    { t: 'table', head: ['Cách', 'Trả lời câu hỏi', 'Dùng khi nào', 'Đuôi giống cái (шко́ла)'], rows: [
      ['1 · Имени́тельный', 'Кто? Что?', 'Chủ ngữ', 'шко́л<b>а</b>'],
      ['2 · Роди́тельный', 'Кого́? Чего́?', 'Của ai · нет · без, из, для · sau số', 'шко́л<b>ы</b>'],
      ['3 · Да́тельный', 'Кому́? Чему́?', 'Cho ai · tuổi · нра́вится · к', 'шко́л<b>е</b>'],
      ['4 · Вини́тельный', 'Кого́? Что?', 'Tân ngữ · в/на khi đi đâu', 'шко́л<b>у</b>'],
      ['5 · Твори́тельный', 'Кем? Чем?', 'Với ai · bằng gì · nghề nghiệp', 'шко́л<b>ой</b>'],
      ['6 · Предло́жный', 'О ком? Где?', 'Ở đâu · nói về ai (luôn có giới từ)', 'шко́л<b>е</b>']
    ]},
    { t: 'tip', html: 'Cách 3 và cách 6 của giống cái trùng đuôi (<span class="ru">шко́ле</span>). Phân biệt bằng giới từ: có в/на/о đứng trước là cách 6, không có gì là cách 3.' },
    { t: 'h', text: 'Động từ — hai nhóm, ba thì' },
    { t: 'table', head: ['', 'Nhóm 1 (chữ Е)', 'Nhóm 2 (chữ И)'], rows: [
      ['я', 'чита́ю', 'говорю́'],
      ['ты', 'чита́ешь', 'говори́шь'],
      ['он / она́', 'чита́ет', 'говори́т'],
      ['мы', 'чита́ем', 'говори́м'],
      ['вы', 'чита́ете', 'говори́те'],
      ['они́', 'чита́ют', 'говоря́т']
    ]},
    { t: 'table', head: ['Thì', 'Cách tạo', 'Ví dụ'], rows: [
      ['Quá khứ', 'bỏ -ть, thêm -л / -ла / -ло / -ли (theo <b>giới tính</b>)', 'Я чита́л · Я чита́ла'],
      ['Hiện tại', 'chia theo <b>ngôi</b> (bảng trên)', 'Я чита́ю'],
      ['Tương lai', '<b>бу́ду</b> + nguyên thể (động từ chính không chia)', 'Я бу́ду чита́ть']
    ]},
    { t: 'h', text: 'Bốn quy tắc theo em suốt đời' },
    { t: 'table', head: ['Quy tắc', 'Nội dung', 'Học ở bài'], rows: [
      ['7 chữ cái', 'Sau <b>г к х ж ч ш щ</b> viết <b>и</b>, không viết <b>ы</b>', '4, 13, 18'],
      ['Trọng âm', 'Một âm tiết nhấn; <b>о</b> không nhấn đọc thành <b>а</b>', 'A0 bài 7'],
      ['В hay НА', 'Không gian kín dùng <b>в</b>; hoạt động và nơi mở dùng <b>на</b>', '9'],
      ['Số đếm', '1 → cách 1 · 2–4 → cách 2 số ít · 5+ → cách 2 số nhiều', '12, 13']
    ]},
    { t: 'h', text: 'Học xong A1 em làm được gì' },
    { t: 'words', items: [
      { ru: 'Меня́ зову́т Оа́нь. Я из Вьетна́ма.', vn: 'Giới thiệu bản thân' },
      { ru: 'У меня́ есть ста́рший брат и мла́дшая сестра́.', vn: 'Kể về gia đình' },
      { ru: 'Я изуча́ю ру́сский язы́к в университе́те.', vn: 'Nói về việc học' },
      { ru: 'Вчера́ я ходи́ла в магази́н и купи́ла хлеб.', vn: 'Kể chuyện đã qua' },
      { ru: 'За́втра я бу́ду отдыха́ть до́ма.', vn: 'Nói về dự định' },
      { ru: 'Скажи́те, пожа́луйста, как пройти́ до метро́?', vn: 'Hỏi đường' },
      { ru: 'Да́йте, пожа́луйста, ко́фе без са́хара.', vn: 'Gọi đồ' },
      { ru: 'Мне два́дцать пять лет. Мне нра́вится Росси́я.', vn: 'Nói tuổi và sở thích' }
    ]},
    { t: 'note', html: 'Tám câu trên gói trọn cấp A1. Nếu em đọc thành tiếng cả tám câu mà không phải nghĩ, thì em đã sẵn sàng cho bài thi — và cho một cuộc trò chuyện thật với người Nga.' },
    { t: 'h', text: 'Còn gì ở phía trước' },
    { t: 'p', html: 'Cấp A2 sẽ dạy em thứ khiến tiếng Nga thật sự có chiều sâu: <b>thể động từ</b> (hoàn thành / chưa hoàn thành) — cùng một hành động, hai cách nhìn. Rồi động từ chuyển động có tiền tố, câu phức với <span class="ru">кото́рый</span>, và cách kể một câu chuyện dài.' },
    { t: 'tip', html: 'Trước khi vào A2, hãy để bộ thẻ từ vựng làm việc của nó: mỗi ngày 10 phút ôn thẻ trong hai tuần. Cấp A1 có gần 200 từ — thuộc chắc từng ấy thì A2 nhẹ hơn hẳn.' }
  ],
  vocab: [
    { ru: 'паде́ж', vn: 'cách (ngữ pháp)' }, { ru: 'глаго́л', vn: 'động từ' },
    { ru: 'существи́тельное', vn: 'danh từ' }, { ru: 'прилага́тельное', vn: 'tính từ' },
    { ru: 'пра́вило', vn: 'quy tắc' }, { ru: 'уро́вень', vn: 'trình độ, cấp độ' }
  ],
  ex: [
    { t: 'choice', q: 'Cách nào trả lời câu hỏi <span class="ru">Кому́?</span>', options: ['Cách 2', 'Cách 3', 'Cách 4', 'Cách 5'], a: 1, why: 'Кому? = cho ai → дательный, cách 3.' },
    { t: 'choice', q: 'Cách nào <b>luôn</b> phải có giới từ đứng trước?', options: ['Cách 2', 'Cách 3', 'Cách 5', 'Cách 6'], a: 3, why: 'Предложный падеж không bao giờ đứng một mình — luôn có в, на hoặc о.' },
    { t: 'choice', q: 'Thì nào chia động từ theo <b>giới tính</b> người nói?', options: ['Hiện tại', 'Quá khứ', 'Tương lai', 'Cả ba'], a: 1, why: 'Quá khứ: читал / читала / читали.' },
    { t: 'type', q: 'Điền: У меня́ нет ___ (вре́мя)', a: 'времени', alt: ['вре́мени'], hint: 'Sau нет là cách 2. время là danh từ bất quy tắc.' },
    { t: 'type', q: 'Điền: Я рабо́таю ___ (врач — làm nghề bác sĩ)', a: 'врачом', alt: ['врачо́м'], hint: 'работать + cách 5.' },
    { t: 'choice', q: 'Câu nào <b>đúng</b> hoàn toàn?', options: ['Я иду́ в Москву́ ка́ждый год.', 'Я е́зжу в Москву́ ка́ждый год.', 'Я хожу́ в Москву́ ка́ждый год.', 'Я е́ду в Москву́ ка́ждый год.'], a: 1, why: 'Đi Moskva phải bằng phương tiện, và “каждый год” là lặp lại → езжу.' },
    { t: 'choice', q: 'Sau số <b>5 trở lên</b>, danh từ ở dạng nào?', options: ['Cách 1 số ít', 'Cách 2 số ít', 'Cách 2 số nhiều', 'Cách 4 số nhiều'], a: 2, why: 'пять рублей, десять книг — cách 2 số nhiều.' },
    { t: 'match', q: 'Nối cách với công dụng:', pairs: [['Cách 2', 'нет, без, của ai'], ['Cách 3', 'cho ai, bao nhiêu tuổi'], ['Cách 4', 'tân ngữ trực tiếp'], ['Cách 5', 'với ai, bằng gì']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'мне двадцать пять лет', a: 'мне двадцать пять лет' }
  ]
};
