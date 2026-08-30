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
flashcard.html      thẻ từ vựng lặp lại ngắt quãng
thi.html            kì thi cuối cấp + giấy chứng nhận  (thi.html?level=a0)
dangnhap.html       đăng ký / đăng nhập (email+mật khẩu, Google)
giaovien.html       trang giáo viên: xem tiến độ cả lớp

assets/css/style.css   toàn bộ giao diện — đổi màu ở khối :root
assets/js/core.js      cấu hình web, lưu tiến độ, phát âm
assets/js/lesson.js    dựng bài học, chấm bài tập
assets/js/srs.js       thuật toán lặp lại ngắt quãng
assets/js/exam.js      chấm thi, vẽ giấy chứng nhận
assets/js/auth.js      tài khoản + đồng bộ tiến độ lên Supabase
assets/js/supabase-config.js   KHOÁ SUPABASE — em dán vào đây

supabase/schema.sql    bảng và phân quyền, chạy một lần trong SQL Editor

data/course.js         lộ trình A0→C2 và danh sách bài từng cấp
data/lessons/a0.js     nội dung cấp A0 (10 bài)
data/exams.js          đề thi cuối cấp
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

## Thêm đề thi cho một cấp

Trong `data/exams.js`, thêm khoá mới theo mẫu của `a0`. Các loại câu hỏi giống hệt bài tập (`choice`, `type`, `listen`).


## Nối Supabase (tài khoản + lưu tiến độ thật)

Web bắt buộc đăng nhập mới học được. Tiến độ lưu trên Supabase nên đổi máy, đổi điện thoại vẫn còn nguyên.

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
