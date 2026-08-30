/* ============================================================
   b2.js — NỘI DUNG CẤP B2 (Trung cấp 2 / ТРКИ-2)
   Cấp của người vào cao học, nghiên cứu sinh, làm việc chuyên môn.
   Ghi chú: từ bài này trở đi, các đoạn văn bản thật (bài báo, công văn,
   tin tức) được viết KHÔNG dấu trọng âm — đúng như văn bản Nga ngoài đời.
   Dấu trọng âm chỉ giữ ở bảng từ vựng và mẫu câu cần học thuộc.
   ============================================================ */

/* ---------------------------------------------------------- BÀI 1 */
LESSON_DATA['b2-01'] = {
  level: 'b2',
  intro: 'Lên B2, cái thay đổi không phải là số từ mà là <b>phong cách</b>. Cùng một ý, người Nga nói ở quán cà phê một kiểu, viết trong luận văn một kiểu, ghi trong công văn một kiểu khác nữa. Dùng lẫn ba kiểu đó là dấu hiệu rõ nhất của người nước ngoài, kể cả người nói rất trôi chảy.',
  blocks: [
    { t: 'h', text: 'Năm phong cách chức năng' },
    { t: 'table', head: ['Phong cách', 'Tên Nga', 'Ở đâu', 'Dấu hiệu'], rows: [
      ['Khoa học', 'нау́чный', 'luận văn, bài báo, giáo trình', 'thuật ngữ, danh hoá, bị động, không cảm xúc'],
      ['Hành chính', 'официа́льно-делово́й', 'đơn từ, hợp đồng, công văn', 'khuôn mẫu cứng, không có "tôi"'],
      ['Báo chí', 'публицисти́ческий', 'báo, bài bình luận, diễn văn', 'có lập luận + có cảm xúc, dùng câu hỏi tu từ'],
      ['Khẩu ngữ', 'разгово́рный', 'nói chuyện hằng ngày', 'câu ngắn, tỉnh lược, tiểu từ, từ lóng'],
      ['Nghệ thuật', 'худо́жественный', 'văn chương', 'dùng được tất cả những cái trên, có chủ đích']
    ]},
    { t: 'note', html: 'B2 không đòi em viết văn chương. Nó đòi em <b>phân biệt được</b> bốn phong cách đầu và <b>viết được</b> hai cái đầu: khoa học và hành chính. Đó chính là hai thứ nghiên cứu sinh dùng hằng ngày.' },
    { t: 'h', text: 'Cùng một ý, ba phong cách' },
    { t: 'table', head: ['Phong cách', 'Câu'], rows: [
      ['Khẩu ngữ', 'Мы попробовали новый метод — вышло намного лучше.'],
      ['Báo chí', 'Новый метод дал заметно лучший результат — и это, пожалуй, главная новость года.'],
      ['Khoa học', 'Применение предложенного метода позволило повысить эффективность на 23 %.'],
      ['Hành chính', 'В соответствии с решением кафедры от 12.03.2026 предложенный метод рекомендован к внедрению.']
    ]},
    { t: 'tip', html: 'Nhìn kỹ bốn câu trên: câu khoa học không có ai làm chủ ngữ cả — chủ ngữ là <span class="ru">примене́ние</span> (việc áp dụng). Đó là đặc điểm số một của phong cách khoa học Nga: <b>hành động bị biến thành danh từ</b>.' },
    { t: 'h', text: 'Bốn đặc điểm của phong cách khoa học' },
    { t: 'table', head: ['Đặc điểm', 'Tên Nga', 'Thể hiện thế nào'], rows: [
      ['Trừu tượng hoá', 'отвлечённость', 'nói về loại, không nói về trường hợp riêng lẻ'],
      ['Chính xác', 'то́чность', 'một thuật ngữ = một nghĩa, không dùng từ đồng nghĩa cho vui'],
      ['Chặt chẽ', 'логи́чность', 'câu nối bằng liên từ rõ ràng, không nhảy ý'],
      ['Khách quan', 'объекти́вность', 'không có "tôi", không có cảm xúc, không có đánh giá cá nhân']
    ]},
    { t: 'h', text: 'Cách xoá chữ "tôi"' },
    { t: 'table', head: ['Đừng viết', 'Hãy viết', 'Gọi là gì'], rows: [
      ['Я счита́ю, что…', 'Представля́ется целесообра́зным…', 'câu vô nhân xưng'],
      ['Я провёл экспериме́нт.', 'Был проведён экспериме́нт. / На́ми был проведён экспериме́нт.', 'bị động'],
      ['Я узна́л, что…', 'Устано́влено, что…', 'dạng ngắn bị động'],
      ['Я ду́маю, э́то ва́жно.', 'Да́нный вопро́с представля́ет значи́тельный интере́с.', 'danh hoá'],
      ['Мы уви́дели, что…', 'Как показа́ли результа́ты, …', 'chuyển chủ thể sang kết quả']
    ]},
    { t: 'warn', html: 'Đại từ <span class="ru">мы</span> ("chúng tôi khiêm tốn") <b>vẫn được dùng</b> trong khoa học Nga — <span class="ru">Мы полага́ем…</span>, <span class="ru">На́ми установлено…</span> — nhưng <span class="ru">я</span> thì gần như không bao giờ. Trong luận án, dùng <span class="ru">я</span> một lần là hội đồng để ý ngay.' },
    { t: 'h', text: 'Danh hoá — vũ khí chính' },
    { t: 'table', head: ['Động từ', 'Danh từ hành động', 'Trong câu khoa học'], rows: [
      ['примени́ть', 'примене́ние', 'примене́ние ме́тода позво́лило…'],
      ['изучи́ть', 'изуче́ние', 'изуче́ние пробле́мы пока́зывает…'],
      ['повы́сить', 'повыше́ние', 'повыше́ние эффекти́вности на 15 %'],
      ['снизи́ть', 'сниже́ние', 'сниже́ние затра́т'],
      ['разрабо́тать', 'разрабо́тка', 'разрабо́тка но́вой моде́ли'],
      ['испо́льзовать', 'испо́льзование', 'испо́льзование да́нных'],
      ['измеря́ть', 'измере́ние', 'то́чность измере́ний'],
      ['внедри́ть', 'внедре́ние', 'внедре́ние в произво́дство']
    ]},
    { t: 'tip', html: 'Quy tắc: hầu hết động từ khoa học biến thành danh từ bằng đuôi <b>-ние</b> (примене́ние, изуче́ние) hoặc <b>-ка</b> (разрабо́тка, обрабо́тка). Học một cặp là được cả hai — và cái danh từ ấy mới là thứ em cần khi viết.' },
    { t: 'warn', html: 'Nhưng đừng lạm dụng. Câu <span class="ru">Осуществле́ние проведе́ния рабо́т по улучше́нию…</span> là câu người Nga chê là <span class="ru">канцеляри́т</span> — bệnh công văn. Ba danh từ hành động liền nhau là quá nhiều. Hai là đủ.' },
    { t: 'h', text: 'Thì hiện tại phi thời gian' },
    { t: 'p', html: 'Trong khoa học, thì hiện tại không có nghĩa "đang xảy ra bây giờ" mà là "luôn luôn đúng":' },
    { t: 'p', html: '<span class="ru">Вода́ кипи́т при 100 °C. · Металл расширя́ется при нагрева́нии. · Да́нный ме́тод применя́ется в маши́ностроении.</span>' },
    { t: 'note', html: 'Gọi là <span class="ru">настоя́щее вневре́менное</span>. Đây là lý do phần lớn câu trong giáo trình Nga ở thì hiện tại — không phải vì đang xảy ra, mà vì đó là quy luật.' },
    { t: 'h', text: 'Những thứ tuyệt đối không có trong văn khoa học' },
    { t: 'table', head: ['Không dùng', 'Ví dụ sai', 'Thay bằng'], rows: [
      ['Từ khẩu ngữ', 'о́чень кла́ссный результа́т', 'весьма́ значи́тельный результа́т'],
      ['Từ cảm xúc', 'к сча́стью, всё получи́лось', 'поста́вленная цель дости́гнута'],
      ['Thán từ, chấm than', 'Э́то потряса́юще!', '(bỏ hẳn)'],
      ['Thành ngữ', 'де́ло в шля́пе', '(bỏ hẳn)'],
      ['Từ mơ hồ về lượng', 'о́чень мно́го', 'зна́чительное коли́чество · на 34 % бо́льше'],
      ['Nói quá', 'абсолю́тно все учёные', 'большинство́ иссле́дователей']
    ]},
    { t: 'h', text: 'Cách nói thận trọng (хеджирование)' },
    { t: 'words', items: [
      { ru: 'по-ви́димому', vn: 'có vẻ như, dường như' },
      { ru: 'вероя́тно', vn: 'nhiều khả năng' },
      { ru: 'мо́жно предположи́ть, что…', vn: 'có thể giả định rằng…' },
      { ru: 'как пра́вило', vn: 'thường thì, theo lệ' },
      { ru: 'в большинстве́ слу́чаев', vn: 'trong đa số trường hợp' },
      { ru: 'при про́чих ра́вных усло́виях', vn: 'trong điều kiện những thứ khác như nhau' },
      { ru: 'да́нные позволя́ют предположи́ть', vn: 'số liệu cho phép giả định' },
      { ru: 'тре́бует дальне́йшего изуче́ния', vn: 'cần nghiên cứu thêm' }
    ]},
    { t: 'note', html: 'Khoa học Nga cũng như khoa học phương Tây: <b>khẳng định tuyệt đối là dấu hiệu của người non tay</b>. Câu "kết quả cho thấy khả năng…" luôn an toàn hơn câu "kết quả chứng minh…". Hội đồng phản biện tấn công chính vào những chỗ nói quá.' },
    { t: 'h', text: 'Bài đọc — nhận diện phong cách' },
    { t: 'p', html: '<b>Đoạn A:</b> <span class="ru">В ходе исследования была разработана математическая модель износа деталей, учитывающая температурный режим работы двигателя. Применение модели позволило повысить точность прогнозирования ресурса на 18 % по сравнению с существующими методиками.</span>' },
    { t: 'p', html: '<b>Đoạn B:</b> <span class="ru">Слушай, мы тут посчитали, как детали снашиваются, если движок греется. Получилось намного точнее, чем раньше — процентов на двадцать!</span>' },
    { t: 'p', html: '<b>Đoạn C:</b> <span class="ru">Прошу разрешить внедрение разработанной математической модели в учебный процесс кафедры с 01.09.2026.</span>' },
    { t: 'table', head: ['Đoạn', 'Phong cách', 'Nhận ra nhờ'], rows: [
      ['A', 'Khoa học', 'danh hoá (примене́ние, прогнози́рование), bị động (была́ разрабо́тана), phân từ (учи́тывающая), con số chính xác'],
      ['B', 'Khẩu ngữ', 'слу́шай, дви́жок (từ lóng của дви́гатель), про́центов на два́дцать (ước chừng), chấm than'],
      ['C', 'Hành chính', 'Прошу́ разреши́ть, ngày tháng viết đủ số, không chủ ngữ, một câu duy nhất']
    ]},
    { t: 'tip', html: 'Bài tập tự làm suốt cấp B2: mỗi khi đọc bất cứ thứ gì bằng tiếng Nga, hỏi ngay <b>"đây là phong cách nào?"</b> trước khi hỏi "câu này nghĩa gì". Nhận ra phong cách là nhận ra người viết đang muốn gì.' }
  ],
  vocab: [
    { ru: 'стиль', vn: 'phong cách' }, { ru: 'нау́чный стиль', vn: 'phong cách khoa học' },
    { ru: 'официа́льно-делово́й', vn: 'hành chính công vụ' }, { ru: 'публицисти́ческий', vn: 'báo chí, chính luận' },
    { ru: 'разгово́рный', vn: 'khẩu ngữ' }, { ru: 'отвлечённость', vn: 'tính trừu tượng' },
    { ru: 'то́чность', vn: 'độ chính xác' }, { ru: 'объекти́вность', vn: 'tính khách quan' },
    { ru: 'примене́ние', vn: 'việc áp dụng' }, { ru: 'изуче́ние', vn: 'việc nghiên cứu' },
    { ru: 'повыше́ние', vn: 'việc nâng cao' }, { ru: 'сниже́ние', vn: 'việc giảm' },
    { ru: 'разрабо́тка', vn: 'việc phát triển, thiết kế' }, { ru: 'внедре́ние', vn: 'việc đưa vào áp dụng' },
    { ru: 'устано́влено', vn: 'đã xác lập được rằng' }, { ru: 'представля́ется', vn: 'xem ra, có vẻ (vô nhân xưng)' },
    { ru: 'целесообра́зно', vn: 'hợp lý, nên làm' }, { ru: 'по-ви́димому', vn: 'dường như' },
    { ru: 'канцеляри́т', vn: 'bệnh văn công văn' }, { ru: 'весьма́', vn: 'rất (trang trọng)' }
  ],
  ex: [
    { t: 'choice', q: 'Đặc điểm số một của phong cách khoa học Nga là:', options: ['Câu dài', 'Danh hoá — biến hành động thành danh từ', 'Dùng nhiều tính từ', 'Dùng thì quá khứ'], a: 1, why: 'Примене́ние ме́тода позво́лило… — chủ ngữ là danh từ hành động, không phải người.' },
    { t: 'choice', q: 'Trong luận án tiếng Nga, đại từ nào <b>gần như không dùng</b>?', options: ['мы', 'я', 'нами', 'он'], a: 1, why: '"Мы khiêm tốn" vẫn dùng được, nhưng "я" là dấu hiệu thiếu chuyên nghiệp.' },
    { t: 'choice', q: 'Danh từ hành động của <span class="ru">внедри́ть</span> là:', options: ['внедря́ние', 'внедре́ние', 'внедрёнка', 'внедри́тельство'], a: 1, why: 'Đuôi -ние là cách danh hoá phổ biến nhất trong văn khoa học.' },
    { t: 'choice', q: '<span class="ru">Вода́ кипи́т при 100 °C</span> — thì hiện tại ở đây có nghĩa:', options: ['Đang sôi lúc này', 'Luôn luôn đúng (phi thời gian)', 'Sắp sôi', 'Đã sôi'], a: 1, why: 'настоя́щее вневре́менное — dùng để phát biểu quy luật.' },
    { t: 'choice', q: '<span class="ru">канцеляри́т</span> là gì?', options: ['Một loại giấy tờ', 'Bệnh chất đống danh từ hành động khiến câu nặng nề', 'Nhân viên văn phòng', 'Phòng hành chính'], a: 1, why: 'Осуществле́ние проведе́ния рабо́т по улучше́нию… — ba danh hoá liền nhau là quá nhiều.' },
    { t: 'choice', q: 'Câu nào <b>đúng</b> phong cách khoa học?', options: ['Я думаю, что результат очень хороший!', 'Полученные результаты свидетельствуют о повышении эффективности.', 'Ну, вышло вроде неплохо.', 'Это просто потрясающе.'], a: 1, why: 'Không có "tôi", không cảm xúc, có danh hoá.' },
    { t: 'choice', q: '<span class="ru">Представля́ется целесообра́зным…</span> thay cho câu nào?', options: ['Tôi cho rằng nên…', 'Tôi đã làm…', 'Chúng tôi thấy…', 'Người ta bảo…'], a: 0, why: 'Đây là cách xoá chữ "tôi" bằng câu vô nhân xưng.' },
    { t: 'choice', q: 'Vì sao khoa học Nga tránh khẳng định tuyệt đối?', options: ['Vì lịch sự', 'Vì hội đồng phản biện tấn công đúng vào chỗ nói quá', 'Vì ngữ pháp cấm', 'Vì truyền thống'], a: 1, why: 'Cách nói thận trọng (хеджи́рование) là kỹ năng bắt buộc ở bậc sau đại học.' },
    { t: 'type', q: 'Danh hoá của <span class="ru">повы́сить</span> là:', a: 'повышение', alt: ['повыше́ние'], hint: 'Đuôi -ние.' },
    { t: 'type', q: 'Điền từ trang trọng thay cho <span class="ru">о́чень</span>: ___ значи́тельный результа́т.', a: 'весьма', alt: ['весьма́'], hint: 'Bắt đầu bằng "в".' },
    { t: 'match', q: 'Nối phong cách với dấu hiệu:', pairs: [['нау́чный', 'danh hoá, bị động, thuật ngữ'], ['официа́льно-делово́й', 'khuôn mẫu cứng, không có "tôi"'], ['разгово́рный', 'câu ngắn, tiểu từ, từ lóng'], ['публицисти́ческий', 'có lập luận và có cảm xúc']] }
  ]
};

/* ---------------------------------------------------------- BÀI 2 */
LESSON_DATA['b2-02'] = {
  level: 'b2',
  intro: 'Bài này là <b>bộ đồ nghề</b>. Khoảng 80 mẫu câu cố định mà mọi bài báo, mọi luận văn, mọi báo cáo khoa học Nga đều dùng. Học thuộc chúng thì em không còn phải nghĩ cách diễn đạt — chỉ còn phải nghĩ nội dung.',
  blocks: [
    { t: 'note', html: 'Cách dùng bài này: đừng đọc một lượt rồi thôi. Mỗi lần viết một đoạn tiếng Nga, mở bài này ra, chọn mẫu câu phù hợp, điền nội dung của mình vào. Sau khoảng hai mươi lần, chúng tự vào đầu.' },
    { t: 'h', text: '1. Tính cấp thiết của đề tài (актуальность)' },
    { t: 'words', items: [
      { ru: 'Актуа́льность те́мы обусло́влена тем, что…', vn: 'Tính cấp thiết của đề tài do chỗ là…' },
      { ru: 'В настоя́щее вре́мя осо́бую значи́мость приобрета́ет…', vn: 'Hiện nay vấn đề… có ý nghĩa đặc biệt' },
      { ru: 'Пробле́ма… остаётся недоста́точно изу́ченной.', vn: 'Vấn đề… vẫn chưa được nghiên cứu đầy đủ' },
      { ru: 'Возраста́ющий интере́с к… объясня́ется…', vn: 'Sự quan tâm ngày càng tăng tới… được giải thích bởi…' },
      { ru: 'Несмотря́ на значи́тельное число́ рабо́т, вопро́с о… остаётся откры́тым.', vn: 'Dù đã có nhiều công trình, câu hỏi về… vẫn còn để ngỏ' }
    ]},
    { t: 'tip', html: 'Câu cuối cùng là câu <b>vàng</b> của phần mở đầu: nó vừa thừa nhận người đi trước (lịch sự bắt buộc), vừa chừa chỗ cho công trình của mình. Gần như luận án nào cũng có một biến thể của câu ấy.' },
    { t: 'h', text: '2. Mục đích và nhiệm vụ (цель и задачи)' },
    { t: 'words', items: [
      { ru: 'Це́лью рабо́ты явля́ется…', vn: 'Mục đích của công trình là…' },
      { ru: 'Настоя́щая рабо́та посвящена́…', vn: 'Công trình này dành cho việc…' },
      { ru: 'Для достиже́ния поста́вленной це́ли решены́ сле́дующие зада́чи:', vn: 'Để đạt mục tiêu đề ra, các nhiệm vụ sau đã được giải quyết:' },
      { ru: 'Объе́ктом иссле́дования явля́ется…', vn: 'Đối tượng nghiên cứu là…' },
      { ru: 'Предме́том иссле́дования выступа́ет…', vn: 'Khách thể nghiên cứu là…' },
      { ru: 'Выдвига́ется гипо́теза о том, что…', vn: 'Giả thuyết được nêu ra là…' }
    ]},
    { t: 'warn', html: 'Cặp <span class="ru">объе́кт</span> / <span class="ru">предме́т</span> là chỗ người nước ngoài sai nhiều nhất. <b>Объе́кт</b> là toàn bộ hiện tượng em đụng tới (ví dụ: quá trình mài mòn chi tiết động cơ). <b>Предме́т</b> là lát cắt hẹp em thật sự nghiên cứu (ví dụ: ảnh hưởng của nhiệt độ tới tốc độ mài mòn). Objek rộng, predmet hẹp — và predmet luôn nằm trong objekt.' },
    { t: 'h', text: '3. Phương pháp (методы)' },
    { t: 'words', items: [
      { ru: 'В рабо́те испо́льзованы сле́дующие ме́тоды:', vn: 'Trong công trình đã dùng các phương pháp sau:' },
      { ru: 'Иссле́дование прово́дилось на осно́ве…', vn: 'Nghiên cứu được tiến hành trên cơ sở…' },
      { ru: 'Для обрабо́тки да́нных применя́лся…', vn: 'Để xử lý số liệu đã áp dụng…' },
      { ru: 'Экспериме́нт проводи́лся в усло́виях…', vn: 'Thí nghiệm được tiến hành trong điều kiện…' },
      { ru: 'Вы́борка соста́вила 120 наблюде́ний.', vn: 'Mẫu gồm 120 quan sát.' }
    ]},
    { t: 'h', text: '4. Nhắc tới người đi trước (обзор литературы)' },
    { t: 'words', items: [
      { ru: 'Да́нной пробле́ме посвящены́ рабо́ты И. И. Ивано́ва, П. С. Петро́ва.', vn: 'Vấn đề này được đề cập trong các công trình của…' },
      { ru: 'Как отмеча́ет Ивано́в [1], …', vn: 'Như Ivanov [1] nhận xét, …' },
      { ru: 'По мне́нию ря́да иссле́дователей, …', vn: 'Theo ý kiến của một số nhà nghiên cứu, …' },
      { ru: 'В рабо́те [3] пока́зано, что…', vn: 'Trong công trình [3] đã chỉ ra rằng…' },
      { ru: 'Одна́ко в указа́нных рабо́тах не рассма́тривается…', vn: 'Tuy nhiên trong các công trình nói trên chưa xét tới…' },
      { ru: 'Существу́ющие подхо́ды мо́жно раздели́ть на две гру́ппы.', vn: 'Các cách tiếp cận hiện có có thể chia thành hai nhóm.' }
    ]},
    { t: 'note', html: 'Chú ý cách viết tên trong khoa học Nga: <b>chữ cái đầu của tên và phụ danh, rồi mới đến họ</b> — <span class="ru">И. И. Ивано́в</span>, chứ không phải Иванов И. И. (thứ tự ngược chỉ dùng trong danh mục tài liệu tham khảo). Sai chỗ này là lộ ngay.' },
    { t: 'h', text: '5. Trình bày kết quả' },
    { t: 'words', items: [
      { ru: 'Устано́влено, что…', vn: 'Đã xác định được rằng…' },
      { ru: 'Полу́ченные результа́ты свиде́тельствуют о том, что…', vn: 'Kết quả thu được cho thấy rằng…' },
      { ru: 'Как ви́дно из табли́цы 2, …', vn: 'Như thấy từ bảng 2, …' },
      { ru: 'На рису́нке 3 предста́влена зави́симость…', vn: 'Hình 3 thể hiện quan hệ phụ thuộc…' },
      { ru: 'Наблюда́ется устойчи́вая тенде́нция к…', vn: 'Quan sát thấy xu hướng ổn định tới…' },
      { ru: 'Разли́чия статисти́чески значи́мы (p < 0,05).', vn: 'Khác biệt có ý nghĩa thống kê.' },
      { ru: 'Максима́льное значе́ние дости́гнуто при…', vn: 'Giá trị lớn nhất đạt được khi…' }
    ]},
    { t: 'h', text: '6. So sánh và đối chiếu' },
    { t: 'table', head: ['Mẫu câu', 'Dùng khi'], rows: [
      ['В отли́чие от…', 'nêu điểm khác biệt cơ bản'],
      ['По сравне́нию с…', 'so sánh có số liệu'],
      ['Аналоги́чно…', 'chỉ ra điểm giống'],
      ['С одно́й стороны́… с друго́й стороны́…', 'trình bày hai mặt'],
      ['Тогда́ как… / в то вре́мя как…', 'đối lập hai hiện tượng cùng lúc'],
      ['Ины́ми слова́ми…', 'nói lại cho rõ']
    ]},
    { t: 'h', text: '7. Nối ý — bộ khung logic' },
    { t: 'table', head: ['Chức năng', 'Từ nối'], rows: [
      ['Thêm ý', 'кро́ме того́ · та́кже · бо́лее того́ · наряду́ с э́тим'],
      ['Nguyên nhân', 'вследствие э́того · в си́лу того́, что · поско́льку'],
      ['Kết quả', 'сле́довательно · таки́м о́бразом · в результа́те · отсю́да сле́дует, что'],
      ['Đối lập', 'одна́ко · тем не ме́нее · напро́тив · вме́сте с тем'],
      ['Nhấn mạnh', 'в ча́стности · и́менно · осо́бенно · сле́дует подчеркну́ть, что'],
      ['Trình tự', 'во-пе́рвых · зате́м · далее · наконе́ц'],
      ['Chuyển chủ đề', 'что каса́ется… · перейдём к рассмотре́нию…']
    ]},
    { t: 'note', html: '<span class="ru">наряду́ с</span> đi với <b>cách 5</b> và nghĩa là "cùng với, bên cạnh": <span class="ru">наряду́ с други́ми ме́тодами</span>. Đừng nhầm với <span class="ru">на ряду́</span> viết rời (nghĩa đen: ở trên hàng ghế).' },
    { t: 'h', text: '8. Kết luận' },
    { t: 'words', items: [
      { ru: 'Таки́м о́бразом, мо́жно сде́лать вы́вод о том, что…', vn: 'Như vậy, có thể kết luận rằng…' },
      { ru: 'На основа́нии изло́женного…', vn: 'Trên cơ sở những điều đã trình bày…' },
      { ru: 'Проведённое иссле́дование позволя́ет утвержда́ть, что…', vn: 'Nghiên cứu đã tiến hành cho phép khẳng định rằng…' },
      { ru: 'Поста́вленная цель дости́гнута.', vn: 'Mục tiêu đề ra đã đạt được.' },
      { ru: 'Перспекти́вы дальне́йшего иссле́дования свя́заны с…', vn: 'Hướng nghiên cứu tiếp theo gắn với…' }
    ]},
    { t: 'h', text: '9. Tính mới và ý nghĩa thực tiễn' },
    { t: 'words', items: [
      { ru: 'Нау́чная новизна́ заключа́ется в том, что впервы́е…', vn: 'Tính mới khoa học nằm ở chỗ lần đầu tiên…' },
      { ru: 'Практи́ческая зна́чимость рабо́ты состои́т в возмо́жности…', vn: 'Ý nghĩa thực tiễn nằm ở khả năng…' },
      { ru: 'Результа́ты мо́гут быть испо́льзованы при…', vn: 'Kết quả có thể được sử dụng khi…' },
      { ru: 'Разрабо́танная модель внедрена́ в уче́бный проце́сс.', vn: 'Mô hình đã xây dựng được đưa vào chương trình giảng dạy.' }
    ]},
    { t: 'h', text: 'Một đoạn mở đầu ráp từ các mẫu trên' },
    { t: 'p', html: '<span class="ru">Актуальность темы обусловлена ростом требований к надёжности транспортных средств в условиях низких температур. Данной проблеме посвящены работы ряда исследователей, однако в указанных работах не рассматривается совместное влияние температурного режима и качества смазочных материалов. Целью работы является разработка математической модели износа деталей двигателя с учётом этих двух факторов. Объектом исследования выступает процесс износа деталей цилиндропоршневой группы, предметом — зависимость скорости износа от температуры и вязкости масла. Выдвигается гипотеза о том, что при температурах ниже −30 °C влияние вязкости становится определяющим.</span>' },
    { t: 'note', html: 'Sáu câu, và mỗi câu là một mẫu trong bài này: cấp thiết → người đi trước → khoảng trống → mục đích → objekt/predmet → giả thuyết. Đó chính là <b>bộ xương của mọi phần mở đầu</b> trong khoa học Nga. Em thay nội dung ngành mình vào là xong.' },
    { t: 'tip', html: 'Bài tập: viết một đoạn mở đầu sáu câu đúng bộ xương trên cho chính đề tài của em. Không cần đúng nội dung khoa học — cần đúng khuôn. Làm ba lần với ba đề tài khác nhau là khuôn tự thuộc.' }
  ],
  vocab: [
    { ru: 'актуа́льность', vn: 'tính cấp thiết' }, { ru: 'обусло́влен', vn: 'do… quy định' },
    { ru: 'цель', vn: 'mục đích' }, { ru: 'зада́ча', vn: 'nhiệm vụ' },
    { ru: 'объе́кт иссле́дования', vn: 'đối tượng nghiên cứu (rộng)' }, { ru: 'предме́т иссле́дования', vn: 'khách thể nghiên cứu (hẹp)' },
    { ru: 'гипо́теза', vn: 'giả thuyết' }, { ru: 'вы́борка', vn: 'mẫu (thống kê)' },
    { ru: 'зави́симость', vn: 'quan hệ phụ thuộc' }, { ru: 'тенде́нция', vn: 'xu hướng' },
    { ru: 'свиде́тельствовать о', vn: 'chứng tỏ về' }, { ru: 'значи́мый', vn: 'có ý nghĩa' },
    { ru: 'нау́чная новизна́', vn: 'tính mới khoa học' }, { ru: 'практи́ческая зна́чимость', vn: 'ý nghĩa thực tiễn' },
    { ru: 'наряду́ с', vn: 'cùng với, bên cạnh' }, { ru: 'вме́сте с тем', vn: 'đồng thời, mặt khác' },
    { ru: 'в ча́стности', vn: 'cụ thể là, đặc biệt là' }, { ru: 'отсю́да сле́дует', vn: 'từ đó suy ra' },
    { ru: 'перспекти́вы', vn: 'triển vọng, hướng tiếp theo' }, { ru: 'утвержда́ть', vn: 'khẳng định' }
  ],
  ex: [
    { t: 'choice', q: 'Khác nhau giữa <span class="ru">объе́кт</span> và <span class="ru">предме́т</span> nghiên cứu:', options: ['Không khác gì', 'Объект rộng, предмет là lát cắt hẹp bên trong', 'Объект hẹp, предмет rộng', 'Объект là vật, предмет là người'], a: 1, why: 'Предмет luôn nằm bên trong объект — đây là chỗ người nước ngoài sai nhiều nhất.' },
    { t: 'choice', q: 'Câu "vàng" chừa chỗ cho công trình của mình là:', options: ['Целью работы является…', 'Несмотря на значительное число работ, вопрос остаётся открытым', 'Установлено, что…', 'Таким образом…'], a: 1, why: 'Vừa thừa nhận người đi trước, vừa nêu được khoảng trống mình lấp.' },
    { t: 'choice', q: 'Trong văn khoa học Nga, tên người viết thế nào?', options: ['Иванов И. И.', 'И. И. Иванов', 'Иван Иванов', 'Иванов Иван Иванович'], a: 1, why: 'Chữ cái đầu trước, họ sau; thứ tự ngược chỉ dùng trong danh mục tài liệu tham khảo.' },
    { t: 'choice', q: '<span class="ru">наряду́ с</span> đi với cách nào?', options: ['cách 2', 'cách 3', 'cách 4', 'cách 5'], a: 3, why: 'наряду́ с + творительный: наряду с этим, наряду с другими методами.' },
    { t: 'choice', q: '<span class="ru">Отсю́да сле́дует, что…</span> dùng để:', options: ['Thêm ý', 'Nêu kết quả suy ra', 'Đối lập', 'Chuyển chủ đề'], a: 1, why: 'Đây là từ nối chỉ hệ quả logic.' },
    { t: 'choice', q: 'Bộ xương phần mở đầu khoa học Nga có thứ tự:', options: ['Mục đích → cấp thiết → giả thuyết', 'Cấp thiết → người đi trước → khoảng trống → mục đích → objekt/predmet → giả thuyết', 'Giả thuyết → kết quả → kết luận', 'Phương pháp → mục đích → cấp thiết'], a: 1, why: 'Trình tự này gần như bất biến trong mọi luận án Nga.' },
    { t: 'type', q: 'Điền: Нау́чная ___ заключа́ется в том, что впервы́е… (tính mới)', a: 'новизна', alt: ['новизна́'], hint: 'Cùng gốc với новый.' },
    { t: 'type', q: 'Điền: Полу́ченные результа́ты ___ о том, что… (chứng tỏ)', a: 'свидетельствуют', alt: ['свиде́тельствуют'], hint: 'свидетельствовать о + cách 6.' },
    { t: 'type', q: 'Điền: Це́лью рабо́ты ___ разрабо́тка моде́ли. (là)', a: 'является', alt: ['явля́ется'], hint: 'Động từ nối trang trọng thay cho "быть".' },
    { t: 'match', q: 'Nối từ nối với chức năng:', pairs: [['сле́довательно', 'nêu kết quả'], ['одна́ко', 'đối lập'], ['в ча́стности', 'nhấn mạnh cụ thể'], ['кро́ме того́', 'thêm ý']] }
  ]
};

/* ---------------------------------------------------------- BÀI 3 */
LESSON_DATA['b2-03'] = {
  level: 'b2',
  intro: 'Bài báo khoa học Nga có <b>cấu trúc cố định</b>. Biết cấu trúc ấy, em đọc một bài dài 12 trang trong mười lăm phút và biết chắc mình không bỏ sót gì quan trọng. Không biết, em đọc từ đầu tới cuối trong ba tiếng và vẫn không tóm được ý.',
  blocks: [
    { t: 'h', text: 'Giải phẫu một bài báo Nga' },
    { t: 'table', head: ['Phần', 'Tên Nga', 'Có gì trong đó'], rows: [
      ['Chỉ số phân loại', 'УДК 621.43', 'mã ngành, luôn ở góc trên trái'],
      ['Nhan đề', 'назва́ние', 'thường là một cụm danh từ dài, không phải câu'],
      ['Tác giả và cơ quan', 'а́вторы, организа́ция', 'họ tên + trường/viện'],
      ['Tóm tắt', 'аннота́ция', '4–8 câu: làm gì, bằng cách nào, ra sao'],
      ['Từ khoá', 'ключевы́е слова́', '5–8 từ, cho em biết ngay bài thuộc mảng nào'],
      ['Mở đầu', 'введе́ние', 'cấp thiết, tổng quan, mục đích'],
      ['Vật liệu và phương pháp', 'материа́лы и ме́тоды', 'làm thí nghiệm thế nào'],
      ['Kết quả', 'результа́ты', 'số liệu, bảng, hình'],
      ['Bàn luận', 'обсужде́ние', 'giải thích số liệu, so với người khác'],
      ['Kết luận', 'заключе́ние / вы́воды', 'thường đánh số 1., 2., 3.'],
      ['Tài liệu', 'спи́сок литерату́ры', 'theo chuẩn ГОСТ']
    ]},
    { t: 'tip', html: 'Trình tự đọc <b>không</b> phải từ trên xuống. Đọc theo thứ tự này: <b>аннотация → выводы → рисунки và таблицы → введение (đoạn cuối) → методы</b>. Sau bốn bước đầu em đã biết bài nói gì; chỉ đọc kỹ phần методы khi định làm theo.' },
    { t: 'h', text: 'Vì sao đọc kết luận trước phần kết quả' },
    { t: 'note', html: 'Phần <span class="ru">результа́ты</span> là số liệu thô — dài, dày đặc bảng biểu, khó tiêu. Phần <span class="ru">вы́воды</span> là chính tác giả nói ra ý nghĩa của những số liệu ấy, thường trong 3–5 dòng đánh số. Đọc kết luận trước, rồi quay lại số liệu để <b>kiểm tra xem kết luận có đứng vững không</b> — đó là cách đọc của người phản biện, không phải của người học thuộc.' },
    { t: 'h', text: 'Đọc nhan đề tiếng Nga' },
    { t: 'p', html: 'Nhan đề khoa học Nga hầu như luôn là một <b>chuỗi danh từ ở cách 2</b> nối nhau. Đọc từ trái sang phải sẽ rối; hãy đọc <b>từ trong ra ngoài</b>.' },
    { t: 'p', html: '<span class="ru ru-big">Исследование влияния температурного режима на интенсивность износа деталей цилиндропоршневой группы</span>' },
    { t: 'table', head: ['Mảnh', 'Nghĩa', 'Vai trò'], rows: [
      ['Иссле́дование', 'nghiên cứu', 'từ trung tâm — bài này là một nghiên cứu'],
      ['влия́ния (2)', 'ảnh hưởng', 'nghiên cứu về cái gì'],
      ['температу́рного режи́ма (2)', 'chế độ nhiệt độ', 'ảnh hưởng của cái gì'],
      ['на интенси́вность изно́са (4)', 'lên cường độ mài mòn', 'ảnh hưởng lên cái gì'],
      ['дета́лей (2)', 'của các chi tiết', 'mài mòn của cái gì'],
      ['цилиндропоршнево́й гру́ппы (2)', 'nhóm xy-lanh–pít-tông', 'chi tiết thuộc bộ phận nào']
    ]},
    { t: 'tip', html: 'Kỹ thuật: tìm <b>danh từ đầu tiên</b> (nó là hạt nhân), rồi mỗi danh từ cách 2 tiếp theo là một tầng bổ nghĩa cho từ ngay trước nó. Chuỗi cách 2 bốn tầng như trên là bình thường trong tiếng Nga kỹ thuật — tiếng Việt phải tách thành hai câu mới dịch nổi.' },
    { t: 'h', text: 'Từ vựng của phần kết quả' },
    { t: 'table', head: ['Từ Nga', 'Nghĩa', 'Hay gặp trong'], rows: [
      ['зави́симость', 'quan hệ phụ thuộc, hàm', 'зависимость A от B'],
      ['закономе́рность', 'quy luật', 'выявлена закономерность'],
      ['коэффицие́нт', 'hệ số', 'коэффициент корреляции'],
      ['погре́шность', 'sai số', 'погрешность измерений составила 3 %'],
      ['достове́рность', 'độ tin cậy', 'достоверность результатов'],
      ['разбро́с', 'độ tản mát', 'разброс значений'],
      ['вы́борка', 'mẫu', 'выборка из 200 образцов'],
      ['образе́ц', 'mẫu vật', 'испытано 40 образцов'],
      ['при про́чих ра́вных', 'khi các yếu tố khác như nhau', 'điều kiện so sánh'],
      ['в сре́днем', 'trung bình', 'в среднем на 12 % выше']
    ]},
    { t: 'h', text: 'Cách nói về hình và bảng' },
    { t: 'words', items: [
      { ru: 'Как ви́дно из рису́нка 2, …', vn: 'Như thấy từ hình 2, …' },
      { ru: 'В табли́це 1 приведены́ да́нные…', vn: 'Bảng 1 nêu các số liệu…' },
      { ru: 'На графике представлена зави́симость…', vn: 'Đồ thị thể hiện quan hệ phụ thuộc…' },
      { ru: 'Кривая 1 соотве́тствует…', vn: 'Đường cong 1 ứng với…' },
      { ru: 'По оси́ абсци́сс отло́жено вре́мя.', vn: 'Trục hoành là thời gian.' },
      { ru: 'По оси́ ордина́т — температу́ра.', vn: 'Trục tung là nhiệt độ.' },
      { ru: 'Значе́ния возраста́ют / убыва́ют.', vn: 'Các giá trị tăng / giảm.' },
      { ru: 'Кривая выхо́дит на плато́.', vn: 'Đường cong đi vào đoạn bão hoà.' }
    ]},
    { t: 'h', text: 'Trích dẫn kiểu Nga' },
    { t: 'table', head: ['Kiểu', 'Trong bài viết thế nào'], rows: [
      ['Số trong ngoặc vuông', 'Как показано в [4], … — phổ biến nhất'],
      ['Họ + số', 'Иванов [4] отмечает, что…'],
      ['Nhiều nguồn', 'Ряд авторов [2, 5, 7] придерживается мнения…'],
      ['Danh mục cuối bài', 'Иванов И. И. Название работы. — М.: Наука, 2021. — 240 с.']
    ]},
    { t: 'note', html: 'Trong danh mục tài liệu, họ đứng <b>trước</b> chữ cái đầu (<span class="ru">Ивано́в И. И.</span>) — ngược với khi nhắc trong bài. Dấu <b>— М.:</b> nghĩa là "Moskva, nhà xuất bản…", <span class="ru">240 с.</span> là số trang. Đây là chuẩn ГОСТ, mọi tạp chí Nga đều bắt theo.' },
    { t: 'h', text: 'Bài đọc thử — một аннотация thật' },
    { t: 'p', html: '<span class="ru">Аннотация. В статье рассматривается влияние низких температур на интенсивность изнашивания деталей цилиндропоршневой группы дизельных двигателей. Проведены стендовые испытания четырёх групп образцов при температурах от −40 до +20 °C. Установлено, что при снижении температуры ниже −25 °C интенсивность изнашивания возрастает в среднем на 34 % вследствие ухудшения условий смазывания. Предложена уточнённая математическая модель, учитывающая вязкостно-температурную характеристику масла. Погрешность прогнозирования снижена с 19 до 8 %. Результаты могут быть использованы при разработке регламентов эксплуатации техники в северных регионах.</span>' },
    { t: 'table', head: ['Câu', 'Chức năng'], rows: [
      ['1', 'Chủ đề — bài xét cái gì'],
      ['2', 'Phương pháp — đã làm gì'],
      ['3', 'Kết quả chính + con số'],
      ['4', 'Đóng góp — đề xuất cái gì'],
      ['5', 'Hiệu quả — cải thiện bao nhiêu'],
      ['6', 'Ứng dụng — dùng vào đâu']
    ]},
    { t: 'tip', html: 'Sáu câu, sáu chức năng, không thừa một chữ. Đây là <b>khuôn аннотация chuẩn</b> mà bài 5 sẽ dạy em tự viết. Đọc lại đoạn trên và tự chỉ ra: đâu là danh hoá, đâu là bị động, đâu là câu vô nhân xưng — cả ba đặc điểm của bài 1 đều có mặt.' },
    { t: 'h', text: 'Ba câu hỏi sau khi đọc bất kỳ bài báo nào' },
    { t: 'table', head: ['Câu hỏi', 'Tìm ở đâu'], rows: [
      ['Tác giả làm gì mà người trước chưa làm?', 'cuối phần введение'],
      ['Bằng chứng nào chống lưng cho kết luận?', 'таблицы và рисунки'],
      ['Tác giả tự thừa nhận hạn chế gì?', 'cuối phần обсуждение, thường bắt đầu bằng «Следует отметить, что…»']
    ]},
    { t: 'note', html: 'Câu thứ ba là câu ít người hỏi nhất và quan trọng nhất. Một bài báo tử tế bao giờ cũng tự nêu giới hạn của mình. Nếu không nêu — đó chính là điều đáng nghi đầu tiên.' }
  ],
  vocab: [
    { ru: 'аннота́ция', vn: 'tóm tắt (đầu bài báo)' }, { ru: 'ключевы́е слова́', vn: 'từ khoá' },
    { ru: 'введе́ние', vn: 'phần mở đầu' }, { ru: 'заключе́ние', vn: 'kết luận' },
    { ru: 'вы́воды', vn: 'các kết luận (đánh số)' }, { ru: 'обсужде́ние', vn: 'phần bàn luận' },
    { ru: 'спи́сок литерату́ры', vn: 'danh mục tài liệu' }, { ru: 'зави́симость', vn: 'quan hệ phụ thuộc' },
    { ru: 'закономе́рность', vn: 'quy luật' }, { ru: 'погре́шность', vn: 'sai số' },
    { ru: 'достове́рность', vn: 'độ tin cậy' }, { ru: 'образе́ц', vn: 'mẫu vật' },
    { ru: 'испыта́ния', vn: 'thử nghiệm' }, { ru: 'стендо́вый', vn: 'trên bệ thử' },
    { ru: 'изна́шивание', vn: 'sự mài mòn' }, { ru: 'сма́зывание', vn: 'sự bôi trơn' },
    { ru: 'вя́зкость', vn: 'độ nhớt' }, { ru: 'регла́мент', vn: 'quy trình, quy chế' },
    { ru: 'ось абсци́сс', vn: 'trục hoành' }, { ru: 'ось ордина́т', vn: 'trục tung' }
  ],
  ex: [
    { t: 'choice', q: 'Trình tự đọc bài báo khoa học hiệu quả nhất là:', options: ['Từ đầu đến cuối', 'Аннотация → выводы → рисунки → введение → методы', 'Методы → результаты → введение', 'Список литературы trước'], a: 1, why: 'Bốn bước đầu đã cho biết bài nói gì; методы chỉ đọc kỹ khi định làm theo.' },
    { t: 'choice', q: 'Vì sao nên đọc <span class="ru">вы́воды</span> trước <span class="ru">результа́ты</span>?', options: ['Vì nó ngắn hơn', 'Vì đó là chính tác giả nói ra ý nghĩa của số liệu', 'Vì kết quả không quan trọng', 'Vì nó ở cuối bài'], a: 1, why: 'Rồi quay lại số liệu để kiểm tra kết luận có đứng vững không.' },
    { t: 'choice', q: 'Nhan đề khoa học Nga thường là:', options: ['Một câu đầy đủ', 'Một chuỗi danh từ nối nhau bằng cách 2', 'Một câu hỏi', 'Một mệnh đề phụ'], a: 1, why: 'Đọc từ hạt nhân ra ngoài, mỗi danh từ cách 2 bổ nghĩa cho từ ngay trước.' },
    { t: 'choice', q: '<span class="ru">погре́шность</span> nghĩa là:', options: ['tội lỗi', 'sai số', 'khoảng cách', 'độ trễ'], a: 1, why: 'Погрешность измерений составила 3 % — sai số phép đo.' },
    { t: 'choice', q: 'Trong danh mục tài liệu tham khảo, tên viết thế nào?', options: ['И. И. Иванов', 'Иванов И. И.', 'Иван Иванов', 'Иванов'], a: 1, why: 'Ngược với khi nhắc trong bài — đây là chuẩn ГОСТ.' },
    { t: 'choice', q: '<span class="ru">По оси́ абсци́сс</span> nghĩa là:', options: ['trục tung', 'trục hoành', 'trục z', 'đường chéo'], a: 1, why: 'Абсцисса = trục hoành (x); ордината = trục tung (y).' },
    { t: 'choice', q: 'Câu hỏi quan trọng nhất mà ít người đặt khi đọc bài báo:', options: ['Ai là tác giả?', 'Tác giả tự thừa nhận hạn chế gì?', 'Bài dài bao nhiêu trang?', 'Đăng ở tạp chí nào?'], a: 1, why: 'Bài không nêu giới hạn của mình là điều đáng nghi đầu tiên.' },
    { t: 'type', q: 'Điền: Как ви́дно ___ рису́нка 2… (từ)', a: 'из', hint: 'Giới từ + cách 2.' },
    { t: 'type', q: 'Điền: В табли́це 1 ___ да́нные испыта́ний. (được nêu ra)', a: 'приведены', alt: ['приведены́'], hint: 'Dạng ngắn bị động số nhiều của привести.' },
    { t: 'match', q: 'Nối:', pairs: [['закономе́рность', 'quy luật'], ['вя́зкость', 'độ nhớt'], ['образе́ц', 'mẫu vật'], ['достове́рность', 'độ tin cậy']] }
  ]
};

/* ---------------------------------------------------------- BÀI 4 */
LESSON_DATA['b2-04'] = {
  level: 'b2',
  intro: '<span class="ru">Реферирование</span> — tóm tắt một văn bản người khác viết, bằng lời của mình, theo khuôn cố định — là <b>một phần thi riêng</b> của ТРКИ-2 và là việc nghiên cứu sinh làm hằng tuần. Đây cũng là kỹ năng khó nhất của cả cấp B2, vì nó đòi hiểu <i>và</i> viết cùng lúc.',
  blocks: [
    { t: 'h', text: 'Bốn thứ hay bị lẫn' },
    { t: 'table', head: ['Loại', 'Dài bao nhiêu', 'Làm gì', 'Có ý kiến riêng?'], rows: [
      ['аннота́ция', '4–8 câu', 'nói bài <b>về cái gì</b>', 'không'],
      ['рефера́т', '10–30 % bản gốc', 'thuật lại <b>nội dung</b> bài', 'không'],
      ['конспе́кт', 'tuỳ', 'ghi chép cho bản thân, có thể chép nguyên câu', 'không'],
      ['реце́нзия', '1–2 trang', '<b>đánh giá</b> bài: hay ở đâu, dở ở đâu', 'có, bắt buộc']
    ]},
    { t: 'warn', html: 'Lỗi kinh điển của thí sinh ТРКИ-2: được yêu cầu viết <span class="ru">рефера́т</span> nhưng lại viết <span class="ru">реце́нзия</span> — chêm vào "tôi thấy tác giả nói đúng". Trong рефера́т, ý kiến của em <b>không</b> có chỗ. Em chỉ là cái ống dẫn: nội dung của tác giả đi qua em rồi ra ngắn hơn.' },
    { t: 'h', text: 'Năm bước làm рефера́т' },
    { t: 'table', head: ['Bước', 'Việc', 'Thời gian (trong 60 phút thi)'], rows: [
      ['1', 'Đọc lướt cả bài, không ghi gì', '5 phút'],
      ['2', 'Chia bài thành 3–5 <b>смысловые части</b> (khối ý)', '5 phút'],
      ['3', 'Mỗi khối tìm <b>một câu chủ chốt</b>, gạch chân', '10 phút'],
      ['4', 'Viết lại mỗi câu chủ chốt bằng lời mình + nối bằng клише', '25 phút'],
      ['5', 'Đọc lại: bỏ chi tiết thừa, kiểm tra không có ý kiến riêng', '15 phút']
    ]},
    { t: 'tip', html: 'Bước 3 là bước quyết định. Trong một đoạn văn khoa học Nga, câu chủ chốt gần như luôn là <b>câu đầu hoặc câu cuối đoạn</b>. Câu giữa là ví dụ, số liệu, giải thích — thứ bị cắt đầu tiên khi rút gọn.' },
    { t: 'h', text: 'Bộ клише dành riêng cho реферирование' },
    { t: 'table', head: ['Vị trí', 'Mẫu câu'], rows: [
      ['Mở đầu', 'Статья́ «…» опублико́вана в журна́ле… · Статья́ посвящена́ пробле́ме…'],
      ['Nêu chủ đề', 'В статье́ рассма́тривается… · Речь идёт о… · А́втор анализи́рует…'],
      ['Đầu bài', 'В нача́ле статьи́ а́втор отмеча́ет, что… · Статья́ начина́ется с…'],
      ['Chuyển ý', 'Да́лее а́втор перехо́дит к… · Зате́м рассма́триваются…'],
      ['Nhấn mạnh', 'Осо́бое внима́ние уделя́ется… · А́втор подчёркивает, что…'],
      ['Số liệu', 'А́втор приво́дит да́нные, свиде́тельствующие о том, что…'],
      ['Ví dụ', 'В ка́честве приме́ра а́втор ссыла́ется на…'],
      ['So sánh', 'А́втор сопоставля́ет… с…'],
      ['Kết', 'В заключе́ние а́втор прихо́дит к вы́воду, что… · Подводя́ ито́г, а́втор утвержда́ет…']
    ]},
    { t: 'note', html: 'Chú ý: chủ ngữ của gần như mọi câu là <span class="ru">а́втор</span> hoặc là câu bị động (<span class="ru">рассма́тривается</span>). Không bao giờ là <span class="ru">я</span>. Đó là cách ngôn ngữ tự giữ cho em khỏi chen ý kiến vào.' },
    { t: 'h', text: 'Ba phép rút gọn' },
    { t: 'table', head: ['Phép', 'Bản gốc', 'Sau khi rút'], rows: [
      ['Bỏ ví dụ', 'Многие металлы, например медь, алюминий и цинк, расширяются при нагревании.', 'Металлы расширяются при нагревании.'],
      ['Gộp thành khái quát', 'Испытаны образцы из стали 45, стали 40Х и чугуна СЧ20.', 'Испытаны образцы трёх материалов.'],
      ['Danh hoá cả câu', 'Авторы применили новый метод, и точность повысилась.', 'Применение нового метода повысило точность.']
    ]},
    { t: 'tip', html: 'Phép thứ ba là phép mạnh nhất — nó biến <b>hai câu thành một</b> mà không mất thông tin. Đó chính là lý do bài 1 bắt em học danh hoá: nó không phải trang trí, nó là công cụ nén.' },
    { t: 'h', text: 'Bài gốc để luyện' },
    { t: 'p', html: '<span class="ru">Развитие городского электротранспорта в России в последние годы заметно ускорилось. По данным Министерства транспорта, за пять лет число электробусов в крупных городах выросло более чем в шесть раз. Основной причиной специалисты называют сочетание экологических требований и снижения стоимости аккумуляторных батарей примерно на 40 %.</span>' },
    { t: 'p', html: '<span class="ru">Вместе с тем внедрение электробусов сталкивается с рядом трудностей. Прежде всего это касается зарядной инфраструктуры: в большинстве городов число зарядных станций растёт медленнее, чем парк машин. Кроме того, ёмкость батарей заметно снижается при отрицательных температурах, что особенно важно для сибирских и северных регионов, где зимой температура может опускаться ниже −35 °C.</span>' },
    { t: 'p', html: '<span class="ru">Ряд исследователей предлагает комбинированные решения — например, троллейбусы с автономным ходом, способные двигаться и по контактной сети, и на батарее. Опыт Санкт-Петербурга и Новосибирска показывает, что такой подход позволяет снизить затраты на инфраструктуру примерно на четверть. Однако единой стратегии развития городского электротранспорта в стране пока не выработано, и решения принимаются на уровне отдельных регионов.</span>' },
    { t: 'h', text: 'Bản рефера́т mẫu' },
    { t: 'p', html: '<span class="ru">Статья посвящена проблеме развития городского электротранспорта в России. В начале статьи автор отмечает быстрый рост числа электробусов за последние пять лет и связывает его с экологическими требованиями и удешевлением аккумуляторов.</span>' },
    { t: 'p', html: '<span class="ru">Далее автор переходит к трудностям внедрения. Особое внимание уделяется двум факторам: отставанию зарядной инфраструктуры от роста парка машин и снижению ёмкости батарей при низких температурах, что критично для северных регионов.</span>' },
    { t: 'p', html: '<span class="ru">В заключение рассматриваются комбинированные решения, в частности троллейбусы с автономным ходом, применение которых, по данным автора, сокращает инфраструктурные затраты. Автор приходит к выводу, что единая стратегия развития отрасли в стране пока отсутствует.</span>' },
    { t: 'table', head: ['Nhận xét', 'Chi tiết'], rows: [
      ['Độ dài', 'Bản gốc ~150 từ → рефера́т ~90 từ, khoảng 60 %'],
      ['Số liệu giữ lại', 'Chỉ giữ ý "tăng nhanh", "giảm giá" — bỏ "sáu lần", "40 %", "một phần tư"'],
      ['Địa danh', 'Bỏ Sankt-Peterburg và Novosibirsk — chi tiết minh hoạ'],
      ['Ý kiến riêng', 'Không có câu nào. Mọi câu đều quy về "автор"'],
      ['Cấu trúc', 'Ba đoạn khớp ba khối ý của bản gốc']
    ]},
    { t: 'warn', html: 'Nhìn kỹ chỗ này: bản рефера́т <b>bỏ hết con số</b>. Nhiều người tưởng giữ số liệu là giữ nội dung — sai. Số liệu là <i>bằng chứng</i>, còn рефера́т tóm tắt <i>luận điểm</i>. Chỉ giữ con số khi nó chính là kết quả chủ chốt của bài.' },
    { t: 'h', text: 'Bảng tự chấm' },
    { t: 'table', head: ['Tiêu chí', 'Đạt khi'], rows: [
      ['Độ dài', 'khoảng 1/3 đến 1/2 bản gốc'],
      ['Đủ khối ý', 'mỗi khối ý của bản gốc có ít nhất một câu'],
      ['Không sao chép', 'không có câu nào chép nguyên từ bản gốc'],
      ['Không ý kiến riêng', 'không có "по-моему", "я считаю", "это правильно"'],
      ['Có клише', 'ít nhất năm mẫu câu chuẩn'],
      ['Mạch lạc', 'đọc riêng bản tóm tắt vẫn hiểu được, không cần bản gốc']
    ]},
    { t: 'tip', html: 'Tiêu chí cuối cùng là phép thử thật: đưa bản рефера́т của em cho người <b>chưa đọc bài gốc</b>. Nếu họ hiểu bài nói gì — em đạt. Nếu họ hỏi lại "rồi sao nữa?" — em mới chỉ liệt kê chứ chưa tóm tắt.' }
  ],
  vocab: [
    { ru: 'реферирование', vn: 'việc tóm tắt học thuật' }, { ru: 'рефера́т', vn: 'bản tóm tắt nội dung' },
    { ru: 'реце́нзия', vn: 'bài nhận xét, đánh giá' }, { ru: 'конспе́кт', vn: 'bản ghi chép' },
    { ru: 'смыслова́я часть', vn: 'khối ý' }, { ru: 'подчёркивать', vn: 'nhấn mạnh' },
    { ru: 'уделя́ть внима́ние', vn: 'dành sự chú ý' }, { ru: 'приводи́ть да́нные', vn: 'dẫn số liệu' },
    { ru: 'ссыла́ться на', vn: 'viện dẫn, trích dẫn' }, { ru: 'сопоставля́ть', vn: 'đối chiếu' },
    { ru: 'подводя́ ито́г', vn: 'tổng kết lại' }, { ru: 'внедре́ние', vn: 'việc triển khai' },
    { ru: 'заря́дная инфраструкту́ра', vn: 'hạ tầng sạc' }, { ru: 'ёмкость', vn: 'dung lượng' },
    { ru: 'автоно́мный ход', vn: 'chế độ chạy độc lập' }, { ru: 'отсу́тствовать', vn: 'không có, thiếu vắng' },
    { ru: 'сокраща́ть', vn: 'rút gọn, cắt giảm' }, { ru: 'затра́ты', vn: 'chi phí' }
  ],
  ex: [
    { t: 'choice', q: 'Trong <span class="ru">рефера́т</span>, ý kiến riêng của người viết:', options: ['Bắt buộc phải có', 'Không có chỗ', 'Đặt ở cuối', 'Tuỳ đề bài'], a: 1, why: 'Có ý kiến riêng thì đó là реце́нзия, không phải рефера́т.' },
    { t: 'choice', q: '<span class="ru">аннота́ция</span> khác <span class="ru">рефера́т</span> ở chỗ:', options: ['Аннотация dài hơn', 'Аннотация chỉ nói bài VỀ CÁI GÌ, реферат thuật lại NỘI DUNG', 'Аннотация có đánh giá', 'Không khác gì'], a: 1, why: 'Аннотация 4–8 câu; реферат bằng 10–30 % bản gốc.' },
    { t: 'choice', q: 'Trong đoạn văn khoa học Nga, câu chủ chốt thường nằm ở:', options: ['Giữa đoạn', 'Câu đầu hoặc câu cuối đoạn', 'Câu thứ ba', 'Không cố định'], a: 1, why: 'Câu giữa thường là ví dụ, số liệu, giải thích — thứ bị cắt trước.' },
    { t: 'choice', q: 'Phép rút gọn mạnh nhất là:', options: ['Bỏ ví dụ', 'Gộp thành khái quát', 'Danh hoá cả câu', 'Bỏ tính từ'], a: 2, why: 'Применение нового метода повысило точность — hai câu thành một, không mất thông tin.' },
    { t: 'choice', q: 'Bản рефера́т mẫu bỏ hết con số vì:', options: ['Số khó nhớ', 'Số liệu là bằng chứng, còn реферат tóm tắt luận điểm', 'Đề bài cấm', 'Để cho ngắn'], a: 1, why: 'Chỉ giữ con số khi nó chính là kết quả chủ chốt của bài.' },
    { t: 'choice', q: 'Chủ ngữ của các câu trong <span class="ru">рефера́т</span> thường là:', options: ['я', 'а́втор hoặc câu bị động', 'мы', 'чита́тель'], a: 1, why: 'Ngôn ngữ tự giữ cho người viết khỏi chen ý kiến vào.' },
    { t: 'choice', q: 'Phép thử thật cho một bản tóm tắt tốt là:', options: ['Đếm số từ', 'Đưa cho người chưa đọc bài gốc xem họ có hiểu không', 'So với bản gốc từng câu', 'Kiểm tra chính tả'], a: 1, why: 'Bản tóm tắt phải đứng được một mình.' },
    { t: 'type', q: 'Điền: Осо́бое внима́ние ___ вопро́су безопа́сности. (được dành cho)', a: 'уделяется', alt: ['уделя́ется'], hint: 'уделять внимание чему, dạng bị động -ся.' },
    { t: 'type', q: 'Điền: В заключе́ние а́втор ___ к вы́воду, что… (đi tới)', a: 'приходит', alt: ['прихо́дит'], hint: 'приходить к выводу.' },
    { t: 'match', q: 'Nối:', pairs: [['реце́нзия', 'bài đánh giá, có ý kiến riêng'], ['конспе́кт', 'ghi chép cho bản thân'], ['аннота́ция', 'nói bài về cái gì, 4–8 câu'], ['рефера́т', 'thuật lại nội dung, không đánh giá']] }
  ]
};

/* ---------------------------------------------------------- BÀI 5 */
LESSON_DATA['b2-05'] = {
  level: 'b2',
  intro: 'Mọi bài báo Nga em nộp đăng đều phải kèm <span class="ru">аннота́ция</span> và <span class="ru">ключевы́е слова́</span>. Sáu câu ấy là thứ ban biên tập đọc <b>đầu tiên</b>, và với 95 % người tìm tài liệu, đó là thứ duy nhất họ đọc. Viết dở là bài chìm, dù nội dung tốt.',
  blocks: [
    { t: 'h', text: 'Khuôn sáu câu' },
    { t: 'table', head: ['Câu', 'Chức năng', 'Mẫu mở đầu'], rows: [
      ['1', 'Chủ đề — bài xét cái gì', 'В статье́ рассма́тривается… · Статья́ посвящена́…'],
      ['2', 'Phương pháp — đã làm gì', 'Проведены́… · Испо́льзован ме́тод…'],
      ['3', 'Kết quả chính', 'Устано́влено, что… · Показа́но, что…'],
      ['4', 'Đóng góp — đề xuất gì', 'Предло́жена… · Разрабо́тана…'],
      ['5', 'Hiệu quả — cải thiện bao nhiêu', 'Погре́шность сни́жена с… до… · Эффекти́вность повы́шена на…'],
      ['6', 'Ứng dụng', 'Результа́ты мо́гут быть испо́льзованы при…']
    ]},
    { t: 'tip', html: 'Không phải bài nào cũng đủ sáu. Tối thiểu bắt buộc là <b>câu 1, 3 và 6</b>: bài về gì, tìm ra gì, dùng vào đâu. Thiếu câu 3 là lỗi nặng nhất — nhiều аннотация chỉ nói "bài xem xét vấn đề X" mà không nói xem xét ra được cái gì.' },
    { t: 'h', text: 'Ba thì và ba dạng bắt buộc' },
    { t: 'table', head: ['Nói về', 'Dùng dạng nào', 'Ví dụ'], rows: [
      ['Nội dung bài', 'hiện tại, phản thân -ся', 'В статье рассма́тривается…'],
      ['Việc mình đã làm', 'quá khứ bị động dạng ngắn', 'Проведены́ испыта́ния. Предло́жена моде́ль.'],
      ['Kết quả tìm ra', 'dạng ngắn trung tính', 'Устано́влено, что… Показа́но, что…'],
      ['Khả năng dùng', 'мочь + nguyên thể bị động', 'мо́гут быть испо́льзованы']
    ]},
    { t: 'warn', html: 'Dạng ngắn bị động phải <b>hợp giống và số</b> với danh từ: <span class="ru">предло́жена моде́ль</span> (cái, số ít), <span class="ru">предло́жен ме́тод</span> (đực), <span class="ru">предло́жено реше́ние</span> (trung), <span class="ru">предло́жены реше́ния</span> (số nhiều). Sai chỗ này là lỗi bị trừ điểm ngay ở ТРКИ-2.' },
    { t: 'h', text: 'Аннотация — cái gì KHÔNG được có' },
    { t: 'table', head: ['Không được', 'Vì sao'], rows: [
      ['Câu "Статья интересна и актуальна"', 'tự khen — người đọc tự đánh giá'],
      ['Trích dẫn tài liệu [1], [2]', 'аннотация phải đứng độc lập'],
      ['Công thức, bảng, hình', 'chỉ có chữ'],
      ['Từ viết tắt chưa giải thích', 'người đọc chưa vào bài'],
      ['Câu "В данной статье автор хочет рассказать…"', 'nước đôi, chiếm chỗ mà không nói gì'],
      ['Nhắc lại nguyên nhan đề', 'lãng phí câu đầu tiên']
    ]},
    { t: 'note', html: 'Lỗi cuối cùng rất hay gặp: nhan đề là "Исследование влияния температуры на износ деталей", rồi câu đầu аннотация viết "В статье исследуется влияние температуры на износ деталей". Người đọc vừa đọc câu đó xong ở dòng trên. Câu 1 phải <b>thêm</b> thông tin — loại động cơ nào, điều kiện nào, phạm vi nào.' },
    { t: 'h', text: 'Chọn từ khoá' },
    { t: 'table', head: ['Nên', 'Không nên'], rows: [
      ['5–8 từ hoặc cụm từ', '2 từ, hoặc 15 từ'],
      ['Thuật ngữ người khác sẽ gõ vào ô tìm kiếm', 'từ chung chung: исследование, анализ, проблема'],
      ['Tên phương pháp, vật liệu, đối tượng cụ thể', 'từ đã có trong nhan đề (lặp vô ích)'],
      ['Cả dạng đầy đủ lẫn viết tắt nếu ngành hay dùng', 'viết tắt lạ chỉ mình dùng']
    ]},
    { t: 'p', html: '<b>Ví dụ tốt:</b> <span class="ru">износ деталей; цилиндропоршневая группа; дизельный двигатель; низкие температуры; вязкость масла; прогнозирование ресурса</span>' },
    { t: 'p', html: '<b>Ví dụ kém:</b> <span class="ru">исследование; двигатель; анализ; результаты</span>' },
    { t: 'h', text: 'Một аннотация được sửa qua ba lần' },
    { t: 'p', html: '<b>Bản 1 (kém):</b> <span class="ru">В данной статье автор хочет рассмотреть очень важный и актуальный вопрос износа деталей двигателя. Эта тема интересна многим специалистам. Были проведены разные испытания и получены интересные результаты.</span>' },
    { t: 'table', head: ['Lỗi', 'Ở đâu'], rows: [
      ['"хочет рассмотреть"', 'nước đôi — bài đã viết rồi, không phải đang muốn'],
      ['"очень важный и актуальный"', 'tự khen, không thông tin'],
      ['"Эта тема интересна многим"', 'câu thừa hoàn toàn'],
      ['"разные испытания"', 'mơ hồ — thí nghiệm gì, bao nhiêu, điều kiện nào'],
      ['"интересные результаты"', 'không nói ra kết quả là gì — lỗi nặng nhất']
    ]},
    { t: 'p', html: '<b>Bản 2 (khá):</b> <span class="ru">В статье рассматривается износ деталей цилиндропоршневой группы дизельных двигателей при низких температурах. Проведены стендовые испытания образцов. Установлено, что при снижении температуры износ увеличивается. Предложена математическая модель.</span>' },
    { t: 'p', html: '<b>Bản 3 (tốt):</b> <span class="ru">В статье рассматривается влияние отрицательных температур на интенсивность изнашивания деталей цилиндропоршневой группы дизельных двигателей. Проведены стендовые испытания четырёх групп образцов в диапазоне от −40 до +20 °C. Установлено, что при температурах ниже −25 °C интенсивность изнашивания возрастает в среднем на 34 % вследствие ухудшения условий смазывания. Предложена уточнённая математическая модель, учитывающая вязкостно-температурную характеристику масла; погрешность прогнозирования ресурса снижена с 19 до 8 %. Результаты применимы при разработке регламентов эксплуатации техники в северных регионах.</span>' },
    { t: 'table', head: ['Từ bản 2 lên bản 3, thêm gì', 'Vì sao quan trọng'], rows: [
      ['"четырёх групп образцов", "от −40 до +20 °C"', 'người đọc biết phạm vi áp dụng'],
      ['"ниже −25 °C… на 34 %"', 'kết quả trở nên kiểm chứng được'],
      ['"вследствие ухудшения условий смазывания"', 'nêu cơ chế, không chỉ nêu hiện tượng'],
      ['"с 19 до 8 %"', 'đóng góp trở nên đo được'],
      ['"в северных регионах"', 'người đúng ngành nhận ra bài này liên quan tới mình']
    ]},
    { t: 'tip', html: 'Quy tắc rút ra: <b>аннотация tốt là аннотация có số</b>. Không phải vì số đẹp, mà vì mỗi con số buộc câu văn phải nói một điều cụ thể thay vì một điều chung chung.' },
    { t: 'h', text: 'Bản tiếng Anh kèm theo' },
    { t: 'note', html: 'Hầu hết tạp chí Nga hiện nay yêu cầu <b>аннотация song ngữ</b> Nga–Anh. Đừng dịch máy: cấu trúc câu Nga danh hoá nặng dịch thẳng sang tiếng Anh thành câu rất nặng. Tiếng Anh khoa học thích <i>động từ chủ động</i> ở chỗ tiếng Nga thích danh từ — <span class="ru">Проведены испытания</span> nên thành "We tested…", không phải "Testing was carried out".' },
    { t: 'tip', html: 'Bài tập: lấy chính đề tài của em, viết аннотация sáu câu. Rồi đếm — có bao nhiêu con số trong đó? Nếu bằng không, viết lại.' }
  ],
  vocab: [
    { ru: 'аннота́ция', vn: 'tóm tắt bài báo' }, { ru: 'ключевы́е слова́', vn: 'từ khoá' },
    { ru: 'посвящена́', vn: 'dành cho (chủ đề)' }, { ru: 'предло́жена моде́ль', vn: 'mô hình đã được đề xuất' },
    { ru: 'разрабо́тан ме́тод', vn: 'phương pháp đã được xây dựng' }, { ru: 'показа́но, что', vn: 'đã chỉ ra rằng' },
    { ru: 'диапазо́н', vn: 'khoảng, dải' }, { ru: 'интенси́вность', vn: 'cường độ' },
    { ru: 'уточнённый', vn: 'đã được hiệu chỉnh' }, { ru: 'учи́тывающий', vn: 'có tính đến' },
    { ru: 'характери́стика', vn: 'đặc tính' }, { ru: 'ресу́рс', vn: 'tuổi thọ, nguồn lực' },
    { ru: 'эксплуата́ция', vn: 'việc vận hành, khai thác' }, { ru: 'примени́м', vn: 'áp dụng được' },
    { ru: 'вследствие', vn: 'do hậu quả của' }, { ru: 'ухудше́ние', vn: 'sự xấu đi' }
  ],
  ex: [
    { t: 'choice', q: 'Ba câu bắt buộc tối thiểu của một аннотация là:', options: ['Chủ đề, phương pháp, tài liệu', 'Chủ đề, kết quả, ứng dụng', 'Phương pháp, số liệu, kết luận', 'Nhan đề, tác giả, từ khoá'], a: 1, why: 'Bài về gì, tìm ra gì, dùng vào đâu. Thiếu "tìm ra gì" là lỗi nặng nhất.' },
    { t: 'choice', q: 'Dạng đúng: ___ моде́ль (mô hình đã được đề xuất):', options: ['предложен', 'предложена', 'предложено', 'предложены'], a: 1, why: 'Модель giống cái số ít → предложена.' },
    { t: 'choice', q: 'Dạng đúng: ___ испыта́ния (các thử nghiệm đã được tiến hành):', options: ['проведён', 'проведена', 'проведено', 'проведены'], a: 3, why: 'Испытания số nhiều → проведены.' },
    { t: 'choice', q: 'Vì sao không nên nhắc lại nguyên nhan đề ở câu 1?', options: ['Vi phạm bản quyền', 'Lãng phí câu quan trọng nhất — câu 1 phải thêm thông tin', 'Tạp chí cấm', 'Làm bài dài'], a: 1, why: 'Người đọc vừa đọc nhan đề ở dòng trên. Câu 1 phải nói thêm phạm vi, điều kiện, đối tượng.' },
    { t: 'choice', q: 'Từ khoá nào <b>kém</b>?', options: ['вязкость масла', 'цилиндропоршневая группа', 'исследование', 'прогнозирование ресурса'], a: 2, why: 'Từ chung chung, không ai gõ vào ô tìm kiếm để tìm đúng bài này.' },
    { t: 'choice', q: 'Câu <span class="ru">Были получены интересные результаты</span> sai vì:', options: ['Sai ngữ pháp', 'Không nói ra kết quả là gì', 'Quá dài', 'Dùng thì sai'], a: 1, why: 'Đây là lỗi nặng nhất của аннотация — hứa mà không trả.' },
    { t: 'choice', q: 'Аннотация tốt nhận ra nhờ:', options: ['Câu dài', 'Có số liệu cụ thể', 'Nhiều thuật ngữ', 'Có trích dẫn'], a: 1, why: 'Mỗi con số buộc câu văn phải nói điều cụ thể thay vì chung chung.' },
    { t: 'choice', q: 'Dịch аннотация sang tiếng Anh, nên:', options: ['Giữ nguyên cấu trúc danh hoá', 'Chuyển sang động từ chủ động ("We tested…")', 'Dịch máy rồi sửa chính tả', 'Rút ngắn còn hai câu'], a: 1, why: 'Tiếng Anh khoa học thích động từ ở chỗ tiếng Nga thích danh từ.' },
    { t: 'type', q: 'Điền: Результа́ты мо́гут быть ___ при разрабо́тке регла́ментов. (được sử dụng)', a: 'использованы', alt: ['испо́льзованы'], hint: 'Dạng ngắn bị động số nhiều.' },
    { t: 'match', q: 'Nối câu với chức năng:', pairs: [['В статье́ рассма́тривается…', 'chủ đề'], ['Устано́влено, что…', 'kết quả'], ['Предло́жена моде́ль…', 'đóng góp'], ['Мо́гут быть испо́льзованы…', 'ứng dụng']] }
  ]
};

/* ---------------------------------------------------------- BÀI 6 */
LESSON_DATA['b2-06'] = {
  level: 'b2',
  intro: 'Phong cách hành chính là phong cách <b>không có tác giả</b>. Nó cố tình khô, cố tình khuôn mẫu, cố tình không cảm xúc — vì nó phải có giá trị pháp lý và phải đọc ra một nghĩa duy nhất. Sống ở Nga, em ký và nộp thứ tiếng này nhiều hơn tất cả các phong cách khác cộng lại.',
  blocks: [
    { t: 'h', text: 'Các loại giấy tờ hay dùng' },
    { t: 'table', head: ['Tên Nga', 'Là gì', 'Ai gửi cho ai'], rows: [
      ['заявле́ние', 'đơn xin', 'cá nhân → cơ quan'],
      ['служе́бная запи́ска', 'phiếu công tác nội bộ', 'ngang cấp hoặc lên trên'],
      ['докладна́я запи́ска', 'báo cáo lên cấp trên', 'dưới → trên'],
      ['объясни́тельная запи́ска', 'bản giải trình', 'khi bị hỏi vì sao xảy ra chuyện gì'],
      ['дове́ренность', 'giấy uỷ quyền', 'cho người khác làm thay mình'],
      ['характери́стика', 'bản nhận xét về một người', 'cơ quan → nơi yêu cầu'],
      ['спра́вка', 'giấy xác nhận', 'cơ quan → cá nhân'],
      ['прика́з', 'quyết định, mệnh lệnh', 'lãnh đạo → toàn cơ quan'],
      ['догово́р', 'hợp đồng', 'hai bên']
    ]},
    { t: 'note', html: 'Ba loại nghiên cứu sinh dùng nhiều nhất: <span class="ru">заявле́ние</span> (xin nghỉ, xin gia hạn, xin cấp giấy), <span class="ru">спра́вка</span> (xin xác nhận đang học — cần cho visa, ký túc xá, ngân hàng) và <span class="ru">объясни́тельная</span> (khi vắng mặt hoặc nộp muộn).' },
    { t: 'h', text: 'Sáu đặc điểm ngôn ngữ' },
    { t: 'table', head: ['Đặc điểm', 'Ví dụ'], rows: [
      ['Khuôn mẫu cố định', 'В связи́ с… · На основа́нии… · В соотве́тствии с…'],
      ['Danh hoá dày đặc', 'ока́зание по́мощи · приня́тие реше́ния · во избежа́ние'],
      ['Không có "tôi"', 'Прошу́… (bỏ chủ ngữ) thay vì Я прошу́'],
      ['Giới từ ghép', 'в тече́ние · в связи́ с · в це́лях · по вопро́су о'],
      ['Số và ngày viết đủ', 'с 01.09.2026 по 15.09.2026'],
      ['Một câu = một ý pháp lý', 'câu dài nhưng không mơ hồ']
    ]},
    { t: 'warn', html: 'Cặp bẫy chính tả: <span class="ru">в тече́ние</span> (trong khoảng thời gian — chữ <b>е</b> cuối) khác <span class="ru">в тече́нии реки́</span> (trong dòng chảy con sông — chữ <b>и</b>). Trong công văn gần như luôn là <b>в течение</b>. Người Nga cũng sai chỗ này thường xuyên.' },
    { t: 'h', text: 'Giới từ ghép của văn hành chính' },
    { t: 'table', head: ['Giới từ', 'Đi với cách', 'Nghĩa'], rows: [
      ['в связи́ с', '5', 'do, vì lý do'],
      ['в соотве́тствии с', '5', 'theo đúng, phù hợp với'],
      ['на основа́нии', '2', 'căn cứ vào'],
      ['в це́лях', '2', 'nhằm mục đích'],
      ['во избежа́ние', '2', 'để tránh'],
      ['в тече́ние', '2', 'trong khoảng (thời gian)'],
      ['по вопро́су о', '6', 'về vấn đề'],
      ['согла́сно', '3', 'theo (согласно приказу — cách 3!)'],
      ['вследствие', '2', 'do hậu quả của'],
      ['при нали́чии', '2', 'khi có']
    ]},
    { t: 'warn', html: '<span class="ru">Согла́сно</span> đi với <b>cách 3</b>: <span class="ru">согла́сно прика́зу</span>, <span class="ru">согла́сно распоряже́нию</span>. Dạng <span class="ru">согласно приказа</span> (cách 2) là lỗi — rất phổ biến ngay cả ở người Nga, nhưng vẫn là lỗi và bị bắt trong bài thi.' },
    { t: 'h', text: 'Cấu trúc một заявле́ние' },
    { t: 'table', head: ['Phần', 'Viết gì', 'Đặt ở đâu'], rows: [
      ['Gửi ai', 'Ре́ктору ФГБОУ ВО «ИГУ» / профе́ссору И. И. Ивано́ву', 'góc trên bên phải, cách 3'],
      ['Ai gửi', 'от аспира́нта 1-го ку́рса Нгуе́н Кхак Чунга', 'ngay dưới, cách 2 với "от"'],
      ['Tên văn bản', 'заявление', 'giữa dòng, chữ thường, không có dấu chấm'],
      ['Nội dung', 'Прошу́… + lý do', 'từ dòng mới, thụt đầu dòng'],
      ['Phụ lục', 'Приложе́ние: спра́вка на 1 л.', 'nếu có giấy kèm'],
      ['Ngày và chữ ký', '29.08.2026 — trái · chữ ký — phải', 'cùng một dòng']
    ]},
    { t: 'h', text: 'Một đơn hoàn chỉnh' },
    { t: 'p', html: '<span class="ru">Заведующему кафедрой автомобильного транспорта<br>профессору И. И. Иванову<br>от аспиранта 1-го курса<br>Нгуен Кхак Чунга</span>' },
    { t: 'p', html: '<span class="ru">заявление</span>' },
    { t: 'p', html: '<span class="ru">Прошу разрешить перенос сдачи кандидатского экзамена по специальности с 15.09.2026 на 29.09.2026 в связи с участием в международной конференции «Транспортные системы Сибири» (г. Новосибирск, 14–17.09.2026).</span>' },
    { t: 'p', html: '<span class="ru">Приложение: копия приглашения на 1 л.</span>' },
    { t: 'p', html: '<span class="ru">29.08.2026&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Нгуен К. Ч.</span>' },
    { t: 'note', html: 'Ba chi tiết dễ sai: (1) chữ <span class="ru">заявление</span> viết <b>thường</b>, không viết hoa, không có dấu chấm sau; (2) không có lời chào và không có lời cảm ơn — đây không phải thư; (3) toàn bộ phần nội dung là <b>một câu duy nhất</b> bắt đầu bằng <span class="ru">Прошу́</span>.' },
    { t: 'h', text: 'Служебная / докладная / объяснительная' },
    { t: 'table', head: ['Loại', 'Mở đầu điển hình', 'Kết'], rows: [
      ['служе́бная запи́ска', 'Довожу́ до Ва́шего све́дения, что…', 'Прошу́ рассмотре́ть возмо́жность…'],
      ['докладна́я запи́ска', 'В соотве́тствии с поруче́нием от… докла́дываю, что…', 'Прошу́ приня́ть реше́ние.'],
      ['объясни́тельная', 'Настоя́щим поясня́ю, что…', '(không có "прошу" — chỉ giải thích)']
    ]},
    { t: 'p', html: '<b>Ví dụ объяснительная:</b> <span class="ru">Настоящим поясняю, что 20.08.2026 я отсутствовал на заседании кафедры в связи с прохождением планового медицинского осмотра, назначенного на указанную дату. Подтверждающий документ прилагается.</span>' },
    { t: 'tip', html: 'Chú ý giọng của bản giải trình: <b>không xin lỗi, không biện minh dài dòng</b>. Chỉ nêu sự việc, nêu lý do, nêu giấy tờ chứng minh. Người Việt hay viết thêm "rất mong thầy thông cảm" — trong văn bản Nga câu đó thừa và làm yếu văn bản.' },
    { t: 'h', text: 'Câu hành chính hay dùng' },
    { t: 'words', items: [
      { ru: 'Прошу́ разреши́ть…', vn: 'Đề nghị cho phép…' },
      { ru: 'Прошу́ предоста́вить…', vn: 'Đề nghị cấp / cung cấp…' },
      { ru: 'Прошу́ рассмотре́ть возмо́жность…', vn: 'Đề nghị xem xét khả năng…' },
      { ru: 'Довожу́ до Ва́шего све́дения, что…', vn: 'Xin báo để quý vị được biết rằng…' },
      { ru: 'Настоя́щим уведомля́ем, что…', vn: 'Bằng văn bản này xin thông báo rằng…' },
      { ru: 'в срок до 15.09.2026', vn: 'trong thời hạn đến ngày…' },
      { ru: 'Приложе́ние: … на 2 л. в 1 экз.', vn: 'Phụ lục: … 2 tờ, 1 bản' },
      { ru: 'С уваже́нием,', vn: 'Trân trọng, (chỉ dùng trong thư, KHÔNG dùng trong заявление)' }
    ]},
    { t: 'warn', html: 'Viết hoa <span class="ru">Ва́шего</span>, <span class="ru">Вам</span>, <span class="ru">Вас</span> khi xưng hô với <b>một</b> người cụ thể trong văn bản trang trọng. Với nhiều người thì viết thường. Đây là quy tắc lịch sự bằng chính tả — nhỏ nhưng người Nga để ý.' },
    { t: 'tip', html: 'Bài tập: viết một заявление xin cấp <span class="ru">спра́вка</span> xác nhận đang là nghiên cứu sinh, để nộp cho ngân hàng. Đúng khuôn sáu phần, nội dung một câu, không lời chào.' }
  ],
  vocab: [
    { ru: 'заявле́ние', vn: 'đơn xin' }, { ru: 'служе́бная запи́ска', vn: 'phiếu công tác' },
    { ru: 'докладна́я запи́ска', vn: 'báo cáo lên cấp trên' }, { ru: 'объясни́тельная', vn: 'bản giải trình' },
    { ru: 'дове́ренность', vn: 'giấy uỷ quyền' }, { ru: 'спра́вка', vn: 'giấy xác nhận' },
    { ru: 'прика́з', vn: 'quyết định' }, { ru: 'в связи́ с', vn: 'do, vì' },
    { ru: 'в соотве́тствии с', vn: 'theo đúng' }, { ru: 'на основа́нии', vn: 'căn cứ vào' },
    { ru: 'в це́лях', vn: 'nhằm mục đích' }, { ru: 'во избежа́ние', vn: 'để tránh' },
    { ru: 'в тече́ние', vn: 'trong khoảng thời gian' }, { ru: 'согла́сно + cách 3', vn: 'theo (văn bản nào)' },
    { ru: 'доводи́ть до све́дения', vn: 'báo để biết' }, { ru: 'уведомля́ть', vn: 'thông báo chính thức' },
    { ru: 'предоста́вить', vn: 'cấp, cung cấp' }, { ru: 'приложе́ние', vn: 'phụ lục, giấy kèm' },
    { ru: 'в срок до', vn: 'trong thời hạn đến' }, { ru: 'поясня́ть', vn: 'giải trình' }
  ],
  ex: [
    { t: 'choice', q: '<span class="ru">согла́сно</span> đi với cách nào?', options: ['cách 2', 'cách 3', 'cách 4', 'cách 5'], a: 1, why: 'согласно приказу ✓, согласно приказа ✗ — lỗi phổ biến ngay cả ở người Nga.' },
    { t: 'choice', q: 'Trong công văn, "trong khoảng thời gian" viết là:', options: ['в течении', 'в течение', 'в теченье', 'во течение'], a: 1, why: 'в течение (е) = khoảng thời gian; в течении (и) = trong dòng chảy.' },
    { t: 'choice', q: 'Chữ <span class="ru">заявление</span> trong đơn viết thế nào?', options: ['ЗАЯВЛЕНИЕ.', 'Заявление.', 'заявление (thường, không dấu chấm)', 'Заявление!'], a: 2, why: 'Chuẩn văn thư Nga: chữ thường, không dấu chấm sau.' },
    { t: 'choice', q: 'Trong <span class="ru">заявле́ние</span> có lời chào và cảm ơn không?', options: ['Có, bắt buộc', 'Không — đây không phải thư', 'Chỉ có cảm ơn', 'Tuỳ cơ quan'], a: 1, why: 'Nội dung là một câu duy nhất bắt đầu bằng Прошу.' },
    { t: 'choice', q: 'Người nhận đơn ghi ở cách nào?', options: ['cách 1', 'cách 2', 'cách 3', 'cách 5'], a: 2, why: 'Ректору, Заведующему кафедрой — cách 3 (gửi cho ai).' },
    { t: 'choice', q: 'Người viết đơn ghi thế nào?', options: ['аспирант Нгуен', 'от аспиранта Нгуена', 'аспиранту Нгуену', 'аспирантом Нгуеном'], a: 1, why: 'от + cách 2.' },
    { t: 'choice', q: 'Trong <span class="ru">объясни́тельная</span> nên có câu "rất mong thầy thông cảm" không?', options: ['Có, cho lịch sự', 'Không — chỉ nêu sự việc, lý do, giấy tờ', 'Chỉ khi lỗi nặng', 'Đặt ở đầu văn bản'], a: 1, why: 'Câu đó thừa và làm yếu văn bản trong phong cách hành chính Nga.' },
    { t: 'choice', q: '<span class="ru">Ва́шего</span> viết hoa khi nào?', options: ['Luôn luôn', 'Khi xưng hô với một người cụ thể trong văn bản trang trọng', 'Không bao giờ', 'Chỉ ở đầu câu'], a: 1, why: 'Với nhiều người thì viết thường — quy tắc lịch sự bằng chính tả.' },
    { t: 'type', q: 'Điền: ___ с уча́стием в конфере́нции… (do, vì)', a: 'в связи', alt: ['в связи́'], hint: 'Giới từ ghép + cách 5.' },
    { t: 'type', q: 'Điền: Прошу́ ___ спра́вку об обуче́нии. (cấp)', a: 'предоставить', alt: ['предоста́вить'], hint: 'Động từ hành chính nghĩa "cấp, cung cấp".' },
    { t: 'match', q: 'Nối:', pairs: [['докладна́я запи́ска', 'báo cáo lên cấp trên'], ['дове́ренность', 'giấy uỷ quyền'], ['спра́вка', 'giấy xác nhận'], ['объясни́тельная', 'bản giải trình']] }
  ]
};

/* ---------------------------------------------------------- BÀI 7 */
LESSON_DATA['b2-07'] = {
  level: 'b2',
  intro: 'Phong cách báo chí là phong cách <b>lai</b>: nó mượn tính chặt chẽ của khoa học nhưng cố tình giữ cảm xúc, vì mục đích của nó không phải mô tả mà là <b>thuyết phục</b>. Đọc được lớp cảm xúc ấy là kỹ năng quan trọng — nhất là khi đọc tin về đất nước mình hoặc về chính trị.',
  blocks: [
    { t: 'h', text: 'Hai nhiệm vụ cùng lúc' },
    { t: 'table', head: ['Nhiệm vụ', 'Tên Nga', 'Thể hiện bằng'], rows: [
      ['Đưa tin', 'информи́рование', 'số liệu, dẫn nguồn, ngày tháng, tên riêng'],
      ['Tác động', 'возде́йствие', 'từ đánh giá, câu hỏi tu từ, phép so sánh, nhịp câu']
    ]},
    { t: 'note', html: 'Đây là điểm khác căn bản với phong cách khoa học. Bài báo khoa học <b>giấu</b> tác giả; bài báo chí <b>cần</b> có giọng. Vì thế đọc báo Nga mà chỉ bắt thông tin là đọc mất một nửa.' },
    { t: 'h', text: 'Ba lớp trong một câu tin' },
    { t: 'p', html: '<span class="ru">Власти региона наконец-то признали очевидное: изношенный парк автобусов больше не справляется с растущим пассажиропотоком.</span>' },
    { t: 'table', head: ['Lớp', 'Chỗ nào', 'Nói lên gì'], rows: [
      ['Sự kiện', 'признали… парк не справляется', 'nội dung khách quan'],
      ['Đánh giá ngầm', 'наконе́ц-то (mãi rồi cũng)', 'nhà báo cho rằng chính quyền chậm'],
      ['Đánh giá ngầm', 'очеви́дное (điều hiển nhiên)', 'ngụ ý ai cũng thấy trừ chính quyền']
    ]},
    { t: 'tip', html: 'Kỹ thuật đọc báo Nga: <b>xoá hết từ đánh giá đi rồi đọc lại</b>. "Власти признали, что парк автобусов не справляется с пассажиропотоком" — vẫn đủ tin, nhưng mất hẳn giọng trách móc. Chênh lệch giữa hai bản chính là quan điểm của tờ báo.' },
    { t: 'h', text: 'Từ mang sẵn đánh giá' },
    { t: 'table', head: ['Trung tính', 'Tích cực', 'Tiêu cực'], rows: [
      ['измене́ния — thay đổi', 'преобразова́ния — cải cách, canh tân', 'передел — sự chia lại (ám chỉ tranh giành)'],
      ['гру́ппа люде́й', 'акти́висты', 'толпа́ — đám đông hỗn loạn'],
      ['цена́ вы́росла', '—', 'цена́ взлете́ла — giá vọt lên'],
      ['реше́ние при́нято', 'реше́ние вы́строено — có tính hệ thống', 'реше́ние продавлено — bị ép qua'],
      ['сотру́дничество', 'партнёрство', 'сго́вор — sự thông đồng'],
      ['разгово́р', 'диало́г', 'перепа́лка — cuộc đấu khẩu']
    ]},
    { t: 'warn', html: 'Cùng một sự việc, chọn từ khác nhau là ra hai bài báo khác nhau mà không nói dối câu nào. Đây là kỹ thuật cơ bản của báo chí ở mọi nước. Ở B2, em phải <b>nhận ra</b> nó — chứ không phải học cách dùng nó.' },
    { t: 'h', text: 'Thủ pháp cú pháp' },
    { t: 'table', head: ['Thủ pháp', 'Tên Nga', 'Ví dụ'], rows: [
      ['Câu hỏi tu từ', 'ритори́ческий вопро́с', 'Кто за это ответит?'],
      ['Câu cụt nhấn mạnh', 'парцелля́ция', 'Решение принято. Без обсуждения. За один день.'],
      ['Lặp đầu câu', 'ана́фора', 'Мы ждали год. Мы ждали два. Мы ждём до сих пор.'],
      ['Đảo trật tự', 'инве́рсия', 'Дорого обходится такая экономия.'],
      ['Đối lập', 'антите́за', 'Планы — грандиозные. Результаты — скромные.'],
      ['Trích lời làm nhan đề', '—', '«Мы справимся»: что стоит за словами министра']
    ]},
    { t: 'tip', html: '<span class="ru">Парцелляция</span> — cắt một câu thành nhiều câu cụt — là thủ pháp dễ nhận nhất trong báo Nga hiện đại. Ba dấu chấm liên tiếp ở chỗ đáng lẽ là dấu phẩy nghĩa là nhà báo đang <b>gằn giọng</b>.' },
    { t: 'h', text: 'Cấu trúc một bài báo' },
    { t: 'table', head: ['Phần', 'Tên Nga', 'Việc'], rows: [
      ['Nhan đề', 'заголо́вок', 'câu ngắn, thường có chơi chữ hoặc trích dẫn'],
      ['Dẫn', 'лид / вре́зка', '1–3 câu tóm tắt toàn bài, in đậm'],
      ['Sự kiện', 'информацио́нный по́вод', 'chuyện gì vừa xảy ra'],
      ['Bối cảnh', 'предысто́рия', 'trước đó đã có gì'],
      ['Ý kiến chuyên gia', 'комментарии экспе́ртов', 'trích lời, có tên và chức danh'],
      ['Kết', 'фина́л', 'thường bỏ lửng hoặc bằng một câu hỏi']
    ]},
    { t: 'note', html: 'Báo Nga viết theo <b>hình tháp ngược</b> giống báo phương Tây: cái quan trọng nhất ở trên cùng. Nếu chỉ có ba mươi giây, đọc <span class="ru">заголовок + лид</span> là đủ nắm tin.' },
    { t: 'h', text: 'Bài đọc' },
    { t: 'p', html: '<b>Заголовок:</b> <span class="ru">Электробусы приехали. А розетки?</span>' },
    { t: 'p', html: '<b>Лид:</b> <span class="ru">За пять лет число электробусов в российских городах выросло в шесть раз. Число зарядных станций — менее чем вдвое. Разрыв растёт быстрее, чем парк машин.</span>' },
    { t: 'p', html: '<span class="ru">Ещё недавно электробус казался экзотикой. Сегодня в Москве их больше тысячи, и о переходе на электротранспорт объявили десятки городов — от Петербурга до Красноярска. Аргументы известны: чище воздух, тише улицы, дешевле эксплуатация.</span>' },
    { t: 'p', html: '<span class="ru">Известны и проблемы. Только вот говорят о них заметно тише. «Мы закупаем технику быстрее, чем строим инфраструктуру, — признаёт заведующий кафедрой транспортных систем Иркутского университета Игорь Соколов. — В сибирских условиях к этому добавляется температурный фактор: при минус тридцати ёмкость батареи падает почти на треть».</span>' },
    { t: 'p', html: '<span class="ru">Треть ёмкости. На маршруте это означает: либо меньше рейсов, либо ночная подзарядка, которой негде взяться. Города покупают будущее в рассрочку — а платить придётся сразу.</span>' },
    { t: 'table', head: ['Chỗ', 'Thủ pháp', 'Hiệu quả'], rows: [
      ['«Электробусы приехали. А розетки?»', 'парцелляция + câu hỏi tu từ', 'nhan đề đặt ngay mâu thuẫn chính'],
      ['«Число зарядных станций — менее чем вдвое»', 'антитеза bằng con số', 'so sánh sáu lần / hai lần'],
      ['«говорят о них заметно тише»', 'từ đánh giá', 'ám chỉ có sự né tránh'],
      ['«Треть ёмкости.»', 'парцелляция', 'gằn giọng, buộc dừng lại'],
      ['«покупают будущее в рассрочку»', 'ẩn dụ', 'chốt bài bằng hình ảnh, không bằng số liệu']
    ]},
    { t: 'warn', html: 'Nhìn kỹ: bài này <b>không nói dối câu nào</b>. Mọi con số đều có thể đúng. Nhưng cách chọn từ và cách ngắt câu đưa người đọc tới một kết luận cụ thể. Đó là công việc bình thường của báo chí — và là lý do em cần đọc <b>ít nhất hai nguồn</b> về cùng một sự việc.' },
    { t: 'h', text: 'Từ vựng báo chí thường gặp' },
    { t: 'words', items: [
      { ru: 'по да́нным…', vn: 'theo số liệu của…' },
      { ru: 'как сообща́ет…', vn: 'như… đưa tin' },
      { ru: 'исто́чник в ве́домстве', vn: 'nguồn tin trong ngành' },
      { ru: 'по слова́м экспе́рта', vn: 'theo lời chuyên gia' },
      { ru: 'ситуа́ция обостри́лась', vn: 'tình hình trở nên căng' },
      { ru: 'ме́ры при́няты', vn: 'các biện pháp đã được áp dụng' },
      { ru: 'вопро́с остаётся откры́тым', vn: 'câu hỏi vẫn để ngỏ' },
      { ru: 'на фо́не…', vn: 'trong bối cảnh…' },
      { ru: 'в свою́ о́чередь', vn: 'về phần mình' },
      { ru: 'тем не ме́нее', vn: 'tuy vậy' }
    ]},
    { t: 'tip', html: 'Cụm <span class="ru">исто́чник в ве́домстве</span> ("một nguồn tin trong bộ ngành") là tín hiệu quan trọng: thông tin <b>chưa được xác nhận chính thức</b>. Gặp cụm đó, hạ mức tin cậy xuống ngay.' }
  ],
  vocab: [
    { ru: 'публицисти́ческий', vn: 'thuộc báo chí, chính luận' }, { ru: 'возде́йствие', vn: 'sự tác động' },
    { ru: 'заголо́вок', vn: 'tiêu đề' }, { ru: 'лид', vn: 'đoạn dẫn' },
    { ru: 'ритори́ческий вопро́с', vn: 'câu hỏi tu từ' }, { ru: 'парцелля́ция', vn: 'phép cắt câu' },
    { ru: 'антите́за', vn: 'phép đối lập' }, { ru: 'инве́рсия', vn: 'phép đảo trật tự' },
    { ru: 'преобразова́ния', vn: 'cải cách (tích cực)' }, { ru: 'сго́вор', vn: 'sự thông đồng (tiêu cực)' },
    { ru: 'взлете́ть (о цена́х)', vn: 'vọt lên (giá)' }, { ru: 'разры́в', vn: 'khoảng cách, độ chênh' },
    { ru: 'в рассро́чку', vn: 'trả góp' }, { ru: 'подзаря́дка', vn: 'việc sạc thêm' },
    { ru: 'обостри́ться', vn: 'trở nên căng thẳng' }, { ru: 'на фо́не', vn: 'trong bối cảnh' },
    { ru: 'ве́домство', vn: 'bộ, ngành' }, { ru: 'экзо́тика', vn: 'thứ lạ lẫm' }
  ],
  ex: [
    { t: 'choice', q: 'Phong cách báo chí khác khoa học ở chỗ:', options: ['Câu ngắn hơn', 'Nó CẦN có giọng, khoa học thì GIẤU tác giả', 'Không có số liệu', 'Không dẫn nguồn'], a: 1, why: 'Báo chí làm hai việc cùng lúc: đưa tin và tác động.' },
    { t: 'choice', q: 'Kỹ thuật đọc báo Nga để tách quan điểm khỏi sự kiện:', options: ['Đọc thật nhanh', 'Xoá hết từ đánh giá rồi đọc lại', 'Chỉ đọc tiêu đề', 'Đọc từ cuối lên'], a: 1, why: 'Chênh lệch giữa hai bản chính là quan điểm của tờ báo.' },
    { t: 'choice', q: '<span class="ru">толпа́</span> so với <span class="ru">гру́ппа люде́й</span>:', options: ['Trung tính như nhau', 'Mang sắc thái tiêu cực — đám đông hỗn loạn', 'Trang trọng hơn', 'Chỉ khác về số lượng'], a: 1, why: 'Chọn từ khác nhau ra hai bài báo khác nhau mà không nói dối câu nào.' },
    { t: 'choice', q: '<span class="ru">парцелля́ция</span> là:', options: ['Đảo trật tự từ', 'Cắt một câu thành nhiều câu cụt', 'Lặp đầu câu', 'Câu hỏi tu từ'], a: 1, why: 'Решение принято. Без обсуждения. За один день. — nhà báo đang gằn giọng.' },
    { t: 'choice', q: 'Nếu chỉ có 30 giây, đọc phần nào của bài báo Nga?', options: ['Kết bài', 'Заголовок + лид', 'Phần chuyên gia', 'Phần bối cảnh'], a: 1, why: 'Báo Nga viết theo hình tháp ngược — quan trọng nhất ở trên.' },
    { t: 'choice', q: 'Cụm <span class="ru">исто́чник в ве́домстве</span> báo hiệu:', options: ['Thông tin rất đáng tin', 'Thông tin chưa được xác nhận chính thức', 'Tin từ nước ngoài', 'Tin cũ'], a: 1, why: 'Gặp cụm đó thì hạ mức tin cậy xuống ngay.' },
    { t: 'choice', q: 'Trong bài đọc, câu «Треть ёмкости.» là thủ pháp gì?', options: ['Инверсия', 'Анафора', 'Парцелляция', 'Антитеза'], a: 2, why: 'Câu cụt tách ra để buộc người đọc dừng lại.' },
    { t: 'type', q: 'Điền: ___ да́нным Минтра́нса, парк вы́рос вдво́е. (theo)', a: 'по', hint: 'Giới từ + cách 3.' },
    { t: 'type', q: 'Điền: Вопро́с остаётся ___ . (để ngỏ)', a: 'открытым', alt: ['откры́тым'], hint: 'Cách 5, đi với остаётся.' },
    { t: 'match', q: 'Nối thủ pháp với ví dụ:', pairs: [['ритори́ческий вопро́с', 'Кто за это ответит?'], ['ана́фора', 'Мы ждали год. Мы ждали два.'], ['антите́за', 'Планы — грандиозные. Результаты — скромные.'], ['парцелля́ция', 'Решение принято. Без обсуждения.']] }
  ]
};

/* ---------------------------------------------------------- BÀI 8 */
LESSON_DATA['b2-08'] = {
  level: 'b2',
  intro: 'Nghịch lý của người học tiếng Nga giỏi: viết luận văn được, nhưng ngồi trong bếp ký túc xá với ba người Nga thì không hiểu họ đang cười cái gì. Khẩu ngữ có <b>ngữ pháp riêng</b> — không phải tiếng Nga sai, mà là một hệ thống khác. Bài này mở hệ thống đó ra.',
  blocks: [
    { t: 'h', text: 'Sáu quy tắc của khẩu ngữ' },
    { t: 'table', head: ['Quy tắc', 'Văn viết', 'Khẩu ngữ'], rows: [
      ['Lược bỏ động từ', 'Я иду́ домо́й.', 'Я домо́й.'],
      ['Lược bỏ giới từ trong địa danh quen', 'Я е́ду в магази́н.', 'Я в магази́н. / Я за хле́бом.'],
      ['Cách 1 thay cách nghiêng', 'Мне нужна́ э́та кни́га.', 'Кни́га — вот э́та, ну́жно.'],
      ['Đưa từ quan trọng lên đầu', 'Я вчера́ купи́л маши́ну.', 'Маши́ну я вчера́ купи́л.'],
      ['Câu hỏi không có từ hỏi', 'Ты пойдёшь?', 'Идёшь? / Пойдём?'],
      ['Nhắc lại để khẳng định', 'Да, коне́чно.', 'Да-да-да. / Так-та́к.']
    ]},
    { t: 'note', html: 'Lược bỏ động từ chuyển động là đặc điểm dễ nhận nhất: <span class="ru">Я на рабо́ту</span>, <span class="ru">Мы в кино́</span>, <span class="ru">Ты куда́?</span> — không có động từ nào cả, và hoàn toàn tự nhiên. Trong văn viết thì đó là câu thiếu.' },
    { t: 'h', text: 'Từ đệm — bộ khung của lời nói' },
    { t: 'table', head: ['Từ', 'Nghĩa gốc', 'Chức năng thật khi nói'], rows: [
      ['ну', 'thì, à', 'bắt đầu câu, câu giờ'],
      ['вот', 'đây', 'chỉ ra, nhấn mạnh, kết một ý'],
      ['та́к', 'như vậy', 'chuyển sang việc mới: «Так, что дальше?»'],
      ['зна́чит', 'nghĩa là', 'nối ý, gần như vô nghĩa khi nói'],
      ['коро́че', 'ngắn hơn', 'tóm lại (rất phổ biến ở người trẻ)'],
      ['в о́бщем', 'nói chung', 'chốt lại sau khi kể dài'],
      ['ти́па', 'kiểu như', 'ước chừng, kiểu (hơi suồng sã)'],
      ['слу́шай', 'nghe này', 'mở đầu khi muốn đề nghị gì đó'],
      ['да ла́дно', 'thôi được', 'không tin / thôi bỏ đi']
    ]},
    { t: 'warn', html: '<span class="ru">Ти́па</span> và <span class="ru">коро́че</span> là từ của giới trẻ và của lời nói suồng sã. Đừng dùng với giáo sư hướng dẫn. Ngược lại, <span class="ru">в о́бщем</span> và <span class="ru">зна́чит</span> thì ai cũng dùng, kể cả trong buổi bảo vệ luận án.' },
    { t: 'h', text: 'Bốn tiểu từ đổi hẳn sắc thái' },
    { t: 'table', head: ['Tiểu từ', 'Thêm nghĩa gì', 'Ví dụ'], rows: [
      ['же', 'nhưng mà, chứ (nhắc điều người kia phải biết)', 'Ты же обеща́л! — Cậu hứa rồi mà!'],
      ['ведь', 'vì mà, chứ (viện lý do)', 'Он ведь то́лько что прие́хал. — Anh ấy vừa mới đến mà.'],
      ['-то', 'nhấn vào chính từ đó', 'Я-то согла́сен. — Riêng tôi thì đồng ý (còn người khác thì chưa chắc).'],
      ['ли', 'liệu có (câu hỏi gián tiếp)', 'Не зна́ю, придёт ли он.']
    ]},
    { t: 'note', html: 'Bài 18 sẽ đào sâu bốn tiểu từ này. Ở đây chỉ cần nhớ: chúng <b>không dịch được</b> sang tiếng Việt bằng một từ, nhưng bỏ chúng đi thì câu nghe cộc lốc, còn dùng đúng thì lập tức nghe rất Nga.' },
    { t: 'h', text: 'Rút gọn khi phát âm' },
    { t: 'table', head: ['Viết', 'Người Nga nói', 'Ghi chú'], rows: [
      ['здра́вствуйте', '«здра́сьте» / «драсьте»', 'phổ biến tuyệt đối'],
      ['сейча́с', '«щас»', 'không viết ra trong văn bản chính thức'],
      ['что', '«што»', 'luôn luôn, kể cả văn trang trọng'],
      ['ко́гда-нибудь', '«када́-нить»', 'nói nhanh'],
      ['ты́сяча', '«ты́ща»', 'khi nói giá tiền'],
      ['со́рок мину́т', '«со́рк мину́т»', 'nuốt nguyên âm không trọng âm'],
      ['вообще́', '«ваще́»', 'suồng sã']
    ]},
    { t: 'tip', html: 'Đây là lý do người học nghe không kịp dù biết hết từ: <b>từ trong tai không giống từ trong sách</b>. Cách chữa duy nhất là nghe nhiều lời nói thật — podcast, vlog, phim — chứ không phải học thêm từ.' },
    { t: 'h', text: 'Một đoạn hội thoại thật' },
    { t: 'dialog', lines: [
      { who: 'Ди́ма', ru: 'О, Чунг! Ты куда́?', vn: 'Ơ, Trung! Đi đâu đấy?' },
      { who: 'Чунг', ru: 'Да на ка́федру, к нау́чнику. А ты?', vn: 'À lên bộ môn, gặp thầy hướng dẫn. Còn cậu?' },
      { who: 'Ди́ма', ru: 'Я-то? В столо́вую. Слу́шай, ты статью́-то сдал?', vn: 'Tớ á? Xuống căng tin. Này, cậu nộp bài báo chưa đấy?' },
      { who: 'Чунг', ru: 'Ну, почти́. Оста́лось спи́сок литерату́ры офо́рмить.', vn: 'Ừ, gần xong. Còn mỗi phần tài liệu tham khảo phải trình bày lại.' },
      { who: 'Ди́ма', ru: 'Ой, э́то ж по ГО́СТу на́до. Замуча́ешься.', vn: 'Ôi, cái đó phải theo chuẩn GOST đấy. Mệt lắm.' },
      { who: 'Чунг', ru: 'Да зна́ю. Коро́че, до за́втра доде́лаю.', vn: 'Ừ biết rồi. Tóm lại là mai xong thôi.' },
      { who: 'Ди́ма', ru: 'Ну дава́й. Уда́чи!', vn: 'Ừ thế nhé. Chúc may mắn!' },
      { who: 'Чунг', ru: 'Дава́й!', vn: 'Ừ nhé!' }
    ]},
    { t: 'table', head: ['Chỗ', 'Hiện tượng khẩu ngữ'], rows: [
      ['«Ты куда́?»', 'lược bỏ động từ идёшь'],
      ['«Да на ка́федру»', 'từ đệm да mở đầu + lược động từ'],
      ['«нау́чнику»', 'từ lóng sinh viên của научный руководитель'],
      ['«Я-то?»', 'tiểu từ -то nhấn vào chính mình'],
      ['«статью́-то сдал?»', '-то gắn vào tân ngữ + câu hỏi không có từ hỏi'],
      ['«э́то ж на́до»', 'же rút gọn thành ж khi nói nhanh'],
      ['«Замуча́ешься»', 'ngôi 2 chỉ chung mọi người, không chỉ riêng Trung'],
      ['«Дава́й!» / «Ну дава́й»', 'lời chào tạm biệt thân mật phổ biến nhất']
    ]},
    { t: 'tip', html: '<span class="ru">Дава́й!</span> là câu chào tạm biệt em sẽ nghe hàng chục lần mỗi ngày ở Nga. Nghĩa đen là "nào, đi", nhưng chức năng là "thôi nhé, chào". Đáp lại cũng bằng <span class="ru">Дава́й!</span> hoặc <span class="ru">Ну всё, пока́!</span>' },
    { t: 'h', text: 'Từ lóng của sinh viên' },
    { t: 'table', head: ['Lóng', 'Đầy đủ', 'Nghĩa'], rows: [
      ['нау́чник', 'нау́чный руководи́тель', 'thầy hướng dẫn'],
      ['ка́федра', '(không lóng, nhưng dùng như "chỗ làm")', 'bộ môn'],
      ['зачётка', 'зачётная кни́жка', 'sổ điểm sinh viên'],
      ['общага', 'общежи́тие', 'ký túc xá'],
      ['стипу́ха', 'стипе́ндия', 'học bổng'],
      ['препо́д', 'преподава́тель', 'giảng viên'],
      ['ла́ба', 'лаборато́рная рабо́та', 'bài thí nghiệm'],
      ['ку́рсач', 'курсова́я рабо́та', 'đồ án môn học'],
      ['дипло́м', 'дипло́мная рабо́та', 'đồ án tốt nghiệp'],
      ['хвост', '(nghĩa đen: cái đuôi)', 'môn nợ chưa qua']
    ]},
    { t: 'warn', html: '<span class="ru">Хвост</span> và động từ <span class="ru">завали́ть экза́мен</span> (thi trượt) là hai từ sinh viên Nga dùng suốt. <span class="ru">У меня́ два хвоста́</span> = tôi nợ hai môn. Đừng dùng những từ này khi nói chuyện với trưởng khoa.' },
    { t: 'h', text: 'Ba tầng cùng một ý' },
    { t: 'table', head: ['Suồng sã', 'Trung tính', 'Trang trọng'], rows: [
      ['Я завали́л экза́мен.', 'Я не сдал экза́мен.', 'Экза́мен не сдан.'],
      ['Он свали́л.', 'Он ушёл.', 'Он поки́нул заседа́ние.'],
      ['Дава́й встре́тимся.', 'Дава́йте встре́тимся.', 'Предлага́ю назна́чить встре́чу.'],
      ['Ща сде́лаю.', 'Сейча́с сде́лаю.', 'Бу́дет вы́полнено в ближа́йшее вре́мя.'],
      ['Норм.', 'Нормально.', 'Удовлетвори́тельно.']
    ]},
    { t: 'tip', html: 'Bài tập suốt cấp B2: mỗi khi học một cách nói mới, hỏi ngay <b>"cái này ở tầng nào?"</b> và tự tìm hai tầng còn lại. Người nói giỏi không phải người biết nhiều từ, mà là người <b>chọn đúng tầng</b> cho đúng người nghe.' }
  ],
  vocab: [
    { ru: 'разгово́рная речь', vn: 'lời nói đời thường' }, { ru: 'коро́че', vn: 'tóm lại (suồng sã)' },
    { ru: 'в о́бщем', vn: 'nói chung, tóm lại' }, { ru: 'зна́чит', vn: 'thế thì, nghĩa là' },
    { ru: 'ти́па', vn: 'kiểu như (suồng sã)' }, { ru: 'да ла́дно', vn: 'thôi được / không tin nổi' },
    { ru: 'дава́й!', vn: 'thôi nhé, chào' }, { ru: 'нау́чник', vn: 'thầy hướng dẫn (lóng)' },
    { ru: 'общага', vn: 'ký túc xá (lóng)' }, { ru: 'препо́д', vn: 'giảng viên (lóng)' },
    { ru: 'зачётка', vn: 'sổ điểm' }, { ru: 'хвост', vn: 'môn nợ' },
    { ru: 'завали́ть экза́мен', vn: 'thi trượt (lóng)' }, { ru: 'замуча́ешься', vn: 'mệt phờ đấy' },
    { ru: 'офо́рмить', vn: 'trình bày đúng quy cách' }, { ru: 'доде́лать', vn: 'làm nốt' }
  ],
  ex: [
    { t: 'choice', q: 'Câu <span class="ru">Ты куда́?</span> lược bỏ cái gì?', options: ['Chủ ngữ', 'Động từ chuyển động', 'Giới từ', 'Tân ngữ'], a: 1, why: 'Đầy đủ là "Ты куда идёшь?" — lược động từ là đặc điểm dễ nhận nhất của khẩu ngữ.' },
    { t: 'choice', q: 'Từ nào <b>không nên</b> dùng với giáo sư hướng dẫn?', options: ['в о́бщем', 'зна́чит', 'ти́па', 'вот'], a: 2, why: 'Типа và короче thuộc lời nói suồng sã của giới trẻ.' },
    { t: 'choice', q: '<span class="ru">Ты же обеща́л!</span> — tiểu từ же thêm nghĩa gì?', options: ['Nghi ngờ', 'Nhắc điều người kia đáng lẽ phải nhớ', 'Lịch sự', 'Phủ định'], a: 1, why: '"Cậu hứa rồi mà!" — trách nhẹ.' },
    { t: 'choice', q: '<span class="ru">Я-то согла́сен</span> nghĩa là:', options: ['Tôi hoàn toàn đồng ý', 'Riêng tôi thì đồng ý (người khác chưa chắc)', 'Tôi không đồng ý', 'Tôi đã đồng ý rồi'], a: 1, why: 'Tiểu từ -то nhấn vào chính từ nó gắn vào, ngụ ý có sự đối lập.' },
    { t: 'choice', q: '<span class="ru">што</span> là:', options: ['Từ lóng', 'Cách phát âm chuẩn của что', 'Lỗi chính tả', 'Phương ngữ'], a: 1, why: 'Chữ ч trong что luôn đọc là ш, kể cả trong văn trang trọng.' },
    { t: 'choice', q: '<span class="ru">нау́чник</span> là:', options: ['Nhà khoa học', 'Thầy hướng dẫn (lóng sinh viên)', 'Tạp chí khoa học', 'Phòng thí nghiệm'], a: 1, why: 'Nói tắt của научный руководитель.' },
    { t: 'choice', q: '<span class="ru">У меня́ два хвоста́</span> nghĩa là:', options: ['Tôi có hai cái đuôi', 'Tôi nợ hai môn', 'Tôi có hai bài thi', 'Tôi đứng thứ hai'], a: 1, why: 'Từ sinh viên; đừng dùng khi nói chuyện với trưởng khoa.' },
    { t: 'choice', q: 'Dạng trang trọng của <span class="ru">Я завали́л экза́мен</span> là:', options: ['Я не сдал экзамен', 'Экзамен не сдан', 'Экзамен провалился', 'Я плохо сдал'], a: 1, why: 'Tầng trang trọng dùng bị động, xoá chủ ngữ.' },
    { t: 'choice', q: 'Vì sao người học nghe không kịp dù biết hết từ?', options: ['Người Nga nói nhanh', 'Từ trong tai không giống từ trong sách (rút gọn khi phát âm)', 'Thiếu từ vựng', 'Ngữ pháp khó'], a: 1, why: 'здра́сьте, щас, ваще́ — cách chữa là nghe nhiều lời nói thật.' },
    { t: 'match', q: 'Nối lóng với nghĩa:', pairs: [['общага', 'ký túc xá'], ['препо́д', 'giảng viên'], ['ку́рсач', 'đồ án môn học'], ['стипу́ха', 'học bổng']] }
  ]
};

/* ---------------------------------------------------------- BÀI 9 */
LESSON_DATA['b2-09'] = {
  level: 'b2',
  intro: 'Bài này là <b>ngữ pháp lõi</b> của phong cách khoa học. Bị động và danh hoá không phải hai chủ đề riêng — chúng là một cặp công cụ để làm cùng một việc: <b>đẩy con người ra khỏi câu</b> và đưa sự vật, quá trình vào chỗ chủ ngữ.',
  blocks: [
    { t: 'h', text: 'Ba cách nói bị động trong tiếng Nga' },
    { t: 'table', head: ['Cách', 'Cấu tạo', 'Ví dụ', 'Dùng khi'], rows: [
      ['Động từ -ся', 'chưa hoàn thành + -ся', 'Ме́тод <b>применя́ется</b> в промы́шленности.', 'quá trình, quy luật, hiện tại'],
      ['Phân từ dạng ngắn', 'быть + причастие ngắn', 'Ме́тод <b>был приме́нён</b> впервы́е в 2020 г.', 'kết quả, sự kiện đã xong'],
      ['Ngôi 3 số nhiều vô nhân xưng', 'động từ số nhiều, không chủ ngữ', 'В статье́ <b>приво́дят</b> да́нные…', 'khẩu ngữ hơn, ít dùng trong khoa học']
    ]},
    { t: 'warn', html: 'Quy tắc phân biệt then chốt: <b>chưa hoàn thành → dùng -ся</b>, <b>hoàn thành → dùng phân từ ngắn</b>. Câu <span class="ru">Моде́ль разрабо́талась</span> ✗ là lỗi — разработать là hoàn thành nên phải nói <span class="ru">Моде́ль была́ разрабо́тана</span>. Đây là lỗi rất phổ biến của người học.' },
    { t: 'h', text: 'Ai làm — đặt ở cách 5' },
    { t: 'table', head: ['Chủ động', 'Bị động'], rows: [
      ['А́вторы провели́ экспериме́нт.', 'Экспериме́нт <b>прове́дён а́вторами</b>.'],
      ['Ка́федра разрабо́тала мето́дику.', 'Мето́дика <b>разрабо́тана ка́федрой</b>.'],
      ['На́ша гру́ппа получи́ла результа́ты.', 'Результа́ты <b>полу́чены на́шей гру́ппой</b>.']
    ]},
    { t: 'note', html: 'Nhưng trong bài báo thật, phần "ai làm" thường bị <b>bỏ hẳn</b>: <span class="ru">Экспериме́нт прове́дён в лаборато́рии ка́федры</span> — không nói ai tiến hành, vì đã rõ đó là tác giả. Bỏ được thì bỏ; nêu ra chỉ khi cần phân biệt với nhóm khác.' },
    { t: 'h', text: 'Phân từ ngắn — bảng cần thuộc' },
    { t: 'table', head: ['Động từ', 'Đực', 'Cái', 'Trung', 'Số nhiều'], rows: [
      ['провести́', 'прове́дён', 'проведена́', 'проведено́', 'проведены́'],
      ['получи́ть', 'полу́чен', 'полу́чена', 'полу́чено', 'полу́чены'],
      ['разрабо́тать', 'разрабо́тан', 'разрабо́тана', 'разрабо́тано', 'разрабо́таны'],
      ['предложи́ть', 'предло́жен', 'предло́жена', 'предло́жено', 'предло́жены'],
      ['установи́ть', 'устано́влен', 'устано́влена', 'устано́влено', 'устано́влены'],
      ['испо́льзовать', 'испо́льзован', 'испо́льзована', 'испо́льзовано', 'испо́льзованы'],
      ['доказа́ть', 'дока́зан', 'дока́зана', 'дока́зано', 'дока́заны'],
      ['вы́полнить', 'вы́полнен', 'вы́полнена', 'вы́полнено', 'вы́полнены']
    ]},
    { t: 'tip', html: 'Chú ý dịch chuyển trọng âm ở <span class="ru">прове́дён → проведена́ → проведены́</span>. Nhóm động từ có đuôi -ённый luôn chuyển trọng âm xuống đuôi ở các dạng còn lại. Còn nhóm -анный / -енный không chuyển: <span class="ru">разрабо́тан, разрабо́тана, разрабо́таны</span>.' },
    { t: 'h', text: 'Dạng trung tính không chủ ngữ — công cụ mạnh nhất' },
    { t: 'words', items: [
      { ru: 'Устано́влено, что…', vn: 'Đã xác lập được rằng…' },
      { ru: 'Показа́но, что…', vn: 'Đã chỉ ra rằng…' },
      { ru: 'Дока́зано, что…', vn: 'Đã chứng minh được rằng…' },
      { ru: 'Отме́чено, что…', vn: 'Đã ghi nhận rằng…' },
      { ru: 'Вы́явлено, что…', vn: 'Đã phát hiện rằng…' },
      { ru: 'Предусмо́трено, что…', vn: 'Đã dự liệu rằng…' },
      { ru: 'Принято́ реше́ние…', vn: 'Đã ra quyết định…' }
    ]},
    { t: 'note', html: 'Đây là cấu trúc "hoàn hảo" của văn khoa học: không có ai làm, không có gì bị làm — chỉ có <b>sự thật đứng một mình</b>. Ba từ đầu bảng (установлено, показано, доказано) xuất hiện trong gần như mọi bài báo Nga.' },
    { t: 'h', text: 'Danh hoá — bốn kiểu' },
    { t: 'table', head: ['Đuôi', 'Từ động từ nào', 'Ví dụ'], rows: [
      ['-ние / -ение', 'phần lớn động từ', 'изуче́ние, примене́ние, увеличе́ние, распределе́ние'],
      ['-ка', 'động từ -ать hay dùng', 'разрабо́тка, обрабо́тка, прове́рка, насто́йка'],
      ['-ость', 'từ tính từ (chỉ tính chất)', 'то́чность, надёжность, эффекти́вность, вя́зкость'],
      ['không đuôi', 'một số ít', 'ана́лиз, расчёт, вы́вод, сдвиг, износ']
    ]},
    { t: 'warn', html: 'Cặp <span class="ru">-ние</span> và <span class="ru">-ка</span> không phải lúc nào cũng thay nhau được và đôi khi khác nghĩa: <span class="ru">обрабо́тка</span> = việc xử lý (quá trình cụ thể), <span class="ru">обраще́ние</span> = sự đối xử / lời kêu gọi. Tra từ điển khi không chắc, đừng tự chế.' },
    { t: 'h', text: 'Ba tầng dày đặc dần' },
    { t: 'table', head: ['Tầng', 'Câu'], rows: [
      ['1 — động từ', 'Мы изменили конструкцию, и надёжность повысилась.'],
      ['2 — một danh hoá', 'Изменение конструкции повысило надёжность.'],
      ['3 — hai danh hoá', 'Изменение конструкции привело к повышению надёжности.'],
      ['4 — quá đà (канцелярит)', 'Осуществление изменения конструкции обеспечило достижение повышения показателей надёжности.']
    ]},
    { t: 'tip', html: 'Tầng 2 và 3 là chuẩn khoa học. Tầng 4 là bệnh. Quy tắc thực hành: <b>không quá hai danh từ hành động trong một câu</b>. Câu tầng 4 có bốn (осуществление, изменение, достижение, повышение) — người Nga đọc câu đó cũng thấy khó chịu.' },
    { t: 'h', text: 'Bài tập chuyển đổi mẫu' },
    { t: 'table', head: ['Câu khẩu ngữ', 'Câu khoa học'], rows: [
      ['Мы попробовали новый сплав, и деталь стала служить дольше.', 'Применение нового сплава увеличило срок службы детали.'],
      ['Учёные выяснили, что температура сильно влияет.', 'Установлено значительное влияние температуры.'],
      ['Мы посчитали всё заново и нашли ошибку.', 'При повторном расчёте выявлена ошибка.'],
      ['Эта штука работает лучше, чем старая.', 'Предложенное устройство превосходит существующее по эффективности.']
    ]},
    { t: 'note', html: 'Nhìn cột phải: cả bốn câu đều <b>ngắn hơn</b> cột trái, dù nghe "nặng" hơn. Đó là điểm người học hay hiểu nhầm — phong cách khoa học không dài dòng, nó <b>nén</b>. Cái làm nó khó đọc là mật độ thông tin, không phải độ dài.' },
    { t: 'h', text: 'Khi nào KHÔNG nên bị động' },
    { t: 'table', head: ['Trường hợp', 'Vì sao'], rows: [
      ['Khi cần nói rõ ai chịu trách nhiệm', '«Кафедра приняла решение» rõ hơn «Решение принято»'],
      ['Khi câu đã có ba danh hoá', 'thêm bị động là thành канцелярит'],
      ['Trong phần thảo luận, khi tranh luận với tác giả khác', '«Иванов утверждает…» — cần chủ thể rõ'],
      ['Khi trình bày miệng', 'người nghe khó bám câu bị động dài']
    ]},
    { t: 'warn', html: 'Điểm cuối rất quan trọng cho bài 13 (trình bày hội thảo): văn <b>viết</b> khoa học ưa bị động, nhưng khi <b>nói</b> trước hội trường thì câu chủ động ngắn dễ theo dõi hơn nhiều. Đừng đọc nguyên bài báo lên — phải viết lại thành văn nói.' }
  ],
  vocab: [
    { ru: 'страда́тельный зало́г', vn: 'thể bị động' }, { ru: 'причастие', vn: 'phân từ' },
    { ru: 'кра́ткая фо́рма', vn: 'dạng ngắn' }, { ru: 'прове́дён', vn: 'đã được tiến hành' },
    { ru: 'полу́чен', vn: 'đã thu được' }, { ru: 'устано́влено', vn: 'đã xác lập được' },
    { ru: 'вы́явлено', vn: 'đã phát hiện' }, { ru: 'дока́зано', vn: 'đã chứng minh' },
    { ru: 'надёжность', vn: 'độ tin cậy, độ bền' }, { ru: 'эффекти́вность', vn: 'hiệu quả' },
    { ru: 'распределе́ние', vn: 'sự phân bố' }, { ru: 'обрабо́тка', vn: 'việc xử lý' },
    { ru: 'расчёт', vn: 'việc tính toán' }, { ru: 'сплав', vn: 'hợp kim' },
    { ru: 'срок слу́жбы', vn: 'tuổi thọ sử dụng' }, { ru: 'превосходи́ть', vn: 'vượt trội hơn' },
    { ru: 'устро́йство', vn: 'thiết bị' }, { ru: 'привести́ к', vn: 'dẫn tới' }
  ],
  ex: [
    { t: 'choice', q: 'Câu nào đúng?', options: ['Моде́ль разрабо́талась на ка́федре', 'Моде́ль была́ разрабо́тана на ка́федре', 'Моде́ль разраба́тала на ка́федре', 'Моде́ль разрабо́тано на ка́федре'], a: 1, why: 'Разработать là thể hoàn thành → phải dùng phân từ ngắn, không dùng -ся.' },
    { t: 'choice', q: 'Quy tắc chọn giữa -ся và phân từ ngắn:', options: ['Tuỳ ý', 'Chưa hoàn thành → -ся; hoàn thành → phân từ ngắn', 'Ngược lại', 'Theo giống của danh từ'], a: 1, why: 'Применяется (quá trình) vs был применён (kết quả).' },
    { t: 'choice', q: 'Người thực hiện trong câu bị động đặt ở cách nào?', options: ['cách 2', 'cách 3', 'cách 4', 'cách 5'], a: 3, why: 'Эксперимент проведён авторами — творительный.' },
    { t: 'choice', q: 'Dạng đúng: испыта́ния ___ (đã được tiến hành):', options: ['проведён', 'проведена', 'проведено', 'проведены'], a: 3, why: 'Испытания số nhiều.' },
    { t: 'choice', q: 'Trọng âm đúng của dạng số nhiều <span class="ru">провести́</span>:', options: ['прове́дены', 'проведены́', 'прове́дённы', 'провёдены'], a: 1, why: 'Nhóm -ённый chuyển trọng âm xuống đuôi: проведена́, проведены́.' },
    { t: 'choice', q: 'Danh hoá bằng đuôi <span class="ru">-ость</span> tạo từ:', options: ['động từ', 'tính từ', 'trạng từ', 'giới từ'], a: 1, why: 'точный → то́чность, надёжный → надёжность.' },
    { t: 'choice', q: 'Quy tắc tránh <span class="ru">канцеляри́т</span>:', options: ['Không dùng danh hoá', 'Không quá hai danh từ hành động trong một câu', 'Câu không quá 10 từ', 'Không dùng bị động'], a: 1, why: 'Осуществление изменения… обеспечило достижение повышения — bốn danh hoá là quá.' },
    { t: 'choice', q: 'Khi <b>trình bày miệng</b> ở hội thảo, nên:', options: ['Đọc nguyên bài báo', 'Viết lại thành câu chủ động ngắn', 'Dùng nhiều bị động hơn', 'Bỏ hết thuật ngữ'], a: 1, why: 'Người nghe khó bám câu bị động dài — viết và nói là hai văn bản khác nhau.' },
    { t: 'type', q: 'Chuyển sang bị động: Учёные установили зависимость. → Зави́симость ___ .', a: 'установлена', alt: ['устано́влена'], hint: 'Зависимость giống cái, số ít.' },
    { t: 'type', q: 'Điền danh hoá của <span class="ru">рассчита́ть</span>: при повто́рном ___ вы́явлена оши́бка.', a: 'расчёте', alt: ['расчете'], hint: 'Danh từ không đuôi -ние, ở cách 6.' },
    { t: 'match', q: 'Nối:', pairs: [['устано́влено', 'đã xác lập được'], ['вы́явлено', 'đã phát hiện'], ['надёжность', 'độ tin cậy'], ['срок слу́жбы', 'tuổi thọ sử dụng']] }
  ]
};

/* ---------------------------------------------------------- BÀI 10 */
LESSON_DATA['b2-10'] = {
  level: 'b2',
  intro: 'Câu tiếng Nga khoa học dài — có khi cả một đoạn là một câu. Nhưng nó <b>không rối</b>, vì nó có kiến trúc. Bài này dạy em cách <b>tháo</b> một câu dài ra khi đọc, và cách <b>lắp</b> một câu dài mà không sập khi viết.',
  blocks: [
    { t: 'h', text: 'Bốn loại mệnh đề phụ hay gặp' },
    { t: 'table', head: ['Loại', 'Nối bằng', 'Ví dụ'], rows: [
      ['Định ngữ', 'кото́рый (hợp giống–số theo trước, cách theo sau)', 'моде́ль, кото́рая учи́тывает температу́ру'],
      ['Bổ ngữ', 'что · что́бы · ли', 'Устано́влено, что зави́симость нелине́йна.'],
      ['Nguyên nhân – hệ quả', 'так как · поско́льку · всле́дствие того́ что', 'Поско́льку вя́зкость па́дает, тре́ние возраста́ет.'],
      ['Điều kiện – nhượng bộ', 'е́сли · при усло́вии что · несмотря́ на то что', 'При усло́вии, что температу́ра постоя́нна, …']
    ]},
    { t: 'h', text: 'КОТОРЫЙ — quy tắc vàng' },
    { t: 'p', html: '<b>Giống và số</b> lấy từ danh từ đứng <b>trước</b> nó. <b>Cách</b> lấy từ vai trò của nó trong mệnh đề <b>sau</b>.' },
    { t: 'table', head: ['Câu', 'Giống–số từ đâu', 'Cách từ đâu'], rows: [
      ['моде́ль, кото́рая учи́тывает…', 'модель — cái, số ít', 'chủ ngữ → cách 1'],
      ['моде́ль, кото́рую предложи́ли…', 'модель — cái, số ít', 'tân ngữ → cách 4'],
      ['моде́ль, в кото́рой учтено́…', 'модель — cái, số ít', 'sau в → cách 6'],
      ['результа́ты, кото́рым мо́жно ве́рить', 'результаты — số nhiều', 'sau верить → cách 3'],
      ['а́втор, рабо́ты кото́рого изве́стны', 'автор — đực, số ít', 'sở hữu → cách 2, đứng SAU danh từ']
    ]},
    { t: 'warn', html: 'Dòng cuối là bẫy: khi который mang nghĩa sở hữu, nó đứng <b>sau</b> danh từ nó bổ nghĩa — <span class="ru">а́втор, <b>рабо́ты кото́рого</b> изве́стны</span> ("tác giả mà các công trình của ông ấy nổi tiếng"), chứ không phải «которого работы». Người học hay đảo sai chỗ này.' },
    { t: 'h', text: 'Thay который bằng phân từ' },
    { t: 'table', head: ['Có который', 'Rút bằng phân từ', 'Điều kiện'], rows: [
      ['моде́ль, кото́рая учи́тывает…', 'моде́ль, учи́тывающая…', 'который phải ở cách 1'],
      ['ме́тод, кото́рый примени́ли…', 'приме́нённый ме́тод', 'который ở cách 4, bị động'],
      ['зада́ча, кото́рая была́ решена́…', 'решённая зада́ча', 'quá khứ bị động'],
      ['студе́нт, кото́рый прочита́л…', 'прочита́вший студе́нт', 'quá khứ chủ động']
    ]},
    { t: 'warn', html: 'Điều kiện bắt buộc: chỉ rút được khi который ở <b>cách 1</b> (hoặc cách 4 với ý bị động). Câu <span class="ru">моде́ль, в кото́рой учтено́ тре́ние</span> <b>không</b> rút thành phân từ được — giới từ chặn lại. Cố rút là ra câu sai.' },
    { t: 'h', text: 'Tháo một câu dài' },
    { t: 'p', html: '<span class="ru ru-big">Полученные результаты, свидетельствующие о нелинейном характере зависимости износа от температуры, позволяют утверждать, что существующие методики, разработанные для умеренного климата, не могут быть применены без корректировки в условиях, где температура опускается ниже −30 °C.</span>' },
    { t: 'table', head: ['Bước', 'Việc', 'Kết quả'], rows: [
      ['1', 'Tìm chủ ngữ và vị ngữ chính', 'результа́ты… позволя́ют утвержда́ть'],
      ['2', 'Gạch bỏ mọi thứ giữa hai dấu phẩy', 'bỏ «свидетельствующие… температуры»'],
      ['3', 'Đọc câu trần trụi', 'Kết quả cho phép khẳng định rằng…'],
      ['4', 'Trả lại từng khối một', '+ kết quả nào? (cái cho thấy quan hệ phi tuyến)'],
      ['5', 'Tháo mệnh đề что', 'các phương pháp hiện có không dùng được nếu chưa hiệu chỉnh'],
      ['6', 'Tháo mệnh đề где', 'trong điều kiện nhiệt độ xuống dưới −30 °C']
    ]},
    { t: 'tip', html: 'Kỹ thuật cốt lõi: <b>tìm cặp chủ–vị chính trước</b>, mọi thứ khác là phụ. Trong tiếng Nga, phân từ và mệnh đề phụ luôn nằm giữa hai dấu phẩy hoặc sau liên từ — nghĩa là mắt em có thể nhảy qua chúng. Đọc được bộ xương rồi mới lắp thịt vào.' },
    { t: 'h', text: 'Lắp một câu dài mà không sập' },
    { t: 'table', head: ['Nguyên tắc', 'Giải thích'], rows: [
      ['Một câu, một luận điểm chính', 'thêm chi tiết được, thêm luận điểm thứ hai thì tách câu'],
      ['Chủ ngữ và vị ngữ đừng cách nhau quá xa', 'nhồi ba mệnh đề vào giữa là người đọc quên mất chủ ngữ'],
      ['Không lồng quá hai tầng', 'который trong который trong который là hỏng'],
      ['Mỗi mệnh đề phụ có liên từ rõ ràng', 'đừng để người đọc đoán quan hệ'],
      ['Đọc to lên', 'hết hơi giữa câu nghĩa là câu quá dài']
    ]},
    { t: 'p', html: '<b>Câu sập:</b> <span class="ru">Модель, которая была разработана на кафедре, которая занимается вопросами эксплуатации техники, которая используется в северных регионах, показала хорошие результаты.</span>' },
    { t: 'p', html: '<b>Sửa:</b> <span class="ru">Модель, разработанная на кафедре эксплуатации техники для северных регионов, показала хорошие результаты.</span>' },
    { t: 'note', html: 'Ba который lồng nhau biến thành <b>một phân từ + hai định ngữ cách 2</b>. Câu ngắn hơn một nửa, ý không mất. Đây là phép sửa hữu ích nhất khi rà lại bản thảo của mình.' },
    { t: 'h', text: 'Liên từ ghép của văn viết' },
    { t: 'table', head: ['Liên từ', 'Nghĩa', 'Sắc thái'], rows: [
      ['в си́лу того́ что', 'do bởi', 'trang trọng, thay cho потому что'],
      ['всле́дствие того́ что', 'do hậu quả là', 'nhấn quan hệ nhân quả'],
      ['благодаря́ тому́ что', 'nhờ ở chỗ', 'nguyên nhân TÍCH CỰC'],
      ['из-за того́ что', 'tại vì', 'nguyên nhân TIÊU CỰC'],
      ['несмотря́ на то что', 'mặc dù', 'nhượng bộ'],
      ['при усло́вии что', 'với điều kiện là', 'điều kiện'],
      ['по ме́ре того́ как', 'theo mức độ mà', 'hai quá trình song song'],
      ['в то вре́мя как', 'trong khi đó thì', 'đối lập']
    ]},
    { t: 'warn', html: 'Cặp <span class="ru">благодаря́</span> / <span class="ru">из-за</span> mang <b>đánh giá</b>: благодаря дождю (mưa là điều tốt), из-за дождя (mưa là điều dở). Dùng ngược là câu nghe buồn cười. Và <span class="ru">благодаря́</span> đi với <b>cách 3</b>, <span class="ru">из-за</span> với cách 2.' },
    { t: 'tip', html: 'Cụm <span class="ru">по ме́ре того́ как</span> rất hữu ích trong khoa học: <span class="ru">По ме́ре того́ как температу́ра снижа́ется, вя́зкость возраста́ет</span> — "càng… thì càng…". Nó diễn tả hai quá trình biến thiên song song, đúng thứ mà đồ thị hay thể hiện.' }
  ],
  vocab: [
    { ru: 'сложноподчинённое предложе́ние', vn: 'câu phức có mệnh đề phụ' }, { ru: 'прида́точное', vn: 'mệnh đề phụ' },
    { ru: 'кото́рый', vn: 'mà, cái mà' }, { ru: 'в си́лу того́ что', vn: 'do bởi' },
    { ru: 'всле́дствие того́ что', vn: 'do hậu quả là' }, { ru: 'благодаря́ + cách 3', vn: 'nhờ (tích cực)' },
    { ru: 'из-за + cách 2', vn: 'tại vì (tiêu cực)' }, { ru: 'несмотря́ на то что', vn: 'mặc dù' },
    { ru: 'при усло́вии что', vn: 'với điều kiện là' }, { ru: 'по ме́ре того́ как', vn: 'càng… thì càng…' },
    { ru: 'в то вре́мя как', vn: 'trong khi đó thì' }, { ru: 'корректиро́вка', vn: 'sự hiệu chỉnh' },
    { ru: 'нелине́йный', vn: 'phi tuyến' }, { ru: 'уме́ренный кли́мат', vn: 'khí hậu ôn hoà' },
    { ru: 'тре́ние', vn: 'ma sát' }, { ru: 'опуска́ться', vn: 'hạ xuống' }
  ],
  ex: [
    { t: 'choice', q: 'Giống và số của <span class="ru">кото́рый</span> lấy từ đâu?', options: ['Mệnh đề sau', 'Danh từ đứng trước nó', 'Chủ ngữ câu chính', 'Vị ngữ'], a: 1, why: 'Giống–số lấy từ trước, cách lấy từ vai trò trong mệnh đề sau.' },
    { t: 'choice', q: '<span class="ru">моде́ль, ___ предложи́ли на ка́федре</span>:', options: ['кото́рая', 'кото́рую', 'кото́рой', 'кото́рым'], a: 1, why: 'Модель giống cái + là tân ngữ của предложили → cách 4 = которую.' },
    { t: 'choice', q: '"Tác giả mà các công trình của ông nổi tiếng" viết đúng là:', options: ['а́втор, кото́рого рабо́ты изве́стны', 'а́втор, рабо́ты кото́рого изве́стны', 'а́втор, кото́рый рабо́ты изве́стны', 'а́втор, кото́рым рабо́ты изве́стны'], a: 1, why: 'Который sở hữu đứng SAU danh từ nó bổ nghĩa.' },
    { t: 'choice', q: 'Câu <span class="ru">моде́ль, в кото́рой учтено́ тре́ние</span> có rút thành phân từ được không?', options: ['Được', 'Không — giới từ в chặn lại', 'Được nếu bỏ giới từ', 'Chỉ ở thì quá khứ'], a: 1, why: 'Chỉ rút được khi который ở cách 1 hoặc cách 4 với ý bị động.' },
    { t: 'choice', q: 'Bước đầu tiên khi tháo một câu dài là:', options: ['Tra hết từ mới', 'Tìm cặp chủ ngữ – vị ngữ chính', 'Đọc từ cuối lên', 'Đếm số dấu phẩy'], a: 1, why: 'Mọi thứ giữa hai dấu phẩy là phụ — mắt có thể nhảy qua.' },
    { t: 'choice', q: '<span class="ru">благодаря́</span> đi với cách nào và mang sắc thái gì?', options: ['cách 2, tiêu cực', 'cách 3, tích cực', 'cách 5, trung tính', 'cách 4, tích cực'], a: 1, why: 'благодаря дождю (mưa là điều tốt); из-за дождя (mưa là điều dở, cách 2).' },
    { t: 'choice', q: 'Ba <span class="ru">кото́рый</span> lồng nhau nên sửa bằng cách:', options: ['Thêm dấu phẩy', 'Chuyển thành phân từ + định ngữ cách 2', 'Đổi sang bị động', 'Tách thành ba câu'], a: 1, why: 'Câu ngắn hơn một nửa mà ý không mất.' },
    { t: 'choice', q: '<span class="ru">По ме́ре того́ как…</span> diễn tả:', options: ['Nguyên nhân', 'Hai quá trình biến thiên song song ("càng… thì càng…")', 'Điều kiện', 'Nhượng bộ'], a: 1, why: 'По мере того как температура снижается, вязкость возрастает.' },
    { t: 'type', q: 'Điền: зада́ча, ___ была́ решена́ → rút gọn thành: ___ зада́ча (đã được giải)', a: 'решённая', alt: ['решенная'], hint: 'Phân từ bị động quá khứ, giống cái.' },
    { t: 'match', q: 'Nối liên từ với nghĩa:', pairs: [['несмотря́ на то что', 'mặc dù'], ['при усло́вии что', 'với điều kiện là'], ['в то вре́мя как', 'trong khi đó thì'], ['в си́лу того́ что', 'do bởi']] }
  ]
};

/* ---------------------------------------------------------- BÀI 11 */
LESSON_DATA['b2-11'] = {
  level: 'b2',
  intro: 'Từ vựng kỹ thuật là chỗ vốn từ nhảy vọt từ 6 000 lên 10 000. Nhưng đừng học thuộc danh sách — <b>học gốc từ</b>. Biết 40 gốc Hy–La và 20 tiền tố Nga là em đoán được nghĩa của hàng nghìn thuật ngữ chưa từng gặp.',
  blocks: [
    { t: 'h', text: 'Gốc quốc tế — đọc được ngay' },
    { t: 'table', head: ['Gốc', 'Nghĩa', 'Ví dụ tiếng Nga'], rows: [
      ['авто-', 'tự', 'автомати́ческий, автоно́мный, автомоби́ль'],
      ['гидро-', 'nước', 'гидравли́ческий, гидроприво́д'],
      ['термо-', 'nhiệt', 'терморегуля́тор, термоста́т'],
      ['электро-', 'điện', 'электродви́гатель, электро́ника'],
      ['микро- / макро-', 'nhỏ / lớn', 'микроско́п, макроэконо́мика'],
      ['поли-', 'nhiều', 'полиме́р, полифункциона́льный'],
      ['синхро-', 'cùng lúc', 'синхрониза́ция'],
      ['транс-', 'xuyên, chuyển', 'тра́нспорт, трансформа́тор'],
      ['-метр', 'dụng cụ đo', 'мано́метр, диа́метр, пара́метр'],
      ['-граф / -грамма', 'ghi / bản ghi', 'осцилло́граф, диагра́мма'],
      ['-лог / -логия', 'khoa học về', 'техноло́гия, метроло́гия']
    ]},
    { t: 'tip', html: 'Người Việt học kỹ thuật có <b>lợi thế lớn</b> ở đây: những gốc này đã có trong tiếng Việt (tự động, thuỷ lực, nhiệt, điện, vi mô, đồng bộ, vận tải). Gặp <span class="ru">гидроусили́тель руля́</span> là đoán ngay "bộ trợ lực lái thuỷ lực" mà không cần từ điển.' },
    { t: 'h', text: 'Tiền tố Nga trong thuật ngữ' },
    { t: 'table', head: ['Tiền tố', 'Nghĩa', 'Ví dụ'], rows: [
      ['под-', 'phụ, dưới', 'подси́стема, подши́пник (ổ trục), подгото́вка'],
      ['над-', 'trên, siêu', 'надёжность, надстро́йка'],
      ['пере-', 'quá, lại, chuyển', 'перегре́в (quá nhiệt), перерабо́тка, переда́ча (truyền động)'],
      ['недо-', 'thiếu, chưa đủ', 'недогру́з, недоста́ток'],
      ['раз- / рас-', 'tách, phân', 'разбо́рка (tháo), распределе́ние'],
      ['с- / со-', 'cùng, gộp', 'сбо́рка (lắp), соедине́ние (mối nối)'],
      ['из-', 'ra, hao', 'изно́с (mài mòn), измере́ние'],
      ['про-', 'xuyên, thử', 'прове́рка, пробе́г (quãng chạy)'],
      ['от-', 'khỏi, đáp', 'отка́з (hỏng, từ chối), отклоне́ние (độ lệch)'],
      ['при-', 'thêm vào, tới', 'приво́д (dẫn động), прибо́р (thiết bị)']
    ]},
    { t: 'warn', html: '<span class="ru">Отка́з</span> là một trong những từ kỹ thuật quan trọng nhất: nghĩa đời thường là "sự từ chối", nghĩa kỹ thuật là "sự cố, hỏng hóc". <span class="ru">Отка́з дви́гателя</span> = động cơ hỏng. Cả một ngành — <span class="ru">тео́рия надёжности</span> — xoay quanh từ này.' },
    { t: 'h', text: 'Cặp đôi Nga – quốc tế' },
    { t: 'table', head: ['Từ Nga gốc', 'Từ mượn', 'Sắc thái'], rows: [
      ['вычисле́ние', 'калькуля́ция', 'Nga thông dụng hơn'],
      ['иссле́дование', '—', 'không có từ mượn thay thế'],
      ['движи́тель / дви́гатель', 'мото́р', 'мотор đời thường hơn'],
      ['сцепле́ние', '—', 'ly hợp'],
      ['подши́пник', '—', 'ổ bi / ổ trục'],
      ['произво́дство', 'индустри́я', 'производство rộng hơn'],
      ['управле́ние', 'менеджме́нт', 'менеджмент chỉ dùng ở kinh tế']
    ]},
    { t: 'note', html: 'Nguyên tắc: trong văn kỹ thuật Nga, khi có <b>cả hai</b> từ, chọn từ <b>gốc Nga</b> — nó chuẩn hơn và không bao giờ sai chỗ. Từ mượn thường nghe "hiện đại" nhưng có thể lệch nghĩa.' },
    { t: 'h', text: 'Bộ từ vựng lõi ngành cơ khí – ô tô' },
    { t: 'table', head: ['Nga', 'Việt', 'Nga', 'Việt'], rows: [
      ['дви́гатель', 'động cơ', 'по́ршень', 'pít-tông'],
      ['цили́ндр', 'xy-lanh', 'коленча́тый вал', 'trục khuỷu'],
      ['подши́пник', 'ổ trục, ổ bi', 'сцепле́ние', 'ly hợp'],
      ['коро́бка переда́ч', 'hộp số', 'приво́д', 'dẫn động'],
      ['подве́ска', 'hệ treo', 'то́рмоз', 'phanh'],
      ['ку́зов', 'thân xe', 'ши́на', 'lốp'],
      ['то́пливо', 'nhiên liệu', 'сма́зка', 'chất bôi trơn'],
      ['изно́с', 'mài mòn', 'тре́ние', 'ma sát'],
      ['нагру́зка', 'tải trọng', 'напряже́ние', 'ứng suất / điện áp'],
      ['про́чность', 'độ bền', 'жёсткость', 'độ cứng vững'],
      ['зазо́р', 'khe hở', 'до́пуск', 'dung sai'],
      ['вал', 'trục', 'втулка', 'bạc lót']
    ]},
    { t: 'warn', html: '<span class="ru">Напряже́ние</span> là từ hai nghĩa nguy hiểm: trong <b>cơ học</b> là <b>ứng suất</b> (N/mm²), trong <b>điện</b> là <b>điện áp</b> (V). Ngữ cảnh quyết định. Dịch nhầm trong luận văn là lỗi nặng.' },
    { t: 'h', text: 'Cách đọc công thức và đơn vị' },
    { t: 'table', head: ['Viết', 'Đọc'], rows: [
      ['v = s/t', 'вэ ра́вно эс дели́ть на тэ'],
      ['a + b', 'а плюс бэ'], ['a − b', 'а ми́нус бэ'],
      ['a × b', 'а умно́жить на бэ'], ['a²', 'а в квадра́те'],
      ['a³', 'а в ку́бе'], ['√a', 'ко́рень из а'],
      ['15 %', 'пятна́дцать проце́нтов'], ['0,5', 'ноль це́лых пять деся́тых'],
      ['≈', 'приблизи́тельно ра́вно'], ['≤', 'ме́ньше и́ли ра́вно'],
      ['Δt', 'де́льта тэ'], ['10⁻³', 'де́сять в ми́нус тре́тьей сте́пени']
    ]},
    { t: 'warn', html: 'Người Nga dùng <b>dấu phẩy</b> làm dấu thập phân: <span class="ru">0,5</span> chứ không phải 0.5. Và <b>dấu cách</b> làm phân cách hàng nghìn: <span class="ru">1 250 000</span>. Viết theo kiểu Anh–Mỹ trong luận văn Nga là bị sửa.' },
    { t: 'h', text: 'Đọc một đoạn kỹ thuật' },
    { t: 'p', html: '<span class="ru">Испытания проводились на стенде при частоте вращения коленчатого вала 2000 об/мин и нагрузке 60 % от номинальной. Зазор в подшипниках контролировался через каждые 50 моточасов. Установлено, что при использовании масла с индексом вязкости выше 140 интенсивность изнашивания снижается в среднем на 22 %, а температура в зоне трения — на 8–11 °C.</span>' },
    { t: 'table', head: ['Cụm', 'Nghĩa'], rows: [
      ['на стенде', 'trên bệ thử'],
      ['частота вращения', 'tốc độ quay'],
      ['об/мин (оборотов в минуту)', 'vòng/phút'],
      ['от номинальной', 'so với (tải) danh định'],
      ['моточас', 'giờ máy chạy'],
      ['индекс вязкости', 'chỉ số độ nhớt'],
      ['зона трения', 'vùng ma sát']
    ]},
    { t: 'tip', html: 'Chú ý cách viết tắt đơn vị Nga: <span class="ru">об/мин</span> (vòng/phút), <span class="ru">км/ч</span> (km/h), <span class="ru">кг/м³</span>, <span class="ru">Н·м</span> (N·m), <span class="ru">кВт</span> (kW), <span class="ru">л. с.</span> (mã lực). Chúng khác chữ viết tắt quốc tế và luôn xuất hiện trong tài liệu Nga.' },
    { t: 'h', text: 'Cách tự xây từ điển chuyên ngành' },
    { t: 'table', head: ['Bước', 'Việc'], rows: [
      ['1', 'Lấy 3 bài báo Nga đúng đề tài của mình'],
      ['2', 'Gạch mọi từ lặp lại ở cả ba bài — đó là từ lõi ngành'],
      ['3', 'Với mỗi từ, ghi cả họ từ: износ → изнашивание, изношенный, износостойкость'],
      ['4', 'Ghi cụm chứ đừng ghi từ đơn: «интенсивность изнашивания», không phải «износ»'],
      ['5', 'Đưa vào bộ thẻ ghi nhớ, ôn theo lịch']
    ]},
    { t: 'note', html: 'Bước 4 quan trọng nhất. Thuật ngữ khoa học gần như không bao giờ đứng một mình — nó sống trong cụm cố định. Nhớ <span class="ru">интенси́вность изна́шивания</span> có ích gấp năm lần nhớ riêng <span class="ru">износ</span>.' }
  ],
  vocab: [
    { ru: 'дви́гатель', vn: 'động cơ' }, { ru: 'по́ршень', vn: 'pít-tông' },
    { ru: 'коленча́тый вал', vn: 'trục khuỷu' }, { ru: 'подши́пник', vn: 'ổ trục' },
    { ru: 'сцепле́ние', vn: 'ly hợp' }, { ru: 'коро́бка переда́ч', vn: 'hộp số' },
    { ru: 'приво́д', vn: 'dẫn động' }, { ru: 'подве́ска', vn: 'hệ treo' },
    { ru: 'изно́с', vn: 'sự mài mòn' }, { ru: 'тре́ние', vn: 'ma sát' },
    { ru: 'нагру́зка', vn: 'tải trọng' }, { ru: 'напряже́ние', vn: 'ứng suất / điện áp' },
    { ru: 'про́чность', vn: 'độ bền' }, { ru: 'зазо́р', vn: 'khe hở' },
    { ru: 'до́пуск', vn: 'dung sai' }, { ru: 'отка́з', vn: 'sự cố, hỏng hóc' },
    { ru: 'частота́ враще́ния', vn: 'tốc độ quay' }, { ru: 'номина́льный', vn: 'danh định' },
    { ru: 'износосто́йкость', vn: 'khả năng chống mài mòn' }, { ru: 'сма́зка', vn: 'chất bôi trơn' }
  ],
  ex: [
    { t: 'choice', q: '<span class="ru">Отка́з дви́гателя</span> trong kỹ thuật nghĩa là:', options: ['Từ chối động cơ', 'Động cơ hỏng, sự cố', 'Tắt động cơ', 'Đổi động cơ'], a: 1, why: 'Отказ là thuật ngữ trung tâm của lý thuyết độ tin cậy.' },
    { t: 'choice', q: '<span class="ru">напряже́ние</span> trong cơ học nghĩa là:', options: ['điện áp', 'ứng suất', 'sức căng cơ bắp', 'áp suất'], a: 1, why: 'Trong điện thì là điện áp — ngữ cảnh quyết định, dịch nhầm là lỗi nặng.' },
    { t: 'choice', q: 'Tiền tố <span class="ru">пере-</span> trong <span class="ru">перегре́в</span> mang nghĩa:', options: ['lại từ đầu', 'quá mức', 'chuyển đi', 'xuyên qua'], a: 1, why: 'Перегрев = quá nhiệt.' },
    { t: 'choice', q: 'Số thập phân trong tài liệu Nga viết thế nào?', options: ['0.5', '0,5', '0·5', '.5'], a: 1, why: 'Nga dùng dấu phẩy làm dấu thập phân và dấu cách phân hàng nghìn.' },
    { t: 'choice', q: '<span class="ru">об/мин</span> nghĩa là:', options: ['km/h', 'vòng/phút', 'ohm/phút', 'kg/phút'], a: 1, why: 'обо́ротов в мину́ту.' },
    { t: 'choice', q: 'Khi có cả từ gốc Nga và từ mượn, văn kỹ thuật nên chọn:', options: ['Từ mượn (hiện đại hơn)', 'Từ gốc Nga', 'Xen kẽ', 'Tuỳ tạp chí'], a: 1, why: 'Từ mượn nghe hiện đại nhưng có thể lệch nghĩa.' },
    { t: 'choice', q: 'Khi xây từ điển chuyên ngành, nên ghi:', options: ['Từ đơn', 'Cụm cố định (интенсивность изнашивания)', 'Cả câu', 'Chỉ ghi nghĩa Việt'], a: 1, why: 'Thuật ngữ khoa học gần như không bao giờ đứng một mình.' },
    { t: 'type', q: 'Điền: <span class="ru">коленча́тый ___ </span> (trục khuỷu)', a: 'вал', hint: 'Ba chữ cái.' },
    { t: 'type', q: 'Điền: <span class="ru">___ в подши́пниках</span> (khe hở)', a: 'зазор', alt: ['зазо́р'], hint: 'Bắt đầu bằng з.' },
    { t: 'match', q: 'Nối:', pairs: [['сцепле́ние', 'ly hợp'], ['подве́ска', 'hệ treo'], ['про́чность', 'độ bền'], ['до́пуск', 'dung sai']] }
  ]
};

/* ---------------------------------------------------------- BÀI 12 */
LESSON_DATA['b2-12'] = {
  level: 'b2',
  intro: 'Từ vựng kinh tế – xã hội là thứ em cần để <b>đọc báo, nghe thời sự, và nói chuyện với người Nga về những việc đang xảy ra</b>. Nó cũng là chủ đề mà ТРКИ-2 hay lấy ra làm đề đọc và đề nói.',
  blocks: [
    { t: 'h', text: 'Kinh tế vĩ mô' },
    { t: 'table', head: ['Nga', 'Việt', 'Cụm hay đi cùng'], rows: [
      ['эконо́мика', 'nền kinh tế', 'ры́ночная эконо́мика'],
      ['ВВП (валово́й вну́тренний проду́кт)', 'GDP', 'рост ВВП соста́вил…'],
      ['инфля́ция', 'lạm phát', 'у́ровень инфля́ции'],
      ['спрос / предложе́ние', 'cầu / cung', 'спрос превыша́ет предложе́ние'],
      ['произво́дство', 'sản xuất', 'объём произво́дства'],
      ['потребле́ние', 'tiêu dùng', 'потреби́тельский спрос'],
      ['инвести́ции', 'đầu tư', 'привлека́ть инвести́ции'],
      ['экспо́рт / и́мпорт', 'xuất / nhập khẩu', 'экспортоориенти́рованный'],
      ['по́шлина', 'thuế quan', 'таможенная по́шлина'],
      ['бюдже́т', 'ngân sách', 'дефици́т бюдже́та'],
      ['субси́дия', 'trợ cấp', 'госуда́рственная субси́дия'],
      ['конкуре́нция', 'cạnh tranh', 'конкурентоспосо́бность']
    ]},
    { t: 'tip', html: 'Chú ý cách viết tắt Nga đọc thành chữ cái: <span class="ru">ВВП</span> đọc là "вэ-вэ-пэ", <span class="ru">НДС</span> (thuế VAT) là "эн-дэ-эс", <span class="ru">МРОТ</span> (lương tối thiểu) đọc liền "мрот". Nghe thời sự Nga mà không biết mấy chữ này là mất cả câu.' },
    { t: 'h', text: 'Động từ của biểu đồ và số liệu' },
    { t: 'table', head: ['Tăng', 'Giảm', 'Không đổi'], rows: [
      ['расти́ / вы́расти', 'па́дать / упа́сть', 'остава́ться на у́ровне'],
      ['увели́чиваться', 'сокраща́ться', 'не изменя́ться'],
      ['возраста́ть', 'снижа́ться', 'стабилизи́роваться'],
      ['подскочи́ть (vọt lên)', 'ру́хнуть (sụp đổ)', 'держа́ться']
    ]},
    { t: 'note', html: 'Cấu trúc chỉ mức độ thay đổi: <span class="ru">вы́рос <b>на</b> 5 %</span> = tăng thêm 5 %; <span class="ru">вы́рос <b>в</b> 5 раз</span> = tăng gấp 5 lần. Nhầm <span class="ru">на</span> với <span class="ru">в</span> là sai số liệu, không phải sai ngữ pháp — lỗi nghiêm trọng trong bản dịch.' },
    { t: 'h', text: 'Xã hội và dân số' },
    { t: 'table', head: ['Nga', 'Việt'], rows: [
      ['населе́ние', 'dân số'],
      ['рожда́емость / сме́ртность', 'tỉ suất sinh / tử'],
      ['продолжи́тельность жи́зни', 'tuổi thọ trung bình'],
      ['ста́рение населе́ния', 'già hoá dân số'],
      ['мигра́ция', 'di cư'],
      ['урбаниза́ция', 'đô thị hoá'],
      ['у́ровень жи́зни', 'mức sống'],
      ['прожи́точный ми́нимум', 'mức sống tối thiểu'],
      ['социа́льное нера́венство', 'bất bình đẳng xã hội'],
      ['безрабо́тица', 'thất nghiệp'],
      ['за́нятость', 'việc làm, mức có việc'],
      ['ры́нок труда́', 'thị trường lao động']
    ]},
    { t: 'h', text: 'Giáo dục và khoa học' },
    { t: 'words', items: [
      { ru: 'вы́сшее образова́ние', vn: 'giáo dục đại học' },
      { ru: 'бюдже́тное ме́сто', vn: 'suất học miễn phí do ngân sách cấp' },
      { ru: 'платное обуче́ние', vn: 'học có thu phí' },
      { ru: 'аспиранту́ра', vn: 'nghiên cứu sinh' },
      { ru: 'кандида́т нау́к', vn: 'phó tiến sĩ / tiến sĩ (theo hệ Nga)' },
      { ru: 'до́ктор нау́к', vn: 'tiến sĩ khoa học (cấp cao hơn)' },
      { ru: 'дефици́т ка́дров', vn: 'thiếu hụt nhân lực' },
      { ru: 'уте́чка мозго́в', vn: 'chảy máu chất xám' },
      { ru: 'грант', vn: 'tài trợ nghiên cứu' },
      { ru: 'публикацио́нная акти́вность', vn: 'mức độ công bố khoa học' }
    ]},
    { t: 'warn', html: 'Hệ học vị Nga khác hệ phương Tây và hay bị dịch nhầm. <span class="ru">Кандида́т нау́к</span> ≈ PhD phương Tây; <span class="ru">до́ктор нау́к</span> là bậc <b>cao hơn</b>, không tương đương PhD. Trong hồ sơ tiếng Anh, кандидат наук thường ghi là "PhD (Candidate of Sciences)" — đừng ghi là "Candidate", nghe như đang ứng tuyển.' },
    { t: 'h', text: 'Nhà nước và quản lý' },
    { t: 'table', head: ['Nga', 'Việt'], rows: [
      ['госуда́рство', 'nhà nước'],
      ['прави́тельство', 'chính phủ'],
      ['министе́рство / ве́домство', 'bộ / cơ quan ngành'],
      ['зако́н / законопрое́кт', 'luật / dự luật'],
      ['постановле́ние', 'nghị định'],
      ['регио́н / субъе́кт РФ', 'vùng / chủ thể liên bang'],
      ['муниципалите́т', 'chính quyền đô thị'],
      ['госуда́рственная програ́мма', 'chương trình quốc gia'],
      ['финанси́рование', 'việc cấp kinh phí'],
      ['реализа́ция прое́кта', 'việc triển khai dự án']
    ]},
    { t: 'note', html: '<span class="ru">Реализа́ция</span> trong tiếng Nga hành chính không có nghĩa "nhận ra" như realize tiếng Anh — nó nghĩa là <b>triển khai, thực hiện</b>. <span class="ru">Реализа́ция програ́ммы</span> = việc thực hiện chương trình. Đây là một "người bạn giả" cổ điển.' },
    { t: 'h', text: 'Đọc một đoạn tin kinh tế' },
    { t: 'p', html: '<span class="ru">По данным Росстата, в первом полугодии объём инвестиций в основной капитал вырос на 4,2 % по сравнению с аналогичным периодом прошлого года. Наибольший рост зафиксирован в обрабатывающей промышленности и транспортной инфраструктуре. Вместе с тем уровень инфляции остаётся выше целевого показателя Центрального банка, что ограничивает возможности снижения ключевой ставки. Эксперты отмечают, что дальнейшая динамика будет зависеть прежде всего от внешних условий и от доступности заёмных средств для предприятий.</span>' },
    { t: 'table', head: ['Cụm', 'Nghĩa', 'Ghi chú'], rows: [
      ['инвести́ции в основно́й капита́л', 'đầu tư vào tài sản cố định', 'chỉ số kinh tế chuẩn'],
      ['аналоги́чный пери́од', 'cùng kỳ', 'luôn dùng trong so sánh năm'],
      ['зафикси́рован рост', 'ghi nhận mức tăng', 'bị động dạng ngắn'],
      ['обраба́тывающая промы́шленность', 'công nghiệp chế biến chế tạo', 'khác добывающая (khai khoáng)'],
      ['целево́й показа́тель', 'chỉ tiêu mục tiêu', ''],
      ['ключева́я ста́вка', 'lãi suất điều hành', 'công cụ chính của Ngân hàng TW'],
      ['заёмные сре́дства', 'vốn vay', '']
    ]},
    { t: 'tip', html: 'Cụm <span class="ru">по сравне́нию с аналоги́чным пери́одом про́шлого го́да</span> dài nhưng em sẽ gặp nó trong <b>mọi</b> bản tin kinh tế Nga. Học thuộc cả cụm, đừng phân tích — nó là một khối duy nhất.' },
    { t: 'h', text: 'Nói về xu hướng' },
    { t: 'words', items: [
      { ru: 'наблюда́ется тенде́нция к сниже́нию', vn: 'quan sát thấy xu hướng giảm' },
      { ru: 'ситуа́ция постепе́нно улучша́ется', vn: 'tình hình dần cải thiện' },
      { ru: 'разры́в ме́жду… увели́чивается', vn: 'khoảng cách giữa… đang tăng' },
      { ru: 'по прогно́зам экспе́ртов', vn: 'theo dự báo của các chuyên gia' },
      { ru: 'в долгосро́чной перспекти́ве', vn: 'về dài hạn' },
      { ru: 'в краткосро́чной перспекти́ве', vn: 'về ngắn hạn' },
      { ru: 'при сохране́нии ны́нешних те́мпов', vn: 'nếu giữ nhịp độ hiện nay' },
      { ru: 'э́то мо́жет привести́ к…', vn: 'điều đó có thể dẫn tới…' }
    ]},
    { t: 'tip', html: 'Bài tập: chọn một chỉ số bất kỳ liên quan tới Việt Nam (dân số, GDP, xuất khẩu), rồi viết <b>năm câu tiếng Nga</b> mô tả xu hướng của nó, dùng ít nhất ba cụm trong danh sách trên. Đây đúng là dạng đề nói của ТРКИ-2.' }
  ],
  vocab: [
    { ru: 'ВВП', vn: 'GDP' }, { ru: 'инфля́ция', vn: 'lạm phát' },
    { ru: 'спрос', vn: 'cầu' }, { ru: 'предложе́ние', vn: 'cung' },
    { ru: 'инвести́ции', vn: 'đầu tư' }, { ru: 'бюдже́т', vn: 'ngân sách' },
    { ru: 'по́шлина', vn: 'thuế quan' }, { ru: 'конкурентоспосо́бность', vn: 'sức cạnh tranh' },
    { ru: 'населе́ние', vn: 'dân số' }, { ru: 'ста́рение населе́ния', vn: 'già hoá dân số' },
    { ru: 'безрабо́тица', vn: 'thất nghiệp' }, { ru: 'ры́нок труда́', vn: 'thị trường lao động' },
    { ru: 'у́ровень жи́зни', vn: 'mức sống' }, { ru: 'уте́чка мозго́в', vn: 'chảy máu chất xám' },
    { ru: 'кандида́т нау́к', vn: 'học vị nghiên cứu bậc một của Nga' }, { ru: 'реализа́ция', vn: 'việc triển khai' },
    { ru: 'ключева́я ста́вка', vn: 'lãi suất điều hành' }, { ru: 'заёмные сре́дства', vn: 'vốn vay' },
    { ru: 'зафикси́рован', vn: 'đã được ghi nhận' }, { ru: 'аналоги́чный пери́од', vn: 'cùng kỳ' }
  ],
  ex: [
    { t: 'choice', q: '<span class="ru">Вы́рос в 5 раз</span> nghĩa là:', options: ['Tăng thêm 5 %', 'Tăng gấp 5 lần', 'Tăng 5 đơn vị', 'Tăng trong 5 năm'], a: 1, why: 'на 5 % = tăng thêm 5 %; в 5 раз = gấp 5 lần. Nhầm là sai số liệu.' },
    { t: 'choice', q: '<span class="ru">ВВП</span> đọc là:', options: ['вэ-вэ-пэ', 'вивипи', 'ввп', 'вэ-вэ-пи'], a: 0, why: 'Đọc từng chữ cái theo tên chữ cái Nga.' },
    { t: 'choice', q: '<span class="ru">Реализа́ция програ́ммы</span> nghĩa là:', options: ['Nhận ra chương trình', 'Việc triển khai chương trình', 'Bán chương trình', 'Kết thúc chương trình'], a: 1, why: '"Người bạn giả" cổ điển với realize tiếng Anh.' },
    { t: 'choice', q: '<span class="ru">до́ктор нау́к</span> so với <span class="ru">кандида́т нау́к</span>:', options: ['Thấp hơn', 'Cao hơn', 'Bằng nhau', 'Khác ngành'], a: 1, why: 'Кандидат наук ≈ PhD; доктор наук là bậc cao hơn nữa.' },
    { t: 'choice', q: '<span class="ru">уте́чка мозго́в</span> nghĩa là:', options: ['chấn thương sọ não', 'chảy máu chất xám', 'rò rỉ thông tin', 'mất trí nhớ'], a: 1, why: 'Дословно "rò rỉ não" — cách nói chuẩn về việc nhân tài ra nước ngoài.' },
    { t: 'choice', q: '<span class="ru">обраба́тывающая промы́шленность</span> khác <span class="ru">добыва́ющая</span> ở chỗ:', options: ['Chế biến chế tạo vs khai khoáng', 'Nhà nước vs tư nhân', 'Lớn vs nhỏ', 'Cũ vs mới'], a: 0, why: 'Обрабатывать = chế biến; добывать = khai thác.' },
    { t: 'choice', q: '<span class="ru">ключева́я ста́вка</span> là:', options: ['Giá vàng', 'Lãi suất điều hành của Ngân hàng Trung ương', 'Thuế thu nhập', 'Tỉ giá'], a: 1, why: 'Công cụ chính để kiểm soát lạm phát.' },
    { t: 'type', q: 'Điền: Спрос ___ предложе́ние. (vượt quá)', a: 'превышает', alt: ['превыша́ет'], hint: 'Cùng gốc với "вышe".' },
    { t: 'type', q: 'Điền: по сравне́нию с ___ пери́одом про́шлого го́да (cùng kỳ)', a: 'аналогичным', alt: ['аналоги́чным'], hint: 'Cách 5, gốc quốc tế.' },
    { t: 'match', q: 'Nối:', pairs: [['безрабо́тица', 'thất nghiệp'], ['по́шлина', 'thuế quan'], ['ста́рение населе́ния', 'già hoá dân số'], ['заёмные сре́дства', 'vốn vay']] }
  ]
};

/* ---------------------------------------------------------- BÀI 13 */
LESSON_DATA['b2-13'] = {
  level: 'b2',
  intro: 'Đọc báo cáo trước hội thảo Nga là việc nghiên cứu sinh nào cũng phải làm, thường trong <b>10–15 phút</b>, và luôn kết thúc bằng phần hỏi đáp đáng sợ hơn cả bài nói. Bài này cho em toàn bộ kịch bản: mở đầu, chuyển slide, chốt, và cách sống sót qua câu hỏi.',
  blocks: [
    { t: 'h', text: 'Khung một báo cáo 10 phút' },
    { t: 'table', head: ['Phần', 'Thời gian', 'Số slide'], rows: [
      ['Chào và giới thiệu đề tài', '1 phút', '1'],
      ['Tính cấp thiết và mục tiêu', '1,5 phút', '1–2'],
      ['Phương pháp', '2 phút', '2'],
      ['Kết quả', '3,5 phút', '3–4'],
      ['Kết luận và hướng tiếp', '1,5 phút', '1'],
      ['Cảm ơn', '0,5 phút', '1']
    ]},
    { t: 'warn', html: 'Quy tắc số slide: <b>khoảng một slide mỗi phút</b>. Hai mươi slide cho mười phút là chắc chắn cháy giờ, và ban chủ toạ Nga cắt lời rất thẳng: <span class="ru">Ва́ше вре́мя истекло́</span>. Thà ít slide mà nói kỹ.' },
    { t: 'h', text: 'Mở đầu — học thuộc từng chữ' },
    { t: 'words', items: [
      { ru: 'Уважа́емые колле́ги!', vn: 'Kính thưa các đồng nghiệp!' },
      { ru: 'Уважа́емый председа́тель, уважа́емые чле́ны коми́ссии!', vn: 'Kính thưa chủ toạ, kính thưa các thành viên hội đồng!' },
      { ru: 'Разреши́те предста́вить докла́д на те́му…', vn: 'Cho phép tôi trình bày báo cáo với đề tài…' },
      { ru: 'Меня́ зову́т Нгуе́н Кхак Чунг, я аспира́нт ка́федры…', vn: 'Tôi tên là…, nghiên cứu sinh bộ môn…' },
      { ru: 'Нау́чный руководи́тель — профе́ссор И. И. Ивано́в.', vn: 'Người hướng dẫn khoa học là GS…' },
      { ru: 'Докла́д рассчи́тан на 10 мину́т.', vn: 'Báo cáo dự kiến 10 phút.' }
    ]},
    { t: 'note', html: '<span class="ru">Уважа́емые колле́ги</span> là cách xưng hô an toàn nhất, dùng được ở mọi hội thảo. Nếu có hội đồng chính thức thì phải chào chủ toạ trước — bỏ qua bước này bị coi là thiếu lễ độ trong môi trường học thuật Nga.' },
    { t: 'h', text: 'Chuyển slide' },
    { t: 'table', head: ['Việc', 'Câu'], rows: [
      ['Sang slide mới', 'Перейдём к сле́дующему сла́йду.'],
      ['Chỉ vào hình', 'На сла́йде предста́влена схе́ма устано́вки.'],
      ['Chỉ vào đồ thị', 'Как ви́дно из гра́фика, …'],
      ['Chỉ vào bảng', 'В табли́це приведены́ основны́е показа́тели.'],
      ['Nhấn mạnh', 'Обрати́те внима́ние на…'],
      ['Lướt qua', 'Не бу́ду подро́бно остана́вливаться на…'],
      ['Quay lại', 'Верну́сь к предыду́щему сла́йду.'],
      ['Tóm ý vừa nói', 'Ита́к, …']
    ]},
    { t: 'tip', html: 'Câu <span class="ru">Не бу́ду подро́бно остана́вливаться на…</span> là câu cứu giờ tốt nhất. Nó cho phép em bỏ qua một slide mà vẫn nghe có chủ ý, thay vì bấm vụt qua trong im lặng.' },
    { t: 'h', text: 'Kết và cảm ơn' },
    { t: 'words', items: [
      { ru: 'Подводя́ ито́г, мо́жно сде́лать сле́дующие вы́воды.', vn: 'Tổng kết lại, có thể rút ra các kết luận sau.' },
      { ru: 'Таки́м о́бразом, поста́вленная цель дости́гнута.', vn: 'Như vậy, mục tiêu đề ra đã đạt được.' },
      { ru: 'Дальне́йшая рабо́та бу́дет свя́зана с…', vn: 'Công việc tiếp theo sẽ gắn với…' },
      { ru: 'Благодарю́ за внима́ние. Гото́в отве́тить на вопро́сы.', vn: 'Cảm ơn quý vị đã lắng nghe. Tôi sẵn sàng trả lời câu hỏi.' }
    ]},
    { t: 'warn', html: 'Câu cuối là <b>bắt buộc</b> — không phải phép lịch sự thừa. Bỏ nó là hội trường không biết em đã nói xong hay chưa, và khoảnh khắc im lặng lúng túng ấy làm hỏng cả bài nói tốt.' },
    { t: 'h', text: 'Phần hỏi đáp — nơi bài nói được quyết định' },
    { t: 'table', head: ['Tình huống', 'Câu nói'], rows: [
      ['Chưa nghe rõ', 'Извини́те, я не совсе́м по́нял вопро́с. Не могли́ бы Вы повтори́ть?'],
      ['Cần thời gian nghĩ', 'Спаси́бо за вопро́с. Позво́льте немно́го поду́мать.'],
      ['Diễn lại để chắc', 'Е́сли я пра́вильно по́нял, Вы спра́шиваете о…'],
      ['Đồng ý với nhận xét', 'Вы соверше́нно пра́вы, э́то ва́жное замеча́ние.'],
      ['Chưa nghiên cứu chỗ đó', 'Э́тот аспе́кт в рабо́те не рассма́тривался, но он представля́ет интере́с для дальне́йшего изуче́ния.'],
      ['Không biết', 'К сожале́нию, у меня́ пока́ нет да́нных по э́тому вопро́су.'],
      ['Không đồng ý', 'Позво́лю себе́ не согласи́ться. Де́ло в том, что…'],
      ['Hết giờ tranh luận', 'Возмо́жно, э́то сто́ит обсуди́ть отде́льно по́сле заседа́ния.']
    ]},
    { t: 'tip', html: 'Ba câu quý nhất trong bảng: <b>"Позвольте немного подумать"</b> (mua ba giây và nghe rất chuyên nghiệp), <b>"Если я правильно понял…"</b> (tránh trả lời lạc đề — lỗi tệ nhất trong phần hỏi đáp), và <b>"К сожалению, у меня пока нет данных"</b>. Câu cuối là câu <b>an toàn</b>: thừa nhận không biết được đánh giá cao hơn là bịa ra câu trả lời. Hội đồng nhận ra ngay khi ai đó đang bịa.' },
    { t: 'note', html: 'Trong văn hoá học thuật Nga, phản biện thẳng là chuyện bình thường, không phải công kích cá nhân. Câu <span class="ru">Я не согла́сен с ва́шим вы́водом</span> nói ra không hề mất lịch sự. Đừng hiểu đó là thái độ thù địch — người hỏi càng gắt thường là người đọc bài kỹ nhất.' },
    { t: 'h', text: 'Nói khác viết' },
    { t: 'table', head: ['Trong bài báo (viết)', 'Trên bục (nói)'], rows: [
      ['Примене́ние предло́женного ме́тода позво́лило повы́сить то́чность прогнози́рования на 18 %.', 'Мы примени́ли но́вый ме́тод — и то́чность вы́росла на восемна́дцать проце́нтов.'],
      ['Бы́ли проведены́ стендо́вые испыта́ния четырёх групп образцо́в.', 'Мы испыта́ли четы́ре гру́ппы образцо́в на сте́нде.'],
      ['Устано́влена нелине́йная зави́симость изно́са от температу́ры.', 'Зави́симость оказа́лась нелине́йной. Э́то ва́жно, и вот почему́.']
    ]},
    { t: 'warn', html: 'Đây là lỗi số một của nghiên cứu sinh nước ngoài: <b>đọc nguyên bài báo lên</b>. Câu bị động dài trên giấy thì đọc được, nhưng nghe thì mất mạch ngay. Trên bục: câu ngắn, chủ động, có "мы", và có chỗ ngắt.' },
    { t: 'h', text: 'Đọc số cho người nghe hiểu' },
    { t: 'table', head: ['Viết', 'Nói'], rows: [
      ['18 %', 'восемна́дцать проце́нтов'],
      ['на 8–11 °C', 'на во́семь–оди́ннадцать гра́дусов'],
      ['2000 об/мин', 'две ты́сячи оборо́тов в мину́ту'],
      ['0,05', 'ноль це́лых пять со́тых'],
      ['в 1,5 раза', 'в полтора́ ра́за'],
      ['с 19 до 8 %', 'с девятна́дцати до восьми́ проце́нтов']
    ]},
    { t: 'tip', html: 'Dòng cuối là bẫy hay gặp: sau <span class="ru">с… до…</span> thì cả hai số đều ở <b>cách 2</b> — <span class="ru">с девятна́дцати до восьми́</span>, không phải «с девятнадцать до восемь». Số đếm cũng phải chia cách, và người nghe Nga bắt lỗi này ngay.' },
    { t: 'h', text: 'Luyện tập trước ngày báo cáo' },
    { t: 'table', head: ['Lần', 'Cách luyện'], rows: [
      ['1', 'Nói một mình, bấm giờ. Ghi lại chỗ vấp'],
      ['2', 'Thu âm, nghe lại. Đếm số lần nói "э-э-э"'],
      ['3', 'Nói trước gương, không nhìn giấy'],
      ['4', 'Nói cho một người Nga nghe, nhờ họ hỏi ba câu khó'],
      ['5', 'Nói lần cuối đúng thời gian thật']
    ]},
    { t: 'note', html: 'Lần thứ tư quan trọng nhất và hay bị bỏ. Câu hỏi em <b>không lường trước</b> là thứ duy nhất không luyện được một mình. Nhờ được ai hỏi trước ba câu là bớt được nửa nỗi lo trên bục.' }
  ],
  vocab: [
    { ru: 'докла́д', vn: 'báo cáo, bài trình bày' }, { ru: 'докла́дчик', vn: 'người báo cáo' },
    { ru: 'председа́тель', vn: 'chủ toạ' }, { ru: 'заседа́ние', vn: 'phiên họp' },
    { ru: 'сла́йд', vn: 'slide' }, { ru: 'схе́ма устано́вки', vn: 'sơ đồ thiết bị' },
    { ru: 'обрати́те внима́ние', vn: 'xin lưu ý' }, { ru: 'остана́вливаться на', vn: 'dừng lại ở (chi tiết)' },
    { ru: 'подводя́ ито́г', vn: 'tổng kết lại' }, { ru: 'замеча́ние', vn: 'nhận xét, góp ý' },
    { ru: 'аспе́кт', vn: 'khía cạnh' }, { ru: 'позво́льте', vn: 'cho phép tôi' },
    { ru: 'вре́мя истекло́', vn: 'hết giờ rồi' }, { ru: 'полтора́', vn: 'một rưỡi' },
    { ru: 'представля́ть интере́с', vn: 'có ý nghĩa đáng quan tâm' }, { ru: 'обсуди́ть отде́льно', vn: 'bàn riêng' }
  ],
  ex: [
    { t: 'choice', q: 'Quy tắc số slide cho báo cáo 10 phút:', options: ['20 slide', 'Khoảng 1 slide mỗi phút', '5 slide', 'Càng nhiều càng tốt'], a: 1, why: 'Ban chủ toạ Nga cắt lời rất thẳng: «Ваше время истекло».' },
    { t: 'choice', q: 'Câu chào an toàn nhất ở hội thảo Nga:', options: ['Привет всем!', 'Уважаемые коллеги!', 'Здравствуйте, друзья!', 'Добрый день, ребята!'], a: 1, why: 'Dùng được ở mọi hội thảo; nếu có hội đồng thì chào chủ toạ trước.' },
    { t: 'choice', q: 'Câu cuối bài nói bắt buộc phải có là:', options: ['Спасибо', 'Благодарю за внимание. Готов ответить на вопросы.', 'До свидания', 'На этом всё'], a: 1, why: 'Bỏ nó là hội trường không biết em đã nói xong hay chưa.' },
    { t: 'choice', q: 'Khi không biết câu trả lời, nên:', options: ['Bịa một câu trả lời hợp lý', 'Nói "К сожалению, у меня пока нет данных"', 'Im lặng', 'Đổi sang chủ đề khác'], a: 1, why: 'Thừa nhận không biết được đánh giá cao hơn; hội đồng nhận ra ngay khi ai đó bịa.' },
    { t: 'choice', q: 'Câu <span class="ru">Е́сли я пра́вильно по́нял, Вы спра́шиваете о…</span> dùng để:', options: ['Câu giờ', 'Tránh trả lời lạc đề', 'Phản đối', 'Kết thúc tranh luận'], a: 1, why: 'Trả lời lạc đề là lỗi tệ nhất trong phần hỏi đáp.' },
    { t: 'choice', q: 'Trên bục nói, nên dùng câu:', options: ['Bị động, dài, như trong bài báo', 'Ngắn, chủ động, có "мы", có chỗ ngắt', 'Càng nhiều thuật ngữ càng tốt', 'Đọc nguyên bản thảo'], a: 1, why: 'Câu bị động dài trên giấy đọc được, nhưng nghe thì mất mạch ngay.' },
    { t: 'choice', q: '<span class="ru">с 19 до 8 %</span> đọc đúng là:', options: ['с девятнадцать до восемь процентов', 'с девятнадцати до восьми процентов', 'с девятнадцатью до восьмью процентов', 'с девятнадцатого до восьмого процента'], a: 1, why: 'Sau с… до… cả hai số đều ở cách 2.' },
    { t: 'choice', q: 'Trong văn hoá học thuật Nga, phản biện thẳng:', options: ['Là công kích cá nhân', 'Là chuyện bình thường; người hỏi gắt thường là người đọc kỹ nhất', 'Chỉ dành cho giáo sư', 'Bị coi là bất lịch sự'], a: 1, why: '«Я не согласен с вашим выводом» không hề mất lịch sự.' },
    { t: 'type', q: 'Điền: Разреши́те ___ докла́д на те́му… (trình bày)', a: 'представить', alt: ['предста́вить'], hint: 'Cùng gốc với "представление".' },
    { t: 'type', q: 'Điền: Спаси́бо за вопро́с. ___ немно́го поду́мать. (cho phép tôi)', a: 'позвольте', alt: ['позво́льте'], hint: 'Mệnh lệnh trang trọng của "позволить".' },
    { t: 'match', q: 'Nối:', pairs: [['председа́тель', 'chủ toạ'], ['замеча́ние', 'nhận xét, góp ý'], ['подводя́ ито́г', 'tổng kết lại'], ['вре́мя истекло́', 'hết giờ rồi']] }
  ]
};

/* ---------------------------------------------------------- BÀI 14 */
LESSON_DATA['b2-14'] = {
  level: 'b2',
  intro: 'Tranh luận bằng tiếng Nga đòi hai thứ mà B1 chưa dạy: <b>phản bác mà không xúc phạm</b>, và <b>nhượng bộ mà không thua</b>. Đây là kỹ năng của phòng bảo vệ luận án, của seminar, và của mọi cuộc trò chuyện nghiêm túc.',
  blocks: [
    { t: 'h', text: 'Bốn mức độ phản đối' },
    { t: 'table', head: ['Mức', 'Câu', 'Dùng với ai'], rows: [
      ['1 — rất nhẹ', 'Не совсе́м так. · Я бы уточни́л…', 'giáo sư, người trên'],
      ['2 — nhẹ', 'Позво́лю себе́ не согласи́ться. · Мне ка́жется, здесь есть ню́анс.', 'hội thảo, đồng nghiệp'],
      ['3 — rõ', 'Я не согла́сен. Де́ло в том, что…', 'tranh luận bình đẳng'],
      ['4 — mạnh', 'Э́то противоре́чит да́нным. · Э́то принципиа́льно неве́рно.', 'khi có bằng chứng chắc']
    ]},
    { t: 'warn', html: 'Mức 4 chỉ dùng khi em <b>chắc chắn</b> và có số liệu trong tay. Nói <span class="ru">Э́то принципиа́льно неве́рно</span> rồi bị phản bác lại là mất uy tín cả buổi. Người Nga trong học thuật thường bắt đầu ở mức 2 và chỉ leo lên khi cần.' },
    { t: 'h', text: 'Công thức phản bác ba bước' },
    { t: 'table', head: ['Bước', 'Việc', 'Câu'], rows: [
      ['1. Ghi nhận', 'thừa nhận phần đúng của đối phương', 'Вы пра́вы в том, что… · Согла́сен, что…'],
      ['2. Xoay', 'nêu chỗ mình không đồng ý', 'Одна́ко… · Вме́сте с тем… · Но здесь ну́жно учи́тывать…'],
      ['3. Bằng chứng', 'đưa lý do hoặc số liệu', 'Де́ло в том, что… · По да́нным… · На́ши измере́ния пока́зывают…']
    ]},
    { t: 'p', html: '<b>Ví dụ:</b> <span class="ru">Вы правы в том, что при комнатной температуре разница действительно невелика. Однако в нашей работе речь идёт о диапазоне ниже −25 °C. По данным испытаний, в этом диапазоне расхождение достигает 30 %.</span>' },
    { t: 'tip', html: 'Bước 1 không phải phép lịch sự rỗng. Nó làm hai việc: khiến người nghe hạ phòng thủ, và <b>thu hẹp phạm vi tranh luận</b> xuống đúng chỗ em mạnh. Bỏ bước 1, cuộc tranh luận biến thành ai to tiếng hơn.' },
    { t: 'h', text: 'Nhượng bộ mà không thua' },
    { t: 'words', items: [
      { ru: 'В э́том есть до́ля и́стины.', vn: 'Trong đó có phần đúng.' },
      { ru: 'Отча́сти согла́сен, но…', vn: 'Tôi đồng ý một phần, nhưng…' },
      { ru: 'Э́то справедли́во для… но не для…', vn: 'Điều đó đúng với… nhưng không đúng với…' },
      { ru: 'Согла́сен, что вопро́с тре́бует уточне́ния.', vn: 'Đồng ý là vấn đề cần làm rõ thêm.' },
      { ru: 'Возмо́жно, я вы́разился недоста́точно то́чно.', vn: 'Có thể tôi diễn đạt chưa đủ chính xác.' },
      { ru: 'Приму́ Ва́ше замеча́ние к све́дению.', vn: 'Tôi xin ghi nhận góp ý của quý vị.' }
    ]},
    { t: 'note', html: 'Câu <span class="ru">Возмо́жно, я вы́разился недоста́точно то́чно</span> là câu <b>vàng</b> khi em bị hiểu nhầm. Nó nhận lỗi về phía mình (diễn đạt kém) mà không nhận lỗi về nội dung — rồi em nói lại cho rõ. Không mất mặt ai cả.' },
    { t: 'h', text: 'Cấu trúc một lập luận đầy đủ' },
    { t: 'table', head: ['Thành phần', 'Tên Nga', 'Câu mở'], rows: [
      ['Luận điểm', 'те́зис', 'Я утвержда́ю, что…'],
      ['Lý lẽ', 'аргуме́нты', 'Во-пе́рвых… Во-вторы́х…'],
      ['Bằng chứng', 'доказа́тельства', 'Об э́том свиде́тельствуют да́нные…'],
      ['Phản bác trước', 'опережа́ющее возраже́ние', 'Мо́жно возрази́ть, что… Одна́ко…'],
      ['Kết', 'вы́вод', 'Сле́довательно…']
    ]},
    { t: 'tip', html: 'Thành phần thứ tư — <b>tự nêu ra phản bác rồi tự trả lời</b> — là thứ phân biệt B2 với B1. Nó cho thấy em đã nghĩ tới phía đối lập. Trong bảo vệ luận án, nó còn cướp trước vũ khí của người phản biện.' },
    { t: 'h', text: 'Nguỵ biện — nhận ra để không mắc' },
    { t: 'table', head: ['Tên Nga', 'Là gì', 'Ví dụ'], rows: [
      ['перехо́д на ли́чности', 'công kích cá nhân thay vì lập luận', '«Вы же не специалист в этой области»'],
      ['подме́на те́зиса', 'đánh tráo luận điểm', 'trả lời một câu hỏi khác câu được hỏi'],
      ['ло́жная дилемма', 'chỉ đưa hai lựa chọn khi có nhiều hơn', '«Либо мы внедряем это, либо отстаём навсегда»'],
      ['апелля́ция к авторите́ту', 'viện dẫn danh tiếng thay bằng chứng', '«Так считает академик Н.»'],
      ['обобще́ние по одному́ слу́чаю', 'khái quát từ một trường hợp', '«У меня сработало — значит, метод верный»']
    ]},
    { t: 'warn', html: '<span class="ru">Подме́на те́зиса</span> là lỗi hay gặp nhất ở người nói ngoại ngữ — <b>không phải vì gian</b>, mà vì không hiểu hết câu hỏi rồi trả lời câu mình hiểu được. Đó chính là lý do câu «Если я правильно понял, Вы спрашиваете о…» ở bài 13 quan trọng đến thế.' },
    { t: 'h', text: 'Một cuộc trao đổi mẫu' },
    { t: 'dialog', lines: [
      { who: 'Оппоне́нт', ru: 'Ваша модель не учитывает влияние скорости движения. Это серьёзный пробел.', vn: 'Mô hình của anh không tính tới ảnh hưởng của tốc độ chuyển động. Đó là một lỗ hổng nghiêm trọng.' },
      { who: 'Чунг', ru: 'Спасибо за вопрос. Вы правы в том, что скорость влияет на температурный режим.', vn: 'Cảm ơn câu hỏi. Anh nói đúng rằng tốc độ có ảnh hưởng tới chế độ nhiệt.' },
      { who: 'Чунг', ru: 'Однако в рамках данной работы скорость рассматривалась как постоянная величина — испытания проводились на стенде при фиксированной частоте вращения.', vn: 'Tuy nhiên trong khuôn khổ công trình này, tốc độ được xét như một đại lượng không đổi — các thử nghiệm tiến hành trên bệ thử ở tần số quay cố định.' },
      { who: 'Чунг', ru: 'Это, безусловно, ограничение модели, и оно указано в разделе «Выводы». Учёт переменной скорости — направление следующего этапа работы.', vn: 'Đó chắc chắn là một hạn chế của mô hình, và điều đó đã được nêu trong phần Kết luận. Việc tính tới tốc độ thay đổi là hướng của giai đoạn tiếp theo.' },
      { who: 'Оппоне́нт', ru: 'Понятно. Тогда второй вопрос…', vn: 'Rõ rồi. Vậy câu hỏi thứ hai…' }
    ]},
    { t: 'table', head: ['Trung đã làm gì', 'Hiệu quả'], rows: [
      ['Cảm ơn trước khi trả lời', 'giảm nhiệt ngay'],
      ['Thừa nhận phần đúng', 'không tỏ ra phòng thủ'],
      ['Nêu phạm vi công trình', 'chuyển "lỗ hổng" thành "giới hạn có chủ ý"'],
      ['Chỉ ra chỗ đã tự nêu hạn chế', 'chứng tỏ đã nghĩ tới rồi'],
      ['Biến hạn chế thành hướng tiếp theo', 'kết thúc ở thế chủ động']
    ]},
    { t: 'tip', html: 'Câu chốt hay nhất trong bảo vệ luận án Nga: <span class="ru">Э́то ограниче́ние рабо́ты, оно́ ука́зано в вы́водах, и оно́ определя́ет направле́ние сле́дующего эта́па.</span> Ba mệnh đề biến một điểm yếu thành một kế hoạch.' },
    { t: 'h', text: 'Từ để giữ sàn' },
    { t: 'words', items: [
      { ru: 'Позво́льте я зако́нчу мысль.', vn: 'Cho tôi nói hết ý.' },
      { ru: 'Я сейча́с к э́тому подойду́.', vn: 'Tôi sẽ đi tới điểm đó ngay.' },
      { ru: 'Секу́нду, я поясню́.', vn: 'Một giây, tôi giải thích rõ.' },
      { ru: 'Вернёмся к э́тому чуть по́зже.', vn: 'Ta quay lại chuyện đó sau một chút.' },
      { ru: 'Э́то отде́льный большо́й вопро́с.', vn: 'Đó là một vấn đề lớn riêng.' }
    ]},
    { t: 'note', html: 'Người Nga ngắt lời nhau nhiều hơn người Việt trong tranh luận, và đó <b>không</b> phải bất lịch sự — đó là dấu hiệu người ta đang thật sự nghe. Đừng im lặng nhường sàn mỗi lần bị ngắt; một câu <span class="ru">Позво́льте я зако́нчу мысль</span> là hoàn toàn hợp lệ.' }
  ],
  vocab: [
    { ru: 'возража́ть', vn: 'phản đối' }, { ru: 'возраже́ние', vn: 'lời phản đối' },
    { ru: 'оппоне́нт', vn: 'người phản biện' }, { ru: 'те́зис', vn: 'luận điểm' },
    { ru: 'аргуме́нт', vn: 'lý lẽ' }, { ru: 'доказа́тельство', vn: 'bằng chứng' },
    { ru: 'уточни́ть', vn: 'làm rõ, chính xác hoá' }, { ru: 'до́ля и́стины', vn: 'phần đúng' },
    { ru: 'отча́сти', vn: 'một phần' }, { ru: 'справедли́во для', vn: 'đúng đối với' },
    { ru: 'приня́ть к све́дению', vn: 'ghi nhận' }, { ru: 'пробе́л', vn: 'lỗ hổng, chỗ trống' },
    { ru: 'ограниче́ние', vn: 'hạn chế' }, { ru: 'в ра́мках', vn: 'trong khuôn khổ' },
    { ru: 'постоя́нная величина́', vn: 'đại lượng không đổi' }, { ru: 'подме́на те́зиса', vn: 'đánh tráo luận điểm' },
    { ru: 'перехо́д на ли́чности', vn: 'công kích cá nhân' }, { ru: 'безусло́вно', vn: 'chắc chắn, hiển nhiên' }
  ],
  ex: [
    { t: 'choice', q: 'Mức phản đối nhẹ nhất, dùng với giáo sư:', options: ['Это принципиально неверно', 'Я не согласен', 'Не совсем так / Я бы уточнил', 'Это противоречит данным'], a: 2, why: 'Người Nga trong học thuật thường bắt đầu ở mức nhẹ rồi mới leo lên.' },
    { t: 'choice', q: 'Bước 1 của công thức phản bác ba bước là:', options: ['Đưa bằng chứng', 'Thừa nhận phần đúng của đối phương', 'Nêu chỗ không đồng ý', 'Đặt câu hỏi ngược'], a: 1, why: 'Nó hạ phòng thủ của người nghe và thu hẹp tranh luận về đúng chỗ mình mạnh.' },
    { t: 'choice', q: 'Câu <span class="ru">Возмо́жно, я вы́разился недоста́точно то́чно</span> có tác dụng:', options: ['Nhận lỗi về nội dung', 'Nhận lỗi về diễn đạt mà giữ nguyên nội dung', 'Từ chối trả lời', 'Kết thúc tranh luận'], a: 1, why: 'Nhận lỗi diễn đạt, rồi nói lại cho rõ — không mất mặt ai.' },
    { t: 'choice', q: 'Thành phần phân biệt lập luận B2 với B1 là:', options: ['Nhiều ví dụ hơn', 'Tự nêu phản bác rồi tự trả lời', 'Câu dài hơn', 'Dùng nhiều thuật ngữ'], a: 1, why: 'Опережающее возражение cho thấy đã nghĩ tới phía đối lập.' },
    { t: 'choice', q: '<span class="ru">подме́на те́зиса</span> ở người nói ngoại ngữ thường do:', options: ['Cố tình gian', 'Không hiểu hết câu hỏi rồi trả lời câu mình hiểu được', 'Thiếu từ vựng', 'Nói quá nhanh'], a: 1, why: 'Vì thế câu «Если я правильно понял…» quan trọng đến thế.' },
    { t: 'choice', q: 'Cách xử lý tốt nhất khi bị chỉ ra một hạn chế của công trình:', options: ['Phủ nhận', 'Im lặng', 'Thừa nhận, chỉ ra đã tự nêu trong kết luận, biến thành hướng tiếp theo', 'Đổ cho thiếu thời gian'], a: 2, why: 'Ba mệnh đề biến một điểm yếu thành một kế hoạch.' },
    { t: 'choice', q: 'Bị ngắt lời trong tranh luận Nga thì nên:', options: ['Im lặng nhường sàn', 'Nói "Позвольте я закончу мысль"', 'Nói to hơn', 'Bỏ dở ý'], a: 1, why: 'Ngắt lời là dấu hiệu người ta đang thật sự nghe, không phải bất lịch sự.' },
    { t: 'choice', q: '<span class="ru">ло́жная диле́мма</span> là:', options: ['Câu hỏi khó', 'Chỉ đưa hai lựa chọn khi thực ra có nhiều hơn', 'Công kích cá nhân', 'Viện dẫn danh tiếng'], a: 1, why: '«Либо внедряем, либо отстаём навсегда» — bỏ qua mọi phương án ở giữa.' },
    { t: 'type', q: 'Điền: Позво́лю себе́ не ___ . (đồng ý)', a: 'согласиться', alt: ['согласи́ться'], hint: 'Nguyên thể hoàn thành.' },
    { t: 'type', q: 'Điền: Приму́ Ва́ше замеча́ние к ___ . (ghi nhận)', a: 'сведению', alt: ['све́дению'], hint: 'принять к сведению.' },
    { t: 'match', q: 'Nối nguỵ biện với nghĩa:', pairs: [['перехо́д на ли́чности', 'công kích cá nhân'], ['подме́на те́зиса', 'đánh tráo luận điểm'], ['ло́жная диле́мма', 'chỉ đưa hai lựa chọn'], ['апелля́ция к авторите́ту', 'viện danh tiếng thay bằng chứng']] }
  ]
};

/* ---------------------------------------------------------- BÀI 15 */
LESSON_DATA['b2-15'] = {
  level: 'b2',
  intro: 'Nghe giảng đại học khác hẳn nghe hội thoại: một người nói liên tục 80 phút, tốc độ thật, không nhắc lại, và em phải vừa hiểu vừa ghi. Bài này dạy <b>ghi chép có hệ thống</b> — thứ quyết định em học được hay ngồi cho hết giờ.',
  blocks: [
    { t: 'h', text: 'Vì sao nghe giảng khó hơn nghe hội thoại' },
    { t: 'table', head: ['Hội thoại', 'Bài giảng'], rows: [
      ['Có thể hỏi lại', 'Không ngắt được'],
      ['Câu ngắn, đơn giản', 'Câu dài, nhiều mệnh đề phụ'],
      ['Chủ đề đời thường', 'Thuật ngữ dày đặc'],
      ['Có ngữ cảnh nhìn thấy', 'Trừu tượng hoàn toàn'],
      ['Nghe là đủ', 'Vừa nghe vừa ghi vừa hiểu']
    ]},
    { t: 'tip', html: 'Chiến lược cốt lõi: <b>đừng cố ghi hết</b>. Người ghi được nhiều nhất là người hiểu ít nhất — vì toàn bộ năng lượng dồn vào tay. Ghi <b>bộ khung</b>, để tai làm việc.' },
    { t: 'h', text: 'Từ tín hiệu — nghe được là bám được mạch' },
    { t: 'table', head: ['Giảng viên nói', 'Nghĩa là', 'Em phải làm gì'], rows: [
      ['Ита́к, начнём с…', 'bắt đầu phần mới', 'ghi tiêu đề mục'],
      ['Обрати́те внима́ние…', 'chỗ này quan trọng', 'ghi đầy đủ, gạch chân'],
      ['Запиши́те определе́ние…', 'chép nguyên văn', 'ghi từng chữ'],
      ['Э́то ва́жно для экза́мена.', 'sẽ ra thi', 'đánh dấu sao'],
      ['Други́ми слова́ми…', 'nói lại cho dễ hiểu', 'nếu chưa hiểu lần đầu, đây là cơ hội'],
      ['Наприме́р…', 'ví dụ minh hoạ', 'có thể ghi rút gọn'],
      ['Перейдём к…', 'sang mục mới', 'xuống dòng, đánh số mới'],
      ['Подведём ито́г…', 'tóm tắt', 'ghi kỹ — đây là bộ xương cả bài'],
      ['Э́то мы разбира́ли в про́шлый раз.', 'ôn lại', 'không cần ghi'],
      ['Я не бу́ду на э́том остана́вливаться.', 'lướt qua', 'ghi tên mục thôi']
    ]},
    { t: 'warn', html: 'Ba câu quan trọng nhất: <span class="ru">Запиши́те…</span> (chép nguyên), <span class="ru">Обрати́те внима́ние</span> (quan trọng), <span class="ru">Подведём ито́г</span> (tóm tắt). Nghe được ba câu này thôi cũng đủ để có một bản ghi dùng được, dù em bỏ lỡ nửa bài giảng.' },
    { t: 'h', text: 'Hệ thống ký hiệu ghi nhanh' },
    { t: 'table', head: ['Ký hiệu', 'Thay cho'], rows: [
      ['→', 'приво́дит к, сле́довательно'],
      ['↑ ↓', 'увели́чивается / уменьша́ется'],
      ['≈', 'приблизи́тельно'],
      ['≠', 'в отли́чие от, не ра́вно'],
      ['т.к.', 'так как'],
      ['т.о.', 'таки́м о́бразом'],
      ['т.е.', 'то есть'],
      ['напр.', 'наприме́р'],
      ['и т.д. / и т.п.', 'и так да́лее / и тому́ подо́бное'],
      ['ср.', 'сравни́те'],
      ['см.', 'смотри́'],
      ['!', 'chỗ quan trọng'],
      ['?', 'chưa hiểu — hỏi sau']
    ]},
    { t: 'tip', html: 'Viết tắt Nga <span class="ru">т.к., т.о., т.е., напр., и т.д.</span> xuất hiện <b>trên slide và trong giáo trình</b>, không chỉ trong vở của em. Không biết chúng là đọc slide cũng vấp.' },
    { t: 'h', text: 'Cách chia trang vở' },
    { t: 'table', head: ['Cột', 'Chiếm', 'Ghi gì'], rows: [
      ['Trái (hẹp)', '1/4 trang', 'thuật ngữ mới, câu hỏi, dấu ?'],
      ['Phải (rộng)', '3/4 trang', 'nội dung bài giảng'],
      ['Dưới cùng', '3–4 dòng', 'tóm tắt cả buổi bằng lời mình, viết sau giờ']
    ]},
    { t: 'note', html: 'Ba dòng tóm tắt cuối trang là phần quan trọng nhất và tốn ít thời gian nhất. Viết ngay sau giờ giảng, khi còn nhớ. Sau này ôn thi, em đọc ba dòng đó thay vì đọc cả trang.' },
    { t: 'h', text: 'Bài giảng thử — nghe từng đoạn' },
    { t: 'p', html: '<b>Đoạn 1:</b> <span class="ru">Итак, сегодня мы переходим к теме надёжности технических систем. Запишите определение: надёжность — это свойство объекта сохранять во времени способность выполнять требуемые функции в заданных условиях эксплуатации. Обратите внимание на слова «во времени» и «в заданных условиях» — без них определение теряет смысл.</span>' },
    { t: 'p', html: '<b>Đoạn 2:</b> <span class="ru">Надёжность включает четыре составляющие: безотказность, долговечность, ремонтопригодность и сохраняемость. Не буду подробно останавливаться на сохраняемости — она важна прежде всего для складского хранения. А вот на безотказности остановимся отдельно, потому что именно она чаще всего выносится на экзамен.</span>' },
    { t: 'p', html: '<b>Đoạn 3:</b> <span class="ru">Основной количественный показатель безотказности — вероятность безотказной работы. Обозначается P от t. Другими словами, это вероятность того, что в течение заданного времени отказа не произойдёт. Например, если P от тысячи часов равно ноль девять, это значит: из ста изделий девяносто проработают тысячу часов без отказа.</span>' },
    { t: 'p', html: '<b>Đoạn 4:</b> <span class="ru">Подведём итог. Надёжность — свойство комплексное, состоит из четырёх частей. Главный показатель безотказности — вероятность безотказной работы. Это важно для экзамена. В следующий раз разберём интенсивность отказов и её связь с ресурсом изделия.</span>' },
    { t: 'h', text: 'Bản ghi mẫu' },
    { t: 'table', head: ['Cột trái', 'Cột phải'], rows: [
      ['НАДЁЖНОСТЬ', '<b>Опр.:</b> св-во объекта сохранять <u>во времени</u> способность выполнять функции <u>в заданных условиях</u>'],
      ['! 2 từ khoá', '«во времени» + «в заданных условиях» — без них mất nghĩa'],
      ['4 составляющие', '1) безотказность ★ 2) долговечность 3) ремонтопригодность 4) сохраняемость (lướt)'],
      ['★ ra thi', 'безотказность → показатель = <b>P(t)</b>'],
      ['P(t)', 'вероятн. что за время t отказа НЕ будет'],
      ['напр.', 'P(1000 ч)=0,9 → из 100 изд. 90 отработают 1000 ч'],
      ['? hỏi sau', 'связь P(t) с ресурсом — след. лекция'],
      ['<b>Итог 3 dòng</b>', 'Надёжность = 4 части. Гл. показатель безотказности — P(t). След. раз: интенсивность отказов.']
    ]},
    { t: 'tip', html: 'So sánh: bài giảng khoảng 150 từ, bản ghi khoảng 60 từ — <b>bằng 40 %</b>. Đủ để dựng lại toàn bộ nội dung, mà tay vẫn kịp và tai vẫn nghe được. Đó là tỉ lệ cần nhắm tới.' },
    { t: 'h', text: 'Sau giờ giảng — 10 phút quý nhất' },
    { t: 'table', head: ['Việc', 'Mất bao lâu'], rows: [
      ['Viết 3 dòng tóm tắt cuối trang', '3 phút'],
      ['Điền nốt chỗ ghi dở khi còn nhớ', '3 phút'],
      ['Đánh dấu chỗ có dấu ? để hỏi', '1 phút'],
      ['Chép 5–7 thuật ngữ mới vào bộ thẻ ghi nhớ', '3 phút']
    ]},
    { t: 'note', html: 'Mười phút này có giá trị hơn một tiếng ôn lại sau ba tuần. Trí nhớ về bài giảng rơi nhanh nhất trong <b>24 giờ đầu</b>; củng cố ngay là giữ được phần lớn, để nguội là phải học lại từ đầu.' }
  ],
  vocab: [
    { ru: 'ле́кция', vn: 'bài giảng' }, { ru: 'конспе́кт', vn: 'bản ghi chép' },
    { ru: 'определе́ние', vn: 'định nghĩa' }, { ru: 'обозначе́ние', vn: 'ký hiệu' },
    { ru: 'составля́ющая', vn: 'thành phần cấu thành' }, { ru: 'надёжность', vn: 'độ tin cậy' },
    { ru: 'безотка́зность', vn: 'khả năng làm việc không hỏng' }, { ru: 'долгове́чность', vn: 'độ bền lâu' },
    { ru: 'ремонтопригодность', vn: 'khả năng sửa chữa' }, { ru: 'сохраня́емость', vn: 'khả năng bảo quản' },
    { ru: 'вероя́тность', vn: 'xác suất' }, { ru: 'изде́лие', vn: 'sản phẩm, chi tiết chế tạo' },
    { ru: 'интенси́вность отка́зов', vn: 'cường độ hỏng hóc' }, { ru: 'вы́носится на экза́мен', vn: 'sẽ ra thi' },
    { ru: 'разобра́ть (те́му)', vn: 'phân tích, mổ xẻ (chủ đề)' }, { ru: 'подвести́ ито́г', vn: 'tổng kết' }
  ],
  ex: [
    { t: 'choice', q: 'Chiến lược ghi chép bài giảng đúng là:', options: ['Ghi càng nhiều càng tốt', 'Ghi bộ khung, để tai làm việc', 'Chỉ nghe không ghi', 'Ghi âm rồi chép lại'], a: 1, why: 'Người ghi nhiều nhất thường hiểu ít nhất — năng lượng dồn hết vào tay.' },
    { t: 'choice', q: '<span class="ru">Запиши́те определе́ние…</span> nghĩa là:', options: ['Ghi tóm tắt', 'Chép nguyên văn từng chữ', 'Nhớ trong đầu', 'Xem trong sách'], a: 1, why: 'Đây là một trong ba câu tín hiệu quan trọng nhất.' },
    { t: 'choice', q: '<span class="ru">т.о.</span> là viết tắt của:', options: ['то есть', 'таким образом', 'так как', 'тому подобное'], a: 1, why: 'т.е. = то есть; т.к. = так как; т.о. = таким образом.' },
    { t: 'choice', q: '<span class="ru">Я не бу́ду на э́том остана́вливаться</span> nghĩa là:', options: ['Chỗ này rất quan trọng', 'Lướt qua — chỉ cần ghi tên mục', 'Sẽ ra thi', 'Đã học rồi'], a: 1, why: 'Giảng viên báo trước phần này không đi sâu.' },
    { t: 'choice', q: 'Tỉ lệ bản ghi so với bài giảng nên khoảng:', options: ['10 %', '40 %', '80 %', '100 %'], a: 1, why: 'Đủ để dựng lại nội dung mà tay vẫn kịp và tai vẫn nghe được.' },
    { t: 'choice', q: '<span class="ru">безотка́зность</span> nghĩa là:', options: ['Sự từ chối', 'Khả năng làm việc không hỏng', 'Độ bền lâu', 'Khả năng sửa chữa'], a: 1, why: 'Từ gốc отказ (sự cố) + без- (không).' },
    { t: 'choice', q: 'Mười phút sau giờ giảng nên dùng để:', options: ['Nghỉ ngơi', 'Viết tóm tắt, điền chỗ ghi dở, chép thuật ngữ vào thẻ', 'Đọc trước bài sau', 'Chép lại vở cho sạch'], a: 1, why: 'Trí nhớ về bài giảng rơi nhanh nhất trong 24 giờ đầu.' },
    { t: 'choice', q: '<span class="ru">P(t) = 0,9</span> tại t = 1000 giờ nghĩa là:', options: ['90 % sản phẩm hỏng trong 1000 giờ', '90 trong 100 sản phẩm chạy được 1000 giờ không hỏng', 'Sản phẩm chạy được 900 giờ', 'Xác suất hỏng là 90 %'], a: 1, why: 'Вероятность безотказной работы — xác suất KHÔNG xảy ra sự cố.' },
    { t: 'type', q: 'Điền: ___ внима́ние на э́ту фо́рмулу. (xin lưu ý)', a: 'обратите', alt: ['обрати́те'], hint: 'обратить внимание на.' },
    { t: 'match', q: 'Nối:', pairs: [['долгове́чность', 'độ bền lâu'], ['вероя́тность', 'xác suất'], ['изде́лие', 'sản phẩm chế tạo'], ['подвести́ ито́г', 'tổng kết']] }
  ]
};

/* ---------------------------------------------------------- BÀI 16 */
LESSON_DATA['b2-16'] = {
  level: 'b2',
  intro: 'Podcast và phỏng vấn là <b>tiếng Nga thật nhất</b> em có thể tiếp cận từ xa: người ta nói chồng lên nhau, nói dở câu, cười, đổi ý giữa chừng. Nghe được thứ này là nghe được đời sống — và đây cũng là dạng bài khó nhất của phần аудирование ТРКИ-2.',
  blocks: [
    { t: 'h', text: 'Ba mức khó của tài liệu nghe' },
    { t: 'table', head: ['Mức', 'Loại', 'Đặc điểm'], rows: [
      ['Dễ', 'bản tin, thông báo', 'đọc từ văn bản, phát âm chuẩn, tốc độ đều'],
      ['Vừa', 'bài giảng, phóng sự', 'nói tự nhiên nhưng có chuẩn bị, mạch rõ'],
      ['Khó', 'podcast, phỏng vấn, tranh luận', 'nói ngẫu hứng, chồng lời, bỏ dở câu, cười, từ đệm']
    ]},
    { t: 'note', html: 'Nhiều người học nhảy thẳng từ bản tin sang podcast rồi nản. Đường đúng là đi qua mức giữa: <b>phỏng vấn có kịch bản</b>, phóng sự truyền hình, bài giảng ghi hình. Khoảng ba tháng ở mức giữa rồi mới lên mức khó.' },
    { t: 'h', text: 'Đặc điểm của lời nói ngẫu hứng' },
    { t: 'table', head: ['Hiện tượng', 'Tên', 'Ví dụ'], rows: [
      ['Từ đệm liên tục', 'слова́-паразиты', 'ну, вот, значит, как бы, это самое'],
      ['Bắt đầu lại câu', 'самокорре́кция', '«Мы решили… то есть, мы попробовали решить…»'],
      ['Bỏ dở câu', 'незако́нченность', '«Ну, вы понимаете…»'],
      ['Nói chồng lời', 'наложе́ние ре́чи', 'hai người nói cùng lúc 2–3 giây'],
      ['Nhắc lại để nhấn', 'повто́р', '«Очень, очень важно»'],
      ['Câu hỏi tự trả lời', '—', '«Почему? Потому что…»']
    ]},
    { t: 'tip', html: 'Cụm <span class="ru">как бы</span> ("kiểu như") và <span class="ru">э́то са́мое</span> ("cái đó") gần như <b>không mang nghĩa</b> trong lời nói ngẫu hứng. Học cách <b>nghe qua</b> chúng — nếu dừng lại để dịch, em mất câu tiếp theo.' },
    { t: 'h', text: 'Cấu trúc một cuộc phỏng vấn' },
    { t: 'table', head: ['Phần', 'Người dẫn nói gì', 'Em nghe gì'], rows: [
      ['Giới thiệu', 'У нас в го́стях… · Сего́дня мы говори́м о…', 'tên khách + chủ đề chính'],
      ['Câu hỏi mở', 'Расскажи́те, пожа́луйста, о…', 'khách sẽ nói dài — bắt ý chính'],
      ['Câu hỏi làm rõ', 'То есть Вы хоти́те сказа́ть, что…?', 'người dẫn tóm ý — cơ hội hiểu lại'],
      ['Câu hỏi khó', 'А как Вы отве́тите тем, кто счита́ет…?', 'chỗ nghe rõ quan điểm nhất'],
      ['Chuyển chủ đề', 'Дава́йте перейдём к…', 'sang phần mới'],
      ['Kết', 'Спаси́бо, что пришли́. · После́дний вопро́с…', 'thường có tóm tắt']
    ]},
    { t: 'tip', html: 'Câu <span class="ru">То есть Вы хоти́те сказа́ть, что…?</span> là <b>món quà</b> cho người học: người dẫn vừa tóm tắt lại ý dài của khách bằng một câu ngắn. Nếu em không hiểu đoạn khách nói, câu này cứu em.' },
    { t: 'h', text: 'Nghe đoạn phỏng vấn' },
    { t: 'dialog', lines: [
      { who: 'Веду́щий', ru: 'У нас в гостях Игорь Соколов, заведующий кафедрой транспортных систем. Игорь Петрович, здравствуйте.', vn: 'Khách mời của chúng ta là Igor Sokolov, trưởng bộ môn hệ thống giao thông. Chào anh Igor Petrovich.' },
      { who: 'Гость', ru: 'Здравствуйте, спасибо, что пригласили.', vn: 'Chào anh, cảm ơn đã mời tôi.' },
      { who: 'Веду́щий', ru: 'Скажите, вот все говорят про электробусы. Это правда будущее — или, ну, скажем так, модная тема?', vn: 'Anh cho biết, ai cũng nói về xe buýt điện. Đó thật sự là tương lai — hay là, nói thế nào nhỉ, một chủ đề thời thượng?' },
      { who: 'Гость', ru: 'Ну, я бы не стал так ставить вопрос. То есть… это не либо-либо. Технология работает, это факт. Вопрос в другом — в какой момент и в каких условиях она окупается.', vn: 'À, tôi sẽ không đặt vấn đề như thế. Tức là… không phải hoặc cái này hoặc cái kia. Công nghệ chạy được, đó là sự thật. Vấn đề nằm ở chỗ khác — ở thời điểm nào và trong điều kiện nào thì nó hoàn vốn.' },
      { who: 'Веду́щий', ru: 'То есть Вы хотите сказать, что вопрос не в технике, а в экономике?', vn: 'Tức là ý anh muốn nói vấn đề không nằm ở kỹ thuật mà ở kinh tế?' },
      { who: 'Гость', ru: 'И в экономике, и в климате. Вот у нас в Сибири зимой ёмкость батареи падает почти на треть. Это, как бы, меняет всю экономику маршрута.', vn: 'Cả kinh tế, cả khí hậu. Ở Siberia chỗ chúng tôi, mùa đông dung lượng pin giảm gần một phần ba. Cái đó, kiểu như, làm thay đổi toàn bộ bài toán kinh tế của tuyến.' },
      { who: 'Веду́щий', ru: 'А как Вы ответите тем, кто говорит: ну и что, зато воздух чище?', vn: 'Thế anh trả lời sao với những người nói: thì đã sao, bù lại không khí sạch hơn?' },
      { who: 'Гость', ru: 'Отвечу, что я с ними согласен. Полностью. Просто чистый воздух тоже надо чем-то оплачивать, и лучше считать заранее, чем потом.', vn: 'Tôi sẽ trả lời rằng tôi đồng ý với họ. Hoàn toàn. Chỉ có điều không khí sạch cũng phải trả bằng cái gì đó, và tính trước vẫn hơn tính sau.' }
    ]},
    { t: 'table', head: ['Chỗ', 'Hiện tượng', 'Ghi chú'], rows: [
      ['«ну, скажем так»', 'từ đệm + tự sửa', 'người dẫn đang tìm cách nói nhẹ đi'],
      ['«То есть…»', 'самокоррекция', 'khách bắt đầu lại câu'],
      ['«не либо-либо»', 'bác bỏ nguỵ biện lưỡng phân', 'chính là ложная дилемма ở bài 14'],
      ['«То есть Вы хотите сказать…»', 'người dẫn tóm ý', 'cơ hội hiểu lại'],
      ['«как бы»', 'từ đệm rỗng', 'nghe qua, đừng dịch'],
      ['«Отвечу, что я с ними согласен. Полностью.»', 'парцелляция trong lời nói', 'nhấn mạnh bằng câu cụt']
    ]},
    { t: 'note', html: 'Nhận xét quan trọng: khách mời <b>từ chối khung câu hỏi</b> của người dẫn ("tôi sẽ không đặt vấn đề như thế") rồi đặt lại vấn đề theo cách của mình. Đây là kỹ thuật trả lời phỏng vấn rất Nga, và cũng dùng được trong bảo vệ luận án.' },
    { t: 'h', text: 'Nguồn nghe nên dùng' },
    { t: 'table', head: ['Mức', 'Loại nguồn', 'Cách dùng'], rows: [
      ['Vừa', 'phóng sự truyền hình 3–5 phút', 'nghe 2 lần, lần 2 có phụ đề Nga'],
      ['Vừa', 'bài giảng ghi hình của trường Nga', 'tập ghi chép theo bài 15'],
      ['Khó', 'podcast khoa học', 'nghe 10 phút mỗi ngày, không nghe cả tập'],
      ['Khó', 'phỏng vấn dài', 'nghe đi nghe lại một đoạn 2 phút cho tới khi hiểu hết'],
      ['Bổ trợ', 'phim và series', 'phụ đề Nga, không dùng phụ đề Việt']
    ]},
    { t: 'warn', html: 'Quy tắc quan trọng: <b>nghe ít mà kỹ hơn nghe nhiều mà lướt</b>. Một đoạn hai phút nghe năm lần cho tới khi hiểu từng chữ có ích hơn một tập podcast một tiếng nghe một lần rồi thôi. Ở B2, cái em cần là <b>độ phân giải</b>, không phải khối lượng.' },
    { t: 'h', text: 'Bài tập nghe chép (диктант)' },
    { t: 'table', head: ['Bước', 'Việc'], rows: [
      ['1', 'Chọn đoạn 60–90 giây từ podcast'],
      ['2', 'Nghe và chép lại từng chữ, dừng bao nhiêu lần cũng được'],
      ['3', 'Nghe lại, sửa chỗ nghe hụt'],
      ['4', 'So với phụ đề hoặc bản chép chính thức'],
      ['5', 'Đọc to lại đoạn đó ba lần, bắt chước nhịp']
    ]},
    { t: 'tip', html: 'Bước 5 hay bị bỏ nhưng chính nó biến bài nghe thành bài nói. Bắt chước <b>nhịp và ngữ điệu</b>, không chỉ từ. Sau hai mươi đoạn như thế, giọng em thay đổi rõ — đây là bài tập hiệu quả nhất mà người học tự làm được một mình.' }
  ],
  vocab: [
    { ru: 'интервью́', vn: 'phỏng vấn' }, { ru: 'веду́щий', vn: 'người dẫn chương trình' },
    { ru: 'у нас в гостя́х', vn: 'khách mời của chúng ta' }, { ru: 'слова́-парази́ты', vn: 'từ đệm rỗng' },
    { ru: 'как бы', vn: 'kiểu như (từ đệm)' }, { ru: 'э́то са́мое', vn: 'cái đó (từ đệm)' },
    { ru: 'ли́бо-ли́бо', vn: 'hoặc cái này hoặc cái kia' }, { ru: 'окупа́ться', vn: 'hoàn vốn' },
    { ru: 'ста́вить вопро́с', vn: 'đặt vấn đề' }, { ru: 'зато́', vn: 'bù lại' },
    { ru: 'опла́чивать', vn: 'chi trả' }, { ru: 'зара́нее', vn: 'trước, sớm' },
    { ru: 'наложе́ние ре́чи', vn: 'nói chồng lời' }, { ru: 'самокорре́кция', vn: 'tự sửa giữa câu' },
    { ru: 'дикта́нт', vn: 'bài nghe chép' }, { ru: 'подде́ржка', vn: 'sự hỗ trợ' }
  ],
  ex: [
    { t: 'choice', q: 'Loại tài liệu nghe khó nhất là:', options: ['Bản tin', 'Bài giảng', 'Podcast và phỏng vấn', 'Thông báo sân bay'], a: 2, why: 'Nói ngẫu hứng: chồng lời, bỏ dở câu, từ đệm.' },
    { t: 'choice', q: '<span class="ru">как бы</span> trong lời nói ngẫu hứng:', options: ['Nghĩa là "như thể"', 'Gần như không mang nghĩa — nghe qua đừng dịch', 'Chỉ sự nghi ngờ', 'Là lỗi ngữ pháp'], a: 1, why: 'Dừng lại để dịch nó là mất câu tiếp theo.' },
    { t: 'choice', q: 'Câu <span class="ru">То есть Вы хоти́те сказа́ть, что…?</span> có ích vì:', options: ['Người dẫn đang phản đối', 'Người dẫn tóm lại ý dài của khách bằng một câu ngắn', 'Đó là câu kết thúc', 'Báo hiệu đổi chủ đề'], a: 1, why: 'Nếu không hiểu đoạn khách nói, câu này cứu em.' },
    { t: 'choice', q: 'Trong phỏng vấn mẫu, khách mời làm gì với câu hỏi của người dẫn?', options: ['Trả lời thẳng', 'Từ chối khung câu hỏi rồi đặt lại vấn đề theo cách của mình', 'Né tránh', 'Hỏi ngược'], a: 1, why: '«Я бы не стал так ставить вопрос» — kỹ thuật dùng được cả khi bảo vệ luận án.' },
    { t: 'choice', q: 'Nguyên tắc luyện nghe ở B2:', options: ['Nghe càng nhiều càng tốt', 'Nghe ít mà kỹ — một đoạn 2 phút nghe 5 lần', 'Chỉ nghe bản tin', 'Nghe khi ngủ'], a: 1, why: 'Ở B2 cái cần là độ phân giải, không phải khối lượng.' },
    { t: 'choice', q: 'Bước quan trọng hay bị bỏ trong bài nghe chép là:', options: ['Chép lại', 'So với phụ đề', 'Đọc to lại ba lần, bắt chước nhịp', 'Nghe lần đầu'], a: 2, why: 'Chính nó biến bài nghe thành bài nói.' },
    { t: 'choice', q: 'Xem phim Nga nên dùng phụ đề:', options: ['Tiếng Việt', 'Tiếng Nga', 'Tiếng Anh', 'Không phụ đề'], a: 1, why: 'Phụ đề Việt khiến tai gần như không làm việc.' },
    { t: 'type', q: 'Điền: Технология не ___ в северных условиях. (hoàn vốn)', a: 'окупается', alt: ['окупа́ется'], hint: 'Cùng gốc với "купить".' },
    { t: 'type', q: 'Điền: Дорого, ___ надёжно. (bù lại)', a: 'зато', alt: ['зато́'], hint: 'Một từ, viết liền.' },
    { t: 'match', q: 'Nối:', pairs: [['веду́щий', 'người dẫn chương trình'], ['слова́-парази́ты', 'từ đệm rỗng'], ['окупа́ться', 'hoàn vốn'], ['зара́нее', 'trước, sớm']] }
  ]
};

/* ---------------------------------------------------------- BÀI 17 */
LESSON_DATA['b2-17'] = {
  level: 'b2',
  intro: 'Ở A2 em học thể động từ như một luật: xong thì dùng hoàn thành, chưa xong thì chưa hoàn thành. Ở B2, luật ấy <b>không đủ</b>. Bài này xử lý những chỗ mà cả hai thể đều đúng ngữ pháp nhưng <b>nghĩa khác nhau</b> — và người Nga nghe ra ngay.',
  blocks: [
    { t: 'h', text: 'Sáu ý nghĩa của thể chưa hoàn thành' },
    { t: 'table', head: ['Ý nghĩa', 'Ví dụ', 'Nhận ra nhờ'], rows: [
      ['Quá trình đang diễn ra', 'Он чита́л, когда́ я вошёл.', 'có mốc thời gian cắt ngang'],
      ['Lặp lại, thói quen', 'Он ка́ждый день чита́л газе́ту.', 'каждый, обычно, часто'],
      ['Nêu sự việc có xảy ra (общефактическое)', 'Ты чита́л э́ту кни́гу? — Читал.', 'chỉ hỏi có hay không'],
      ['Đang tiến hành, chưa xong', 'Я реша́ю зада́чу.', 'hiện tại'],
      ['Hai hành động song song', 'Пока́ он чита́л, я гото́вил.', 'пока'],
      ['Phủ định mềm / cấm', 'Не входи́!', 'mệnh lệnh phủ định']
    ]},
    { t: 'h', text: 'Nghĩa "общефактическое" — chỗ khó nhất' },
    { t: 'table', head: ['Câu hỏi', 'Ý thật', 'Trả lời'], rows: [
      ['Ты чита́л «Войну́ и мир»?', 'có từng đọc chưa (kinh nghiệm)', 'Чита́л. / Не чита́л.'],
      ['Ты прочита́л «Войну́ и мир»?', 'đọc xong chưa (nhiệm vụ cụ thể)', 'Прочита́л. / Ещё нет.'],
      ['Кто открыва́л окно́?', 'ai đã từng mở (dấu vết còn lại: lạnh)', 'Я открыва́л.'],
      ['Кто откры́л окно́?', 'ai mở ra và nó đang mở', 'Я откры́л.']
    ]},
    { t: 'tip', html: 'Quy tắc thực hành: hỏi về <b>kinh nghiệm, sự việc từng có</b> → chưa hoàn thành. Hỏi về <b>kết quả còn đó, nhiệm vụ đã giao</b> → hoàn thành. Đây là chỗ người Việt sai nhiều vì tiếng Việt dùng "đã" cho cả hai.' },
    { t: 'h', text: 'Phủ định: thể đổi nghĩa hoàn toàn' },
    { t: 'table', head: ['Câu', 'Nghĩa'], rows: [
      ['Я не чита́л э́ту статью́.', 'Tôi chưa đọc bài đó (chưa hề đọc).'],
      ['Я не прочита́л э́ту статью́.', 'Tôi có đọc nhưng không đọc xong / không đọc kịp.'],
      ['Он не звони́л.', 'Anh ấy không gọi (không có cuộc gọi nào).'],
      ['Он не позвони́л.', 'Anh ấy đã không gọi (đáng lẽ phải gọi — có trách móc).']
    ]},
    { t: 'warn', html: 'Dòng cuối rất quan trọng trong giao tiếp: <span class="ru">Он не позвони́л</span> mang sắc thái <b>thất vọng, trách móc</b> — đáng lẽ phải gọi mà không gọi. <span class="ru">Он не звони́л</span> chỉ là thông tin trung tính. Dùng nhầm là gửi đi một cảm xúc mà em không định gửi.' },
    { t: 'h', text: 'Sau các động từ đặc biệt' },
    { t: 'table', head: ['Sau từ nào', 'Bắt buộc thể nào', 'Ví dụ'], rows: [
      ['нача́ть, продо́лжить, ко́нчить, переста́ть', 'chưa hoàn thành', 'на́чал чита́ть ✓ · на́чал прочита́ть ✗'],
      ['успе́ть, забы́ть, суме́ть, удаться', 'hoàn thành', 'успе́л прочита́ть'],
      ['не на́до, не сто́ит, не ну́жно', 'chưa hoàn thành', 'не на́до звони́ть'],
      ['привы́кнуть, научи́ться, надое́сть', 'chưa hoàn thành', 'научи́лся води́ть'],
      ['люби́ть, нра́виться', 'chưa hoàn thành', 'люблю́ чита́ть']
    ]},
    { t: 'note', html: 'Nhóm thứ nhất và nhóm thứ hai là hai luật cứng, học thuộc là xong. Nhóm thứ ba tinh tế hơn: <span class="ru">Не на́до звони́ть</span> = đừng gọi (khuyên chung), còn <span class="ru">Не на́до позвони́ть</span> thì sai hẳn.' },
    { t: 'h', text: 'Mệnh lệnh — thể quyết định sắc thái' },
    { t: 'table', head: ['Câu', 'Sắc thái'], rows: [
      ['Сади́тесь, пожа́луйста.', 'lời mời lịch sự — dùng cái này'],
      ['Ся́дьте.', 'mệnh lệnh, hơi gắt'],
      ['Проходи́те!', 'mời vào, thân thiện'],
      ['Пройди́те.', 'yêu cầu chính thức (cảnh sát, hải quan)'],
      ['Не откры́вайте окно́.', 'đừng mở (khuyên, cấm chung)'],
      ['Не откро́йте окно́.', 'gần như không dùng — sai sắc thái']
    ]},
    { t: 'warn', html: 'Đây là chỗ người học vô tình <b>nghe cộc lốc</b> mà không biết. Khi mời ai đó làm gì cho thoải mái — ngồi, vào, lấy, ăn — hãy dùng <b>chưa hoàn thành</b>: <span class="ru">сади́тесь, проходи́те, бери́те, ку́шайте</span>. Dùng hoàn thành là ra lệnh.' },
    { t: 'h', text: 'Cặp thể bất quy tắc phải thuộc' },
    { t: 'table', head: ['Chưa hoàn thành', 'Hoàn thành', 'Nghĩa'], rows: [
      ['говори́ть', 'сказа́ть', 'nói'],
      ['брать', 'взять', 'lấy'],
      ['класть', 'положи́ть', 'đặt xuống'],
      ['лови́ть', 'пойма́ть', 'bắt'],
      ['сади́ться', 'сесть', 'ngồi xuống'],
      ['ложи́ться', 'лечь', 'nằm xuống'],
      ['станови́ться', 'стать', 'trở thành'],
      ['возвраща́ться', 'верну́ться', 'quay về'],
      ['иска́ть', 'найти́', 'tìm'],
      ['покупа́ть', 'купи́ть', 'mua']
    ]},
    { t: 'warn', html: 'Cặp <span class="ru">класть / положи́ть</span> là bẫy chết người: <b>không</b> có động từ «ложить» trong tiếng Nga chuẩn. <span class="ru">Я ложу́ кни́гу</span> ✗ — đúng là <span class="ru">Я кладу́ кни́гу</span>. Nhiều người Nga cũng nói sai, và đó là một trong những lỗi bị chê nhiều nhất.' },
    { t: 'h', text: 'Thể trong văn khoa học' },
    { t: 'table', head: ['Dùng', 'Thể', 'Ví dụ'], rows: [
      ['Mô tả quy luật, tính chất', 'chưa hoàn thành', 'Мета́лл расширя́ется при нагрева́нии.'],
      ['Mô tả quy trình đã làm', 'chưa hoàn thành', 'Испыта́ния проводи́лись в тече́ние ме́сяца.'],
      ['Nêu kết quả đạt được', 'hoàn thành', 'Устано́влено… Полу́чены да́нные…'],
      ['Nêu đóng góp', 'hoàn thành', 'Предло́жена моде́ль. Разрабо́тан ме́тод.']
    ]},
    { t: 'tip', html: 'Quy tắc gọn cho luận văn: phần <b>методы</b> dùng chưa hoàn thành (mô tả quá trình làm việc), phần <b>результаты</b> và <b>выводы</b> dùng hoàn thành (nêu kết quả có được). Chỉ cần theo đúng hai dòng này là phần lớn bài viết ổn.' },
    { t: 'h', text: 'Tự kiểm nhanh' },
    { t: 'table', head: ['Câu', 'Chọn thể nào và vì sao'], rows: [
      ['Вчера́ я весь ве́чер (реша́л / реши́л) зада́чу.', 'решал — весь вечер chỉ quá trình kéo dài'],
      ['Наконе́ц-то я (реша́л / реши́л) её!', 'решил — наконец-то chỉ kết quả'],
      ['Он на́чал (писа́ть / написа́ть) статью́.', 'писать — sau начал luôn chưa hoàn thành'],
      ['Я не успе́л (чита́ть / прочита́ть).', 'прочитать — sau успеть luôn hoàn thành'],
      ['(Сади́тесь / Ся́дьте), пожа́луйста.', 'Садитесь — lời mời lịch sự']
    ]}
  ],
  vocab: [
    { ru: 'вид глаго́ла', vn: 'thể của động từ' }, { ru: 'соверше́нный вид', vn: 'thể hoàn thành' },
    { ru: 'несоверше́нный вид', vn: 'thể chưa hoàn thành' }, { ru: 'общефакти́ческое значе́ние', vn: 'nghĩa nêu sự việc chung' },
    { ru: 'успе́ть', vn: 'kịp làm gì' }, { ru: 'переста́ть', vn: 'thôi, ngừng' },
    { ru: 'привы́кнуть', vn: 'quen với' }, { ru: 'надое́сть', vn: 'chán ngán' },
    { ru: 'класть / положи́ть', vn: 'đặt xuống' }, { ru: 'станови́ться / стать', vn: 'trở thành' },
    { ru: 'наконе́ц-то', vn: 'mãi rồi cũng' }, { ru: 'расширя́ться', vn: 'giãn nở' },
    { ru: 'нагрева́ние', vn: 'sự nung nóng' }, { ru: 'сади́тесь', vn: 'mời ngồi' }
  ],
  ex: [
    { t: 'choice', q: '<span class="ru">Ты чита́л э́ту кни́гу?</span> hỏi về:', options: ['Đã đọc xong chưa', 'Có từng đọc chưa (kinh nghiệm)', 'Đang đọc không', 'Sẽ đọc không'], a: 1, why: 'Nghĩa общефактическое — chỉ hỏi sự việc có xảy ra hay không.' },
    { t: 'choice', q: '<span class="ru">Он не позвони́л</span> khác <span class="ru">Он не звони́л</span> ở chỗ:', options: ['Không khác gì', 'Mang sắc thái trách móc — đáng lẽ phải gọi', 'Trang trọng hơn', 'Chỉ quá khứ xa'], a: 1, why: 'Не звонил là trung tính; не позвонил là thất vọng.' },
    { t: 'choice', q: '<span class="ru">Я не прочита́л статью́</span> nghĩa là:', options: ['Chưa hề đọc', 'Có đọc nhưng không đọc xong', 'Không muốn đọc', 'Đã đọc rồi'], a: 1, why: 'Phủ định thể hoàn thành = không đạt kết quả, chứ không phải không bắt đầu.' },
    { t: 'choice', q: 'Sau <span class="ru">успе́ть</span> dùng thể nào?', options: ['Chưa hoàn thành', 'Hoàn thành', 'Cả hai', 'Không dùng nguyên thể'], a: 1, why: 'успел прочитать — успеть, забыть, суметь luôn + hoàn thành.' },
    { t: 'choice', q: 'Mời ai đó ngồi cho lịch sự:', options: ['Ся́дьте', 'Сади́тесь', 'Ся́дь', 'Посади́тесь'], a: 1, why: 'Lời mời dùng chưa hoàn thành; hoàn thành nghe như ra lệnh.' },
    { t: 'choice', q: 'Câu nào <b>sai</b>?', options: ['Я кладу́ кни́гу на стол', 'Я ложу́ кни́гу на стол', 'Я положи́л кни́гу', 'Положи́ кни́гу'], a: 1, why: 'Không có động từ «ложить» trong tiếng Nga chuẩn.' },
    { t: 'choice', q: 'Trong luận văn, phần <span class="ru">результа́ты</span> nên dùng thể:', options: ['Chưa hoàn thành', 'Hoàn thành', 'Cả hai như nhau', 'Thì hiện tại'], a: 1, why: 'Установлено, получены — nêu kết quả có được. Методы thì dùng chưa hoàn thành.' },
    { t: 'choice', q: '<span class="ru">Наконе́ц-то я ___ зада́чу!</span>', options: ['реша́л', 'реши́л', 'реша́ю', 'бу́ду реша́ть'], a: 1, why: 'Наконец-то chỉ kết quả đạt được.' },
    { t: 'type', q: 'Điền: Он на́чал ___ статью́. (viết)', a: 'писать', alt: ['писа́ть'], hint: 'Sau начал luôn là thể chưa hoàn thành.' },
    { t: 'type', q: 'Thể hoàn thành của <span class="ru">брать</span> là:', a: 'взять', hint: 'Cặp bất quy tắc, khác gốc hoàn toàn.' },
    { t: 'match', q: 'Nối cặp thể:', pairs: [['класть', 'положи́ть'], ['иска́ть', 'найти́'], ['станови́ться', 'стать'], ['возвраща́ться', 'верну́ться']] }
  ]
};

/* ---------------------------------------------------------- BÀI 18 */
LESSON_DATA['b2-18'] = {
  level: 'b2',
  intro: 'Tiểu từ là <b>gia vị</b> của tiếng Nga: bỏ đi thì câu vẫn đúng ngữ pháp nhưng nghe như dịch máy; dùng đúng thì lập tức nghe như người bản xứ. Chúng gần như không dịch được sang tiếng Việt bằng một từ — phải học bằng tình huống.',
  blocks: [
    { t: 'h', text: 'ЖЕ — "chứ, mà, rồi mà"' },
    { t: 'table', head: ['Câu', 'Nghĩa'], rows: [
      ['Ты же обеща́л!', 'Cậu hứa rồi mà! (trách nhẹ)'],
      ['Я же говори́л!', 'Tôi đã bảo rồi mà!'],
      ['Что же де́лать?', 'Thế thì biết làm sao đây? (bối rối)'],
      ['Где же он?', 'Anh ta đâu rồi nhỉ? (sốt ruột)'],
      ['Он же врач, он зна́ет.', 'Anh ấy là bác sĩ mà, anh ấy biết chứ.'],
      ['Сего́дня же!', 'Ngay hôm nay! (nhấn mạnh thời điểm)']
    ]},
    { t: 'note', html: 'Chức năng gốc của <span class="ru">же</span>: nhắc người nghe về điều <b>đáng lẽ họ đã biết</b>. Vì thế nó luôn có chút sắc thái "chứ còn gì nữa" — dùng đúng thì thân mật, dùng với người trên có thể nghe hơi xấc.' },
    { t: 'h', text: 'ВЕДЬ — "vì mà, chứ"' },
    { t: 'table', head: ['Câu', 'Nghĩa'], rows: [
      ['Он ведь то́лько что прие́хал.', 'Anh ấy vừa mới đến mà. (nêu lý do bào chữa)'],
      ['Ты ведь понима́ешь?', 'Cậu hiểu chứ, phải không?'],
      ['Ведь я предупрежда́л.', 'Thì tôi đã cảnh báo rồi mà.'],
      ['Э́то ведь не так до́рого.', 'Cái đó có đắt lắm đâu.']
    ]},
    { t: 'table', head: ['ЖЕ', 'ВЕДЬ'], rows: [
      ['Trách móc, nhấn mạnh', 'Viện lý do, thuyết phục nhẹ'],
      ['Đứng SAU từ được nhấn', 'Thường đứng đầu câu hoặc sau chủ ngữ'],
      ['Ты же обещал! (cậu sai)', 'Он ведь устал. (thông cảm đi)']
    ]},
    { t: 'tip', html: 'Cách nhớ: <span class="ru">же</span> hướng về <b>người nghe</b> ("anh biết rồi mà"), <span class="ru">ведь</span> hướng về <b>lý do</b> ("bởi vì mà"). Một cái trách, một cái bênh.' },
    { t: 'h', text: '-ТО — nhấn vào chính từ đó' },
    { t: 'table', head: ['Câu', 'Nghĩa ẩn'], rows: [
      ['Я-то согла́сен.', 'Riêng tôi thì đồng ý (còn người khác thì chưa chắc).'],
      ['Кни́гу-то ты прочита́л?', 'Còn quyển sách thì cậu đọc chưa? (chuyển sang chủ đề này)'],
      ['Он-то придёт, а ты?', 'Anh ấy thì đến rồi, còn cậu?'],
      ['Де́ньги-то есть?', 'Thế tiền thì có không đấy?']
    ]},
    { t: 'warn', html: '<span class="ru">-то</span> luôn viết <b>có gạch nối</b> và luôn gắn ngay sau từ nó nhấn. Đừng nhầm với <span class="ru">то</span> đứng riêng trong <span class="ru">е́сли… то…</span> (nếu… thì…) hay <span class="ru">кто́-то</span> (ai đó).' },
    { t: 'h', text: 'ЛИ — câu hỏi gián tiếp và nghi vấn' },
    { t: 'table', head: ['Cấu trúc', 'Ví dụ', 'Ghi chú'], rows: [
      ['Câu hỏi gián tiếp', 'Не зна́ю, придёт ли он.', 'ли đứng SAU từ được hỏi'],
      ['Hỏi lịch sự', 'Не могли́ бы Вы помо́чь?', 'không có ли, nhưng cùng nhóm'],
      ['Nghi ngờ', 'Так ли э́то?', 'Có đúng thế không nhỉ?'],
      ['Lựa chọn', 'То ли дождь, то ли снег.', 'không rõ là mưa hay tuyết'],
      ['Trong văn viết', 'Вопро́с в том, возмо́жно ли э́то.', 'rất phổ biến trong khoa học']
    ]},
    { t: 'warn', html: 'Bẫy: trong câu hỏi gián tiếp, tiếng Nga <b>không</b> dùng <span class="ru">что</span> mà dùng <span class="ru">ли</span>. Câu <span class="ru">Я не зна́ю, что он придёт</span> ✗ sai nghĩa — đúng là <span class="ru">Я не зна́ю, придёт ли он</span> ("tôi không biết liệu anh ấy có đến không"). Người Việt hay dịch "liệu" thành «что».' },
    { t: 'h', text: 'БЫ — điều kiện và lịch sự' },
    { t: 'table', head: ['Chức năng', 'Ví dụ', 'Nghĩa'], rows: [
      ['Điều kiện không có thật', 'Е́сли бы я знал, я бы сказа́л.', 'Nếu tôi biết thì tôi đã nói.'],
      ['Mong muốn', 'Хоте́л бы я э́то уви́деть.', 'Giá mà tôi được thấy cái đó.'],
      ['Đề nghị lịch sự', 'Не могли́ бы Вы повтори́ть?', 'Anh nhắc lại giúp được không?'],
      ['Lời khuyên nhẹ', 'Вам бы отдохну́ть.', 'Anh nên nghỉ một chút.'],
      ['Trong văn khoa học', 'Сле́довало бы отме́тить, что…', 'Cũng nên lưu ý rằng…']
    ]},
    { t: 'note', html: 'Trong tiếng Nga <span class="ru">бы</span> luôn đi với <b>động từ dạng quá khứ</b>, dù nói về hiện tại hay tương lai: <span class="ru">Я бы пошёл за́втра</span> = "mai tôi sẽ đi (nếu…)" — vẫn dùng пошёл. Đây là điều khiến người học bối rối nhất.' },
    { t: 'h', text: 'Tiểu từ khác đáng biết' },
    { t: 'table', head: ['Tiểu từ', 'Nghĩa', 'Ví dụ'], rows: [
      ['да́же', 'thậm chí', 'Да́же он не знал.'],
      ['то́лько / лишь', 'chỉ', 'То́лько два́дцать проце́нтов.'],
      ['и́менно', 'chính là', 'И́менно поэ́тому мы вы́брали э́тот ме́тод.'],
      ['уж', 'nhấn (khẩu ngữ)', 'Не так уж и до́рого.'],
      ['ра́зве / неуже́ли', 'chẳng lẽ', 'Неуже́ли пра́вда?'],
      ['вря́д ли', 'khó mà', 'Вря́д ли он придёт.'],
      ['едва́ ли', 'khó lòng', 'Едва́ ли э́то возмо́жно.'],
      ['всё-таки', 'dù sao thì', 'Всё-таки он был прав.']
    ]},
    { t: 'tip', html: '<span class="ru">И́менно</span> cực kỳ hữu ích trong khoa học và tranh luận: <span class="ru">И́менно э́тот фа́ктор явля́ется определя́ющим</span> = "chính yếu tố này mới là quyết định". Nó cho phép em nhấn mạnh mà không cần lên giọng.' },
    { t: 'h', text: 'Một đoạn có và không có tiểu từ' },
    { t: 'p', html: '<b>Không có:</b> <span class="ru">— Ты не сдал экзамен? — Нет. Я готовился, но не успел всё повторить. Думаю, в следующий раз получится.</span>' },
    { t: 'p', html: '<b>Có tiểu từ:</b> <span class="ru">— Ты что же, не сдал экзамен? — Да нет же. Я ведь готовился, только вот всё повторить не успел. Ну, в следующий раз-то получится.</span>' },
    { t: 'table', head: ['Tiểu từ', 'Thêm gì'], rows: [
      ['что же', 'ngạc nhiên: "sao lại thế?"'],
      ['да нет же', 'phủ nhận dứt khoát: "không có đâu mà"'],
      ['ведь', 'bào chữa: "tôi có ôn mà"'],
      ['только вот', 'nêu trở ngại: "chỉ có điều là…"'],
      ['ну', 'chuyển giọng sang nhẹ nhõm'],
      ['-то', 'nhấn: "lần sau thì được thôi"']
    ]},
    { t: 'warn', html: 'Cụm <span class="ru">Да нет же</span> gây bối rối cho người học vì có cả "có" lẫn "không". Nó nghĩa là <b>"không đâu mà"</b> — <span class="ru">да</span> ở đây không phải "vâng" mà là tiểu từ nhấn. Tương tự <span class="ru">Да ла́дно!</span>, <span class="ru">Да ну!</span>' },
    { t: 'tip', html: 'Cách học tiểu từ hiệu quả nhất: <b>không học bảng, mà nhặt trong phim</b>. Mỗi lần nghe một tiểu từ, dừng lại, hỏi "bỏ nó đi thì câu mất gì?". Sau vài chục lần em cảm được, và cảm được thì tự dùng đúng.' }
  ],
  vocab: [
    { ru: 'части́ца', vn: 'tiểu từ' }, { ru: 'же', vn: 'chứ, rồi mà (nhấn/trách)' },
    { ru: 'ведь', vn: 'vì mà, chứ (viện lý do)' }, { ru: '-то', vn: 'nhấn vào chính từ đó' },
    { ru: 'ли', vn: 'liệu có (hỏi gián tiếp)' }, { ru: 'бы', vn: 'thì đã (điều kiện, lịch sự)' },
    { ru: 'да́же', vn: 'thậm chí' }, { ru: 'и́менно', vn: 'chính là' },
    { ru: 'вря́д ли', vn: 'khó mà' }, { ru: 'едва́ ли', vn: 'khó lòng' },
    { ru: 'всё-таки', vn: 'dù sao thì' }, { ru: 'неуже́ли', vn: 'chẳng lẽ' },
    { ru: 'то́лько вот', vn: 'chỉ có điều là' }, { ru: 'да нет же', vn: 'không đâu mà' },
    { ru: 'определя́ющий', vn: 'có tính quyết định' }, { ru: 'предупрежда́ть', vn: 'cảnh báo trước' }
  ],
  ex: [
    { t: 'choice', q: '<span class="ru">Ты же обеща́л!</span> mang sắc thái:', options: ['Khen ngợi', 'Trách nhẹ — nhắc điều người kia đáng lẽ nhớ', 'Nghi ngờ', 'Lịch sự'], a: 1, why: 'Же nhắc người nghe về điều họ đáng lẽ đã biết.' },
    { t: 'choice', q: 'Khác nhau giữa <span class="ru">же</span> và <span class="ru">ведь</span>:', options: ['Không khác', 'Же trách người nghe; ведь viện lý do, bênh vực', 'Ведь trang trọng hơn', 'Же chỉ dùng trong câu hỏi'], a: 1, why: 'Же hướng về người nghe, ведь hướng về lý do.' },
    { t: 'choice', q: '<span class="ru">Я-то согла́сен</span> ngụ ý:', options: ['Tôi rất đồng ý', 'Riêng tôi đồng ý, người khác chưa chắc', 'Tôi không đồng ý', 'Tôi mới đồng ý'], a: 1, why: '-то nhấn vào từ nó gắn vào và ngụ ý có sự đối lập.' },
    { t: 'choice', q: '"Tôi không biết liệu anh ấy có đến không" dịch đúng là:', options: ['Я не зна́ю, что он придёт', 'Я не зна́ю, придёт ли он', 'Я не зна́ю, е́сли он придёт', 'Я не зна́ю, когда́ он придёт'], a: 1, why: 'Câu hỏi gián tiếp dùng ли, không dùng что.' },
    { t: 'choice', q: '<span class="ru">бы</span> đi với động từ ở dạng nào?', options: ['Nguyên thể', 'Hiện tại', 'Quá khứ', 'Mệnh lệnh'], a: 2, why: 'Я бы пошёл завтра — vẫn dùng dạng quá khứ dù nói về tương lai.' },
    { t: 'choice', q: '<span class="ru">Да нет же</span> nghĩa là:', options: ['Vâng, không', 'Không đâu mà (phủ nhận dứt khoát)', 'Có chứ', 'Chưa chắc'], a: 1, why: 'Да ở đây là tiểu từ nhấn, không phải "vâng".' },
    { t: 'choice', q: '<span class="ru">И́менно</span> dùng để:', options: ['Phủ định', 'Nhấn mạnh "chính là" mà không cần lên giọng', 'Hỏi lại', 'Nêu điều kiện'], a: 1, why: 'Именно этот фактор является определяющим.' },
    { t: 'choice', q: '<span class="ru">Вря́д ли он придёт</span> nghĩa là:', options: ['Chắc chắn anh ấy đến', 'Khó mà anh ấy đến', 'Anh ấy đã đến', 'Anh ấy có đến không?'], a: 1, why: 'Вряд ли / едва ли đều diễn tả khả năng thấp.' },
    { t: 'type', q: 'Điền: Не зна́ю, успе́ю ___ я. (liệu có)', a: 'ли', hint: 'Một tiểu từ hai chữ cái.' },
    { t: 'type', q: 'Điền: ___ бы я знал, я бы сказа́л. (nếu)', a: 'если', alt: ['е́сли'], hint: 'Liên từ điều kiện.' },
    { t: 'match', q: 'Nối:', pairs: [['да́же', 'thậm chí'], ['и́менно', 'chính là'], ['всё-таки', 'dù sao thì'], ['неуже́ли', 'chẳng lẽ']] }
  ]
};

/* ---------------------------------------------------------- BÀI 19 */
LESSON_DATA['b2-19'] = {
  level: 'b2',
  intro: 'Tiếng Nga được tiếng là "trật tự từ tự do". Không đúng hẳn: trật tự <b>không mang thông tin ngữ pháp</b> (vì đã có đuôi cách), nhưng nó mang <b>thông tin về trọng tâm</b>. Đây là chỗ khiến bài viết của người nước ngoài đúng ngữ pháp mà đọc vẫn "lệch".',
  blocks: [
    { t: 'h', text: 'Quy tắc gốc: cái mới đứng cuối' },
    { t: 'p', html: 'Câu tiếng Nga chia làm hai phần: <b>тема</b> (điều đã biết, đứng đầu) và <b>рема</b> (điều mới, đứng cuối). Trọng âm câu rơi vào рема.' },
    { t: 'table', head: ['Câu', 'Trả lời câu hỏi nào'], rows: [
      ['Оанх чита́ет <b>кни́гу</b>.', 'Oanh đang đọc gì?'],
      ['Кни́гу чита́ет <b>Оанх</b>.', 'Ai đọc sách?'],
      ['Оанх <b>чита́ет</b> кни́гу.', 'Oanh làm gì với quyển sách?'],
      ['Чита́ет кни́гу <b>Оанх</b>.', 'Ai là người đọc? (giọng kể)']
    ]},
    { t: 'warn', html: 'Người Việt giữ nguyên trật tự chủ–vị–tân như tiếng mẹ đẻ, nên câu nào cũng nhấn vào tân ngữ. Không sai ngữ pháp, nhưng khi bài viết dài, mọi câu <b>nhấn cùng một chỗ</b> — đọc thấy đều đều và đôi khi trả lời lệch câu hỏi.' },
    { t: 'h', text: 'Chuỗi thông tin — cách văn bản trôi' },
    { t: 'p', html: 'Văn bản mạch lạc nối các câu bằng cách: <b>рема của câu trước thành тема của câu sau</b>.' },
    { t: 'p', html: '<span class="ru">В работе предложена <b>новая модель износа</b>. <b>Эта модель</b> учитывает <b>температурный режим</b>. <b>Температурный режим</b> определяется <b>условиями эксплуатации</b>. <b>Условия эксплуатации</b> в северных регионах существенно отличаются от…</span>' },
    { t: 'tip', html: 'Kỹ thuật này gọi là <b>chuỗi mắt xích</b>. Nó là lý do văn khoa học Nga đọc trôi dù câu dài. Khi rà bản thảo của mình, kiểm tra: mỗi câu có bắt đầu bằng thứ câu trước vừa nói đến không? Nếu không, người đọc phải nhảy — và mỗi lần nhảy là một lần mất mạch.' },
    { t: 'h', text: 'Vị trí thay đổi nghĩa' },
    { t: 'table', head: ['Câu', 'Nghĩa'], rows: [
      ['Он рабо́тает <b>здесь</b> три го́да.', 'Ba năm nay anh ấy làm ở đây (nhấn nơi chốn).'],
      ['Он <b>три го́да</b> рабо́тает здесь.', 'Anh ấy làm ở đây được ba năm rồi (nhấn thời lượng).'],
      ['<b>То́лько</b> он сказа́л э́то.', 'Chỉ mình anh ấy nói điều đó.'],
      ['Он сказа́л <b>то́лько</b> э́то.', 'Anh ấy chỉ nói mỗi điều đó.'],
      ['Он <b>то́лько</b> сказа́л э́то.', 'Anh ấy chỉ nói thôi (chứ không làm).']
    ]},
    { t: 'warn', html: 'Ba câu cuối cho thấy: <span class="ru">то́лько</span>, <span class="ru">да́же</span>, <span class="ru">и́менно</span>, <span class="ru">лишь</span> luôn đứng <b>ngay trước từ chúng nhấn</b>. Đặt sai chỗ là đổi nghĩa hoàn toàn — và đây là lỗi rất khó tự phát hiện.' },
    { t: 'h', text: 'Trật tự trong cụm danh từ' },
    { t: 'table', head: ['Loại', 'Trật tự chuẩn', 'Ví dụ'], rows: [
      ['Tính từ + danh từ', 'tính từ TRƯỚC', 'но́вый ме́тод'],
      ['Nhiều tính từ', 'đánh giá → tính chất → chất liệu/loại', 'но́вый эффекти́вный чи́сленный ме́тод'],
      ['Danh từ + cách 2', 'cách 2 SAU', 'ме́тод расчёта'],
      ['Đảo tính từ ra sau', 'chỉ trong thuật ngữ và văn thơ', 'ста́ль нержаве́ющая (danh mục kỹ thuật)']
    ]},
    { t: 'note', html: 'Dòng cuối đáng chú ý với dân kỹ thuật: trong <b>danh mục, bảng kê, tiêu chuẩn ГОСТ</b>, tính từ bị đảo ra sau danh từ để dễ tra theo vần: <span class="ru">Ста́ль нержаве́ющая</span>, <span class="ru">Подши́пники ка́чения</span>. Trong câu văn bình thường thì không làm thế.' },
    { t: 'h', text: 'Đảo trật tự trong câu vô nhân xưng và tồn tại' },
    { t: 'table', head: ['Câu', 'Ghi chú'], rows: [
      ['В ко́мнате стои́т стол.', 'Tồn tại: nơi chốn trước, vật sau (vật là điều mới)'],
      ['Стол стои́т в ко́мнате.', 'Đã biết có cái bàn, giờ nói nó ở đâu'],
      ['На сла́йде предста́влена схе́ма.', 'Chuẩn khoa học: nơi trước, nội dung sau'],
      ['Существу́ет два подхо́да.', 'Câu tồn tại: động từ trước chủ ngữ'],
      ['Име́ется ряд ограниче́ний.', 'Rất phổ biến trong văn khoa học']
    ]},
    { t: 'tip', html: 'Mẫu <span class="ru">В … предста́влен / приведён / пока́зан…</span> là mẫu chuẩn nhất khi viết về hình, bảng, chương: <span class="ru">В табли́це 2 приведены́ результа́ты</span>. Đừng viết «Результаты приведены в таблице 2» ở lần nhắc đầu tiên — nghe ngược.' },
    { t: 'h', text: 'Trật tự trong câu hỏi' },
    { t: 'table', head: ['Kiểu', 'Trật tự', 'Ví dụ'], rows: [
      ['Có từ hỏi', 'từ hỏi đứng đầu', 'Где вы рабо́таете?'],
      ['Không từ hỏi', 'từ được hỏi lên đầu + ngữ điệu ИК-3', '<b>Вы</b> здесь рабо́таете? / Вы <b>здесь</b> рабо́таете?'],
      ['Hỏi lại ngạc nhiên', 'từ được hỏi lên đầu', '<b>Ты</b> э́то сде́лал?']
    ]},
    { t: 'warn', html: 'Trong câu hỏi không có từ hỏi, <b>ngữ điệu</b> mới là thứ mang câu hỏi, và nó rơi vào từ ở đầu câu. <span class="ru">Вы здесь рабо́таете?</span> với ngữ điệu trên "вы" hỏi "có phải <i>anh</i> làm ở đây không"; với ngữ điệu trên "здесь" thì hỏi "anh làm ở <i>đây</i> à". Trật tự và ngữ điệu đi kèm nhau.' },
    { t: 'h', text: 'Sửa một đoạn bị "lệch trọng tâm"' },
    { t: 'p', html: '<b>Trước:</b> <span class="ru">Мы разработали модель. Температурный режим учитывается моделью. Условия эксплуатации определяют температурный режим. Северные регионы имеют особые условия эксплуатации.</span>' },
    { t: 'p', html: '<b>Sau:</b> <span class="ru">В работе разработана модель износа. Эта модель учитывает температурный режим. Температурный режим определяется условиями эксплуатации. Условия эксплуатации в северных регионах имеют ряд особенностей.</span>' },
    { t: 'table', head: ['Thay đổi', 'Vì sao'], rows: [
      ['«Мы разработали» → «В работе разработана»', 'chuẩn khoa học, xoá chủ thể'],
      ['«Температурный режим учитывается моделью» → «Эта модель учитывает…»', 'nối với câu trước bằng "эта модель"'],
      ['Giữ chuỗi mắt xích ở ba câu sau', 'mỗi câu bắt đầu bằng điều câu trước vừa nêu'],
      ['«Северные регионы имеют…» → «Условия… в северных регионах…»', 'giữ mắt xích thay vì bắt đầu chủ đề mới']
    ]},
    { t: 'tip', html: 'Bài tập rà soát dùng được ngay cho luận văn của em: gạch chân <b>từ đầu tiên</b> của mỗi câu trong một đoạn. Nếu các từ gạch chân không nối được thành một mạch, đoạn đó cần viết lại — dù từng câu đều đúng.' }
  ],
  vocab: [
    { ru: 'поря́док слов', vn: 'trật tự từ' }, { ru: 'те́ма', vn: 'phần đã biết trong câu' },
    { ru: 'ре́ма', vn: 'phần thông tin mới' }, { ru: 'логи́ческое ударе́ние', vn: 'trọng âm logic' },
    { ru: 'инве́рсия', vn: 'phép đảo trật tự' }, { ru: 'существова́ть', vn: 'tồn tại' },
    { ru: 'име́ется', vn: 'có (văn khoa học)' }, { ru: 'предста́влен', vn: 'được trình bày' },
    { ru: 'приведён', vn: 'được nêu ra' }, { ru: 'нержаве́ющая сталь', vn: 'thép không gỉ' },
    { ru: 'подши́пник ка́чения', vn: 'ổ lăn' }, { ru: 'осо́бенность', vn: 'đặc điểm riêng' },
    { ru: 'свя́зность те́кста', vn: 'tính mạch lạc của văn bản' }, { ru: 'лишь', vn: 'chỉ (trang trọng)' }
  ],
  ex: [
    { t: 'choice', q: 'Trong câu tiếng Nga, thông tin mới (рема) đứng ở đâu?', options: ['Đầu câu', 'Cuối câu', 'Giữa câu', 'Không cố định'], a: 1, why: 'Trọng âm câu rơi vào phần cuối — đó là quy tắc gốc của trật tự từ Nga.' },
    { t: 'choice', q: 'Câu <span class="ru">Кни́гу чита́ет Оанх</span> trả lời câu hỏi:', options: ['Oanh đọc gì?', 'Ai đọc sách?', 'Oanh làm gì?', 'Sách ở đâu?'], a: 1, why: 'Оанх ở cuối câu → đó là thông tin mới.' },
    { t: 'choice', q: 'Chuỗi mắt xích trong văn bản nghĩa là:', options: ['Câu nào cũng cùng độ dài', 'Рема câu trước thành тема câu sau', 'Dùng nhiều liên từ', 'Mỗi đoạn một ý'], a: 1, why: 'Đó là lý do văn khoa học Nga đọc trôi dù câu dài.' },
    { t: 'choice', q: '<span class="ru">Он то́лько сказа́л э́то</span> nghĩa là:', options: ['Chỉ mình anh ấy nói', 'Anh ấy chỉ nói mỗi điều đó', 'Anh ấy chỉ nói thôi, chứ không làm', 'Anh ấy vừa mới nói'], a: 2, why: 'Только đứng ngay trước từ nó nhấn — ở đây là động từ сказал.' },
    { t: 'choice', q: 'Trong danh mục kỹ thuật ГОСТ, tính từ đặt ở đâu?', options: ['Trước danh từ như bình thường', 'Sau danh từ, để tra theo vần', 'Bỏ đi', 'Viết hoa'], a: 1, why: 'Сталь нержавеющая, подшипники качения — chỉ trong danh mục, không trong câu văn.' },
    { t: 'choice', q: 'Khi nhắc lần đầu tới một bảng, nên viết:', options: ['Результаты приведены в таблице 2', 'В таблице 2 приведены результаты', 'Таблица 2 имеет результаты', 'Смотри таблицу 2'], a: 1, why: 'Nơi chốn trước, nội dung mới sau — mẫu chuẩn của văn khoa học Nga.' },
    { t: 'choice', q: 'Câu hỏi không có từ hỏi thì cái gì mang ý nghi vấn?', options: ['Dấu chấm hỏi', 'Ngữ điệu ИК-3 rơi vào từ đầu câu', 'Trợ từ ли bắt buộc', 'Đảo động từ lên trước'], a: 1, why: 'Trật tự và ngữ điệu đi kèm nhau.' },
    { t: 'choice', q: 'Cách rà soát mạch lạc một đoạn văn:', options: ['Đếm số câu', 'Gạch chân từ đầu tiên mỗi câu xem có nối thành mạch không', 'Đếm số từ nối', 'Đọc ngược từ cuối'], a: 1, why: 'Nếu không nối được thành mạch thì phải viết lại, dù từng câu đều đúng.' },
    { t: 'type', q: 'Điền: В табли́це 2 ___ результа́ты испыта́ний. (được nêu ra)', a: 'приведены', alt: ['приведены́'], hint: 'Dạng ngắn bị động số nhiều.' },
    { t: 'match', q: 'Nối:', pairs: [['те́ма', 'phần đã biết'], ['ре́ма', 'phần thông tin mới'], ['инве́рсия', 'phép đảo trật tự'], ['име́ется', 'có (văn khoa học)']] }
  ]
};

/* ---------------------------------------------------------- BÀI 20 */
LESSON_DATA['b2-20'] = {
  level: 'b2',
  intro: 'Bài luận (<span class="ru">эссе́</span> hoặc <span class="ru">сочине́ние-рассужде́ние</span>) là phần viết nặng nhất của ТРКИ-2: khoảng <b>300 từ</b>, có luận điểm rõ, có lập luận, có phản biện, trong 60 phút. Bài này cho em một khuôn có thể lắp vào bất kỳ đề nào.',
  blocks: [
    { t: 'h', text: 'Khung năm đoạn' },
    { t: 'table', head: ['Đoạn', 'Việc', 'Số câu', 'Số từ'], rows: [
      ['1. Mở', 'nêu vấn đề + luận điểm của mình', '3–4', '~50'],
      ['2. Lý lẽ 1', 'lý lẽ mạnh nhất + ví dụ', '4–5', '~70'],
      ['3. Lý lẽ 2', 'lý lẽ thứ hai + ví dụ', '4–5', '~70'],
      ['4. Phản biện', 'nêu ý kiến trái chiều rồi bác lại', '3–4', '~60'],
      ['5. Kết', 'khẳng định lại + mở rộng', '2–3', '~50']
    ]},
    { t: 'warn', html: 'Đoạn 4 là đoạn <b>quyết định điểm</b>. Bài chỉ có lý lẽ một chiều bị chấm là "trình bày" chứ không phải "lập luận". Người chấm ТРКИ-2 tìm đúng chỗ này để phân biệt B1 với B2.' },
    { t: 'h', text: 'Đoạn 1 — mở bài' },
    { t: 'table', head: ['Câu', 'Việc', 'Mẫu'], rows: [
      ['1', 'nêu bối cảnh rộng', 'В после́днее вре́мя всё ча́ще обсужда́ется вопро́с о…'],
      ['2', 'thu hẹp vào vấn đề', 'Одни́ счита́ют, что… други́е — что…'],
      ['3', 'nêu lập trường của mình', 'На мой взгляд, … · Я счита́ю, что…'],
      ['4 (tuỳ)', 'báo trước cấu trúc', 'Рассмо́трим два аргуме́нта в по́льзу э́той то́чки зре́ния.']
    ]},
    { t: 'tip', html: 'Đừng mở bài bằng "Từ xa xưa, con người đã…" — kiểu mở bài này ở tiếng Nga cũng bị coi là sáo rỗng như trong tiếng Việt. Câu đầu tiên nên gắn với <b>hiện tại</b> và với <b>tranh cãi đang có</b>.' },
    { t: 'h', text: 'Đoạn thân — công thức bốn câu' },
    { t: 'table', head: ['Câu', 'Việc', 'Mẫu'], rows: [
      ['1', 'nêu lý lẽ', 'Во-пе́рвых, …'],
      ['2', 'giải thích vì sao', 'Де́ло в том, что…'],
      ['3', 'ví dụ hoặc số liệu', 'Наприме́р, … · По да́нным…'],
      ['4', 'chốt lại về luận điểm chính', 'Таки́м о́бразом, …']
    ]},
    { t: 'note', html: 'Câu 4 hay bị bỏ. Nó là chỗ nối lý lẽ trở lại luận điểm — không có nó, đoạn văn thành một mẩu thông tin rời. Người chấm gọi lỗi này là "аргумент не связан с тезисом".' },
    { t: 'h', text: 'Đoạn 4 — phản biện' },
    { t: 'table', head: ['Bước', 'Mẫu câu'], rows: [
      ['Nêu ý kiến trái', 'Проти́вники э́той то́чки зре́ния утвержда́ют, что… · Мо́жно возрази́ть, что…'],
      ['Thừa nhận phần đúng', 'В э́том есть до́ля и́стины. · Отча́сти э́то справедли́во.'],
      ['Bác lại', 'Одна́ко… · Тем не ме́нее… · Вме́сте с тем ну́жно учи́тывать, что…'],
      ['Chốt', 'Поэ́тому да́нный аргуме́нт не представля́ется реша́ющим.']
    ]},
    { t: 'tip', html: 'Bốn bước này chính là công thức phản bác của bài 14, chuyển sang dạng viết. Học một lần dùng được cả hai chỗ: bài luận và phần hỏi đáp bảo vệ.' },
    { t: 'h', text: 'Đoạn 5 — kết' },
    { t: 'table', head: ['Nên', 'Không nên'], rows: [
      ['Khẳng định lại luận điểm bằng lời khác', 'Chép lại nguyên câu ở mở bài'],
      ['Mở ra một hệ quả hoặc câu hỏi tiếp', 'Nêu lý lẽ mới (không kịp phát triển)'],
      ['2–3 câu gọn', 'Kết dài hơn một đoạn thân'],
      ['Giữ giọng trung tính', 'Kêu gọi cảm tính ("Hãy cùng nhau…")']
    ]},
    { t: 'h', text: 'Một bài luận hoàn chỉnh' },
    { t: 'p', html: '<b>Đề:</b> <span class="ru">Ну́жно ли обя́зывать студе́нтов посеща́ть все ле́кции?</span>' },
    { t: 'p', html: '<span class="ru">В последние годы во многих университетах обсуждается вопрос об обязательном посещении лекций. Одни считают, что дисциплина необходима, другие — что взрослый человек должен сам отвечать за своё обучение. На мой взгляд, обязательное посещение приносит больше вреда, чем пользы. Рассмотрим два аргумента в пользу этой точки зрения.</span>' },
    { t: 'p', html: '<span class="ru">Во-первых, присутствие не равно обучению. Дело в том, что студент, пришедший только ради отметки в журнале, чаще всего занимается посторонними делами и не усваивает материал. Например, в нашей группе на обязательных лекциях примерно треть студентов работает за ноутбуками над другими предметами. Таким образом, формальное требование обеспечивает только формальный результат.</span>' },
    { t: 'p', html: '<span class="ru">Во-вторых, обязательное посещение снимает ответственность с преподавателя. Если аудитория заполнена в любом случае, у лектора нет стимула улучшать материал. По данным опросов, курсы со свободным посещением получают в среднем более высокие оценки от студентов — именно потому, что преподаватель вынужден бороться за внимание. Следовательно, свобода выбора работает и на качество преподавания.</span>' },
    { t: 'p', html: '<span class="ru">Противники этой точки зрения утверждают, что без обязательного посещения студенты младших курсов просто перестанут ходить на занятия. В этом есть доля истины: первокурсникам действительно трудно самостоятельно организовать учёбу. Однако эту задачу решает не принуждение, а сопровождение — кураторы, промежуточный контроль, понятная связь между лекцией и экзаменом. Поэтому данный аргумент не представляется решающим.</span>' },
    { t: 'p', html: '<span class="ru">Таким образом, обязательное посещение решает проблему статистики, а не проблему обучения. Университет заинтересован не в заполненных аудиториях, а в подготовленных выпускниках, и добиваться этого следует качеством, а не контролем.</span>' },
    { t: 'table', head: ['Đoạn', 'Kỹ thuật đã dùng'], rows: [
      ['1', 'Bối cảnh hiện tại → hai phía → lập trường → báo cấu trúc'],
      ['2', 'Lý lẽ → giải thích → ví dụ cụ thể → chốt về luận điểm'],
      ['3', 'Lý lẽ → giải thích → số liệu → chốt'],
      ['4', 'Nêu ý trái → thừa nhận phần đúng → "Однако" → chốt'],
      ['5', 'Đối lập hai khái niệm (статистика / обучение), không lặp lại mở bài']
    ]},
    { t: 'note', html: 'Chú ý câu kết cuối cùng: nó không nhắc lại "На мой взгляд" mà đặt một <b>đối lập mới</b> (số liệu đẹp vs người học giỏi). Đó là cách kết mạnh nhất — nói cùng một ý nhưng ở tầm cao hơn.' },
    { t: 'h', text: 'Bảng tự chấm' },
    { t: 'table', head: ['Tiêu chí', 'Đạt khi'], rows: [
      ['Độ dài', '≥ 280 từ'],
      ['Luận điểm', 'nêu rõ trong đoạn 1, không mơ hồ'],
      ['Số lý lẽ', 'ít nhất hai, mỗi lý lẽ có ví dụ'],
      ['Phản biện', 'có đoạn 4 đầy đủ bốn bước'],
      ['Từ nối', 'ít nhất 8 từ nối khác nhau'],
      ['Không có "я думаю" lặp lại', 'đa dạng: на мой взгляд, представляется, следует признать'],
      ['Không khẩu ngữ', 'không có короче, типа, ну'],
      ['Kết', 'không sao chép mở bài']
    ]},
    { t: 'warn', html: 'Tiêu chí về từ nối là chỗ dễ ăn điểm nhất và cũng dễ mất điểm nhất. Bài dùng đi dùng lại "и", "но", "поэтому" bị đánh giá là B1. Hãy đếm: bài mẫu trên có во-первых, во-вторых, дело в том что, например, таким образом, следовательно, однако, поэтому, именно потому что — chín từ nối khác nhau.' },
    { t: 'tip', html: 'Bài tập: lấy đúng đề trên nhưng viết bài <b>bảo vệ quan điểm ngược lại</b>. Cùng một khuôn, cùng số đoạn. Làm được cả hai phía là em đã có khuôn thật sự, chứ không phải học thuộc một bài.' }
  ],
  vocab: [
    { ru: 'эссе́', vn: 'bài luận' }, { ru: 'сочине́ние-рассужде́ние', vn: 'bài văn nghị luận' },
    { ru: 'то́чка зре́ния', vn: 'quan điểm' }, { ru: 'в по́льзу', vn: 'nghiêng về, ủng hộ' },
    { ru: 'проти́вники', vn: 'những người phản đối' }, { ru: 'справедли́во', vn: 'đúng, xác đáng' },
    { ru: 'реша́ющий', vn: 'có tính quyết định' }, { ru: 'посеще́ние', vn: 'việc đi học, có mặt' },
    { ru: 'усва́ивать материа́л', vn: 'tiếp thu bài' }, { ru: 'посторо́нние дела́', vn: 'việc ngoài lề' },
    { ru: 'сти́мул', vn: 'động lực' }, { ru: 'принужде́ние', vn: 'sự cưỡng ép' },
    { ru: 'сопровожде́ние', vn: 'sự đồng hành, hỗ trợ' }, { ru: 'кура́тор', vn: 'giáo viên chủ nhiệm lớp' },
    { ru: 'промежу́точный контро́ль', vn: 'kiểm tra giữa kỳ' }, { ru: 'вы́пускник', vn: 'sinh viên tốt nghiệp' },
    { ru: 'добива́ться', vn: 'đạt được (bằng nỗ lực)' }, { ru: 'заинтересо́ван в', vn: 'quan tâm tới, có lợi ích ở' }
  ],
  ex: [
    { t: 'choice', q: 'Đoạn quyết định điểm trong bài luận ТРКИ-2 là:', options: ['Mở bài', 'Lý lẽ thứ nhất', 'Đoạn phản biện', 'Kết bài'], a: 2, why: 'Bài một chiều bị chấm là "trình bày" chứ không phải "lập luận".' },
    { t: 'choice', q: 'Công thức bốn câu của đoạn thân là:', options: ['Ví dụ → lý lẽ → số liệu → kết', 'Lý lẽ → giải thích → ví dụ → chốt về luận điểm', 'Câu hỏi → trả lời → ví dụ → chuyển ý', 'Trích dẫn → phân tích → so sánh → kết'], a: 1, why: 'Câu 4 hay bị bỏ, và thiếu nó thì "аргумент не связан с тезисом".' },
    { t: 'choice', q: 'Bốn bước của đoạn phản biện:', options: ['Nêu ý trái → bác ngay → ví dụ → kết', 'Nêu ý trái → thừa nhận phần đúng → bác lại → chốt', 'Thừa nhận → im lặng → chuyển ý', 'Đặt câu hỏi → tự trả lời'], a: 1, why: 'Chính là công thức phản bác của bài 14 chuyển sang dạng viết.' },
    { t: 'choice', q: 'Kết bài <b>không nên</b>:', options: ['Khẳng định lại bằng lời khác', 'Nêu lý lẽ mới', 'Mở ra một hệ quả', 'Giữ giọng trung tính'], a: 1, why: 'Lý lẽ mới ở kết bài không kịp phát triển và làm bài mất cân đối.' },
    { t: 'choice', q: 'Mở bài nên bắt đầu bằng:', options: ['"Từ xa xưa, con người đã…"', 'Bối cảnh hiện tại và tranh cãi đang có', 'Một câu trích dẫn danh nhân', 'Định nghĩa từ điển'], a: 1, why: 'Kiểu mở bài "từ xa xưa" bị coi là sáo rỗng trong tiếng Nga cũng như tiếng Việt.' },
    { t: 'choice', q: 'Số từ nối khác nhau nên có trong bài luận B2:', options: ['3–4', 'Ít nhất 8', 'Càng ít càng gọn', '20 trở lên'], a: 1, why: 'Bài chỉ dùng и, но, поэтому bị đánh giá ở mức B1.' },
    { t: 'choice', q: 'Câu kết mạnh nhất là câu:', options: ['Lặp lại luận điểm mở bài', 'Đặt một đối lập mới nói cùng ý ở tầm cao hơn', 'Kêu gọi hành động', 'Đặt câu hỏi bỏ ngỏ'], a: 1, why: '«решает проблему статистики, а не проблему обучения».' },
    { t: 'type', q: 'Điền: Мо́жно ___ , что э́то сли́шком до́рого. (phản đối)', a: 'возразить', alt: ['возрази́ть'], hint: 'Cùng gốc với "возражение".' },
    { t: 'type', q: 'Điền: Рассмо́трим два аргуме́нта в ___ э́той то́чки зре́ния. (ủng hộ)', a: 'пользу', alt: ['по́льзу'], hint: 'в пользу + cách 2.' },
    { t: 'match', q: 'Nối:', pairs: [['то́чка зре́ния', 'quan điểm'], ['принужде́ние', 'sự cưỡng ép'], ['сти́мул', 'động lực'], ['реша́ющий', 'có tính quyết định']] }
  ]
};

/* ---------------------------------------------------------- BÀI 21 */
LESSON_DATA['b2-21'] = {
  level: 'b2',
  intro: 'Dịch Việt–Nga là chỗ mọi thói quen của tiếng mẹ đẻ lộ ra. Tiếng Việt là ngôn ngữ <b>phân tích</b> (nghĩa nằm ở trật tự và hư từ), tiếng Nga là ngôn ngữ <b>tổng hợp</b> (nghĩa nằm ở đuôi từ). Dịch từng chữ giữa hai hệ này gần như luôn ra câu sai.',
  blocks: [
    { t: 'h', text: 'Bảy khác biệt hệ thống' },
    { t: 'table', head: ['Tiếng Việt', 'Tiếng Nga', 'Hệ quả khi dịch'], rows: [
      ['Không biến đổi từ', 'Biến đổi theo cách, giống, số', 'phải chọn cách cho mỗi danh từ'],
      ['Không có giống', 'Ba giống', 'phải chọn đuôi tính từ, động từ quá khứ'],
      ['Không có thể động từ', 'Hai thể', 'phải quyết định quá trình hay kết quả'],
      ['Có từ "là"', 'Không có ở hiện tại', 'bỏ hẳn'],
      ['Có "đã, đang, sẽ"', 'Thì gắn trong động từ', 'không dịch riêng'],
      ['Trật tự cố định', 'Trật tự linh hoạt mang trọng tâm', 'phải nghĩ về trọng tâm'],
      ['Nhiều từ Hán–Việt trang trọng', 'Phân tầng bằng gốc Nga / gốc Slav cổ / từ mượn', 'phải chọn tầng phong cách']
    ]},
    { t: 'h', text: 'Bẫy 1 — dịch "là"' },
    { t: 'table', head: ['Tiếng Việt', 'Dịch sai', 'Đúng'], rows: [
      ['Tôi là sinh viên.', 'Я есть студент ✗', 'Я студент.'],
      ['Mục đích là nghiên cứu…', 'Цель есть исследовать ✗', 'Целью явля́ется иссле́дование…'],
      ['Đó là vấn đề lớn.', 'Это есть большая проблема ✗', 'Э́то больша́я пробле́ма.'],
      ['Anh ấy đã là kỹ sư.', 'Он был есть инженер ✗', 'Он был инжене́ром. (cách 5!)']
    ]},
    { t: 'warn', html: 'Dòng cuối là bẫy kép: khi <span class="ru">быть</span> có mặt (quá khứ hoặc tương lai), danh từ theo sau chuyển sang <b>cách 5</b>: <span class="ru">Он был инжене́ром</span>, <span class="ru">Он бу́дет инжене́ром</span>. Nhưng ở hiện tại (быть vắng mặt) thì là cách 1: <span class="ru">Он инжене́р</span>.' },
    { t: 'h', text: 'Bẫy 2 — dịch "có"' },
    { t: 'table', head: ['Tiếng Việt', 'Tiếng Nga', 'Cấu trúc'], rows: [
      ['Tôi có xe.', 'У меня́ есть маши́на.', 'У + cách 2 + есть + cách 1'],
      ['Trong phòng có bàn.', 'В ко́мнате стои́т стол.', 'động từ cụ thể, không phải "есть"'],
      ['Có nhiều vấn đề.', 'Существу́ет мно́го пробле́м. / Име́ется ряд пробле́м.', 'văn khoa học'],
      ['Bài báo có ba phần.', 'Статья́ состои́т из трёх часте́й.', 'состоять из + cách 2'],
      ['Phương pháp có ưu điểm.', 'Ме́тод облада́ет преиму́ществами.', 'обладать + cách 5'],
      ['Tôi có thời gian.', 'У меня́ есть вре́мя.', '']
    ]},
    { t: 'tip', html: 'Chữ "có" của tiếng Việt phủ lên ít nhất sáu cấu trúc Nga khác nhau. Đây là <b>từ nguy hiểm nhất</b> khi dịch. Mỗi lần gặp "có", đừng dịch từ — hỏi "quan hệ ở đây thật ra là gì: sở hữu, tồn tại, cấu thành, hay tính chất?".' },
    { t: 'h', text: 'Bẫy 3 — động từ tiếng Việt phủ nhiều động từ Nga' },
    { t: 'table', head: ['Việt', 'Các từ Nga', 'Phân biệt'], rows: [
      ['làm', 'де́лать · рабо́тать · занима́ться · изготовля́ть', 'làm việc / làm ra / làm gì đó'],
      ['đi', 'идти́ · ходи́ть · е́хать · е́здить · уезжа́ть', 'bộ / xe, một chiều / lặp'],
      ['học', 'учи́ться · изуча́ть · учи́ть · занима́ться', 'bài 22 của B1'],
      ['nói', 'говори́ть · сказа́ть · разгова́ривать · рассказа́ть', 'chung / một câu / trò chuyện / kể'],
      ['biết', 'знать · уме́ть', 'thông tin / kỹ năng'],
      ['xem', 'смотре́ть · ви́деть · рассма́тривать', 'nhìn / thấy / xem xét (khoa học)'],
      ['nhận', 'получа́ть · принима́ть · признава́ть', 'nhận được / tiếp nhận / thừa nhận']
    ]},
    { t: 'h', text: 'Bẫy 4 — cụm Hán–Việt' },
    { t: 'table', head: ['Việt', 'Dịch máy hay ra', 'Người Nga viết'], rows: [
      ['tiến hành nghiên cứu', 'де́лать иссле́дование', 'проводи́ть иссле́дование'],
      ['đạt kết quả', 'достига́ть результа́т', 'получа́ть результа́ты / достига́ть результа́тов (cách 2)'],
      ['đóng vai trò quan trọng', 'игра́ть ва́жный роль', 'игра́ть ва́жную роль'],
      ['có ý nghĩa lớn', 'име́ть большо́е зна́чение', 'име́ть большо́е значе́ние ✓ (đúng, nhưng chú ý trọng âm)'],
      ['gây ảnh hưởng', 'де́лать влия́ние', 'оказыва́ть влия́ние на + cách 4'],
      ['đưa ra kết luận', 'дава́ть вы́вод', 'де́лать вы́вод / приходи́ть к вы́воду'],
      ['giải quyết vấn đề', 'реша́ть вопро́с', 'реша́ть пробле́му / реша́ть зада́чу']
    ]},
    { t: 'warn', html: 'Đây là nhóm bẫy nguy hiểm nhất vì <b>câu dịch nghe vẫn xuôi</b>. Tiếng Nga có những cặp động từ–danh từ cố định (<span class="ru">проводи́ть иссле́дование</span>, <span class="ru">ока́зывать влия́ние</span>, <span class="ru">принима́ть реше́ние</span>) gọi là <b>коллока́ции</b>. Sai коллокация không sai ngữ pháp, chỉ nghe "không phải tiếng Nga".' },
    { t: 'h', text: 'Bộ коллокации khoa học phải thuộc' },
    { t: 'table', head: ['Cụm Nga', 'Nghĩa'], rows: [
      ['проводи́ть иссле́дование / экспериме́нт', 'tiến hành nghiên cứu / thí nghiệm'],
      ['ока́зывать влия́ние на', 'gây ảnh hưởng tới'],
      ['принима́ть реше́ние', 'ra quyết định'],
      ['де́лать вы́вод', 'rút ra kết luận'],
      ['ста́вить зада́чу / цель', 'đặt ra nhiệm vụ / mục tiêu'],
      ['достига́ть це́ли (cách 2)', 'đạt mục tiêu'],
      ['получа́ть результа́ты', 'thu được kết quả'],
      ['уделя́ть внима́ние (cách 3)', 'dành sự chú ý'],
      ['игра́ть роль', 'đóng vai trò'],
      ['име́ть значе́ние', 'có ý nghĩa'],
      ['представля́ть интере́с', 'có ý nghĩa đáng quan tâm'],
      ['вноси́ть вклад в', 'đóng góp vào'],
      ['приводи́ть к (cách 3)', 'dẫn tới'],
      ['подверга́ться (cách 3)', 'chịu tác động của']
    ]},
    { t: 'tip', html: 'Học <b>cả cụm với giới từ và cách</b>, không học động từ rời. <span class="ru">ока́зывать влия́ние <b>на</b> + cách 4</span>, <span class="ru">приводи́ть <b>к</b> + cách 3</span>, <span class="ru">достига́ть + cách 2</span>. Cụm với cách đúng là đơn vị nhỏ nhất đáng nhớ.' },
    { t: 'h', text: 'Bẫy 5 — dịch quá sát về tình cảm' },
    { t: 'table', head: ['Việt', 'Dịch sát (lệch)', 'Người Nga nói'], rows: [
      ['Em rất mong nhận được hồi âm của thầy.', 'Я о́чень наде́юсь получи́ть Ваш отве́т.', 'Бу́ду благода́рен за отве́т.'],
      ['Kính mong thầy thông cảm.', 'Прошу́ Вас поня́ть меня́.', '(bỏ hẳn câu này)'],
      ['Em xin phép được hỏi ạ.', 'Я прошу́ разреше́ния спроси́ть.', 'Мо́жно вопро́с?'],
      ['Rất hân hạnh được làm quen.', 'Мне о́чень честь познако́миться.', 'О́чень прия́тно.'],
      ['Em xin chân thành cảm ơn thầy.', 'Я и́скренне благодарю́ Вас.', 'Большо́е спаси́бо. / Благодарю́ Вас.']
    ]},
    { t: 'warn', html: 'Mức lịch sự trong tiếng Việt cao hơn tiếng Nga khá nhiều. Dịch sát tất cả các tầng khiêm nhường thành ra câu Nga <b>quá đà</b> — nghe không chân thành, thậm chí nghe như đang mỉa. Nguyên tắc: <b>hạ một bậc</b> so với bản tiếng Việt.' },
    { t: 'h', text: 'Quy trình dịch năm bước' },
    { t: 'table', head: ['Bước', 'Việc'], rows: [
      ['1', 'Đọc cả đoạn, hiểu ý — chưa dịch chữ nào'],
      ['2', 'Xác định phong cách đích: khoa học / hành chính / đời thường'],
      ['3', 'Với mỗi câu, hỏi: chủ thể thật là ai/cái gì?'],
      ['4', 'Chọn коллокация Nga cho mỗi động từ trung tâm'],
      ['5', 'Đọc lại bản Nga <b>không nhìn bản Việt</b> — nếu nghe gợn, sửa']
    ]},
    { t: 'tip', html: 'Bước 5 là phép thử cuối cùng. Bản dịch tốt là bản mà người đọc <b>không đoán ra nó là bản dịch</b>. Nếu đọc lên vẫn thấy "hình bóng tiếng Việt" ở trật tự từ hay ở cách nói vòng, thì phải viết lại chứ không phải sửa từ.' }
  ],
  vocab: [
    { ru: 'перево́д', vn: 'bản dịch' }, { ru: 'перево́дчик', vn: 'người dịch' },
    { ru: 'коллока́ция', vn: 'cụm từ cố định' }, { ru: 'проводи́ть иссле́дование', vn: 'tiến hành nghiên cứu' },
    { ru: 'ока́зывать влия́ние на', vn: 'gây ảnh hưởng tới' }, { ru: 'принима́ть реше́ние', vn: 'ra quyết định' },
    { ru: 'де́лать вы́вод', vn: 'rút ra kết luận' }, { ru: 'ста́вить зада́чу', vn: 'đặt ra nhiệm vụ' },
    { ru: 'достига́ть це́ли', vn: 'đạt mục tiêu' }, { ru: 'уделя́ть внима́ние', vn: 'dành sự chú ý' },
    { ru: 'вноси́ть вклад', vn: 'đóng góp' }, { ru: 'подверга́ться', vn: 'chịu tác động' },
    { ru: 'облада́ть', vn: 'sở hữu, có (tính chất)' }, { ru: 'состоя́ть из', vn: 'gồm có' },
    { ru: 'преиму́щество', vn: 'ưu điểm' }, { ru: 'бу́ду благода́рен за', vn: 'xin cảm ơn trước về' }
  ],
  ex: [
    { t: 'choice', q: '"Anh ấy đã là kỹ sư" dịch đúng là:', options: ['Он был инжене́р', 'Он был инжене́ром', 'Он есть был инжене́р', 'Он инжене́ром был есть'], a: 1, why: 'Khi быть có mặt (quá khứ/tương lai), danh từ theo sau ở cách 5.' },
    { t: 'choice', q: '"Bài báo có ba phần" dịch đúng là:', options: ['Статья́ име́ет три ча́сти', 'Статья́ состои́т из трёх часте́й', 'В статье́ есть три ча́сти', 'Статья́ с тремя́ частя́ми'], a: 1, why: 'Quan hệ ở đây là cấu thành → состоять из + cách 2.' },
    { t: 'choice', q: '"Gây ảnh hưởng tới" là:', options: ['де́лать влия́ние на', 'ока́зывать влия́ние на', 'дава́ть влия́ние к', 'име́ть влия́ние для'], a: 1, why: 'Коллокация cố định: оказывать влияние на + cách 4.' },
    { t: 'choice', q: '<span class="ru">достига́ть</span> đi với cách nào?', options: ['cách 2', 'cách 3', 'cách 4', 'cách 5'], a: 0, why: 'достигать цели, достигать результатов — родительный.' },
    { t: 'choice', q: '<span class="ru">приводи́ть к</span> đi với cách nào?', options: ['cách 2', 'cách 3', 'cách 4', 'cách 6'], a: 1, why: 'приводить к повышению, к снижению — дательный.' },
    { t: 'choice', q: 'Sai <span class="ru">коллока́ция</span> có nghĩa là:', options: ['Sai ngữ pháp', 'Đúng ngữ pháp nhưng nghe "không phải tiếng Nga"', 'Sai chính tả', 'Sai nghĩa hoàn toàn'], a: 1, why: 'Vì thế nhóm bẫy này nguy hiểm nhất — câu dịch nghe vẫn xuôi.' },
    { t: 'choice', q: 'Khi dịch lời lịch sự từ tiếng Việt sang tiếng Nga, nên:', options: ['Dịch sát mọi tầng khiêm nhường', 'Hạ một bậc so với bản tiếng Việt', 'Nâng lên cho trang trọng', 'Bỏ hết phần lịch sự'], a: 1, why: 'Dịch sát ra câu Nga quá đà, nghe không chân thành.' },
    { t: 'choice', q: 'Phép thử cuối cùng của một bản dịch tốt:', options: ['Đối chiếu từng câu với bản gốc', 'Đọc bản Nga mà không nhìn bản Việt xem có nghe gợn không', 'Đếm số từ', 'Kiểm tra chính tả'], a: 1, why: 'Bản dịch tốt là bản người đọc không đoán ra nó là bản dịch.' },
    { t: 'type', q: 'Điền: Ме́тод ___ ря́дом преиму́ществ. (có, sở hữu)', a: 'обладает', alt: ['облада́ет'], hint: 'обладать + cách 5.' },
    { t: 'type', q: 'Điền: ___ иссле́дование в тече́ние двух лет. (tiến hành, quá khứ số nhiều)', a: 'проводили', alt: ['проводи́ли'], hint: 'Коллокация проводить исследование.' },
    { t: 'match', q: 'Nối cụm với nghĩa:', pairs: [['принима́ть реше́ние', 'ra quyết định'], ['уделя́ть внима́ние', 'dành sự chú ý'], ['вноси́ть вклад', 'đóng góp'], ['подверга́ться', 'chịu tác động']] }
  ]
};

/* ---------------------------------------------------------- BÀI 22 */
LESSON_DATA['b2-22'] = {
  level: 'b2',
  intro: 'Dịch Nga–Việt dễ hơn Việt–Nga về ngữ pháp nhưng khó hơn về <b>sắc thái</b>: tiếng Việt có hệ đại từ xưng hô phong phú và hệ từ Hán–Việt song song với từ thuần Việt, nên mỗi câu Nga có hàng chục bản dịch đúng ngữ pháp mà chỉ một hai bản đúng giọng.',
  blocks: [
    { t: 'h', text: 'Vấn đề số một: xưng hô' },
    { t: 'p', html: 'Tiếng Nga chỉ có <span class="ru">ты</span> và <span class="ru">вы</span>. Tiếng Việt có hàng chục cặp. Người dịch <b>phải quyết định</b> quan hệ giữa hai nhân vật — bản gốc không nói.' },
    { t: 'table', head: ['Tình huống Nga', 'Bản dịch Việt hợp lý'], rows: [
      ['Giáo sư nói với nghiên cứu sinh (вы)', 'thầy – anh / thầy – em'],
      ['Hai bạn cùng phòng (ты)', 'cậu – tớ / mày – tao (tuỳ độ thân)'],
      ['Người bán hàng với khách (вы)', 'chị – em / anh – tôi'],
      ['Bố mẹ với con (ты)', 'bố – con'],
      ['Hai nhà khoa học ngang hàng (вы)', 'anh – tôi / ông – tôi'],
      ['Người yêu (ты)', 'anh – em']
    ]},
    { t: 'warn', html: 'Chọn sai cặp xưng hô là <b>đổi cả quan hệ</b> giữa hai nhân vật, dù mọi từ khác dịch đúng. Trước khi dịch một đoạn hội thoại, việc đầu tiên phải làm là quyết định: ai là ai với ai, và họ bao nhiêu tuổi.' },
    { t: 'h', text: 'Vấn đề hai: từ Hán–Việt hay thuần Việt' },
    { t: 'table', head: ['Từ Nga', 'Thuần Việt', 'Hán–Việt', 'Chọn khi'], rows: [
      ['иссле́дование', 'việc tìm hiểu', 'nghiên cứu', 'khoa học → Hán–Việt'],
      ['примене́ние', 'việc dùng', 'ứng dụng', 'khoa học → Hán–Việt'],
      ['нача́ло', 'lúc đầu', 'khởi đầu', 'tuỳ giọng'],
      ['по́мощь', 'sự giúp đỡ', 'sự hỗ trợ', 'đời thường → thuần Việt'],
      ['измене́ние', 'sự thay đổi', 'sự biến đổi', 'kỹ thuật → Hán–Việt'],
      ['возмо́жность', 'khả năng', 'khả năng', 'trùng']
    ]},
    { t: 'tip', html: 'Quy tắc gọn: <b>văn khoa học và hành chính dùng Hán–Việt</b>, <b>hội thoại và văn kể dùng thuần Việt</b>. Bản dịch một cuốn tiểu thuyết mà đầy "tiến hành", "thực hiện", "sự biến đổi" thì nghe như báo cáo.' },
    { t: 'h', text: 'Vấn đề ba: tiểu từ không có tương đương' },
    { t: 'table', head: ['Câu Nga', 'Dịch thô', 'Dịch có hồn'], rows: [
      ['Ты же обеща́л!', 'Cậu đã hứa!', 'Cậu hứa rồi mà!'],
      ['Он ведь то́лько что прие́хал.', 'Anh ấy vừa mới đến.', 'Thì anh ấy vừa mới tới mà.'],
      ['Да ла́дно!', 'Vâng, được rồi!', 'Thôi đi! / Thật á?'],
      ['Ну и что?', 'Vậy và cái gì?', 'Thì đã sao?'],
      ['Вот и всё.', 'Đây và tất cả.', 'Thế thôi.'],
      ['Ещё бы!', 'Còn nữa!', 'Còn phải nói!']
    ]},
    { t: 'note', html: 'Tiếng Việt xử lý sắc thái bằng <b>tiểu từ cuối câu</b>: mà, nhỉ, đấy, thôi, chứ, á, cơ. Đó chính là chỗ để "đổ" nghĩa của же, ведь, -то, уж. Bản dịch không có tiểu từ cuối câu nghe cứng và giả.' },
    { t: 'h', text: 'Vấn đề bốn: câu vô nhân xưng' },
    { t: 'table', head: ['Nga', 'Dịch sát (cứng)', 'Dịch tự nhiên'], rows: [
      ['Мне хо́лодно.', 'Đối với tôi lạnh.', 'Tôi lạnh.'],
      ['Меня́ тошни́т.', 'Tôi bị buồn nôn.', 'Tôi buồn nôn.'],
      ['Здесь не ку́рят.', 'Ở đây người ta không hút thuốc.', 'Ở đây cấm hút thuốc.'],
      ['Установлено, что…', 'Được xác lập rằng…', 'Kết quả cho thấy… / Đã xác định được rằng…'],
      ['Предлага́ется рассмотре́ть…', 'Được đề nghị xem xét…', 'Xin đề xuất xem xét… / Đề xuất xem xét…'],
      ['Сле́дует отме́тить, что…', 'Nên ghi nhận rằng…', 'Cần lưu ý rằng…']
    ]},
    { t: 'warn', html: 'Cấu trúc bị động không chủ thể của tiếng Nga khoa học không nên bê nguyên sang tiếng Việt. Tiếng Việt khoa học chuộng những cách nói như <b>"kết quả cho thấy"</b>, <b>"nghiên cứu đã xác định"</b>, <b>"cần lưu ý"</b> — có chủ thể mờ chứ không hoàn toàn trống.' },
    { t: 'h', text: 'Vấn đề năm: thành ngữ và văn hoá' },
    { t: 'table', head: ['Nga', 'Dịch nghĩa đen', 'Tương đương Việt'], rows: [
      ['Ни пу́ха ни пера́!', 'Không lông không vũ!', 'Chúc may mắn! / Cố lên nhé!'],
      ['Пе́рвый блин ко́мом.', 'Bánh blin đầu vón cục.', 'Vạn sự khởi đầu nan.'],
      ['Ти́ше е́дешь — да́льше бу́дешь.', 'Đi chậm hơn thì xa hơn.', 'Chậm mà chắc.'],
      ['Уста́л как соба́ка.', 'Mệt như chó.', 'Mệt phờ / Mệt bã người.'],
      ['Кот напла́кал.', 'Mèo khóc được bấy nhiêu.', 'Chẳng đáng bao nhiêu.']
    ]},
    { t: 'note', html: 'Nguyên tắc: dịch thành ngữ bằng <b>thành ngữ</b>, không bằng nghĩa đen — trừ khi bản gốc cố tình chơi chữ với hình ảnh, lúc đó phải giữ hình ảnh và thêm chú thích. "Mệt như chó" tuy hiểu được nhưng trong tiếng Việt mang sắc thái thô hơn bản gốc Nga.' },
    { t: 'h', text: 'Một đoạn dịch qua ba bản' },
    { t: 'p', html: '<b>Bản gốc:</b> <span class="ru">— Ну что, Чунг, статью-то сдал? — Почти. Список литературы остался. — О, это ж по ГОСТу надо. Замучаешься. — Да знаю. Ничего, до завтра доделаю.</span>' },
    { t: 'p', html: '<b>Bản 1 — dịch máy:</b> "Vậy thì sao, Trung, bài báo đã nộp chưa? — Gần như. Danh sách tài liệu còn lại. — Ồ, cái này theo GOST là cần thiết. Bạn sẽ bị hành hạ. — Vâng tôi biết. Không có gì, đến ngày mai tôi sẽ hoàn thành."' },
    { t: 'p', html: '<b>Bản 2 — đúng nghĩa nhưng cứng:</b> "Thế nào, Trung, cậu đã nộp bài báo chưa? — Gần xong. Còn danh mục tài liệu. — Ồ, cái đó phải làm theo chuẩn GOST. Sẽ rất mệt đấy. — Tôi biết rồi. Không sao, đến mai tôi sẽ làm xong."' },
    { t: 'p', html: '<b>Bản 3 — tự nhiên:</b> "Sao rồi Trung, nộp bài báo chưa đấy? — Gần xong. Còn mỗi phần tài liệu tham khảo. — Ôi, cái đó phải theo chuẩn GOST đấy. Mệt lắm. — Ừ biết rồi. Không sao, mai là xong thôi."' },
    { t: 'table', head: ['Bản 2 → bản 3', 'Sửa gì'], rows: [
      ['"cậu đã nộp… chưa?" → "nộp… chưa đấy?"', 'thêm tiểu từ cuối câu cho đúng giọng nói'],
      ['"danh mục tài liệu" → "phần tài liệu tham khảo"', 'thêm "mỗi" để dịch sắc thái của "остался"'],
      ['"Sẽ rất mệt đấy" → "Mệt lắm"', 'ngắn hơn, đúng nhịp khẩu ngữ'],
      ['"Tôi biết rồi" → "Ừ biết rồi"', '«Да знаю» có tiểu từ да — dịch thành "ừ"'],
      ['"đến mai tôi sẽ làm xong" → "mai là xong thôi"', 'bỏ chủ ngữ như tiếng Việt nói thật']
    ]},
    { t: 'tip', html: 'Phép thử cho bản dịch hội thoại: <b>đọc to lên</b>. Nếu không có người Việt nào nói câu đó ngoài đời, thì nó chưa xong — dù đúng nghĩa hoàn toàn. Bản dịch tốt là bản mà nhân vật <b>nói như người</b>.' },
    { t: 'h', text: 'Bảng kiểm cuối cùng' },
    { t: 'table', head: ['Câu hỏi', 'Nếu "không" thì'], rows: [
      ['Đã chọn cặp xưng hô nhất quán chưa?', 'quyết định rồi rà lại toàn bài'],
      ['Tầng từ vựng có đúng phong cách không?', 'đổi Hán–Việt ↔ thuần Việt'],
      ['Hội thoại có tiểu từ cuối câu không?', 'thêm mà, nhỉ, đấy, thôi'],
      ['Còn câu nào nghe như dịch không?', 'viết lại cả câu, đừng sửa từ'],
      ['Thuật ngữ đã nhất quán chưa?', 'lập bảng thuật ngữ, dùng một cách gọi duy nhất']
    ]},
    { t: 'warn', html: 'Dòng cuối quan trọng khi dịch tài liệu kỹ thuật dài: một thuật ngữ Nga phải luôn ứng với <b>một</b> từ tiếng Việt trong suốt tài liệu. Dịch <span class="ru">износ</span> lúc là "mài mòn" lúc là "hao mòn" khiến người đọc tưởng đó là hai khái niệm khác nhau.' }
  ],
  vocab: [
    { ru: 'обраще́ние', vn: 'cách xưng hô' }, { ru: 'сти́ль ре́чи', vn: 'phong cách lời nói' },
    { ru: 'отте́нок', vn: 'sắc thái' }, { ru: 'дословный перево́д', vn: 'dịch nghĩa đen' },
    { ru: 'литерату́рный перево́д', vn: 'dịch văn học, dịch thoát' }, { ru: 'терминоло́гия', vn: 'hệ thuật ngữ' },
    { ru: 'после́довательность', vn: 'tính nhất quán' }, { ru: 'сле́дует отме́тить', vn: 'cần lưu ý' },
    { ru: 'предлага́ется', vn: 'xin đề xuất' }, { ru: 'ещё бы', vn: 'còn phải nói' },
    { ru: 'ну и что', vn: 'thì đã sao' }, { ru: 'вот и всё', vn: 'thế thôi' },
    { ru: 'замуча́ться', vn: 'mệt bã người' }, { ru: 'доде́лать', vn: 'làm nốt' }
  ],
  ex: [
    { t: 'choice', q: 'Việc đầu tiên phải làm khi dịch hội thoại Nga sang Việt:', options: ['Tra hết từ mới', 'Quyết định cặp xưng hô — ai là ai với ai', 'Đếm số câu', 'Dịch từ cuối lên'], a: 1, why: 'Bản gốc chỉ có ты/вы; người dịch phải quyết định quan hệ.' },
    { t: 'choice', q: 'Văn khoa học tiếng Việt nên dùng lớp từ nào?', options: ['Thuần Việt', 'Hán–Việt', 'Từ mượn tiếng Anh', 'Không quan trọng'], a: 1, why: 'Hội thoại và văn kể mới dùng thuần Việt.' },
    { t: 'choice', q: 'Sắc thái của tiểu từ Nga (же, ведь) trong tiếng Việt "đổ" vào đâu?', options: ['Trạng từ', 'Tiểu từ cuối câu: mà, nhỉ, đấy, thôi', 'Đại từ', 'Dấu chấm than'], a: 1, why: 'Bản dịch không có tiểu từ cuối câu nghe cứng và giả.' },
    { t: 'choice', q: '<span class="ru">Ну и что?</span> dịch tự nhiên là:', options: ['Vậy và cái gì?', 'Thì đã sao?', 'Cái gì nữa?', 'Sao lại thế?'], a: 1, why: 'Dịch nghĩa đen ra câu vô nghĩa.' },
    { t: 'choice', q: '<span class="ru">Установлено, что…</span> nên dịch là:', options: ['Được xác lập rằng…', 'Kết quả cho thấy… / Đã xác định được rằng…', 'Người ta xác lập rằng…', 'Nó được xác lập'], a: 1, why: 'Tiếng Việt khoa học chuộng chủ thể mờ chứ không hoàn toàn trống.' },
    { t: 'choice', q: 'Thành ngữ nên dịch bằng:', options: ['Nghĩa đen', 'Thành ngữ tương đương', 'Giải thích dài', 'Bỏ qua'], a: 1, why: 'Trừ khi bản gốc cố tình chơi chữ với hình ảnh.' },
    { t: 'choice', q: 'Phép thử cho bản dịch hội thoại:', options: ['Đối chiếu từng từ', 'Đọc to lên xem có người Việt nào nói thế ngoài đời không', 'Đếm số từ', 'Nhờ dịch ngược lại'], a: 1, why: 'Bản dịch tốt là bản mà nhân vật nói như người.' },
    { t: 'choice', q: 'Khi dịch tài liệu kỹ thuật dài, một thuật ngữ Nga phải:', options: ['Dịch đa dạng cho phong phú', 'Luôn ứng với một từ tiếng Việt duy nhất', 'Giữ nguyên tiếng Nga', 'Dịch kèm chú thích mỗi lần'], a: 1, why: 'Lúc "mài mòn" lúc "hao mòn" khiến người đọc tưởng là hai khái niệm.' },
    { t: 'type', q: 'Điền: ___ отме́тить, что да́нные неполны́. (cần lưu ý)', a: 'следует', alt: ['сле́дует'], hint: 'Động từ vô nhân xưng, "nên/cần".' },
    { t: 'match', q: 'Nối:', pairs: [['отте́нок', 'sắc thái'], ['дословный перево́д', 'dịch nghĩa đen'], ['терминоло́гия', 'hệ thuật ngữ'], ['после́довательность', 'tính nhất quán']] }
  ]
};

/* ---------------------------------------------------------- BÀI 23 */
LESSON_DATA['b2-23'] = {
  level: 'b2',
  intro: 'B2 đòi khoảng <b>10 000 từ</b> — gấp đôi B1. Không ai học được 5 000 từ mới bằng cách ngồi thuộc danh sách. Bài này là <b>phương pháp</b>: cách chọn từ nào đáng học, cách học sao cho nhớ, và cách giữ để khỏi rơi.',
  blocks: [
    { t: 'h', text: 'Vốn từ ở các cấp' },
    { t: 'table', head: ['Cấp', 'Số từ chủ động', 'Ý nghĩa thực tế'], rows: [
      ['A1', '~780', 'sống sót trong tình huống quen'],
      ['A2', '~1 300', 'giao tiếp đời thường'],
      ['B1', '~2 300', 'vào đại học Nga'],
      ['B2', '~10 000', 'đọc chuyên ngành, làm việc'],
      ['C1', '~12 000+', 'đọc mọi thứ, viết như người bản xứ']
    ]},
    { t: 'note', html: 'Bước nhảy B1 → B2 là bước nhảy lớn nhất trong cả lộ trình. Nhưng nó không đáng sợ như con số: phần lớn 8 000 từ mới là <b>từ phái sinh</b> từ gốc em đã biết, và <b>thuật ngữ chuyên ngành</b> — chỉ vài trăm từ nhưng lặp đi lặp lại.' },
    { t: 'h', text: 'Chủ động và bị động' },
    { t: 'table', head: ['Loại vốn từ', 'Là gì', 'Cần bao nhiêu ở B2'], rows: [
      ['Chủ động (акти́вный)', 'tự dùng được khi nói và viết', '~4 000'],
      ['Bị động (пасси́вный)', 'hiểu khi gặp, không tự dùng', '~10 000'],
      ['Nhận diện (потенциа́льный)', 'đoán được nhờ gốc và tiền tố', 'không đếm được']
    ]},
    { t: 'tip', html: 'Loại thứ ba là <b>đòn bẩy</b> lớn nhất và bị bỏ quên nhiều nhất. Biết gốc <span class="ru">-уч-</span> (dạy/học) và mười tiền tố là em hiểu được <span class="ru">учи́ть, учи́ться, изуча́ть, обуче́ние, вы́учить, переучи́ться, уче́бник, учени́к, учёный, учёба, нау́чный</span> — mười một từ từ một gốc, không cần học riêng từng từ.' },
    { t: 'h', text: 'Họ từ — cách nhân vốn từ' },
    { t: 'p', html: '<b>Gốc -следова- (theo dõi, đi sau):</b>' },
    { t: 'table', head: ['Từ', 'Nghĩa'], rows: [
      ['сле́довать', 'đi theo, tuân theo, nên (vô nhân xưng)'],
      ['иссле́довать', 'nghiên cứu'],
      ['иссле́дование', 'công trình nghiên cứu'],
      ['иссле́дователь', 'nhà nghiên cứu'],
      ['после́довательность', 'trình tự, tính nhất quán'],
      ['после́дствие', 'hậu quả'],
      ['сле́дствие', 'hệ quả; cuộc điều tra'],
      ['всле́дствие', 'do hậu quả của (giới từ)'],
      ['сле́дующий', 'tiếp theo'],
      ['насле́дство', 'di sản, thừa kế']
    ]},
    { t: 'note', html: 'Mười từ, một gốc. Học riêng thì mất mười lần công; học theo họ thì gốc gánh phần lớn ý nghĩa và tiền tố chỉ ra phần còn lại. Đây là cách xây vốn từ hiệu quả nhất ở cấp B2.' },
    { t: 'h', text: 'Chọn từ nào để học' },
    { t: 'table', head: ['Ưu tiên', 'Loại từ', 'Vì sao'], rows: [
      ['1', 'Từ lặp lại trong 3 bài báo cùng ngành', 'chắc chắn sẽ gặp lại'],
      ['2', 'Коллокации khoa học (bài 21)', 'dùng được ngay khi viết'],
      ['3', 'Từ nối và cấu trúc câu', 'ít từ mà tác dụng lớn'],
      ['4', 'Gốc từ sinh nhiều từ phái sinh', 'một công mười việc'],
      ['5', 'Từ chuyên ngành hẹp', 'cần, nhưng số lượng ít'],
      ['Bỏ qua', 'Từ hiếm, từ cổ, từ chỉ gặp một lần', 'không đáng công nhớ']
    ]},
    { t: 'warn', html: 'Sai lầm phổ biến: đọc một bài văn học rồi cần mẫn học hết mọi từ mới trong đó, kể cả những từ mà cả đời chỉ gặp một lần. Ở B2, <b>tần suất</b> là tiêu chí chọn lọc quan trọng nhất. Từ nào không gặp lại trong ba tháng thì không đáng ở trong bộ thẻ.' },
    { t: 'h', text: 'Cách ghi một từ mới cho đúng' },
    { t: 'table', head: ['Ghi thiếu', 'Ghi đủ'], rows: [
      ['износ — mài mòn', 'изно́с (m., -а) — sự mài mòn · интенси́вность изно́са · износосто́йкость'],
      ['уделять — dành', 'уделя́ть / удели́ть внима́ние <b>чему́</b> (cách 3) — dành sự chú ý cho'],
      ['достигать — đạt', 'достига́ть / дости́чь <b>чего́</b> (cách 2) — đạt được'],
      ['вывод — kết luận', 'вы́вод — kết luận · де́лать вы́вод · приходи́ть к вы́воду']
    ]},
    { t: 'tip', html: 'Bốn thứ bắt buộc ghi cùng mỗi từ: <b>trọng âm</b>, <b>cách/giới từ nó đòi hỏi</b>, <b>một cụm cố định</b>, và với động từ thì <b>cả cặp thể</b>. Thiếu một trong bốn là sau này dùng sai.' },
    { t: 'h', text: 'Lịch ôn — vì sao khoảng cách quan trọng' },
    { t: 'table', head: ['Lần ôn', 'Sau bao lâu'], rows: [
      ['1', 'ngay trong ngày'],
      ['2', 'sau 1 ngày'],
      ['3', 'sau 3 ngày'],
      ['4', 'sau 1 tuần'],
      ['5', 'sau 2 tuần'],
      ['6', 'sau 1 tháng'],
      ['7', 'sau 3 tháng → coi như đã thuộc']
    ]},
    { t: 'note', html: 'Đây chính là thuật toán mà mục <b>Thẻ ghi nhớ</b> của web này chạy: mỗi từ trả lời đúng thì khoảng cách ôn giãn ra, sai thì rút về đầu. Điểm mấu chốt không phải ôn <b>nhiều</b>, mà là ôn <b>đúng lúc sắp quên</b> — đó là lúc trí nhớ được củng cố mạnh nhất.' },
    { t: 'h', text: 'Bốn cách học ngoài thẻ' },
    { t: 'table', head: ['Cách', 'Làm thế nào', 'Mạnh ở chỗ'], rows: [
      ['Đọc rộng', 'mỗi ngày một bài báo, không tra quá 5 từ', 'gặp lại từ trong ngữ cảnh mới'],
      ['Viết dùng từ', 'mỗi tuần một đoạn 150 từ, cố dùng 10 từ mới học', 'chuyển bị động → chủ động'],
      ['Nghe chép', 'bài 16, mỗi tuần 3 đoạn', 'nối âm thanh với mặt chữ'],
      ['Kể lại', 'đọc một bài, gấp lại, kể miệng bằng lời mình', 'ép não truy xuất, không nhận diện']
    ]},
    { t: 'warn', html: 'Cách thứ tư khó chịu nhất và hiệu quả nhất. <b>Nhận ra</b> một từ khi đọc dễ hơn <b>lôi</b> nó ra từ trí nhớ khi nói gấp mười lần. Chỉ có luyện truy xuất mới biến vốn từ bị động thành chủ động — mà đó chính là chỗ B2 khác B1.' },
    { t: 'h', text: 'Kế hoạch một năm' },
    { t: 'table', head: ['Việc mỗi ngày', 'Thời gian', 'Kết quả sau 1 năm'], rows: [
      ['Ôn thẻ ghi nhớ', '15 phút', '~2 500 từ vào bộ nhớ dài hạn'],
      ['Đọc 1 bài báo ngành', '20 phút', '~350 bài, vốn từ chuyên ngành gần như đủ'],
      ['Nghe 10 phút podcast', '10 phút', 'tai quen tốc độ thật'],
      ['Viết 1 đoạn (3 lần/tuần)', '15 phút', '~150 đoạn, khuôn viết thành phản xạ']
    ]},
    { t: 'tip', html: 'Một tiếng mỗi ngày, đều đặn, trong một năm. Đó là toàn bộ bí quyết — không có đường tắt nào khác, và cũng không cần đường tắt nào khác. Điều quyết định không phải cường độ mà là <b>không đứt quãng</b>: bảy ngày mỗi ngày một tiếng hơn hẳn một ngày bảy tiếng.' }
  ],
  vocab: [
    { ru: 'слова́рный запа́с', vn: 'vốn từ vựng' }, { ru: 'акти́вный запа́с', vn: 'vốn từ chủ động' },
    { ru: 'пасси́вный запа́с', vn: 'vốn từ bị động' }, { ru: 'ко́рень сло́ва', vn: 'gốc từ' },
    { ru: 'однокоренны́е слова́', vn: 'các từ cùng gốc' }, { ru: 'приста́вка', vn: 'tiền tố' },
    { ru: 'су́ффикс', vn: 'hậu tố' }, { ru: 'частотность', vn: 'tần suất' },
    { ru: 'повторе́ние', vn: 'việc ôn tập' }, { ru: 'интерва́льное повторе́ние', vn: 'ôn tập ngắt quãng' },
    { ru: 'усва́ивать', vn: 'tiếp thu, hấp thụ' }, { ru: 'воспроизведе́ние', vn: 'sự tái hiện, truy xuất' },
    { ru: 'после́дствие', vn: 'hậu quả' }, { ru: 'сле́дствие', vn: 'hệ quả' },
    { ru: 'насле́дство', vn: 'di sản' }, { ru: 'регуля́рность', vn: 'tính đều đặn' }
  ],
  ex: [
    { t: 'choice', q: 'Bước nhảy lớn nhất về vốn từ trong cả lộ trình là:', options: ['A1 → A2', 'A2 → B1', 'B1 → B2', 'B2 → C1'], a: 2, why: 'Từ ~2 300 lên ~10 000, nhưng phần lớn là từ phái sinh và thuật ngữ lặp lại.' },
    { t: 'choice', q: 'Vốn từ "потенциа́льный" là:', options: ['Từ sẽ học trong tương lai', 'Từ đoán được nhờ gốc và tiền tố', 'Từ đã quên', 'Từ chuyên ngành'], a: 1, why: 'Đây là đòn bẩy lớn nhất và bị bỏ quên nhiều nhất.' },
    { t: 'choice', q: 'Từ <span class="ru">всле́дствие</span> cùng gốc với:', options: ['следовать, исследование, последствие', 'вести, ведомство', 'ставить, поставка', 'дело, деятель'], a: 0, why: 'Gốc -следова-: mười từ từ một gốc.' },
    { t: 'choice', q: 'Tiêu chí chọn lọc quan trọng nhất khi học từ ở B2:', options: ['Từ đẹp', 'Tần suất gặp lại', 'Từ dài', 'Từ trong sách giáo khoa'], a: 1, why: 'Từ không gặp lại trong ba tháng thì không đáng ở trong bộ thẻ.' },
    { t: 'choice', q: 'Bốn thứ bắt buộc ghi cùng mỗi từ mới:', options: ['Nghĩa, ví dụ, hình ảnh, phiên âm', 'Trọng âm, cách/giới từ đòi hỏi, một cụm cố định, cặp thể', 'Từ đồng nghĩa, trái nghĩa, gốc, nguồn', 'Nghĩa Việt, nghĩa Anh, ví dụ, ngày học'], a: 1, why: 'Thiếu một trong bốn là sau này dùng sai.' },
    { t: 'choice', q: 'Nguyên tắc của ôn tập ngắt quãng:', options: ['Ôn càng nhiều lần càng tốt', 'Ôn đúng lúc sắp quên', 'Ôn mỗi ngày một lần mãi mãi', 'Ôn dồn trước kỳ thi'], a: 1, why: 'Đó là lúc trí nhớ được củng cố mạnh nhất.' },
    { t: 'choice', q: 'Cách hiệu quả nhất để biến vốn từ bị động thành chủ động:', options: ['Đọc thêm', 'Kể lại bằng lời mình (ép não truy xuất)', 'Xem phim', 'Tra từ điển kỹ hơn'], a: 1, why: 'Nhận ra từ dễ hơn lôi nó ra từ trí nhớ gấp mười lần.' },
    { t: 'choice', q: 'Điều quyết định trong kế hoạch học một năm:', options: ['Cường độ mỗi buổi', 'Tính không đứt quãng', 'Số sách đã đọc', 'Số giờ tổng cộng'], a: 1, why: 'Bảy ngày mỗi ngày một tiếng hơn hẳn một ngày bảy tiếng.' },
    { t: 'type', q: 'Điền: <span class="ru">однокоренны́е ___ </span> (các từ cùng gốc)', a: 'слова', alt: ['слова́'], hint: 'Số nhiều của слово.' },
    { t: 'match', q: 'Nối:', pairs: [['приста́вка', 'tiền tố'], ['су́ффикс', 'hậu tố'], ['частотность', 'tần suất'], ['воспроизведе́ние', 'sự truy xuất từ trí nhớ']] }
  ]
};

/* ---------------------------------------------------------- BÀI 24 */
LESSON_DATA['b2-24'] = {
  level: 'b2',
  intro: 'ТРКИ-2 là chứng chỉ gắn với <b>bậc thạc sĩ và nghiên cứu sinh</b>: đỗ kỳ này nghĩa là em đủ ngôn ngữ để học sau đại học và làm việc chuyên môn bằng tiếng Nga, trừ các ngành ngữ văn. Bài này nói về cách thi, không nói về tiếng.',
  blocks: [
    { t: 'h', text: 'Năm phần thi và điểm khác so với ТРКИ-1' },
    { t: 'table', head: ['Phần', 'Thời gian', 'Khác gì so với B1'], rows: [
      ['Từ vựng – ngữ pháp', '~90 phút', 'nhiều câu về sắc thái thể, tiểu từ, phong cách'],
      ['Đọc', '~60 phút', 'văn bản dài hơn, có bài chính luận và khoa học'],
      ['Viết', '~60 phút', 'có <b>реферирование</b> — tóm tắt một văn bản'],
      ['Nghe', '~40 phút', 'có phỏng vấn và tranh luận, không chỉ bản tin'],
      ['Nói', '~35 phút', 'có phần <b>tranh luận</b> và trình bày quan điểm dài']
    ]},
    { t: 'warn', html: 'Điểm sàn thường vẫn là <b>66 %</b> mỗi phần, và vẫn không bù chéo. Con số cụ thể khác nhau giữa các trung tâm và đổi theo năm — trước khi đăng ký, em phải xem quy chế trên trang của chính trung tâm định thi, đừng tin con số ở bất kỳ sách luyện thi nào, kể cả bài này.' },
    { t: 'h', text: 'Ba thứ mới mà B1 không có' },
    { t: 'table', head: ['Phần mới', 'Học ở bài nào', 'Sai lầm điển hình'], rows: [
      ['Реферирование', 'Bài 4', 'viết thành реце́нзия — chêm ý kiến riêng vào'],
      ['Phân tầng phong cách', 'Bài 1, 6, 7, 8', 'dùng khẩu ngữ trong bài viết trang trọng'],
      ['Tranh luận có phản biện', 'Bài 14, 20', 'trình bày một chiều, không có đoạn phản biện']
    ]},
    { t: 'h', text: 'Phần 1 — từ vựng và ngữ pháp' },
    { t: 'table', head: ['Dạng câu hỏi hay ra', 'Bài ôn'], rows: [
      ['Chọn thể động từ theo ngữ cảnh tinh tế', 'Bài 17'],
      ['Chọn tiểu từ đúng (же / ведь / -то / ли)', 'Bài 18'],
      ['Chọn từ đồng nghĩa đúng tầng phong cách', 'Bài 1, 8'],
      ['Chọn giới từ ghép + cách', 'Bài 6, 10'],
      ['Chuyển который thành phân từ', 'Bài 10'],
      ['Chuyển chủ động ↔ bị động', 'Bài 9'],
      ['Chọn коллокация đúng', 'Bài 21']
    ]},
    { t: 'tip', html: 'Chiến thuật: làm hai lượt. Lượt một trả lời mọi câu <b>chắc chắn</b>, không dừng quá 30 giây ở câu nào. Lượt hai quay lại câu đã đánh dấu. Ở B2 câu hỏi tinh tế hơn nên cái bẫy lớn nhất là <b>nghĩ quá lâu một câu</b>.' },
    { t: 'h', text: 'Phần 2 — đọc' },
    { t: 'table', head: ['Loại văn bản', 'Chiến lược'], rows: [
      ['Bài báo khoa học', 'аннотация → выводы → câu hỏi → quay lại thân bài (bài 3)'],
      ['Bài chính luận', 'tách sự kiện khỏi đánh giá (bài 7)'],
      ['Văn bản hành chính', 'tìm ai gửi ai, yêu cầu gì, thời hạn nào (bài 6)'],
      ['Đoạn văn học', 'nhân vật, quan hệ, chuyện gì thay đổi']
    ]},
    { t: 'warn', html: 'Bẫy đặc trưng của ТРКИ-2: đáp án đúng <b>không dùng từ nào trùng với bài</b>, còn đáp án sai lại chép nguyên một cụm trong bài. Ở B1 săn từ khoá còn được, ở B2 thì đó chính là cách rơi vào bẫy.' },
    { t: 'h', text: 'Phần 3 — viết' },
    { t: 'table', head: ['Bài', 'Yêu cầu', 'Thời gian nên chia'], rows: [
      ['Реферирование một văn bản', 'tóm tắt ~1/3 độ dài', '30 phút'],
      ['Bài luận có luận điểm', '~250–300 từ', '30 phút']
    ]},
    { t: 'table', head: ['Chia 30 phút cho bài luận', 'Việc'], rows: [
      ['5 phút', 'nghĩ luận điểm + gạch dàn ý năm đoạn'],
      ['20 phút', 'viết liền mạch, không sửa'],
      ['5 phút', 'đọc lại: đuôi cách, hợp giống, từ nối, đủ số từ']
    ]},
    { t: 'tip', html: 'Năm phút lập dàn ý là năm phút <b>tiết kiệm nhất</b> trong cả bài thi. Không có dàn ý, người viết hết ý ở đoạn ba rồi ngồi nhìn giấy — mất nhiều hơn năm phút rất nhiều.' },
    { t: 'h', text: 'Phần 4 — nghe' },
    { t: 'table', head: ['Dạng bài', 'Cách xử lý'], rows: [
      ['Bản tin', 'ghi số và tên riêng ngay khi nghe'],
      ['Phỏng vấn', 'bám câu tóm ý của người dẫn ("То есть Вы хотите сказать…")'],
      ['Tranh luận', 'ghi <b>ai nói gì</b> — đề hay hỏi ai giữ quan điểm nào'],
      ['Bài giảng', 'bám từ tín hiệu (bài 15)']
    ]},
    { t: 'warn', html: 'Trong bài nghe dạng tranh luận, đề bài gần như luôn có câu <b>"Ai cho rằng…?"</b>. Vì thế từ đầu phải ghi hai cột, mỗi người một cột. Nghe hết rồi mới nhớ ai nói gì là không kịp.' },
    { t: 'h', text: 'Phần 5 — nói' },
    { t: 'table', head: ['Phần nhỏ', 'Nội dung', 'Chuẩn bị bằng'], rows: [
      ['Tình huống', 'phản ứng bằng câu phù hợp phong cách', 'Bài 6, 8 — biết chọn tầng'],
      ['Hội thoại', 'đóng vai, đạt được mục đích giao tiếp', 'Bài 13 — hỏi đủ số ý'],
      ['Độc thoại', 'trình bày quan điểm 3–4 phút', 'Bài 20 — khung năm đoạn nói miệng'],
      ['Tranh luận', 'phản bác quan điểm giám khảo đưa ra', 'Bài 14 — công thức ba bước']
    ]},
    { t: 'note', html: 'Phần tranh luận là phần <b>mới hoàn toàn</b> so với B1 và cũng là phần người học sợ nhất. Nhưng nó có công thức: ghi nhận → xoay → bằng chứng. Ba câu là xong một lượt phản bác. Giám khảo tìm đúng cấu trúc đó.' },
    { t: 'h', text: 'Kế hoạch tám tuần' },
    { t: 'table', head: ['Tuần', 'Việc chính'], rows: [
      ['1', 'Làm một đề đầy đủ, chấm thật, xác định phần yếu nhất'],
      ['2–3', 'Dồn vào phần yếu nhất; mỗi ngày một bài реферирование ngắn'],
      ['4', 'Luyện viết: 4 bài luận, mỗi bài đúng 30 phút'],
      ['5', 'Luyện nghe: mỗi ngày một đoạn phỏng vấn + nghe chép'],
      ['6', 'Luyện nói: thu âm 6 bài độc thoại, nghe lại và sửa'],
      ['7', 'Làm đề thứ hai đầy đủ, đúng giờ'],
      ['8', 'Sửa những lỗi lặp lại; giảm cường độ; ngủ đủ']
    ]},
    { t: 'warn', html: 'Tuần 8 giảm cường độ là <b>có chủ ý</b>, không phải lười. Học nhồi tuần cuối không kịp ngấm và làm hỏng phần nghe với phần nói — hai phần phụ thuộc vào sự tỉnh táo nhiều nhất.' },
    { t: 'h', text: 'Ngày thi' },
    { t: 'table', head: ['Việc', 'Ghi chú'], rows: [
      ['Mang hộ chiếu', 'không có giấy tờ là không vào được phòng thi'],
      ['Đến sớm 30 phút', 'thủ tục đăng ký mất thời gian'],
      ['Mang bút mực xanh hoặc đen', 'bút chì thường không được chấp nhận cho phần viết'],
      ['Không mang điện thoại vào phòng', 'bị coi là gian lận'],
      ['Ăn sáng tử tế', 'kỳ thi kéo dài gần trọn một ngày']
    ]},
    { t: 'tip', html: 'Và một điều cuối: ТРКИ-2 <b>không phải kỳ thi đo trí thông minh</b>. Nó đo xem em có làm việc được bằng tiếng Nga hay không. Nếu em đã học xong 28 bài của cấp này và làm đúng kế hoạch tám tuần, em làm việc được rồi — kỳ thi chỉ là chỗ xác nhận điều đó.' }
  ],
  vocab: [
    { ru: 'ТРКИ-2', vn: 'chứng chỉ tiếng Nga bậc 2' }, { ru: 'проходно́й балл', vn: 'điểm sàn' },
    { ru: 'субте́ст', vn: 'phần thi thành phần' }, { ru: 'реферирование', vn: 'phần tóm tắt văn bản' },
    { ru: 'дискуссия', vn: 'tranh luận' }, { ru: 'моноло́г', vn: 'bài nói độc thoại' },
    { ru: 'диало́г', vn: 'hội thoại' }, { ru: 'план', vn: 'dàn ý' },
    { ru: 'че́рновик', vn: 'bản nháp' }, { ru: 'сдава́ть / сдать', vn: 'đi thi / thi đỗ' },
    { ru: 'пересдача', vn: 'thi lại' }, { ru: 'регистра́ция', vn: 'việc đăng ký' },
    { ru: 'удостовере́ние ли́чности', vn: 'giấy tờ tuỳ thân' }, { ru: 'подгото́вка', vn: 'sự chuẩn bị' }
  ],
  ex: [
    { t: 'choice', q: 'Ba thứ mới ở ТРКИ-2 mà B1 không có:', options: ['Nghe, nói, viết', 'Реферирование, phân tầng phong cách, tranh luận có phản biện', 'Ngữ pháp, từ vựng, chính tả', 'Đọc hiểu, dịch, tóm tắt'], a: 1, why: 'Ba phần này quyết định chênh lệch giữa B1 và B2.' },
    { t: 'choice', q: 'Sai lầm điển hình khi làm phần <span class="ru">реферирование</span>:', options: ['Viết quá dài', 'Viết thành реце́нзия — chêm ý kiến riêng vào', 'Chép nguyên bản gốc', 'Bỏ số liệu'], a: 1, why: 'Trong реферат, ý kiến của người viết không có chỗ.' },
    { t: 'choice', q: 'Bẫy đặc trưng của phần đọc ТРКИ-2:', options: ['Bài quá dài', 'Đáp án đúng không trùng từ với bài, đáp án sai chép nguyên cụm trong bài', 'Nhiều thuật ngữ', 'Câu hỏi ở cuối'], a: 1, why: 'Săn từ khoá còn được ở B1, ở B2 đó là cách rơi vào bẫy.' },
    { t: 'choice', q: 'Chia 30 phút cho bài luận nên là:', options: ['30 phút viết liền', '5 dàn ý – 20 viết – 5 đọc lại', '10 nghĩ – 20 viết', '15 viết – 15 sửa'], a: 1, why: 'Năm phút lập dàn ý là năm phút tiết kiệm nhất trong cả bài thi.' },
    { t: 'choice', q: 'Trong bài nghe dạng tranh luận, phải ghi:', options: ['Mọi con số', 'Ai nói gì — hai cột, mỗi người một cột', 'Từ mới', 'Chỉ ý chính'], a: 1, why: 'Đề gần như luôn hỏi "Ai cho rằng…?".' },
    { t: 'choice', q: 'Công thức phản bác trong phần tranh luận:', options: ['Phủ nhận → lý lẽ → kết', 'Ghi nhận → xoay → bằng chứng', 'Hỏi lại → im lặng → trả lời', 'Đồng ý → bỏ qua'], a: 1, why: 'Ba câu là xong một lượt; giám khảo tìm đúng cấu trúc đó.' },
    { t: 'choice', q: 'Vì sao tuần cuối nên giảm cường độ?', options: ['Vì đã học đủ', 'Vì nhồi không kịp ngấm và làm hỏng phần nghe, nói', 'Vì hết tài liệu', 'Vì quy chế yêu cầu'], a: 1, why: 'Nghe và nói phụ thuộc vào sự tỉnh táo nhiều nhất.' },
    { t: 'choice', q: 'Ở phần từ vựng – ngữ pháp, bẫy lớn nhất là:', options: ['Câu hỏi khó', 'Nghĩ quá lâu ở một câu', 'Không đủ từ vựng', 'Đề dài'], a: 1, why: 'Làm hai lượt: lượt một chỉ trả lời câu chắc chắn.' },
    { t: 'type', q: 'Điền: Ка́ждый ___ ну́жно сдать отде́льно. (phần thi thành phần)', a: 'субтест', alt: ['субте́ст'], hint: 'Tiền tố суб- + test.' },
    { t: 'match', q: 'Nối phần thi với bài ôn:', pairs: [['Реферирование', 'bài 4'], ['Tiểu từ же/ведь/-то', 'bài 18'], ['Bài luận có luận điểm', 'bài 20'], ['Tranh luận', 'bài 14']] }
  ]
};

/* ---------------------------------------------------------- BÀI 25 */
LESSON_DATA['b2-25'] = {
  level: 'b2',
  intro: 'Đề thử phần <b>đọc</b> và <b>viết</b> ở mức ТРКИ-2. Làm như thi thật: bấm giờ, không từ điển, không quay lại bài cũ. Đáp án và nhận xét nằm ở cuối — đừng đọc trước.',
  blocks: [
    { t: 'h', text: 'Luật chơi' },
    { t: 'table', head: ['Phần', 'Thời gian', 'Điểm sàn'], rows: [
      ['Đọc — 2 văn bản, 10 câu', '30 phút', '7/10'],
      ['Viết — 1 bài luận 280 từ', '30 phút', 'đủ 5 đoạn, có phản biện']
    ]},
    { t: 'h', text: 'ЧТЕНИЕ — Văn bản 1 (khoa học)' },
    { t: 'p', html: '<span class="ru">Проблема надёжности транспортных средств в условиях низких температур остаётся одной из наиболее острых для северных регионов России. Традиционные методики расчёта ресурса деталей разрабатывались преимущественно для умеренного климата и опираются на допущение о постоянстве вязкостных характеристик смазочных материалов. Между тем в диапазоне ниже −25 °C это допущение перестаёт выполняться.</span>' },
    { t: 'p', html: '<span class="ru">В ходе стендовых испытаний, проведённых на четырёх группах образцов, установлено, что интенсивность изнашивания деталей цилиндропоршневой группы при −40 °C возрастает в среднем на 34 % относительно значений, зафиксированных при +20 °C. При этом рост носит нелинейный характер: до −25 °C изменения незначительны, тогда как в диапазоне от −25 до −40 °C кривая резко идёт вверх.</span>' },
    { t: 'p', html: '<span class="ru">Предложенная авторами уточнённая модель учитывает вязкостно-температурную характеристику масла как переменную величину. Погрешность прогнозирования ресурса снижена с 19 до 8 %. Следует, однако, отметить, что модель разработана при фиксированной частоте вращения коленчатого вала и не учитывает переменных режимов работы двигателя. Учёт этого фактора представляет собой задачу следующего этапа исследования.</span>' },
    { t: 'p', html: '<span class="ru">Полученные результаты могут быть использованы при разработке регламентов технической эксплуатации автотранспорта в районах Крайнего Севера, а также при корректировке действующих нормативов межсервисного пробега.</span>' },
    { t: 'h', text: 'Câu hỏi văn bản 1' },
    { t: 'table', head: ['#', 'Câu hỏi', 'Phương án'], rows: [
      ['1', 'Nhược điểm của các phương pháp tính truyền thống là:', 'a) quá phức tạp · b) giả định độ nhớt không đổi · c) không dùng máy tính · d) đã lỗi thời'],
      ['2', 'Cường độ mài mòn ở −40 °C so với +20 °C:', 'a) tăng 25 % · b) tăng trung bình 34 % · c) giảm 34 % · d) không đổi'],
      ['3', 'Đặc điểm của mức tăng đó là:', 'a) tuyến tính · b) phi tuyến — tăng vọt từ −25 °C · c) ngẫu nhiên · d) giảm dần'],
      ['4', 'Điều tác giả <b>tự thừa nhận</b> là hạn chế:', 'a) mẫu ít · b) mô hình chỉ đúng ở tần số quay cố định · c) sai số còn lớn · d) thiếu tài liệu'],
      ['5', 'Kết quả có thể dùng vào:', 'a) thiết kế động cơ mới · b) xây quy trình vận hành và định mức chạy giữa hai lần bảo dưỡng · c) đào tạo lái xe · d) sản xuất dầu nhớt']
    ]},
    { t: 'h', text: 'ЧТЕНИЕ — Văn bản 2 (chính luận)' },
    { t: 'p', html: '<span class="ru">Каждый год тысячи выпускников российских вузов уезжают работать за рубеж. Явление это не новое, и разговоры о нём идут не первое десятилетие. Что изменилось — так это тон разговоров: раньше об отъезде специалистов говорили как о потере, теперь всё чаще — как о неизбежности.</span>' },
    { t: 'p', html: '<span class="ru">Аргументы сторонников «спокойного отношения» звучат убедительно. Мир открыт, знания не имеют границ, а учёный, работающий в международной лаборатории, приносит пользу науке вообще, а не только той стране, где он получил диплом. Более того, часть уехавших возвращается — с новым опытом, связями и совсем другим уровнем требований к себе.</span>' },
    { t: 'p', html: '<span class="ru">И всё же за этой логикой скрывается неудобный вопрос. Возвращаются, как правило, единицы. И возвращаются туда, где для них есть условия: лаборатория, финансирование, коллеги. Там, где ничего этого нет, отъезд остаётся отъездом — без второй части сюжета.</span>' },
    { t: 'p', html: '<span class="ru">Пожалуй, спорить стоит не о том, уезжать или нет. Спорить стоит о том, ради чего человеку возвращаться. Ответ на этот вопрос дают не призывы, а лаборатории.</span>' },
    { t: 'h', text: 'Câu hỏi văn bản 2' },
    { t: 'table', head: ['#', 'Câu hỏi', 'Phương án'], rows: [
      ['6', 'Điều gì đã thay đổi theo tác giả?', 'a) số người ra đi · b) giọng điệu bàn luận về việc ra đi · c) chính sách nhà nước · d) chất lượng đào tạo'],
      ['7', 'Lý lẽ của phía "bình tĩnh nhìn nhận" là:', 'a) khoa học không biên giới, một phần người đi sẽ trở về · b) không ai đi cả · c) đi là có lỗi · d) cần cấm xuất cảnh'],
      ['8', '"Câu hỏi khó chịu" mà tác giả nêu ra là:', 'a) ai trả tiền đào tạo · b) số người quay về rất ít, và chỉ về nơi có điều kiện · c) vì sao lương thấp · d) ai chịu trách nhiệm'],
      ['9', 'Quan điểm của tác giả gần nhất với:', 'a) phải ngăn người ra đi · b) tranh cãi nên chuyển sang câu hỏi "vì cái gì mà quay về" · c) không có vấn đề gì · d) mọi người nên ở lại'],
      ['10', 'Câu «Ответ дают не призывы, а лаборатории» nghĩa là:', 'a) cần kêu gọi nhiều hơn · b) cần điều kiện làm việc thật, không phải lời hô hào · c) phòng thí nghiệm đắt · d) khoa học quan trọng hơn tuyên truyền']
    ]},
    { t: 'h', text: 'ПИСЬМО — Đề viết' },
    { t: 'p', html: '<b>Đề:</b> <span class="ru">Ну́жно ли госуда́рству обя́зывать выпускнико́в вы́сших уче́бных заведе́ний отраба́тывать не́сколько лет в стране́, е́сли обуче́ние бы́ло беспла́тным?</span> Viết bài luận có luận điểm, <b>ít nhất 280 từ</b>, theo khung năm đoạn của bài 20.' },
    { t: 'table', head: ['Đoạn', 'Phải có', 'Kiểm tra'], rows: [
      ['1', 'bối cảnh + hai phía + lập trường của em', 'luận điểm có rõ không?'],
      ['2', 'lý lẽ 1 + giải thích + ví dụ + chốt', 'có ví dụ cụ thể không?'],
      ['3', 'lý lẽ 2 + giải thích + số liệu/ví dụ + chốt', 'lý lẽ 2 có khác lý lẽ 1 không?'],
      ['4', 'ý kiến trái + thừa nhận + bác lại + chốt', '<b>đoạn quan trọng nhất</b>'],
      ['5', 'khẳng định lại ở tầm cao hơn', 'có lặp lại mở bài không?']
    ]},
    { t: 'h', text: 'Đáp án phần đọc' },
    { t: 'table', head: ['Câu', 'Đáp án', 'Chỗ trong bài'], rows: [
      ['1', 'b — giả định độ nhớt không đổi', '«опира́ются на допуще́ние о постоя́нстве вя́зкостных характери́стик»'],
      ['2', 'b — tăng trung bình 34 %', '«возраста́ет в сре́днем на 34 %»'],
      ['3', 'b — phi tuyến, tăng vọt từ −25 °C', '«рост но́сит нелине́йный хара́ктер… кривая ре́зко идёт вверх»'],
      ['4', 'b — chỉ đúng ở tần số quay cố định', '«Сле́дует, одна́ко, отме́тить…» — tín hiệu của phần tự nêu hạn chế'],
      ['5', 'b — quy trình vận hành + định mức chạy giữa hai lần bảo dưỡng', '«регла́ментов… нормати́вов межсерви́сного пробе́га»'],
      ['6', 'b — giọng điệu bàn luận', '«Что измени́лось — так э́то тон разгово́ров»'],
      ['7', 'a — khoa học không biên giới, một phần sẽ trở về', 'đoạn 2 toàn bộ'],
      ['8', 'b — số quay về rất ít, chỉ về nơi có điều kiện', '«Возвраща́ются, как пра́вило, едини́цы»'],
      ['9', 'b — chuyển tranh cãi sang "vì cái gì mà quay về"', 'đoạn cuối'],
      ['10', 'b — cần điều kiện thật, không phải lời hô hào', 'ẩn dụ đối lập призывы / лаборатории']
    ]},
    { t: 'note', html: 'Câu 4 là câu <b>đặc trưng ТРКИ-2</b>: nó không hỏi nội dung mà hỏi <b>thái độ của tác giả với chính công trình mình</b>. Tín hiệu là cụm <span class="ru">Сле́дует, одна́ко, отме́тить, что…</span> — hễ gặp cụm này là biết đoạn tiếp theo nêu hạn chế.' },
    { t: 'warn', html: 'Câu 9 và 10 kiểm tra kỹ năng của bài 7: <b>tách quan điểm khỏi sự kiện</b>. Tác giả không nói thẳng "tôi cho rằng", nhưng cấu trúc bài (đưa lý lẽ phía kia → «И всё же» → câu hỏi khó → kết bằng ẩn dụ) cho biết ông đứng ở đâu. Đây là chỗ nhiều người trả lời sai vì tìm câu tuyên bố rõ ràng mà không có.' },
    { t: 'h', text: 'Bảng tự chấm bài luận' },
    { t: 'table', head: ['Tiêu chí', 'Đạt', 'Chưa đạt'], rows: [
      ['Số từ', '≥ 280', '< 250 → mất điểm ngay'],
      ['Luận điểm', 'nêu rõ ở đoạn 1', 'phải đọc hết mới đoán ra'],
      ['Đoạn phản biện', 'đủ bốn bước', 'thiếu hẳn → chỉ đạt B1'],
      ['Từ nối khác nhau', '≥ 8', '≤ 4 → đánh giá B1'],
      ['Phong cách', 'không có khẩu ngữ', 'có короче, типа, ну'],
      ['Đa dạng cách nêu ý kiến', 'на мой взгляд / представляется / следует признать', 'lặp "я думаю" 5 lần'],
      ['Kết', 'nói ở tầm cao hơn', 'chép lại mở bài'],
      ['Lỗi cách', '≤ 5 lỗi trong 280 từ', '> 10 lỗi']
    ]},
    { t: 'tip', html: 'Nếu bài của em thiếu đoạn phản biện, đừng sửa vặt — <b>viết lại cả bài</b> với đủ năm đoạn. Đó là khác biệt cấu trúc giữa B1 và B2, không phải khác biệt về từ vựng.' }
  ],
  vocab: [
    { ru: 'допуще́ние', vn: 'giả định' }, { ru: 'постоя́нство', vn: 'tính không đổi' },
    { ru: 'относи́тельно', vn: 'so với' }, { ru: 'носи́ть хара́ктер', vn: 'mang tính chất' },
    { ru: 'незначи́тельный', vn: 'không đáng kể' }, { ru: 'ре́зко', vn: 'đột ngột' },
    { ru: 'переме́нная величина́', vn: 'đại lượng biến thiên' }, { ru: 'нормати́в', vn: 'định mức' },
    { ru: 'межсерви́сный пробе́г', vn: 'quãng chạy giữa hai lần bảo dưỡng' }, { ru: 'Кра́йний Се́вер', vn: 'vùng Cực Bắc' },
    { ru: 'выпускни́к', vn: 'người tốt nghiệp' }, { ru: 'за рубе́ж', vn: 'ra nước ngoài' },
    { ru: 'неизбе́жность', vn: 'điều tất yếu' }, { ru: 'едини́цы', vn: 'chỉ vài người' },
    { ru: 'при́зыв', vn: 'lời kêu gọi' }, { ru: 'отраба́тывать', vn: 'làm việc để hoàn trả' }
  ],
  ex: [
    { t: 'choice', q: 'Nhược điểm của phương pháp tính truyền thống theo văn bản 1:', options: ['Quá phức tạp', 'Giả định độ nhớt không đổi', 'Không dùng máy tính', 'Đã lỗi thời'], a: 1, why: '«опираются на допущение о постоянстве вязкостных характеристик».' },
    { t: 'choice', q: 'Mức tăng mài mòn ở −40 °C có đặc điểm:', options: ['Tuyến tính', 'Phi tuyến, tăng vọt từ −25 °C', 'Ngẫu nhiên', 'Giảm dần'], a: 1, why: '«до −25 °C изменения незначительны, тогда как… кривая резко идёт вверх».' },
    { t: 'choice', q: 'Cụm <span class="ru">Сле́дует, одна́ко, отме́тить, что…</span> báo hiệu:', options: ['Kết luận chính', 'Phần tác giả tự nêu hạn chế', 'Phương pháp', 'Ứng dụng'], a: 1, why: 'Đây là tín hiệu đặc trưng của phần thừa nhận giới hạn trong bài báo Nga.' },
    { t: 'choice', q: 'Theo văn bản 2, điều gì đã thay đổi?', options: ['Số người ra đi', 'Giọng điệu bàn luận về việc ra đi', 'Chính sách nhà nước', 'Chất lượng đào tạo'], a: 1, why: '«Что изменилось — так это тон разговоров».' },
    { t: 'choice', q: '"Câu hỏi khó chịu" mà tác giả nêu là:', options: ['Ai trả tiền đào tạo', 'Người quay về rất ít, và chỉ về nơi có điều kiện', 'Vì sao lương thấp', 'Ai chịu trách nhiệm'], a: 1, why: '«Возвращаются, как правило, единицы».' },
    { t: 'choice', q: '<span class="ru">Отве́т даю́т не при́зывы, а лаборато́рии</span> nghĩa là:', options: ['Cần kêu gọi nhiều hơn', 'Cần điều kiện làm việc thật, không phải lời hô hào', 'Phòng thí nghiệm đắt', 'Khoa học quan trọng hơn tuyên truyền'], a: 1, why: 'Ẩn dụ đối lập призывы / лаборатории ở câu kết.' },
    { t: 'choice', q: 'Vì sao câu hỏi về quan điểm tác giả trong bài chính luận khó?', options: ['Bài quá dài', 'Tác giả không tuyên bố thẳng — phải đọc qua cấu trúc bài', 'Nhiều thuật ngữ', 'Có nhiều số liệu'], a: 1, why: 'Kỹ năng của bài 7: tách quan điểm khỏi sự kiện.' },
    { t: 'choice', q: 'Bài luận thiếu đoạn phản biện sẽ:', options: ['Vẫn đạt B2 nếu ngữ pháp tốt', 'Chỉ được đánh giá ở mức B1', 'Bị trừ 1 điểm', 'Không ảnh hưởng'], a: 1, why: 'Đó là khác biệt cấu trúc giữa B1 và B2, không phải khác biệt từ vựng.' },
    { t: 'type', q: 'Điền: Рост ___ нелине́йный хара́ктер. (mang)', a: 'носит', alt: ['но́сит'], hint: 'носить характер — коллокация cố định.' },
    { t: 'match', q: 'Nối:', pairs: [['допуще́ние', 'giả định'], ['нормати́в', 'định mức'], ['неизбе́жность', 'điều tất yếu'], ['при́зыв', 'lời kêu gọi']] }
  ]
};

/* ---------------------------------------------------------- BÀI 26 */
LESSON_DATA['b2-26'] = {
  level: 'b2',
  intro: 'Đề thử phần <b>nghe</b> và <b>nói</b> ở mức ТРКИ-2. Phần nghe có cả tranh luận — dạng khó nhất, nơi đề bài hỏi <b>ai giữ quan điểm nào</b>. Phần nói có phần tranh luận với giám khảo, thứ B1 hoàn toàn không có.',
  blocks: [
    { t: 'h', text: 'Cách dùng bài này' },
    { t: 'table', head: ['Bước', 'Việc'], rows: [
      ['1', 'Đọc câu hỏi trước — 2 phút'],
      ['2', 'Bấm loa từng câu để nghe, không nhìn phần chữ'],
      ['3', 'Với đoạn tranh luận: <b>kẻ hai cột, mỗi người một cột</b>'],
      ['4', 'Nghe lần hai để xác nhận, rồi mới chọn'],
      ['5', 'Xong mới đọc bản chữ và đáp án']
    ]},
    { t: 'warn', html: 'Giọng đọc máy của trình duyệt đều đặn hơn người thật rất nhiều. Đây là bàn đạp. Sau bài này, nguồn nghe thật của em là podcast và phỏng vấn theo bài 16 — không có cách nào thay thế.' },
    { t: 'h', text: 'АУДИРОВАНИЕ — Đoạn 1: thông báo học vụ' },
    { t: 'p', html: '<span class="ru">Уважаемые аспиранты! Приём документов на конкурс исследовательских грантов продлён до пятнадцатого октября. Заявку необходимо подать через личный кабинет, приложив аннотацию проекта объёмом не более двух страниц и согласие научного руководителя. Обращаем внимание: заявки, поданные на бумаге, в этом году не принимаются. Результаты конкурса будут объявлены до конца ноября.</span>' },
    { t: 'table', head: ['#', 'Câu hỏi', 'Phương án'], rows: [
      ['1', 'Hạn nộp hồ sơ:', 'a) 15/9 · b) 15/10 · c) 15/11 · d) cuối tháng 11'],
      ['2', 'Phải nộp kèm gì?', 'a) bằng tốt nghiệp · b) tóm tắt dự án ≤ 2 trang và văn bản đồng ý của người hướng dẫn · c) danh sách công bố · d) hộ chiếu'],
      ['3', 'Hồ sơ giấy:', 'a) được nhận · b) năm nay không được nhận · c) chỉ nhận khi có lý do · d) nhận sau ngày 15']
    ]},
    { t: 'h', text: 'АУДИРОВАНИЕ — Đoạn 2: tranh luận giữa hai chuyên gia' },
    { t: 'dialog', lines: [
      { who: 'Веду́щий', ru: 'Итак, вопрос: стоит ли обязывать выпускников отрабатывать несколько лет в стране? Ирина Львовна, вы первая.', vn: 'Vậy câu hỏi là: có nên buộc sinh viên tốt nghiệp làm việc vài năm trong nước không? Mời chị Irina Lvovna trước.' },
      { who: 'Ири́на', ru: 'Я считаю, что да. Государство вложило деньги, и это вложение должно вернуться. Речь не о наказании, а об обычном договоре: ты учился бесплатно — отработай три года. Так устроено во многих странах, и это никого не смущает.', vn: 'Tôi cho rằng có. Nhà nước đã bỏ tiền, và khoản đầu tư đó phải quay về. Không phải chuyện trừng phạt, mà là một hợp đồng bình thường: anh học miễn phí — hãy làm việc ba năm. Nhiều nước làm thế và chẳng ai thấy có gì.' },
      { who: 'Серге́й', ru: 'Позволю себе не согласиться. Точнее — согласиться с посылкой, но не с выводом. Да, вложение должно возвращаться. Но принуждение возвращает человека физически, а не профессионально. Специалист, который отбывает срок, не создаёт ничего.', vn: 'Cho phép tôi không đồng ý. Chính xác hơn — đồng ý với tiền đề, nhưng không đồng ý với kết luận. Đúng, đầu tư phải quay về. Nhưng cưỡng ép đưa con người quay về về mặt thể xác, chứ không phải về mặt nghề nghiệp. Một chuyên gia đang "thi hành án" thì không tạo ra được gì.' },
      { who: 'Ири́на', ru: 'Но без обязательства уедут почти все сильные.', vn: 'Nhưng không có ràng buộc thì gần như mọi người giỏi sẽ ra đi.' },
      { who: 'Серге́й', ru: 'Уедут, если здесь нечего делать. И вернутся, если будет что делать. Вопрос не в замке на двери, а в том, что внутри комнаты.', vn: 'Sẽ đi, nếu ở đây không có gì để làm. Và sẽ về, nếu có việc để làm. Vấn đề không nằm ở cái khoá trên cửa, mà ở chỗ trong phòng có gì.' },
      { who: 'Ири́на', ru: 'Красиво сказано. Только комнату кто-то должен построить, а на это нужны те же специалисты.', vn: 'Nói hay đấy. Chỉ có điều ai đó phải xây căn phòng ấy, mà làm việc đó lại cần chính những chuyên gia kia.' },
      { who: 'Серге́й', ru: 'Вот с этим спорить не буду. Тут вы совершенно правы.', vn: 'Chỗ này thì tôi không tranh luận. Ở điểm đó chị hoàn toàn đúng.' }
    ]},
    { t: 'table', head: ['#', 'Câu hỏi', 'Phương án'], rows: [
      ['4', 'Ai ủng hộ nghĩa vụ làm việc bắt buộc?', 'a) Irina · b) Sergey · c) cả hai · d) không ai'],
      ['5', 'Sergey đồng ý với Irina ở điểm nào?', 'a) không đồng ý gì cả · b) đồng ý rằng đầu tư phải quay về · c) đồng ý cần bắt buộc · d) đồng ý cần cấm xuất cảnh'],
      ['6', 'Ẩn dụ "cái khoá trên cửa" của Sergey ám chỉ:', 'a) an ninh · b) biện pháp cưỡng ép · c) học phí · d) hợp đồng lao động'],
      ['7', 'Cuối đoạn, Sergey:', 'a) giữ nguyên toàn bộ lập trường · b) thừa nhận Irina đúng ở một điểm · c) đổi hẳn ý kiến · d) bỏ cuộc tranh luận']
    ]},
    { t: 'h', text: 'АУДИРОВАНИЕ — Đoạn 3: đoạn giảng' },
    { t: 'p', html: '<span class="ru">Обратите внимание на важное различие. Надёжность и долговечность — не одно и то же. Изделие может быть очень надёжным, то есть редко отказывать, но при этом иметь небольшой ресурс. И наоборот: деталь способна работать десятилетиями, но отказывать в самый неподходящий момент. Запишите: надёжность отвечает на вопрос «как часто», долговечность — на вопрос «как долго». Это различие постоянно выносится на экзамен, и путают его почти все.</span>' },
    { t: 'table', head: ['#', 'Câu hỏi', 'Phương án'], rows: [
      ['8', 'Надёжность trả lời câu hỏi:', 'a) как долго · b) как часто · c) сколько стоит · d) где применяется'],
      ['9', 'Sản phẩm có thể vừa rất tin cậy vừa:', 'a) rất bền · b) có tuổi thọ nhỏ · c) rất đắt · d) khó sửa'],
      ['10', 'Giảng viên nói gì về sự phân biệt này?', 'a) không quan trọng · b) hay ra thi và hầu như ai cũng nhầm · c) chỉ dành cho chuyên gia · d) đã bỏ khỏi chương trình']
    ]},
    { t: 'h', text: 'Đáp án phần nghe' },
    { t: 'table', head: ['Câu', 'Đáp án', 'Ghi chú'], rows: [
      ['1', 'b — 15/10', 'Bẫy: cuối tháng 11 là ngày công bố kết quả, không phải hạn nộp'],
      ['2', 'b — tóm tắt ≤ 2 trang + đồng ý của người hướng dẫn', ''],
      ['3', 'b — năm nay không nhận hồ sơ giấy', '«в э́том году́ не принима́ются»'],
      ['4', 'a — Irina', 'Cột hai người là cách duy nhất để không nhầm'],
      ['5', 'b — đồng ý rằng đầu tư phải quay về', '«согласи́ться с посы́лкой, но не с вы́водом»'],
      ['6', 'b — biện pháp cưỡng ép', 'Ẩn dụ: khoá cửa = giữ người bằng ràng buộc'],
      ['7', 'b — thừa nhận Irina đúng ở một điểm', '«Тут вы соверше́нно правы́»'],
      ['8', 'b — как часто', ''],
      ['9', 'b — có tuổi thọ nhỏ', ''],
      ['10', 'b — hay ra thi và hầu như ai cũng nhầm', '«постоя́нно выно́сится на экза́мен»']
    ]},
    { t: 'warn', html: 'Câu 5 là câu <b>khó nhất</b> của cả đề. Nó đòi em bắt được cụm <span class="ru">согласи́ться с посы́лкой, но не с вы́водом</span> — "đồng ý với tiền đề nhưng không đồng ý với kết luận". Đây chính là công thức phản bác ba bước của bài 14, xuất hiện trong lời nói thật. Nghe được nó là dấu hiệu em đã ở B2.' },
    { t: 'h', text: 'ГОВОРЕНИЕ — Phần 1: phản ứng theo phong cách' },
    { t: 'p', html: 'Cùng một nội dung, nói ở <b>hai tầng</b> khác nhau. Đây là dạng bài riêng của ТРКИ-2.' },
    { t: 'table', head: ['Tình huống', 'Với bạn cùng phòng', 'Với trưởng khoa'], rows: [
      ['Xin hoãn nộp bài', 'Слушай, я не успеваю. Можно на пару дней позже?', 'Прошу разрешить перенос срока сдачи в связи с…'],
      ['Từ chối lời mời', 'Не, я сегодня пас, дел куча.', 'К сожалению, не смогу — у меня заседание кафедры.'],
      ['Hỏi lại vì chưa hiểu', 'Чего-чего? Не понял.', 'Извините, не могли бы Вы уточнить?'],
      ['Không đồng ý', 'Да ну, не согласен.', 'Позволю себе не согласиться.'],
      ['Cảm ơn', 'Спасибо, выручил!', 'Благодарю Вас за помощь.']
    ]},
    { t: 'tip', html: 'Giám khảo ТРКИ-2 chấm chính xác chỗ này: em có <b>chọn đúng tầng</b> cho đúng người nghe không. Nói với trưởng khoa bằng giọng bạn bè, hay nói với bạn bằng giọng công văn — cả hai đều bị trừ như nhau.' },
    { t: 'h', text: 'ГОВОРЕНИЕ — Phần 2: độc thoại' },
    { t: 'p', html: '<b>Đề:</b> <span class="ru">Мо́жет ли иску́сственный интелле́кт замени́ть преподава́теля?</span> Nói 3–4 phút theo khung năm đoạn của bài 20.' },
    { t: 'table', head: ['Đoạn', 'Nội dung', 'Thời gian'], rows: [
      ['1', 'Bối cảnh + hai phía + lập trường', '~30 giây'],
      ['2', 'Lý lẽ 1 + ví dụ', '~50 giây'],
      ['3', 'Lý lẽ 2 + ví dụ', '~50 giây'],
      ['4', 'Ý kiến trái + bác lại', '~50 giây'],
      ['5', 'Kết ở tầm cao hơn', '~25 giây']
    ]},
    { t: 'h', text: 'ГОВОРЕНИЕ — Phần 3: tranh luận' },
    { t: 'p', html: 'Giám khảo nêu một quan điểm, em phản bác theo công thức ba bước của bài 14. Ba đề mẫu:' },
    { t: 'table', head: ['Quan điểm giám khảo nêu', 'Gợi ý hướng phản bác'], rows: [
      ['«Учить иностранный язык взрослому бессмысленно — всё равно акцент останется.»', 'Ghi nhận: đúng là giọng khó mất. Xoay: nhưng mục tiêu không phải giọng, mà là giao tiếp. Bằng chứng: phần lớn giao tiếp khoa học quốc tế diễn ra giữa những người có giọng.'],
      ['«Печатные книги скоро исчезнут.»', 'Ghi nhận: doanh số sách giấy có giảm. Xoay: nhưng giảm rồi ổn định. Bằng chứng: sách giấy và sách điện tử phục vụ hai kiểu đọc khác nhau.'],
      ['«Всё, что можно автоматизировать, будет автоматизировано.»', 'Ghi nhận: xu hướng có thật. Xoay: "có thể" khác "có lợi". Bằng chứng: nhiều việc tự động hoá được nhưng chi phí cao hơn người làm.']
    ]},
    { t: 'warn', html: 'Sai lầm thường gặp: đồng ý hoàn toàn với giám khảo. Phần thi này <b>yêu cầu</b> em phản bác — im lặng gật đầu là không có gì để chấm. Kể cả khi em thật sự đồng ý, hãy tìm một khía cạnh để đặt vấn đề: <span class="ru">В це́лом согла́сен, но есть оди́н ню́анс…</span>' },
    { t: 'tip', html: 'Bài tập cuối: thu âm bài độc thoại của mình, nghe lại và tự chấm bốn câu: đủ năm đoạn chưa? có đoạn phản biện chưa? có dừng quá 5 giây lần nào không? có câu nào bỏ dở không? Bốn ô "đạt" là em qua được phần nói.' }
  ],
  vocab: [
    { ru: 'зая́вка', vn: 'đơn đăng ký' }, { ru: 'ли́чный кабине́т', vn: 'tài khoản cá nhân trên hệ thống' },
    { ru: 'согла́сие', vn: 'sự đồng ý (văn bản)' }, { ru: 'продлён', vn: 'đã được gia hạn' },
    { ru: 'вложе́ние', vn: 'khoản đầu tư' }, { ru: 'посы́лка', vn: 'tiền đề (logic)' },
    { ru: 'принужде́ние', vn: 'sự cưỡng ép' }, { ru: 'отбыва́ть срок', vn: 'thi hành án, ở cho hết hạn' },
    { ru: 'замо́к', vn: 'cái khoá' }, { ru: 'долгове́чность', vn: 'độ bền lâu' },
    { ru: 'ресу́рс', vn: 'tuổi thọ' }, { ru: 'неподходя́щий моме́нт', vn: 'lúc không thích hợp' },
    { ru: 'разли́чие', vn: 'sự khác biệt' }, { ru: 'пу́тать', vn: 'nhầm lẫn' },
    { ru: 'вы́ручить', vn: 'cứu giúp (khẩu ngữ)' }, { ru: 'ню́анс', vn: 'sắc thái, khía cạnh nhỏ' }
  ],
  ex: [
    { t: 'choice', q: 'Hạn nộp hồ sơ dự thi cấp kinh phí là:', options: ['15/9', '15/10', '15/11', 'cuối tháng 11'], a: 1, why: 'Cuối tháng 11 là ngày công bố kết quả — bẫy số quen thuộc.' },
    { t: 'choice', q: 'Năm nay hồ sơ giấy:', options: ['Được nhận', 'Không được nhận', 'Nhận nếu có lý do', 'Nhận sau ngày 15'], a: 1, why: '«зая́вки, по́данные на бума́ге, не принима́ются».' },
    { t: 'choice', q: 'Ai ủng hộ nghĩa vụ làm việc bắt buộc sau tốt nghiệp?', options: ['Irina', 'Sergey', 'Cả hai', 'Không ai'], a: 0, why: 'Kẻ hai cột khi nghe tranh luận là cách duy nhất để không nhầm.' },
    { t: 'choice', q: 'Sergey đồng ý với Irina ở điểm nào?', options: ['Không đồng ý gì cả', 'Đồng ý rằng đầu tư phải quay về (đồng ý tiền đề, không đồng ý kết luận)', 'Đồng ý cần bắt buộc', 'Đồng ý cần cấm xuất cảnh'], a: 1, why: '«согласи́ться с посы́лкой, но не с вы́водом» — công thức phản bác của bài 14 trong lời nói thật.' },
    { t: 'choice', q: 'Ẩn dụ "cái khoá trên cửa" ám chỉ:', options: ['An ninh', 'Biện pháp cưỡng ép giữ người', 'Học phí', 'Hợp đồng lao động'], a: 1, why: '«Вопрос не в замке на двери, а в том, что внутри комнаты».' },
    { t: 'choice', q: '<span class="ru">Надёжность</span> trả lời câu hỏi:', options: ['как долго', 'как часто', 'сколько стоит', 'где применяется'], a: 1, why: 'Долговечность mới trả lời "как долго" — chỗ hầu như ai cũng nhầm.' },
    { t: 'choice', q: 'Sản phẩm rất tin cậy vẫn có thể:', options: ['Rất bền', 'Có tuổi thọ nhỏ', 'Rất đắt', 'Khó sửa'], a: 1, why: 'Надёжность và долговечность là hai khái niệm độc lập.' },
    { t: 'choice', q: 'Ở phần thi tranh luận, đồng ý hoàn toàn với giám khảo thì:', options: ['Được điểm cao vì lịch sự', 'Không có gì để chấm — phần thi yêu cầu phản bác', 'Được coi là trung thực', 'Không ảnh hưởng'], a: 1, why: 'Kể cả khi đồng ý, tìm một khía cạnh: «В целом согласен, но есть один нюанс…»' },
    { t: 'choice', q: 'Nói với trưởng khoa "Chỗ này tôi không đồng ý" nên dùng:', options: ['Да ну, не согласен', 'Позволю себе не согласиться', 'Это неверно', 'Вы не правы'], a: 1, why: 'Giám khảo chấm chính xác việc chọn đúng tầng phong cách cho đúng người nghe.' },
    { t: 'type', q: 'Điền: Согла́сен с ___ , но не с вы́водом. (tiền đề)', a: 'посылкой', alt: ['посы́лкой'], hint: 'Cách 5 của посылка.' },
    { t: 'match', q: 'Nối:', pairs: [['зая́вка', 'đơn đăng ký'], ['вложе́ние', 'khoản đầu tư'], ['долгове́чность', 'độ bền lâu'], ['ню́анс', 'khía cạnh nhỏ']] }
  ]
};

/* ---------------------------------------------------------- BÀI 27 */
LESSON_DATA['b2-27'] = {
  level: 'b2',
  intro: 'Đề thử riêng cho <b>реферирование</b> — phần thi mà B1 không có và người học nước ngoài mất điểm nhiều nhất. Bài này cho em một văn bản gốc, một bản tóm tắt mẫu, và một bản tóm tắt <b>có lỗi</b> để em tự tìm ra sai ở đâu.',
  blocks: [
    { t: 'h', text: 'Yêu cầu đề bài' },
    { t: 'table', head: ['Mục', 'Yêu cầu'], rows: [
      ['Độ dài bản gốc', '~450 từ'],
      ['Độ dài bản tóm tắt', '150–200 từ (khoảng 1/3)'],
      ['Thời gian', '40 phút'],
      ['Bắt buộc', 'giữ đủ các khối ý, không sao chép câu, không có ý kiến riêng'],
      ['Bắt buộc', 'dùng ít nhất 5 клише реферирования']
    ]},
    { t: 'h', text: 'ТЕКСТ ДЛЯ РЕФЕРИРОВАНИЯ' },
    { t: 'p', html: '<span class="ru">Вопрос о переходе городского транспорта на электрическую тягу обсуждается в России уже несколько лет, однако единой стратегии до сих пор не выработано. Решения принимаются на уровне отдельных регионов, и результаты этих решений оказываются очень разными.</span>' },
    { t: 'p', html: '<span class="ru">Наиболее очевидные аргументы в пользу электротранспорта известны: снижение выбросов, меньший уровень шума, а также более низкая стоимость эксплуатации по сравнению с дизельной техникой. За последние пять лет число электробусов в крупных российских городах выросло более чем в шесть раз, и этот рост продолжается.</span>' },
    { t: 'p', html: '<span class="ru">Однако практика внедрения выявила несколько проблем, которые на этапе планирования, как правило, недооцениваются. Первая и наиболее очевидная — зарядная инфраструктура. Строительство зарядных станций требует не только средств, но и согласований с энергетическими компаниями, и в большинстве городов число станций растёт заметно медленнее, чем парк машин.</span>' },
    { t: 'p', html: '<span class="ru">Вторая проблема носит климатический характер и особенно остро стоит для Сибири и северных регионов. При температурах ниже −30 °C ёмкость аккумуляторных батарей снижается почти на треть. Это означает, что реальный запас хода зимой существенно меньше паспортного, и маршрутная сеть, рассчитанная по летним показателям, зимой перестаёт работать.</span>' },
    { t: 'p', html: '<span class="ru">Третья проблема связана с обслуживанием. Электробус требует иных компетенций от персонала, чем дизельный автобус, а система подготовки специалистов за темпами закупок не успевает. В ряде городов техника простаивает не из-за поломок, а из-за отсутствия квалифицированных механиков.</span>' },
    { t: 'p', html: '<span class="ru">Ряд исследователей предлагает промежуточные решения. Одно из наиболее обсуждаемых — троллейбусы с автономным ходом, способные двигаться как по контактной сети, так и на батарее. Опыт Санкт-Петербурга и Новосибирска показывает, что такой подход позволяет сократить затраты на инфраструктуру примерно на четверть при сопоставимом экологическом эффекте.</span>' },
    { t: 'p', html: '<span class="ru">Таким образом, вопрос состоит не в том, нужен ли электротранспорт, а в том, при каких условиях его внедрение оказывается оправданным. Ответ на этот вопрос, по мнению большинства специалистов, требует не единого федерального решения, а региональных расчётов, учитывающих климат, плотность маршрутной сети и состояние энергетики.</span>' },
    { t: 'h', text: 'Chia khối ý' },
    { t: 'table', head: ['Khối', 'Đoạn', 'Nội dung'], rows: [
      ['1', '1', 'Chưa có chiến lược chung, quyết định ở cấp vùng'],
      ['2', '2', 'Lý lẽ ủng hộ + mức tăng'],
      ['3', '3–5', 'Ba vấn đề: hạ tầng sạc, khí hậu, nhân lực'],
      ['4', '6', 'Giải pháp trung gian: trolleybus có chế độ chạy pin'],
      ['5', '7', 'Kết luận: câu hỏi là "trong điều kiện nào", cần tính theo vùng']
    ]},
    { t: 'h', text: 'РЕФЕРАТ — bản mẫu' },
    { t: 'p', html: '<span class="ru">Статья посвящена проблеме перехода городского транспорта России на электрическую тягу. В начале статьи автор отмечает отсутствие единой стратегии: решения принимаются на региональном уровне и дают неодинаковые результаты.</span>' },
    { t: 'p', html: '<span class="ru">Далее автор перечисляет преимущества электротранспорта — снижение выбросов и шума, более низкие эксплуатационные расходы — и указывает на быстрый рост парка электробусов за последние годы.</span>' },
    { t: 'p', html: '<span class="ru">Основное внимание уделяется трудностям внедрения. Автор рассматривает три группы проблем: отставание зарядной инфраструктуры от роста парка машин, снижение ёмкости батарей при низких температурах, критичное для северных регионов, и нехватку персонала с необходимой квалификацией.</span>' },
    { t: 'p', html: '<span class="ru">В качестве промежуточного решения автор рассматривает троллейбусы с автономным ходом, отмечая, что этот подход сокращает инфраструктурные затраты при сопоставимом экологическом эффекте.</span>' },
    { t: 'p', html: '<span class="ru">В заключение автор приходит к выводу, что вопрос заключается не в необходимости электротранспорта, а в условиях его оправданного внедрения, и что решение должно основываться на региональных расчётах.</span>' },
    { t: 'table', head: ['Tiêu chí', 'Bản mẫu'], rows: [
      ['Độ dài', '~165 từ trên ~450 → 37 %'],
      ['Số khối ý giữ lại', '5/5'],
      ['Клише dùng', 'посвящена, в начале статьи, далее автор, основное внимание уделяется, в заключение… приходит к выводу — 5 cụm'],
      ['Số liệu', 'bỏ hết (sáu lần, một phần ba, một phần tư) — đúng'],
      ['Địa danh', 'bỏ Sankt-Peterburg, Novosibirsk — đúng'],
      ['Ý kiến riêng', 'không có câu nào']
    ]},
    { t: 'h', text: 'РЕФЕРАТ — bản có lỗi. Em tìm ra bao nhiêu?' },
    { t: 'p', html: '<span class="ru">В этой статье автор хочет рассказать про электробусы. Я считаю, что эта тема очень актуальна для России. Автор пишет, что «единой стратегии до сих пор не выработано» и что решения принимаются на уровне отдельных регионов.</span>' },
    { t: 'p', html: '<span class="ru">За последние пять лет число электробусов выросло более чем в шесть раз. При температурах ниже −30 °C ёмкость батарей снижается почти на треть. В Санкт-Петербурге и Новосибирске используют троллейбусы с автономным ходом, что сокращает затраты примерно на четверть.</span>' },
    { t: 'p', html: '<span class="ru">Мне кажется, автор прав. Электротранспорт — это хорошо, но нужно всё посчитать заранее.</span>' },
    { t: 'h', text: 'Bảy lỗi' },
    { t: 'table', head: ['#', 'Lỗi', 'Chỗ nào'], rows: [
      ['1', 'Nước đôi "хочет рассказать"', 'bài đã viết rồi, không phải đang muốn kể'],
      ['2', 'Ý kiến riêng', '«Я счита́ю, что э́та те́ма о́чень актуа́льна»'],
      ['3', 'Trích nguyên câu bản gốc', '«еди́ной страте́гии до сих пор не вы́работано» trong ngoặc kép'],
      ['4', 'Chỉ liệt kê số liệu, bỏ mất luận điểm', 'đoạn 2 toàn số, không có ý nào'],
      ['5', 'Bỏ sót khối ý', 'không nhắc gì tới vấn đề nhân lực và hạ tầng sạc'],
      ['6', 'Đánh giá tác giả', '«Мне ка́жется, а́втор прав»'],
      ['7', 'Kết bằng ý kiến bản thân', '«Электротранспорт — э́то хорошо́»']
    ]},
    { t: 'warn', html: 'Lỗi 4 là lỗi <b>tinh vi nhất</b>. Đoạn 2 của bản lỗi giữ đúng mọi con số trong bản gốc — nghe như đã tóm tắt cẩn thận. Nhưng nó bỏ mất chính điều bản gốc dùng số liệu ấy để nói: rằng đó là <b>ba vấn đề của việc triển khai</b>. Số liệu không phải nội dung; nó là bằng chứng cho nội dung.' },
    { t: 'h', text: 'Danh sách kiểm trước khi nộp' },
    { t: 'table', head: ['Kiểm', 'Cách kiểm nhanh'], rows: [
      ['Đủ khối ý?', 'đếm đoạn bản gốc, mỗi khối phải có ít nhất một câu'],
      ['Không sao chép?', 'quét tìm dấu ngoặc kép và câu dài giống hệt'],
      ['Không ý kiến riêng?', 'quét tìm "я", "мне кажется", "по-моему", "это хорошо"'],
      ['Đủ клише?', 'đếm: cần ít nhất 5'],
      ['Độ dài?', 'đếm từ, phải trong khoảng 1/3'],
      ['Đứng được một mình?', 'đọc lại bản tóm tắt như thể chưa từng đọc bản gốc']
    ]},
    { t: 'tip', html: 'Mẹo tiết kiệm thời gian trong phòng thi: gạch chân <b>một câu chủ chốt</b> cho mỗi đoạn ngay ở lần đọc đầu. Bản tóm tắt sau đó chỉ là việc viết lại các câu ấy bằng lời mình và nối bằng клише. Bốn mươi phút là đủ nếu làm theo trình tự; không đủ nếu vừa đọc vừa viết.' }
  ],
  vocab: [
    { ru: 'электри́ческая тя́га', vn: 'sức kéo điện' }, { ru: 'вы́работать страте́гию', vn: 'xây dựng chiến lược' },
    { ru: 'вы́бросы', vn: 'khí thải' }, { ru: 'эксплуатацио́нные расхо́ды', vn: 'chi phí vận hành' },
    { ru: 'недооце́нивать', vn: 'đánh giá thấp' }, { ru: 'согласова́ние', vn: 'việc phê duyệt, thống nhất' },
    { ru: 'запа́с хо́да', vn: 'quãng đường chạy được' }, { ru: 'па́спортный', vn: 'theo thông số danh định' },
    { ru: 'маршру́тная сеть', vn: 'mạng lưới tuyến' }, { ru: 'компете́нция', vn: 'năng lực chuyên môn' },
    { ru: 'проста́ивать', vn: 'nằm không, ngừng hoạt động' }, { ru: 'конта́ктная сеть', vn: 'lưới điện tiếp xúc' },
    { ru: 'сопостави́мый', vn: 'tương đương, so sánh được' }, { ru: 'опра́вданный', vn: 'chính đáng, có cơ sở' },
    { ru: 'пло́тность', vn: 'mật độ' }, { ru: 'энерге́тика', vn: 'ngành năng lượng' }
  ],
  ex: [
    { t: 'choice', q: 'Độ dài bản реферат nên bằng khoảng:', options: ['1/10 bản gốc', '1/3 bản gốc', '2/3 bản gốc', 'bằng bản gốc'], a: 1, why: '150–200 từ trên bản gốc ~450 từ.' },
    { t: 'choice', q: 'Bản gốc nêu mấy nhóm vấn đề của việc triển khai?', options: ['Hai', 'Ba', 'Bốn', 'Năm'], a: 1, why: 'Hạ tầng sạc, khí hậu, nhân lực.' },
    { t: 'choice', q: 'Lỗi tinh vi nhất trong bản реферат sai là:', options: ['Trích nguyên câu', 'Chỉ liệt kê số liệu mà bỏ mất luận điểm', 'Viết quá ngắn', 'Sai ngữ pháp'], a: 1, why: 'Số liệu là bằng chứng cho nội dung, không phải nội dung.' },
    { t: 'choice', q: 'Câu <span class="ru">Мне ка́жется, а́втор прав</span> trong реферат:', options: ['Được phép', 'Là lỗi — đó là đánh giá, thuộc реце́нзия', 'Nên đặt ở đầu', 'Chỉ dùng ở kết'], a: 1, why: 'Реферат không có chỗ cho ý kiến riêng.' },
    { t: 'choice', q: 'Trích nguyên một câu bản gốc trong ngoặc kép:', options: ['Là cách làm đúng', 'Là lỗi — реферат phải viết bằng lời mình', 'Được nếu ghi nguồn', 'Chỉ được một lần'], a: 1, why: 'Tiêu chí "không sao chép" là một trong những tiêu chí chấm.' },
    { t: 'choice', q: 'Trình tự làm реферирование trong 40 phút:', options: ['Vừa đọc vừa viết', 'Đọc và gạch một câu chủ chốt mỗi đoạn, rồi viết lại bằng lời mình', 'Dịch sang tiếng Việt trước', 'Chép rồi cắt bớt'], a: 1, why: 'Vừa đọc vừa viết thì 40 phút không đủ.' },
    { t: 'choice', q: 'Kết luận của bản gốc là:', options: ['Không cần xe buýt điện', 'Câu hỏi không phải "có cần không" mà "trong điều kiện nào thì chính đáng"', 'Cần một quyết định liên bang duy nhất', 'Nên chờ công nghệ tốt hơn'], a: 1, why: 'Và cần tính toán theo từng vùng, không phải một quyết định chung.' },
    { t: 'type', q: 'Điền клише: В заключе́ние а́втор ___ к вы́воду, что…', a: 'приходит', alt: ['прихо́дит'], hint: 'приходить к выводу.' },
    { t: 'type', q: 'Điền клише: Осно́вное внима́ние ___ тру́дностям внедре́ния.', a: 'уделяется', alt: ['уделя́ется'], hint: 'уделять внимание, dạng -ся.' },
    { t: 'match', q: 'Nối:', pairs: [['запа́с хо́да', 'quãng đường chạy được'], ['проста́ивать', 'nằm không, ngừng hoạt động'], ['сопостави́мый', 'tương đương'], ['опра́вданный', 'chính đáng, có cơ sở']] }
  ]
};

/* ---------------------------------------------------------- BÀI 28 */
LESSON_DATA['b2-28'] = {
  level: 'b2',
  intro: 'Bài cuối của B2, và cũng là bài cuối của phần nội dung hiện có trên web này. Không có kiến thức mới — đây là <b>bản đồ</b> của 27 bài trước, bảng tự kiểm, và một kế hoạch cho quãng đường sau khi rời khỏi khoá học.',
  blocks: [
    { t: 'h', text: 'Cả cấp B2 trong một bảng' },
    { t: 'table', head: ['Nhóm', 'Bài', 'Cái cốt lõi'], rows: [
      ['Phong cách', '1, 6, 7, 8', 'Khoa học · hành chính · báo chí · khẩu ngữ — nhận ra và viết được'],
      ['Bộ đồ nghề học thuật', '2, 4, 5', '80 клише · реферирование · аннотация'],
      ['Đọc chuyên ngành', '3', 'Giải phẫu bài báo, trình tự đọc, đọc nhan đề chuỗi cách 2'],
      ['Ngữ pháp lõi B2', '9, 10, 17, 18, 19', 'Bị động & danh hoá · câu phức · sắc thái thể · tiểu từ · trật tự từ'],
      ['Từ vựng', '11, 12, 23', 'Kỹ thuật · kinh tế–xã hội · phương pháp xây 10 000 từ'],
      ['Nói học thuật', '13, 14', 'Báo cáo hội thảo · tranh luận và phản biện'],
      ['Nghe', '15, 16', 'Bài giảng và ghi chép · podcast, phỏng vấn'],
      ['Viết', '20', 'Bài luận năm đoạn có phản biện'],
      ['Dịch', '21, 22', 'Việt–Nga: коллокации · Nga–Việt: sắc thái'],
      ['Luyện thi', '24–27', 'Chiến thuật ТРКИ-2 và ba đề thử']
    ]},
    { t: 'h', text: 'Mười điểm phải chắc' },
    { t: 'table', head: ['#', 'Điểm', 'Kiểm tra nhanh'], rows: [
      ['1', 'Bốn phong cách chức năng', 'Cho một đoạn bất kỳ, chỉ ra ngay đó là phong cách nào?'],
      ['2', 'Danh hoá và bị động', 'Chuyển được câu khẩu ngữ thành câu khoa học?'],
      ['3', 'Dạng ngắn bị động hợp giống–số', 'предложен / предложена / предложено / предложены'],
      ['4', 'который và cách rút thành phân từ', 'Biết khi nào KHÔNG rút được?'],
      ['5', 'Sắc thái thể', 'Он не звонил ≠ Он не позвонил'],
      ['6', 'Tiểu từ же, ведь, -то, ли, бы', 'Dùng đúng chỗ, không chỉ hiểu'],
      ['7', 'Trật tự từ và trọng tâm', 'Biết đặt thông tin mới ở cuối câu?'],
      ['8', 'Коллокации khoa học', 'оказывать влияние на, приводить к, достигать + cách đúng'],
      ['9', 'Khung реферирование', 'Năm bước, năm клише?'],
      ['10', 'Khung bài luận năm đoạn', 'Có đoạn phản biện không?']
    ]},
    { t: 'h', text: 'Tự kiểm — em có thật sự ở mức B2 không?' },
    { t: 'table', head: ['Em làm được việc này chưa?', 'Nếu chưa, quay lại bài'], rows: [
      ['Đọc một bài báo khoa học Nga 10 trang trong 20 phút và tóm được ý', '3'],
      ['Viết аннотация sáu câu cho công trình của mình', '5'],
      ['Viết реферат 1/3 độ dài cho một bài báo bất kỳ', '4, 27'],
      ['Viết một заявление hoặc объяснительная đúng khuôn', '6'],
      ['Đọc một bài chính luận và tách được quan điểm khỏi sự kiện', '7'],
      ['Hiểu được một đoạn hội thoại giữa hai sinh viên Nga nói nhanh', '8, 16'],
      ['Chuyển được câu khẩu ngữ thành câu khoa học và ngược lại', '1, 9'],
      ['Trình bày báo cáo 10 phút và trả lời ba câu hỏi', '13'],
      ['Phản bác một quan điểm theo công thức ba bước', '14'],
      ['Ghi chép được một bài giảng đại học ở mức 40 %', '15'],
      ['Viết bài luận 280 từ có đoạn phản biện trong 30 phút', '20, 25'],
      ['Dịch một đoạn kỹ thuật Việt–Nga không lộ dấu vết tiếng Việt', '21']
    ]},
    { t: 'warn', html: 'Nếu quá <b>bốn</b> ô còn "chưa", chưa nên đăng ký ТРКИ-2. B2 không đo vốn từ mà đo <b>khả năng làm việc</b> — mỗi dòng ở trên là một việc thật mà nghiên cứu sinh phải làm được. Quay lại đúng những bài ghi bên cạnh, mỗi bài một buổi.' },
    { t: 'h', text: 'Sau B2 thì đi đâu' },
    { t: 'table', head: ['Hướng', 'Việc cụ thể'], rows: [
      ['Thi ТРКИ-2', 'theo kế hoạch tám tuần ở bài 24'],
      ['Công bố bài báo Nga', 'viết аннотация + bài theo cấu trúc bài 3; nộp tạp chí trong ngành'],
      ['Đọc mỗi ngày', 'một bài báo ngành — việc quan trọng nhất để không tụt'],
      ['Nghe mỗi ngày', '10 phút podcast; mỗi tuần một bài nghe chép'],
      ['Viết mỗi tuần', 'một đoạn 150–300 từ, dùng từ mới học'],
      ['Lên C1', 'khi đã đọc được văn học và báo chí không cần từ điển']
    ]},
    { t: 'note', html: 'Về C1 và C2: hai cấp này không còn là chuyện học <b>tiếng</b> nữa mà là chuyện <b>đọc và sống</b> trong tiếng Nga nhiều năm. Không có giáo trình nào đưa em từ B2 lên C1 — chỉ có vài nghìn trang sách, vài trăm giờ nghe và vài trăm cuộc trò chuyện. Web này dừng ở B2 là dừng đúng chỗ.' },
    { t: 'h', text: 'Ba việc bảo vệ vốn liếng đã có' },
    { t: 'table', head: ['Việc', 'Mất bao lâu', 'Vì sao'], rows: [
      ['Đọc 1 bài báo Nga', '20 phút/ngày', 'giữ vốn từ chuyên ngành và khuôn câu'],
      ['Ôn thẻ ghi nhớ', '15 phút/ngày', 'giữ từ khỏi rơi khỏi bộ nhớ dài hạn'],
      ['Viết hoặc nói 1 đoạn', '15 phút, 3 lần/tuần', 'giữ vốn từ ở trạng thái chủ động']
    ]},
    { t: 'warn', html: 'Sự thật ít người nói: <b>B2 rơi nhanh hơn B1</b>. Vốn từ chuyên ngành và các khuôn câu học thuật chỉ sống nếu được dùng. Nửa năm không đọc, không viết tiếng Nga là quay về B1 — và lấy lại mất nhiều công hơn giữ.' },
    { t: 'h', text: 'Toàn bộ chặng đường' },
    { t: 'table', head: ['Cấp', 'Số bài', 'Mốc'], rows: [
      ['A0', '10', '33 chữ cái, đọc được, chào hỏi'],
      ['A1', '24', 'Sáu cách, ba thì, giao tiếp cơ bản'],
      ['A2', '24', 'Thể động từ, câu phức, sống được ở Nga'],
      ['B1', '28', 'Phân từ, gerund, ТРКИ-1 — vào đại học Nga'],
      ['B2', '28', 'Phong cách, реферирование, ТРКИ-2 — làm việc chuyên môn']
    ]},
    { t: 'p', html: '<span class="ru ru-big">Кто хо́чет — и́щет возмо́жности, кто не хо́чет — и́щет причи́ны.</span>' },
    { t: 'note', html: 'Ai muốn thì tìm cách, ai không muốn thì tìm cớ. Em bắt đầu từ chữ А, đi qua sáu cách, đọc được Chekhov, và giờ viết được аннотация cho công trình của chính mình. 114 bài học. Đường còn dài, nhưng đoạn khó nhất đã ở phía sau.' }
  ],
  vocab: [
    { ru: 'у́ровень владе́ния языко́м', vn: 'trình độ ngôn ngữ' }, { ru: 'закрепи́ть', vn: 'củng cố' },
    { ru: 'утра́тить навы́ки', vn: 'đánh mất kỹ năng' }, { ru: 'подде́рживать у́ровень', vn: 'duy trì trình độ' },
    { ru: 'регуля́рно', vn: 'đều đặn' }, { ru: 'дости́гнутое', vn: 'những gì đã đạt được' },
    { ru: 'публикова́ться', vn: 'công bố bài (của mình)' }, { ru: 'самостоя́тельно', vn: 'tự lực' },
    { ru: 'после́довательно', vn: 'một cách nhất quán, tuần tự' }, { ru: 'возмо́жность', vn: 'cơ hội, khả năng' },
    { ru: 'причи́на', vn: 'nguyên nhân, cái cớ' }, { ru: 'преодоле́ть', vn: 'vượt qua' }
  ],
  ex: [
    { t: 'choice', q: 'Đặc điểm số một của phong cách khoa học Nga:', options: ['Câu dài', 'Danh hoá — biến hành động thành danh từ', 'Nhiều tính từ', 'Dùng thì quá khứ'], a: 1, why: 'Bài 1: Применение метода позволило… — chủ ngữ là danh từ hành động.' },
    { t: 'choice', q: 'Dạng đúng: ___ моде́ль (mô hình đã được đề xuất)', options: ['предложен', 'предложена', 'предложено', 'предложены'], a: 1, why: 'Модель giống cái số ít — bài 5 và 9.' },
    { t: 'choice', q: '<span class="ru">Он не позвони́л</span> mang sắc thái:', options: ['Trung tính', 'Trách móc — đáng lẽ phải gọi', 'Lịch sự', 'Nghi ngờ'], a: 1, why: 'Bài 17: phủ định thể hoàn thành mang sắc thái thất vọng.' },
    { t: 'choice', q: '<span class="ru">приводи́ть к</span> đi với cách nào?', options: ['cách 2', 'cách 3', 'cách 4', 'cách 6'], a: 1, why: 'Коллокация bài 21: приводить к повышению, к снижению.' },
    { t: 'choice', q: 'Trong câu tiếng Nga, thông tin mới đứng ở:', options: ['Đầu câu', 'Cuối câu', 'Giữa câu', 'Không cố định'], a: 1, why: 'Bài 19: рема đứng cuối, trọng âm câu rơi vào đó.' },
    { t: 'choice', q: 'Đoạn quyết định điểm của bài luận ТРКИ-2:', options: ['Mở bài', 'Lý lẽ 1', 'Đoạn phản biện', 'Kết bài'], a: 2, why: 'Bài 20: bài một chiều chỉ được đánh giá ở mức B1.' },
    { t: 'choice', q: 'Trong <span class="ru">рефера́т</span>, ý kiến riêng:', options: ['Bắt buộc phải có', 'Không có chỗ', 'Đặt ở cuối', 'Tuỳ đề bài'], a: 1, why: 'Bài 4 và 27: có ý kiến riêng thì đó là реце́нзия.' },
    { t: 'choice', q: 'Công thức phản bác ba bước là:', options: ['Phủ nhận → lý lẽ → kết', 'Ghi nhận → xoay → bằng chứng', 'Hỏi lại → im lặng → trả lời', 'Đồng ý → bỏ qua'], a: 1, why: 'Bài 14, dùng cả trong tranh luận nói lẫn đoạn phản biện trong bài luận.' },
    { t: 'choice', q: 'Vì sao B2 rơi nhanh hơn B1?', options: ['Vì khó hơn', 'Vì vốn từ chuyên ngành và khuôn học thuật chỉ sống nếu được dùng', 'Vì ít người học', 'Vì không có chứng chỉ'], a: 1, why: 'Nửa năm không đọc, không viết là quay về B1.' },
    { t: 'type', q: 'Điền tục ngữ: Кто хо́чет — и́щет ___ , кто не хо́чет — и́щет причи́ны.', a: 'возможности', alt: ['возмо́жности'], hint: 'Số nhiều của возможность.' },
    { t: 'match', q: 'Nối bài với nội dung:', pairs: [['Bài 4', 'реферирование'], ['Bài 14', 'tranh luận và phản biện'], ['Bài 18', 'tiểu từ же, ведь, -то'], ['Bài 21', 'dịch Việt–Nga và коллокации']] }
  ]
};
