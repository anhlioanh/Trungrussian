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
