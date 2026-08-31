# Học tiếng Nga cùng Oanh

Web học tiếng Nga miễn phí bằng tiếng Việt, từ bảng chữ cái đến C2.
Chạy hoàn toàn bằng HTML/CSS/JS thuần — không cần máy chủ, không cần build, không cần cài gì.

## Xem thử trên máy

Mở thẳng file `index.html` bằng trình duyệt là chạy được — nhưng phải nối Supabase trước (xem mục *Nối Supabase* bên dưới), vì web yêu cầu đăng nhập.

## Đưa lên mạng bằng GitHub Pages (miễn phí)

1. Vào https://github.com/new, tạo kho mới, ví dụ tên `hoc-tieng-nga`, để **Public**.
2. Ở màn hình kho vừa tạo, bấm **uploading an existing file**, kéo thả **toàn bộ** các file và thư mục trong đây vào (giữ nguyên cấu trúc thư mục), rồi bấm **Commit changes**.
3. Vào tab **Settings** → mục **Pages** ở cột trái.
4. Phần *Build and deployment*: Source chọn **Deploy from a branch**, Branch chọn **main** và thư mục **/ (root)**, bấm **Save**.
5. Đợi 1–2 phút, tải lại trang Pages. Địa chỉ web sẽ hiện ở đầu trang, dạng:
   `https://<tên-tài-khoản>.github.io/hoc-tieng-nga/`

Muốn dùng tên miền riêng (ví dụ `hoctiengnga.com`): mua tên miền, rồi trong Settings → Pages → Custom domain điền tên miền vào, sau đó ở nhà cung cấp tên miền trỏ bản ghi CNAME về `<tên-tài-khoản>.github.io`.

Nếu quen dùng dòng lệnh:

```bash
git init
git add .
git commit -m "Web hoc tieng Nga"
git branch -M main
git remote add origin https://github.com/<tên-tài-khoản>/hoc-tieng-nga.git
git push -u origin main
```

## Cấu trúc

```
index.html          trang chủ: lộ trình 7 cấp, tiến độ, sao lưu
hoc.html            trình phát bài học  (hoc.html?id=a0-03)
khocau.html         kho câu: câu cửa miệng, nói khác viết, lỗi người Việt,
                     thành ngữ, trêu đùa, sống ở Nga + 238 câu hội thoại trong bài
luyentap.html       luyện tập tự do: trộn lại 980 câu bài tập sẵn có
flashcard.html      thẻ từ vựng lặp lại ngắt quãng
thi.html            kì thi cuối cấp + giấy chứng nhận
                     (mở thẳng thi.html = trang chọn cấp; thi.html?level=b1 = vào thi luôn)
dangnhap.html       đăng ký / đăng nhập (email+mật khẩu, Google)
kiemtra.html        kiểm tra đầu vào 2 vòng → xếp lớp
bangdiem.html       bảng điểm cá nhân, huy hiệu, bảng xếp hạng
giaovien.html       trang giáo viên: xem tiến độ cả lớp
tuhoc.html          trang tự học C1–C2 (không phải bài giảng, là lộ trình gợi ý)
tudien.html         từ điển tra hai chiều Nga–Việt, dựng từ vốn từ của 114 bài

assets/css/style.css   toàn bộ giao diện — đổi màu ở khối :root
assets/js/core.js      cấu hình web, lưu tiến độ, phát âm
assets/js/lesson.js    dựng bài học, chấm bài tập
assets/js/srs.js       thuật toán lặp lại ngắt quãng
assets/js/exam.js      chấm thi, vẽ giấy chứng nhận
assets/js/dict.js      từ điển: dựng chỉ mục từ LESSON_DATA, dò dạng biến cách,
                        và biến từ tiếng Nga trong bài thành từ bấm-tra-được
assets/js/record.js    ghi âm giọng mình rồi nghe lại (KHÔNG chấm điểm phát âm)
assets/js/cloze.js     dựng bài điền vào chỗ trống từ 382 câu sẵn có

manifest.webmanifest   khai báo để cài web vào màn hình điện thoại
sw.js                  service worker: chạy được khi mất mạng
assets/icons/          biểu tượng app (192, 512, maskable, apple-touch)
assets/js/auth.js      tài khoản + đồng bộ tiến độ lên Supabase
assets/js/supabase-config.js   KHOÁ SUPABASE — em dán vào đây

supabase/schema.sql    bảng và phân quyền, chạy một lần trong SQL Editor

data/course.js         lộ trình A0→C2 và danh sách bài từng cấp
                        (c1, c2 có cờ selfStudy: true, không có LESSONS — trỏ sang tuhoc.html)
data/lessons/a0.js     nội dung cấp A0 (10 bài)
data/lessons/a1.js     nội dung cấp A1 (24 bài)
data/lessons/a2.js     nội dung cấp A2 (24 bài)
data/lessons/b1.js     nội dung cấp B1 (28 bài)
data/lessons/b2.js     nội dung cấp B2 (28 bài)
data/phrases.js        kho câu chọn tay: PHRASE_CATS (nhóm) + PHRASES (câu)
data/exams.js          đề thi cuối cấp
data/placement.js      ngân hàng câu hỏi kiểm tra đầu vào
```

