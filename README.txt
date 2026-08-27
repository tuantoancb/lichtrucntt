LỊCH TRỰC NỘI TRÚ V6.5

- Giao diện trạng thái dữ liệu đã thu gọn: chỉ hiện “Google Sheet · đã cập nhật” hoặc “Dữ liệu dự phòng”.
- Nguyên nhân V6.2 báo lỗi: Google Sheet nguồn đang ở chế độ riêng tư nên trình duyệt không thể đọc gviz/CSV trực tiếp.
- V6.5 hỗ trợ 2 cách đọc dữ liệu:
  1) Khi chạy trên Vercel: ưu tiên /api/sheet bằng Service Account, Sheet có thể GIỮ RIÊNG TƯ.
  2) Nếu không có API: thử đọc trực tiếp Google Sheet khi file được chia sẻ công khai dạng Người xem.
- Để dùng cách 1 trên Vercel, tạo 2 Environment Variables: GOOGLE_SERVICE_ACCOUNT_EMAIL và GOOGLE_PRIVATE_KEY; chia sẻ Google Sheet cho email Service Account với quyền Người xem.
- Nếu chưa cấu hình, app vẫn chạy bằng dữ liệu dự phòng đã nhúng sẵn.

Các chức năng V6.2 vẫn giữ nguyên: lịch lãnh đạo/quản sinh, ngoài giờ cân bằng tải, thống kê, tạo tháng, xuất Word DOCX A4 ngang.

V6.4: Chuyển trạng thái nguồn dữ liệu + Mở Sheet + Cập nhật vào nút ⚙️ Cài đặt.
V6.5: Làm lại bộ xuất Word .docx theo OOXML ổn định hơn; A4 nằm ngang, 2 trang tự nhiên, tiêu đề bảng lặp trang 2, hàng Chủ nhật không bị xé, chữ Times New Roman rõ và phần ký tên ổn định.
