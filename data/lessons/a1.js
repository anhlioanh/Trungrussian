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
