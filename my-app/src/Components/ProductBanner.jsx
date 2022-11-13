import React from "react";
import "./productbanner.css";

const ProductBanner = ({ img1, img2, imgname, shop }) => {
  return (
    <div className="productbanner-container">
      <div className="productbanner-imgcontainer">
        <img
          // src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_img0.jpg"
          src={img1}
          alt={imgname}
          className="image1"
        />
        <img
          // src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_img0m.jpg"
          alt={imgname}
          src={img2}
          className="image2"
        />
        <div className="productbanner-content">
          <h1>The Holiday Collection is Here!</h1>
          <p>No one does festive like we do</p>
          <p>{shop}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
