import React from "react";
import "./shopStories.css";
import { useNavigate } from "react-router-dom";

const ShopStories = () => {
const navigate = useNavigate()

  return (
    <div className="shopstories-container">
      <h1 className="shopstories-header">Shops, stories & more</h1>
      <div className="shopstories-cardcontainer">
        <div className="shop-stories-card" onClick={()=>navigate("/men")} >
          <img
            src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_m_img0.jpg"
            alt=""
          />
          <p>New Arrivals</p>
        </div>
        <div className="shop-stories-card">
          <img
            src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_m_img1.jpg"
            alt=""
          />
          <p>Fair Isle Forever</p>
        </div>
        <div className="shop-stories-card">
          <img
            src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_m_img2.jpg"
            alt=""
          />
          <p>Be the Best-dressed Guest</p>
        </div>
        <div className="shop-stories-card">
          <img
            src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_m_img3.jpg"
            alt=""
          />
          <p>New Parkas, Topcoats & More</p>
        </div>
      </div>
    </div>
  );
};

export default ShopStories;