## Đổi tên web

Mở `assets/js/core.js`, sửa khối `SITE` ở đầu file. Tên hiện ra trên thanh điều hướng, chân trang và giấy chứng nhận đều lấy từ đó.

## Thêm một bài học mới

**Bước 1** — trong `data/course.js`, tìm bài trong `LESSONS` và thêm `ready: true`:

```js
{ id: 'a1-01', title: 'Giống của danh từ', sub: 'Nam, nữ hay trung tính', ready: true },
```

**Bước 2** — tạo file `data/lessons/a1.js` (rồi thêm `<script src="data/lessons/a1.js"></script>` vào 4 trang html, ngay dưới dòng nạp `a0.js`) với nội dung:

```js
LESSON_DATA['a1-01'] = {
  level: 'a1',
  intro: 'Câu dẫn nhập, cho phép thẻ HTML.',
  blocks: [
    { t: 'h',    text: 'Tiêu đề mục' },
    { t: 'p',    html: 'Đoạn văn, cho phép <b>thẻ HTML</b>.' },
    { t: 'note', html: 'Khung xanh — thông tin thêm.' },
    { t: 'tip',  html: 'Khung xanh lá — mẹo học.' },
    { t: 'warn', html: 'Khung đỏ — cảnh báo lỗi hay mắc.' },
    { t: 'letters', items: [
      { L: 'Б б', say: 'б', read: 'b', note: 'Giải thích cách đọc.', ex: 'брат', exvn: 'anh trai' }
    ]},
    { t: 'words', items: [ { ru: 'дом', vn: 'ngôi nhà', note: 'ghi chú (không bắt buộc)' } ]},
    { t: 'table', head: ['Cột 1', 'Cột 2'], rows: [['ô A', 'ô B']] },
    { t: 'dialog', lines: [ { who: 'А', ru: 'Приве́т!', vn: 'Chào!' } ]},
    { t: 'alphabet' }        // chèn bảng 33 chữ cái bấm nghe được
  ],
  vocab: [ { ru: 'дом', vn: 'ngôi nhà' } ],   // tự động vào bộ thẻ khi học xong bài
  ex: [
    { t: 'choice', q: 'Câu hỏi?', options: ['A', 'B'], a: 1, why: 'Giải thích đáp án.' },
    { t: 'type',   q: 'Gõ từ “nhà”:', a: 'дом', alt: ['до́м'], hint: 'Ba chữ cái.' },
    { t: 'listen', q: 'Nghe và gõ lại:', say: 'дом', a: 'дом' },
    { t: 'match',  q: 'Nối:', pairs: [['дом', 'ngôi nhà'], ['брат', 'anh trai']] }
  ]
};
```

