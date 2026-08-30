/* ============================================================
   b1.js — NỘI DUNG CẤP B1 (Trung cấp 1 / ТРКИ-1)
   ============================================================ */

/* ---------------------------------------------------------- BÀI 1 */
LESSON_DATA['b1-01'] = {
  level: 'b1',
  intro: 'Chào mừng em lên B1 — cấp độ mở cửa vào đại học Nga. Bài đầu tiên không dạy gì mới: nó <b>xếp lại</b> toàn bộ sáu cách em đã học rời rạc thành một hệ thống nhìn một lần thấy hết. Đây là bài em sẽ quay lại nhiều lần nhất.',
  blocks: [
    { t: 'h', text: 'Sáu cách, sáu câu hỏi' },
    { t: 'table', head: ['Cách', 'Tên Nga', 'Câu hỏi', 'Việc chính'], rows: [
      ['1', 'имени́тельный', 'кто? что?', 'chủ ngữ'],
      ['2', 'роди́тельный', 'кого́? чего́?', 'sở hữu · phủ định · sau số · sau nhiều giới từ'],
      ['3', 'да́тельный', 'кому́? чему́?', 'người nhận · tuổi · cảm giác'],
      ['4', 'вини́тельный', 'кого́? что?', 'tân ngữ trực tiếp · hướng đi'],
      ['5', 'твори́тельный', 'кем? чем?', 'công cụ · đồng hành · nghề nghiệp'],
      ['6', 'предло́жный', 'о ком? где?', 'nơi chốn · chủ đề (luôn có giới từ)']
    ]},
    { t: 'h', text: 'Bảng đuôi — số ít' },
    { t: 'table', head: ['Cách', 'Đực (стол)', 'Cái -а (шко́ла)', 'Cái -ь (дверь)', 'Trung (окно́)'], rows: [
      ['1', 'стол', 'шко́ла', 'дверь', 'окно́'],
      ['2', 'стол<b>а́</b>', 'шко́л<b>ы</b>', 'две́р<b>и</b>', 'окн<b>а́</b>'],
      ['3', 'стол<b>у́</b>', 'шко́л<b>е</b>', 'две́р<b>и</b>', 'окн<b>у́</b>'],
      ['4', 'стол <span class="muted">(=1)</span>', 'шко́л<b>у</b>', 'дверь', 'окно́'],
      ['5', 'стол<b>о́м</b>', 'шко́л<b>ой</b>', 'две́р<b>ью</b>', 'окн<b>о́м</b>'],
      ['6', 'о стол<b>е́</b>', 'о шко́л<b>е</b>', 'о две́р<b>и</b>', 'об окн<b>е́</b>']
    ]},
    { t: 'h', text: 'Bảng đuôi — số nhiều' },
    { t: 'table', head: ['Cách', 'Đực', 'Cái', 'Trung'], rows: [
      ['1', 'стол<b>ы́</b>', 'шко́л<b>ы</b>', 'о́кн<b>а</b>'],
      ['2', 'стол<b>о́в</b>', 'школ <span class="muted">(bỏ đuôi)</span>', 'о́кон'],
      ['3', 'стол<b>а́м</b>', 'шко́л<b>ам</b>', 'о́кн<b>ам</b>'],
      ['4', '=1 (vật) / =2 (người)', '=1 / =2', '=1'],
      ['5', 'стол<b>а́ми</b>', 'шко́л<b>ами</b>', 'о́кн<b>ами</b>'],
      ['6', 'о стол<b>а́х</b>', 'о шко́л<b>ах</b>', 'об о́кн<b>ах</b>']
    ]},
    { t: 'tip', html: 'Nhìn hai bảng cho kỹ sẽ thấy số nhiều <b>gọn hơn số ít rất nhiều</b>: cách 3 luôn <b>-ам/-ям</b>, cách 5 luôn <b>-ами/-ями</b>, cách 6 luôn <b>-ах/-ях</b> — không phân biệt giống. Chỉ cách 2 là còn rắc rối.' },
    { t: 'h', text: 'Giới từ đi với cách nào' },
    { t: 'table', head: ['Cách', 'Giới từ'], rows: [
      ['2', 'без · для · до · из · от · у · о́коло · по́сле · кро́ме · вме́сто · про́тив · вокру́г'],
      ['3', 'к · по'],
      ['4', 'в · на <span class="muted">(куда́?)</span> · за · под <span class="muted">(куда́?)</span> · че́рез · про'],
      ['5', 'с · над · под <span class="muted">(где?)</span> · пе́ред · ме́жду · за <span class="muted">(где?)</span>'],
      ['6', 'в · на <span class="muted">(где?)</span> · о · при']
    ]},
    { t: 'warn', html: 'Ba giới từ <b>đổi cách theo nghĩa</b>, và đây là chỗ rất hay sai:<br>• <span class="ru">в / на</span> + cách 4 = <b>đi đâu</b> · + cách 6 = <b>ở đâu</b><br>• <span class="ru">за / под</span> + cách 4 = <b>di chuyển tới</b> · + cách 5 = <b>đứng yên ở</b><br>Ví dụ: <span class="ru">Кот идёт под стол</span> (chui xuống gầm bàn) ↔ <span class="ru">Кот спит под столо́м</span> (đang ngủ dưới gầm bàn).' },
    { t: 'h', text: 'Cách nhận ra cách nào khi đọc' },
    { t: 'p', html: 'Khi gặp một câu lạ, đừng dịch từng chữ. Hỏi ba câu theo thứ tự:' },
    { t: 'table', head: ['Bước', 'Câu hỏi', 'Kết quả'], rows: [
      ['1', 'Động từ chính là gì?', 'Biết động từ là biết nó đòi cách nào'],
      ['2', 'Có giới từ nào không?', 'Giới từ quyết định cách của từ ngay sau nó'],
      ['3', 'Đuôi của danh từ là gì?', 'Đối chiếu bảng, ra vai trò của từ đó']
    ]},
    { t: 'note', html: 'Ba bước này nghe chậm nhưng làm vài chục lần thì thành phản xạ, và lúc đó em đọc được câu tiếng Nga dài mà không cần dịch. Đó chính là bước nhảy giữa A2 và B1.' }
  ],
  vocab: [
    { ru: 'паде́ж', vn: 'cách (ngữ pháp)' }, { ru: 'оконча́ние', vn: 'đuôi từ' },
    { ru: 'предло́г', vn: 'giới từ' }, { ru: 'существи́тельное', vn: 'danh từ' },
    { ru: 'вме́сто', vn: 'thay vì' }, { ru: 'про́тив', vn: 'chống lại, đối diện' },
    { ru: 'вокру́г', vn: 'xung quanh' }, { ru: 'пе́ред', vn: 'trước (vị trí)' },
    { ru: 'ме́жду', vn: 'giữa' }, { ru: 'при', vn: 'khi, dưới thời, cạnh' }
  ],
  ex: [
    { t: 'choice', q: 'Ở <b>số nhiều</b>, cách 6 luôn có đuôi:', options: ['-ам / -ям', '-ами / -ями', '-ах / -ях', '-ов / -ев'], a: 2, why: 'Số nhiều gọn hơn số ít: cách 3 là -ам, cách 5 là -ами, cách 6 là -ах — không phân biệt giống.' },
    { t: 'choice', q: '<span class="ru ru-big">Кот спит под столо́м</span> — từ <span class="ru">столо́м</span> ở cách nào?', options: ['Cách 2', 'Cách 4', 'Cách 5', 'Cách 6'], a: 2, why: 'под + cách 5 khi chỉ vị trí đứng yên. Nếu là chuyển động thì под + cách 4: под стол.' },
    { t: 'choice', q: 'Giới từ nào đi với <b>cách 3</b>?', options: ['без và для', 'к và по', 'над và перед', 'о và при'], a: 1, why: 'Chỉ có hai giới từ đi với cách 3: к (đến chỗ ai) và по (theo, dọc).' },
    { t: 'choice', q: 'Bước <b>đầu tiên</b> khi phân tích một câu tiếng Nga lạ là:', options: ['Tra hết từ mới', 'Tìm động từ chính', 'Đếm số từ', 'Nhìn dấu câu'], a: 1, why: 'Động từ quyết định cách của tân ngữ — biết động từ là biết nửa câu.' },
    { t: 'type', q: 'Điền cách 6 số nhiều: Мы говори́ли о ___ (кни́ги)', a: 'книгах', alt: ['кни́гах'], hint: 'Cách 6 số nhiều luôn -ах/-ях.' },
    { t: 'choice', q: 'Giới từ <span class="ru">кро́ме</span> đòi cách nào?', options: ['Cách 2', 'Cách 3', 'Cách 4', 'Cách 5'], a: 0, why: 'кроме, вместо, против, вокруг, около — tất cả đều đi với cách 2.' },
    { t: 'match', q: 'Nối cách với câu hỏi của nó:', pairs: [['Cách 2', 'кого́? чего́?'], ['Cách 3', 'кому́? чему́?'], ['Cách 5', 'кем? чем?'], ['Cách 6', 'о ком? о чём?']] },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'кот спит под столом', a: 'кот спит под столом' }
  ]
};

/* ---------------------------------------------------------- BÀI 2 */
LESSON_DATA['b1-02'] = {
  level: 'b1',
  intro: 'Đây là bài <b>quan trọng nhất cấp B1</b> đối với người Việt. Ở A2 anh đã nói: học động từ thì học luôn cách nó đòi. Bài này gom ba mươi động từ hay dùng nhất và cách của chúng vào một chỗ — vì <b>không có quy luật nào đoán được</b>, chỉ có học thuộc.',
  blocks: [
    { t: 'h', text: 'Vì sao đây là chỗ người Việt sai nhiều nhất' },
    { t: 'p', html: 'Tiếng Việt không đổi đuôi, nên khi nói tiếng Nga ta chọn đuôi <b>bằng cảm tính</b> — và cảm tính hầu như luôn sai, vì nó dựa trên cách tiếng Việt sắp xếp ý. Ví dụ tiếng Việt nói "giúp <b>mẹ</b>" như "yêu <b>mẹ</b>", nhưng tiếng Nga thì <span class="ru">помога́ть ма́ме</span> (cách 3) khác hẳn <span class="ru">люби́ть ма́му</span> (cách 4).' },
    { t: 'warn', html: 'Cách chữa duy nhất: khi học một động từ mới, <b>luôn học kèm một câu ví dụ có tân ngữ</b>. Đừng học <span class="ru">занима́ться = làm</span>, mà học <span class="ru">занима́ться спо́ртом = chơi thể thao</span>. Đuôi đi kèm động từ trong trí nhớ thì mới ra phản xạ.' },
    { t: 'h', text: 'Động từ đòi CÁCH 2' },
    { t: 'words', items: [
      { ru: 'боя́ться (чего́?)', vn: 'sợ — Я бою́сь темноты́.' },
      { ru: 'жела́ть (чего́?)', vn: 'chúc — Жела́ю сча́стья.' },
      { ru: 'достига́ть (чего́?)', vn: 'đạt được — достига́ть це́ли' },
      { ru: 'тре́бовать (чего́?)', vn: 'đòi hỏi — тре́бовать внима́ния' },
      { ru: 'ждать (кого́? чего́?)', vn: 'chờ — ждать по́езда, ждать отве́та' }
    ]},
    { t: 'h', text: 'Động từ đòi CÁCH 3' },
    { t: 'words', items: [
      { ru: 'помога́ть (кому́?)', vn: 'giúp — помога́ть ма́ме' },
      { ru: 'звони́ть (кому́?)', vn: 'gọi điện — звони́ть дру́гу' },
      { ru: 'ве́рить (кому́?)', vn: 'tin — ве́рить челове́ку' },
      { ru: 'меша́ть (кому́?)', vn: 'làm phiền — меша́ть сосе́дям' },
      { ru: 'сове́товать (кому́?)', vn: 'khuyên — сове́товать студе́нту' },
      { ru: 'ра́доваться (чему́?)', vn: 'vui mừng vì — ра́доваться успе́ху' },
      { ru: 'удивля́ться (чему́?)', vn: 'ngạc nhiên vì — удивля́ться но́вости' },
      { ru: 'принадлежа́ть (кому́?)', vn: 'thuộc về — принадлежа́ть университе́ту' }
    ]},
    { t: 'h', text: 'Động từ đòi CÁCH 5' },
    { t: 'words', items: [
      { ru: 'занима́ться (чем?)', vn: 'làm, theo đuổi — занима́ться нау́кой' },
      { ru: 'интересова́ться (чем?)', vn: 'quan tâm — интересова́ться исто́рией' },
      { ru: 'увлека́ться (чем?)', vn: 'say mê — увлека́ться му́зыкой' },
      { ru: 'управля́ть (чем?)', vn: 'điều khiển — управля́ть маши́ной' },
      { ru: 'руководи́ть (чем?)', vn: 'lãnh đạo — руководи́ть гру́ппой' },
      { ru: 'горди́ться (кем? чем?)', vn: 'tự hào — горди́ться сы́ном' },
      { ru: 'по́льзоваться (чем?)', vn: 'sử dụng — по́льзоваться словарём' },
      { ru: 'станови́ться (кем?)', vn: 'trở thành — станови́ться врачо́м' }
    ]},
    { t: 'h', text: 'Động từ đòi GIỚI TỪ cố định' },
    { t: 'table', head: ['Động từ', 'Giới từ + cách', 'Ví dụ'], rows: [
      ['ду́мать', 'о + 6', 'ду́мать о рабо́те'],
      ['забо́титься', 'о + 6', 'забо́титься о здоро́вье'],
      ['гото́виться', 'к + 3', 'гото́виться к экза́мену'],
      ['относи́ться', 'к + 3', 'относи́ться к рабо́те серьёзно'],
      ['зави́сеть', 'от + 2', 'зави́сеть от пого́ды'],
      ['отказа́ться', 'от + 2', 'отказа́ться от по́мощи'],
      ['уча́ствовать', 'в + 6', 'уча́ствовать в конфере́нции'],
      ['нужда́ться', 'в + 6', 'нужда́ться в по́мощи'],
      ['благодари́ть', 'за + 4', 'благодари́ть за по́мощь'],
      ['отвеча́ть', 'за + 4', 'отвеча́ть за результа́т'],
      ['следи́ть', 'за + 5', 'следи́ть за нового́стями'],
      ['обраща́ться', 'к + 3', 'обраща́ться к преподава́телю'],
      ['поздравля́ть', 'кого́ (4) с чем (5)', 'поздравля́ть дру́га с пра́здником']
    ]},
    { t: 'tip', html: 'Dòng cuối là mẫu <b>hai tân ngữ</b> rất Nga: <span class="ru">поздравля́ть кого́ с чем</span>. Cùng kiểu có <span class="ru">познако́мить кого́ с кем</span> (giới thiệu ai với ai). Học nguyên cả khung có hai chỗ trống, đừng học rời từng phần.' },
    { t: 'h', text: 'Cặp dễ lẫn nhất' },
    { t: 'table', head: ['Câu A', 'Câu B', 'Khác nhau'], rows: [
      ['<span class="ru">Я жду по́езд.</span>', '<span class="ru">Я жду по́езда.</span>', 'Cách 4 = chuyến tàu cụ thể mình biết. Cách 2 = chờ tàu nói chung. Cả hai đều đúng, sắc thái khác.'],
      ['<span class="ru">Он у́чит фи́зику.</span>', '<span class="ru">Он у́чится в шко́ле.</span>', 'учить + 4 = học môn gì · учиться + nơi chốn'],
      ['<span class="ru">Я по́мню э́то.</span>', '<span class="ru">Я забо́чусь об э́том.</span>', 'помнить + 4 (không giới từ) · заботиться о + 6']
    ]},
    { t: 'note', html: 'Đừng cố học thuộc cả bài trong một buổi. Cách làm hiệu quả: mỗi ngày chọn <b>năm động từ</b>, viết mỗi cái một câu <b>về đời sống thật của em</b>. Câu tự nghĩ ra nhớ lâu gấp mấy lần câu chép từ sách.' }
  ],
  vocab: [
    { ru: 'управле́ние', vn: 'sự quản lý cách của động từ' }, { ru: 'боя́ться', vn: 'sợ (+2)' },
    { ru: 'достига́ть', vn: 'đạt được (+2)' }, { ru: 'ве́рить', vn: 'tin (+3)' },
    { ru: 'меша́ть', vn: 'làm phiền (+3)' }, { ru: 'сове́товать', vn: 'khuyên (+3)' },
    { ru: 'горди́ться', vn: 'tự hào (+5)' }, { ru: 'по́льзоваться', vn: 'sử dụng (+5)' },
    { ru: 'гото́виться к', vn: 'chuẩn bị cho' }, { ru: 'зави́сеть от', vn: 'phụ thuộc vào' },
    { ru: 'уча́ствовать в', vn: 'tham gia vào' }, { ru: 'нужда́ться в', vn: 'cần đến' },
    { ru: 'отвеча́ть за', vn: 'chịu trách nhiệm về' }, { ru: 'обраща́ться к', vn: 'liên hệ với' }
  ],
  ex: [
    { t: 'type', q: 'Điền: Я помога́ю ___ (ма́ма)', a: 'маме', alt: ['ма́ме'], hint: 'помогать đòi cách 3.' },
    { t: 'type', q: 'Điền: Я занима́юсь ___ (нау́ка)', a: 'наукой', alt: ['нау́кой'], hint: 'заниматься đòi cách 5.' },
    { t: 'choice', q: 'Điền: Он гото́вится ___ экза́мену.', options: ['для', 'к', 'о', 'за'], a: 1, why: 'готовиться к + cách 3 — cụm cố định.' },
    { t: 'choice', q: 'Điền: Всё зави́сит ___ пого́ды.', options: ['на', 'к', 'от', 'о'], a: 2, why: 'зависеть от + cách 2.' },
    { t: 'choice', q: 'Câu nào <b>đúng</b>?', options: ['Я бою́сь темноту́.', 'Я бою́сь темноты́.', 'Я бою́сь темното́й.', 'Я бою́сь о темноте́.'], a: 1, why: 'бояться đòi cách 2.' },
    { t: 'choice', q: '<span class="ru">поздравля́ть</span> đi với mấy tân ngữ?', options: ['Một, cách 4', 'Một, cách 3', 'Hai: кого́ (4) с чем (5)', 'Hai: кому́ (3) что (4)'], a: 2, why: 'поздравлять друга с праздником — khung hai chỗ trống, học nguyên cả cụm.' },
    { t: 'type', q: 'Điền: Я по́льзуюсь ___ (слова́рь)', a: 'словарём', alt: ['словарем'], hint: 'пользоваться đòi cách 5; словарь ở cách 5 là словарём.' },
    { t: 'match', q: 'Nối động từ với cách nó đòi:', pairs: [['ве́рить', 'cách 3'], ['горди́ться', 'cách 5'], ['достига́ть', 'cách 2'], ['уча́ствовать в', 'cách 6']] }
  ]
};

/* ---------------------------------------------------------- BÀI 3 */
LESSON_DATA['b1-03'] = {
  level: 'b1',
  intro: '<b>Прича́стие</b> — tính động từ. Đây là công cụ làm cho tiếng Nga của em nghe "người lớn" hẳn: nó nén một mệnh đề <span class="ru">кото́рый</span> thành một từ. Người nước ngoài dùng được причастие là người Nga nhận ra ngay.',
  blocks: [
    { t: 'h', text: 'Nó thay thế cái gì' },
    { t: 'table', head: ['Dùng который', 'Dùng причастие'], rows: [
      ['Студе́нт, <b>кото́рый чита́ет</b> кни́гу…', 'Студе́нт, <b>чита́ющий</b> кни́гу…'],
      ['Же́нщина, <b>кото́рая рабо́тала</b> здесь…', 'Же́нщина, <b>рабо́тавшая</b> здесь…']
    ]},
    { t: 'p', html: 'Cùng nghĩa, nhưng bản причастие ngắn hơn và trang trọng hơn. Trong văn viết — nhất là văn khoa học — người Nga dùng причастие nhiều hơn hẳn.' },
    { t: 'h', text: 'Cách tạo: hiện tại (đang làm)' },
    { t: 'p', html: 'Lấy ngôi <b>они́</b>, bỏ đuôi, thêm <b>-ущ/-ющ</b> (nhóm 1) hoặc <b>-ащ/-ящ</b> (nhóm 2), rồi thêm đuôi tính từ:' },
    { t: 'table', head: ['Nguyên thể', 'Ngôi они́', 'Причастие', 'Nghĩa'], rows: [
      ['чита́ть', 'чита́<b>ют</b>', 'чита́<b>ющ</b>ий', 'đang đọc'],
      ['писа́ть', 'пи́ш<b>ут</b>', 'пи́ш<b>ущ</b>ий', 'đang viết'],
      ['жить', 'жив<b>у́т</b>', 'жив<b>у́щ</b>ий', 'đang sống'],
      ['говори́ть', 'говор<b>я́т</b>', 'говор<b>я́щ</b>ий', 'đang nói'],
      ['стро́ить', 'стро́<b>ят</b>', 'стро́<b>ящ</b>ий', 'đang xây']
    ]},
    { t: 'h', text: 'Cách tạo: quá khứ (đã làm)' },
    { t: 'p', html: 'Lấy dạng quá khứ giống nam, bỏ <b>-л</b>, thêm <b>-вш</b> + đuôi tính từ:' },
    { t: 'table', head: ['Nguyên thể', 'Quá khứ', 'Причастие', 'Nghĩa'], rows: [
      ['чита́ть', 'чита́<b>л</b>', 'чита́<b>вш</b>ий', 'đã đọc'],
      ['написа́ть', 'написа́<b>л</b>', 'написа́<b>вш</b>ий', 'đã viết xong'],
      ['верну́ться', 'верну́л<b>ся</b>', 'верну́<b>вш</b>ийся', 'đã quay về'],
      ['принести́', 'принёс', 'принёс<b>ш</b>ий', 'đã mang đến (bất quy tắc)'],
      ['идти́', 'шёл', 'ше́д<b>ш</b>ий', 'đã đi (bất quy tắc)']
    ]},
    { t: 'tip', html: 'Nhớ mẹo: <b>hiện tại có Щ, quá khứ có Ш</b>. Chỉ cần nghe một chữ đó là biết hành động đang xảy ra hay đã xong.' },
    { t: 'h', text: 'Причастие là tính từ — nên nó hoà hợp' },
    { t: 'p', html: 'Đã tạo xong thì nó biến cách y hệt tính từ, theo danh từ nó bổ nghĩa:' },
    { t: 'words', items: [
      { ru: 'студе́нт, чита́ющий кни́гу', vn: 'cậu sinh viên đang đọc sách (cách 1)' },
      { ru: 'студе́нтка, чита́ющая кни́гу', vn: 'cô sinh viên đang đọc sách' },
      { ru: 'студе́нты, чита́ющие кни́гу', vn: 'các sinh viên đang đọc sách' },
      { ru: 'Я ви́жу студе́нта, чита́ющего кни́гу.', vn: 'Tôi thấy cậu sinh viên đang đọc sách. (cách 4)' },
      { ru: 'Я говорю́ со студе́нтом, чита́ющим кни́гу.', vn: 'Tôi nói chuyện với cậu sinh viên đang đọc sách. (cách 5)' }
    ]},
    { t: 'h', text: 'Dấu phẩy — quy tắc rõ ràng' },
    { t: 'table', head: ['Vị trí', 'Dấu phẩy?', 'Ví dụ'], rows: [
      ['Cụm причастие đứng <b>sau</b> danh từ', '<b>Có</b>, tách hai bên', 'Студе́нт<b>,</b> чита́ющий кни́гу<b>,</b> — мой брат.'],
      ['Cụm причастие đứng <b>trước</b> danh từ', '<b>Không</b>', 'Чита́ющий кни́гу студе́нт — мой брат.'],
      ['Chỉ một từ, không có cụm', '<b>Không</b>', 'Чита́ющий студе́нт']
    ]},
    { t: 'warn', html: 'Ở bài viết thi ТРКИ-1, dùng đúng một cụm причастие có dấu phẩy đúng chỗ là điểm cộng rõ rệt. Nhưng dùng sai dấu phẩy thì lại thành lỗi — nên nếu chưa chắc, cứ viết bằng <span class="ru">кото́рый</span>, an toàn hơn.' },
    { t: 'h', text: 'Đọc thấy chúng ở đâu' },
    { t: 'words', items: [
      { ru: 'учёный, изуча́ющий кли́мат', vn: 'nhà khoa học nghiên cứu khí hậu' },
      { ru: 'студе́нты, живу́щие в общежи́тии', vn: 'các sinh viên sống ở ký túc xá' },
      { ru: 'по́езд, иду́щий в Москву́', vn: 'chuyến tàu đi Moskva (đọc trên bảng ga)' },
      { ru: 'челове́к, говоря́щий по-ру́сски', vn: 'người nói được tiếng Nga' },
      { ru: 'страна́, развива́ющаяся бы́стро', vn: 'đất nước đang phát triển nhanh' }
    ]},
    { t: 'note', html: 'Cụm <span class="ru">по́езд, иду́щий в Москву́</span> em sẽ đọc thấy trên bảng điện tử ở mọi nhà ga Nga. Nhận ra được nó là em vừa dùng ngữ pháp B1 vào việc thật.' }
  ],
  vocab: [
    { ru: 'прича́стие', vn: 'tính động từ' }, { ru: 'учёный', vn: 'nhà khoa học' },
    { ru: 'изуча́ть', vn: 'nghiên cứu, học' }, { ru: 'кли́мат', vn: 'khí hậu' },
    { ru: 'развива́ться', vn: 'phát triển' }, { ru: 'принести́', vn: 'mang đến' },
    { ru: 'существу́ющий', vn: 'đang tồn tại' }, { ru: 'рабо́тающий', vn: 'đang làm việc' }
  ],
  ex: [
    { t: 'choice', q: 'Điền: Студе́нт, ___ кни́гу, сиди́т у окна́.', options: ['чита́я', 'чита́ющий', 'прочи́танный', 'чита́ть'], a: 1, why: 'Cần причастие chủ động hiện tại, hoà hợp với студент (đực, cách 1).' },
    { t: 'choice', q: 'Причастие hiện tại được tạo từ dạng nào?', options: ['Nguyên thể', 'Ngôi я', 'Ngôi они́', 'Quá khứ'], a: 2, why: 'Lấy ngôi они, bỏ đuôi, thêm -ущ/-ющ hoặc -ащ/-ящ.' },
    { t: 'choice', q: 'Mẹo phân biệt hiện tại và quá khứ:', options: ['Hiện tại có Ш, quá khứ có Щ', 'Hiện tại có Щ, quá khứ có Ш', 'Cả hai đều có Щ', 'Nhìn trọng âm'], a: 1, why: 'читающий (Щ, đang đọc) ↔ читавший (Ш, đã đọc).' },
    { t: 'type', q: 'Tạo причастие hiện tại từ <span class="ru">говори́ть</span> (giống đực):', a: 'говорящий', alt: ['говоря́щий'], hint: 'говорят → говор- + ящ + ий.' },
    { t: 'choice', q: 'Khi cụm причастие đứng <b>sau</b> danh từ thì:', options: ['Không có dấu phẩy', 'Có dấu phẩy tách hai bên', 'Chỉ có dấu phẩy phía trước', 'Tuỳ người viết'], a: 1, why: 'Студент, читающий книгу, — mở và đóng bằng dấu phẩy.' },
    { t: 'choice', q: '<span class="ru ru-big">по́езд, иду́щий в Москву́</span> nghĩa là:', options: ['chuyến tàu đã đi Moskva', 'chuyến tàu đi Moskva', 'chuyến tàu từ Moskva', 'chuyến tàu bị hoãn'], a: 1, why: 'идущий là причастие hiện tại của идти — dòng chữ này có trên mọi bảng ga Nga.' },
    { t: 'type', q: 'Điền cách 4: Я ви́жу студе́нта, ___ кни́гу.', a: 'читающего', alt: ['чита́ющего'], hint: 'Причастие hoà hợp với студента ở cách 4 (người).' },
    { t: 'match', q: 'Nối:', pairs: [['чита́ющий', 'đang đọc'], ['чита́вший', 'đã đọc'], ['живу́щий', 'đang sống'], ['ше́дший', 'đã đi']] }
  ]
};

/* ---------------------------------------------------------- BÀI 4 */
LESSON_DATA['b1-04'] = {
  level: 'b1',
  intro: 'Nửa còn lại của причастие: dạng <b>bị động</b> — không phải "người đang đọc" mà "quyển sách <b>được đọc</b>". Và kèm theo nó là <b>dạng ngắn</b>, thứ mà mọi văn bản khoa học và hành chính Nga đều dùng.',
  blocks: [
    { t: 'h', text: 'Chủ động và bị động' },
    { t: 'table', head: ['Chủ động', 'Bị động'], rows: [
      ['студе́нт, <b>чита́ющий</b> кни́гу<br><span class="muted">sinh viên đang đọc sách</span>', 'кни́га, <b>чита́емая</b> студе́нтом<br><span class="muted">quyển sách được sinh viên đọc</span>'],
      ['а́втор, <b>написа́вший</b> статью́<br><span class="muted">tác giả đã viết bài báo</span>', 'статья́, <b>напи́санная</b> а́втором<br><span class="muted">bài báo được tác giả viết</span>']
    ]},
    { t: 'note', html: 'Người thực hiện hành động trong câu bị động đứng ở <b>cách 5</b>: <span class="ru">напи́санная а́втором</span>. Đây là dùng thứ tư của cách 5 mà em học ở A1 — công cụ, đồng hành, nghề nghiệp, và bây giờ là <b>tác nhân</b>.' },
    { t: 'h', text: 'Cách tạo bị động' },
    { t: 'table', head: ['Thì', 'Cách làm', 'Ví dụ'], rows: [
      ['Hiện tại', 'ngôi <b>мы</b> + -ый', 'чита́ем → чита́<b>емый</b> · изуча́ем → изуча́<b>емый</b> · лю́бим → люби́<b>мый</b>'],
      ['Quá khứ (-ать)', 'bỏ -ть, thêm <b>-нн</b>', 'прочита́ть → прочи́та<b>нн</b>ый · написа́ть → напи́са<b>нн</b>ый'],
      ['Quá khứ (-ить)', 'thêm <b>-енн</b>', 'постро́ить → постро́<b>енн</b>ый · реши́ть → решё<b>нн</b>ый'],
      ['Quá khứ (-ыть, -ть ngắn)', 'thêm <b>-т</b>', 'откры́ть → откры́<b>т</b>ый · закры́ть → закры́<b>т</b>ый']
    ]},
    { t: 'tip', html: 'Em đã dùng một причастие bị động hàng chục lần mà không biết: <span class="ru"><b>Уважа́емый</b></span> trong lời mở đầu thư chính là "người <b>được kính trọng</b>" — bị động hiện tại của <span class="ru">уважа́ть</span>. Cùng kiểu: <span class="ru">люби́мый</span> (được yêu → yêu quý), <span class="ru">изве́стный</span> (được biết → nổi tiếng).' },
    { t: 'h', text: 'Dạng ngắn — thứ quan trọng nhất bài' },
    { t: 'p', html: 'Причастие bị động có <b>dạng ngắn</b>, dùng làm vị ngữ. Nó bỏ đuôi tính từ và chỉ giữ giống với số. Đây là cấu trúc chủ lực của tiếng Nga khoa học và hành chính:' },
    { t: 'table', head: ['Dạng đầy đủ', 'Dạng ngắn', 'Câu'], rows: [
      ['постро́енный', 'постро́ен · постро́ена · постро́ено · постро́ены', 'Дом <b>постро́ен</b> в 1990 году́.'],
      ['напи́санный', 'напи́сан · напи́сана · напи́сано · напи́саны', 'Статья́ <b>напи́сана</b> в про́шлом году́.'],
      ['откры́тый', 'откры́т · откры́та · откры́то · откры́ты', 'Магази́н <b>откры́т</b> с девяти́ до восьми́.'],
      ['решённый', 'решён · решена́ · решено́ · решены́', 'Вопро́с <b>решён</b>.']
    ]},
    { t: 'warn', html: 'Chú ý số lượng chữ <b>н</b>: dạng đầy đủ có <b>-нн-</b> (напи́са<b>нн</b>ый), dạng ngắn chỉ có <b>một н</b> (напи́са<b>н</b>). Đây là lỗi chính tả mà cả người Nga cũng mắc, nên viết đúng là em hơn được nhiều người bản xứ.' },
    { t: 'h', text: 'Dùng ở đâu trong đời thật' },
    { t: 'words', items: [
      { ru: 'Магази́н откры́т.', vn: 'Cửa hàng đang mở. (biển treo cửa)' },
      { ru: 'Закры́то на ремо́нт.', vn: 'Đóng cửa sửa chữa.' },
      { ru: 'Вход воспрещён.', vn: 'Cấm vào.' },
      { ru: 'Рабо́та вы́полнена.', vn: 'Công việc đã hoàn thành.' },
      { ru: 'Все места́ за́няты.', vn: 'Hết chỗ rồi.' },
      { ru: 'Да́нная рабо́та посвящена́ пробле́ме…', vn: 'Công trình này dành cho vấn đề… (mở đầu bài báo khoa học)' },
      { ru: 'Результа́ты бы́ли получены́ в 2025 году́.', vn: 'Các kết quả thu được vào năm 2025.' }
    ]},
    { t: 'note', html: 'Ba câu cuối là <b>tiếng Nga khoa học chuẩn mực</b>. Em sẽ đọc chúng trong mọi bài báo và luận án Nga, và sẽ phải tự viết chúng ở B2. Làm quen từ bây giờ là đỡ được nhiều.' },
    { t: 'h', text: 'Cả câu ở quá khứ và tương lai' },
    { t: 'words', items: [
      { ru: 'Дом постро́ен.', vn: 'Nhà đã xây xong. (trạng thái hiện tại)' },
      { ru: 'Дом был постро́ен в 1990 году́.', vn: 'Nhà được xây năm 1990.' },
      { ru: 'Дом бу́дет постро́ен в бу́дущем году́.', vn: 'Nhà sẽ được xây vào năm sau.' }
    ]},
    { t: 'tip', html: 'Công thức: <span class="ru">был / бу́дет</span> + dạng ngắn, và <span class="ru">был</span> phải hoà hợp giống với chủ ngữ: <span class="ru">Кни́га <b>была́</b> напи́сана</span>, <span class="ru">Пи́сьма <b>бы́ли</b> напи́саны</span>.' }
  ],
  vocab: [
    { ru: 'постро́ен', vn: 'đã được xây' }, { ru: 'напи́сан', vn: 'đã được viết' },
    { ru: 'откры́т', vn: 'đang mở' }, { ru: 'закры́т', vn: 'đang đóng' },
    { ru: 'решён', vn: 'đã được giải quyết' }, { ru: 'за́нят', vn: 'bận; bị chiếm chỗ' },
    { ru: 'вы́полнен', vn: 'đã hoàn thành' }, { ru: 'посвящён', vn: 'được dành cho' },
    { ru: 'получен', vn: 'đã nhận được' }, { ru: 'а́втор', vn: 'tác giả' },
    { ru: 'статья́', vn: 'bài báo' }, { ru: 'результа́т', vn: 'kết quả' }
  ],
  ex: [
    { t: 'choice', q: 'Điền: Дом ___ в 1990 году́.', options: ['стро́ил', 'был постро́ен', 'стро́ит', 'постро́ить'], a: 1, why: 'Cấu trúc bị động: был + dạng ngắn của причастие.' },
    { t: 'choice', q: 'Trong câu bị động, người thực hiện hành động ở cách nào?', options: ['Cách 2', 'Cách 3', 'Cách 4', 'Cách 5'], a: 3, why: 'Статья написана автором — автором ở cách 5.' },
    { t: 'choice', q: '<span class="ru ru-big">Уважа́емый</span> thực chất là gì?', options: ['Một tính từ thường', 'Причастие bị động hiện tại của уважать', 'Danh từ', 'Trạng từ'], a: 1, why: 'Nghĩa đen “người được kính trọng”. Cùng kiểu: любимый, известный.' },
    { t: 'choice', q: 'Dạng ngắn có bao nhiêu chữ <b>н</b>?', options: ['Hai, như dạng đầy đủ', 'Một', 'Không có chữ н nào', 'Tuỳ động từ'], a: 1, why: 'написанный (hai н) → написан (một н). Cả người Nga cũng hay sai chỗ này.' },
    { t: 'type', q: 'Điền dạng ngắn: Статья́ ___ в про́шлом году́. (написа́ть, giống cái)', a: 'написана', alt: ['напи́сана'], hint: 'статья là giống cái nên thêm -а.' },
    { t: 'choice', q: 'Biển đề <span class="ru ru-big">Закры́то на ремо́нт</span> nghĩa là:', options: ['Mở cửa sửa chữa', 'Đóng cửa để sửa chữa', 'Sắp sửa chữa', 'Cấm sửa chữa'], a: 1, why: 'Dạng ngắn giống trung, dùng như một thông báo trạng thái.' },
    { t: 'type', q: 'Điền dạng ngắn: Все места́ ___ . (за́нятый)', a: 'заняты', alt: ['за́няты'], hint: 'места số nhiều nên thêm -ы.' },
    { t: 'match', q: 'Nối:', pairs: [['откры́т', 'đang mở'], ['решён', 'đã giải quyết xong'], ['вы́полнен', 'đã hoàn thành'], ['посвящён', 'được dành cho']] }
  ]
};

