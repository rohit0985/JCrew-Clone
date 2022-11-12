import React from "react";
import styles from "./SingleProductCard.module.css";

const SingleProductCard = () => {
  return (
    <div>
      <div className={styles.single_Product_Container}>
        <img
          className={styles.prod_image}
          src="https://www.jcrew.com/s7-img-facade/BM094_SR0485?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480"
          alt=""
        />
        <div className={styles.time_div}>
          <span className={styles.time_span}>NEW</span>
        </div>
        <p className={styles.title_tag}>Rugby shirt with corduroy collar</p>
        <div className={styles.price_div}>INR 13,599</div>
        <div className={styles.color_div}>
          <div className={styles.color_div1}> </div>
          <div className={styles.color_div1}> </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
