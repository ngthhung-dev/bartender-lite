# HƯỚNG DẪN SỬ DỤNG BARTENDER LITE v1.0
### Thiết kế, in tem nhãn miễn phí

---

## MỤC LỤC

1. [Giới thiệu chung](#1-giới-thiệu-chung)
2. [Tổng quan giao diện](#2-tổng-quan-giao-diện)
3. [Đổi ngôn ngữ giao diện](#3-đổi-ngôn-ngữ-giao-diện)
4. [Thiết lập kích thước tem và khổ giấy](#4-thiết-lập-kích-thước-tem-và-khổ-giấy)
5. [Thêm và chỉnh sửa phần tử thiết kế](#5-thêm-và-chỉnh-sửa-phần-tử-thiết-kế)
6. [Nạp dữ liệu từ Excel và Mapping cột](#6-nạp-dữ-liệu-từ-excel-và-mapping-cột)
7. [Xem trước và Phạm vi in](#7-xem-trước-và-phạm-vi-in)
8. [Lưu và Mở mẫu thiết kế](#8-lưu-và-mở-mẫu-thiết-kế)
9. [In tem và Xuất PDF](#9-in-tem-và-xuất-pdf)
10. [Xử lý sự cố thường gặp](#10-xử-lý-sự-cố-thường-gặp)

---

## 1. GIỚI THIỆU CHUNG

**Bartender Lite** là ứng dụng miễn phí giúp bạn tự thiết kế và in tem nhãn (mã vạch, mã QR, thông tin sản phẩm...) ngay trên máy tính, hỗ trợ nạp dữ liệu hàng loạt từ file Excel và in trực tiếp ra máy in tem chuyên dụng (như dòng TSC) hoặc bất kỳ máy in nào khác.

**Các tính năng chính:**
- Thiết kế tem tự do với văn bản, trường dữ liệu Excel, mã vạch, mã QR, khung hình và hình ảnh.
- Tự động tính khổ giấy theo kích thước tem và số dòng/cột.
- In hàng loạt theo dữ liệu Excel (mail-merge).
- In trực tiếp hoặc xuất file PDF đúng khổ giấy.
- Giao diện đa ngôn ngữ: Tiếng Việt, English, 简体中文, 한국어, 日本語.

---

## 2. TỔNG QUAN GIAO DIỆN

Giao diện app gồm 4 khu vực chính:

| Khu vực | Vị trí | Chức năng |
|---|---|---|
| **Thanh công cụ trên** | Trên cùng | Logo, đổi ngôn ngữ, Mở/Lưu mẫu, nạp dữ liệu Excel, xem trước, phạm vi in, số bản in, chọn máy in, In tem, Xuất PDF, Xóa tất cả |
| **Panel trái** | Bên trái | Thêm phần tử thiết kế, danh sách cột dữ liệu Excel, cài đặt in ấn (kích thước, lưới, khổ giấy) |
| **Khung thiết kế (Canvas)** | Ở giữa | Nơi bạn kéo thả, sắp xếp các phần tử trên tem |
| **Panel phải** | Bên phải | Thuộc tính chi tiết của phần tử đang chọn (kích thước, vị trí, định dạng...) |

Hai nút hình viên thuốc màu xanh ở 2 cạnh khung thiết kế dùng để **ẩn/hiện** panel trái và phải, giúp có thêm không gian làm việc khi cần.

Ở góc dưới bên phải khung thiết kế có thanh **thu phóng** (zoom) để phóng to/thu nhỏ khung thiết kế và nút "Vừa khung" để tự động canh vừa màn hình.

---

## 3. ĐỔI NGÔN NGỮ GIAO DIỆN

Ngay cạnh logo và tên ứng dụng ở góc trên bên trái có ô chọn ngôn ngữ. Bấm vào và chọn:

- 🇻🇳 Tiếng Việt (mặc định)
- en English
- 🇨🇳 简体中文
- 🇰🇷 한국어
- 🇯🇵 日本語

Toàn bộ giao diện (nút, nhãn, thông báo) sẽ đổi ngay lập tức. Lựa chọn ngôn ngữ được **ghi nhớ tự động** cho lần mở app sau, không cần chọn lại.

---

## 4. THIẾT LẬP KÍCH THƯỚC TEM VÀ KHỔ GIẤY

Mục **"Cài đặt in ấn"** ở panel trái, phía dưới cùng:

### 4.1. Đơn vị đo
Chọn đơn vị làm việc: **Milimet (mm)**, **Inches (in)** hoặc **Pixels (px)**.

### 4.2. Loại mẫu sẵn
Chọn nhanh các khổ tem phổ biến có sẵn (35x22mm, 70x100mm, 80x40mm, 100x50mm, 100x75mm) hoặc chọn **"Tùy chỉnh"** để tự nhập kích thước riêng.

### 4.3. Rộng x Cao (1 tem)
Nhập kích thước của **1 con tem** — đây là kích thước thực tế của khung thiết kế ở giữa màn hình.

### 4.4. Lưới (Dòng x Cột)
- **Dòng**: số tem xếp theo chiều dọc trên 1 trang in.
- **Cột**: số tem xếp theo chiều ngang trên 1 trang in (tức số tem trên 1 hàng của cuộn giấy bạn đang dùng).

> ⚠️ **Quan trọng:** Nếu cuộn giấy của bạn có 3 tem/hàng, hãy nhập **Cột = 3**. Nếu nhập sai số Cột, tem sẽ bị in lệch vị trí trên giấy.

### 4.5. Tổng khổ giấy (Rộng x Cao)
Ô này **tự động tính** = (Rộng 1 tem × Số Cột) × (Cao 1 tem × Số Dòng), không cần và không thể nhập tay. Đây chính là khổ giấy thực tế được dùng khi in/xuất PDF.

**Ví dụ:** Tem 35x22mm, cuộn giấy có 3 tem/hàng → nhập Cột = 3, Dòng = 1 → Tổng khổ giấy tự động ra 105 x 22mm.

---

## 5. THÊM VÀ CHỈNH SỬA PHẦN TỬ THIẾT KẾ

Ở mục **"Thêm phần tử"** (panel trái, trên cùng), bấm vào loại phần tử muốn thêm:

| Phần tử | Mô tả |
|---|---|
| 🔤 **Văn bản** | Chữ tùy ý, nội dung cố định do bạn tự gõ |
| 🗄️ **Trường Excel** | Ô chữ lấy nội dung tự động từ 1 cột trong file Excel đã nạp |
| \|\|\|\| **Mã vạch** | Mã vạch (Barcode) theo nhiều chuẩn khác nhau |
| ▦ **Mã QR** | Mã QR Code |
| ▢ **Khung hình** | Hình chữ nhật/khung viền trang trí |
| 🖼️ **Chèn ảnh** | Chèn logo hoặc hình ảnh PNG, JPG, SVG |

### 5.1. Thao tác với phần tử trên khung thiết kế
- **Di chuyển:** Kéo thả bằng chuột, hoặc dùng phím mũi tên (↑↓←→) khi đã chọn phần tử. Giữ **Shift** + mũi tên để di chuyển nhanh hơn (bước 10px).
- **Đổi kích thước:** Kéo các ô vuông nhỏ màu xanh ở 4 góc/4 cạnh của phần tử đang chọn.
- **Xoay:** Kéo chấm tròn xanh phía trên phần tử, hoặc dùng ô "Xoay (°)" / "Góc tùy ý" trong panel phải.
- **Nhân bản:** Chọn phần tử rồi bấm **Ctrl+C** rồi **Ctrl+V**, hoặc bấm nút "Nhân bản" trong panel phải.
- **Xóa 1 phần tử:** Chọn phần tử rồi bấm nút "Xóa phần tử này" trong panel phải, hoặc phím **Delete**.
- **Xóa toàn bộ thiết kế:** Bấm nút đỏ **"Xóa tất cả"** trên thanh công cụ.

> 💡 Phần tử luôn bị giới hạn không thể kéo/di chuyển ra ngoài vùng thiết kế (khung tem).

### 5.2. Thuộc tính chung (panel phải)
Khi chọn 1 phần tử, panel phải hiện đầy đủ:
- **Căn chỉnh với trang:** căn trái/giữa/phải, căn trên/giữa/dưới so với khung tem.
- **Kích thước & Vị trí (px):** Rộng, Cao, Trục X, Trục Y, Góc xoay.

### 5.3. Định dạng riêng theo từng loại phần tử

**Văn bản / Trường Excel:**
- *Mapping Cột Dữ Liệu Excel* (chỉ có ở Trường Excel): chọn cột Excel tương ứng, thêm Tiền tố/Hậu tố (ví dụ: "Mã SP: " + giá trị + " VNĐ").
- Nội dung cố định, Cỡ chữ, Độ đậm (Thường/Đậm), Căn lề nội dung (trái/giữa/phải).

**Mã vạch:**
- Loại mã vạch (CODE128, EAN13...), bật/tắt hiển thị chữ số bên dưới, khoảng cách chữ, cỡ chữ, độ đậm.
- Có thể Mapping với cột Excel để mỗi tem in mã vạch khác nhau theo dữ liệu.

**Mã QR:**
- Tương tự mã vạch: bật/tắt hiển thị chữ bên dưới, khoảng cách chữ, có thể Mapping cột Excel.

**Chèn ảnh:**
- Ảnh tự động giữ đúng tỷ lệ khung hình gốc khi thay đổi kích thước khung chứa, không bị méo/kéo dãn.

---

## 6. NẠP DỮ LIỆU TỪ EXCEL VÀ MAPPING CỘT

### 6.1. Nạp file dữ liệu
Bấm nút xanh lá **"Nạp dữ liệu (.xls, .xlsx, .csv)"** trên thanh công cụ, chọn file Excel/CSV chứa danh sách dữ liệu (mỗi dòng là 1 tem, mỗi cột là 1 loại thông tin, ví dụ: Họ và tên, Chức vụ, Phòng ban...).

Sau khi nạp thành công, panel trái mục **"Cột dữ liệu Excel"** sẽ hiện danh sách tên các cột, kèm số dòng dữ liệu đã đọc được.

### 6.2. Mapping (gán) cột dữ liệu vào phần tử
Có 2 cách:
1. **Cách nhanh:** Không chọn phần tử nào trên canvas, bấm trực tiếp vào tên cột trong panel trái → app tự tạo 1 phần tử "Trường Excel" mới gán đúng cột đó.
2. **Cách chính xác:** Chọn phần tử (Văn bản/Trường Excel/Mã vạch/Mã QR) đã có trên canvas → panel phải sẽ hiện khung **"Mapping Cột Dữ Liệu Excel"** (nền vàng) → bấm tên cột trong panel trái để gán vào phần tử đang chọn, hoặc chọn trực tiếp trong dropdown "Chọn cột Excel tương ứng".

### 6.3. Xóa dữ liệu Excel
Bấm icon thùng rác nhỏ cạnh nút nạp dữ liệu để xóa toàn bộ dữ liệu Excel đã nạp (không ảnh hưởng đến thiết kế tem).

> 💡 **Lưu ý:** Nếu không có phần tử nào Mapping với cột Excel, dù đã nạp dữ liệu, app vẫn chỉ in đúng theo số "Số bản in" (không nhân với số dòng dữ liệu), vì nội dung mỗi tem sẽ giống hệt nhau.

---

## 7. XEM TRƯỚC VÀ PHẠM VI IN

Hai mục này chỉ hiện ra khi bạn **đã nạp dữ liệu Excel VÀ có ít nhất 1 phần tử Mapping** với cột dữ liệu đó.

- **Xem trước:** Dùng nút mũi tên trái/phải để duyệt qua từng dòng dữ liệu, xem trước nội dung tem sẽ in ra tương ứng với từng dòng.
- **Phạm vi in:**
  - *Tất cả:* in toàn bộ các dòng dữ liệu.
  - *Trang đầu (Dòng 1):* chỉ in dòng dữ liệu đầu tiên.
  - *Tùy chọn:* tự nhập khoảng "Từ dòng... Đến dòng..." muốn in.

---

## 8. LƯU VÀ MỞ MẪU THIẾT KẾ

- **Lưu mẫu:** Bấm nút tím **"Lưu mẫu"** để lưu toàn bộ thiết kế hiện tại (vị trí, kích thước, định dạng của tất cả phần tử, cài đặt khổ giấy...) thành 1 file `.json` trên máy tính. Dùng để lưu lại mẫu tem đã thiết kế, chia sẻ cho người khác hoặc dùng lại sau này.
- **Mở mẫu:** Bấm nút đen **"Mở mẫu"**, chọn file `.json` đã lưu trước đó để tải lại y nguyên thiết kế.

> Lưu ý: file mẫu **không lưu kèm dữ liệu Excel** đã nạp — sau khi mở mẫu, bạn cần nạp lại file Excel nếu thiết kế có dùng Mapping dữ liệu.

---

## 9. IN TEM VÀ XUẤT PDF

### 9.1. In tem trực tiếp
1. Kiểm tra kỹ mục **"Cài đặt in ấn"** (kích thước tem, Lưới Dòng x Cột) đã khớp đúng với cuộn giấy thực tế trong máy in.
2. Nhập **"Số bản in"** (số lượng tem muốn in nếu không dùng dữ liệu Excel, hoặc số bản in cho mỗi dòng dữ liệu nếu có Mapping).
3. Chọn đúng **máy in** ở ô dropdown cạnh nút In tem (app tự liệt kê các máy in đã cài trên máy tính).
4. Bấm nút xanh dương **"In tem"**.

### 9.2. Xuất file PDF
Nếu in trực tiếp gặp lỗi sai khổ giấy/lệch vị trí (thường do driver máy in), hãy dùng nút xanh lá **"Xuất PDF"** — app sẽ tạo ra file PDF có khổ giấy **chính xác tuyệt đối** theo thiết kế, rồi bạn mở file đó bằng Adobe Reader/Foxit Reader để in, nhớ chọn chế độ in **"Actual size / Kích thước thực 100%"**, không chọn "Fit to page".

---

## 10. XỬ LÝ SỰ CỐ THƯỜNG GẶP

| Sự cố | Nguyên nhân & Cách khắc phục |
|---|---|
| In ra bị lệch vị trí, không đúng số tem/hàng | Kiểm tra lại số **Cột** trong "Lưới (Dòng x Cột)" có đúng bằng số tem thực tế trên 1 hàng giấy không |
| In ra chỉ có 1 tem dù đặt Số bản in > 1 | Kiểm tra máy in đã chọn đúng chưa; thử dùng **Xuất PDF** rồi in thủ công qua Adobe/Foxit Reader (Actual size 100%) |
| Ứng dụng in vào máy in mặc định thay vì máy đã chọn | Cập nhật lên bản mới nhất — app đã hỗ trợ tự động chuyển máy in khi bạn chọn trong dropdown |
| Chữ tiếng Việt có dấu bị mất nét khi in/xuất PDF | Đã được khắc phục ở các bản cập nhật gần đây — hãy đảm bảo dùng bản mới nhất |
| Nạp Excel nhưng không thấy "Xem trước"/"Phạm vi in" | Cần có ít nhất 1 phần tử **Mapping** với cột dữ liệu Excel thì 2 mục này mới hiện |
| Mã QR/Mã vạch bị mờ khi in | Tăng kích thước (Rộng/Cao) của phần tử mã QR/mã vạch trong panel phải |

---

*Cảm ơn bạn đã sử dụng Bartender Lite!*