/* ---------------------------------------------------------- BÀI 5 */
LESSON_DATA['b1-05'] = {
  level: 'b1',
  intro: '<b>Дееприча́стие</b> — trạng động từ. Nó trả lời câu hỏi "làm việc chính <b>trong lúc</b> làm gì" hoặc "<b>sau khi</b> làm gì". Một từ thay cả một mệnh đề phụ. Và nó có <b>một cái bẫy</b> mà cả người Nga cũng ngã.',
  blocks: [
    { t: 'h', text: 'Nó làm gì' },
    { t: 'table', head: ['Câu dài', 'Câu có деепричастие'], rows: [
      ['Когда́ я возвраща́лся домо́й, я встре́тил дру́га.', '<b>Возвраща́ясь</b> домо́й, я встре́тил дру́га.'],
      ['По́сле того́ как он прочита́л письмо́, он позвони́л мне.', '<b>Прочита́в</b> письмо́, он позвони́л мне.']
    ]},
    { t: 'p', html: 'Ngắn hơn, gọn hơn, và nghe trưởng thành hơn hẳn. Trong bài viết thi, một câu như thế đáng giá.' },
    { t: 'h', text: 'Hai dạng, hai nghĩa' },
    { t: 'table', head: ['Dạng', 'Cách tạo', 'Nghĩa', 'Ví dụ'], rows: [
      ['<b>Chưa hoàn thành</b>', 'ngôi они́, bỏ đuôi, thêm <b>-я</b>', '<b>trong lúc</b> đang làm', 'чита́ют → чита́<b>я</b><br>говоря́т → говор<b>я́</b><br>рабо́тают → рабо́та<b>я</b>'],
      ['<b>Hoàn thành</b>', 'quá khứ, bỏ -л, thêm <b>-в</b>', '<b>sau khi</b> làm xong', 'прочита́л → прочита́<b>в</b><br>написа́л → написа́<b>в</b><br>верну́лся → верну́<b>вшись</b>']
    ]},
    { t: 'note', html: 'Động từ có <span class="ru">-ся</span> thì dạng hoàn thành lấy đuôi <b>-вшись</b>: <span class="ru">верну́вшись, познако́мившись, встре́тившись</span>. Và một dạng bất quy tắc hay dùng: <span class="ru">прийти́ → <b>придя́</b></span>.' },
    { t: 'h', text: 'Cái bẫy — quy tắc một chủ ngữ' },
    { t: 'warn', html: '<b>Cả hai hành động phải cùng một người làm.</b> Nếu không, câu thành vô nghĩa. Đây là lỗi ngữ pháp nổi tiếng nhất tiếng Nga — Chekhov từng viết cả một câu chuyện đùa về nó:<br><br><span class="ru">✗ Подъезжа́я к ста́нции, у меня́ слете́ла шля́па.</span><br><span class="muted">Nghĩa đen: "Cái mũ của tôi, khi đang tới gần ga, đã bay mất" — hoá ra cái mũ tự đi tàu.</span><br><br><span class="ru">✓ Когда́ я подъезжа́л к ста́нции, у меня́ слете́ла шля́па.</span>' },
    { t: 'p', html: 'Cách kiểm tra rất nhanh: hỏi "<b>ai</b> làm việc trong деепричастие?" và "<b>ai</b> làm việc chính?". Hai câu trả lời khác nhau là câu sai.' },
    { t: 'table', head: ['Câu', 'Đúng hay sai', 'Vì sao'], rows: [
      ['<span class="ru">Возвраща́ясь домо́й, я встре́тил дру́га.</span>', '✓ Đúng', 'Tôi về nhà, tôi gặp bạn — cùng một người'],
      ['<span class="ru">Возвраща́ясь домо́й, шёл дождь.</span>', '✗ Sai', 'Ai về nhà? Cơn mưa à?'],
      ['<span class="ru">Прочита́в кни́гу, я по́нял всё.</span>', '✓ Đúng', 'Tôi đọc, tôi hiểu'],
      ['<span class="ru">Прочита́в кни́гу, она́ мне понра́вилась.</span>', '✗ Sai', 'Quyển sách tự đọc chính nó']
    ]},
    { t: 'h', text: 'Dấu phẩy: luôn luôn có' },
    { t: 'p', html: 'Khác với причастие, cụm деепричастие <b>luôn được tách bằng dấu phẩy</b>, đứng ở đâu cũng vậy:' },
    { t: 'words', items: [
      { ru: 'Возвраща́ясь домо́й, я встре́тил дру́га.', vn: 'Trên đường về nhà, tôi gặp một người bạn.' },
      { ru: 'Я, возвраща́ясь домо́й, встре́тил дру́га.', vn: 'Tôi, trên đường về nhà, gặp một người bạn.' },
      { ru: 'Я встре́тил дру́га, возвраща́ясь домо́й.', vn: 'Tôi gặp một người bạn trên đường về nhà.' }
    ]},
    { t: 'h', text: 'Câu mẫu để dùng ngay' },
    { t: 'words', items: [
      { ru: 'Чита́я э́ту кни́гу, я мно́го ду́мал.', vn: 'Khi đọc quyển sách này, tôi nghĩ nhiều.' },
      { ru: 'Не зна́я отве́та, я промолча́л.', vn: 'Không biết câu trả lời, tôi im lặng.' },
      { ru: 'Зако́нчив рабо́ту, он пошёл домо́й.', vn: 'Làm xong việc, anh ấy về nhà.' },
      { ru: 'Придя́ домо́й, я сра́зу лёг спать.', vn: 'Về đến nhà, tôi đi ngủ luôn.' },
      { ru: 'Изуча́я ру́сский язы́к, я понима́ю ру́сскую культу́ру.', vn: 'Học tiếng Nga, tôi hiểu văn hoá Nga.' }
    ]},
    { t: 'tip', html: 'Ba cụm cố định rất hay gặp, học nguyên khối: <span class="ru">не говоря́ уже́ о…</span> (chưa nói đến…), <span class="ru">су́дя по…</span> (xét theo…), <span class="ru">начина́я с…</span> (bắt đầu từ…). Chúng đã thành giới từ, nên không bị ràng buộc bởi quy tắc một chủ ngữ.' }
  ],
  vocab: [
    { ru: 'дееприча́стие', vn: 'trạng động từ' }, { ru: 'возвраща́ясь', vn: 'trên đường về' },
    { ru: 'прочита́в', vn: 'sau khi đọc xong' }, { ru: 'придя́', vn: 'sau khi đến' },
    { ru: 'зако́нчив', vn: 'sau khi làm xong' }, { ru: 'промолча́ть', vn: 'im lặng' },
    { ru: 'су́дя по', vn: 'xét theo' }, { ru: 'начина́я с', vn: 'bắt đầu từ' },
    { ru: 'культу́ра', vn: 'văn hoá' }, { ru: 'слете́ть', vn: 'bay mất' }
  ],
  ex: [
    { t: 'choice', q: 'Điền: ___ домо́й, я встре́тил дру́га.', options: ['Возвраща́ться', 'Возвраща́ясь', 'Возврати́вший', 'Возвраще́ние'], a: 1, why: 'Cần деепричастие chưa hoàn thành — hành động diễn ra cùng lúc.' },
    { t: 'choice', q: 'Quy tắc quan trọng nhất của деепричастие là:', options: ['Luôn đứng đầu câu', 'Cả hai hành động phải cùng một chủ ngữ', 'Không dùng ở quá khứ', 'Luôn đi với который'], a: 1, why: 'Khác chủ ngữ là câu thành vô nghĩa — lỗi nổi tiếng mà Chekhov từng đùa.' },
    { t: 'choice', q: 'Câu nào <b>sai</b>?', options: ['Прочита́в кни́гу, я по́нял всё.', 'Возвраща́ясь домо́й, шёл дождь.', 'Не зна́я отве́та, я промолча́л.', 'Зако́нчив рабо́ту, он ушёл.'], a: 1, why: 'Ai về nhà? Cơn mưa không thể tự về nhà — hai chủ ngữ khác nhau.' },
    { t: 'type', q: 'Tạo деепричастие hoàn thành từ <span class="ru">прочита́ть</span>:', a: 'прочитав', alt: ['прочита́в'], hint: 'Quá khứ прочитал, bỏ -л, thêm -в.' },
    { t: 'choice', q: 'Động từ có <span class="ru">-ся</span> thì деепричастие hoàn thành lấy đuôi:', options: ['-в', '-вшись', '-я', '-ся'], a: 1, why: 'вернулся → вернувшись, познакомился → познакомившись.' },
    { t: 'choice', q: 'Cụm деепричастие có dấu phẩy khi nào?', options: ['Chỉ khi đứng đầu câu', 'Chỉ khi đứng cuối câu', 'Luôn luôn', 'Không bao giờ'], a: 2, why: 'Khác причастие — деепричастие luôn được tách bằng dấu phẩy ở mọi vị trí.' },
    { t: 'type', q: 'Điền: ___ домо́й, я сра́зу лёг спать. (придти → dạng bất quy tắc)', a: 'придя', alt: ['придя́'], hint: 'Dạng bất quy tắc của прийти.' },
    { t: 'match', q: 'Nối:', pairs: [['чита́я', 'trong lúc đọc'], ['прочита́в', 'sau khi đọc xong'], ['су́дя по', 'xét theo'], ['начина́я с', 'bắt đầu từ']] }
  ]
};

/* ---------------------------------------------------------- BÀI 6 */
LESSON_DATA['b1-06'] = {
  level: 'b1',
  intro: 'Tiếng Nga có cả một họ câu <b>không có chủ ngữ</b> — không ai làm gì cả, việc tự nó xảy ra. Người Việt thấy lạ vì tiếng Việt luôn có chủ thể; nhưng nắm được nó là em nói được những điều tinh tế mà câu thường không diễn đạt nổi.',
  blocks: [
    { t: 'h', text: 'Bốn nhóm câu vô nhân xưng' },
    { t: 'table', head: ['Nhóm', 'Cấu trúc', 'Ví dụ'], rows: [
      ['<b>Trạng thái của người</b>', 'người ở cách 3 + trạng từ', 'Мне хо́лодно. · Ему́ гру́стно. · Нам ве́село.'],
      ['<b>Hiện tượng tự nhiên</b>', 'động từ giống trung, không chủ ngữ', 'Света́ет. · Темне́ет. · Моро́зит. · Ду́ет.'],
      ['<b>Cảm giác cơ thể</b>', 'người ở cách 4 + động từ', 'Меня́ тошни́т. · Его́ зноби́т.'],
      ['<b>Không có gì / không có ai</b>', 'нет + cách 2', 'Здесь нет никого́. · Вре́мени нет.']
    ]},
    { t: 'h', text: 'Nhóm 1 — cảm giác và đánh giá' },
    { t: 'words', items: [
      { ru: 'Мне хо́лодно / жа́рко.', vn: 'Tôi lạnh / nóng.' },
      { ru: 'Мне гру́стно / ве́село.', vn: 'Tôi buồn / vui.' },
      { ru: 'Мне ску́чно.', vn: 'Tôi thấy chán.' },
      { ru: 'Мне стра́шно.', vn: 'Tôi thấy sợ.' },
      { ru: 'Мне сты́дно.', vn: 'Tôi thấy xấu hổ.' },
      { ru: 'Мне жаль его́.', vn: 'Tôi thấy thương anh ấy.' },
      { ru: 'Мне интере́сно, что он ска́жет.', vn: 'Tôi tò mò không biết anh ấy sẽ nói gì.' },
      { ru: 'Здесь хорошо́.', vn: 'Ở đây dễ chịu. (không nói ai thấy dễ chịu)' }
    ]},
    { t: 'warn', html: 'So sánh hai câu: <span class="ru">Я гру́стный</span> = "tôi là người hay buồn" (tính cách), còn <span class="ru">Мне гру́стно</span> = "lúc này tôi thấy buồn" (trạng thái). Người Việt hay dùng nhầm câu đầu và vô tình mô tả tính cách mình.' },
    { t: 'h', text: 'Nhóm 2 — thiên nhiên tự làm' },
    { t: 'words', items: [
      { ru: 'Света́ет.', vn: 'Trời hửng sáng.' },
      { ru: 'Темне́ет.', vn: 'Trời tối dần.' },
      { ru: 'Моро́зит.', vn: 'Trời rét cóng.' },
      { ru: 'Вечере́ет.', vn: 'Chiều xuống.' },
      { ru: 'Похолода́ло.', vn: 'Trời trở lạnh.' }
    ]},
    { t: 'note', html: 'Nhóm này rất đặc trưng cho tiếng Nga và không dịch thẳng sang tiếng Việt được — ta phải thêm chủ ngữ "trời". Người Nga thì hình dung sự việc <b>tự diễn ra</b>, không cần ai gây ra nó.' },
    { t: 'h', text: 'Nhóm 4 — phủ định sự tồn tại' },
    { t: 'table', head: ['Thì', 'Cấu trúc', 'Ví dụ'], rows: [
      ['Hiện tại', 'нет + cách 2', 'Его́ нет до́ма.'],
      ['Quá khứ', 'не́ было + cách 2', 'Его́ не́ было до́ма.'],
      ['Tương lai', 'не бу́дет + cách 2', 'Его́ не бу́дет до́ма.']
    ]},
    { t: 'warn', html: 'Ba dạng phủ định này <b>luôn ở giống trung</b>, không hoà hợp với gì cả: <span class="ru">Её не́ было</span> (cô ấy không có ở đó) chứ không phải <span class="ru">Её не была́</span>. Đây là chỗ rất hay sai vì tai ta muốn cho nó hoà hợp.' },
    { t: 'h', text: 'Câu không xác định chủ thể' },
    { t: 'p', html: 'Một họ nữa: động từ ở <b>ngôi они́</b> nhưng không chỉ ai cụ thể — tương đương "người ta" trong tiếng Việt:' },
    { t: 'words', items: [
      { ru: 'Здесь не ку́рят.', vn: 'Ở đây người ta không hút thuốc.' },
      { ru: 'В Росси́и мно́го чита́ют.', vn: 'Ở Nga người ta đọc nhiều.' },
      { ru: 'Говоря́т, что бу́дет дождь.', vn: 'Người ta bảo trời sẽ mưa.' },
      { ru: 'Мне сказа́ли, что за́втра экза́мен.', vn: 'Người ta bảo tôi mai có thi.' },
      { ru: 'Как э́то называ́ется?', vn: 'Cái này gọi là gì?' }
    ]},
    { t: 'tip', html: '<span class="ru">Говоря́т, что…</span> là cách dẫn nguồn tin gọn nhất tiếng Nga, dùng cả trong nói lẫn viết. Còn <span class="ru">Как э́то называ́ется?</span> là câu hỏi quý nhất của người học — hỏi tên một vật mà mình chưa biết từ.' },
    { t: 'h', text: 'Một nhóm nhỏ rất Nga: хо́чется, спи́тся' },
    { t: 'words', items: [
      { ru: 'Мне хо́чется спать.', vn: 'Tôi thấy buồn ngủ. (nhẹ hơn “Я хочу́ спать”)' },
      { ru: 'Мне не спи́тся.', vn: 'Tôi không ngủ được. (không phải vì cố thức)' },
      { ru: 'Мне не рабо́тается сего́дня.', vn: 'Hôm nay tôi không vào việc được.' }
    ]},
    { t: 'note', html: 'Nhóm này diễn tả điều mà tiếng Việt phải nói vòng: không phải "tôi không muốn ngủ" mà là "<b>giấc ngủ không đến với tôi</b>". Dùng được nhóm này là tiếng Nga của em bắt đầu có sắc thái riêng chứ không còn là dịch từ tiếng Việt.' }
  ],
  vocab: [
    { ru: 'гру́стно', vn: 'buồn' }, { ru: 'ве́село', vn: 'vui' }, { ru: 'ску́чно', vn: 'chán' },
    { ru: 'стра́шно', vn: 'sợ' }, { ru: 'сты́дно', vn: 'xấu hổ' }, { ru: 'света́ет', vn: 'trời hửng sáng' },
    { ru: 'темне́ет', vn: 'trời tối dần' }, { ru: 'не́ было', vn: 'đã không có' },
    { ru: 'говоря́т', vn: 'người ta bảo' }, { ru: 'называ́ться', vn: 'được gọi là' },
    { ru: 'хо́чется', vn: 'thấy muốn' }, { ru: 'не спи́тся', vn: 'không ngủ được' }
  ],
  ex: [
    { t: 'choice', q: 'Câu nào diễn tả <b>trạng thái lúc này</b> chứ không phải tính cách?', options: ['Я гру́стный.', 'Мне гру́стно.', 'Я гру́стная.', 'Гру́стный челове́к.'], a: 1, why: 'Мне грустно = lúc này tôi thấy buồn. Я грустный = tôi là người hay buồn.' },
    { t: 'choice', q: 'Điền: Его́ ___ до́ма вчера́.', options: ['не был', 'не была́', 'не́ было', 'не бу́дет'], a: 2, why: 'Phủ định sự tồn tại luôn ở giống trung: не было + cách 2.' },
    { t: 'choice', q: '<span class="ru ru-big">Света́ет</span> nghĩa là:', options: ['Đèn sáng', 'Trời hửng sáng', 'Tôi thấy sáng', 'Bật đèn lên'], a: 1, why: 'Động từ chỉ hiện tượng tự nhiên, không có chủ ngữ.' },
    { t: 'choice', q: '<span class="ru ru-big">Здесь не ку́рят</span> nghĩa là:', options: ['Họ không hút thuốc ở đây', 'Ở đây người ta không hút thuốc', 'Tôi không hút thuốc', 'Cấm hút thuốc'], a: 1, why: 'Ngôi они không chỉ ai cụ thể — tương đương “người ta” trong tiếng Việt.' },
    { t: 'type', q: 'Điền: Мне ___ спать. (thấy buồn ngủ)', a: 'хочется', alt: ['хо́чется'], hint: 'Dạng vô nhân xưng của хотеть.' },
    { t: 'choice', q: '<span class="ru ru-big">Мне не спи́тся</span> khác <span class="ru">Я не хочу́ спать</span> ở chỗ:', options: ['Không khác gì', 'не спится = muốn ngủ mà không ngủ được', 'не спится lịch sự hơn', 'не спится dùng cho quá khứ'], a: 1, why: 'Nghĩa đen “giấc ngủ không đến với tôi” — ngoài ý muốn của người nói.' },
    { t: 'type', q: 'Hỏi tên một vật chưa biết: Как э́то ___ ?', a: 'называется', alt: ['называ́ется'], hint: 'Động từ có đuôi -ся, nghĩa “được gọi là”.' },
    { t: 'match', q: 'Nối:', pairs: [['ску́чно', 'chán'], ['сты́дно', 'xấu hổ'], ['темне́ет', 'trời tối dần'], ['говоря́т', 'người ta bảo']] }
  ]
};

/* ---------------------------------------------------------- BÀI 7 */
LESSON_DATA['b1-07'] = {
  level: 'b1',
  intro: 'Kể lại lời người khác — "anh ấy bảo rằng…", "cô ấy hỏi có…". Tin vui lớn cho em: <b>tiếng Nga không lùi thì</b> như tiếng Anh. Đây là chỗ tiếng Nga dễ hơn hẳn.',
  blocks: [
    { t: 'h', text: 'Món quà: không phải lùi thì' },
    { t: 'table', head: ['Lời trực tiếp', 'Tiếng Nga gián tiếp', 'Tiếng Anh (để so sánh)'], rows: [
      ['Он сказа́л: «Я рабо́таю».', 'Он сказа́л, что он <b>рабо́тает</b>.', 'He said he <b>was</b> working'],
      ['Она́ сказа́ла: «Я приду́».', 'Она́ сказа́ла, что она́ <b>придёт</b>.', 'She said she <b>would</b> come']
    ]},
    { t: 'note', html: 'Động từ <b>giữ nguyên thì</b> như trong lời gốc. Người học từng biết tiếng Anh hay tự động lùi thì và làm câu sai. Ở tiếng Nga chỉ có <b>đại từ</b> là đổi, còn thì thì để yên.' },
    { t: 'h', text: 'Ba kiểu câu, ba cách chuyển' },
    { t: 'table', head: ['Kiểu lời gốc', 'Từ nối', 'Ví dụ'], rows: [
      ['<b>Câu kể</b>', 'что', '«Я живу́ здесь» → Он сказа́л, <b>что</b> живёт здесь.'],
      ['<b>Câu hỏi có / không</b>', 'ли <span class="muted">(đứng sau động từ)</span>', '«Ты придёшь?» → Он спроси́л, приду́ <b>ли</b> я.'],
      ['<b>Câu hỏi có từ hỏi</b>', 'giữ nguyên từ hỏi', '«Где ты живёшь?» → Он спроси́л, <b>где</b> я живу́.'],
      ['<b>Mệnh lệnh, đề nghị</b>', 'что́бы + quá khứ', '«Приди́!» → Он сказа́л, <b>что́бы</b> я <b>пришёл</b>.']
    ]},
    { t: 'warn', html: 'Chú ý vị trí của <span class="ru">ли</span>: nó <b>không đứng đầu</b> mệnh đề mà đứng ngay <b>sau từ được hỏi</b>, thường là động từ. <span class="ru">Он спроси́л, <b>зна́ю ли я</b> ру́сский.</span> — Anh ấy hỏi tôi có biết tiếng Nga không.' },
    { t: 'h', text: 'Đại từ phải đổi' },
    { t: 'words', items: [
      { ru: 'Он сказа́л: «Я тебе́ помогу́».', vn: 'Anh ấy nói: "Tôi sẽ giúp bạn."' },
      { ru: 'Он сказа́л, что он мне помо́жет.', vn: 'Anh ấy nói rằng anh ấy sẽ giúp tôi.' },
      { ru: 'Она́ сказа́ла: «Мой брат здесь».', vn: 'Cô ấy nói: "Anh trai tôi ở đây."' },
      { ru: 'Она́ сказа́ла, что её брат здесь.', vn: 'Cô ấy nói rằng anh trai cô ấy ở đây.' }
    ]},
    { t: 'h', text: 'Động từ dẫn lời' },
    { t: 'table', head: ['Động từ', 'Đòi gì', 'Ví dụ'], rows: [
      ['сказа́ть', 'кому́ (3), что', 'Он сказа́л мне, что придёт.'],
      ['спроси́ть', 'кого́ (4)', 'Он спроси́л меня́, где я живу́.'],
      ['отве́тить', 'кому́ (3)', 'Я отве́тил ему́, что не зна́ю.'],
      ['попроси́ть', 'кого́ (4) + nguyên thể', 'Он попроси́л меня́ прийти́.'],
      ['посове́товать', 'кому́ (3) + nguyên thể', 'Врач посове́товал мне отдохну́ть.'],
      ['предложи́ть', 'кому́ (3) + nguyên thể', 'Он предложи́л нам пойти́ в кино́.'],
      ['рассказа́ть', 'кому́ (3) о чём (6)', 'Она́ рассказа́ла нам о пое́здке.']
    ]},
    { t: 'tip', html: 'Để ý cặp dễ lẫn: <span class="ru">сказа́ть <b>кому́</b></span> (cách 3) nhưng <span class="ru">спроси́ть <b>кого́</b></span> (cách 4). Cùng là chuyện nói năng nhưng hai cách khác nhau — đúng như bài 2 đã nói: không có logic, chỉ có thói quen.' },
    { t: 'h', text: 'Hai cách chuyển mệnh lệnh' },
    { t: 'words', items: [
      { ru: 'Он попроси́л меня́ прийти́.', vn: 'Anh ấy nhờ tôi đến. (gọn hơn, hay dùng)' },
      { ru: 'Он попроси́л, что́бы я пришёл.', vn: 'Anh ấy nhờ tôi đến. (dài hơn, trang trọng hơn)' },
      { ru: 'Мать сказа́ла, что́бы де́ти шли спать.', vn: 'Mẹ bảo bọn trẻ đi ngủ.' },
      { ru: 'Учи́тель попроси́л нас откры́ть кни́ги.', vn: 'Thầy giáo bảo chúng tôi mở sách ra.' }
    ]},
    { t: 'h', text: 'Kể lại một cuộc trò chuyện' },
    { t: 'dialog', lines: [
      { who: 'Gốc', ru: '— Ты был в Москве́? — Да, был, три го́да наза́д.', vn: '— Cậu đã đến Moskva chưa? — Rồi, ba năm trước.' },
      { who: 'Kể', ru: 'Он спроси́л, был ли я в Москве́. Я отве́тил, что был там три го́да наза́д.', vn: 'Anh ấy hỏi tôi đã đến Moskva chưa. Tôi trả lời rằng tôi đã ở đó ba năm trước.' }
    ]},
    { t: 'note', html: 'Kỹ năng này xuất hiện trực tiếp trong bài <b>nói</b> của kỳ thi ТРКИ-1: giám khảo cho em nghe một đoạn rồi bảo kể lại. Luyện bằng cách nghe hội thoại trong web này rồi kể lại bằng lời gián tiếp.' }
  ],
  vocab: [
    { ru: 'ко́свенная речь', vn: 'lời nói gián tiếp' }, { ru: 'спроси́ть', vn: 'hỏi (+4)' },
    { ru: 'отве́тить', vn: 'trả lời (+3)' }, { ru: 'попроси́ть', vn: 'nhờ (+4)' },
    { ru: 'посове́товать', vn: 'khuyên (+3)' }, { ru: 'предложи́ть', vn: 'đề nghị (+3)' },
    { ru: 'ли', vn: 'liệu có… không' }, { ru: 'пое́здка', vn: 'chuyến đi' }
  ],
  ex: [
    { t: 'choice', q: 'Chuyển: Он сказа́л: «Я рабо́таю».', options: ['Он сказа́л, что он рабо́тал.', 'Он сказа́л, что он рабо́тает.', 'Он сказа́л, что он бу́дет рабо́тать.', 'Он сказа́л, что рабо́тать.'], a: 1, why: 'Tiếng Nga không lùi thì — động từ giữ nguyên như lời gốc.' },
    { t: 'choice', q: 'Chuyển câu hỏi có/không thì dùng từ gì?', options: ['что', 'ли', 'что́бы', 'е́сли'], a: 1, why: 'ли, và nó đứng ngay sau từ được hỏi chứ không đứng đầu mệnh đề.' },
    { t: 'choice', q: 'Điền: Он спроси́л, ___ я ру́сский язы́к.', options: ['что зна́ю', 'зна́ю ли', 'ли зна́ю', 'е́сли зна́ю'], a: 1, why: 'ли đứng sau động từ: знаю ли я.' },
    { t: 'choice', q: 'Chuyển mệnh lệnh «Приди́!» thành lời gián tiếp:', options: ['Он сказа́л, что я приду́.', 'Он сказа́л, что́бы я пришёл.', 'Он сказа́л, приду́ ли я.', 'Он сказа́л прийти́ я.'], a: 1, why: 'Mệnh lệnh chuyển bằng чтобы + dạng quá khứ, hoặc попросить + nguyên thể.' },
    { t: 'choice', q: 'Cặp nào <b>đúng</b>?', options: ['сказа́ть кого́ / спроси́ть кому́', 'сказа́ть кому́ / спроси́ть кого́', 'cả hai đều cách 3', 'cả hai đều cách 4'], a: 1, why: 'сказать кому (3) nhưng спросить кого (4).' },
    { t: 'type', q: 'Điền: Врач посове́товал ___ отдохну́ть. (tôi)', a: 'мне', hint: 'посоветовать đòi cách 3.' },
    { t: 'choice', q: 'Điều gì <b>không</b> đổi khi chuyển sang lời gián tiếp tiếng Nga?', options: ['Đại từ', 'Thì của động từ', 'Từ nối', 'Trật tự từ'], a: 1, why: 'Chỉ đại từ đổi; thì giữ nguyên — khác hẳn tiếng Anh.' },
    { t: 'match', q: 'Nối:', pairs: [['спроси́ть', 'hỏi'], ['отве́тить', 'trả lời'], ['попроси́ть', 'nhờ'], ['предложи́ть', 'đề nghị']] }
  ]
};

/* ---------------------------------------------------------- BÀI 8 */
LESSON_DATA['b1-08'] = {
  level: 'b1',
  intro: 'Nếu, khi, mặc dù, miễn là — những từ nối làm câu của em có <b>quan hệ</b> chứ không chỉ là chuỗi sự việc. Đây là chất liệu của mọi bài viết B1 trở lên.',
  blocks: [
    { t: 'h', text: 'Điều kiện' },
    { t: 'table', head: ['Từ nối', 'Nghĩa', 'Ví dụ'], rows: [
      ['е́сли', 'nếu (có thật, có thể xảy ra)', '<b>Е́сли</b> бу́дет вре́мя, я прие́ду.'],
      ['е́сли бы', 'giá mà (trái thực tế)', '<b>Е́сли бы</b> бы́ло вре́мя, я бы прие́хал.'],
      ['в слу́чае е́сли', 'trong trường hợp (trang trọng)', '<b>В слу́чае е́сли</b> вы не смо́жете прийти́, позвони́те.'],
      ['при усло́вии что', 'với điều kiện là', 'Я согла́сен <b>при усло́вии что</b> вы помо́жете.'],
      ['раз', 'đã… thì (nói chuyện)', '<b>Раз</b> ты здесь, помоги́ мне.']
    ]},
    { t: 'warn', html: 'Sau <span class="ru">е́сли</span> chỉ tương lai, tiếng Nga dùng <b>thì tương lai</b> — khác tiếng Anh dùng hiện tại: <span class="ru">Е́сли <b>бу́дет</b> вре́мя…</span> chứ không phải <span class="ru">Е́сли есть вре́мя…</span>. Người từng học tiếng Anh hay sai đúng chỗ này.' },
    { t: 'h', text: 'Thời gian' },
    { t: 'table', head: ['Từ nối', 'Nghĩa', 'Ví dụ'], rows: [
      ['когда́', 'khi', '<b>Когда́</b> я пришёл, он уже́ ушёл.'],
      ['пока́', 'trong khi, chừng nào còn', '<b>Пока́</b> ты чита́ешь, я пригото́влю у́жин.'],
      ['пока́ не', 'cho đến khi', 'Жди, <b>пока́ не</b> позвоню́.'],
      ['как то́лько', 'ngay khi', '<b>Как то́лько</b> прие́ду, напишу́.'],
      ['по́сле того́ как', 'sau khi', '<b>По́сле того́ как</b> он ушёл, ста́ло ти́хо.'],
      ['пе́ред тем как', 'trước khi', '<b>Пе́ред тем как</b> уйти́, закро́й окно́.'],
      ['с тех пор как', 'từ khi', '<b>С тех пор как</b> я здесь, мно́гое измени́лось.']
    ]},
    { t: 'tip', html: 'Cặp <span class="ru">пока́</span> ↔ <span class="ru">пока́ не</span> hay lẫn. <span class="ru">Пока́ он спит</span> = trong lúc anh ấy ngủ. <span class="ru">Пока́ он не просну́лся</span> = cho đến khi anh ấy tỉnh dậy. Chữ <span class="ru">не</span> ở đây <b>không mang nghĩa phủ định</b> — nó chỉ đánh dấu mốc kết thúc.' },
    { t: 'h', text: 'Nhượng bộ — "mặc dù"' },
    { t: 'table', head: ['Từ nối', 'Đi với', 'Ví dụ'], rows: [
      ['хотя́', 'mệnh đề', '<b>Хотя́</b> бы́ло хо́лодно, мы гуля́ли.'],
      ['несмотря́ на', '+ cách 4', '<b>Несмотря́ на</b> дождь, мы пошли́.'],
      ['несмотря́ на то что', 'mệnh đề (trang trọng)', '<b>Несмотря́ на то что</b> он уста́л, он продолжа́л рабо́тать.'],
      ['тем не ме́нее', 'đứng đầu vế sau', 'Бы́ло тру́дно. <b>Тем не ме́нее</b> мы спра́вились.'],
      ['всё-таки', 'dù sao thì', 'Он <b>всё-таки</b> пришёл.']
    ]},
    { t: 'warn', html: 'Phân biệt hai cặp dễ lẫn:<br>• <span class="ru">несмотря́ на</span> + <b>cách 4</b> (mặc dù có gì) ↔ <span class="ru">благодаря́</span> + <b>cách 3</b> (nhờ có gì)<br>• <span class="ru">несмотря́ на</span> (bất chấp trở ngại) ↔ <span class="ru">из-за</span> + <b>cách 2</b> (tại vì, điều xấu gây ra)' },
    { t: 'h', text: 'Mục đích và hệ quả' },
    { t: 'words', items: [
      { ru: 'что́бы + nguyên thể / quá khứ', vn: 'để mà (đã học ở A2)' },
      { ru: 'для того́ что́бы', vn: 'nhằm mục đích (trang trọng hơn)' },
      { ru: 'так что', vn: 'nên là, thành ra' },
      { ru: 'поэ́тому', vn: 'cho nên' },
      { ru: 'в результа́те', vn: 'kết quả là' },
      { ru: 'сле́довательно', vn: 'do đó (rất trang trọng, dùng trong văn khoa học)' }
    ]},
    { t: 'h', text: 'Một đoạn dùng đủ các loại' },
    { t: 'p', html: '<span class="ru">Хотя́ зимо́й в Ирку́тске о́чень хо́лодно, мне здесь нра́вится. Как то́лько я прие́хал, я по́нял, что э́то краси́вый го́род. Несмотря́ на моро́з, лю́ди мно́го гуля́ют. Е́сли бу́дет вре́мя, я обяза́тельно съе́зжу на Байка́л. Пока́ я учу́сь здесь, хочу́ уви́деть как мо́жно бо́льше.</span>' },
    { t: 'p', html: '<b>Dịch:</b> Mặc dù mùa đông ở Irkutsk rất lạnh, tôi vẫn thích ở đây. Ngay khi tôi đến, tôi đã hiểu đây là một thành phố đẹp. Bất chấp cái rét, người ta vẫn đi dạo nhiều. Nếu có thời gian, tôi nhất định sẽ đi Baikal. Chừng nào còn học ở đây, tôi muốn thấy càng nhiều càng tốt.' },
    { t: 'tip', html: 'Đoạn trên chỉ có năm câu nhưng dùng năm loại từ nối khác nhau. Đó chính là mật độ mà người chấm thi B1 muốn thấy — không phải câu dài, mà câu <b>có quan hệ với nhau</b>.' }
  ],
  vocab: [
    { ru: 'пока́', vn: 'trong khi' }, { ru: 'пока́ не', vn: 'cho đến khi' },
    { ru: 'как то́лько', vn: 'ngay khi' }, { ru: 'по́сле того́ как', vn: 'sau khi' },
    { ru: 'пе́ред тем как', vn: 'trước khi' }, { ru: 'с тех пор как', vn: 'từ khi' },
    { ru: 'несмотря́ на', vn: 'bất chấp (+4)' }, { ru: 'тем не ме́нее', vn: 'tuy vậy' },
    { ru: 'всё-таки', vn: 'dù sao thì' }, { ru: 'сле́довательно', vn: 'do đó' },
    { ru: 'спра́виться', vn: 'xoay xở được' }, { ru: 'измени́ться', vn: 'thay đổi' }
  ],
  ex: [
    { t: 'choice', q: 'Điền: ___ бу́дет вре́мя, я прие́ду.', options: ['Е́сли бы', 'Е́сли', 'Хотя́', 'Пока́'], a: 1, why: 'Điều kiện có thật → если, và động từ ở thì tương lai.' },
    { t: 'choice', q: 'Sau <span class="ru">е́сли</span> nói về tương lai, tiếng Nga dùng thì nào?', options: ['Hiện tại', 'Tương lai', 'Quá khứ', 'Nguyên thể'], a: 1, why: 'Если будет время — khác tiếng Anh dùng thì hiện tại.' },
    { t: 'choice', q: '<span class="ru ru-big">Жди, пока́ не позвоню́</span> nghĩa là:', options: ['Đợi trong khi tôi chưa gọi', 'Đợi cho đến khi tôi gọi', 'Đừng đợi tôi gọi', 'Gọi rồi hãy đợi'], a: 1, why: 'пока не đánh dấu mốc kết thúc; chữ не ở đây không mang nghĩa phủ định.' },
    { t: 'choice', q: '<span class="ru">несмотря́ на</span> đòi cách nào?', options: ['Cách 2', 'Cách 3', 'Cách 4', 'Cách 6'], a: 2, why: 'несмотря на дождь — cách 4. Đừng nhầm với благодаря + cách 3.' },
    { t: 'type', q: 'Điền: ___ то́лько прие́ду, напишу́. (ngay khi)', a: 'как', hint: 'Cụm hai từ: как только.' },
    { t: 'choice', q: 'Từ nối nào <b>trang trọng nhất</b>, dùng trong văn khoa học?', options: ['так что', 'поэ́тому', 'сле́довательно', 'всё-таки'], a: 2, why: 'следовательно = do đó, thuộc phong cách khoa học.' },
    { t: 'choice', q: 'Điền: ___ он уста́л, он продолжа́л рабо́тать.', options: ['Потому́ что', 'Хотя́', 'Поэ́тому', 'Е́сли'], a: 1, why: 'Quan hệ nhượng bộ: mệt nhưng vẫn làm tiếp.' },
    { t: 'match', q: 'Nối:', pairs: [['пока́', 'trong khi'], ['как то́лько', 'ngay khi'], ['с тех пор как', 'từ khi'], ['тем не ме́нее', 'tuy vậy']] }
  ]
};