Đúng 70% bài tập trở lên thì bài được tính là học xong và từ vựng được nạp vào bộ thẻ.

## Bài giảng tự chạy

Mỗi bài học có nút **“Xem bài giảng”**: nội dung bài được dựng thành một chuỗi màn hình toàn màn hình tự lật, máy đọc tiếng Nga bằng giọng Nga và giảng bằng giọng Việt (nếu máy người học có giọng vi-VN; không có thì màn hình tự dừng lâu hơn để đọc bằng mắt).

Không cần làm gì thêm khi viết bài mới — trình chiếu được dựng **tự động từ chính `blocks` của bài**, nên thêm bài là có bài giảng. Mã nằm ở `assets/js/lecture.js`; muốn đổi cách một loại khối hiển thị thì sửa hàm `build()`.

Điều khiển: phím cách chạy/dừng, ← → chuyển màn, Esc thoát. Có ba tốc độ và nút tắt lời giảng tiếng Việt.

## Kiểm tra đầu vào

`kiemtra.html` chạy hai vòng: **vòng 1** 12 câu trải từ A0 đến B2 để đoán mức sơ bộ, **vòng 2** 8 câu đúng mức vừa đoán để chốt. Kết quả lưu vào `Store.placed` (mã cấp độ) — trang chủ dùng nó để đánh dấu các cấp thấp hơn là “em đã biết” và nhảy thẳng tới bài nên bắt đầu. Người dùng vẫn mở được mọi bài, không khoá gì cả.

Người mới đăng ký được đưa thẳng sang trang này, và có nút bỏ qua để học từ đầu.

Sửa/thêm câu hỏi ở `data/placement.js`: `round1` (mỗi câu có `lv` là mức của nó) và `banks` (8 câu cho mỗi mức). Ngưỡng chấm nằm ở cuối `kiemtra.html`: qua vòng 1 nếu đúng ≥ 50% số câu của mức đó; vòng 2 đúng ≥ 6/8 thì lên mức kế tiếp, 4–5 thì học lại chính mức đó, dưới 4 thì lùi một mức.

## Bảng điểm và xếp hạng

`bangdiem.html` gồm: cấp hiệu và điểm kinh nghiệm, bốn con số chính, dải hoạt động 30 ngày, tiến độ từng cấp, huy hiệu, và bảng xếp hạng.

Điểm kinh nghiệm **không lưu riêng** mà tính lại từ tiến độ mỗi lần mở trang (`computeXP()` trong `core.js`), nên không bao giờ lệch với thực tế. Muốn đổi cách tính thì sửa `XP_RULES`; đổi cấp hiệu thì sửa `RANKS`; thêm huy hiệu thì thêm một dòng vào `BADGES` với hàm `has(st, d)`.

Bảng xếp hạng đọc từ view `public.leaderboard` trong `supabase/schema.sql` — view này cố ý chạy bằng quyền chủ sở hữu để mọi người đăng nhập đều đọc được, và **chỉ lộ tên hiển thị cùng vài con số**, không lộ email hay nội dung học. Nếu bảng xếp hạng báo lỗi thì chạy lại `schema.sql` (phần 7).

## Thêm đề thi cho một cấp

Trong `data/exams.js`, thêm khoá mới theo mẫu của `a0`. Các loại câu hỏi giống hệt bài tập (`choice`, `type`, `listen`).


## Nối Supabase (tài khoản + lưu tiến độ thật)

Tiến độ lưu trên Supabase nên đổi máy, đổi điện thoại vẫn còn nguyên.

