/* ============================================================
   sw.js — service worker

   Hai việc:
     1. Cho web cài được vào màn hình điện thoại và đóng gói lên
        Google Play (Play bắt buộc phải có service worker có xử lý
        sự kiện fetch).
     2. Học được cả khi mất mạng — quan trọng thật với học sinh
        sinh viên: trên xe buýt, chỗ sóng yếu, hết dung lượng 4G.

   Chiến lược: "mạng trước, có lỗi thì lấy bản đã lưu".
   Không dùng "bản lưu trước" vì như thế người học sẽ thấy nội dung cũ
   sau mỗi lần đẩy bài mới lên.
   ============================================================ */

const V = 'htn-v1';

/* nạp sẵn phần lõi để lần mất mạng đầu tiên vẫn học được */
const CORE = [
  './', './index.html', './hoc.html', './khocau.html', './luyentap.html',
  './flashcard.html', './tudien.html', './thi.html', './bangdiem.html',
  './kiemtra.html', './tuhoc.html', './dangnhap.html',
  './manifest.webmanifest',
  './assets/css/style.css',
  './assets/js/core.js', './assets/js/lesson.js', './assets/js/srs.js',
  './assets/js/exam.js', './assets/js/dict.js', './assets/js/cloze.js', './assets/js/record.js',
  './assets/js/lecture.js', './assets/js/auth.js',
  './data/course.js', './data/exams.js', './data/placement.js', './data/phrases.js',
  './data/lessons/a0.js', './data/lessons/a1.js', './data/lessons/a2.js',
  './data/lessons/b1.js', './data/lessons/b2.js',
  './assets/icons/icon-192.png', './assets/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(V)
      /* addAll hỏng cả mẻ nếu một file lỗi — nên thêm từng file một */
      .then(c => Promise.all(CORE.map(u => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;

  const url = new URL(r.url);
  /* không đụng vào Supabase và các thứ ngoài miền: tiến độ phải luôn đi thẳng ra mạng */
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(r)
      .then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(V).then(c => c.put(r, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(r).then(hit => hit || caches.match('./index.html')))
  );
});
