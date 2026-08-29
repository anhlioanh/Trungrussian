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
  }
};
