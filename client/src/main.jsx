import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//them thuvien react-router-dom de lam routing
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
//phai boc </App > trong BrowserRouter
// neu đan su dung component Link tu react-router-dom nhung chua co router boc quanh
