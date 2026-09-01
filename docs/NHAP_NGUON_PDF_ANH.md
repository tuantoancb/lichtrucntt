# Nhập lịch nguồn PDF và ảnh — V6.11

## Luồng Admin

1. Chọn tháng nguồn.
2. Chọn một PDF hoặc nhiều ảnh cùng tháng.
3. App render PDF thành ảnh và OCR tiếng Việt.
4. Các trang/ảnh được ghép theo ngày.
5. App đối chiếu tên với danh sách giáo viên hiện có.
6. Ô không chắc chắn được tô vàng.
7. Admin sửa trực tiếp trong bảng xem trước.
8. Bấm **Xác nhận lưu nguồn tháng**.

## Trường được nhận diện

- Ngày
- Thứ
- Trực lãnh đạo
- Trực quản sinh
- Quản lí giờ học
- Người trực ngoài giờ
- Thời gian trực ngoài giờ

## Ảnh

Có thể chọn nhiều JPG/JPEG/PNG. Nếu ảnh có chiều cao lớn hơn chiều rộng, app tự xoay 90 độ để phù hợp mẫu lịch ngang.

## PDF

Hỗ trợ PDF scan nhiều trang. Mỗi trang được render ở độ phân giải cao trước khi OCR.

## Kiểm soát sai số

OCR không được ghi thẳng vào lịch sử. Tên không khớp chắc chắn với danh sách hiện có hoặc ca thiếu thời gian sẽ được đánh dấu vàng để Admin duyệt.


## Thay đổi ở V6.11
OCR toàn trang thuần túy dễ sai với lịch scan bị nghiêng và chữ nhỏ. V6.11 thêm bước tăng nét/độ tương phản và quan trọng hơn là **đối chiếu tên theo vai trò**. Ví dụ cột Trực quản sinh chỉ được so với danh sách Trực quản sinh, giúp giảm việc OCR sai một vài ký tự rồi ghép nhầm sang giáo viên ở nhóm khác.
