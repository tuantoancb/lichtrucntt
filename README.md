# Lịch trực nội trú V6.8 — bản project đầy đủ

Đây là bản tách project từ V6.7 để dễ bảo trì và đưa lên Vercel. `index.html` không còn chứa toàn bộ CSS/JavaScript.

## Cấu trúc

- `index.html` — khung giao diện.
- `css/style.css` — toàn bộ giao diện responsive.
- `js/config.js` — cấu hình công khai như phiên bản, Sheet ID và khóa giao diện Admin tạm.
- `js/app.js` — logic tra cứu, thống kê, tạo lịch, nhập nguồn tháng và xuất Word.
- `api/sheet.js` — API đọc Google Sheet riêng tư trên Vercel; hiện chưa bắt buộc cấu hình.
- `api/health.js` — kiểm tra API hoạt động.
- `scripts/check.js` — kiểm tra file và cú pháp trước khi deploy.
- `vercel.json` — cấu hình Vercel.

## Chạy thử

Có thể mở `index.html` trực tiếp để kiểm tra giao diện. Khi mở trực tiếp từ file, app sẽ dùng dữ liệu dự phòng nếu không đọc được Google Sheet.

Để chạy qua HTTP cục bộ, tại thư mục project có thể dùng một web server tĩnh bất kỳ, ví dụ Python:

```bash
python -m http.server 3000
```

Sau đó mở `http://localhost:3000`.

## Kiểm tra trước khi deploy

Nếu máy có Node.js:

```bash
npm run check
```

## Đưa lên Vercel

Có thể kéo cả thư mục này hoặc giải nén ZIP vào GitHub rồi Import Project trên Vercel. Không cần build command cho giao diện tĩnh.

### Kết nối Google Sheet riêng tư — để làm ở giai đoạn chốt app

API đã được chuẩn bị sẵn nhưng nếu chưa đặt biến môi trường thì app vẫn chạy bằng dữ liệu dự phòng. Khi chốt bản chính thức, chỉ cần đặt:

- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`

và chia sẻ Google Sheet cho email Service Account ở quyền Người xem. Không đưa private key vào `js/config.js`, GitHub hoặc file ZIP công khai.

## Phân quyền Admin hiện tại

V6.8 vẫn giữ cơ chế khóa giao diện Admin tạm của V6.7 để tiếp tục kiểm thử. Khi chốt bản dùng thật cần chuyển xác thực Admin sang phía máy chủ.
