import React from "react";
import ProductBanner from "../../Components/ProductBanner";
import Recomended from "../../Components/Recomended";
import ShopStories from "../../Components/ShopStories";
import MoreYouNeed from "../../Components/MoreYouNeed";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/AppReducer/action";
import { useEffect } from "react";
import styles from "../../Components/recomended.module.css";

const MenLanding = () => {
  const headStyle = {
    fontSize: " 36px",
    textAlign: "center",
    marginBottom: "20px",
    fontFamily: "Times New Roman, Times, serif serif",
    fontWeight: "300",
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.products);

  const recomendedData =
    data &&
    data.filter(
      (el) =>
        (el.belongsTo === "men" && el.category === "Shoes") ||
        el.category === "Sweater"
    );

  // console.log(recomendedData.Product_colors.images);

  useEffect(() => {
    dispatch(getData("https://nice-tan-elk-tutu.cyclic.app/products"));
  });
  
  return (
    <div>
      <div>
        <ProductBanner
          img1={
            "https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_img0.jpg"
          }
          img2={
            "https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_img0m.jpg"
          }
          imgname={"Image"}
        />
      </div>

      <div>
        <h1 style={headStyle}>Recommended for Y-O-U</h1>
        <div
          className={
            (styles.recomended_container, styles.recomended_cardContainer)
          }
        >
          {recomendedData &&
            recomendedData.map((item) => {
              return <Recomended key={item.name} item={item} />;
            })}
        </div>
      </div>

      <ShopStories />
      <MoreYouNeed />
    </div>
  );
};

export default MenLanding;
