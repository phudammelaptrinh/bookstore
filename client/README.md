# 📦 React Client Structure – Bookstore Project

This folder contains the **frontend** of the Bookstore app, built with **React** using **Vite**.

---

## 📁 Folder Structure

client/
├── public/ # Static files (index.html, favicon,...)
├── src/
│ ├── assets/ # Hình ảnh, logo, icon,...
│ ├── components/ # Component tái sử dụng (Header, Button,...)
│ ├── pages/ # Các trang: Home, Detail, Login,...
│ ├── services/ # Gọi API (axios)
│ ├── hooks/ # Custom hooks (nếu cần)
│ ├── context/ # React Context cho global state
│ ├── App.jsx # Component gốc
│ └── main.jsx # Điểm khởi động React
├── .env # Biến môi trường (REACT*APP*)
├── vite.config.js # Config Vite
├── package.json
└── README.md

---

## 🚀 Getting Started

```bash
cd client
npm install
npm run dev

```
