# 🧱 Header Component - Bookstore Project

Thư mục `Header/` chứa các component con của phần đầu trang (Header), chịu trách nhiệm hiển thị logo, thanh tìm kiếm, banner và các hành động chính như giỏ hàng, tài khoản, thông báo,...

---

## 📂 Cấu trúc thư mục

Header/ ├── TopBanner.jsx # Banner khuyến mãi phía trên cùng ├── Logo.jsx # Logo thương hiệu bookstore ├── Searchbar.jsx # Ô tìm kiếm sách ├── HeadActions.jsx # Các icon chức năng như thông báo, giỏ hàng, tài khoản

---

## 🔍 Giải thích chi tiết các component

### ✅ `TopBanner.jsx`

- Hiển thị banner quảng cáo nằm phía trên cùng trang web.
- Dùng để thu hút người dùng bằng các chương trình khuyến mãi, banner tĩnh hoặc slider.

---

### ✅ `Logo.jsx`

- Hiển thị logo chính của website bookstore (ảnh hoặc text).
- Được đặt bên trái của Header, giúp định vị thương hiệu.

---

### ✅ `Searchbar.jsx`

- Chứa input tìm kiếm và icon tìm kiếm 🔍.
- Cho phép người dùng nhập từ khóa để tìm sách, truyện, ấn phẩm,...

---

### ✅ `HeadActions.jsx`

- Hiển thị các icon điều hướng như:
  - 🔔 Thông báo
  - 🛒 Giỏ hàng
  - 👤 Tài khoản người dùng
  - 🇻🇳 Biểu tượng quốc kỳ hoặc đổi ngôn ngữ
- Được đặt bên phải trong thanh Header.

---

## 📌 Kết hợp trong `Header.jsx`

`Header.jsx` sẽ import các component trên và tổ chức layout như sau:

```jsx
<Header>
  <TopBanner />
  <div className="flex justify-between items-center">
    <Logo />
    <Searchbar />
    <HeadActions />
  </div>
</Header>
```