**Học thử không cần tài khoản:** ba bài đầu (`a0-01`, `a0-02`, `a0-03`) mở cho tất cả mọi người, tiến độ tạm giữ trong máy; đăng nhập là toàn bộ phần đã học được gộp lên tài khoản. Muốn mở nhiều hay ít bài hơn thì sửa dòng `FREE_LESSONS` ở đầu `assets/js/core.js`. Các bài còn lại, kì thi và trang giáo viên đều cần đăng nhập.

### 1. Tạo dự án

Vào https://supabase.com → **New project**. Đặt tên gì cũng được, chọn region **Southeast Asia (Singapore)** cho gần Việt Nam. Nhớ lưu mật khẩu database nó bắt đặt.

### 2. Tạo bảng

Vào **SQL Editor** → **New query** → dán toàn bộ nội dung file `supabase/schema.sql` → **Run**. Chạy một lần duy nhất, tạo 3 bảng và toàn bộ quy tắc phân quyền.

### 3. Dán khoá vào web

Vào **Settings → API**, chép hai giá trị:

- **Project URL** → dán vào `SUPABASE_URL`
- **anon public** key → dán vào `SUPABASE_ANON_KEY`

Hai dòng đó nằm trong `assets/js/supabase-config.js`. Hai khoá này công khai được, an toàn nằm ở Row Level Security. **Đừng bao giờ dán `service_role` key vào đây.**

### 4. Cấu hình đăng nhập

Vào **Authentication → URL Configuration**:

- **Site URL**: `https://trungrussian.vercel.app`
- **Redirect URLs**: thêm `https://trungrussian.vercel.app/dangnhap.html`

Vào **Authentication → Providers → Email**: tắt **Confirm email** nếu muốn đăng ký xong vào học luôn, khỏi phải mở hộp thư. Để bật thì an toàn hơn nhưng thêm một bước cho người học.

### 5. Bật đăng nhập Google

1. Vào https://console.cloud.google.com → tạo project → **APIs & Services → Credentials → Create credentials → OAuth client ID** → loại **Web application**.
2. Ở ô **Authorized redirect URIs**, dán đường dẫn callback mà Supabase hiện sẵn trong mục Google provider, dạng:
   `https://<mã-dự-án>.supabase.co/auth/v1/callback`
3. Ở ô **Authorized JavaScript origins**, dán `https://trungrussian.vercel.app`
4. Chép **Client ID** và **Client Secret** về dán vào Supabase → **Authentication → Providers → Google** → bật lên → **Save**.

Chưa làm bước này thì nút Google vẫn hiện nhưng bấm vào sẽ báo chưa bật — phần email + mật khẩu vẫn chạy bình thường.

### 6. Tự đặt mình làm giáo viên

Đăng ký một tài khoản trên web bằng email của em trước, rồi vào **SQL Editor** chạy:

```sql
update public.profiles set role = 'teacher' where email = 'email-cua-em@gmail.com';
```

Tải lại web, thanh trên cùng sẽ hiện thêm mục **Giáo viên** — vào đó xem cả lớp học tới đâu, sai câu nào, thi được bao nhiêu điểm.

### Dữ liệu nằm ở đâu

| Bảng | Chứa gì |
|---|---|
| `profiles` | tên, email, vai trò (student / teacher) |
| `progress` | toàn bộ tiến độ của mỗi người dưới dạng JSON + vài cột tóm tắt để trang giáo viên đọc nhanh |
| `exam_results` | lịch sử từng lần thi |

Row Level Security bật sẵn: mỗi người chỉ đọc/ghi được dữ liệu của chính mình, riêng tài khoản `role = 'teacher'` đọc được tất cả và không sửa được gì của ai.

## Vài điều nên biết

