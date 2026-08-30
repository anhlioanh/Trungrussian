/* ============================================================
   exams.js — đề thi cuối cấp
   Đạt từ `pass`% trở lên thì được cấp giấy chứng nhận của website.
   ============================================================ */

const EXAMS = {
  a0: {
    title: 'Thi cuối cấp A0 — Vỡ lòng',
    desc: 'Kiểm tra toàn bộ những gì em học ở cấp A0: 33 chữ cái, trọng âm, quy tắc phát âm, từ vựng cơ bản và chào hỏi.',
    minutes: 20,
    pass: 80,
    q: [
      { t: 'choice', q: 'Bảng chữ cái tiếng Nga có bao nhiêu chữ?', options: ['26', '31', '33', '35'], a: 2 },
      { t: 'choice', q: 'Chữ <span class="ru ru-big">Р р</span> đọc là:', options: ['p', 'r rung lưỡi', 'b', 'ph'], a: 1 },
      { t: 'choice', q: 'Chữ <span class="ru ru-big">С с</span> đọc là:', options: ['k', 'ch', 's', 'ts'], a: 2 },
      { t: 'choice', q: 'Chữ <span class="ru ru-big">Н н</span> đọc là:', options: ['h', 'n', 'kh', 'g'], a: 1 },
      { t: 'choice', q: 'Chữ nào đọc gần nhất với âm “đ” của tiếng Việt?', options: ['Д', 'З', 'Т', 'Б'], a: 0 },
      { t: 'choice', q: 'Chữ nào <b>luôn</b> mang trọng âm?', options: ['Я', 'Ё', 'Ю', 'Э'], a: 1 },
      { t: 'choice', q: 'Chữ <span class="ru ru-big">Ь</span> có tác dụng gì?', options: ['Đọc thành “i”', 'Kéo dài nguyên âm', 'Làm mềm phụ âm đứng trước', 'Đánh dấu trọng âm'], a: 2 },
      { t: 'choice', q: 'Chữ nào không bao giờ đứng đầu một từ tiếng Nga?', options: ['Э', 'Ы', 'Ю', 'Ф'], a: 1 },
      { t: 'choice', q: 'Từ <span class="ru ru-big">молоко́</span> (sữa) đọc đúng là:', options: ['mô-lô-kô', 'ma-la-kó', 'mô-la-ka', 'ma-lô-kó'], a: 1 },
      { t: 'choice', q: 'Từ <span class="ru ru-big">хлеб</span> (bánh mì) kết thúc bằng âm nào?', options: ['b', 'p', 'v', 'f'], a: 1 },
      { t: 'choice', q: 'Trong từ <span class="ru ru-big">сего́дня</span>, chữ <b>г</b> đọc là:', options: ['g', 'kh', 'v', 'không đọc'], a: 2 },
      { t: 'choice', q: '<span class="ru ru-big">Москва́</span> là:', options: ['nước Nga', 'Moskva', 'tàu điện ngầm', 'cây cầu'], a: 1 },
      { t: 'choice', q: 'Gặp giáo sư, em chào bằng câu nào?', options: ['Приве́т!', 'Пока́!', 'Здра́вствуйте!', 'Как дела́?'], a: 2 },
      { t: 'choice', q: '<span class="ru ru-big">Пожа́луйста</span> KHÔNG có nghĩa nào?', options: ['Làm ơn', 'Xin mời', 'Không có gì', 'Tạm biệt'], a: 3 },
      { t: 'choice', q: 'Câu “Tôi là sinh viên” viết đúng trong tiếng Nga là:', options: ['Я есть студе́нт.', 'Я студе́нт.', 'Я быть студе́нт.', 'Студе́нт я есть.'], a: 1 },
      { t: 'choice', q: 'Hỏi tên một cách lịch sự:', options: ['Как дела́?', 'Как вас зову́т?', 'Отку́да вы?', 'Ско́лько вам лет?'], a: 1 },
      { t: 'listen', q: 'Nghe và gõ lại từ (chữ Nga):', say: 'спасибо', a: 'спасибо' },
      { t: 'listen', q: 'Nghe và gõ lại từ (chữ Nga):', say: 'машина', a: 'машина' },
      { t: 'type', q: 'Gõ từ tiếng Nga nghĩa là “ngôi nhà”:', a: 'дом' },
      { t: 'type', q: 'Hoàn thành: “Tôi tên là…” → Меня́ ___ (gõ chữ Nga)', a: 'зовут' }
    ]
  },

  a1: {
    title: 'Thi cuối cấp A1 — Sơ cấp',
    desc: 'Bài thi bao trùm toàn bộ cấp A1: giống và số của danh từ, năm cách, hai nhóm động từ, ba thì, số đếm, tính từ, thể mệnh lệnh, động từ chuyển động và từ vựng đời sống.',
    minutes: 30,
    pass: 80,
    q: [
      { t: 'choice', q: 'Từ nào là <b>giống đực</b> dù kết thúc bằng -а?', options: ['шко́ла', 'де́душка', 'кни́га', 'семья́'], a: 1 },
      { t: 'choice', q: 'Số nhiều của <span class="ru ru-big">кни́га</span> là:', options: ['кни́гы', 'кни́ги', 'кни́га', 'книг'], a: 1 },
      { t: 'choice', q: 'Sau bảy chữ <b>г к х ж ч ш щ</b> thì không bao giờ viết chữ nào?', options: ['и', 'ы', 'а', 'е'], a: 1 },
      { t: 'choice', q: 'Dạng đúng cho <span class="ru">они́</span> của <span class="ru">говори́ть</span>:', options: ['говоря́т', 'говоря́ют', 'говори́ют', 'говори́т'], a: 0 },
      { t: 'choice', q: '"Anh yêu em" nói đúng là:', options: ['Я любю́ тебя́.', 'Я люблю́ тебя́.', 'Я люби́ть тебя́.', 'Я лю́бишь тебя́.'], a: 1 },
      { t: 'choice', q: 'Sau <span class="ru">Я хочу́</span>, động từ tiếp theo ở dạng nào?', options: ['Chia theo ngôi я', 'Nguyên thể', 'Quá khứ', 'Số nhiều'], a: 1 },
      { t: 'type', q: 'Điền cách 4: Я чита́ю ___ (кни́га)', a: 'книгу' },
      { t: 'type', q: 'Điền cách 4: Я ви́жу ___ (брат)', a: 'брата' },
      { t: 'choice', q: 'Vì sao <span class="ru">Я ви́жу дом</span> không đổi đuôi mà <span class="ru">Я ви́жу бра́та</span> lại đổi?', options: ['Vì дом ngắn hơn', 'Vì брат chỉ người, дом là đồ vật', 'Vì дом là giống trung', 'Vì брат ở số nhiều'], a: 1 },
      { t: 'type', q: 'Điền cách 6: Он живёт в ___ (Москва́)', a: 'москве', alt: ['Москве'] },
      { t: 'choice', q: 'Chọn đúng: Я рабо́таю ___ лаборато́рии.', options: ['на', 'в', 'о', 'у'], a: 1 },
      { t: 'choice', q: 'Chọn đúng: Она́ у́чится ___ факульте́те.', options: ['в', 'на', 'о', 'к'], a: 1 },
      { t: 'choice', q: 'Oanh kể "Tôi đã đọc quyển sách này" thì nói:', options: ['Я чита́л э́ту кни́гу.', 'Я чита́ла э́ту кни́гу.', 'Я чита́ли э́ту кни́гу.', 'Я бу́ду чита́ть э́ту кни́гу.'], a: 1 },
      { t: 'choice', q: 'Câu nào <b>đúng</b>?', options: ['Я бу́ду чита́ю.', 'Я бу́ду чита́ть.', 'Я бу́дет чита́ть.', 'Я быть чита́ть.'], a: 1 },
      { t: 'choice', q: '"Hai quyển sách" nói là:', options: ['два кни́ги', 'две кни́ги', 'две книг', 'два кни́га'], a: 1 },
      { t: 'choice', q: 'Sau số <b>5 trở lên</b>, danh từ ở dạng nào?', options: ['Cách 1 số ít', 'Cách 2 số ít', 'Cách 2 số nhiều', 'Cách 4'], a: 2 },
      { t: 'type', q: 'Điền cách 2: У меня́ нет ___ (вре́мя)', a: 'времени' },
      { t: 'choice', q: '"Cà phê không đường" nói là:', options: ['ко́фе без са́хар', 'ко́фе без са́хара', 'ко́фе без са́харом', 'ко́фе с са́хара'], a: 1 },
      { t: 'choice', q: '"Tôi 25 tuổi" nói là:', options: ['Я два́дцать пять лет.', 'Мне два́дцать пять лет.', 'Мне два́дцать пять год.', 'У меня́ два́дцать пять лет.'], a: 1 },
      { t: 'choice', q: 'Trong câu <span class="ru">Мне нра́вится кни́га</span>, chủ ngữ là:', options: ['мне', 'кни́га', 'нра́вится', 'không có'], a: 1 },
      { t: 'type', q: 'Điền cách 5: Я хочу́ стать ___ (инжене́р)', a: 'инженером' },
      { t: 'choice', q: '"Thành phố lớn" nói là:', options: ['больша́я го́род', 'большо́й го́род', 'большо́е го́род', 'больши́е го́род'], a: 1 },
      { t: 'choice', q: 'Chọn đúng: Я ___ в университе́т ка́ждый день.', options: ['иду́', 'е́ду', 'хожу́', 'е́зжу'], a: 2 },
      { t: 'choice', q: '"Đi bằng xe buýt" nói đúng là:', options: ['с авто́бусом', 'на авто́бусе', 'в авто́бус', 'авто́бусом'], a: 1 },
      { t: 'choice', q: 'Mệnh lệnh lịch sự của <span class="ru">говори́ть</span> là:', options: ['говоря́йте', 'говори́те', 'говори́йте', 'говора́йте'], a: 1 },
      { t: 'listen', q: 'Nghe và gõ lại:', say: 'меня зовут', a: 'меня зовут' },
      { t: 'listen', q: 'Nghe và gõ lại:', say: 'сколько стоит', a: 'сколько стоит' },
      { t: 'listen', q: 'Nghe và gõ lại:', say: 'я не понимаю', a: 'я не понимаю' }
    ]
  }
};