/* ---------------------------------------------------------- BÀI 9 */
LESSON_DATA['b1-09'] = {
  level: 'b1',
  intro: 'Bài này thay đổi cách em học từ vựng mãi mãi. Tiếng Nga <b>lắp ghép từ</b> theo quy luật rõ ràng — biết quy luật thì mỗi từ mới em học sẽ kéo theo năm sáu từ khác miễn phí.',
  blocks: [
    { t: 'h', text: 'Cấu tạo một từ tiếng Nga' },
    { t: 'p', html: 'Một từ gồm bốn phần: <b>tiền tố</b> + <b>gốc</b> + <b>hậu tố</b> + <b>đuôi</b>. Ví dụ <span class="ru">пре-по-да-ва́-тель</span>… lấy ví dụ dễ hơn: <span class="ru"><b>пере</b>-<b>ход</b>-<b>ник</b></span> (cái chuyển đổi) = qua + đi + người/vật làm.' },
    { t: 'h', text: 'Tiền tố — chúng làm gì với động từ' },
    { t: 'table', head: ['Tiền tố', 'Nghĩa', 'Ví dụ'], rows: [
      ['пере-', 'làm lại · băng qua', 'перечита́ть (đọc lại) · перейти́ (băng qua) · переде́лать (làm lại)'],
      ['при-', 'đến · thêm vào', 'прийти́ (đến) · приписа́ть (viết thêm)'],
      ['у-', 'rời đi · giảm bớt', 'уйти́ (đi khỏi) · уме́ньшить (làm giảm)'],
      ['раз- / рас-', 'tách ra · phân tán', 'разде́лать · рассказа́ть (kể ra) · разгово́р (cuộc trò chuyện)'],
      ['с- / со-', 'cùng nhau · từ trên xuống', 'собра́ть (thu thập) · сотру́дник (đồng nghiệp)'],
      ['про-', 'xuyên qua · bỏ lỡ', 'прочита́ть (đọc hết) · проспа́ть (ngủ quên)'],
      ['за-', 'bắt đầu · đóng lại · ghé', 'заговори́ть (bắt đầu nói) · закры́ть (đóng)'],
      ['недо-', 'chưa đủ', 'недоста́ток (thiếu sót) · недооцени́ть (đánh giá thấp)']
    ]},
    { t: 'h', text: 'Hậu tố — chúng biến từ thành loại gì' },
    { t: 'table', head: ['Hậu tố', 'Tạo ra', 'Ví dụ'], rows: [
      ['-тель', 'người làm / thiết bị', 'учи́тель · писа́тель · строи́тель · дви́гатель (động cơ)'],
      ['-ник / -ик', 'người · vật liên quan', 'учени́к · рабо́тник · холоди́льник'],
      ['-щик / -чик', 'nghề nghiệp', 'ка́менщик (thợ nề) · лётчик (phi công)'],
      ['-ость', 'tính chất (danh từ trừu tượng)', 'ра́дость (niềm vui) · тру́дность (khó khăn) · возмо́жность (khả năng)'],
      ['-ение / -ание', 'quá trình, hành động', 'изуче́ние (việc nghiên cứu) · реше́ние (giải pháp) · зна́ние (kiến thức)'],
      ['-ство', 'lĩnh vực, tập hợp', 'строи́тельство (xây dựng) · госуда́рство (nhà nước)'],
      ['-к(а)', 'dạng nữ · vật nhỏ', 'студе́нтка · ру́чка'],
      ['-ск(ий)', 'tính từ chỉ thuộc về', 'ру́сский · университе́тский · городско́й']
    ]},
    { t: 'tip', html: 'Hậu tố <b>-ость</b> đáng học nhất: nó biến bất kỳ tính từ nào thành danh từ trừu tượng. Biết <span class="ru">возмо́жный</span> (có thể) là biết luôn <span class="ru">возмо́жность</span> (khả năng); biết <span class="ru">тру́дный</span> là biết <span class="ru">тру́дность</span>. Văn khoa học Nga đầy những từ như thế.' },
    { t: 'h', text: 'Bốn họ từ để thấy sức mạnh' },
    { t: 'table', head: ['Gốc', 'Cả họ'], rows: [
      ['<b>уч-</b> (học)', 'учи́ть · учи́ться · учени́к · учи́тель · учёный · уче́бник · уче́ние · учёба · нау́ка'],
      ['<b>вод-</b> (dẫn, nước)', 'води́ть (lái) · води́тель (lái xe) · заво́д (nhà máy) · перево́д (bản dịch) · переводчик (phiên dịch)'],
      ['<b>стро́-</b> (xây)', 'стро́ить · строи́тель · строи́тельство · постро́йка · устро́йство (thiết bị)'],
      ['<b>да-</b> (cho)', 'дать · дава́ть · переда́ть (truyền) · изда́ть (xuất bản) · прода́ть (bán) · зада́ча (bài toán)']
    ]},
    { t: 'warn', html: 'Cẩn thận: gốc giống nhau không phải lúc nào cũng cùng họ nghĩa. <span class="ru">заво́д</span> (nhà máy) và <span class="ru">води́тель</span> (lái xe) cùng gốc <b>вод-</b> nhưng nghĩa đã đi rất xa nhau. Gốc từ giúp em <b>đoán</b>, không phải để kết luận chắc chắn.' },
    { t: 'h', text: 'Dùng thế nào khi đọc' },
    { t: 'p', html: 'Gặp từ lạ, làm ba bước: <b>(1)</b> che tiền tố và hậu tố, tìm gốc; <b>(2)</b> gốc này có quen không; <b>(3)</b> hậu tố cho biết nó là người, vật, hay quá trình.' },
    { t: 'table', head: ['Từ lạ', 'Phân tích', 'Đoán ra'], rows: [
      ['<span class="ru">преподава́тель</span>', 'пре-по-<b>да</b>-ва-<b>тель</b>', 'gốc "cho" + "người làm" → người truyền đạt = giảng viên'],
      ['<span class="ru">переводчик</span>', '<b>пере</b>-<b>вод</b>-<b>чик</b>', 'qua + dẫn + nghề → người chuyển từ tiếng này sang tiếng kia'],
      ['<span class="ru">возмо́жность</span>', 'воз-<b>мож</b>-<b>ность</b>', 'gốc "có thể" + tính chất → khả năng'],
      ['<span class="ru">иссле́дование</span>', 'ис-<b>след</b>-ов-<b>ание</b>', 'gốc "dấu vết, theo dõi" + quá trình → việc nghiên cứu']
    ]},
    { t: 'note', html: 'Từ cuối bảng là từ mà một nghiên cứu sinh sẽ dùng mỗi ngày. Hiểu nó được lắp từ gì thì nhớ luôn cả nhóm: <span class="ru">сле́довать</span> (theo sau), <span class="ru">сле́дствие</span> (hệ quả), <span class="ru">иссле́дователь</span> (nhà nghiên cứu).' }
  ],
  vocab: [
    { ru: 'ко́рень', vn: 'gốc từ' }, { ru: 'приста́вка', vn: 'tiền tố' },
    { ru: 'су́ффикс', vn: 'hậu tố' }, { ru: 'возмо́жность', vn: 'khả năng' },
    { ru: 'тру́дность', vn: 'khó khăn' }, { ru: 'реше́ние', vn: 'giải pháp, quyết định' },
    { ru: 'зна́ние', vn: 'kiến thức' }, { ru: 'иссле́дование', vn: 'nghiên cứu' },
    { ru: 'иссле́дователь', vn: 'nhà nghiên cứu' }, { ru: 'перево́д', vn: 'bản dịch' },
    { ru: 'переводчик', vn: 'phiên dịch' }, { ru: 'устро́йство', vn: 'thiết bị' },
    { ru: 'дви́гатель', vn: 'động cơ' }
  ],
  ex: [
    { t: 'choice', q: 'Hậu tố <b>-ость</b> tạo ra loại từ gì?', options: ['Động từ', 'Danh từ trừu tượng', 'Tính từ', 'Trạng từ'], a: 1, why: 'трудный → трудность, возможный → возможность.' },
    { t: 'choice', q: '<span class="ru ru-big">дви́гатель</span> đoán nghĩa nhờ đâu?', options: ['Tiền tố дви-', 'Gốc двиг- (chuyển động) + hậu tố -тель (vật làm)', 'Đuôi -ель', 'Không đoán được'], a: 1, why: 'Cái làm cho chuyển động = động cơ. Cùng nhóm với двигать, движение.' },
    { t: 'choice', q: 'Tiền tố <b>пере-</b> mang nghĩa nào?', options: ['Bắt đầu', 'Làm lại, băng qua', 'Kết thúc', 'Giảm bớt'], a: 1, why: 'перечитать (đọc lại), перейти (băng qua), переделать (làm lại).' },
    { t: 'type', q: 'Từ tính từ <span class="ru">тру́дный</span>, tạo danh từ trừu tượng:', a: 'трудность', alt: ['тру́дность'], hint: 'Thêm hậu tố -ость.' },
    { t: 'choice', q: '<span class="ru ru-big">иссле́дователь</span> nghĩa là:', options: ['việc nghiên cứu', 'nhà nghiên cứu', 'kết quả nghiên cứu', 'phòng nghiên cứu'], a: 1, why: 'Hậu tố -тель chỉ người làm việc đó.' },
    { t: 'choice', q: 'Gặp từ lạ, bước đầu tiên là:', options: ['Tra từ điển', 'Che tiền tố và hậu tố để tìm gốc', 'Đoán theo ngữ cảnh', 'Bỏ qua'], a: 1, why: 'Tìm gốc trước — nếu gốc quen thì đoán được, khỏi tra.' },
    { t: 'choice', q: 'Từ nào <b>không</b> cùng họ với <span class="ru">учи́ть</span>?', options: ['учени́к', 'уче́бник', 'учёный', 'у́лица'], a: 3, why: 'улица (đường phố) không liên quan gì đến gốc уч-.' },
    { t: 'match', q: 'Nối hậu tố với ý nghĩa:', pairs: [['-тель', 'người làm'], ['-ость', 'tính chất'], ['-ение', 'quá trình'], ['-ство', 'lĩnh vực']] }
  ]
};

/* ---------------------------------------------------------- BÀI 10 */
LESSON_DATA['b1-10'] = {
  level: 'b1',
  intro: 'Ở A2 em học <b>mẹo đọc</b>. Bây giờ học <b>cấu trúc</b>: một bài báo Nga được xây theo khuôn rất chặt, và biết khuôn đó thì em đọc nhanh gấp đôi.',
  blocks: [
    { t: 'h', text: 'Bốn tầng của một bài tin' },
    { t: 'table', head: ['Tầng', 'Tên Nga', 'Chứa gì'], rows: [
      ['1', 'заголо́вок', 'Tiêu đề — thường là một câu rút gọn, hay lược bỏ động từ'],
      ['2', 'лид', 'Đoạn mở — trả lời đủ: ai, cái gì, ở đâu, khi nào'],
      ['3', 'основна́я часть', 'Chi tiết, số liệu, bối cảnh — quan trọng giảm dần'],
      ['4', 'коммента́рий', 'Trích lời người trong cuộc hoặc chuyên gia']
    ]},
    { t: 'tip', html: 'Vì tầm quan trọng <b>giảm dần</b>, em có thể ngừng đọc bất cứ lúc nào mà vẫn nắm được ý chính. Đọc tiêu đề + đoạn lid là đủ 80% thông tin — đây là cách người Nga đọc báo buổi sáng.' },
    { t: 'h', text: 'Cụm từ khuôn trong báo chí' },
    { t: 'table', head: ['Cụm', 'Nghĩa', 'Dùng để'], rows: [
      ['как сообща́ет…', 'theo tin từ…', 'dẫn nguồn'],
      ['по информа́ции…', 'theo thông tin của…', 'dẫn nguồn'],
      ['по слова́м…', 'theo lời…', 'dẫn lời người'],
      ['по да́нным…', 'theo số liệu…', 'dẫn số liệu'],
      ['напо́мним, что…', 'xin nhắc lại rằng…', 'nhắc bối cảnh cũ'],
      ['отме́тим, что…', 'cần lưu ý rằng…', 'thêm chi tiết'],
      ['ра́нее сообща́лось…', 'trước đó có tin…', 'liên hệ tin cũ'],
      ['ожида́ется, что…', 'dự kiến rằng…', 'nói về tương lai']
    ]},
    { t: 'note', html: 'Để ý <span class="ru">напо́мним</span> và <span class="ru">отме́тим</span> — đây là ngôi <b>мы</b> nhưng mang nghĩa "toà soạn chúng tôi". Đó là giọng chuẩn mực của báo chí Nga, khác hẳn tiếng Việt hay dùng câu bị động.' },
    { t: 'h', text: 'Đặc điểm ngôn ngữ của tiêu đề' },
    { t: 'words', items: [
      { ru: 'В Ирку́тске откры́т но́вый мост', vn: 'Cầu mới khánh thành ở Irkutsk (dùng dạng ngắn причастие)' },
      { ru: 'Учёные — о причи́нах измене́ния кли́мата', vn: 'Các nhà khoa học nói về nguyên nhân biến đổi khí hậu (bỏ động từ, thay bằng gạch ngang)' },
      { ru: 'Что изме́нится с 1 января́', vn: 'Những gì sẽ thay đổi từ 1 tháng 1' },
      { ru: 'Как получи́ть ви́зу: инстру́кция', vn: 'Làm visa thế nào: hướng dẫn' }
    ]},
    { t: 'warn', html: 'Tiêu đề báo Nga <b>hay lược bỏ động từ</b> và thay bằng dấu gạch ngang. Người học hay hoảng vì thấy câu "thiếu". Thực ra đó là quy ước — cứ đọc dấu gạch ngang thành "nói về" hoặc "là".' },
    { t: 'h', text: 'Đọc một bài đầy đủ' },
    { t: 'p', html: '<b>Заголовок:</b> <span class="ru">В Ирку́тске откры́лся центр подде́ржки иностра́нных студе́нтов</span>' },
    { t: 'p', html: '<b>Лид:</b> <span class="ru">В Ирку́тском университе́те нача́л рабо́ту центр, кото́рый бу́дет помога́ть иностра́нным студе́нтам с докуме́нтами и адапта́цией. Об э́том сообща́ет пресс-слу́жба ву́за.</span>' },
    { t: 'p', html: '<b>Основная часть:</b> <span class="ru">По да́нным университе́та, сейча́с здесь у́чатся бо́лее двух ты́сяч студе́нтов из три́дцати стран. Ча́ще всего́ они́ ста́лкиваются с тру́дностями при оформле́нии регистра́ции и медици́нской страхо́вки. В но́вом це́нтре мо́жно бу́дет получи́ть консульта́цию на англи́йском и кита́йском языка́х.</span>' },
    { t: 'p', html: '<b>Комментарий:</b> <span class="ru">«Мы хоти́м, что́бы студе́нты чу́вствовали себя́ здесь как до́ма», — сказа́л ре́ктор. Напо́мним, что число́ иностра́нных студе́нтов в го́роде вы́росло на 15% за после́дние три го́да.</span>' },
    { t: 'p', html: '<b>Dịch ý chính:</b> Đại học Irkutsk mở trung tâm hỗ trợ sinh viên nước ngoài, giúp về giấy tờ và hoà nhập. Hiện có hơn hai nghìn sinh viên từ ba mươi nước; khó khăn thường gặp nhất là làm đăng ký tạm trú và bảo hiểm y tế. Trung tâm tư vấn được bằng tiếng Anh và tiếng Trung. Số sinh viên nước ngoài trong thành phố đã tăng 15% trong ba năm qua.' },
    { t: 'tip', html: 'Bài trên chứa đúng những thứ em vừa học: <span class="ru">откры́лся</span> (động từ -ся), <span class="ru">кото́рый</span>, <span class="ru">что́бы</span> + quá khứ, <span class="ru">по да́нным</span>, <span class="ru">напо́мним</span>. Ngữ pháp B1 không phải để học thuộc — nó là <b>chìa khoá đọc được thứ người Nga thật sự viết</b>.' }
  ],
  vocab: [
    { ru: 'заголо́вок', vn: 'tiêu đề' }, { ru: 'как сообща́ет', vn: 'theo tin từ' },
    { ru: 'по да́нным', vn: 'theo số liệu' }, { ru: 'напо́мним', vn: 'xin nhắc lại' },
    { ru: 'отме́тим', vn: 'cần lưu ý' }, { ru: 'ожида́ется', vn: 'dự kiến' },
    { ru: 'подде́ржка', vn: 'sự hỗ trợ' }, { ru: 'адапта́ция', vn: 'sự hoà nhập' },
    { ru: 'ста́лкиваться с', vn: 'gặp phải (+5)' }, { ru: 'оформле́ние', vn: 'việc làm thủ tục' },
    { ru: 'страхо́вка', vn: 'bảo hiểm' }, { ru: 'вы́расти', vn: 'tăng lên' },
    { ru: 'вуз', vn: 'trường đại học (viết tắt)' }
  ],
  ex: [
    { t: 'choice', q: 'Đoạn <span class="ru">лид</span> của một bài tin chứa gì?', options: ['Trích lời chuyên gia', 'Ai, cái gì, ở đâu, khi nào', 'Số liệu chi tiết', 'Bối cảnh lịch sử'], a: 1, why: 'Lid trả lời các câu hỏi cơ bản; chi tiết để phần thân.' },
    { t: 'choice', q: '<span class="ru ru-big">Напо́мним, что…</span> nghĩa là:', options: ['Chúng tôi quên rằng', 'Xin nhắc lại rằng', 'Hãy nhớ lấy', 'Người ta nhắc rằng'], a: 1, why: 'Ngôi мы mang nghĩa “toà soạn chúng tôi” — giọng chuẩn của báo Nga.' },
    { t: 'choice', q: 'Vì sao đọc tiêu đề và lid là đủ 80%?', options: ['Vì bài báo ngắn', 'Vì bài viết theo hình tháp ngược, quan trọng giảm dần', 'Vì phần sau chỉ có quảng cáo', 'Vì phần sau khó hiểu'], a: 1, why: 'Cấu trúc tháp ngược cho phép ngừng đọc bất cứ lúc nào.' },
    { t: 'choice', q: 'Theo bài báo trong bài học, sinh viên nước ngoài hay gặp khó khăn ở đâu?', options: ['Học tiếng Nga', 'Làm đăng ký tạm trú và bảo hiểm y tế', 'Tìm nhà ở', 'Thi cử'], a: 1, why: 'при оформлении регистрации и медицинской страховки.' },
    { t: 'choice', q: 'Tiêu đề <span class="ru">Учёные — о причи́нах измене́ния кли́мата</span> dùng dấu gạch ngang thay cho:', options: ['Dấu phẩy', 'Động từ bị lược bỏ', 'Dấu hai chấm', 'Tên tác giả'], a: 1, why: 'Quy ước tiêu đề báo Nga: lược động từ, đọc dấu gạch ngang thành “nói về”.' },
    { t: 'type', q: 'Dẫn số liệu trong bài báo: По ___ университе́та…', a: 'данным', alt: ['да́нным'], hint: 'Cách 3 số nhiều của данные.' },
    { t: 'choice', q: '<span class="ru ru-big">ста́лкиваться с</span> đòi cách nào?', options: ['Cách 2', 'Cách 3', 'Cách 4', 'Cách 5'], a: 3, why: 'сталкиваться с трудностями — с luôn đi với cách 5.' },
    { t: 'match', q: 'Nối:', pairs: [['подде́ржка', 'sự hỗ trợ'], ['страхо́вка', 'bảo hiểm'], ['вы́расти', 'tăng lên'], ['вуз', 'trường đại học']] }
  ]
};

/* ---------------------------------------------------------- BÀI 11 */
LESSON_DATA['b1-11'] = {
  level: 'b1',
  intro: 'Nghe bản tin thời sự là bài kiểm tra thật sự của trình độ B1. Tin vui: bản tin có <b>cấu trúc lặp lại</b> và <b>bộ câu cố định</b>, nên nó dễ hơn nghe hội thoại đời thường nhiều.',
  blocks: [
    { t: 'h', text: 'Vì sao bản tin dễ nghe hơn hội thoại' },
    { t: 'table', head: ['Bản tin', 'Hội thoại đời thường'], rows: [
      ['Phát thanh viên nói rõ, đúng chuẩn', 'Người ta nuốt âm, nói chồng lời'],
      ['Câu đầy đủ, có cấu trúc', 'Câu cụt, tiếng lóng'],
      ['Bộ từ lặp lại mỗi ngày', 'Từ vựng không đoán trước được'],
      ['Có tên riêng và con số làm mốc', 'Không có mốc để bám']
    ]},
    { t: 'h', text: 'Khuôn của một bản tin Nga' },
    { t: 'words', items: [
      { ru: 'В эфи́ре но́вости.', vn: 'Bản tin bắt đầu.' },
      { ru: 'Здра́вствуйте, в студи́и…', vn: 'Xin chào, tại trường quay là…' },
      { ru: 'Гла́вные те́мы э́того ча́са.', vn: 'Các chủ đề chính giờ này.' },
      { ru: 'Перехо́дим к сле́дующей но́вости.', vn: 'Chuyển sang tin tiếp theo.' },
      { ru: 'Как передаёт наш корреспонде́нт…', vn: 'Theo tin phóng viên của chúng tôi…' },
      { ru: 'Подро́бности — в на́шем сюже́те.', vn: 'Chi tiết trong phóng sự sau đây.' },
      { ru: 'На э́том всё. До встре́чи.', vn: 'Bản tin đến đây kết thúc. Hẹn gặp lại.' }
    ]},
    { t: 'tip', html: 'Bảy câu này lặp lại <b>mỗi bản tin</b>, mọi kênh. Nghe quen chúng là em có bảy cái mốc để bám, và giữa các mốc đó em chỉ cần bắt nội dung.' },
    { t: 'h', text: 'Bám vào bốn loại mốc' },
    { t: 'table', head: ['Loại mốc', 'Vì sao dễ bắt', 'Ví dụ'], rows: [
      ['<b>Tên riêng</b>', 'phát âm gần giống tiếng Việt', 'Москва́, Пеки́н, Вьетна́м, Пу́тин'],
      ['<b>Con số</b>', 'em đã thuộc từ A1', 'два́дцать проце́нтов, три ты́сячи'],
      ['<b>Ngày tháng</b>', 'khuôn cố định', 'пе́рвого сентября́, в про́шлом году́'],
      ['<b>Từ quốc tế</b>', 'gốc chung với tiếng Anh', 'президе́нт, экономи́ка, конфере́нция, проце́нт']
    ]},
    { t: 'note', html: 'Chiến thuật thực dụng: lần nghe đầu <b>chỉ ghi các mốc</b> — tên, số, ngày. Ghép chúng lại thường đã ra được ý chính, kiểu "Moskva — 20 phần trăm — năm ngoái". Sau đó nghe lại để lấp khoảng giữa.' },
    { t: 'h', text: 'Từ vựng thời sự hay gặp' },
    { t: 'words', items: [
      { ru: 'прави́тельство', vn: 'chính phủ' }, { ru: 'президе́нт', vn: 'tổng thống' },
      { ru: 'заседа́ние', vn: 'phiên họp' }, { ru: 'перегово́ры', vn: 'đàm phán' },
      { ru: 'соглаше́ние', vn: 'thoả thuận' }, { ru: 'экономи́ка', vn: 'kinh tế' },
      { ru: 'це́ны', vn: 'giá cả' }, { ru: 'рост', vn: 'sự tăng trưởng' },
      { ru: 'сниже́ние', vn: 'sự giảm' }, { ru: 'происше́ствие', vn: 'sự cố' },
      { ru: 'пострада́вшие', vn: 'người bị nạn' }, { ru: 'по́мощь', vn: 'sự cứu trợ' },
      { ru: 'о́бласть', vn: 'tỉnh, vùng' }, { ru: 'вла́сти', vn: 'chính quyền' }
    ]},
    { t: 'h', text: 'Nghe thử một mẩu tin' },
    { t: 'dialog', lines: [
      { who: '1', ru: 'В эфи́ре но́вости. Здра́вствуйте.', vn: 'Bản tin bắt đầu. Xin chào quý vị.' },
      { who: '2', ru: 'Гла́вная те́ма ча́са — пого́да в Сиби́ри.', vn: 'Chủ đề chính giờ này — thời tiết ở Siberia.' },
      { who: '3', ru: 'По да́нным гидрометцентра, в Ирку́тской о́бласти ожида́ется пониже́ние температу́ры до ми́нус тридцати́ пяти́ гра́дусов.', vn: 'Theo số liệu trung tâm khí tượng, tỉnh Irkutsk dự kiến nhiệt độ giảm xuống âm 35 độ.' },
      { who: '4', ru: 'Вла́сти реги́она про́сят жи́телей быть осторо́жными.', vn: 'Chính quyền vùng đề nghị người dân cẩn thận.' },
      { who: '5', ru: 'Шко́лы мо́гут перейти́ на дистанцио́нное обуче́ние.', vn: 'Các trường có thể chuyển sang học trực tuyến.' },
      { who: '6', ru: 'Подро́бности — в на́шем сюже́те.', vn: 'Chi tiết trong phóng sự sau đây.' }
    ]},
    { t: 'tip', html: 'Bấm loa nghe cả sáu dòng liền, <b>không nhìn chữ</b>. Lần đầu chỉ cần bắt được: Siberia · âm 35 · trường học. Ba mốc đó là đủ hiểu bản tin. Rồi nghe lại lần hai mới đọc theo.' },
    { t: 'h', text: 'Nguồn nghe thật cho B1' },
    { t: 'table', head: ['Nguồn', 'Đặc điểm'], rows: [
      ['Bản tin thời tiết trên TV Nga', 'Ngắn, khuôn lặp lại, đầy số liệu — dễ nhất'],
      ['Tin ngắn 2–3 phút trên kênh tin tức', 'Đủ dài để luyện, đủ ngắn để nghe lại nhiều lần'],
      ['Podcast tin tức có bản chữ đi kèm', 'Lý tưởng cho phương pháp ba lượt ở A2 bài 22']
    ]},
    { t: 'warn', html: 'Đừng bắt đầu bằng phỏng vấn hoặc talk show — người ta nói chồng lời, ngắt nhau, dùng tiếng lóng. Đó là trình độ B2. Ở B1 hãy nghe thứ có kịch bản viết sẵn.' }
  ],
  vocab: [
    { ru: 'но́вости', vn: 'bản tin' }, { ru: 'корреспонде́нт', vn: 'phóng viên' },
    { ru: 'сюже́т', vn: 'phóng sự' }, { ru: 'прави́тельство', vn: 'chính phủ' },
    { ru: 'перегово́ры', vn: 'đàm phán' }, { ru: 'рост', vn: 'sự tăng trưởng' },
    { ru: 'сниже́ние', vn: 'sự giảm' }, { ru: 'вла́сти', vn: 'chính quyền' },
    { ru: 'о́бласть', vn: 'tỉnh, vùng' }, { ru: 'жи́тели', vn: 'người dân' },
    { ru: 'дистанцио́нное обуче́ние', vn: 'học trực tuyến' }, { ru: 'осторо́жный', vn: 'cẩn thận' }
  ],
  ex: [
    { t: 'choice', q: 'Vì sao bản tin dễ nghe hơn hội thoại đời thường?', options: ['Vì nói chậm hơn', 'Vì có cấu trúc lặp lại và bộ câu cố định', 'Vì từ vựng ít hơn', 'Vì có phụ đề'], a: 1, why: 'Khuôn lặp lại cho em các mốc để bám vào.' },
    { t: 'choice', q: 'Lần nghe đầu tiên nên tập trung vào:', options: ['Từng từ một', 'Tên riêng, con số, ngày tháng', 'Ngữ pháp', 'Giọng phát thanh viên'], a: 1, why: 'Ghép các mốc lại thường đã ra ý chính.' },
    { t: 'choice', q: '<span class="ru ru-big">Как передаёт наш корреспонде́нт</span> nghĩa là:', options: ['Phóng viên của chúng tôi truyền đạt thế nào', 'Theo tin phóng viên của chúng tôi', 'Hãy chuyển cho phóng viên', 'Phóng viên đang ở đâu'], a: 1, why: 'Cụm khuôn dẫn nguồn, gặp trong mọi bản tin.' },
    { t: 'choice', q: 'Theo mẩu tin trong bài, nhiệt độ dự kiến ở tỉnh Irkutsk là:', options: ['−25 độ', '−30 độ', '−35 độ', '−15 độ'], a: 2, why: 'до ми́нус тридцати́ пяти́ гра́дусов.' },
    { t: 'choice', q: 'Ở B1 <b>không nên</b> bắt đầu luyện nghe bằng:', options: ['Bản tin thời tiết', 'Tin ngắn 2–3 phút', 'Talk show và phỏng vấn', 'Podcast có bản chữ'], a: 2, why: 'Talk show có người nói chồng lời và tiếng lóng — đó là B2.' },
    { t: 'type', q: 'Điền: По ___ гидрометцентра… (theo số liệu)', a: 'данным', alt: ['да́нным'], hint: 'Cụm khuôn dẫn số liệu.' },
    { t: 'choice', q: '<span class="ru ru-big">сниже́ние</span> nghĩa là:', options: ['sự tăng trưởng', 'sự giảm', 'sự thay đổi', 'sự ổn định'], a: 1, why: 'Cùng gốc với низкий (thấp). Trái nghĩa với рост.' },
    { t: 'match', q: 'Nối:', pairs: [['вла́сти', 'chính quyền'], ['жи́тели', 'người dân'], ['перегово́ры', 'đàm phán'], ['сюже́т', 'phóng sự']] }
  ]
};

/* ---------------------------------------------------------- BÀI 12 */
LESSON_DATA['b1-12'] = {
  level: 'b1',
  intro: 'Nói được ý kiến <b>có lý lẽ</b> là ranh giới thật sự giữa A2 và B1. Không phải "tôi thích" mà là "tôi cho rằng… vì… ví dụ…". Đây cũng là phần <b>nói</b> của kỳ thi ТРКИ-1.',
  blocks: [
    { t: 'h', text: 'Khung bốn bước' },
    { t: 'table', head: ['Bước', 'Việc', 'Câu mở đầu'], rows: [
      ['1. Nêu ý kiến', 'Nói rõ mình nghĩ gì', 'Я счита́ю, что… · На мой взгляд… · По-мо́ему…'],
      ['2. Lý lẽ', 'Vì sao nghĩ vậy', 'Во-пе́рвых… во-вторы́х… · Де́ло в том, что…'],
      ['3. Ví dụ', 'Chứng minh bằng chuyện cụ thể', 'Наприме́р… · Приведу́ приме́р… · Так, в мое́й стране́…'],
      ['4. Kết', 'Chốt lại', 'Поэ́тому я ду́маю, что… · Таки́м о́бразом…']
    ]},
    { t: 'tip', html: 'Bốn bước này là <b>bộ khung cứu mạng</b> khi bị hỏi bất ngờ. Ngay cả khi em chưa nghĩ ra gì, cứ bắt đầu bằng "Я счита́ю, что…" là miệng chạy trước, đầu theo sau. Giám khảo đánh giá cấu trúc chứ không đánh giá em thông minh cỡ nào.' },
    { t: 'h', text: 'Nêu ý kiến — từ nhẹ đến mạnh' },
    { t: 'words', items: [
      { ru: 'Мне ка́жется, что…', vn: 'Tôi thấy hình như… (nhẹ nhất, khiêm tốn)' },
      { ru: 'По-мо́ему…', vn: 'Theo tôi…' },
      { ru: 'На мой взгляд…', vn: 'Theo cách nhìn của tôi… (trang trọng hơn)' },
      { ru: 'Я счита́ю, что…', vn: 'Tôi cho rằng… (chắc chắn)' },
      { ru: 'Я убеждён, что…', vn: 'Tôi tin chắc rằng… (mạnh nhất)' },
      { ru: 'Наско́лько я зна́ю…', vn: 'Theo chỗ tôi biết… (rào trước khi không chắc)' }
    ]},
    { t: 'h', text: 'Đồng ý và không đồng ý' },
    { t: 'table', head: ['Đồng ý', 'Không đồng ý'], rows: [
      ['Я согла́сен / согла́сна.', 'Я не согла́сен / не согла́сна.'],
      ['Соверше́нно ве́рно.', 'Не совсе́м так.'],
      ['Вы пра́вы.', 'Бою́сь, что э́то не так.'],
      ['Я то́же так ду́маю.', 'У меня́ друго́е мне́ние.'],
      ['Э́то пра́вда, но…', 'С одно́й стороны́ да, но с друго́й…']
    ]},
    { t: 'warn', html: 'Nhớ: <span class="ru">согла́сен</span> là dạng ngắn nên <b>hoà hợp theo giống</b> — nam nói <span class="ru">согла́сен</span>, nữ nói <span class="ru">согла́сна</span>, số nhiều <span class="ru">согла́сны</span>. Và nó đi với <span class="ru">с</span> + cách 5: <span class="ru">Я согла́сен <b>с ва́ми</b></span>.' },
    { t: 'note', html: 'Người Nga phản đối <b>thẳng hơn</b> người Việt. <span class="ru">Я не согла́сен</span> nói ra không hề bị coi là mất lịch sự — ngược lại, vòng vo mãi mới bị coi là không thành thật. Nhưng vẫn nên kèm lý do ngay sau đó.' },
    { t: 'h', text: 'Trình bày hai mặt' },
    { t: 'words', items: [
      { ru: 'С одно́й стороны́…, с друго́й стороны́…', vn: 'Một mặt…, mặt khác…' },
      { ru: 'Есть свои́ плю́сы и ми́нусы.', vn: 'Có mặt lợi và mặt hại.' },
      { ru: 'Э́то зави́сит от ситуа́ции.', vn: 'Cái đó tuỳ tình huống.' },
      { ru: 'Всё не так про́сто.', vn: 'Mọi chuyện không đơn giản thế.' },
      { ru: 'Ну́жно учи́тывать, что…', vn: 'Cần tính đến việc là…' }
    ]},
    { t: 'h', text: 'Một bài trình bày mẫu' },
    { t: 'p', html: '<b>Đề: Ну́жно ли учи́ть иностра́нные языки́?</b>' },
    { t: 'dialog', lines: [
      { who: '1', ru: 'Я счита́ю, что учи́ть иностра́нные языки́ обяза́тельно ну́жно.', vn: 'Tôi cho rằng học ngoại ngữ là điều nhất thiết phải làm.' },
      { who: '2', ru: 'Во-пе́рвых, язы́к открыва́ет доступ к информа́ции, кото́рой нет на родно́м языке́.', vn: 'Thứ nhất, ngôn ngữ mở ra nguồn thông tin không có bằng tiếng mẹ đẻ.' },
      { who: '3', ru: 'Во-вторы́х, изуча́я язы́к, мы лу́чше понима́ем культу́ру друго́й страны́.', vn: 'Thứ hai, khi học ngôn ngữ, ta hiểu văn hoá nước khác hơn.' },
      { who: '4', ru: 'Наприме́р, я на́чал понима́ть ру́сские фи́льмы то́лько тогда́, когда́ вы́учил язы́к.', vn: 'Ví dụ, tôi chỉ bắt đầu hiểu phim Nga khi đã học được tiếng.' },
      { who: '5', ru: 'Коне́чно, э́то тру́дно и тре́бует вре́мени.', vn: 'Tất nhiên việc đó khó và tốn thời gian.' },
      { who: '6', ru: 'Тем не ме́нее, на мой взгляд, результа́т сто́ит уси́лий.', vn: 'Tuy vậy, theo tôi, kết quả xứng đáng với công sức.' },
      { who: '7', ru: 'Таки́м о́бразом, я убеждён, что языки́ на́до учи́ть в любо́м во́зрасте.', vn: 'Như vậy, tôi tin chắc rằng nên học ngoại ngữ ở bất kỳ tuổi nào.' }
    ]},
    { t: 'note', html: 'Bảy câu, đúng bốn bước, có cả một câu <b>nhượng bộ</b> (câu 5: "tất nhiên là khó") trước khi chốt. Câu nhượng bộ ấy là thứ khiến bài nghe chín chắn — nó cho thấy em đã nghĩ đến phía ngược lại rồi mới kết luận.' },
    { t: 'tip', html: 'Bài tập ngoài web: chọn một câu hỏi bất kỳ — "Có nên sống ở thành phố lớn không?", "Mạng xã hội có hại không?" — rồi nói <b>bảy câu</b> theo đúng khung này. Thu âm lại, nghe, sửa. Làm mười lần là em không còn sợ phần nói nữa.' }
  ],
  vocab: [
    { ru: 'счита́ть', vn: 'cho rằng' }, { ru: 'на мой взгляд', vn: 'theo cách nhìn của tôi' },
    { ru: 'убеждён', vn: 'tin chắc' }, { ru: 'согла́сен', vn: 'đồng ý' },
    { ru: 'мне́ние', vn: 'ý kiến' }, { ru: 'наприме́р', vn: 'ví dụ' },
    { ru: 'привести́ приме́р', vn: 'nêu ví dụ' }, { ru: 'плю́сы и ми́нусы', vn: 'mặt lợi và hại' },
    { ru: 'учи́тывать', vn: 'tính đến' }, { ru: 'уси́лие', vn: 'công sức' },
    { ru: 'сто́ить', vn: 'đáng giá' }, { ru: 'в любо́м во́зрасте', vn: 'ở bất kỳ tuổi nào' }
  ],
  ex: [
    { t: 'choice', q: 'Bốn bước trình bày ý kiến là:', options: ['Mở – thân – kết – chào', 'Ý kiến – lý lẽ – ví dụ – kết', 'Hỏi – đáp – hỏi lại – kết', 'Kể – tả – bình – luận'], a: 1, why: 'Khung này dùng được cho mọi đề, kể cả khi bị hỏi bất ngờ.' },
    { t: 'choice', q: 'Oanh nói "Tôi đồng ý" thì dùng:', options: ['Я согла́сен', 'Я согла́сна', 'Я согла́сны', 'Я согла́сно'], a: 1, why: 'согласен là dạng ngắn, hoà hợp theo giống — nữ dùng согласна.' },
    { t: 'choice', q: '<span class="ru">согла́сен</span> đi với giới từ và cách nào?', options: ['о + 6', 'с + 5', 'к + 3', 'за + 4'], a: 1, why: 'Я согласен с вами — с + cách 5.' },
    { t: 'choice', q: 'Cách nêu ý kiến <b>nhẹ nhàng nhất</b> là:', options: ['Я убеждён, что…', 'Я счита́ю, что…', 'Мне ка́жется, что…', 'Соверше́нно ве́рно'], a: 2, why: 'Мне кажется = tôi thấy hình như, khiêm tốn nhất trong bốn mức.' },
    { t: 'choice', q: 'Vì sao nên có một câu <b>nhượng bộ</b> trước khi kết luận?', options: ['Để bài dài hơn', 'Để cho thấy đã nghĩ đến phía ngược lại', 'Vì đề bài yêu cầu', 'Để tránh bị phản đối'], a: 1, why: 'Nó khiến lập luận nghe chín chắn thay vì một chiều.' },
    { t: 'type', q: 'Nêu ví dụ: ___ , я на́чал понима́ть ру́сские фи́льмы…', a: 'например', alt: ['наприме́р'], hint: 'Từ chỉ ví dụ.' },
    { t: 'choice', q: 'Người Nga phản đối trực tiếp thì:', options: ['Bị coi là mất lịch sự', 'Là bình thường, nhưng nên kèm lý do', 'Chỉ dùng với bạn thân', 'Không bao giờ làm'], a: 1, why: 'Vòng vo mãi mới bị coi là không thành thật; nhưng vẫn nên nói rõ vì sao.' },
    { t: 'match', q: 'Nối:', pairs: [['на мой взгляд', 'theo cách nhìn của tôi'], ['мне́ние', 'ý kiến'], ['учи́тывать', 'tính đến'], ['уси́лие', 'công sức']] }
  ]
};

