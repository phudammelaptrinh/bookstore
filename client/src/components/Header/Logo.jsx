//lam thu hai
//logo thuong dat ben trai. Lam logo giup can layout de hon Search & Action ke ben
//sai thu vien nao nho install ve nhe

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/fahaha.png";

const Logo = () => {
  return (
    <div className="flex items-center px-4 py-2">
      <Link to="/">
        <img
          src={logo}
          alt="Fahasa Logo"
          className="w-24 h-auto object-contain"
        />
      </Link>
    </div>
  );
};

export default Logo;
