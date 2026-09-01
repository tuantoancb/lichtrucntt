# Lịch trực nội trú V6.9 — project đầy đủ

V6.9 bổ sung **nhập lịch nguồn theo tháng từ PDF scan hoặc nhiều ảnh chụp**. Chức năng này chỉ mở cho Admin.

## Cấu trúc

- `index.html` — giao diện.
- `css/style.css` — giao diện responsive.
- `js/config.js` — cấu hình công khai.
- `js/app.js` — tra lịch, thống kê, cân bằng Trực ngoài giờ, nhập nguồn PDF/ảnh, xuất Word.
- `api/sheet.js` — API Google Sheet riêng tư để dùng khi chốt bản chính thức.
- `api/health.js` — kiểm tra API.
- `docs/NHAP_NGUON_PDF_ANH.md` — mô tả quy trình nhập nguồn scan/ảnh.
- `scripts/check.js` — kiểm tra project.
- `vercel.json` — cấu hình Vercel.

## Nhập lịch nguồn PDF / ảnh

Admin vào **Cài đặt → Nhập nguồn tháng**, chọn tháng rồi tải:

- PDF scan nhiều trang;
- JPG/JPEG/PNG;
- nhiều ảnh của cùng một tháng;
- hoặc Excel/CSV/Word có bảng như trước.

PDF/ảnh được OCR ngay trong trình duyệt bằng Tesseract.js; PDF được render bằng PDF.js. Ảnh dọc được tự xoay sang ngang trước khi nhận diện. Kết quả **không lưu thẳng**: app hiện bảng xem trước, tô vàng ô chưa chắc chắn và cho Admin sửa trực tiếp.

> OCR chạy lần đầu cần Internet để tải thư viện và dữ liệu ngôn ngữ tiếng Việt.

## Quy tắc thống kê

Chỉ tính **Trực ngoài giờ**. Chủ nhật thực tế được tính là ngày Chủ nhật; riêng tháng 9, **01/09 và 02/09 cũng được tính như Chủ nhật** cho mục đích cân bằng.

## Chạy thử

```bash
python -m http.server 3000
```

Mở `http://localhost:3000`.

## Kiểm tra

```bash
npm run check
```

## Google Sheet riêng tư

Phần API đã để sẵn nhưng chưa bắt buộc cấu hình. Khi app hoàn chỉnh mới đặt `GOOGLE_SERVICE_ACCOUNT_EMAIL` và `GOOGLE_PRIVATE_KEY`, đúng theo hướng đã chốt.