/* ---------------------------------------------------------- BÀI 13 */
LESSON_DATA['b1-13'] = {
  level: 'b1',
  intro: 'Đơn từ hành chính Nga có <b>khuôn cứng</b> — viết sai khuôn thì người ta trả lại dù nội dung đúng. Bài này cho em cái khuôn ấy, và nó sẽ theo em suốt thời gian ở Nga.',
  blocks: [
    { t: 'h', text: 'Khuôn của một tờ заявление' },
    { t: 'table', head: ['Vị trí', 'Nội dung', 'Ghi chú'], rows: [
      ['Góc trên bên phải', 'Ре́ктору ИГУ<br>Ивано́ву И. П.<br>от студе́нта 2 ку́рса<br>Нгуе́н Кхак Чунга', 'Người nhận ở <b>cách 3</b>, người viết ở <b>cách 2</b> sau chữ «от»'],
      ['Giữa trang', 'ЗАЯВЛЕ́НИЕ', 'Viết hoa, không có dấu chấm'],
      ['Thân đơn', 'Прошу́ …', 'Luôn bắt đầu bằng chữ «Прошу́»'],
      ['Dưới bên trái', 'Ngày tháng', ''],
      ['Dưới bên phải', 'Chữ ký', '']
    ]},
    { t: 'warn', html: 'Chỗ hay sai nhất: dòng người viết. Phải là <span class="ru"><b>от</b> студе́нт<b>а</b></span> — giới từ <span class="ru">от</span> + cách 2. Người Việt hay viết <span class="ru">от студе́нт</span> để nguyên dạng, và tờ đơn bị trả lại.' },
    { t: 'h', text: 'Những việc em sẽ phải xin' },
    { t: 'words', items: [
      { ru: 'Прошу́ разреши́ть мне…', vn: 'Tôi xin phép được…' },
      { ru: 'Прошу́ предоста́вить мне…', vn: 'Tôi xin được cấp…' },
      { ru: 'Прошу́ продли́ть…', vn: 'Tôi xin gia hạn…' },
      { ru: 'Прошу́ вы́дать спра́вку о том, что…', vn: 'Tôi xin cấp giấy xác nhận rằng…' },
      { ru: 'Прошу́ переве́сти меня́ …', vn: 'Tôi xin được chuyển…' },
      { ru: 'Прошу́ рассмотре́ть мою́ про́сьбу.', vn: 'Kính mong xem xét đề nghị của tôi.' }
    ]},
    { t: 'h', text: 'Một tờ đơn hoàn chỉnh' },
    { t: 'p', html: '<span class="ru">Ре́ктору Ирку́тского госуда́рственного университе́та<br>Ивано́ву И. П.<br>от аспира́нта ка́федры эксплуата́ции автомоби́льного тра́нспорта<br>Нгуе́н Кхак Чунга</span>' },
    { t: 'p', html: '<span class="ru"><b>ЗАЯВЛЕ́НИЕ</b></span>' },
    { t: 'p', html: '<span class="ru">Прошу́ вы́дать мне спра́вку о том, что я явля́юсь аспира́нтом пе́рвого го́да обуче́ния. Спра́вка необходи́ма для оформле́ния регистра́ции по ме́сту пребыва́ния.</span>' },
    { t: 'p', html: '<span class="ru">30.08.2026 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; По́дпись</span>' },
    { t: 'note', html: 'Để ý hai cụm hành chính chuẩn: <span class="ru"><b>явля́ться</b> + cách 5</span> (là, có tư cách là — trang trọng hơn нахожусь hay «я аспирант») và <span class="ru"><b>необходи́м для</b></span> + cách 2 (cần thiết cho việc gì).' },
    { t: 'h', text: 'Thư điện tử công việc' },
    { t: 'table', head: ['Phần', 'Mẫu câu'], rows: [
      ['Mở', 'Уважа́емый Ива́н Петро́вич!'],
      ['Lý do viết', 'Пишу́ Вам по по́воду… · Обраща́юсь к Вам с про́сьбой…'],
      ['Nội dung', 'В свя́зи с тем, что… · Хоте́л бы уточни́ть…'],
      ['Đề nghị', 'Бу́ду благода́рен, е́сли Вы… · Не могли́ бы Вы…'],
      ['Kết', 'Зара́нее благодарю́. · С уваже́нием, Чунг']
    ]},
    { t: 'warn', html: 'Trong thư trang trọng tiếng Nga, đại từ <b>Вы</b> và <b>Вас, Вам, Ваш</b> viết <b>hoa</b> khi nói với một người cụ thể. Đó là dấu hiệu của người viết có học. Người nước ngoài hầu như không ai biết chi tiết này.' },
    { t: 'h', text: 'Ba từ đừng nhầm' },
    { t: 'table', head: ['Từ', 'Là gì', 'Ai viết'], rows: [
      ['заявле́ние', 'đơn xin', 'em viết, gửi cơ quan'],
      ['спра́вка', 'giấy xác nhận', 'cơ quan cấp cho em'],
      ['объясни́тельная', 'bản giải trình', 'em viết khi có sự cố'],
      ['дове́ренность', 'giấy uỷ quyền', 'em viết để nhờ người khác làm thay']
    ]},
    { t: 'tip', html: 'Ba tờ giấy em sẽ cần nhiều nhất khi học ở Nga: <span class="ru">спра́вка об обуче́нии</span> (xác nhận đang học), <span class="ru">спра́вка с ме́ста жи́тельства</span> (xác nhận nơi ở), và <span class="ru">вы́писка из зачётной кни́жки</span> (bảng điểm). Nhớ tên đúng thì xin nhanh hơn nhiều.' }
  ],
  vocab: [
    { ru: 'заявле́ние', vn: 'đơn xin' }, { ru: 'Прошу́', vn: 'Tôi xin, tôi đề nghị' },
    { ru: 'разреши́ть', vn: 'cho phép' }, { ru: 'предоста́вить', vn: 'cấp cho' },
    { ru: 'продли́ть', vn: 'gia hạn' }, { ru: 'вы́дать', vn: 'cấp phát' },
    { ru: 'явля́ться', vn: 'là (trang trọng, +5)' }, { ru: 'необходи́м', vn: 'cần thiết' },
    { ru: 'в свя́зи с', vn: 'liên quan đến (+5)' }, { ru: 'уточни́ть', vn: 'làm rõ' },
    { ru: 'дове́ренность', vn: 'giấy uỷ quyền' }, { ru: 'по ме́сту пребыва́ния', vn: 'theo nơi tạm trú' }
  ],
  ex: [
    { t: 'choice', q: 'Trong đơn, dòng người viết bắt đầu bằng <span class="ru">от</span> nên danh từ ở cách nào?', options: ['Cách 1', 'Cách 2', 'Cách 3', 'Cách 5'], a: 1, why: 'от студента — от luôn đòi cách 2. Đây là lỗi khiến đơn bị trả lại.' },
    { t: 'choice', q: 'Thân đơn tiếng Nga luôn bắt đầu bằng từ nào?', options: ['Хочу́', 'Прошу́', 'Мне ну́жно', 'Пожа́луйста'], a: 1, why: 'Прошу — khuôn cứng của mọi tờ заявление.' },
    { t: 'choice', q: '<span class="ru ru-big">спра́вка</span> khác <span class="ru ru-big">заявле́ние</span> ở chỗ:', options: ['Không khác gì', 'Справка do cơ quan cấp, заявление do em viết', 'Справка dài hơn', 'Заявление phải có dấu'], a: 1, why: 'Em viết đơn xin; cơ quan cấp giấy xác nhận.' },
    { t: 'choice', q: 'Trong thư trang trọng, đại từ <span class="ru">Вы</span> viết thế nào?', options: ['Luôn viết thường', 'Viết hoa khi nói với một người cụ thể', 'Viết hoa mọi lúc', 'Không dùng Вы trong thư'], a: 1, why: 'Dấu hiệu của người viết có học — rất ít người nước ngoài biết.' },
    { t: 'type', q: 'Điền: Прошу́ ___ мне спра́вку. (cấp phát)', a: 'выдать', alt: ['вы́дать'], hint: 'Động từ hành chính nghĩa “cấp”.' },
    { t: 'choice', q: '<span class="ru">явля́ться</span> đòi cách nào?', options: ['Cách 2', 'Cách 3', 'Cách 4', 'Cách 5'], a: 3, why: 'Я являюсь аспирантом — cách 5, giống как работать + cách 5.' },
    { t: 'choice', q: 'Giấy xin gia hạn visa thì dùng động từ nào?', options: ['разреши́ть', 'продли́ть', 'вы́дать', 'переве́сти'], a: 1, why: 'продлить = gia hạn.' },
    { t: 'match', q: 'Nối:', pairs: [['заявле́ние', 'đơn xin'], ['спра́вка', 'giấy xác nhận'], ['дове́ренность', 'giấy uỷ quyền'], ['по́дпись', 'chữ ký']] }
  ]
};

/* ---------------------------------------------------------- BÀI 14 */
LESSON_DATA['b1-14'] = {
  level: 'b1',
  intro: 'Hệ đại học Nga có cấu trúc và từ vựng riêng, khác hẳn Việt Nam. Bài này cho em bản đồ đầy đủ — từ năm nhất đến bảo vệ luận án.',
  blocks: [
    { t: 'h', text: 'Bốn bậc học' },
    { t: 'table', head: ['Bậc', 'Tiếng Nga', 'Thời gian', 'Kết quả'], rows: [
      ['Cử nhân', 'бакалавриа́т', '4 năm', 'дипло́м бакала́вра'],
      ['Thạc sĩ', 'магистрату́ра', '2 năm', 'дипло́м маги́стра'],
      ['Nghiên cứu sinh', 'аспиранту́ра', '3–4 năm', 'кандида́т нау́к'],
      ['Tiến sĩ khoa học', 'докторанту́ра', 'nhiều năm', 'до́ктор нау́к']
    ]},
    { t: 'note', html: 'Chú ý điểm khác Việt Nam: <span class="ru">кандида́т нау́к</span> tương đương học vị tiến sĩ (PhD) ở phương Tây, còn <span class="ru">до́ктор нау́к</span> là <b>bậc cao hơn nữa</b>, thường mất thêm mười năm nghiên cứu. Gọi người có bằng кандидат là "tiến sĩ" trong tiếng Việt là đúng.' },
    { t: 'h', text: 'Bộ máy trường' },
    { t: 'words', items: [
      { ru: 'университе́т / вуз', vn: 'trường đại học' },
      { ru: 'факульте́т', vn: 'khoa (lớn)' },
      { ru: 'ка́федра', vn: 'bộ môn' },
      { ru: 'декана́т', vn: 'văn phòng khoa' },
      { ru: 'ректора́т', vn: 'ban giám hiệu' },
      { ru: 'ре́ктор', vn: 'hiệu trưởng' },
      { ru: 'дека́н', vn: 'trưởng khoa' },
      { ru: 'заве́дующий ка́федрой', vn: 'trưởng bộ môn' },
      { ru: 'нау́чный руководи́тель', vn: 'thầy hướng dẫn' },
      { ru: 'преподава́тель', vn: 'giảng viên' },
      { ru: 'профе́ссор / доце́нт', vn: 'giáo sư / phó giáo sư' }
    ]},
    { t: 'warn', html: 'Nhắc lại bẫy giới từ từ A1: <span class="ru"><b>в</b> университе́те</span> nhưng <span class="ru"><b>на</b> факульте́те</span> và <span class="ru"><b>на</b> ка́федре</span>. Cùng một toà nhà, ba giới từ hai kiểu.' },
    { t: 'h', text: 'Việc học hằng ngày' },
    { t: 'words', items: [
      { ru: 'ле́кция', vn: 'bài giảng' }, { ru: 'семина́р', vn: 'buổi thảo luận' },
      { ru: 'практи́ческое заня́тие', vn: 'buổi thực hành' }, { ru: 'пра́ктика', vn: 'kỳ thực tập' },
      { ru: 'расписа́ние', vn: 'thời khoá biểu' }, { ru: 'семе́стр', vn: 'học kỳ' },
      { ru: 'се́ссия', vn: 'kỳ thi cuối kỳ' }, { ru: 'кани́кулы', vn: 'kỳ nghỉ' },
      { ru: 'зачёт', vn: 'bài kiểm tra đạt/không đạt' }, { ru: 'экза́мен', vn: 'kỳ thi có điểm' },
      { ru: 'зачётная кни́жка', vn: 'sổ điểm cá nhân' }, { ru: 'курсова́я рабо́та', vn: 'bài niên luận' },
      { ru: 'дипло́мная рабо́та', vn: 'khoá luận tốt nghiệp' }, { ru: 'диссерта́ция', vn: 'luận án' }
    ]},
    { t: 'h', text: 'Thang điểm Nga' },
    { t: 'table', head: ['Điểm', 'Tên', 'Nghĩa'], rows: [
      ['5', 'отли́чно', 'xuất sắc'],
      ['4', 'хорошо́', 'khá'],
      ['3', 'удовлетвори́тельно', 'đạt'],
      ['2', 'неудовлетвори́тельно', 'không đạt'],
      ['—', 'зачёт / незачёт', 'đạt / không đạt (với môn không chấm điểm)']
    ]},
    { t: 'tip', html: 'Người Nga hay nói tắt: <span class="ru">пятёрка</span> (điểm 5), <span class="ru">четвёрка</span> (điểm 4), <span class="ru">тро́йка</span> (điểm 3), <span class="ru">дво́йка</span> (điểm 2 — trượt). Câu hay nghe: <span class="ru">Я сдал на пятёрку!</span> — Tôi được điểm 5!' },
    { t: 'h', text: 'Thi cử' },
    { t: 'words', items: [
      { ru: 'сдава́ть экза́мен', vn: 'đi thi (chưa biết đỗ hay không)' },
      { ru: 'сдать экза́мен', vn: 'thi đỗ (thể hoàn thành!)' },
      { ru: 'провали́ть экза́мен', vn: 'thi trượt' },
      { ru: 'пересда́ча', vn: 'thi lại' },
      { ru: 'гото́виться к экза́мену', vn: 'ôn thi (+3)' },
      { ru: 'билет', vn: 'phiếu đề thi (bốc thăm)' },
      { ru: 'защи́та диссерта́ции', vn: 'buổi bảo vệ luận án' },
      { ru: 'автореферат', vn: 'tóm tắt luận án' }
    ]},
    { t: 'warn', html: 'Cặp <span class="ru">сдава́ть</span> ↔ <span class="ru">сдать</span> là <b>ví dụ hoàn hảo của thể động từ</b>: <span class="ru">Я сдава́л экза́мен</span> nghĩa là "tôi đã đi thi" (không nói đỗ hay trượt), còn <span class="ru">Я сдал экза́мен</span> nghĩa là "tôi đã thi <b>đỗ</b>". Hỏi nhầm thể là hỏi nhầm chuyện.' },
    { t: 'h', text: 'Đặc điểm thi cử Nga: bốc thăm' },
    { t: 'p', html: 'Thi vấn đáp ở Nga theo lệ: sinh viên <b>bốc một tờ билет</b> có hai ba câu hỏi, được cho vài chục phút chuẩn bị ở bàn, rồi lên trả lời trực tiếp với giảng viên. Không có trắc nghiệm, không có bài viết — chỉ nói.' },
    { t: 'note', html: 'Vì thế kỹ năng ở bài 12 — trình bày ý kiến có cấu trúc — <b>không phải chuyện học thêm</b> mà là chuyện sống còn trong hệ đại học Nga. Sinh viên Nga được rèn nói trước lớp từ nhỏ; đó là điểm người Việt sang học hay yếu nhất.' }
  ],
  vocab: [
    { ru: 'аспиранту́ра', vn: 'hệ nghiên cứu sinh' }, { ru: 'кандида́т нау́к', vn: 'học vị tiến sĩ' },
    { ru: 'ка́федра', vn: 'bộ môn' }, { ru: 'декана́т', vn: 'văn phòng khoa' },
    { ru: 'нау́чный руководи́тель', vn: 'thầy hướng dẫn' }, { ru: 'се́ссия', vn: 'kỳ thi cuối kỳ' },
    { ru: 'зачёт', vn: 'bài kiểm tra đạt/không đạt' }, { ru: 'сдать экза́мен', vn: 'thi đỗ' },
    { ru: 'сдава́ть экза́мен', vn: 'đi thi' }, { ru: 'пересда́ча', vn: 'thi lại' },
    { ru: 'диссерта́ция', vn: 'luận án' }, { ru: 'защи́та', vn: 'buổi bảo vệ' },
    { ru: 'отли́чно', vn: 'điểm xuất sắc' }, { ru: 'расписа́ние', vn: 'thời khoá biểu' }
  ],
  ex: [
    { t: 'choice', q: '<span class="ru ru-big">кандида́т нау́к</span> tương đương học vị nào?', options: ['Thạc sĩ', 'Tiến sĩ (PhD)', 'Cử nhân', 'Giáo sư'], a: 1, why: 'Còn доктор наук là bậc cao hơn nữa, thường mất thêm mười năm.' },
    { t: 'choice', q: 'Khác nhau giữa <span class="ru">сдава́л</span> và <span class="ru">сдал</span>:', options: ['Không khác', 'сдавал = đã đi thi; сдал = đã thi đỗ', 'сдал lịch sự hơn', 'сдавал dùng cho tương lai'], a: 1, why: 'Ví dụ hoàn hảo của thể động từ: quá trình ≠ kết quả.' },
    { t: 'choice', q: 'Chọn giới từ đúng: Он у́чится ___ ка́федре тра́нспорта.', options: ['в', 'на', 'о', 'к'], a: 1, why: 'на кафедре, на факультете — nhưng в университете.' },
    { t: 'choice', q: 'Thi vấn đáp ở Nga, sinh viên phải:', options: ['Làm trắc nghiệm', 'Viết bài luận', 'Bốc một tờ билет rồi trả lời miệng', 'Nộp bài về nhà'], a: 2, why: 'Đó là lệ thi chuẩn của đại học Nga — vì thế kỹ năng nói rất quan trọng.' },
    { t: 'type', q: 'Điền: Я гото́влюсь ___ экза́мену.', a: 'к', hint: 'готовиться đòi giới từ к + cách 3.' },
    { t: 'choice', q: '<span class="ru ru-big">зачёт</span> khác <span class="ru ru-big">экза́мен</span> ở chỗ:', options: ['зачёт khó hơn', 'зачёт chỉ đạt/không đạt, không cho điểm', 'зачёт thi viết', 'Không khác gì'], a: 1, why: 'Экзамен cho điểm từ 2 đến 5; зачёт chỉ có зачёт / незачёт.' },
    { t: 'choice', q: 'Điểm <b>2</b> trong hệ Nga nghĩa là:', options: ['Khá', 'Đạt', 'Không đạt', 'Xuất sắc'], a: 2, why: 'неудовлетворительно — người Nga gọi tắt là двойка, tức trượt.' },
    { t: 'match', q: 'Nối:', pairs: [['ле́кция', 'bài giảng'], ['се́ссия', 'kỳ thi cuối kỳ'], ['защи́та', 'buổi bảo vệ luận án'], ['декана́т', 'văn phòng khoa']] }
  ]
};

/* ---------------------------------------------------------- BÀI 15 */
LESSON_DATA['b1-15'] = {
  level: 'b1',
  intro: 'Thành phố và giao thông — chủ đề chắc chắn xuất hiện trong bài nói ТРКИ-1, và cũng là chuyện em phải nói mỗi ngày khi sống ở Nga.',
  blocks: [
    { t: 'h', text: 'Phương tiện công cộng Nga' },
    { t: 'words', items: [
      { ru: 'обще́ственный тра́нспорт', vn: 'giao thông công cộng' },
      { ru: 'авто́бус', vn: 'xe buýt' }, { ru: 'тролле́йбус', vn: 'xe điện bánh hơi' },
      { ru: 'трамва́й', vn: 'tàu điện mặt đất' }, { ru: 'метро́', vn: 'tàu điện ngầm' },
      { ru: 'маршру́тка', vn: 'xe khách nhỏ chạy tuyến cố định' },
      { ru: 'электри́чка', vn: 'tàu ngoại ô' }, { ru: 'такси́', vn: 'taxi' },
      { ru: 'проездно́й', vn: 'vé tháng' }, { ru: 'турнике́т', vn: 'cửa soát vé' }
    ]},
    { t: 'note', html: '<span class="ru">Маршру́тка</span> là thứ rất Nga và không có ở phương Tây: xe nhỏ mười mấy chỗ, chạy tuyến cố định nhưng dừng bất cứ đâu khách yêu cầu. Câu để thuộc: <span class="ru">Останови́те, пожа́луйста, на сле́дующей!</span> — Cho tôi xuống ở bến sau!' },
    { t: 'h', text: 'Vấn đề của thành phố lớn' },
    { t: 'words', items: [
      { ru: 'про́бка', vn: 'tắc đường' }, { ru: 'час пик', vn: 'giờ cao điểm' },
      { ru: 'парко́вка', vn: 'chỗ đỗ xe' }, { ru: 'шум', vn: 'tiếng ồn' },
      { ru: 'загрязне́ние во́здуха', vn: 'ô nhiễm không khí' },
      { ru: 'плотность населе́ния', vn: 'mật độ dân cư' },
      { ru: 'сто́имость жилья́', vn: 'giá nhà' }, { ru: 'инфраструкту́ра', vn: 'hạ tầng' }
    ]},
    { t: 'words', items: [
      { ru: 'В це́нтре всегда́ про́бки.', vn: 'Trung tâm lúc nào cũng tắc đường.' },
      { ru: 'В час пик метро́ перепо́лнено.', vn: 'Giờ cao điểm tàu điện ngầm chật cứng.' },
      { ru: 'Парко́вку найти́ почти́ невозмо́жно.', vn: 'Tìm chỗ đỗ xe gần như bất khả thi.' },
      { ru: 'Обще́ственный тра́нспорт хо́дит ка́ждые де́сять мину́т.', vn: 'Xe công cộng mười phút một chuyến.' }
    ]},
    { t: 'h', text: 'So sánh thành phố lớn và nhỏ' },
    { t: 'table', head: ['Thành phố lớn', 'Thành phố nhỏ'], rows: [
      ['бо́льше возмо́жностей — nhiều cơ hội hơn', 'споко́йнее — yên tĩnh hơn'],
      ['лу́чше медици́на и образова́ние', 'чи́ще во́здух'],
      ['но: доро́же жильё, бо́льше стре́сса', 'но: ме́ньше рабо́ты, ху́же инфраструкту́ра']
    ]},
    { t: 'tip', html: 'Bảng trên chính là bộ khung trả lời câu hỏi kinh điển của kỳ thi: <span class="ru">Где лу́чше жить — в большо́м го́роде и́ли в ма́леньком?</span> Có sẵn hai cột thì em nói được ngay bảy câu theo khung ở bài 12.' },
    { t: 'h', text: 'Mô tả thành phố' },
    { t: 'words', items: [
      { ru: 'го́род располо́жен на реке́…', vn: 'thành phố nằm bên sông…' },
      { ru: 'населе́ние го́рода — оди́н миллио́н челове́к', vn: 'dân số thành phố một triệu người' },
      { ru: 'го́род был осно́ван в … году́', vn: 'thành phố được thành lập năm…' },
      { ru: 'истори́ческий центр', vn: 'khu trung tâm lịch sử' },
      { ru: 'достопримеча́тельности', vn: 'thắng cảnh, điểm tham quan' },
      { ru: 'на́бережная', vn: 'bờ kè, đường ven sông' },
      { ru: 'пло́щадь', vn: 'quảng trường' }, { ru: 'райо́н', vn: 'quận' },
      { ru: 'окра́ина', vn: 'ngoại ô' }, { ru: 'при́город', vn: 'vùng ven' }
    ]},
    { t: 'note', html: 'Cụm <span class="ru">был осно́ван</span> chính là dạng ngắn của причастие bị động em học ở bài 4. Câu <span class="ru">Ирку́тск был осно́ван в 1661 году́</span> là kiểu câu mà mọi bài giới thiệu thành phố Nga đều có.' },
    { t: 'h', text: 'Nói về thành phố mình đang sống' },
    { t: 'dialog', lines: [
      { who: '1', ru: 'Я живу́ в Ирку́тске — э́то го́род в Восто́чной Сиби́ри.', vn: 'Tôi sống ở Irkutsk — một thành phố ở Đông Siberia.' },
      { who: '2', ru: 'Он был осно́ван бо́лее трёхсо́т лет наза́д и стои́т на реке́ Ангаре́.', vn: 'Thành phố được lập cách đây hơn ba trăm năm, nằm bên sông Angara.' },
      { who: '3', ru: 'Населе́ние — приме́рно шестьсо́т ты́сяч челове́к.', vn: 'Dân số khoảng sáu trăm nghìn người.' },
      { who: '4', ru: 'Гла́вная достопримеча́тельность — Байка́л, до кото́рого мо́жно дое́хать за час.', vn: 'Thắng cảnh chính là hồ Baikal, đi xe một tiếng là tới.' },
      { who: '5', ru: 'Мне нра́вится, что здесь есть и ста́рые деревя́нные дома́, и совреме́нные зда́ния.', vn: 'Tôi thích ở đây có cả nhà gỗ cổ lẫn toà nhà hiện đại.' },
      { who: '6', ru: 'Еди́нственный ми́нус — о́чень холо́дная зима́.', vn: 'Điểm trừ duy nhất là mùa đông rất lạnh.' }
    ]},
    { t: 'tip', html: 'Sáu câu trên là khuôn dùng lại được cho <b>bất kỳ thành phố nào</b>: vị trí — lịch sử — dân số — thắng cảnh — điều mình thích — một điểm trừ. Thay tên và số là xong. Chuẩn bị sẵn khuôn này cho Hà Nội và cho thành phố em đang ở.' }
  ],
  vocab: [
    { ru: 'обще́ственный тра́нспорт', vn: 'giao thông công cộng' }, { ru: 'маршру́тка', vn: 'xe khách nhỏ chạy tuyến' },
    { ru: 'про́бка', vn: 'tắc đường' }, { ru: 'час пик', vn: 'giờ cao điểm' },
    { ru: 'парко́вка', vn: 'chỗ đỗ xe' }, { ru: 'инфраструкту́ра', vn: 'hạ tầng' },
    { ru: 'населе́ние', vn: 'dân số' }, { ru: 'осно́ван', vn: 'được thành lập' },
    { ru: 'достопримеча́тельность', vn: 'thắng cảnh' }, { ru: 'на́бережная', vn: 'đường ven sông' },
    { ru: 'окра́ина', vn: 'ngoại ô' }, { ru: 'проездно́й', vn: 'vé tháng' },
    { ru: 'располо́жен', vn: 'toạ lạc' }
  ],
  ex: [
    { t: 'choice', q: '<span class="ru ru-big">маршру́тка</span> là gì?', options: ['Tàu điện', 'Xe nhỏ chạy tuyến cố định, dừng theo yêu cầu', 'Taxi', 'Vé tháng'], a: 1, why: 'Phương tiện rất đặc trưng Nga, không có ở phương Tây.' },
    { t: 'type', q: 'Xin xuống xe: Останови́те, пожа́луйста, на ___ !', a: 'следующей', alt: ['сле́дующей'], hint: 'Cách 6 giống cái của следующий (остановке ngầm hiểu).' },
    { t: 'choice', q: '<span class="ru ru-big">был осно́ван</span> là cấu trúc gì?', options: ['Thì quá khứ thường', 'Dạng ngắn của причастие bị động', 'Деепричастие', 'Thể giả định'], a: 1, why: 'был + dạng ngắn — cấu trúc bị động em học ở bài 4.' },
    { t: 'choice', q: '<span class="ru ru-big">час пик</span> nghĩa là:', options: ['Một tiếng đồng hồ', 'Giờ cao điểm', 'Giờ nghỉ trưa', 'Giờ mở cửa'], a: 1, why: 'Từ mượn từ “peak hour”.' },
    { t: 'choice', q: 'Khuôn giới thiệu thành phố gồm mấy phần theo bài?', options: ['Ba', 'Bốn', 'Sáu', 'Mười'], a: 2, why: 'Vị trí — lịch sử — dân số — thắng cảnh — điều mình thích — một điểm trừ.' },
    { t: 'type', q: 'Điền: Го́род ___ на реке́ Ангаре́. (nằm ở, toạ lạc)', a: 'расположен', alt: ['располо́жен', 'стоит'], hint: 'Dạng ngắn, nghĩa “toạ lạc”.' },
    { t: 'choice', q: 'Điểm mạnh của thành phố nhỏ theo bài là:', options: ['Nhiều cơ hội việc làm', 'Yên tĩnh hơn và không khí sạch hơn', 'Y tế tốt hơn', 'Hạ tầng tốt hơn'], a: 1, why: 'Спокойнее, чище воздух — bù lại thì ít việc và hạ tầng kém hơn.' },
    { t: 'match', q: 'Nối:', pairs: [['про́бка', 'tắc đường'], ['на́бережная', 'đường ven sông'], ['окра́ина', 'ngoại ô'], ['проездно́й', 'vé tháng']] }
  ]
};

/* ---------------------------------------------------------- BÀI 16 */
LESSON_DATA['b1-16'] = {
  level: 'b1',
  intro: 'Khoa học và công nghệ — chủ đề mà em sẽ dùng nhiều nhất nếu học kỹ thuật ở Nga. Bài này cho em bộ từ nền tảng của văn khoa học, thứ mà B2 sẽ xây tiếp lên.',
  blocks: [
    { t: 'h', text: 'Bộ khung của một nghiên cứu' },
    { t: 'table', head: ['Tiếng Nga', 'Tiếng Việt', 'Dùng khi'], rows: [
      ['пробле́ма', 'vấn đề', 'điều cần giải quyết'],
      ['цель', 'mục tiêu', 'nghiên cứu nhằm đạt gì'],
      ['зада́ча', 'nhiệm vụ', 'các bước cụ thể'],
      ['гипо́теза', 'giả thuyết', 'điều dự đoán trước khi thử'],
      ['ме́тод', 'phương pháp', 'cách làm'],
      ['экспериме́нт', 'thí nghiệm', 'phần thực nghiệm'],
      ['результа́т', 'kết quả', 'thu được gì'],
      ['вы́вод', 'kết luận', 'rút ra điều gì']
    ]},
    { t: 'tip', html: 'Tám từ này theo đúng thứ tự là <b>dàn ý của mọi bài báo khoa học Nga</b>. Đọc một bài báo mà tìm được tám phần này là em hiểu được bài dù không biết hết từ chuyên ngành.' },
    { t: 'h', text: 'Động từ của nghiên cứu' },
    { t: 'words', items: [
      { ru: 'иссле́довать', vn: 'nghiên cứu' }, { ru: 'изуча́ть', vn: 'khảo cứu, học' },
      { ru: 'разрабо́тать', vn: 'phát triển, chế tạo' }, { ru: 'испыта́ть', vn: 'thử nghiệm' },
      { ru: 'измеря́ть', vn: 'đo' }, { ru: 'сравни́ть', vn: 'so sánh' },
      { ru: 'доказа́ть', vn: 'chứng minh' }, { ru: 'опрове́ргнуть', vn: 'bác bỏ' },
      { ru: 'внедри́ть', vn: 'ứng dụng vào thực tế' }, { ru: 'улу́чшить', vn: 'cải thiện' },
      { ru: 'обнару́жить', vn: 'phát hiện' }, { ru: 'подтверди́ть', vn: 'xác nhận' }
    ]},
    { t: 'h', text: 'Câu khuôn của văn khoa học' },
    { t: 'words', items: [
      { ru: 'Це́лью рабо́ты явля́ется…', vn: 'Mục tiêu của công trình là…' },
      { ru: 'В рабо́те рассма́тривается…', vn: 'Công trình xem xét…' },
      { ru: 'Бы́ло установлено, что…', vn: 'Đã xác định được rằng…' },
      { ru: 'Результа́ты пока́зывают, что…', vn: 'Các kết quả cho thấy rằng…' },
      { ru: 'Мо́жно сде́лать вы́вод, что…', vn: 'Có thể kết luận rằng…' },
      { ru: 'Э́то подтвержда́ет гипо́тезу.', vn: 'Điều đó xác nhận giả thuyết.' }
    ]},
    { t: 'note', html: 'Để ý ba đặc điểm của giọng khoa học Nga: <b>(1)</b> dùng nhiều động từ có <span class="ru">-ся</span> (<span class="ru">рассма́тривается</span> — được xem xét); <b>(2)</b> dùng dạng ngắn bị động (<span class="ru">бы́ло установлено</span>); <b>(3)</b> tránh chữ <span class="ru">я</span>. Người viết ẩn mình đi, chỉ để lại sự việc.' },
    { t: 'h', text: 'Công nghệ hiện đại' },
    { t: 'words', items: [
      { ru: 'техноло́гия', vn: 'công nghệ' }, { ru: 'разрабо́тка', vn: 'sự phát triển, sản phẩm phát triển' },
      { ru: 'иннова́ция', vn: 'đổi mới sáng tạo' }, { ru: 'о́пытный образе́ц', vn: 'mẫu thử' },
      { ru: 'иску́сственный интелле́кт', vn: 'trí tuệ nhân tạo' }, { ru: 'да́нные', vn: 'dữ liệu' },
      { ru: 'програ́ммное обеспе́чение', vn: 'phần mềm' }, { ru: 'обору́дование', vn: 'thiết bị' },
      { ru: 'устро́йство', vn: 'thiết bị, cấu tạo' }, { ru: 'дви́гатель', vn: 'động cơ' },
      { ru: 'то́пливо', vn: 'nhiên liệu' }, { ru: 'эффекти́вность', vn: 'hiệu suất' },
      { ru: 'надёжность', vn: 'độ tin cậy' }, { ru: 'безопа́сность', vn: 'độ an toàn' }
    ]},
    { t: 'tip', html: 'Bốn từ cuối đều dùng hậu tố <b>-ость</b> ở bài 9 — chúng biến tính từ thành chỉ số kỹ thuật. Nếu em làm về ô tô hay máy móc thì bộ ba <span class="ru">эффекти́вность, надёжность, безопа́сность</span> là ba chỉ tiêu xuất hiện trong mọi tài liệu.' },
    { t: 'h', text: 'Một đoạn văn khoa học' },
    { t: 'p', html: '<span class="ru">В рабо́те рассма́тривается пробле́ма повыше́ния эффекти́вности дви́гателя. Це́лью иссле́дования явля́ется разрабо́тка ме́тода, кото́рый позволя́ет уме́ньшить расхо́д то́плива. Бы́ли проведены́ испыта́ния на трёх образца́х. Результа́ты пока́зывают, что расхо́д то́плива сни́зился на 12%. Таки́м о́бразом, мо́жно сде́лать вы́вод, что предло́женный ме́тод эффекти́вен.</span>' },
    { t: 'p', html: '<b>Dịch:</b> Công trình xem xét vấn đề nâng cao hiệu suất động cơ. Mục tiêu nghiên cứu là phát triển một phương pháp cho phép giảm mức tiêu hao nhiên liệu. Đã tiến hành thử nghiệm trên ba mẫu. Kết quả cho thấy mức tiêu hao nhiên liệu giảm 12%. Như vậy, có thể kết luận rằng phương pháp đề xuất là hiệu quả.' },
    { t: 'note', html: 'Năm câu, không có chữ <span class="ru">я</span> nào, dùng đủ: động từ -ся, bị động dạng ngắn, причастие (<span class="ru">предло́женный</span>), <span class="ru">кото́рый</span>, và <span class="ru">таки́м о́бразом</span>. Đây chính là tiếng Nga mà một luận án được viết bằng — và em vừa đọc hiểu được nó.' }
  ],
  vocab: [
    { ru: 'иссле́дование', vn: 'nghiên cứu' }, { ru: 'гипо́теза', vn: 'giả thuyết' },
    { ru: 'ме́тод', vn: 'phương pháp' }, { ru: 'вы́вод', vn: 'kết luận' },
    { ru: 'разрабо́тать', vn: 'phát triển, chế tạo' }, { ru: 'испыта́ние', vn: 'cuộc thử nghiệm' },
    { ru: 'доказа́ть', vn: 'chứng minh' }, { ru: 'внедри́ть', vn: 'ứng dụng vào thực tế' },
    { ru: 'эффекти́вность', vn: 'hiệu suất' }, { ru: 'надёжность', vn: 'độ tin cậy' },
    { ru: 'безопа́сность', vn: 'độ an toàn' }, { ru: 'обору́дование', vn: 'thiết bị' },
    { ru: 'то́пливо', vn: 'nhiên liệu' }, { ru: 'расхо́д', vn: 'mức tiêu hao' }
  ],
  ex: [
    { t: 'choice', q: 'Thứ tự đúng của dàn ý một nghiên cứu là:', options: ['вывод — цель — метод — результат', 'проблема — цель — метод — результат — вывод', 'метод — проблема — вывод', 'результат — гипотеза — цель'], a: 1, why: 'Vấn đề → mục tiêu → phương pháp → kết quả → kết luận.' },
    { t: 'choice', q: 'Đặc điểm nào <b>không</b> thuộc giọng văn khoa học Nga?', options: ['Dùng động từ -ся', 'Dùng dạng ngắn bị động', 'Dùng nhiều chữ я', 'Tránh nhắc đến người viết'], a: 2, why: 'Văn khoa học Nga tránh chữ я — người viết ẩn mình đi.' },
    { t: 'type', q: 'Điền: Мо́жно сде́лать ___ , что ме́тод эффекти́вен.', a: 'вывод', alt: ['вы́вод'], hint: 'Từ nghĩa “kết luận”.' },
    { t: 'choice', q: '<span class="ru ru-big">опрове́ргнуть</span> nghĩa là:', options: ['chứng minh', 'bác bỏ', 'xác nhận', 'phát hiện'], a: 1, why: 'Trái nghĩa với доказать (chứng minh) và подтвердить (xác nhận).' },
    { t: 'choice', q: 'Theo đoạn văn trong bài, mức tiêu hao nhiên liệu giảm bao nhiêu?', options: ['2%', '10%', '12%', '20%'], a: 2, why: 'расхо́д то́плива сни́зился на 12%.' },
    { t: 'choice', q: 'Bộ ba chỉ tiêu kỹ thuật <span class="ru">эффекти́вность, надёжность, безопа́сность</span> dùng chung hậu tố nào?', options: ['-ение', '-ость', '-ство', '-тель'], a: 1, why: 'Hậu tố -ость biến tính từ thành danh từ chỉ tính chất — bài 9.' },
    { t: 'type', q: 'Điền: Це́лью рабо́ты ___ разрабо́тка ме́тода. (là — trang trọng)', a: 'является', alt: ['явля́ется'], hint: 'Động từ trang trọng nghĩa “là”, đòi cách 5.' },
    { t: 'match', q: 'Nối:', pairs: [['гипо́теза', 'giả thuyết'], ['внедри́ть', 'ứng dụng thực tế'], ['то́пливо', 'nhiên liệu'], ['обору́дование', 'thiết bị']] }
  ]
};

