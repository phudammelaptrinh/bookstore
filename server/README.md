# 🚀 Express Server – Bookstore Backend

This is the **backend** folder of the Bookstore project. It uses **Express.js** for building REST APIs and connects to a **MySQL** database using `mysql2`.

---

## 📁 Folder Structure

server/
├── config/ # Database connection config (db.js)
├── controllers/ # Logic xử lý cho route (bookController.js,...)
├── routes/ # Các route (bookRoutes.js,...)
├── models/ # Query SQL hoặc ORM
├── middleware/ # Middleware như kiểm tra token,...
├── utils/ # Helper, xử lý dữ liệu,...
├── app.js # Setup Express app
├── index.js # Điểm khởi động server
├── .env # Biến môi trường (DB, PORT,...)
└── README.md # Tài liệu backend

---

## ⚙️ Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```