- **Tiến độ lưu trên Supabase** theo tài khoản, kèm bản dự phòng trong `localStorage` để web vẫn mượt khi mạng chập chờn. Trang chủ vẫn có nút *Sao lưu ra file* và *Khôi phục*.
- **Phát âm** dùng giọng đọc sẵn có trong trình duyệt (Web Speech API). Chrome trên Windows/Android và Safari trên iPhone đều có giọng Nga. Máy nào không có giọng Nga thì nút loa sẽ đọc bằng giọng mặc định nghe hơi lạ — đó là hạn chế của máy người dùng, không phải lỗi web.
- **Giấy chứng nhận** là chứng nhận nội bộ của website này, ghi nhận nỗ lực người học. Nó không phải và không được trình bày như chứng chỉ ТРКИ của nhà nước Nga — điều này được ghi rõ ngay trên giấy.

## Từ điển hoạt động thế nào

`assets/js/dict.js` không gọi API nào cả — nó dựng từ điển ngay lúc chạy từ toàn bộ
mục `vocab` của 114 bài (1 301 từ), cộng thêm bảng `DICT_CORE` gồm ~230 từ chức năng
(đại từ đã biến cách, động từ bất quy tắc, liên từ, thuật ngữ ngữ pháp) — đó là nhóm
từ xuất hiện dày trong lời giảng nhưng không nằm trong bảng từ vựng bài nào.

Tiếng Nga biến cách nên tra đúng dạng gốc là phần khó nhất. Cách làm: chuẩn hoá từ
(bỏ trọng âm, ё→е), tra khớp thẳng trước; không thấy thì cắt dần tối đa 5 chữ cuối
để dò thân từ, và chỉ nhận kết quả khi thân từ chiếm ≥ 50% độ dài từ gốc.
Hiện phủ khoảng **73%** số lượt từ tiếng Nga trong phần lý thuyết. Khi chỉ là dò
gần đúng, thẻ tra nghĩa nói rõ *"dạng gốc có lẽ là…"* chứ không khẳng định.

Muốn tăng độ phủ thì thêm từ vào `DICT_CORE`, không cần đụng gì khác.

Từ điển chỉ gắn vào phần **lý thuyết** của bài (`#theory`), cố ý không gắn vào phần
bài tập — để bài tập còn tác dụng luyện.

## Trang Luyện tập

`luyentap.html` **không có nội dung riêng** — nó gom lại toàn bộ 980 câu bài tập
đã nằm trong các bài học rồi cho trộn tự do, ngoài trình tự bài. Bốn kiểu:
trộn tất cả · chỉ luyện nghe · chỉ bài đã học · **câu em từng sai**
(lấy từ `Store.lessons[...].wrong`, tức đúng những câu người học đã làm sai thật).

Mỗi câu đều ghi rõ nó lấy từ bài nào và có link về bài đó. Kết quả luyện ở đây
**cố ý không ghi vào tiến độ và không cộng điểm** — để chỗ này là nơi làm sai thoải mái.

Thêm bài học mới là kho câu tự lớn theo, không phải làm gì thêm.

## Kì thi: xáo câu mỗi lượt

`thi.html` dựng đề của từng lượt bằng `QS = shuffle(exam.q)`, nên thi lại không gặp
lại đúng thứ tự cũ. **Chỉ xáo thứ tự câu, không xáo phương án A/B/C/D** — vì đáp án
trong `exams.js` ghi bằng chỉ số vị trí (`a: 2`), xáo phương án sẽ làm sai đáp án.

Muốn một cấp có nhiều đề khác nhau thật thì cứ thêm câu vào `q` của cấp đó rồi rút
ngẫu nhiên một phần — không cần tạo nhiều bộ đề riêng.

## Kho câu

`khocau.html` đứng trên hai nguồn:

1. `data/phrases.js` — câu chọn tay, chia sáu nhóm: **câu cửa miệng · nói khác viết ·
   lỗi người Việt hay mắc · thành ngữ tục ngữ · trêu nhau đùa vui · sống ở Nga**.
2. Tự gom **238 câu hội thoại** nằm sẵn trong các khối `dialog` của 114 bài học —
   viết bài mới có hội thoại là kho câu tự lớn theo.

