import React from "react";
import { Link } from "react-router-dom";
import styles from "./SingleProductCard.module.css";

const SingleProductCard = ({ data }) => {
  // console.log('data: ', data?.Product_colors[0]?.images[0]);
  return (
    <div>
      <Link to={`/single/${data.id}`}>
        <div className={styles.single_Product_Container}>
          <img
            className={styles.prod_image}
            src={data?.Product_colors[0]?.images[0]}
            alt=""
          />
          <div className={styles.time_div}>
            <span className={styles.time_span}>NEW</span>
          </div>
          <p className={styles.title_tag}>{data?.name}</p>
          <div className={styles.price_div}>INR {data?.price}</div>
          <div className={styles.color_div}>
            <div className={styles.color_div1}> </div>
            <div className={styles.color_div2}> </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleProductCard;
