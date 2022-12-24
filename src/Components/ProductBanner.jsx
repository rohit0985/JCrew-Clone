import React from "react";
import "./productbanner.css";
import { Link } from "react-router-dom";

const ProductBanner = ({ img1, img2, imgname }) => {
  return (
    <div className="productbanner-container">
      <div className="productbanner-imgcontainer">
        <img src={img1} alt={imgname} className="image1" />
        <img alt={imgname} src={img2} className="image2" />
        <div className="productbanner-content">
          <h1>The Holiday Collection is Here!</h1>
          <p>No one does festive like we do</p>

          <Link to="newarrivals">
            <p>Shop new arrivals</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