/* ---------------------------------------------------------- BÀI 17 */
LESSON_DATA['b1-17'] = {
  level: 'b1',
  intro: 'Văn hoá Nga là chủ đề mà người Nga <b>rất muốn nói</b> với em — và nói được vài câu về nó là cách nhanh nhất để họ mở lòng. Bài này cho em đủ từ và đủ tên.',
  blocks: [
    { t: 'h', text: 'Các loại hình nghệ thuật' },
    { t: 'words', items: [
      { ru: 'литерату́ра', vn: 'văn học' }, { ru: 'жи́вопись', vn: 'hội hoạ' },
      { ru: 'му́зыка', vn: 'âm nhạc' }, { ru: 'теа́тр', vn: 'nhà hát, kịch nghệ' },
      { ru: 'бале́т', vn: 'ba lê' }, { ru: 'о́пера', vn: 'opera' },
      { ru: 'кино́', vn: 'điện ảnh' }, { ru: 'архитекту́ра', vn: 'kiến trúc' },
      { ru: 'скульпту́ра', vn: 'điêu khắc' }, { ru: 'фотогра́фия', vn: 'nhiếp ảnh' }
    ]},
    { t: 'h', text: 'Từ vựng đi xem' },
    { t: 'words', items: [
      { ru: 'вы́ставка', vn: 'triển lãm' }, { ru: 'спекта́кль', vn: 'vở diễn' },
      { ru: 'премье́ра', vn: 'buổi công diễn đầu' }, { ru: 'зри́тель', vn: 'khán giả' },
      { ru: 'актёр / актри́са', vn: 'diễn viên nam / nữ' }, { ru: 'режиссёр', vn: 'đạo diễn' },
      { ru: 'худо́жник', vn: 'hoạ sĩ' }, { ru: 'писа́тель', vn: 'nhà văn' },
      { ru: 'поэ́т', vn: 'nhà thơ' }, { ru: 'компози́тор', vn: 'nhà soạn nhạc' },
      { ru: 'произведе́ние', vn: 'tác phẩm' }, { ru: 'антра́кт', vn: 'giờ giải lao' }
    ]},
    { t: 'words', items: [
      { ru: 'Я был на вы́ставке.', vn: 'Tôi đã đi xem triển lãm. (на + cách 6)' },
      { ru: 'Мне понра́вился спекта́кль.', vn: 'Tôi thấy vở diễn hay.' },
      { ru: 'Кто режиссёр э́того фи́льма?', vn: 'Ai là đạo diễn phim này?' },
      { ru: 'Э́то произведе́ние написа́л Толсто́й.', vn: 'Tác phẩm này do Tolstoy viết.' }
    ]},
    { t: 'h', text: 'Bốn cái tên mà ai cũng biết' },
    { t: 'table', head: ['Tên', 'Là ai', 'Tác phẩm hay được nhắc'], rows: [
      ['<span class="ru">Пу́шкин</span>', 'Nhà thơ, được coi là người tạo ra tiếng Nga văn học hiện đại', '«Евге́ний Оне́гин»'],
      ['<span class="ru">Толсто́й</span>', 'Nhà văn, viết tiểu thuyết dài đồ sộ', '«Война́ и мир», «А́нна Каре́нина»'],
      ['<span class="ru">Достое́вский</span>', 'Nhà văn, đi sâu vào tâm lý và đạo đức', '«Преступле́ние и наказа́ние»'],
      ['<span class="ru">Че́хов</span>', 'Nhà viết truyện ngắn và kịch, giọng nhẹ mà sâu', '«Вишнёвый сад», «Ча́йка»']
    ]},
    { t: 'tip', html: 'Với người mới học, <b>Chekhov là cửa vào dễ nhất</b>: truyện ngắn, câu gọn, ít nhân vật. Đọc Tolstoy hay Dostoevsky ở B1 là tự làm khổ mình — để dành đến C1.' },
    { t: 'h', text: 'Bảo tàng và nhà hát nên biết tên' },
    { t: 'words', items: [
      { ru: 'Третьяко́вская галере́я', vn: 'Bảo tàng Tretyakov (hội hoạ Nga, ở Moskva)' },
      { ru: 'Эрмита́ж', vn: 'Bảo tàng Hermitage (Sankt-Peterburg)' },
      { ru: 'Большо́й теа́тр', vn: 'Nhà hát Bolshoi (opera và ba lê)' },
      { ru: 'Ру́сский музе́й', vn: 'Bảo tàng Nga' }
    ]},
    { t: 'note', html: 'Ba lê là niềm tự hào lớn nhất của văn hoá Nga. Nếu được mời đi xem <span class="ru">бале́т</span> ở Bolshoi thì nên đi — và nên biết tên hai vở kinh điển: <span class="ru">«Лебеди́ное о́зеро»</span> (Hồ thiên nga) và <span class="ru">«Щелку́нчик»</span> (Kẹp hạt dẻ), cả hai của Chaikovsky.' },
    { t: 'h', text: 'Nói về sở thích văn hoá' },
    { t: 'dialog', lines: [
      { who: 'А', ru: 'Вы лю́бите ру́сскую литерату́ру?', vn: 'Anh có thích văn học Nga không?' },
      { who: 'Б', ru: 'Да, о́чень. Хотя́ чита́ть в оригина́ле мне ещё тру́дно.', vn: 'Có, rất thích. Dù đọc nguyên bản thì tôi còn khó.' },
      { who: 'А', ru: 'А кого́ вы чита́ли?', vn: 'Anh đã đọc ai rồi?' },
      { who: 'Б', ru: 'Не́сколько расска́зов Че́хова. Мне понра́вилось, что он пи́шет про́сто, но глубоко́.', vn: 'Vài truyện ngắn của Chekhov. Tôi thích chỗ ông viết giản dị mà sâu.' },
      { who: 'А', ru: 'Согла́сен. А в теа́тре бы́ли?', vn: 'Tôi đồng ý. Anh đi nhà hát chưa?' },
      { who: 'Б', ru: 'Оди́н раз, на бале́те. Я не всё по́нял, но бы́ло о́чень краси́во.', vn: 'Một lần, xem ba lê. Tôi không hiểu hết nhưng rất đẹp.' }
    ]},
    { t: 'tip', html: 'Câu cuối là mẫu trả lời tốt cho người học: <b>thành thật là chưa hiểu hết, nhưng nói được cảm nhận</b>. Người Nga quý sự thành thật đó hơn nhiều so với việc em giả vờ đã đọc Dostoevsky.' }
  ],
  vocab: [
    { ru: 'жи́вопись', vn: 'hội hoạ' }, { ru: 'вы́ставка', vn: 'triển lãm' },
    { ru: 'спекта́кль', vn: 'vở diễn' }, { ru: 'зри́тель', vn: 'khán giả' },
    { ru: 'режиссёр', vn: 'đạo diễn' }, { ru: 'худо́жник', vn: 'hoạ sĩ' },
    { ru: 'писа́тель', vn: 'nhà văn' }, { ru: 'компози́тор', vn: 'nhà soạn nhạc' },
    { ru: 'произведе́ние', vn: 'tác phẩm' }, { ru: 'расска́з', vn: 'truyện ngắn' },
    { ru: 'рома́н', vn: 'tiểu thuyết' }, { ru: 'в оригина́ле', vn: 'nguyên bản' },
    { ru: 'глубоко́', vn: 'sâu sắc' }, { ru: 'антра́кт', vn: 'giờ giải lao' }
  ],
  ex: [
    { t: 'choice', q: 'Với người mới học, tác giả Nga nào dễ đọc nhất?', options: ['Толсто́й', 'Достое́вский', 'Че́хов', 'Пу́шкин'], a: 2, why: 'Truyện ngắn, câu gọn, ít nhân vật — cửa vào dễ nhất.' },
    { t: 'choice', q: '<span class="ru ru-big">Большо́й теа́тр</span> nổi tiếng về:', options: ['Kịch nói', 'Opera và ba lê', 'Hội hoạ', 'Điện ảnh'], a: 1, why: 'Nhà hát opera và ba lê danh tiếng nhất nước Nga.' },
    { t: 'choice', q: 'Chọn giới từ đúng: Я был ___ вы́ставке.', options: ['в', 'на', 'о', 'к'], a: 1, why: 'на выставке, на спектакле — sự kiện thì dùng на.' },
    { t: 'choice', q: 'Hai vở ba lê kinh điển của Chaikovsky là:', options: ['«Ча́йка» và «Вишнёвый сад»', '«Лебеди́ное о́зеро» và «Щелку́нчик»', '«Война́ и мир» và «А́нна Каре́нина»', '«Евге́ний Оне́гин» và «Ру́слан»'], a: 1, why: 'Hồ thiên nga và Kẹp hạt dẻ.' },
    { t: 'choice', q: '<span class="ru ru-big">произведе́ние</span> nghĩa là:', options: ['sản xuất', 'tác phẩm', 'diễn viên', 'sân khấu'], a: 1, why: 'Cùng gốc với производить nhưng trong nghệ thuật nghĩa là tác phẩm.' },
    { t: 'type', q: 'Điền: Мне ___ спекта́кль. (tôi thấy vở diễn hay)', a: 'понравился', alt: ['понра́вился'], hint: 'Hoà hợp với спектакль — giống đực.' },
    { t: 'choice', q: 'Pushkin được người Nga coi là gì?', options: ['Nhà viết kịch lớn nhất', 'Người tạo ra tiếng Nga văn học hiện đại', 'Nhà soạn nhạc', 'Hoạ sĩ'], a: 1, why: 'Vị trí của ông trong văn hoá Nga tương đương Nguyễn Du với tiếng Việt.' },
    { t: 'match', q: 'Nối:', pairs: [['худо́жник', 'hoạ sĩ'], ['режиссёр', 'đạo diễn'], ['зри́тель', 'khán giả'], ['расска́з', 'truyện ngắn']] }
  ]
};

/* ---------------------------------------------------------- BÀI 18 */
LESSON_DATA['b1-18'] = {
  level: 'b1',
  intro: 'Môi trường là chủ đề chắc chắn có trong đề thi ТРКИ-1 — và với người sống ở Irkutsk thì nó không chỉ là chuyện thi cử: hồ Baikal nằm ngay đó.',
  blocks: [
    { t: 'h', text: 'Từ vựng nền' },
    { t: 'words', items: [
      { ru: 'эколо́гия', vn: 'sinh thái, môi trường' },
      { ru: 'окружа́ющая среда́', vn: 'môi trường xung quanh (thuật ngữ chuẩn)' },
      { ru: 'приро́да', vn: 'thiên nhiên' },
      { ru: 'загрязне́ние', vn: 'sự ô nhiễm' },
      { ru: 'отхо́ды', vn: 'chất thải' },
      { ru: 'му́сор', vn: 'rác' },
      { ru: 'перерабо́тка', vn: 'tái chế' },
      { ru: 'вы́бросы', vn: 'khí thải' },
      { ru: 'кли́мат', vn: 'khí hậu' },
      { ru: 'глоба́льное потепле́ние', vn: 'nóng lên toàn cầu' },
      { ru: 'исче́зновение ви́дов', vn: 'sự tuyệt chủng các loài' },
      { ru: 'возобновля́емые исто́чники эне́ргии', vn: 'nguồn năng lượng tái tạo' }
    ]},
    { t: 'note', html: 'Thuật ngữ chuẩn trong văn bản chính thức là <span class="ru">окружа́ющая среда́</span>, còn <span class="ru">эколо́гия</span> vốn là tên một ngành khoa học nhưng người Nga đời thường dùng nó với nghĩa "tình trạng môi trường": <span class="ru">Здесь плоха́я эколо́гия</span> — ở đây môi trường ô nhiễm.' },
    { t: 'h', text: 'Động từ hay dùng' },
    { t: 'words', items: [
      { ru: 'загрязня́ть', vn: 'làm ô nhiễm' }, { ru: 'защища́ть', vn: 'bảo vệ' },
      { ru: 'сохраня́ть', vn: 'giữ gìn, bảo tồn' }, { ru: 'перераба́тывать', vn: 'tái chế' },
      { ru: 'сокраща́ть', vn: 'cắt giảm' }, { ru: 'эконо́мить', vn: 'tiết kiệm' },
      { ru: 'разделя́ть му́сор', vn: 'phân loại rác' }, { ru: 'исче́знуть', vn: 'biến mất' }
    ]},
    { t: 'h', text: 'Hồ Baikal — ví dụ để nói' },
    { t: 'p', html: '<span class="ru">Байка́л — са́мое глубо́кое о́зеро в ми́ре. В нём нахо́дится о́коло двадцати́ проце́нтов всей пре́сной воды́ плане́ты. О́зеро внесено́ в спи́сок Всеми́рного насле́дия ЮНЕ́СКО. Одна́ко в после́дние го́ды учёные говоря́т о пробле́мах: загрязне́ние, тури́зм и измене́ние кли́мата влия́ют на экосисте́му о́зера.</span>' },
    { t: 'p', html: '<b>Dịch:</b> Baikal là hồ sâu nhất thế giới. Trong hồ chứa khoảng hai mươi phần trăm toàn bộ nước ngọt của hành tinh. Hồ được đưa vào danh sách Di sản Thế giới của UNESCO. Tuy nhiên những năm gần đây các nhà khoa học nói về những vấn đề: ô nhiễm, du lịch và biến đổi khí hậu đang ảnh hưởng đến hệ sinh thái của hồ.' },
    { t: 'tip', html: 'Đoạn này đáng học thuộc nếu em sống ở Irkutsk: người Nga ở đó rất tự hào về Baikal, và nói được năm câu về nó là em có ngay một chủ đề trò chuyện với bất kỳ ai.' },
    { t: 'h', text: 'Cụm từ để tranh luận' },
    { t: 'words', items: [
      { ru: 'Э́то серьёзная пробле́ма.', vn: 'Đây là vấn đề nghiêm trọng.' },
      { ru: 'Ну́жно приня́ть ме́ры.', vn: 'Cần có biện pháp.' },
      { ru: 'Ка́ждый мо́жет что́-то сде́лать.', vn: 'Ai cũng có thể làm được gì đó.' },
      { ru: 'Э́то влия́ет на здоро́вье люде́й.', vn: 'Việc đó ảnh hưởng đến sức khoẻ con người.' },
      { ru: 'Госуда́рство должно́ контроли́ровать вы́бросы.', vn: 'Nhà nước phải kiểm soát khí thải.' },
      { ru: 'Ва́жно ду́мать о бу́дущих поколе́ниях.', vn: 'Quan trọng là nghĩ đến các thế hệ sau.' }
    ]},
    { t: 'warn', html: 'Động từ <span class="ru">влия́ть</span> đòi <b>на + cách 4</b>: <span class="ru">влия́ть <b>на</b> здоро́вье, <b>на</b> экосисте́му</span>. Đây là một trong những động từ hay dùng nhất khi bàn về vấn đề xã hội, nên nhớ cho chắc.' },
    { t: 'h', text: 'Việc nhỏ mỗi người làm được' },
    { t: 'words', items: [
      { ru: 'разделя́ть му́сор', vn: 'phân loại rác' },
      { ru: 'испо́льзовать многора́зовые су́мки', vn: 'dùng túi tái sử dụng' },
      { ru: 'эконо́мить во́ду и электри́чество', vn: 'tiết kiệm nước và điện' },
      { ru: 'по́льзоваться обще́ственным тра́нспортом', vn: 'đi phương tiện công cộng' },
      { ru: 'сокраща́ть потребле́ние пла́стика', vn: 'giảm dùng nhựa' }
    ]},
    { t: 'note', html: 'Năm cụm này ghép với khung bốn bước ở bài 12 là em có ngay một bài nói hoàn chỉnh về môi trường: nêu ý kiến — hai lý lẽ — một ví dụ cụ thể từ danh sách này — kết luận.' }
  ],
  vocab: [
    { ru: 'окружа́ющая среда́', vn: 'môi trường' }, { ru: 'загрязне́ние', vn: 'ô nhiễm' },
    { ru: 'отхо́ды', vn: 'chất thải' }, { ru: 'перерабо́тка', vn: 'tái chế' },
    { ru: 'вы́бросы', vn: 'khí thải' }, { ru: 'глоба́льное потепле́ние', vn: 'nóng lên toàn cầu' },
    { ru: 'защища́ть', vn: 'bảo vệ' }, { ru: 'сохраня́ть', vn: 'bảo tồn' },
    { ru: 'сокраща́ть', vn: 'cắt giảm' }, { ru: 'влия́ть на', vn: 'ảnh hưởng đến (+4)' },
    { ru: 'приня́ть ме́ры', vn: 'có biện pháp' }, { ru: 'поколе́ние', vn: 'thế hệ' },
    { ru: 'пре́сная вода́', vn: 'nước ngọt' }, { ru: 'экосисте́ма', vn: 'hệ sinh thái' }
  ],
  ex: [
    { t: 'choice', q: 'Thuật ngữ chuẩn cho "môi trường" trong văn bản chính thức là:', options: ['эколо́гия', 'приро́да', 'окружа́ющая среда́', 'кли́мат'], a: 2, why: 'Экология vốn là tên ngành khoa học; đời thường mới dùng với nghĩa tình trạng môi trường.' },
    { t: 'choice', q: '<span class="ru">влия́ть</span> đi với giới từ và cách nào?', options: ['о + 6', 'на + 4', 'к + 3', 'с + 5'], a: 1, why: 'влиять на здоровье — на + cách 4.' },
    { t: 'choice', q: 'Theo đoạn văn trong bài, Baikal chứa bao nhiêu phần trăm nước ngọt của hành tinh?', options: ['5%', '10%', '20%', '50%'], a: 2, why: 'около двадцати процентов всей пресной воды планеты.' },
    { t: 'type', q: 'Điền: Ну́жно приня́ть ___ . (biện pháp)', a: 'меры', alt: ['ме́ры'], hint: 'Số nhiều của мера.' },
    { t: 'choice', q: '<span class="ru ru-big">перерабо́тка</span> nghĩa là:', options: ['làm lại', 'tái chế', 'chế biến thức ăn', 'làm quá sức'], a: 1, why: 'Cùng gốc работ- với tiền tố пере- (làm lại) — biến rác thành nguyên liệu mới.' },
    { t: 'choice', q: '<span class="ru ru-big">возобновля́емые исто́чники эне́ргии</span> nghĩa là:', options: ['nguồn năng lượng hoá thạch', 'nguồn năng lượng tái tạo', 'nhà máy điện', 'tiết kiệm điện'], a: 1, why: 'возобновляться = được làm mới lại — mặt trời, gió, nước.' },
    { t: 'type', q: 'Điền: Ва́жно ду́мать о бу́дущих ___ . (thế hệ)', a: 'поколениях', alt: ['поколе́ниях'], hint: 'Cách 6 số nhiều.' },
    { t: 'match', q: 'Nối:', pairs: [['отхо́ды', 'chất thải'], ['вы́бросы', 'khí thải'], ['сохраня́ть', 'bảo tồn'], ['экосисте́ма', 'hệ sinh thái']] }
  ]
};

/* ---------------------------------------------------------- BÀI 19 */
LESSON_DATA['b1-19'] = {
  level: 'b1',
  intro: 'Chủ đề sức khoẻ có mặt trong <b>mọi</b> kỳ thi ТРКИ-1, và quan trọng hơn: nếu em sang Nga sống, đây là chủ đề em <b>bắt buộc</b> phải nói được, có khi trong lúc đang mệt nhất. Bài này gọn nhưng phải thuộc.',
  blocks: [
    { t: 'h', text: 'Hai động từ БОЛЕТЬ — đừng lẫn' },
    { t: 'p', html: 'Tiếng Nga có hai từ viết giống hệt nhau nhưng chia khác nhau và nghĩa khác nhau. Đây là chỗ người Việt sai nhiều nhất trong chủ đề này.' },
    { t: 'table', head: ['', 'боле́ть (I) — bị ốm', 'боле́ть (II) — đau'], rows: [
      ['Chủ ngữ là', 'người', 'bộ phận cơ thể'],
      ['Chia', 'я боле́ю, ты боле́ешь, он боле́ет', 'chỉ có боли́т (số ít) / боля́т (số nhiều)'],
      ['Ví dụ', 'Я ча́сто боле́ю зимо́й. — Mùa đông tôi hay ốm.', 'У меня́ боли́т голова́. — Tôi đau đầu.'],
      ['Bệnh gì', 'боле́ть <b>чем</b> (cách 5): боле́ть гри́ппом', '—']
    ]},
    { t: 'warn', html: 'Câu <span class="ru">Я боле́ю го́лову</span> ✗ là câu người Việt hay viết — dịch thẳng "tôi đau đầu". Đúng phải là <span class="ru">У меня́ боли́т голова́</span> — nghĩa đen: "ở chỗ tôi, cái đầu nó đau". Đầu mới là chủ ngữ, không phải em.' },
    { t: 'h', text: 'Nói mình thấy thế nào' },
    { t: 'words', items: [
      { ru: 'Как вы себя́ чу́вствуете?', vn: 'Anh/chị thấy trong người thế nào?' },
      { ru: 'Я чу́вствую себя́ хорошо́ / пло́хо.', vn: 'Tôi thấy khoẻ / thấy mệt.' },
      { ru: 'Мне пло́хо.', vn: 'Tôi thấy khó chịu trong người.' },
      { ru: 'Мне ста́ло лу́чше.', vn: 'Tôi thấy đỡ hơn rồi.' },
      { ru: 'У меня́ температу́ра.', vn: 'Tôi bị sốt.' },
      { ru: 'Меня́ тошни́т.', vn: 'Tôi buồn nôn.' },
      { ru: 'У меня́ ка́шель и на́сморк.', vn: 'Tôi ho và sổ mũi.' },
      { ru: 'Я простуди́лся / простуди́лась.', vn: 'Tôi bị cảm lạnh.' }
    ]},
    { t: 'note', html: '<span class="ru">Меня́ тошни́т</span> — câu vô nhân xưng đúng như bài 6: người bệnh ở <b>cách 4</b>, động từ ngôi 3 số ít, không có chủ ngữ. Cả một nhóm cảm giác cơ thể đi theo mẫu này: <span class="ru">Меня́ зноби́т</span> (tôi ớn lạnh), <span class="ru">Меня́ трясёт</span> (tôi run).' },
    { t: 'h', text: 'Các bộ phận cơ thể' },
    { t: 'table', head: ['Số ít — боли́т', 'Số nhiều — боля́т'], rows: [
      ['голова́ — đầu', 'зу́бы — răng'],
      ['го́рло — họng', 'глаза́ — mắt'],
      ['спина́ — lưng', 'у́ши — tai'],
      ['живо́т — bụng', 'но́ги — chân'],
      ['се́рдце — tim', 'ру́ки — tay'],
      ['зуб — một cái răng', 'су́ставы — khớp']
    ]},
    { t: 'tip', html: 'Mẹo nhớ chọn боли́т hay боля́т: hỏi "một hay nhiều?". Đau <b>một</b> cái răng → <span class="ru">боли́т зуб</span>. Đau <b>cả hàm</b> → <span class="ru">боля́т зу́бы</span>. Người Nga nghe sai chỗ này là biết ngay em đang dịch từ tiếng mẹ đẻ.' },
    { t: 'h', text: 'Ở phòng khám' },
    { t: 'dialog', lines: [
      { who: 'Врач', ru: 'Здра́вствуйте, проходи́те. На что жа́луетесь?', vn: 'Chào anh, mời vào. Anh thấy khó chịu chỗ nào?' },
      { who: 'Чунг', ru: 'Здра́вствуйте. У меня́ уже́ три дня боли́т го́рло и температу́ра три́дцать во́семь.', vn: 'Chào bác sĩ. Ba hôm nay tôi đau họng và sốt 38 độ.' },
      { who: 'Врач', ru: 'Ка́шель есть? Откро́йте рот, пожа́луйста.', vn: 'Có ho không? Anh há miệng ra giúp tôi.' },
      { who: 'Чунг', ru: 'Есть, осо́бенно но́чью. И глота́ть бо́льно.', vn: 'Có, nhất là ban đêm. Và nuốt thì đau.' },
      { who: 'Врач', ru: 'Понима́ю. Ничего́ стра́шного — э́то анги́на. Я вы́пишу вам лека́рство.', vn: 'Tôi hiểu rồi. Không có gì đáng ngại — viêm họng thôi. Tôi kê thuốc cho anh.' },
      { who: 'Чунг', ru: 'Как принима́ть?', vn: 'Uống thế nào ạ?' },
      { who: 'Врач', ru: 'По одно́й табле́тке три ра́за в день по́сле еды́. И побо́льше пе́йте.', vn: 'Mỗi lần một viên, ngày ba lần sau khi ăn. Và uống nhiều nước vào.' },
      { who: 'Чунг', ru: 'Спаси́бо большо́е.', vn: 'Cảm ơn bác sĩ nhiều.' },
      { who: 'Врач', ru: 'Выздора́вливайте!', vn: 'Chúc anh chóng khoẻ!' }
    ]},
    { t: 'note', html: '<span class="ru">На что жа́луетесь?</span> — "anh than phiền về cái gì?" — là câu <b>mở đầu cố định</b> của mọi bác sĩ Nga. Nghe câu đó là em biết đến lượt mình kể bệnh. Và <span class="ru">Выздора́вливайте!</span> là lời chào tạm biệt dành riêng cho người ốm, đừng dùng <span class="ru">До свида́ния</span> khô khan.' },
    { t: 'h', text: 'Khám ở đâu' },
    { t: 'table', head: ['Từ', 'Nghĩa', 'Khi nào'], rows: [
      ['поликли́ника', 'phòng khám khu vực', 'ốm thường, đến khám rồi về'],
      ['больни́ца', 'bệnh viện', 'nằm viện, mổ'],
      ['ско́рая по́мощь', 'cấp cứu', 'gọi 103 (hoặc 112)'],
      ['терапе́вт', 'bác sĩ đa khoa', 'cửa đầu tiên, ai cũng qua'],
      ['апте́ка', 'hiệu thuốc', 'mua thuốc theo đơn'],
      ['реце́пт', 'đơn thuốc', 'thuốc mạnh phải có đơn'],
      ['больни́чный', 'giấy nghỉ ốm', 'để nghỉ học/nghỉ làm hợp lệ']
    ]},
    { t: 'tip', html: 'Từ <span class="ru">больни́чный</span> rất đáng nhớ nếu em học ở Nga: nghỉ học vì ốm mà không có giấy này thì bị tính là nghỉ không phép. Câu cần nói: <span class="ru">Мне ну́жен больни́чный, пожа́луйста.</span>' },
    { t: 'h', text: 'Lối sống lành mạnh' },
    { t: 'words', items: [
      { ru: 'здоро́вый о́браз жи́зни (ЗОЖ)', vn: 'lối sống lành mạnh' },
      { ru: 'пра́вильное пита́ние', vn: 'ăn uống đúng cách' },
      { ru: 'де́лать заря́дку', vn: 'tập thể dục buổi sáng' },
      { ru: 'занима́ться спо́ртом', vn: 'chơi thể thao' },
      { ru: 'бро́сить кури́ть', vn: 'bỏ thuốc lá' },
      { ru: 'высыпа́ться', vn: 'ngủ đủ giấc' },
      { ru: 'сле́дить за здоро́вьем', vn: 'giữ gìn sức khoẻ' },
      { ru: 'привы́чка', vn: 'thói quen' },
      { ru: 'вре́дный / поле́зный', vn: 'có hại / có ích' }
    ]},
    { t: 'note', html: 'Chữ viết tắt <span class="ru">ЗОЖ</span> đọc là "zoj", dùng đầy trên mạng và báo Nga. Người theo lối sống đó gọi vui là <span class="ru">зожник</span>.' }
  ],
  vocab: [
    { ru: 'боле́ть', vn: 'ốm / đau' }, { ru: 'чу́вствовать себя́', vn: 'thấy trong người' },
    { ru: 'температу́ра', vn: 'sốt, nhiệt độ' }, { ru: 'ка́шель', vn: 'ho' },
    { ru: 'на́сморк', vn: 'sổ mũi' }, { ru: 'простуди́ться', vn: 'bị cảm lạnh' },
    { ru: 'лека́рство', vn: 'thuốc' }, { ru: 'табле́тка', vn: 'viên thuốc' },
    { ru: 'реце́пт', vn: 'đơn thuốc' }, { ru: 'поликли́ника', vn: 'phòng khám' },
    { ru: 'больни́ца', vn: 'bệnh viện' }, { ru: 'ско́рая по́мощь', vn: 'xe cấp cứu' },
    { ru: 'выздора́вливать', vn: 'bình phục' }, { ru: 'здоро́вье', vn: 'sức khoẻ' },
    { ru: 'привы́чка', vn: 'thói quen' }, { ru: 'вре́дный', vn: 'có hại' },
    { ru: 'поле́зный', vn: 'có ích' }, { ru: 'высыпа́ться', vn: 'ngủ đủ giấc' }
  ],
  ex: [
    { t: 'choice', q: 'Câu "Tôi đau đầu" dịch đúng là:', options: ['Я боле́ю го́лову', 'Я боли́т голова́', 'У меня́ боли́т голова́', 'Мне боли́т голова́'], a: 2, why: 'Bộ phận cơ thể làm chủ ngữ, người đứng sau У + cách 2.' },
    { t: 'choice', q: '<span class="ru">Я ча́сто боле́ю зимо́й</span> nghĩa là:', options: ['Mùa đông tôi hay đau', 'Mùa đông tôi hay ốm', 'Mùa đông tôi hay lạnh', 'Mùa đông tôi hay nghỉ'], a: 1, why: 'Chủ ngữ là người → nghĩa "bị ốm", chia đầy đủ болею/болеешь.' },
    { t: 'choice', q: 'Đau <b>hai</b> tai thì nói:', options: ['боли́т у́ши', 'боля́т у́ши', 'боле́ют у́ши', 'боле́ет у́хо'], a: 1, why: 'уши số nhiều → болят.' },
    { t: 'type', q: 'Điền: Меня́ ___ . (tôi buồn nôn)', a: 'тошнит', alt: ['тошни́т'], hint: 'Câu vô nhân xưng, người ở cách 4.' },
    { t: 'choice', q: 'Bác sĩ Nga mở đầu buổi khám bằng câu:', options: ['Что случи́лось?', 'На что жа́луетесь?', 'Как дела́?', 'Что с ва́ми?'], a: 1, why: 'Đây là câu cố định trong phòng khám.' },
    { t: 'choice', q: '<span class="ru">Выздора́вливайте!</span> nói khi nào?', options: ['Khi chia tay người ốm', 'Khi gặp bác sĩ', 'Khi mua thuốc', 'Khi chúc mừng'], a: 0, why: 'Nghĩa là "chúc chóng khoẻ", chỉ dùng với người đang ốm.' },
    { t: 'choice', q: 'Muốn nghỉ học vì ốm mà hợp lệ, em cần xin:', options: ['реце́пт', 'больни́чный', 'спра́вку из декана́та', 'зачётку'], a: 1, why: 'больничный là giấy nghỉ ốm do bác sĩ cấp.' },
    { t: 'choice', q: '<span class="ru">боле́ть гри́ппом</span> — гри́ппом ở cách mấy?', options: ['cách 2', 'cách 3', 'cách 4', 'cách 5'], a: 3, why: 'Болеть + чем (cách 5): болеть гриппом, болеть ангиной.' },
    { t: 'type', q: 'Điền: По одно́й табле́тке три ра́за в день ___ еды́. (sau)', a: 'после', alt: ['по́сле'], hint: 'Giới từ + cách 2.' },
    { t: 'match', q: 'Nối:', pairs: [['на́сморк', 'sổ mũi'], ['апте́ка', 'hiệu thuốc'], ['высыпа́ться', 'ngủ đủ giấc'], ['вре́дный', 'có hại']] }
  ]
};

