/* ============================================================
   exam.js — chấm thi và vẽ giấy chứng nhận
   ============================================================ */

/* mã chứng nhận: tạo từ tên + cấp + ngày, luôn ra cùng một mã */
function certCode(name, level, date) {
  const s = (name + '|' + level + '|' + date).toLowerCase();
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) >>> 0; }
  return level.toUpperCase() + '-' + date.replace(/-/g, '').slice(2) + '-' + h.toString(36).toUpperCase().padStart(6, '0').slice(0, 6);
}

/* vẽ chứng nhận lên canvas */
function drawCertificate(canvas, opt) {
  const W = 1400, H = 990;
  canvas.width = W; canvas.height = H;
  const c = canvas.getContext('2d');

  const navy = '#1f3a6e', red = '#c0392b', ink = '#24211c', mute = '#7a7263';

  c.fillStyle = '#fdfaf3'; c.fillRect(0, 0, W, H);

  /* hoa văn nền rất nhạt */
  c.save();
  c.globalAlpha = 0.05; c.fillStyle = navy;
  c.font = 'bold 300px "Times New Roman", Georgia, serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText('Р', W / 2, H / 2 + 20);
  c.restore();

  /* viền đôi */
  c.strokeStyle = navy; c.lineWidth = 8; c.strokeRect(38, 38, W - 76, H - 76);
  c.strokeStyle = red; c.lineWidth = 2; c.strokeRect(58, 58, W - 116, H - 116);

  /* góc trang trí */
  c.strokeStyle = red; c.lineWidth = 3;
  [[80, 80, 1, 1], [W - 80, 80, -1, 1], [80, H - 80, 1, -1], [W - 80, H - 80, -1, -1]].forEach(([x, y, dx, dy]) => {
    c.beginPath(); c.moveTo(x + 46 * dx, y); c.lineTo(x, y); c.lineTo(x, y + 46 * dy); c.stroke();
  });

  c.textAlign = 'center';

  /* đầu trang */
  c.fillStyle = mute; c.font = '600 20px "Times New Roman", Georgia, serif';
  c.fillText('СЕРТИФИКАТ  ·  GIẤY CHỨNG NHẬN', W / 2, 148);

  c.strokeStyle = red; c.lineWidth = 2;
  c.beginPath(); c.moveTo(W / 2 - 90, 172); c.lineTo(W / 2 + 90, 172); c.stroke();

  c.fillStyle = navy; c.font = 'bold 62px "Times New Roman", Georgia, serif';
  c.fillText('HOÀN THÀNH CẤP ĐỘ ' + opt.code, W / 2, 250);

  c.fillStyle = ink; c.font = '25px "Times New Roman", Georgia, serif';
  c.fillText('Chứng nhận rằng', W / 2, 330);

  /* tên học viên */
  c.fillStyle = red; c.font = 'bold 78px "Times New Roman", Georgia, serif';
  const name = (opt.name || 'Học viên').slice(0, 34);
  c.fillText(name, W / 2, 425);
  c.strokeStyle = '#d8cdb6'; c.lineWidth = 2;
  const w = Math.min(Math.max(c.measureText(name).width + 120, 420), W - 240);
  c.beginPath(); c.moveTo((W - w) / 2, 455); c.lineTo((W + w) / 2, 455); c.stroke();

  /* nội dung */
  c.fillStyle = ink; c.font = '25px "Times New Roman", Georgia, serif';
  c.fillText('đã hoàn thành chương trình', W / 2, 512);
  c.font = 'bold 34px "Times New Roman", Georgia, serif'; c.fillStyle = navy;
  c.fillText(opt.levelName + '  ·  ' + opt.levelRu, W / 2, 560);
  c.fillStyle = ink; c.font = '25px "Times New Roman", Georgia, serif';
  c.fillText('của khoá học ' + opt.site, W / 2, 606);

  /* điểm số */
  c.fillStyle = '#1e7d4f'; c.font = 'bold 40px "Times New Roman", Georgia, serif';
  c.fillText('Kết quả: ' + opt.score + '%', W / 2, 676);

  /* chân trang: ngày, mã, chữ ký */
  c.textAlign = 'left'; c.fillStyle = mute; c.font = '19px "Times New Roman", Georgia, serif';
  c.fillText('Ngày cấp:  ' + opt.date, 130, 806);
  c.fillText('Mã số:  ' + opt.cert, 130, 838);

  c.textAlign = 'right';
  c.fillStyle = navy; c.font = 'italic 30px "Times New Roman", Georgia, serif';
  c.fillText(opt.site, W - 130, 800);
  c.strokeStyle = '#d8cdb6'; c.lineWidth = 1.5;
  c.beginPath(); c.moveTo(W - 430, 818); c.lineTo(W - 130, 818); c.stroke();
  c.fillStyle = mute; c.font = '17px "Times New Roman", Georgia, serif';
  c.fillText('Người soạn khoá học', W - 130, 844);

  /* ghi chú trung thực */
  c.textAlign = 'center'; c.fillStyle = mute; c.font = '15px "Times New Roman", Georgia, serif';
  c.fillText('Đây là giấy chứng nhận nội bộ của website học tiếng Nga miễn phí này,', W / 2, 900);
  c.fillText('ghi nhận nỗ lực của người học. Không phải chứng chỉ ТРКИ do cơ quan nhà nước Nga cấp.', W / 2, 924);
}

/* tải chứng nhận về máy */
function downloadCertificate(canvas, filename) {
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = filename || 'chung-nhan.png';
  a.click();
}