Trường quan trọng nhất của mỗi câu là **`when` (dùng lúc nào)**, không phải `vn`.
Biết nghĩa mà không biết được nói lúc nào thì vẫn không dùng được — đó đúng là chỗ
người học vướng nhất. Khi thêm câu mới, viết `when` cho tử tế hơn là thêm thật nhiều câu.

Nhóm `error` có thêm trường `bad` — dạng nói **sai**. Trên giao diện, câu sai luôn
có nhãn đỏ **SAI** và bị gạch ngang, câu đúng có nhãn xanh **ĐÚNG**, để không ai
liếc qua rồi nhớ nhầm câu sai.

Nhóm `speak` (nói khác viết) nói rõ trong phần mô tả: học để **nghe hiểu**, còn khi
viết và khi thi ТРКИ thì vẫn dùng dạng chuẩn. Đừng bỏ câu nhắc đó đi.

## Ghi âm — và vì sao không chấm điểm phát âm

`assets/js/record.js` cho người học ghi âm giọng mình rồi bật cạnh giọng mẫu.
Có nút micro ở kho câu và ở mọi dòng hội thoại trong bài học.

Web **cố ý không chấm điểm phát âm**. Trình duyệt không đo được trọng âm hay ngữ điệu;
thứ chạy được trong trình duyệt chỉ đoán xem người ta nói *từ nào*, không đo được nói
*đúng hay sai*. Một con điểm phát âm sai còn hại hơn không có điểm — người học sẽ tin
là mình đọc chuẩn trong khi không phải. Cách làm ở đây (nghe mẫu → tự đọc → nghe lại
so sánh) đúng là cách các lớp dạy phát âm vẫn dùng, và tai người nghe ra khác biệt tốt
hơn mọi thuật toán chạy được offline.

Bản ghi chỉ nằm trong bộ nhớ của trang, đóng tab là mất — cố ý, để không có giọng nói
của ai bị lưu lại ở đâu cả. Cần HTTPS mới bật được micro (Vercel có sẵn HTTPS).

## Cài vào điện thoại và đưa lên Google Play

Web đã là một **PWA** đầy đủ: có `manifest.webmanifest`, có `sw.js` (service worker
xử lý sự kiện fetch), có biểu tượng 192/512 kèm bản `maskable`, và chạy trên HTTPS.
Mở web bằng Chrome trên điện thoại là có ngay mục **“Thêm vào màn hình chính”** —
lúc đó nó mở toàn màn hình, có biểu tượng riêng, không còn thanh địa chỉ.

**Học được cả khi mất mạng.** Service worker chạy kiểu *mạng trước, hỏng thì lấy bản
đã lưu* — nên đẩy bài mới lên là người học thấy ngay, nhưng lúc mất sóng vẫn mở được
bài đã vào. `Auth.boot()` cũng đã được sửa để mất mạng KHÔNG đá người học về trang
đăng nhập: phiên đăng nhập đọc từ trong máy, ba bước cần mạng (lấy hồ sơ, kéo và đẩy
tiến độ) mỗi bước tự chịu lỗi riêng, nối lại mạng thì đồng bộ chạy tiếp.

### Các bước đưa lên Google Play

1. Web phải chạy HTTPS ở tên miền cố định (Vercel đã có sẵn).
2. Dùng **Bubblewrap** (Google) hoặc **PWABuilder** (Microsoft, có giao diện) để đóng
   PWA thành gói Android — kiểu **TWA**, tức app chỉ là một lớp vỏ mỏng bọc chính web này.
3. Đặt file **Digital Asset Links** tại `/.well-known/assetlinks.json` để Google xác
   nhận app và web cùng một chủ. Bubblewrap sinh sẵn nội dung file này.