/* ---------------------------------------------------------- BÀI 20 */
LESSON_DATA['b1-20'] = {
  level: 'b1',
  intro: 'Tiền bạc, giá cả, mua bán — chủ đề em dùng <b>hằng ngày</b> nếu sống ở Nga, và cũng là một trong những đề đọc quen thuộc của ТРКИ-1. Bài này gộp cả phần đi chợ lẫn phần đọc tin kinh tế.',
  blocks: [
    { t: 'h', text: 'Hỏi giá cho đúng' },
    { t: 'words', items: [
      { ru: 'Ско́лько э́то сто́ит?', vn: 'Cái này bao nhiêu tiền?' },
      { ru: 'Ско́лько с меня́?', vn: 'Tôi phải trả bao nhiêu? (ở quầy tính tiền)' },
      { ru: 'Э́то сли́шком до́рого.', vn: 'Đắt quá.' },
      { ru: 'А поде́шевле есть?', vn: 'Có loại nào rẻ hơn không?' },
      { ru: 'Мо́жно ски́дку?', vn: 'Giảm giá được không?' },
      { ru: 'Дайте, пожа́луйста, чек.', vn: 'Cho tôi xin hoá đơn.' },
      { ru: 'У вас есть сда́ча?', vn: 'Anh/chị có tiền thối không?' },
      { ru: 'Я плачу́ ка́ртой.', vn: 'Tôi trả bằng thẻ.' }
    ]},
    { t: 'warn', html: 'Đừng lẫn <span class="ru">сда́ча</span> (tiền thối lại) với <span class="ru">сдать</span> (thi đỗ) — cùng gốc "trả lại" nhưng khác hẳn nhau. Và <span class="ru">чек</span> ở Nga nghĩa là <b>hoá đơn giấy</b>, không phải séc ngân hàng.' },
    { t: 'h', text: 'СТОИТЬ đi với cái gì' },
    { t: 'table', head: ['Cấu trúc', 'Ví dụ', 'Nghĩa'], rows: [
      ['Что сто́ит ско́лько', 'Кни́га сто́ит три́ста рубле́й.', 'Sách giá 300 rúp.'],
      ['Ско́лько сто́ит…?', 'Ско́лько сто́ит биле́т?', 'Vé bao nhiêu tiền?'],
      ['Сто́ит + nguyên thể', 'Э́тот фильм сто́ит посмотре́ть.', 'Phim này đáng xem.'],
      ['Не сто́ит + nguyên thể', 'Не сто́ит об э́том говори́ть.', 'Không đáng nói chuyện đó.']
    ]},
    { t: 'note', html: 'Chú ý trọng âm: <span class="ru">сто́ит</span> (giá là / đáng) khác <span class="ru">стои́т</span> (đang đứng, từ стоя́ть). Cùng chữ, khác trọng âm, khác nghĩa hoàn toàn — <span class="ru">Он стои́т</span> = anh ấy đang đứng.' },
    { t: 'h', text: 'Từ vựng tiền nong' },
    { t: 'table', head: ['Từ', 'Nghĩa', 'Ghi chú'], rows: [
      ['зарпла́та', 'lương', 'nói tắt của за́работная пла́та'],
      ['дохо́д / расхо́ды', 'thu nhập / các khoản chi', 'расходы luôn số nhiều'],
      ['тра́тить / потра́тить', 'tiêu (tiền)', 'тратить де́ньги на + cách 4'],
      ['копи́ть / накопи́ть', 'để dành', 'копить на маши́ну'],
      ['эконо́мить', 'tiết kiệm', 'эконо́мить на еде́ = tiết kiệm khoản ăn'],
      ['ски́дка', 'giảm giá', 'ски́дка 20%'],
      ['распрода́жа', 'đợt xả hàng', 'на распрода́же'],
      ['нали́чные', 'tiền mặt', 'luôn số nhiều'],
      ['креди́т', 'khoản vay', 'взять креди́т = vay'],
      ['нало́г', 'thuế', 'плати́ть нало́ги']
    ]},
    { t: 'tip', html: 'Hai giới từ dễ nhầm: tiêu tiền <b>vào việc gì</b> → <span class="ru">на</span> + cách 4 (<span class="ru">потра́тил де́ньги <b>на кни́ги</b></span>); tiết kiệm <b>ở khoản nào</b> → <span class="ru">на</span> + cách 6 (<span class="ru">эконо́мить <b>на еде́</b></span>). Cùng giới từ, khác cách, khác nghĩa.' },
    { t: 'h', text: 'So sánh giá' },
    { t: 'table', head: ['Tính từ', 'So sánh hơn', 'Ví dụ'], rows: [
      ['дорого́й — đắt', 'доро́же', 'Здесь доро́же, чем на ры́нке.'],
      ['дешёвый — rẻ', 'деше́вле', 'В интерне́те деше́вле.'],
      ['хоро́ший — tốt', 'лу́чше', 'Э́тот телефо́н лу́чше.'],
      ['плохо́й — kém', 'ху́же', 'Ка́чество ху́же.'],
      ['большо́й — to', 'бо́льше', 'Э́та су́мка бо́льше.']
    ]},
    { t: 'note', html: 'Sau dạng so sánh hơn, hoặc dùng <span class="ru">чем</span> + cách 1 (<span class="ru">доро́же, <b>чем</b> хлеб</span>), hoặc bỏ чем và cho từ sau vào <b>cách 2</b> (<span class="ru">доро́же <b>хле́ба</b></span>). Hai cách đều đúng, cách thứ hai gọn hơn và người Nga hay dùng hơn trong nói.' },
    { t: 'h', text: 'Đọc tin kinh tế' },
    { t: 'words', items: [
      { ru: 'цены́ вы́росли на 5%', vn: 'giá tăng 5%' },
      { ru: 'цены́ упа́ли', vn: 'giá giảm' },
      { ru: 'дорожа́ть / подорожа́ть', vn: 'trở nên đắt lên' },
      { ru: 'дешеве́ть / подешеве́ть', vn: 'trở nên rẻ đi' },
      { ru: 'инфля́ция', vn: 'lạm phát' },
      { ru: 'спрос и предложе́ние', vn: 'cung và cầu' },
      { ru: 'ры́нок труда́', vn: 'thị trường lao động' },
      { ru: 'сре́дняя зарпла́та', vn: 'lương trung bình' },
      { ru: 'по да́нным…', vn: 'theo số liệu của…' },
      { ru: 'соста́вил / соста́вила', vn: '(con số) đạt mức…' }
    ]},
    { t: 'p', html: '<b>Một câu tin điển hình:</b> <span class="ru">По да́нным Росста́та, инфля́ция в про́шлом году́ соста́вила 7,4 %, при э́том проду́кты пита́ния подорожа́ли бо́льше всего́.</span>' },
    { t: 'note', html: 'Ba mảnh ghép của mọi câu tin kinh tế Nga: <b>nguồn</b> (<span class="ru">по да́нным…</span>) — <b>chỉ số</b> (<span class="ru">соста́вила…</span>) — <b>chi tiết</b> (<span class="ru">при э́том…</span>). Nhận ra ba mảnh này là em đọc được nửa trang báo kinh tế mà không cần hiểu từng từ.' },
    { t: 'h', text: 'Ở cửa hàng' },
    { t: 'dialog', lines: [
      { who: 'Оанх', ru: 'Извини́те, ско́лько сто́ит э́та ку́ртка?', vn: 'Xin lỗi, cái áo khoác này bao nhiêu ạ?' },
      { who: 'Продаве́ц', ru: 'Четы́ре ты́сячи двести́, но сейча́с распрода́жа — ски́дка три́дцать проце́нтов.', vn: '4200, nhưng đang có đợt xả hàng — giảm 30%.' },
      { who: 'Оанх', ru: 'А разме́р побо́льше есть?', vn: 'Có cỡ to hơn không ạ?' },
      { who: 'Продаве́ц', ru: 'Есть. Хоти́те приме́рить?', vn: 'Có. Chị muốn thử không?' },
      { who: 'Оанх', ru: 'Да, спаси́бо. … Беру́. Мо́жно ка́ртой?', vn: 'Vâng, cảm ơn. … Tôi lấy. Trả thẻ được không ạ?' },
      { who: 'Продаве́ц', ru: 'Коне́чно. Вот ваш чек, сохрани́те его́.', vn: 'Tất nhiên. Hoá đơn của chị đây, chị giữ lại nhé.' }
    ]},
    { t: 'tip', html: '<span class="ru">Беру́</span> — "tôi lấy" — là câu chốt đơn ngắn nhất trong tiếng Nga, dùng ở mọi cửa hàng. Còn <span class="ru">приме́рить</span> (thử đồ) thì bắt buộc phải thuộc nếu em đi mua quần áo mùa đông.' }
  ],
  vocab: [
    { ru: 'сто́ить', vn: 'giá là / đáng' }, { ru: 'цена́', vn: 'giá' },
    { ru: 'ски́дка', vn: 'giảm giá' }, { ru: 'распрода́жа', vn: 'đợt xả hàng' },
    { ru: 'чек', vn: 'hoá đơn' }, { ru: 'сда́ча', vn: 'tiền thối' },
    { ru: 'нали́чные', vn: 'tiền mặt' }, { ru: 'тра́тить', vn: 'tiêu tiền' },
    { ru: 'копи́ть', vn: 'để dành' }, { ru: 'эконо́мить', vn: 'tiết kiệm' },
    { ru: 'зарпла́та', vn: 'lương' }, { ru: 'дохо́д', vn: 'thu nhập' },
    { ru: 'расхо́ды', vn: 'các khoản chi' }, { ru: 'нало́г', vn: 'thuế' },
    { ru: 'инфля́ция', vn: 'lạm phát' }, { ru: 'подорожа́ть', vn: 'tăng giá' },
    { ru: 'подешеве́ть', vn: 'giảm giá xuống' }, { ru: 'приме́рить', vn: 'thử (quần áo)' }
  ],
  ex: [
    { t: 'choice', q: '"Cái này bao nhiêu tiền?" là:', options: ['Ско́лько э́то сто́ит?', 'Ско́лько э́то стои́т?', 'Что э́то сто́ит?', 'Ско́лько цена́?'], a: 0, why: 'Trọng âm ở сто́ит; стои́т nghĩa là "đang đứng".' },
    { t: 'choice', q: '<span class="ru">Э́тот фильм сто́ит посмотре́ть</span> nghĩa là:', options: ['Phim này có giá vé cao', 'Phim này đáng xem', 'Phim này đang chiếu', 'Phim này phải mua vé'], a: 1, why: 'сто́ит + nguyên thể = đáng làm gì.' },
    { t: 'choice', q: 'So sánh hơn của <span class="ru">дешёвый</span> là:', options: ['дешёвее', 'деше́вле', 'дешёвше', 'бо́лее дешёвый'], a: 1, why: 'Дешёвый → деше́вле, dạng bất quy tắc phải thuộc.' },
    { t: 'choice', q: 'Câu nào đúng?', options: ['доро́же, чем хлеб', 'доро́же хле́ба', 'Cả hai đều đúng', 'Cả hai đều sai'], a: 2, why: 'Sau so sánh hơn: чем + cách 1, hoặc bỏ чем rồi dùng cách 2.' },
    { t: 'type', q: 'Điền: Я потра́тил все де́ньги ___ кни́ги. (vào)', a: 'на', hint: 'Тратить на + cách 4.' },
    { t: 'choice', q: '<span class="ru">сда́ча</span> ở cửa hàng nghĩa là:', options: ['việc thi cử', 'tiền thối lại', 'hàng trả lại', 'phiếu giảm giá'], a: 1, why: 'Cùng gốc с-дать (trả lại) nhưng ở cửa hàng là tiền thừa trả khách.' },
    { t: 'choice', q: 'Câu tin <span class="ru">По да́нным Росста́та…</span> mở đầu bằng phần nào?', options: ['Chỉ số', 'Nguồn số liệu', 'Kết luận', 'Chi tiết'], a: 1, why: '"Theo số liệu của…" — nguồn luôn đứng đầu câu tin kinh tế Nga.' },
    { t: 'type', q: 'Điền: Проду́кты ___ на 10%. (đã tăng giá)', a: 'подорожали', alt: ['подорожа́ли'], hint: 'Дорого + до- ... hoàn thành thể quá khứ số nhiều.' },
    { t: 'choice', q: 'Muốn thử áo trong cửa hàng, em nói:', options: ['Мо́жно посмотре́ть?', 'Мо́жно приме́рить?', 'Мо́жно взять?', 'Мо́жно купи́ть?'], a: 1, why: 'примерить = thử đồ lên người.' },
    { t: 'match', q: 'Nối:', pairs: [['нали́чные', 'tiền mặt'], ['нало́г', 'thuế'], ['эконо́мить', 'tiết kiệm'], ['расхо́ды', 'các khoản chi']] }
  ]
};

/* ---------------------------------------------------------- BÀI 21 */
LESSON_DATA['b1-21'] = {
  level: 'b1',
  intro: 'Thành ngữ là chỗ tiếng Nga <b>vui nhất</b> và cũng là chỗ từ điển bất lực nhất — dịch từng chữ thì ra vô nghĩa. Bài này chọn những câu người Nga thật sự dùng hằng ngày, không phải thành ngữ trong sách cổ.',
  blocks: [
    { t: 'h', text: 'Mười thành ngữ dùng hằng ngày' },
    { t: 'table', head: ['Thành ngữ', 'Dịch từng chữ', 'Nghĩa thật'], rows: [
      ['Ни пу́ха ни пера́!', 'Không lông không vũ!', 'Chúc may mắn! (trước khi thi)'],
      ['Как две ка́пли воды́', 'Như hai giọt nước', 'Giống nhau như đúc'],
      ['Кот напла́кал', 'Mèo khóc được bấy nhiêu', 'Ít ơi là ít'],
      ['Как сне́г на́ голову', 'Như tuyết rơi lên đầu', 'Bất ngờ, từ trên trời rơi xuống'],
      ['Зару́бить на носу́', 'Khắc lên mũi', 'Nhớ cho kỹ, khắc cốt ghi tâm'],
      ['Води́ть за нос', 'Dắt bằng mũi', 'Lừa, cho leo cây'],
      ['Держа́ть язы́к за зуба́ми', 'Giữ lưỡi sau răng', 'Giữ mồm giữ miệng'],
      ['Семь пя́тниц на неде́ле', 'Bảy thứ Sáu trong một tuần', 'Sáng nắng chiều mưa, hay đổi ý'],
      ['Дождь льёт как из ведра́', 'Mưa đổ như từ cái xô', 'Mưa như trút nước'],
      ['Де́ло в шля́пе', 'Việc nằm trong mũ', 'Xong xuôi, chắc ăn rồi']
    ]},
    { t: 'tip', html: 'Câu <span class="ru">Ни пу́ха ни пера́!</span> có <b>câu đáp bắt buộc</b>: <span class="ru">К чёрту!</span> ("xuống địa ngục đi!"). Nghe thô nhưng đó là luật — người Nga tin rằng cảm ơn lời chúc may mắn thì sẽ mất may. Ai chúc em câu đó trước kỳ thi mà em đáp <span class="ru">Спаси́бо</span> là hỏng cả không khí.' },
    { t: 'note', html: 'Nguồn gốc: xưa thợ săn bị kiêng chúc trúng, nên chúc ngược — "không được con lông nào, không được con vũ nào". <span class="ru">Пух</span> = lông tơ thú, <span class="ru">перо́</span> = lông vũ chim.' },
    { t: 'h', text: 'Tục ngữ — bốn câu ai cũng biết' },
    { t: 'table', head: ['Tục ngữ', 'Nghĩa', 'Câu Việt tương đương'], rows: [
      ['Ти́ше е́дешь — да́льше бу́дешь.', 'Đi chậm thì đi được xa.', 'Chậm mà chắc.'],
      ['Без труда́ не вы́тащишь и ры́бку из пруда́.', 'Không chịu khó thì không kéo nổi con cá khỏi ao.', 'Có công mài sắt có ngày nên kim.'],
      ['Пе́рвый блин ко́мом.', 'Cái bánh blin đầu tiên bao giờ cũng vón cục.', 'Vạn sự khởi đầu nan.'],
      ['Не име́й сто рубле́й, а име́й сто друзе́й.', 'Đừng có trăm rúp, hãy có trăm bạn.', 'Giàu vì bạn.']
    ]},
    { t: 'note', html: '<span class="ru">Пе́рвый блин ко́мом</span> là câu em nên thuộc <b>ngay</b> — người Nga nói nó để an ủi ai vừa làm hỏng lần đầu. Lần đầu Oanh nói tiếng Nga với người bản xứ mà lắp bắp thì đây chính là câu để tự nhủ.' },
    { t: 'h', text: 'Thành ngữ so sánh với КАК' },
    { t: 'words', items: [
      { ru: 'здоро́в как бык', vn: 'khoẻ như trâu (nghĩa đen: như bò đực)' },
      { ru: 'голо́дный как волк', vn: 'đói như sói' },
      { ru: 'кра́сный как рак', vn: 'đỏ như tôm luộc (nghĩa đen: như con tôm càng)' },
      { ru: 'бе́лый как снег', vn: 'trắng như tuyết' },
      { ru: 'уста́л как соба́ка', vn: 'mệt phờ (nghĩa đen: mệt như chó)' },
      { ru: 'молчи́т как ры́ба', vn: 'im như thóc (nghĩa đen: im như cá)' }
    ]},
    { t: 'tip', html: 'So sánh thú vị: người Việt nói "khoẻ như trâu", người Nga nói "khoẻ như <b>bò đực</b>"; ta "đỏ như gấc", Nga "đỏ như <b>tôm</b>"; ta "im như thóc", Nga "im như <b>cá</b>". Cùng một ý, mỗi dân tộc chọn một con vật quen mắt mình. Học thành ngữ thực ra là học cách một dân tộc nhìn thế giới.' },
    { t: 'h', text: 'Dùng thành ngữ thế nào cho đúng' },
    { t: 'dialog', lines: [
      { who: 'Ди́ма', ru: 'Ты гото́в к экза́мену?', vn: 'Cậu chuẩn bị thi xong chưa?' },
      { who: 'Чунг', ru: 'Гото́в. Всю ночь занима́лся, уста́л как соба́ка.', vn: 'Xong rồi. Học cả đêm, mệt phờ.' },
      { who: 'Ди́ма', ru: 'Ну, ни пу́ха ни пера́!', vn: 'Thôi, chúc may mắn nhé!' },
      { who: 'Чунг', ru: 'К чёрту!', vn: '(câu đáp bắt buộc)' },
      { who: 'Ди́ма', ru: 'Не волну́йся, ты всё зна́ешь — де́ло в шля́пе.', vn: 'Đừng lo, cậu biết hết rồi — chắc ăn thôi.' }
    ]},
    { t: 'warn', html: 'Đừng nhồi thành ngữ vào bài viết trang trọng. Đơn từ, bài luận khoa học, thư gửi trưởng khoa — <b>không</b> dùng thành ngữ. Chúng thuộc <b>văn nói</b> và văn viết thân mật. Người nước ngoài hay mắc lỗi ngược đời: nói thì khô như sách, viết đơn thì lại chêm tục ngữ.' },
    { t: 'note', html: 'Nguyên tắc an toàn: mỗi đoạn hội thoại chỉ dùng <b>một</b> thành ngữ. Dùng đúng một câu đúng lúc thì người Nga trầm trồ; dùng ba câu liền thì nghe như đang đọc thuộc lòng.' }
  ],
  vocab: [
    { ru: 'ни пу́ха ни пера́', vn: 'chúc may mắn' }, { ru: 'к чёрту', vn: 'câu đáp lại lời chúc trên' },
    { ru: 'как две ка́пли воды́', vn: 'giống như đúc' }, { ru: 'кот напла́кал', vn: 'ít ỏi' },
    { ru: 'как снег на́ голову', vn: 'bất ngờ' }, { ru: 'зару́бить на носу́', vn: 'nhớ cho kỹ' },
    { ru: 'води́ть за нос', vn: 'lừa, cho leo cây' }, { ru: 'держа́ть язы́к за зуба́ми', vn: 'giữ mồm giữ miệng' },
    { ru: 'семь пя́тниц на неде́ле', vn: 'hay đổi ý' }, { ru: 'де́ло в шля́пе', vn: 'xong xuôi' },
    { ru: 'пе́рвый блин ко́мом', vn: 'vạn sự khởi đầu nan' }, { ru: 'уста́л как соба́ка', vn: 'mệt phờ' },
    { ru: 'голо́дный как волк', vn: 'đói như sói' }, { ru: 'посло́вица', vn: 'tục ngữ' }
  ],
  ex: [
    { t: 'choice', q: 'Bạn chúc em <span class="ru">Ни пу́ха ни пера́!</span> — em đáp:', options: ['Спаси́бо!', 'К чёрту!', 'И тебе́!', 'Пожа́луйста!'], a: 1, why: 'Đáp bằng спасибо bị coi là làm mất may — luật bất thành văn.' },
    { t: 'choice', q: '<span class="ru">Кот напла́кал</span> nghĩa là:', options: ['Buồn lắm', 'Ít ơi là ít', 'Mèo bị đau', 'Khóc suốt'], a: 1, why: 'Lượng nước mắt một con mèo — tức là chẳng đáng bao nhiêu.' },
    { t: 'choice', q: '<span class="ru">Семь пя́тниц на неде́ле</span> nói về người:', options: ['Rất bận', 'Hay đổi ý', 'Lười biếng', 'Hay quên'], a: 1, why: 'Bảy thứ Sáu một tuần — hôm nào cũng một kiểu.' },
    { t: 'choice', q: '<span class="ru">Пе́рвый блин ко́мом</span> dùng khi:', options: ['Ai đó nấu ăn hỏng', 'An ủi người vừa thất bại lần đầu', 'Khen món bánh', 'Chê một người vụng'], a: 1, why: 'Câu an ủi phổ biến nhất của người Nga cho lần đầu chưa tốt.' },
    { t: 'choice', q: 'Người Nga nói "khoẻ như…":', options: ['như trâu', 'như bò đực (бык)', 'như voi', 'như ngựa'], a: 1, why: 'здоро́в как бык — mỗi dân tộc chọn một con vật quen mắt.' },
    { t: 'type', q: 'Điền: Дождь льёт как из ___ . (cái xô)', a: 'ведра', alt: ['ведра́'], hint: 'Cách 2 của ведро́.' },
    { t: 'choice', q: 'Trong đơn xin gửi trưởng khoa, có nên dùng thành ngữ không?', options: ['Có, cho sinh động', 'Không — thành ngữ thuộc văn nói', 'Chỉ dùng tục ngữ', 'Tuỳ trưởng khoa'], a: 1, why: 'Văn bản hành chính đòi hỏi từ trung tính, thành ngữ làm hỏng giọng văn.' },
    { t: 'choice', q: '<span class="ru">Зару́бить на носу́</span> nghĩa là:', options: ['Bị thương ở mũi', 'Nhớ cho thật kỹ', 'Nói dối', 'Chê bai ai'], a: 1, why: 'Xưa người mù chữ khắc dấu lên thẻ gỗ mang theo — "нос" ở đây là cái thẻ ấy.' },
    { t: 'match', q: 'Nối:', pairs: [['води́ть за нос', 'lừa, cho leo cây'], ['де́ло в шля́пе', 'xong xuôi'], ['голо́дный как волк', 'đói lả'], ['молчи́т как ры́ба', 'im như thóc']] }
  ]
};

/* ---------------------------------------------------------- BÀI 22 */
LESSON_DATA['b1-22'] = {
  level: 'b1',
  intro: 'Từ điển Nga–Việt hay dịch <b>bốn</b> động từ khác nhau thành cùng một chữ "học", ba từ thành "nói", hai từ thành "nghĩ". Bài này tách chúng ra. Đây là bài giúp em nghe bớt "tây" nhất trong cả cấp B1.',
  blocks: [
    { t: 'h', text: 'Bốn chữ "học"' },
    { t: 'table', head: ['Động từ', 'Nghĩa chính xác', 'Đi với gì', 'Ví dụ'], rows: [
      ['учи́ться', 'là học sinh/sinh viên ở đâu', 'где (cách 6)', 'Я учу́сь <b>в университе́те</b>.'],
      ['изуча́ть', 'nghiên cứu một môn (lâu dài, hệ thống)', 'что (cách 4)', 'Я изуча́ю <b>ру́сский язы́к</b>.'],
      ['учи́ть', 'học thuộc / dạy ai', 'что / кого́ чему́', 'Я учу́ <b>слова́</b>. · Он у́чит <b>меня́</b> ру́сскому.'],
      ['занима́ться', 'ngồi vào học, luyện tập', 'чем (cách 5) hoặc không', 'Я занима́юсь <b>ка́ждый день</b>.']
    ]},
    { t: 'warn', html: 'Câu <span class="ru">Я учу́сь ру́сский язы́к</span> ✗ sai — учиться không có tân ngữ cách 4. Đúng: <span class="ru">Я изуча́ю ру́сский язы́к</span> (nghiên cứu tiếng Nga) hoặc <span class="ru">Я учу́ ру́сский язы́к</span> (đang học tiếng Nga, đời thường hơn).' },
    { t: 'tip', html: 'Mẹo phân biệt <span class="ru">изуча́ть</span> và <span class="ru">учи́ть</span>: изучать nghe học thuật, có hệ thống — dùng cho môn học, chuyên ngành, hiện tượng. учить nghe đời thường và có mùi <b>học thuộc</b> — từ mới, bài thơ, quy tắc. Trong luận văn thì viết изучать.' },
    { t: 'h', text: 'ЗНАТЬ / УМЕТЬ / МОЧЬ' },
    { t: 'table', head: ['Từ', 'Nghĩa', 'Ví dụ'], rows: [
      ['знать', 'biết (thông tin, sự việc)', 'Я зна́ю, где он живёт.'],
      ['уме́ть', 'biết làm (kỹ năng đã học được)', 'Я уме́ю пла́вать.'],
      ['мочь', 'có thể (hoàn cảnh cho phép)', 'Я не могу́ прийти́ — я за́нят.']
    ]},
    { t: 'note', html: 'Khác biệt sống còn: <span class="ru">Я не уме́ю пла́вать</span> = tôi <b>không biết bơi</b> (chưa học). <span class="ru">Я не могу́ пла́вать</span> = tôi biết bơi nhưng <b>hôm nay không bơi được</b> (bận, ốm, hồ đóng cửa).' },
    { t: 'h', text: 'Bốn chữ "nói"' },
    { t: 'table', head: ['Động từ', 'Nghĩa', 'Ví dụ'], rows: [
      ['говори́ть', 'nói (chung), nói được ngôn ngữ', 'Она́ говори́т по-ру́сски.'],
      ['сказа́ть', 'nói ra một câu cụ thể (hoàn thành)', 'Он сказа́л, что придёт.'],
      ['разгова́ривать', 'trò chuyện (hai chiều, kéo dài)', 'Мы разгова́ривали два часа́.'],
      ['расска́зывать / рассказа́ть', 'kể (một câu chuyện)', 'Расскажи́ мне о Вьетна́ме.']
    ]},
    { t: 'warn', html: '<span class="ru">говори́ть</span> và <span class="ru">сказа́ть</span> là cặp thể (chưa hoàn thành / hoàn thành) nhưng <b>khác gốc</b> — đây là cặp bất quy tắc phải học thuộc như một cặp: говорю́ → сказа́л.' },
    { t: 'h', text: 'ДУМАТЬ / СЧИТАТЬ / ПОЛАГАТЬ' },
    { t: 'words', items: [
      { ru: 'ду́мать', vn: 'nghĩ (quá trình suy nghĩ), cho là' },
      { ru: 'ду́мать о + cách 6', vn: 'nghĩ về ai/cái gì — Я ду́маю о тебе́' },
      { ru: 'счита́ть, что…', vn: 'cho rằng (có lập trường, đã cân nhắc)' },
      { ru: 'полага́ть, что…', vn: 'cho rằng (trang trọng, sách vở)' },
      { ru: 'каза́ться: мне ка́жется', vn: 'tôi thấy hình như (không chắc)' }
    ]},
    { t: 'note', html: 'Trong bài luận và bài nói thi, <span class="ru">я счита́ю, что…</span> nghe chín chắn hơn hẳn <span class="ru">я ду́маю, что…</span>. Còn <span class="ru">полага́ть</span> để dành cho văn viết khoa học — nói ra miệng ở quán cà phê thì nghe như đọc diễn văn.' },
    { t: 'h', text: 'Cặp "nhìn / thấy" và "nghe / nghe thấy"' },
    { t: 'table', head: ['Chủ động (cố ý)', 'Bị động (kết quả)', 'Ví dụ'], rows: [
      ['смотре́ть — nhìn, xem', 'ви́деть — thấy', 'Я смотре́л, но ничего́ не ви́дел.'],
      ['слу́шать — nghe (chăm chú)', 'слы́шать — nghe thấy', 'Я слу́шал, но не слы́шал сло́в.']
    ]},
    { t: 'tip', html: 'Câu <span class="ru">Я смотре́л, но ничего́ не ви́дел</span> — "tôi có nhìn mà chẳng thấy gì" — chính là cách nhớ cặp này. Смотреть là <b>hành động</b>, видеть là <b>kết quả</b>. Y hệt слушать / слышать.' },
    { t: 'h', text: 'Vài cặp nhỏ hay nhầm' },
    { t: 'table', head: ['Cặp', 'Khác nhau ở đâu'], rows: [
      ['о́чень / сли́шком', 'о́чень = rất (trung tính) · сли́шком = quá (mang nghĩa xấu): сли́шком до́рого'],
      ['ещё / уже́', 'ещё не = vẫn chưa · уже́ = đã rồi'],
      ['то́же / та́кже', 'то́же = cũng (người/vật khác làm việc đó) · та́кже = ngoài ra còn (thêm việc khác)'],
      ['друго́й / ра́зный', 'друго́й = cái khác (một cái) · ра́зный = khác nhau (nhiều cái)'],
      ['большо́й / вели́кий', 'большо́й = to về kích thước · вели́кий = vĩ đại: вели́кий писа́тель'],
      ['ма́ленький / небольшо́й', 'ма́ленький = nhỏ · небольшо́й = không lớn lắm, lịch sự hơn']
    ]},
    { t: 'note', html: 'Cặp <span class="ru">то́же / та́кже</span>: "Anh đi thì tôi <b>cũng</b> đi" → <span class="ru">то́же</span>. "Tôi học tiếng Nga, <b>ngoài ra còn</b> học tiếng Anh" → <span class="ru">та́кже</span>. Một bên là cùng việc khác người, một bên là cùng người khác việc.' }
  ],
  vocab: [
    { ru: 'учи́ться', vn: 'học ở đâu' }, { ru: 'изуча́ть', vn: 'nghiên cứu môn gì' },
    { ru: 'учи́ть', vn: 'học thuộc / dạy' }, { ru: 'занима́ться', vn: 'ngồi học, luyện tập' },
    { ru: 'уме́ть', vn: 'biết làm' }, { ru: 'мочь', vn: 'có thể' },
    { ru: 'разгова́ривать', vn: 'trò chuyện' }, { ru: 'расска́зывать', vn: 'kể' },
    { ru: 'счита́ть', vn: 'cho rằng' }, { ru: 'полага́ть', vn: 'cho rằng (trang trọng)' },
    { ru: 'ви́деть', vn: 'thấy' }, { ru: 'слы́шать', vn: 'nghe thấy' },
    { ru: 'сли́шком', vn: 'quá mức' }, { ru: 'та́кже', vn: 'ngoài ra còn' },
    { ru: 'ра́зный', vn: 'khác nhau' }, { ru: 'вели́кий', vn: 'vĩ đại' }
  ],
  ex: [
    { t: 'choice', q: 'Câu nào đúng?', options: ['Я учу́сь ру́сский язы́к', 'Я изуча́ю ру́сский язы́к', 'Я занима́юсь ру́сский язы́к', 'Я учу́сь ру́сскому языку́'], a: 1, why: 'Изучать + cách 4. Учиться không có tân ngữ cách 4.' },
    { t: 'choice', q: '"Tôi học ở trường đại học" là:', options: ['Я изуча́ю в университе́те', 'Я учу́ в университе́те', 'Я учу́сь в университе́те', 'Я занима́ю в университе́те'], a: 2, why: 'Учиться где — là sinh viên ở đâu.' },
    { t: 'choice', q: '"Tôi không biết bơi" là:', options: ['Я не могу́ пла́вать', 'Я не уме́ю пла́вать', 'Я не зна́ю пла́вать', 'Я не могу́ плыть'], a: 1, why: 'Уметь = kỹ năng đã học được; мочь = hoàn cảnh cho phép.' },
    { t: 'choice', q: '<span class="ru">Мы ___ два часа́</span> (chúng tôi trò chuyện hai tiếng):', options: ['говори́ли', 'сказа́ли', 'разгова́ривали', 'рассказа́ли'], a: 2, why: 'Разговаривать = trò chuyện hai chiều, kéo dài.' },
    { t: 'choice', q: 'Trong bài luận, "tôi cho rằng" nên viết:', options: ['мне ка́жется', 'я ду́маю', 'я счита́ю', 'по-мо́ему'], a: 2, why: 'Считать nghe có lập trường, chín chắn nhất trong bốn cách.' },
    { t: 'choice', q: '<span class="ru">Я смотре́л, но ничего́ не ___ </span>:', options: ['смотре́л', 'ви́дел', 'слы́шал', 'знал'], a: 1, why: 'Смотреть là hành động, видеть là kết quả.' },
    { t: 'choice', q: '"Đắt quá" là:', options: ['о́чень до́рого', 'сли́шком до́рого', 'та́кже до́рого', 'ещё до́рого'], a: 1, why: 'Слишком mang nghĩa vượt mức chấp nhận được; очень chỉ là "rất".' },
    { t: 'choice', q: '"Tôi học tiếng Nga, ngoài ra còn học tiếng Anh" dùng:', options: ['то́же', 'та́кже', 'ещё раз', 'сли́шком'], a: 1, why: 'Cùng một người, thêm một việc khác → также.' },
    { t: 'type', q: 'Điền: Он ___ меня́ ру́сскому языку́. (dạy)', a: 'учит', alt: ['у́чит'], hint: 'Учить кого чему = dạy ai cái gì.' },
    { t: 'match', q: 'Nối:', pairs: [['занима́ться', 'ngồi vào học, luyện tập'], ['уме́ть', 'biết làm'], ['слы́шать', 'nghe thấy'], ['ра́зный', 'khác nhau']] }
  ]
};

/* ---------------------------------------------------------- BÀI 23 */
LESSON_DATA['b1-23'] = {
  level: 'b1',
  intro: 'Bài này không dạy cái mới — nó <b>sửa</b> cái cũ. Mười hai lỗi dưới đây là lỗi mà gần như <b>mọi</b> người Việt học tiếng Nga đều mắc, kể cả người đã học vài năm. Sửa được chúng, trình độ nghe của em nhảy một bậc mà không cần học thêm từ nào.',
  blocks: [
    { t: 'h', text: 'Lỗi 1 — Thêm chữ "là"' },
    { t: 'table', head: ['Sai', 'Đúng', 'Vì sao'], rows: [
      ['Я есть студе́нт ✗', 'Я студе́нт ✓', 'Thì hiện tại của "быть" bị bỏ hoàn toàn'],
      ['Она́ есть краси́вая ✗', 'Она́ краси́вая ✓', 'Không có động từ nối ở hiện tại'],
      ['Э́то есть кни́га ✗', 'Э́то кни́га ✓', 'Chỉ quá khứ/tương lai mới có был / бу́дет']
    ]},
    { t: 'note', html: 'Người Việt quen "tôi <b>là</b> sinh viên" nên tay tự động gõ есть. Nhưng <span class="ru">есть</span> trong tiếng Nga hiện đại chỉ còn dùng ở cấu trúc sở hữu <span class="ru">У меня́ есть…</span> và nghĩa "ăn".' },
    { t: 'h', text: 'Lỗi 2 — ЕСТЬ trong У меня́ dùng sai chỗ' },
    { t: 'table', head: ['Câu', 'Có есть?', 'Vì sao'], rows: [
      ['У меня́ <b>есть</b> маши́на.', 'Có', 'Nhấn mạnh: tôi <b>có</b> xe (hay không có)'],
      ['У меня́ но́вая маши́на.', 'Không', 'Đã biết là có xe, giờ nói xe <b>thế nào</b>'],
      ['У меня́ <b>есть</b> вре́мя.', 'Có', 'Hỏi có hay không'],
      ['У меня́ боли́т голова́.', 'Không', 'Không nói về sở hữu']
    ]},
    { t: 'tip', html: 'Quy tắc gọn: nếu trọng tâm câu là <b>có hay không</b> → giữ есть. Nếu trọng tâm là <b>tính chất</b> của thứ đã biết là mình có → bỏ есть. Câu <span class="ru">У меня́ есть но́вая маши́на</span> nghe hơi ngộ, như thể đang khoe rằng "cái mới thì tôi có".' },
    { t: 'h', text: 'Lỗi 3 — Không hoà hợp giống' },
    { t: 'p', html: 'Tiếng Việt không có giống, nên đây là lỗi số một. <span class="ru">Она́ краси́вый</span> ✗ → <span class="ru">Она́ краси́вая</span> ✓. Nguy hiểm nhất là ở <b>quá khứ</b>: nữ nói <span class="ru">Я пошла́</span>, nam nói <span class="ru">Я пошёл</span>. Oanh nói <span class="ru">Я пошёл</span> thì người Nga giật mình.' },
    { t: 'warn', html: 'Ba từ Oanh phải nhớ dạng nữ: <span class="ru">Я согла́сна</span> (không phải согласен), <span class="ru">Я до́лжна</span> (không phải должен), <span class="ru">Я сама́</span> (không phải сам). Trung thì ngược lại: <span class="ru">согла́сен, до́лжен, сам</span>.' },
    { t: 'h', text: 'Lỗi 4 — В hay НА' },
    { t: 'p', html: 'Nhắc lại từ A2 vì đây là lỗi không bao giờ hết: <span class="ru">на</span> đi với <b>sự kiện</b> và <b>bề mặt/không gian mở</b>, <span class="ru">в</span> đi với <b>không gian kín</b>.' },
    { t: 'table', head: ['НА', 'В'], rows: [
      ['на рабо́те, на уро́ке, на ле́кции', 'в университе́те, в шко́ле, в кла́ссе'],
      ['на ста́нции, на вокза́ле, на по́чте', 'в магази́не, в апте́ке, в теа́тре'],
      ['на у́лице, на пло́щади', 'в го́роде, в стране́'],
      ['на Украи́не / в Украи́не (cả hai gặp)', 'в Росси́и, во Вьетна́ме']
    ]},
    { t: 'h', text: 'Lỗi 5 — Bỏ mất НЕ trong câu phủ định kép' },
    { t: 'table', head: ['Sai', 'Đúng'], rows: [
      ['Я никогда́ был в Москве́ ✗', 'Я никогда́ <b>не</b> был в Москве́ ✓'],
      ['Никто́ пришёл ✗', 'Никто́ <b>не</b> пришёл ✓'],
      ['Я ничего́ понима́ю ✗', 'Я ничего́ <b>не</b> понима́ю ✓']
    ]},
    { t: 'note', html: 'Tiếng Nga <b>bắt buộc</b> phủ định kép, khác tiếng Anh và giống… tiếng Việt hơn em tưởng ("chẳng ai đến cả"). Có ни- ở đâu thì phải có не trước động từ ở đó.' },
    { t: 'h', text: 'Lỗi 6 — Phủ định mà quên cách 2' },
    { t: 'table', head: ['Khẳng định', 'Phủ định', 'Cách'], rows: [
      ['Есть вре́мя.', 'Нет вре́мени.', '1 → 2'],
      ['Есть де́ньги.', 'Нет де́нег.', '1 → 2'],
      ['Он был до́ма.', 'Его́ не́ было до́ма.', '1 → 2, было luôn ở trung tính']
    ]},
    { t: 'warn', html: '<span class="ru">Нет вре́мя</span> ✗ là lỗi kinh điển. Sau <span class="ru">нет / не́ было / не бу́дет</span> thì <b>bắt buộc</b> cách 2, và động từ luôn ở dạng trung tính số ít bất kể chủ ngữ là gì.' },
    { t: 'h', text: 'Lỗi 7 — Sai thể (вид)' },
    { t: 'table', head: ['Câu', 'Nghĩa'], rows: [
      ['Вчера́ я <b>чита́л</b> кни́гу.', 'Hôm qua tôi (có) đọc sách — không nói xong hay chưa'],
      ['Вчера́ я <b>прочита́л</b> кни́гу.', 'Hôm qua tôi đọc <b>xong</b> quyển sách'],
      ['Я <b>де́лал</b> дома́шнее зада́ние.', 'Tôi đã ngồi làm bài — có thể chưa xong'],
      ['Я <b>сде́лал</b> дома́шнее зада́ние.', 'Tôi làm bài <b>xong</b> rồi']
    ]},
    { t: 'tip', html: 'Vì tiếng Việt không có thể, người Việt hay dùng bừa. Mẹo: hỏi "câu này nói về <b>quá trình</b> hay <b>kết quả</b>?" Quá trình, thói quen, lặp lại → chưa hoàn thành. Một lần, xong, có kết quả → hoàn thành. Và sau <span class="ru">начал / продолжа́л / ко́нчил</span> thì <b>luôn</b> dùng chưa hoàn thành: <span class="ru">на́чал чита́ть</span> ✓, <span class="ru">на́чал прочита́ть</span> ✗.' },
    { t: 'h', text: 'Lỗi 8 — Động từ chuyển động' },
    { t: 'table', head: ['Идти́ / е́хать (một chiều, đang đi)', 'Ходи́ть / е́здить (đi lại, thường xuyên)'], rows: [
      ['Я иду́ в шко́лу. — Tôi đang tới trường.', 'Я хожу́ в шко́лу. — Tôi (vẫn) đi học.'],
      ['Я е́ду в Москву́. — Tôi đang đi Moskva.', 'Я е́зжу в Москву́ ка́ждый год.'],
      ['Вчера́ я шёл домо́й и встре́тил его́.', 'Вчера́ я ходи́л в кино́. — Đi rồi về.']
    ]},
    { t: 'note', html: 'Nhớ chỗ này: <span class="ru">Вчера́ я ходи́л в кино́</span> nghĩa là "hôm qua tôi có đi xem phim (và đã về)". Còn <span class="ru">Вчера́ я шёл в кино́</span> chỉ dùng khi kể tiếp "…và trên đường thì gặp ai đó". Đi bộ dùng идти/ходить, đi xe dùng ехать/ездить — nói <span class="ru">Я иду́ в Москву́</span> nghĩa là em <b>đi bộ</b> tới Moskva.' },
    { t: 'h', text: 'Lỗi 9 — Số đếm và cách' },
    { t: 'table', head: ['Số', 'Danh từ ở', 'Ví dụ'], rows: [
      ['1, 21, 31…', 'cách 1 số ít', 'оди́н студе́нт, два́дцать оди́н студе́нт'],
      ['2, 3, 4, 22, 23…', 'cách 2 <b>số ít</b>', 'два студе́нта, три кни́ги'],
      ['5–20, 25–30…', 'cách 2 <b>số nhiều</b>', 'пять студе́нтов, де́сять книг']
    ]},
    { t: 'warn', html: 'Quy tắc này áp cho cả <b>đuôi số</b>: 101 → như số 1, 102 → như số 2, 111–114 → như 5–20 (ngoại lệ tuổi mười mấy). Và tuổi: <span class="ru">21 год, 22 го́да, 25 лет</span>.' },
    { t: 'h', text: 'Lỗi 10 — Phát âm: Ы, mềm, và âm cuối' },
    { t: 'table', head: ['Vấn đề', 'Người Việt hay làm', 'Cần làm'], rows: [
      ['Ы', 'Đọc thành И: мыть → мить', 'Lưỡi lùi về sau, môi dẹt — gần âm "ư" tiếng Việt'],
      ['Phụ âm mềm', 'Bỏ qua dấu ь: мать = мат', 'Nâng lưng lưỡi lên vòm — như thêm chữ "i" mờ'],
      ['Âm cuối hữu thanh', 'Đọc đúng như viết: год → "gođ"', 'Nga <b>vô thanh hoá</b> cuối từ: год đọc "gót", муж đọc "mush"'],
      ['О không trọng âm', 'Đọc "o" rõ: молоко́ → "mo-lo-ko"', 'Đọc "ma-la-KO" — о không trọng âm thành "a"'],
      ['Х', 'Đọc thành "kh" nặng hoặc "h"', 'Là âm xát vòm mềm, nhẹ hơn "kh" tiếng Việt']
    ]},
    { t: 'tip', html: 'Lỗi phát âm nặng nhất của người Việt không phải ở âm lạ, mà ở chỗ <b>đọc trọn từng chữ cái</b> — vì tiếng Việt viết sao đọc vậy. Tiếng Nga thì không: <span class="ru">хорошо́</span> đọc là "kha-ra-SHO", <span class="ru">его́</span> đọc là "ye-VO". Nghe nhiều rồi bắt chước, đừng đọc theo mặt chữ.' },
    { t: 'h', text: 'Lỗi 11 — Trật tự từ đặt sai trọng tâm' },
    { t: 'p', html: 'Tiếng Nga đổi trật tự từ thoải mái, nhưng không phải tuỳ tiện: <b>thông tin mới quan trọng nhất đứng cuối câu</b>.' },
    { t: 'table', head: ['Câu', 'Trả lời cho câu hỏi nào'], rows: [
      ['Оанх чита́ет <b>кни́гу</b>.', 'Oanh đang đọc <b>cái gì</b>?'],
      ['Кни́гу чита́ет <b>Оанх</b>.', '<b>Ai</b> đang đọc sách?'],
      ['Оанх <b>чита́ет</b> кни́гу.', 'Oanh <b>làm gì</b> với quyển sách?']
    ]},
    { t: 'note', html: 'Người Việt hay giữ nguyên trật tự chủ–vị–tân như tiếng Việt, thành ra câu nào cũng nhấn vào tân ngữ. Không sai ngữ pháp, nhưng nghe đều đều và đôi khi trả lời lệch câu hỏi.' },
    { t: 'h', text: 'Lỗi 12 — Dịch thẳng từ tiếng Việt' },
    { t: 'table', head: ['Nghĩ trong đầu', 'Dịch thẳng (sai)', 'Người Nga nói'], rows: [
      ['Tôi rất thích', 'Я о́чень люблю́ ✗ (khi nói về việc)', 'Мне о́чень нра́вится'],
      ['Tôi 25 tuổi', 'Я 25 лет ✗', 'Мне 25 лет'],
      ['Tôi bận', 'Я есть за́нят ✗', 'Я за́нят'],
      ['Tôi nhớ em', 'Я по́мню тебя́ ✗', 'Я скуча́ю по тебе́'],
      ['Tôi đau đầu', 'Я боле́ю го́лову ✗', 'У меня́ боли́т голова́'],
      ['Trời lạnh', 'Пого́да хо́лодно ✗', 'Хо́лодно · На у́лице хо́лодно']
    ]},
    { t: 'warn', html: 'Cặp <span class="ru">по́мнить</span> / <span class="ru">скуча́ть</span>: помнить = nhớ (không quên), скучать по + cách 3 = nhớ nhung. Nói với người yêu mà dùng nhầm thì thành "anh vẫn chưa quên em" — đúng ngữ pháp, sai hoàn toàn tình cảm.' },
    { t: 'note', html: 'Cách chữa gốc rễ cho cả mười hai lỗi: đừng dịch từ tiếng Việt sang tiếng Nga. Hãy học thuộc <b>cả cụm</b> — <span class="ru">Мне нра́вится</span>, <span class="ru">У меня́ боли́т</span>, <span class="ru">Я скуча́ю по</span> — như một khối duy nhất, giống như em học một từ mới.' }
  ],
  vocab: [
    { ru: 'оши́бка', vn: 'lỗi' }, { ru: 'исправля́ть / испра́вить', vn: 'sửa lỗi' },
    { ru: 'пра́вильно', vn: 'đúng' }, { ru: 'непра́вильно', vn: 'sai' },
    { ru: 'скуча́ть по + cách 3', vn: 'nhớ nhung' }, { ru: 'по́мнить', vn: 'nhớ (không quên)' },
    { ru: 'до́лжен / должна́', vn: 'phải' }, { ru: 'за́нят / занята́', vn: 'bận' },
    { ru: 'нра́виться', vn: 'thích, hợp ý' }, { ru: 'произноше́ние', vn: 'cách phát âm' },
    { ru: 'ударе́ние', vn: 'trọng âm' }, { ru: 'поря́док слов', vn: 'trật tự từ' }
  ],
  ex: [
    { t: 'choice', q: 'Câu nào đúng?', options: ['Я есть студе́нт', 'Я студе́нт', 'Я быть студе́нт', 'Я явля́юсь студе́нт'], a: 1, why: 'Hiện tại của быть bị bỏ hoàn toàn.' },
    { t: 'choice', q: 'Câu nào <b>không</b> cần <span class="ru">есть</span>?', options: ['У меня́ ___ маши́на. (có xe không?)', 'У меня́ ___ но́вая маши́на.', 'У тебя́ ___ вре́мя?', 'У них ___ де́ти?'], a: 1, why: 'Trọng tâm là tính chất của xe, không phải chuyện có hay không.' },
    { t: 'choice', q: 'Oanh (nữ) nói "Tôi đồng ý, tôi phải đi":', options: ['Я согла́сен, я до́лжен идти́', 'Я согла́сна, я должна́ идти́', 'Я согла́сна, я до́лжен идти́', 'Я согла́сен, я должна́ идти́'], a: 1, why: 'Dạng ngắn hoà hợp theo giống — nữ dùng согласна, должна.' },
    { t: 'choice', q: 'Câu nào đúng?', options: ['Я никогда́ был в Москве́', 'Я никогда́ не был в Москве́', 'Я не никогда́ был в Москве́', 'Никогда́ я был в Москве́'], a: 1, why: 'Tiếng Nga bắt buộc phủ định kép: có ни- thì phải có не.' },
    { t: 'type', q: 'Điền: У меня́ нет ___ . (thời gian)', a: 'времени', alt: ['вре́мени'], hint: 'Sau нет luôn là cách 2.' },
    { t: 'choice', q: '"Hôm qua tôi đọc xong quyển sách" là:', options: ['Вчера́ я чита́л кни́гу', 'Вчера́ я прочита́л кни́гу', 'Вчера́ я бу́ду чита́ть кни́гу', 'Вчера́ я чита́ю кни́гу'], a: 1, why: 'Có kết quả, một lần → thể hoàn thành.' },
    { t: 'choice', q: 'Sau <span class="ru">на́чал</span> phải dùng:', options: ['thể hoàn thành', 'thể chưa hoàn thành', 'cả hai đều được', 'danh động từ'], a: 1, why: 'Начал / продолжал / кончил luôn + thể chưa hoàn thành: на́чал чита́ть.' },
    { t: 'choice', q: '"Hôm qua tôi có đi xem phim (và đã về)" là:', options: ['Вчера́ я шёл в кино́', 'Вчера́ я ходи́л в кино́', 'Вчера́ я е́хал в кино́', 'Вчера́ я иду́ в кино́'], a: 1, why: 'Ходил = đi rồi về, một chuyến khứ hồi đã kết thúc.' },
    { t: 'choice', q: '<span class="ru">три кни́г___</span> — đuôi đúng là:', options: ['три кни́га', 'три кни́ги', 'три книг', 'три кни́гам'], a: 1, why: '2, 3, 4 + cách 2 số ít → книги.' },
    { t: 'choice', q: '<span class="ru">молоко́</span> đọc gần nhất là:', options: ['mo-lo-KO', 'ma-la-KO', 'mô-lô-cô', 'ma-lo-KO'], a: 1, why: 'О không trọng âm giảm thành "a"; chỉ âm có trọng âm mới đọc rõ "o".' },
    { t: 'choice', q: '"Anh nhớ em" (nhớ nhung) là:', options: ['Я по́мню тебя́', 'Я скуча́ю по тебе́', 'Я ду́маю тебя́', 'Я зна́ю тебя́'], a: 1, why: 'Помнить = không quên; скучать по + cách 3 = nhớ nhung.' },
    { t: 'choice', q: 'Câu <span class="ru">Кни́гу чита́ет Оанх</span> trả lời câu hỏi:', options: ['Oanh đọc gì?', 'Ai đọc sách?', 'Oanh làm gì?', 'Sách ở đâu?'], a: 1, why: 'Thông tin mới quan trọng nhất đứng cuối câu.' },
    { t: 'match', q: 'Nối lỗi với cách sửa:', pairs: [['Я есть студе́нт', 'bỏ есть'], ['Нет вре́мя', 'đổi sang cách 2'], ['Я никогда́ был', 'thêm не'], ['Она́ краси́вый', 'hoà hợp giống']] }
  ]
};

