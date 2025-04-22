// lam dau tien
//boi vi no la phan dung dau trang,lai don gian vi thuong chi chua 1 banner quang cao
import React from "react";
import bannerImg from "../../assets/images/banner/top-banner.webp";

function TopBanner() {
  return (
    <div className="w-full h-32 md:h-48 lg:h-64 xl:h-80 2xl:h-96">
      <img
        src={bannerImg}
        alt="Khuyến mãi"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

export default TopBanner;