4. Tài khoản Google Play Developer: **25 USD, đóng một lần, trọn đời**.
5. Nếu là **tài khoản cá nhân mở sau 13/11/2023**: bắt buộc chạy **closed test với ít
   nhất 12 người thử, giữ liên tục 14 ngày**, xong mới được xin phát hành công khai.
   Nhớ tính thêm thời gian này vào kế hoạch.

Sửa web là app tự cập nhật theo — vì app chỉ là vỏ, nội dung vẫn lấy từ web.
Không phải build lại, không phải chờ Google duyệt lại.

## Giao diện trên điện thoại

Điện thoại (dưới 760px) dùng **thanh tab dưới đáy** như app thật: Trang chủ · Kho câu ·
Luyện tập · Thẻ từ · Thêm. Các mục còn lại (Bài học, Từ điển, Kì thi, Bảng điểm,
Tự học C1–C2) nằm trong bảng trượt lên khi bấm “Thêm”.

Trước đây tám mục nằm ngang ở đầu trang, xuống điện thoại tự xuống dòng thành ba hàng
và ăn mất 166px — khoảng một phần năm màn hình, trên mọi trang. Giờ đầu trang chỉ còn
49px. Máy tính vẫn giữ nguyên kiểu cũ.

## Điền vào chỗ trống (cloze)

Một kiểu luyện trong `luyentap.html`, mã ở `assets/js/cloze.js`. Cơ chế mượn từ
Clozemaster: khoét một từ trong câu **thật** rồi bắt người học tự điền lại. Trắc nghiệm
A/B/C/D chỉ cần *nhận ra* đáp án; điền thì phải *tự dựng lại* — nên nó ép nhớ đuôi cách,
đúng chỗ người Việt yếu nhất.

Không có nội dung riêng: câu lấy từ 238 câu hội thoại trong bài học + kho câu chọn tay.

Bốn quy tắc chọn câu và chọn từ để khoét, đều có lý do:

- **Câu dài 3–12 từ.** Dưới 3 thì không còn manh mối; trên 12 thì thành đoạn văn
  (vài dòng hội thoại B2 dài cả đoạn), khoét một từ trong đó chẳng học được gì.
- **Không khoét từ đầu câu** nếu còn lựa chọn khác — mất hết manh mối phía trước.
- **Tránh từ chức năng ngắn** (и, в, на, я, ты…) qua danh sách `DULL`; ưu tiên từ
  từ 3 chữ trở lên, vì đó mới là chỗ có đuôi cách để học.
- **Bỏ hẳn nhóm `error` và `speak`** của kho câu: ở hai nhóm đó cái đúng/cái sai chính
  là chuyện đang bàn, khoét chỗ trống dễ làm người học nhớ nhầm dạng sai.

Chấm bài bỏ qua **dấu trọng âm, hoa thường và ё/е** — người học không gõ được dấu nhấn
trên bàn phím thường, bắt gõ đúng dấu là đánh đố chứ không phải kiểm tra tiếng Nga.

## Phông chữ — đừng đổi bừa

Có hai cái bẫy đã mắc rồi, ghi lại để khỏi mắc lại:

1. **Georgia làm vỡ dấu tiếng Việt** trên Windows → tiêu đề dùng **Lora**.
2. **Georgia VÀ Times New Roman đều đẩy lệch dấu trọng âm tiếng Nga.** Chữ Nga có dấu
   nhấn được viết bằng ký tự kết hợp U+0301 (`а` + dấu), và hai phông này không có bảng
   đặt dấu (GPOS mark positioning) cho Cyrillic, nên dấu rơi ra thành ký tự riêng:
   `Дава ́й` thay vì `Дава́й`. Vì vậy `--font-ru` nạp **PT Serif** (ParaType làm riêng cho
   tiếng Nga) từ Google Fonts, và **không được để Georgia hay Times New Roman đứng đầu**
   chuỗi dự phòng.

Giấy chứng nhận vẽ bằng canvas vẫn dùng Times New Roman — chỗ đó không có chữ Nga
mang dấu trọng âm nên không sao.