/* ---------------------------------------------------------- BÀI 24 */
LESSON_DATA['b1-24'] = {
  level: 'b1',
  intro: 'Đến B1 là lúc bỏ sách giáo khoa xuống và đọc <b>văn thật</b>. Bài này lấy một truyện ngắn kinh điển của Chekhov — <span class="ru">«То́лстый и то́нкий»</span> (1883) — kể lại bằng tiếng Nga rút gọn ở mức B1, kèm cách đọc mà em nên dùng cho mọi văn bản sau này.',
  blocks: [
    { t: 'h', text: 'Đọc thế nào cho đúng' },
    { t: 'table', head: ['Bước', 'Việc làm', 'Không làm'], rows: [
      ['1. Đọc lướt', 'Đọc hết một lượt, không tra từ nào', 'Đừng dừng ở từ lạ'],
      ['2. Hỏi ba câu', 'Ai? Ở đâu? Chuyện gì xảy ra?', 'Đừng đòi hiểu từng chi tiết'],
      ['3. Đọc lần hai', 'Tra <b>tối đa 10</b> từ chặn nghĩa nhất', 'Đừng tra hết từ mới'],
      ['4. Đọc to lần ba', 'Đọc thành tiếng, để tai quen nhịp câu', 'Đừng chỉ đọc bằng mắt']
    ]},
    { t: 'warn', html: 'Lỗi tai hại nhất khi đọc: tra <b>mọi</b> từ mới. Làm thế thì mỗi trang mất hai tiếng, và em nhớ được từ chứ không nhớ được truyện. Người đọc giỏi là người <b>chịu được sự mơ hồ</b> — đoán nghĩa từ ngữ cảnh, đi tiếp, và chỉ dừng lại khi câu thật sự tắc.' },
    { t: 'h', text: 'Trước khi đọc — mười từ khoá' },
    { t: 'words', items: [
      { ru: 'то́лстый / то́нкий', vn: 'béo / gầy' },
      { ru: 'вокза́л', vn: 'nhà ga' },
      { ru: 'встре́титься', vn: 'gặp nhau' },
      { ru: 'гимна́зия', vn: 'trường trung học (thời Nga hoàng)' },
      { ru: 'прия́тель', vn: 'bạn (quen biết, không thân lắm)' },
      { ru: 'чин', vn: 'phẩm hàm, cấp bậc quan chức' },
      { ru: 'та́йный сове́тник', vn: 'cố vấn cơ mật (hàm rất cao)' },
      { ru: 'колле́жский асе́ссор', vn: 'hội thẩm viên (hàm thấp)' },
      { ru: 'побледне́ть', vn: 'tái mặt đi' },
      { ru: 'съёжиться', vn: 'co rúm lại' }
    ]},
    { t: 'note', html: 'Bối cảnh: nước Nga thế kỷ 19 có <b>bảng phẩm hàm</b> 14 bậc (<span class="ru">Та́бель о ра́нгах</span>). Địa vị một người được định bằng con số ấy. Không hiểu chuyện này thì không hiểu được truyện — mấu chốt nằm ở đó.' },
    { t: 'h', text: 'Truyện — kể lại ở mức B1' },
    { t: 'p', html: '<span class="ru">На вокза́ле Никола́евской желе́зной доро́ги встре́тились два дру́га: оди́н то́лстый, друго́й то́нкий. То́лстый то́лько что пообе́дал, и от него́ па́хло дороги́м вино́м. То́нкий вы́шел из ваго́на с чемода́нами: он е́хал с жено́й и сы́ном.</span>' },
    { t: 'p', html: '<span class="ru">— Порфи́рий! — воскли́кнул то́лстый. — Э́то ты? Ско́лько зим, ско́лько лет!</span><br><span class="ru">— Ми́ша! Друг де́тства! Отку́да ты? — обра́довался то́нкий.</span>' },
    { t: 'p', html: '<span class="ru">Они́ ста́ли вспомина́ть гимна́зию. То́нкий познако́мил дру́га с жено́й Луи́зой и сы́ном Нафана́илом. Пото́м он рассказа́л о себе́: слу́жит колле́жским асе́ссором уже́ второ́й год, получи́л Станисла́ва, жа́лованье небольшо́е, но жена́ даёт уро́ки му́зыки, а сам он де́лает портсига́ры из де́рева и продаёт их де́шево.</span>' },
    { t: 'p', html: '<span class="ru">— Ну, а ты как? — спроси́л то́нкий. — Наве́рное, уже́ ста́тский сове́тник?</span><br><span class="ru">— Нет, ми́лый мой, — отве́тил то́лстый. — Бери́ вы́ше. Я уже́ до та́йного сове́тника дослужи́лся. Две звезды́ име́ю.</span>' },
    { t: 'p', html: '<span class="ru">То́нкий вдруг побледне́л и съёжился. Его́ чемода́ны как бу́дто ста́ли ме́ньше. Он вы́тянулся, засмея́лся ти́хо и на́чал говори́ть по-друго́му:</span>' },
    { t: 'p', html: '<span class="ru">— Ва́ше превосходи́тельство… О́чень прия́тно-с! Друг, мо́жно сказа́ть, де́тства — и в таки́е вельмо́жи вы́шли-с! Хи-хи-с.</span>' },
    { t: 'p', html: '<span class="ru">— Ну, по́лно! — поморщи́лся то́лстый. — Для чего́ э́тот тон? Мы же с тобо́й друзья́ де́тства.</span><br><span class="ru">— Поми́луйте… Что вы-с… — хихи́кал то́нкий, съёживаясь ещё бо́льше. — Ми́лостивое внима́ние ва́шего превосходи́тельства… как бы живи́тельная вла́га…</span>' },
    { t: 'p', html: '<span class="ru">То́лстому ста́ло проти́вно. Он отверну́лся, по́дал то́нкому ру́ку на проща́ние и ушёл. А то́нкий, его́ жена́ и сын до́лго кла́нялись ему́ всле́д.</span>' },
    { t: 'h', text: 'Ba câu hỏi hiểu' },
    { t: 'table', head: ['Câu hỏi', 'Trả lời'], rows: [
      ['Chuyện xảy ra ở đâu?', 'Trên sân ga đường sắt Nikolaevskaya'],
      ['Hai người quan hệ thế nào?', 'Bạn học cùng trường thời nhỏ, gặp lại sau nhiều năm'],
      ['Chuyện gì thay đổi giữa chừng?', 'Người gầy biết bạn mình có hàm rất cao → chuyển từ "mày–tao" sang xưng hô quỵ luỵ']
    ]},
    { t: 'h', text: 'Cái hay nằm ở ngôn ngữ' },
    { t: 'table', head: ['Trước khi biết', 'Sau khi biết', 'Chuyện gì đã xảy ra'], rows: [
      ['Ми́ша! Друг де́тства!', 'Ва́ше превосходи́тельство', 'Từ tên gọi thân mật sang danh xưng nghi lễ'],
      ['ты', 'вы', 'Chuyển đại từ — cắt đứt sự thân mật'],
      ['обра́довался', 'хихи́кал, съёживался', 'Vui mừng thật → cười nịnh, co rúm'],
      ['(nói bình thường)', '…прия́тно-с, что вы-с', 'Thêm hậu tố <b>-с</b> — dấu hiệu hạ mình thời Nga hoàng']
    ]},
    { t: 'note', html: 'Cái đuôi <span class="ru">-с</span> ấy là rút gọn của <span class="ru">суда́рь</span> ("thưa ngài"). Trong tiếng Nga hiện đại nó đã chết, nhưng người Nga đọc là hiểu ngay: nhân vật đang tự hạ mình xuống. Chekhov không cần một câu bình luận nào — ông để <b>cách nói</b> tố cáo nhân vật.' },
    { t: 'tip', html: 'Đây là bài học lớn nhất cho việc học tiếng: <b>cách nói cho biết quan hệ</b>. ты hay вы, tên gọi hay chức danh, có "-с" hay không — mỗi lựa chọn đều nói lên người nói tự đặt mình ở đâu. Sau này khi em nói tiếng Nga với thầy hướng dẫn hay với bạn cùng phòng, em đang chọn đúng những thứ ấy.' },
    { t: 'h', text: 'Vài chỗ ngữ pháp trong truyện' },
    { t: 'table', head: ['Câu trong truyện', 'Điểm ngữ pháp'], rows: [
      ['от него́ па́хло вино́м', 'Câu vô nhân xưng (bài 6) + cách 5 chỉ mùi'],
      ['слу́жит колле́жским асе́ссором', 'Cách 5 chỉ chức vụ, nghề nghiệp'],
      ['до та́йного сове́тника дослужи́лся', 'Tiền tố до- = làm đến tận…'],
      ['съёживаясь ещё бо́льше', 'Gerund chưa hoàn thành (bài 5) — vừa cười vừa co rúm'],
      ['Ско́лько зим, ско́лько лет!', 'Thành ngữ gặp lại sau lâu ngày (bài 21)']
    ]},
    { t: 'tip', html: 'Bài tập ngoài web: viết <b>năm câu</b> tiếng Nga trả lời câu hỏi <span class="ru">Почему́ то́лстому ста́ло проти́вно?</span> — dùng đúng khung bốn bước ở bài 12. Đó chính là dạng đề viết của ТРКИ-1.' }
  ],
  vocab: [
    { ru: 'то́лстый', vn: 'béo' }, { ru: 'то́нкий', vn: 'gầy, mảnh' },
    { ru: 'вокза́л', vn: 'nhà ga lớn' }, { ru: 'ваго́н', vn: 'toa tàu' },
    { ru: 'друг де́тства', vn: 'bạn thời thơ ấu' }, { ru: 'чин', vn: 'phẩm hàm' },
    { ru: 'служи́ть', vn: 'phục vụ, làm quan' }, { ru: 'жа́лованье', vn: 'lương (từ cổ)' },
    { ru: 'побледне́ть', vn: 'tái mặt' }, { ru: 'съёжиться', vn: 'co rúm lại' },
    { ru: 'хихи́кать', vn: 'cười khúc khích, cười nịnh' }, { ru: 'кла́няться', vn: 'cúi chào' },
    { ru: 'проти́вно', vn: 'ghê tởm, khó chịu' }, { ru: 'вспомина́ть', vn: 'nhớ lại' },
    { ru: 'ско́лько зим, ско́лько лет', vn: 'lâu quá không gặp' }, { ru: 'бери́ вы́ше', vn: 'còn cao hơn thế' }
  ],
  ex: [
    { t: 'choice', q: 'Bước <b>đầu tiên</b> khi đọc một văn bản Nga nguyên bản là:', options: ['Tra hết từ mới', 'Đọc lướt một lượt không tra từ nào', 'Dịch sang tiếng Việt', 'Đọc to ngay'], a: 1, why: 'Nắm ý chung trước; tra từ ở lần đọc thứ hai và chỉ tra những từ chặn nghĩa.' },
    { t: 'choice', q: 'Trong lần đọc thứ hai, nên tra tối đa bao nhiêu từ?', options: ['Tất cả', 'Khoảng 10 từ chặn nghĩa nhất', 'Không tra từ nào', 'Một từ mỗi câu'], a: 1, why: 'Tra hết thì nhớ từ mà không nhớ truyện.' },
    { t: 'choice', q: 'Vì sao người gầy đổi cách xưng hô?', options: ['Vì anh ta sợ muộn tàu', 'Vì biết bạn mình có phẩm hàm rất cao', 'Vì vợ anh ta có mặt', 'Vì hai người cãi nhau'], a: 1, why: 'Тайный советник là hàm rất cao — địa vị lập tức đè lên tình bạn.' },
    { t: 'choice', q: '<span class="ru">Бери́ вы́ше</span> trong truyện nghĩa là:', options: ['Nhấc cao lên', 'Còn cao hơn thế nữa', 'Lấy cái trên cùng', 'Nói to lên'], a: 1, why: 'Người béo đáp lại phỏng đoán về chức vụ: còn cao hơn cả статский советник.' },
    { t: 'choice', q: 'Hậu tố <span class="ru">-с</span> trong "прия́тно-с" thể hiện điều gì?', options: ['Sự lịch sự bình thường', 'Sự tự hạ mình, quỵ luỵ', 'Giọng địa phương', 'Cách nói của trẻ con'], a: 1, why: 'Rút gọn của сударь — nay đã mất, xưa là dấu hiệu hạ mình trước người trên.' },
    { t: 'choice', q: 'Chuyển từ <span class="ru">ты</span> sang <span class="ru">вы</span> giữa hai người bạn cũ có nghĩa gì?', options: ['Lịch sự hơn', 'Cắt đứt sự thân mật, dựng lại khoảng cách', 'Nói với nhiều người', 'Không có ý nghĩa gì'], a: 1, why: 'Trong ngữ cảnh này việc chuyển sang вы chính là hành động từ chối tình bạn.' },
    { t: 'choice', q: '<span class="ru">служи́ть колле́жским асе́ссором</span> — асессором ở cách mấy?', options: ['cách 2', 'cách 3', 'cách 4', 'cách 5'], a: 3, why: 'Cách 5 chỉ chức vụ, nghề nghiệp: работать врачом, служить асессором.' },
    { t: 'choice', q: '<span class="ru">съёживаясь ещё бо́льше</span> là dạng gì?', options: ['Phân từ chủ động', 'Phân từ bị động', 'Gerund (деепричастие)', 'Động từ nguyên thể'], a: 2, why: 'Đuôi -я của gerund chưa hoàn thành: vừa nói vừa co rúm lại.' },
    { t: 'type', q: 'Điền: <span class="ru">От него́ ___ дороги́м вино́м.</span> (thoang thoảng mùi)', a: 'пахло', alt: ['па́хло'], hint: 'Câu vô nhân xưng, quá khứ trung tính.' },
    { t: 'match', q: 'Nối:', pairs: [['вокза́л', 'nhà ga lớn'], ['чин', 'phẩm hàm'], ['съёжиться', 'co rúm lại'], ['проти́вно', 'ghê tởm']] }
  ]
};

/* ---------------------------------------------------------- BÀI 25 */
LESSON_DATA['b1-25'] = {
  level: 'b1',
  intro: 'ТРКИ-1 (còn gọi là B1) là <b>tấm vé vào đại học Nga</b>: đỗ kỳ này thì em đủ điều kiện ngôn ngữ để vào chương trình cử nhân. Bài này không dạy tiếng — nó dạy <b>cách thi</b>: cấu trúc năm phần, điểm sàn, và những cái bẫy quen thuộc.',
  blocks: [
    { t: 'h', text: 'Năm phần thi' },
    { t: 'table', head: ['Phần', 'Tên Nga', 'Thời gian', 'Nội dung'], rows: [
      ['1. Từ vựng – ngữ pháp', 'Ле́ксика. Грамма́тика', '~60 phút', 'Khoảng 165 câu trắc nghiệm'],
      ['2. Đọc', 'Чте́ние', '~50 phút', '3–4 bài đọc + câu hỏi'],
      ['3. Viết', 'Письмо́', '~60 phút', 'Thuật lại một văn bản + viết thư/đơn'],
      ['4. Nghe', 'Аудирова́ние', '~35 phút', 'Hội thoại, thông báo, bản tin'],
      ['5. Nói', 'Говоре́ние', '~25 phút', 'Hội thoại tình huống + độc thoại theo đề']
    ]},
    { t: 'warn', html: 'Điểm sàn mỗi phần thường là <b>66%</b>. Điểm cao ở phần này <b>không</b> bù được điểm trượt ở phần kia — trượt một phần là phải thi lại phần đó. Vì thế chiến lược đúng không phải là "giỏi nhất phần mình mạnh" mà là <b>không để phần nào rơi xuống dưới 66%</b>.' },
    { t: 'note', html: 'Con số cụ thể (số câu, phút, lệ phí) khác nhau chút ít giữa các trung tâm và có thể đổi theo năm. Trước khi đăng ký, em <b>phải</b> vào trang của chính trung tâm định thi để xem quy chế năm đó — đừng tin con số trong bất kỳ sách luyện thi nào, kể cả bài này.' },
    { t: 'h', text: 'Phần 1 — Từ vựng & ngữ pháp' },
    { t: 'table', head: ['Hay hỏi gì', 'Học ở bài nào'], rows: [
      ['Chọn cách đúng của danh từ / tính từ', 'Bài 1'],
      ['Động từ đi với cách nào (управле́ние)', 'Bài 2'],
      ['Thể hoàn thành hay chưa hoàn thành', 'Bài 23, lỗi 7'],
      ['Động từ chuyển động có tiền tố', 'Bài 23, lỗi 8'],
      ['Liên từ trong câu phức', 'Bài 8'],
      ['Phân từ và gerund', 'Bài 3, 4, 5'],
      ['Chọn từ đồng nghĩa đúng ngữ cảnh', 'Bài 22']
    ]},
    { t: 'tip', html: 'Phần này 165 câu trong 60 phút — <b>khoảng 20 giây một câu</b>. Không có thời gian ngồi phân tích. Chiến thuật: lướt hết một lượt, câu nào ngập ngừng quá 20 giây thì đánh dấu và bỏ qua, quay lại sau. Nhiều thí sinh trượt phần này không vì kém mà vì <b>không kịp</b>.' },
    { t: 'h', text: 'Phần 2 — Đọc' },
    { t: 'table', head: ['Bẫy', 'Cách tránh'], rows: [
      ['Đáp án dùng đúng từ trong bài nhưng sai ý', 'Đọc kỹ cả câu, đừng chỉ săn từ khoá'],
      ['Đáp án đúng ngoài đời nhưng bài không nói', 'Chỉ chọn cái <b>bài viết ra</b>'],
      ['Câu hỏi về ý chính, mình chọn chi tiết phụ', 'Hỏi "cả bài nói về gì" trước khi chọn'],
      ['Hết giờ ở bài cuối', 'Chia đều thời gian, làm bài dễ trước']
    ]},
    { t: 'note', html: 'Đọc theo đúng bốn bước ở bài 24 — lướt, hỏi ba câu, đọc lại, chọn đáp án. Đừng tra nghĩa trong đầu từng từ; phòng thi không có từ điển và cũng không cần.' },
    { t: 'h', text: 'Phần 3 — Viết' },
    { t: 'table', head: ['Dạng bài', 'Yêu cầu thường gặp', 'Khung dùng'], rows: [
      ['Thuật lại văn bản', 'Đọc một bài rồi viết lại ý chính', 'Bài 10 — cấu trúc bài báo'],
      ['Viết thư cá nhân', 'Trả lời thư bạn, ~20 câu', 'Chào – lý do viết – nội dung – hỏi lại – chào'],
      ['Viết đơn / заявле́ние', 'Xin nghỉ, xin cấp giấy tờ', 'Bài 13 — mẫu đơn chuẩn'],
      ['Viết ý kiến', 'Nêu quan điểm về một vấn đề', 'Bài 12 — khung bốn bước']
    ]},
    { t: 'warn', html: 'Người chấm đếm <b>số câu</b>. Viết quá ngắn là mất điểm ngay cả khi không sai ngữ pháp câu nào. Nguyên tắc an toàn: đủ số câu đề yêu cầu, cộng thêm hai câu. Và viết câu <b>ngắn mà chắc</b> — một câu phức sai còn tệ hơn hai câu đơn đúng.' },
    { t: 'h', text: 'Phần 4 — Nghe' },
    { t: 'table', head: ['Việc', 'Khi nào'], rows: [
      ['Đọc câu hỏi trước khi băng chạy', 'Luôn luôn — biết trước cần nghe gì'],
      ['Ghi con số, tên riêng ra nháp', 'Ngay khi nghe thấy'],
      ['Bỏ qua chỗ không nghe được', 'Ngay lập tức — bám vào một từ là mất cả đoạn'],
      ['Chọn đáp án ở lần nghe thứ hai', 'Lần một để hiểu, lần hai để xác nhận']
    ]},
    { t: 'tip', html: 'Lỗi giết người ở phần nghe: nghe hụt một từ rồi <b>đứng lại nghĩ</b> về nó, trong lúc đó băng chạy tiếp và mất luôn ba câu sau. Kỹ năng cần luyện chính là <b>bỏ qua</b> — bài 11 đã tập cái này.' },
    { t: 'h', text: 'Phần 5 — Nói' },
    { t: 'table', head: ['Phần nhỏ', 'Nội dung', 'Mẹo'], rows: [
      ['Phản ứng tình huống', 'Nghe tình huống, nói một câu phù hợp', 'Học thuộc câu mở đầu cho 10 tình huống hay gặp'],
      ['Hội thoại', 'Đóng vai, hỏi–đáp với giám khảo', 'Chủ động hỏi lại — im lặng là mất điểm'],
      ['Độc thoại theo đề', 'Nói 2–3 phút về một chủ đề', 'Dùng khung bốn bước bài 12']
    ]},
    { t: 'note', html: 'Giám khảo chấm <b>khả năng giao tiếp</b>, không chấm sự hoàn hảo. Nói sai một cách rồi tự sửa <span class="ru">…в университе́т… в университе́те</span> thì <b>không</b> bị trừ mấy — nhưng ngồi im vì sợ sai thì mất điểm nặng. Nói tiếp, luôn luôn nói tiếp.' },
    { t: 'h', text: 'Mười câu cứu nguy trong phòng thi nói' },
    { t: 'words', items: [
      { ru: 'Извини́те, я не по́нял / не поняла́.', vn: 'Xin lỗi, tôi chưa hiểu.' },
      { ru: 'Повтори́те, пожа́луйста.', vn: 'Xin nhắc lại giúp tôi.' },
      { ru: 'Мо́жно поме́дленнее?', vn: 'Chậm hơn một chút được không ạ?' },
      { ru: 'Как э́то сказа́ть по-ру́сски?', vn: 'Cái này tiếng Nga nói thế nào ạ?' },
      { ru: 'Я хочу́ сказа́ть, что…', vn: 'Ý tôi muốn nói là…' },
      { ru: 'Одну́ мину́точку, я поду́маю.', vn: 'Cho tôi một phút suy nghĩ.' },
      { ru: 'Э́то интере́сный вопро́с.', vn: 'Câu hỏi này hay đấy. (câu câu giờ)' },
      { ru: 'Наско́лько я зна́ю…', vn: 'Theo chỗ tôi biết…' },
      { ru: 'Ины́ми слова́ми…', vn: 'Nói cách khác…' },
      { ru: 'Я не уве́рен, но ду́маю, что…', vn: 'Tôi không chắc, nhưng tôi nghĩ là…' }
    ]},
    { t: 'tip', html: 'Ba câu <span class="ru">Э́то интере́сный вопро́с · Одну́ мину́точку · Я хочу́ сказа́ть, что…</span> mua cho em khoảng năm giây suy nghĩ mà <b>vẫn đang nói tiếng Nga</b>. Người bản xứ dùng chúng suốt. Đó không phải mẹo vặt — đó là kỹ năng nói thật.' },
    { t: 'h', text: 'Bốn tuần trước ngày thi' },
    { t: 'table', head: ['Tuần', 'Việc chính'], rows: [
      ['Tuần 1', 'Làm một đề đầy đủ để biết mình yếu phần nào'],
      ['Tuần 2', 'Đổ 70% thời gian vào phần yếu nhất'],
      ['Tuần 3', 'Luyện viết và nói — hai phần bị bỏ bê nhiều nhất'],
      ['Tuần 4', 'Làm hai đề đủ, đúng giờ, đúng điều kiện phòng thi'],
      ['Hôm trước', 'Không học gì mới. Ngủ đủ. Chuẩn bị giấy tờ']
    ]},
    { t: 'warn', html: 'Nhớ mang <b>hộ chiếu</b> — không có giấy tờ tuỳ thân là không được vào phòng thi, dù đã đóng lệ phí. Và đến sớm 30 phút.' }
  ],
  vocab: [
    { ru: 'экза́мен', vn: 'kỳ thi' }, { ru: 'сдава́ть экза́мен', vn: 'đi thi' },
    { ru: 'сдать экза́мен', vn: 'thi đỗ' }, { ru: 'провали́ть экза́мен', vn: 'thi trượt' },
    { ru: 'аудирова́ние', vn: 'phần nghe' }, { ru: 'говоре́ние', vn: 'phần nói' },
    { ru: 'чте́ние', vn: 'phần đọc' }, { ru: 'письмо́', vn: 'phần viết' },
    { ru: 'зада́ние', vn: 'bài tập, nhiệm vụ' }, { ru: 'вариа́нт', vn: 'phương án, đề' },
    { ru: 'сертифика́т', vn: 'chứng chỉ' }, { ru: 'проходно́й балл', vn: 'điểm sàn' },
    { ru: 'повтори́ть', vn: 'nhắc lại, ôn lại' }, { ru: 'уве́рен', vn: 'chắc chắn' }
  ],
  ex: [
    { t: 'choice', q: 'Kỳ ТРКИ-1 có mấy phần thi?', options: ['3', '4', '5', '6'], a: 2, why: 'Từ vựng–ngữ pháp, đọc, viết, nghe, nói.' },
    { t: 'choice', q: 'Điểm cao ở phần đọc có bù được điểm trượt phần nghe không?', options: ['Có, tính tổng', 'Không — mỗi phần phải đạt riêng', 'Tuỳ trung tâm', 'Chỉ bù được một nửa'], a: 1, why: 'Mỗi phần có điểm sàn riêng; trượt phần nào thi lại phần đó.' },
    { t: 'choice', q: 'Phần từ vựng–ngữ pháp trung bình bao lâu một câu?', options: ['Khoảng 20 giây', 'Khoảng 1 phút', 'Khoảng 2 phút', 'Không giới hạn'], a: 0, why: '~165 câu trong ~60 phút — nhiều người trượt vì không kịp chứ không vì kém.' },
    { t: 'choice', q: 'Ở phần đọc, đáp án chứa đúng từ trong bài thì:', options: ['Chắc chắn đúng', 'Có thể là bẫy — phải đọc cả câu', 'Luôn sai', 'Chỉ đúng nếu ở đầu bài'], a: 1, why: 'Bẫy phổ biến nhất: trùng từ nhưng lệch ý.' },
    { t: 'choice', q: 'Bài viết ngắn hơn yêu cầu nhưng không sai ngữ pháp thì:', options: ['Vẫn được điểm tối đa', 'Bị trừ điểm vì thiếu số câu', 'Được cộng điểm vì gọn', 'Không ảnh hưởng'], a: 1, why: 'Người chấm đếm số câu; viết đủ rồi cộng thêm hai câu cho chắc.' },
    { t: 'choice', q: 'Nghe hụt một từ giữa bài thì nên:', options: ['Dừng lại nghĩ cho ra', 'Bỏ qua và nghe tiếp', 'Bỏ luôn cả câu', 'Đoán bừa rồi kiểm tra sau'], a: 1, why: 'Bám vào một từ là mất cả đoạn — kỹ năng cần là bỏ qua.' },
    { t: 'choice', q: 'Trong phần nói, tự sửa lỗi giữa câu thì:', options: ['Bị trừ nặng', 'Gần như không bị trừ — im lặng mới mất điểm', 'Phải bắt đầu lại câu', 'Bị dừng bài thi'], a: 1, why: 'Giám khảo chấm khả năng giao tiếp, tự sửa là dấu hiệu tốt.' },
    { t: 'type', q: 'Điền câu câu giờ: Одну́ ___ , я поду́маю.', a: 'минуточку', alt: ['мину́точку', 'минутку', 'мину́тку'], hint: 'Dạng thân mật của "phút".' },
    { t: 'choice', q: 'Hôm trước ngày thi nên làm gì?', options: ['Học thêm 200 từ mới', 'Làm ba đề nữa', 'Không học mới, ngủ đủ, chuẩn bị giấy tờ', 'Xem phim Nga cả đêm'], a: 2, why: 'Nhồi vào phút chót không kịp ngấm và làm hỏng phần nghe hôm sau.' },
    { t: 'match', q: 'Nối phần thi với tên Nga:', pairs: [['аудирова́ние', 'nghe'], ['чте́ние', 'đọc'], ['письмо́', 'viết'], ['говоре́ние', 'nói']] }
  ]
};

/* ---------------------------------------------------------- BÀI 26 */
LESSON_DATA['b1-26'] = {
  level: 'b1',
  intro: 'Đề thử phần <b>đọc</b> và <b>viết</b>. Em làm bài này như thi thật: bấm giờ, không tra từ điển, không quay lại xem bài cũ. Xong mới đọc phần đáp án và nhận xét ở cuối.',
  blocks: [
    { t: 'h', text: 'Luật chơi' },
    { t: 'table', head: ['Phần', 'Thời gian', 'Điểm sàn'], rows: [
      ['Đọc — 2 bài, 10 câu hỏi', '25 phút', '7/10'],
      ['Viết — 1 lá thư', '30 phút', 'đủ 20 câu']
    ]},
    { t: 'h', text: 'ЧТЕНИЕ — Bài đọc 1' },
    { t: 'p', html: '<span class="ru">Ка́ждый год в Ирку́тск приезжа́ют ты́сячи тури́стов, и почти́ все они́ е́дут да́льше — на Байка́л. От го́рода до посёлка Ли́ствянка на берегу́ о́зера всего́ шестьдеся́т пять киломе́тров: час на маршру́тке. Ле́том сюда́ приезжа́ют купа́ться, хотя́ вода́ в о́зере о́чень холо́дная да́же в ию́ле — обы́чно не вы́ше двена́дцати гра́дусов.</span>' },
    { t: 'p', html: '<span class="ru">Зимо́й Байка́л замерза́ет, и лёд стано́вится настоя́щей доро́гой. Мно́гие счита́ют, что и́менно зима́ — лу́чшее вре́мя для пое́здки: лёд здесь прозра́чный, как стекло́, и сквозь него́ ви́дно дно. Тури́сты из А́зии, осо́бенно из Кита́я и Вьетна́ма, ча́ще всего́ приезжа́ют и́менно в феврале́ и ма́рте.</span>' },
    { t: 'p', html: '<span class="ru">Но у популя́рности есть и обра́тная сторона́. Учёные Ирку́тского госуда́рственного университе́та уже́ не́сколько лет говоря́т о том, что коли́чество му́сора на берега́х расте́т бы́стрее, чем стро́ятся о́чистные сооруже́ния. «Байка́л вы́держит мно́гое, — сказа́л оди́н из иссле́дователей, — но не бесконе́чно. Реша́ть на́до сейча́с, а не че́рез два́дцать лет».</span>' },
    { t: 'h', text: 'Câu hỏi bài 1' },
    { t: 'table', head: ['#', 'Câu hỏi', 'Các phương án'], rows: [
      ['1', 'Từ Irkutsk đến Listvyanka mất bao lâu?', 'a) 65 phút · b) khoảng 1 tiếng · c) 2 tiếng · d) nửa ngày'],
      ['2', 'Nhiệt độ nước hồ tháng Bảy thường:', 'a) trên 20° · b) khoảng 15° · c) không quá 12° · d) dưới 0°'],
      ['3', 'Vì sao nhiều người thích đi mùa đông?', 'a) rẻ hơn · b) băng trong suốt nhìn thấy đáy · c) ít khách · d) có lễ hội'],
      ['4', 'Khách châu Á hay đến vào:', 'a) tháng 6–7 · b) tháng 12 · c) tháng 2–3 · d) tháng 9'],
      ['5', 'Vấn đề mà các nhà khoa học nêu ra là:', 'a) nước cạn · b) rác tăng nhanh hơn công trình xử lý · c) cá giảm · d) băng mỏng đi']
    ]},
    { t: 'h', text: 'ЧТЕНИЕ — Bài đọc 2' },
    { t: 'p', html: '<span class="ru">Объявле́ние. Уважа́емые студе́нты! С понеде́льника, 15 сентября́, библиоте́ка университе́та рабо́тает по но́вому расписа́нию: с 9:00 до 20:00 в бу́дни и с 10:00 до 16:00 в суббо́ту. В воскресе́нье библиоте́ка закры́та.</span>' },
    { t: 'p', html: '<span class="ru">Что́бы записа́ться, ну́жно принести́ студе́нческий биле́т и одну́ фотогра́фию. Кни́ги выдаю́тся на две неде́ли; уче́бники — на весь семе́стр. Продли́ть срок мо́жно оди́н раз, ли́чно и́ли по телефо́ну. Е́сли кни́га не сдана́ во́время, чита́тель не мо́жет брать но́вые кни́ги, пока́ не вернёт ста́рые.</span>' },
    { t: 'p', html: '<span class="ru">Обраща́ем внима́ние: чита́льный зал на второ́м этаже́ рабо́тает то́лько до 18:00, так как там иду́т ремо́нтные рабо́ты. Нау́чная литерату́ра на вре́мя ремо́нта переведена́ в зал № 3 на пе́рвом этаже́.</span>' },
    { t: 'h', text: 'Câu hỏi bài 2' },
    { t: 'table', head: ['#', 'Câu hỏi', 'Các phương án'], rows: [
      ['6', 'Thứ Bảy thư viện mở cửa:', 'a) 9:00–20:00 · b) 10:00–16:00 · c) đóng cửa · d) 9:00–16:00'],
      ['7', 'Để đăng ký thẻ cần mang:', 'a) hộ chiếu · b) thẻ sinh viên và một ảnh · c) chỉ ảnh · d) tiền lệ phí'],
      ['8', 'Sách giáo trình được mượn:', 'a) 2 tuần · b) 1 tháng · c) cả học kỳ · d) 1 tuần'],
      ['9', 'Nếu trả sách muộn thì:', 'a) bị phạt tiền · b) không được mượn sách mới · c) bị đình chỉ học · d) không sao cả'],
      ['10', 'Sách khoa học tạm thời để ở:', 'a) tầng 2 · b) phòng số 3 tầng 1 · c) kho · d) phòng giáo viên']
    ]},
    { t: 'h', text: 'ПИСЬМО — Đề viết' },
    { t: 'p', html: '<b>Đề:</b> Bạn người Nga của em tên Ди́ма viết thư hỏi: em đang học ở đâu, một ngày của em thế nào, em thích gì ở thành phố mình sống, và em có định sang Nga học không. Hãy viết thư trả lời, <b>ít nhất 20 câu</b>.' },
    { t: 'table', head: ['Phần', 'Nên có', 'Câu mẫu'], rows: [
      ['Mở đầu', 'Chào + cảm ơn thư', 'Здра́вствуй, Ди́ма! Спаси́бо за твоё письмо́.'],
      ['Thân 1', 'Học ở đâu, học gì', 'Сейча́с я учу́сь…'],
      ['Thân 2', 'Một ngày thường', 'Обы́чно я встаю́ в… пото́м…'],
      ['Thân 3', 'Thành phố mình', 'Мне нра́вится мой го́род, потому́ что…'],
      ['Thân 4', 'Dự định sang Nga', 'Я собира́юсь поступа́ть…'],
      ['Hỏi lại', '2–3 câu hỏi cho bạn', 'А ты? Как у тебя́ дела́ с учёбой?'],
      ['Kết', 'Chào tạm biệt', 'Жду твоего́ отве́та. До свида́ния! Твой Чунг.']
    ]},
    { t: 'warn', html: 'Ba lỗi làm mất điểm nhiều nhất ở bài thư: <b>quên hỏi lại</b> bạn (thư một chiều bị coi là không đạt yêu cầu giao tiếp), <b>quên chào kết</b>, và <b>viết thiếu số câu</b>. Ba lỗi này không liên quan gì tới ngữ pháp — chỉ là cẩu thả.' },
    { t: 'h', text: 'Đáp án phần đọc' },
    { t: 'table', head: ['Câu', 'Đáp án', 'Chỗ trong bài'], rows: [
      ['1', 'b — khoảng 1 tiếng', '«час на маршру́тке» (65 km là khoảng cách, không phải phút — bẫy số)'],
      ['2', 'c — không quá 12°', '«не вы́ше двена́дцати гра́дусов»'],
      ['3', 'b — băng trong suốt nhìn thấy đáy', '«лёд прозра́чный, как стекло́… ви́дно дно»'],
      ['4', 'c — tháng 2–3', '«и́менно в феврале́ и ма́рте»'],
      ['5', 'b — rác tăng nhanh hơn công trình xử lý', '«му́сора… расте́т бы́стрее, чем стро́ятся о́чистные сооруже́ния»'],
      ['6', 'b — 10:00–16:00', 'dòng lịch làm việc'],
      ['7', 'b — thẻ sinh viên và một ảnh', '«студе́нческий биле́т и одну́ фотогра́фию»'],
      ['8', 'c — cả học kỳ', '«уче́бники — на весь семе́стр»'],
      ['9', 'b — không được mượn sách mới', '«не мо́жет брать но́вые кни́ги»'],
      ['10', 'b — phòng số 3 tầng 1', '«переведена́ в зал № 3 на пе́рвом этаже́»']
    ]},
    { t: 'note', html: 'Câu 1 là <b>bẫy số</b> điển hình của ТРКИ: bài cho hai con số (65 km và 1 giờ), câu hỏi hỏi thời gian, đáp án a) cố tình để "65 phút". Người đọc lướt bắt được số 65 là chọn ngay. Cách tránh: đọc lại đúng câu chứa số trước khi khoanh.' },
    { t: 'tip', html: 'Chấm bài thư của em bằng bảng này: đủ 20 câu chưa? có đủ bốn nội dung đề hỏi không? có hỏi lại bạn không? có chào mở và chào kết không? Bốn ô đều "có" là đạt, dù ngữ pháp còn vài lỗi nhỏ.' }
  ],
  vocab: [
    { ru: 'маршру́тка', vn: 'xe khách nhỏ chạy tuyến' }, { ru: 'замерза́ть', vn: 'đóng băng' },
    { ru: 'прозра́чный', vn: 'trong suốt' }, { ru: 'дно', vn: 'đáy' },
    { ru: 'му́сор', vn: 'rác' }, { ru: 'о́чистные сооруже́ния', vn: 'công trình xử lý nước thải' },
    { ru: 'вы́держать', vn: 'chịu đựng được' }, { ru: 'объявле́ние', vn: 'thông báo' },
    { ru: 'расписа́ние', vn: 'lịch, thời khoá biểu' }, { ru: 'бу́дни', vn: 'ngày thường trong tuần' },
    { ru: 'продли́ть срок', vn: 'gia hạn' }, { ru: 'чита́льный зал', vn: 'phòng đọc' },
    { ru: 'ремо́нт', vn: 'sửa chữa' }, { ru: 'собира́ться', vn: 'định làm gì' }
  ],
  ex: [
    { t: 'choice', q: 'Từ Irkutsk đến Listvyanka mất bao lâu?', options: ['65 phút', 'khoảng 1 tiếng', '2 tiếng', 'nửa ngày'], a: 1, why: '«час на маршру́тке». 65 là số km — đây là bẫy số.' },
    { t: 'choice', q: 'Nước Baikal tháng Bảy thường:', options: ['trên 20°', 'khoảng 15°', 'không quá 12°', 'dưới 0°'], a: 2, why: '«не вы́ше двена́дцати гра́дусов».' },
    { t: 'choice', q: 'Vì sao nhiều người chọn đi mùa đông?', options: ['rẻ hơn', 'băng trong như kính, nhìn thấy đáy', 'ít khách', 'có lễ hội'], a: 1, why: '«лёд прозра́чный, как стекло́… сквозь него́ ви́дно дно».' },
    { t: 'choice', q: 'Điều các nhà khoa học lo ngại là:', options: ['nước hồ cạn', 'rác tăng nhanh hơn tốc độ xây công trình xử lý', 'cá ít đi', 'băng mỏng dần'], a: 1, why: 'Câu cuối đoạn ba nói rõ điều này.' },
    { t: 'choice', q: 'Thứ Bảy thư viện mở cửa giờ nào?', options: ['9:00–20:00', '10:00–16:00', 'đóng cửa', '9:00–16:00'], a: 1, why: 'Chủ nhật mới đóng cửa; 9–20 là ngày thường.' },
    { t: 'choice', q: 'Giáo trình được mượn trong bao lâu?', options: ['2 tuần', '1 tháng', 'cả học kỳ', '1 tuần'], a: 2, why: 'Sách thường 2 tuần, riêng учебники cả học kỳ.' },
    { t: 'choice', q: 'Trả sách muộn thì hậu quả là:', options: ['phạt tiền', 'không được mượn sách mới cho đến khi trả', 'bị đình chỉ học', 'không sao'], a: 1, why: '«не мо́жет брать но́вые кни́ги, пока́ не вернёт ста́рые».' },
    { t: 'choice', q: 'Trong bài thư, quên hỏi lại bạn thì:', options: ['Không ảnh hưởng', 'Bị trừ điểm vì thư một chiều', 'Được cộng điểm vì ngắn gọn', 'Phải viết lại'], a: 1, why: 'Thi viết thư là thi giao tiếp — phải có phần hỏi lại.' },
    { t: 'type', q: 'Điền: Я ___ поступа́ть в росси́йский университе́т. (định)', a: 'собираюсь', alt: ['собира́юсь'], hint: 'Động từ "định làm gì", ngôi tôi.' },
    { t: 'match', q: 'Nối:', pairs: [['му́сор', 'rác'], ['расписа́ние', 'thời khoá biểu'], ['прозра́чный', 'trong suốt'], ['продли́ть', 'gia hạn']] }
  ]
};

/* ---------------------------------------------------------- BÀI 27 */
LESSON_DATA['b1-27'] = {
  level: 'b1',
  intro: 'Đề thử phần <b>nghe</b> và <b>nói</b> — hai phần khó tự luyện nhất, và cũng là hai phần người Việt hay đạt điểm thấp nhất. Bài này cho em kịch bản đầy đủ để tự chạy ở nhà.',
  blocks: [
    { t: 'h', text: 'Cách dùng bài này' },
    { t: 'table', head: ['Bước', 'Việc'], rows: [
      ['1', 'Đọc câu hỏi trước — 1 phút'],
      ['2', 'Bấm nút loa trên từng câu để nghe, <b>không nhìn phần chữ</b>'],
      ['3', 'Nghe lần một → hiểu ý; nghe lần hai → chọn đáp án'],
      ['4', 'Xong mới đọc bản chữ để đối chiếu']
    ]},
    { t: 'warn', html: 'Bài này dùng giọng đọc máy của trình duyệt — nó chuẩn về từ nhưng <b>đều đều</b>, không giống người thật. Đây là bàn đạp, không phải đích. Sau khi làm xong bài này, em phải nghe người Nga thật: podcast, YouTube, phim. Bài 11 có danh sách nguồn.' },
    { t: 'h', text: 'АУДИРОВАНИЕ — Đoạn 1: hội thoại ở ký túc xá' },
    { t: 'dialog', lines: [
      { who: 'А́ня', ru: 'Чунг, ты не зна́ешь, когда́ бу́дет консульта́ция по фи́зике?', vn: 'Trung ơi, cậu có biết bao giờ có buổi hướng dẫn môn vật lý không?' },
      { who: 'Чунг', ru: 'В четве́рг, в три часа́, в аудито́рии двести́ пять.', vn: 'Thứ Năm, ba giờ, phòng 205.' },
      { who: 'А́ня', ru: 'В четве́рг? А я ду́мала, в сре́ду. Хорошо́, что спроси́ла.', vn: 'Thứ Năm à? Tớ lại tưởng thứ Tư. May mà hỏi.' },
      { who: 'Чунг', ru: 'Расписа́ние поменя́ли на про́шлой неде́ле. Пове́сили объявле́ние на пе́рвом этаже́.', vn: 'Lịch bị đổi tuần trước. Người ta dán thông báo ở tầng một.' },
      { who: 'А́ня', ru: 'Поня́тно. А ты пойдёшь?', vn: 'Ra vậy. Cậu có đi không?' },
      { who: 'Чунг', ru: 'Обяза́тельно. Мне ну́жно спроси́ть про лабора́торную рабо́ту.', vn: 'Chắc chắn. Tớ cần hỏi về bài thí nghiệm.' }
    ]},
    { t: 'table', head: ['#', 'Câu hỏi', 'Phương án'], rows: [
      ['1', 'Buổi hướng dẫn diễn ra khi nào?', 'a) thứ Tư 3h · b) thứ Năm 3h · c) thứ Năm 5h · d) thứ Ba 3h'],
      ['2', 'Vì sao Anya nhầm?', 'a) quên · b) lịch bị đổi tuần trước · c) bạn nói sai · d) không đọc thông báo bao giờ'],
      ['3', 'Vì sao Trung nhất định đi?', 'a) sợ điểm kém · b) muốn hỏi về bài thí nghiệm · c) đi cùng Anya · d) giáo viên yêu cầu']
    ]},
    { t: 'h', text: 'АУДИРОВАНИЕ — Đoạn 2: thông báo ở sân bay' },
    { t: 'p', html: '<span class="ru">Уважа́емые пассажи́ры! Рейс но́мер SU три́ста два́дцать оди́н «Москва́ — Ирку́тск» заде́рживается на два часа́ по техни́ческим причи́нам. Но́вое вре́мя вы́лета — двена́дцать часо́в три́дцать мину́т. Пассажи́рам э́того ре́йса про́сьба получи́ть тало́ны на пита́ние у сто́йки но́мер семь. Приноси́м извине́ния за неудо́бства.</span>' },
    { t: 'table', head: ['#', 'Câu hỏi', 'Phương án'], rows: [
      ['4', 'Chuyến bay đi đâu?', 'a) Moskva · b) Irkutsk · c) Sankt-Peterburg · d) Vladivostok'],
      ['5', 'Chậm bao lâu?', 'a) 1 tiếng · b) 2 tiếng · c) 30 phút · d) 12 tiếng'],
      ['6', 'Hành khách cần làm gì?', 'a) đổi vé · b) lấy phiếu ăn ở quầy số 7 · c) ra cổng 7 · d) về nhà']
    ]},
    { t: 'h', text: 'АУДИРОВАНИЕ — Đoạn 3: bản tin ngắn' },
    { t: 'p', html: '<span class="ru">В Ирку́тске откры́лся но́вый культу́рный центр для иностра́нных студе́нтов. Центр нахо́дится в це́нтре го́рода, ря́дом с университе́том. Здесь мо́жно беспла́тно занима́ться ру́сским языко́м три ра́за в неде́лю, а та́кже участвовать в клу́бах: те́атр, му́зыка, спорт. По слова́м дире́ктора це́нтра, сейча́с в Ирку́тске у́чатся студе́нты из бо́лее чем сорока́ стран, и ча́ще всего́ им не хвата́ет и́менно живо́го обще́ния на ру́сском языке́.</span>' },
    { t: 'table', head: ['#', 'Câu hỏi', 'Phương án'], rows: [
      ['7', 'Trung tâm dành cho ai?', 'a) trẻ em · b) sinh viên nước ngoài · c) giáo viên · d) khách du lịch'],
      ['8', 'Học tiếng Nga ở đây:', 'a) mất phí · b) miễn phí, 3 buổi/tuần · c) chỉ cuối tuần · d) chỉ cho người mới'],
      ['9', 'Theo giám đốc, sinh viên thiếu nhất điều gì?', 'a) tiền · b) chỗ ở · c) cơ hội giao tiếp thật bằng tiếng Nga · d) sách vở']
    ]},
    { t: 'h', text: 'Đáp án phần nghe' },
    { t: 'table', head: ['Câu', 'Đáp án', 'Ghi chú'], rows: [
      ['1', 'b — thứ Năm 3h', 'Bẫy: Anya nhắc "thứ Tư" — nghe lướt dễ bắt nhầm từ đó'],
      ['2', 'b — lịch bị đổi tuần trước', '«Расписа́ние поменя́ли на про́шлой неде́ле»'],
      ['3', 'b — hỏi về bài thí nghiệm', '«спроси́ть про лабора́торную рабо́ту»'],
      ['4', 'b — Irkutsk', '«Москва́ — Ирку́тск»: điểm đến là từ thứ hai'],
      ['5', 'b — 2 tiếng', 'Bẫy: có cả "12:30" trong bài, dễ nhầm sang 12 tiếng'],
      ['6', 'b — lấy phiếu ăn ở quầy số 7', '«тало́ны на пита́ние у сто́йки но́мер семь»'],
      ['7', 'b — sinh viên nước ngoài', 'Câu đầu tiên đã nói'],
      ['8', 'b — miễn phí, 3 buổi/tuần', '«беспла́тно… три ра́за в неде́лю»'],
      ['9', 'c — thiếu giao tiếp thật', '«не хвата́ет и́менно живо́го обще́ния»']
    ]},
    { t: 'note', html: 'Hai bẫy vừa gặp là hai bẫy kinh điển: (1) <b>từ mồi</b> — trong đoạn có nhắc "thứ Tư" nhưng đó là điều nhân vật <b>tưởng nhầm</b>; (2) <b>số lạc</b> — "12:30" là giờ bay mới, không phải thời gian chậm. Ở phần nghe, luôn hỏi: con số này gắn với <b>cái gì</b>?' },
    { t: 'h', text: 'ГОВОРЕНИЕ — Phần 1: phản ứng tình huống' },
    { t: 'p', html: 'Đọc tình huống, nói ngay <b>một câu</b> phù hợp, không quá 5 giây suy nghĩ.' },
    { t: 'table', head: ['Tình huống', 'Câu mẫu'], rows: [
      ['Em đến muộn buổi học', 'Извини́те за опозда́ние, мо́жно войти́?'],
      ['Em muốn hỏi đường ra ga', 'Извини́те, как пройти́ к вокза́лу?'],
      ['Bạn mời em đi xem phim nhưng em bận', 'Спаси́бо за приглаше́ние, но, к сожале́нию, я не смогу́.'],
      ['Em muốn đổi hàng ở cửa hàng', 'Здра́вствуйте, мо́жно поменя́ть э́ту ку́ртку? Вот чек.'],
      ['Em cần xin giấy nghỉ ốm', 'Мне ну́жен больни́чный, пожа́луйста.'],
      ['Bạn giúp em một việc lớn', 'Огро́мное спаси́бо, ты о́чень мне помо́г!'],
      ['Em không nghe rõ giám khảo', 'Извини́те, повтори́те, пожа́луйста.'],
      ['Em muốn hẹn gặp thầy hướng dẫn', 'Когда́ вам удо́бно встре́титься?']
    ]},
    { t: 'h', text: 'ГОВОРЕНИЕ — Phần 2: hội thoại' },
    { t: 'p', html: '<b>Tình huống:</b> Em gọi điện tới ký túc xá để hỏi thuê phòng. Hãy hỏi đủ <b>năm</b> điều: còn chỗ không, giá bao nhiêu, phòng mấy người, có bếp không, cần giấy tờ gì.' },
    { t: 'words', items: [
      { ru: 'Здра́вствуйте, я звоню́ по по́воду общежи́тия.', vn: 'Chào anh/chị, tôi gọi về chuyện ký túc xá.' },
      { ru: 'У вас есть свобо́дные места́?', vn: 'Bên mình còn chỗ trống không ạ?' },
      { ru: 'Ско́лько сто́ит прожива́ние в ме́сяц?', vn: 'Ở một tháng hết bao nhiêu ạ?' },
      { ru: 'Ско́лько челове́к в ко́мнате?', vn: 'Một phòng mấy người ạ?' },
      { ru: 'На этаже́ есть ку́хня?', vn: 'Trên tầng có bếp không ạ?' },
      { ru: 'Каки́е докуме́нты ну́жны?', vn: 'Cần những giấy tờ gì ạ?' },
      { ru: 'Спаси́бо за информа́цию. До свида́ния.', vn: 'Cảm ơn thông tin. Tạm biệt ạ.' }
    ]},
    { t: 'tip', html: 'Ở phần hội thoại, giám khảo chấm em có <b>hỏi đủ</b> số ý đề yêu cầu không. Nhiều thí sinh nói rất trôi chảy nhưng chỉ hỏi ba trong năm ý và bị trừ. Trước khi nói, đếm bằng ngón tay: một, hai, ba, bốn, năm.' },
    { t: 'h', text: 'ГОВОРЕНИЕ — Phần 3: độc thoại' },
    { t: 'p', html: '<b>Đề:</b> <span class="ru">Что́ ва́жнее при вы́боре профе́ссии — де́ньги и́ли интере́с?</span> Nói 2–3 phút, dùng khung bốn bước bài 12.' },
    { t: 'table', head: ['Bước', 'Nội dung cần có', 'Số câu'], rows: [
      ['1. Ý kiến', 'Я счита́ю, что… / На мой взгляд…', '1–2'],
      ['2. Lý lẽ', 'Во-пе́рвых… Во-вторы́х…', '3–4'],
      ['3. Ví dụ', 'Наприме́р, мой друг…', '2–3'],
      ['4. Nhượng bộ + kết', 'Коне́чно… Тем не ме́нее… Таки́м о́бразом…', '2–3']
    ]},
    { t: 'warn', html: 'Tự thu âm bài nói rồi <b>nghe lại</b>. Đây là việc khó chịu nhất và hiệu quả nhất trong cả quá trình học. Nghe lại chính giọng mình, em sẽ tự phát hiện ra những lỗi mà không thầy nào chỉ ra được — nói quá nhanh, ê a giữa câu, quên đuôi cách.' },
    { t: 'note', html: 'Chấm bài nói của mình bằng bốn câu hỏi: có đủ bốn bước không? có nói được 2 phút không? có dừng quá 5 giây lần nào không? có câu nào bỏ dở giữa chừng không? Bốn ô "đạt" là em qua được phần nói.' }
  ],
  vocab: [
    { ru: 'консульта́ция', vn: 'buổi hướng dẫn, tư vấn' }, { ru: 'аудито́рия', vn: 'phòng học' },
    { ru: 'лабора́торная рабо́та', vn: 'bài thí nghiệm' }, { ru: 'рейс', vn: 'chuyến bay' },
    { ru: 'заде́рживаться', vn: 'bị chậm, bị hoãn' }, { ru: 'вы́лет', vn: 'giờ cất cánh' },
    { ru: 'тало́н', vn: 'phiếu' }, { ru: 'сто́йка', vn: 'quầy' },
    { ru: 'неудо́бство', vn: 'sự bất tiện' }, { ru: 'беспла́тно', vn: 'miễn phí' },
    { ru: 'обще́ние', vn: 'sự giao tiếp' }, { ru: 'не хвата́ет', vn: 'thiếu' },
    { ru: 'общежи́тие', vn: 'ký túc xá' }, { ru: 'прожива́ние', vn: 'việc ở, lưu trú' },
    { ru: 'опозда́ние', vn: 'sự đến muộn' }, { ru: 'приглаше́ние', vn: 'lời mời' }
  ],
  ex: [
    { t: 'choice', q: 'Buổi hướng dẫn môn vật lý diễn ra khi nào?', options: ['thứ Tư 3h', 'thứ Năm 3h', 'thứ Năm 5h', 'thứ Ba 3h'], a: 1, why: 'Anya nhắc "thứ Tư" nhưng đó là điều cô ấy tưởng nhầm — bẫy từ mồi.' },
    { t: 'choice', q: 'Vì sao Anya nhớ nhầm lịch?', options: ['Quên', 'Lịch bị đổi tuần trước', 'Bạn nói sai', 'Không bao giờ đọc thông báo'], a: 1, why: '«Расписа́ние поменя́ли на про́шлой неде́ле».' },
    { t: 'choice', q: 'Chuyến bay SU-321 bay tới đâu?', options: ['Moskva', 'Irkutsk', 'Sankt-Peterburg', 'Vladivostok'], a: 1, why: 'Trong «Москва́ — Ирку́тск», điểm đến là từ thứ hai.' },
    { t: 'choice', q: 'Chuyến bay bị chậm bao lâu?', options: ['1 tiếng', '2 tiếng', '30 phút', '12 tiếng'], a: 1, why: '«заде́рживается на два часа́». 12:30 là giờ bay mới — số lạc.' },
    { t: 'choice', q: 'Hành khách được yêu cầu làm gì?', options: ['Đổi vé', 'Lấy phiếu ăn ở quầy số 7', 'Ra cổng số 7', 'Về nhà'], a: 1, why: '«тало́ны на пита́ние у сто́йки но́мер семь».' },
    { t: 'choice', q: 'Ở trung tâm văn hoá mới, học tiếng Nga:', options: ['Mất phí', 'Miễn phí, 3 buổi mỗi tuần', 'Chỉ cuối tuần', 'Chỉ cho người mới'], a: 1, why: '«беспла́тно… три ра́за в неде́лю».' },
    { t: 'choice', q: 'Theo giám đốc trung tâm, sinh viên nước ngoài thiếu nhất:', options: ['Tiền', 'Chỗ ở', 'Cơ hội giao tiếp thật bằng tiếng Nga', 'Sách vở'], a: 2, why: '«не хвата́ет и́менно живо́го обще́ния на ру́сском языке́».' },
    { t: 'choice', q: 'Đến lớp muộn, em nói:', options: ['Здра́вствуйте, я тут', 'Извини́те за опозда́ние, мо́жно войти́?', 'Я опозда́л, ничего́', 'Мо́жно я сяду́?'], a: 1, why: 'Xin lỗi vì muộn + xin phép vào — công thức chuẩn.' },
    { t: 'choice', q: 'Ở phần hội thoại, đề bảo hỏi 5 ý mà em chỉ hỏi 3 thì:', options: ['Vẫn đạt nếu nói trôi chảy', 'Bị trừ vì thiếu ý', 'Được cộng vì ngắn gọn', 'Không ảnh hưởng'], a: 1, why: 'Giám khảo chấm theo số ý đề yêu cầu, không chỉ chấm độ trôi chảy.' },
    { t: 'type', q: 'Điền: Здра́вствуйте, я звоню́ по ___ общежи́тия. (về chuyện)', a: 'поводу', alt: ['по́воду'], hint: 'по поводу + cách 2 = về vấn đề gì.' },
    { t: 'match', q: 'Nối:', pairs: [['рейс', 'chuyến bay'], ['заде́рживаться', 'bị hoãn'], ['общежи́тие', 'ký túc xá'], ['не хвата́ет', 'thiếu']] }
  ]
};

/* ---------------------------------------------------------- BÀI 28 */
LESSON_DATA['b1-28'] = {
  level: 'b1',
  intro: 'Bài cuối của B1. Không có kiến thức mới — đây là <b>bản đồ</b> của cả 27 bài trước, kèm một bảng tự kiểm để em biết mình đã thật sự đứng ở đâu trước khi bấm nút thi.',
  blocks: [
    { t: 'h', text: 'Cả cấp B1 trong một bảng' },
    { t: 'table', head: ['Nhóm', 'Bài', 'Cái cốt lõi'], rows: [
      ['Ngữ pháp nền', '1–2', 'Sáu cách thành hệ thống · động từ đi với cách nào'],
      ['Ngữ pháp cao cấp', '3–6', 'Phân từ chủ động/bị động · gerund · câu vô nhân xưng'],
      ['Câu phức', '7–8', 'Lời nói gián tiếp (không lùi thì) · liên từ điều kiện, nhượng bộ'],
      ['Từ vựng có hệ thống', '9, 22', 'Tiền tố – hậu tố – họ từ · phân biệt từ đồng nghĩa'],
      ['Kỹ năng đọc – nghe', '10–11, 24', 'Cấu trúc bài báo · nghe bản tin · đọc văn nguyên bản'],
      ['Kỹ năng nói – viết', '12–13', 'Khung bốn bước · đơn từ hành chính'],
      ['Chủ đề đời sống', '14–21', 'Học ở Nga · thành phố · khoa học · văn hoá · môi trường · sức khoẻ · tiền bạc · thành ngữ'],
      ['Sửa lỗi & luyện thi', '23, 25–27', '12 lỗi người Việt · chiến lược thi · hai đề thử']
    ]},
    { t: 'h', text: 'Mười điểm ngữ pháp phải chắc' },
    { t: 'table', head: ['#', 'Điểm', 'Kiểm tra nhanh'], rows: [
      ['1', 'Sáu cách, cả số ít lẫn số nhiều', 'Chia được «но́вый ру́сский студе́нт» qua 6 cách?'],
      ['2', 'Động từ + cách bắt buộc', 'занима́ться <b>чем</b>, интересова́ться <b>чем</b>, помога́ть <b>кому́</b>'],
      ['3', 'Thể hoàn thành / chưa hoàn thành', 'чита́л ≠ прочита́л; sau на́чал luôn là chưa hoàn thành'],
      ['4', 'Động từ chuyển động ± tiền tố', 'иду́ / хожу́ / пришёл / ушёл / зашёл'],
      ['5', 'Phân từ chủ động và bị động', 'чита́ющий · прочи́танный · дом постро́ен'],
      ['6', 'Gerund và quy tắc một chủ ngữ', 'Чита́я кни́гу, я ду́мал… (cùng một người làm cả hai việc)'],
      ['7', 'Câu vô nhân xưng', 'Мне хо́лодно · Меня́ тошни́т · Ста́ло темно́'],
      ['8', 'Lời nói gián tiếp', 'Он сказа́л, что <b>рабо́тает</b> (không lùi thì như tiếng Anh)'],
      ['9', 'So sánh hơn / nhất', 'доро́же · деше́вле · са́мый интере́сный · лу́чше всего́'],
      ['10', 'Số đếm + cách', '2–4 + cách 2 số ít · 5–20 + cách 2 số nhiều']
    ]},
    { t: 'h', text: 'Tự kiểm — em có thật sự ở mức B1 không?' },
    { t: 'table', head: ['Em làm được việc này chưa?', 'Nếu chưa, quay lại bài'], rows: [
      ['Đọc một bài báo Nga và kể lại ý chính bằng 5 câu', '10, 24'],
      ['Nghe bản tin 2 phút và bắt được 3 thông tin chính', '11, 27'],
      ['Nói 2 phút về một chủ đề bất kỳ, có lý lẽ và ví dụ', '12, 27'],
      ['Viết đơn xin nghỉ đúng mẫu hành chính', '13'],
      ['Viết thư 20 câu cho bạn, có hỏi lại', '26'],
      ['Kể lại lời người khác mà không sai thì', '7'],
      ['Dùng đúng изучать / учить / учиться / заниматься', '22'],
      ['Không còn viết «Я есть студе́нт» hay «Нет вре́мя»', '23'],
      ['Nói được ở phòng khám và ở cửa hàng', '19, 20'],
      ['Hiểu và dùng đúng 5 thành ngữ Nga', '21']
    ]},
    { t: 'warn', html: 'Nếu quá <b>ba</b> ô còn "chưa", đừng thi vội. B1 không phải là biết nhiều từ — mà là <b>làm được việc</b> bằng tiếng Nga. Quay lại đúng những bài ghi bên cạnh, mỗi bài một buổi, rồi tự kiểm lại.' },
    { t: 'h', text: 'Sau B1 thì đi đâu' },
    { t: 'table', head: ['Việc', 'Vì sao'], rows: [
      ['Thi lấy chứng chỉ ТРКИ-1', 'Đủ điều kiện ngôn ngữ vào đại học Nga'],
      ['Đọc mỗi ngày 1 bài báo Nga', 'Giữ vốn từ khỏi rơi rụng — đây là việc quan trọng nhất'],
      ['Xem phim Nga có phụ đề Nga', 'Nối tai với chữ; phụ đề Việt thì tai không làm việc'],
      ['Tìm bạn nói tiếng Nga', 'Không có người nói cùng thì kỹ năng nói đứng yên'],
      ['Bắt đầu B2', 'B2 là mức đọc được tài liệu chuyên ngành và viết luận văn']
    ]},
    { t: 'note', html: 'Một sự thật nên biết: nhiều người đạt B1 rồi <b>tụt lại</b> vì tưởng đã xong. Vốn từ không dùng thì rơi rất nhanh — nhanh hơn lúc học. Mỗi ngày mười lăm phút đọc hoặc nghe là đủ giữ, và giữ được thì lên B2 dễ hơn nhiều so với học lại từ đầu.' },
    { t: 'tip', html: 'Việc cuối cùng nên làm hôm nay: ôn hết bộ thẻ từ B1 trong mục Thẻ ghi nhớ, rồi vào phần Thi lấy chứng nhận cấp B1. Nếu đạt, em có thể mở B2. Nếu chưa, bài thi sẽ chỉ ra đúng chỗ hổng.' },
    { t: 'h', text: 'Một câu để kết' },
    { t: 'p', html: '<span class="ru ru-big">Без труда́ не вы́тащишь и ры́бку из пруда́.</span>' },
    { t: 'note', html: 'Có công mài sắt có ngày nên kim. Em đã đi từ chữ cái А đến chỗ đọc được Chekhov — đó không phải chuyện nhỏ.' }
  ],
  vocab: [
    { ru: 'повторе́ние', vn: 'sự ôn tập' }, { ru: 'у́ровень', vn: 'trình độ, cấp độ' },
    { ru: 'дости́чь у́ровня', vn: 'đạt tới trình độ' }, { ru: 'проверя́ть себя́', vn: 'tự kiểm tra' },
    { ru: 'слабое ме́сто', vn: 'điểm yếu' }, { ru: 'закрепи́ть', vn: 'củng cố' },
    { ru: 'регуля́рно', vn: 'đều đặn' }, { ru: 'продолжа́ть', vn: 'tiếp tục' },
    { ru: 'подгото́вка', vn: 'sự chuẩn bị' }, { ru: 'дости́жение', vn: 'thành tựu' }
  ],
  ex: [
    { t: 'choice', q: 'Sau <span class="ru">на́чал</span> luôn dùng thể nào?', options: ['Hoàn thành', 'Chưa hoàn thành', 'Cả hai', 'Không có động từ'], a: 1, why: 'на́чал чита́ть ✓ · на́чал прочита́ть ✗' },
    { t: 'choice', q: 'Lời nói gián tiếp trong tiếng Nga:', options: ['Lùi thì như tiếng Anh', 'Giữ nguyên thì của câu gốc', 'Luôn dùng quá khứ', 'Luôn dùng hiện tại'], a: 1, why: 'Он сказа́л, что рабо́тает — thì không lùi.' },
    { t: 'choice', q: 'Quy tắc quan trọng nhất của gerund là:', options: ['Luôn đứng đầu câu', 'Hai hành động phải cùng một chủ ngữ', 'Luôn đi với не', 'Chỉ dùng trong văn viết'], a: 1, why: 'Vi phạm quy tắc này là lỗi kinh điển, cả người Nga cũng mắc.' },
    { t: 'choice', q: '<span class="ru">пять книг</span> — книг ở dạng:', options: ['cách 1 số nhiều', 'cách 2 số ít', 'cách 2 số nhiều', 'cách 4 số nhiều'], a: 2, why: 'Số 5–20 + cách 2 số nhiều.' },
    { t: 'choice', q: '<span class="ru">Дом постро́ен</span> là dạng gì?', options: ['Phân từ chủ động', 'Phân từ bị động dạng ngắn', 'Gerund', 'Tính từ so sánh'], a: 1, why: 'Dạng ngắn của построенный — cấu trúc bị động thường gặp nhất.' },
    { t: 'choice', q: 'Việc quan trọng nhất để không tụt trình sau khi đạt B1:', options: ['Học thêm 1000 từ', 'Đọc/nghe tiếng Nga mỗi ngày dù chỉ 15 phút', 'Thi lại nhiều lần', 'Học thuộc bảng cách'], a: 1, why: 'Vốn từ không dùng rơi nhanh hơn lúc học.' },
    { t: 'choice', q: 'Xem phim Nga nên bật phụ đề:', options: ['Tiếng Việt', 'Tiếng Nga', 'Tiếng Anh', 'Không phụ đề'], a: 1, why: 'Phụ đề Nga nối tai với chữ; phụ đề Việt thì tai gần như không làm việc.' },
    { t: 'type', q: 'Điền tục ngữ: Без ___ не вы́тащишь и ры́бку из пруда́.', a: 'труда', alt: ['труда́'], hint: 'Cách 2 của труд (công sức).' },
    { t: 'match', q: 'Nối bài với nội dung:', pairs: [['Bài 23', '12 lỗi của người Việt'], ['Bài 12', 'khung bốn bước nói ý kiến'], ['Bài 13', 'đơn từ hành chính'], ['Bài 5', 'gerund']] }
  ]
};
