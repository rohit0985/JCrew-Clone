import React from "react";
import styles from "./recomended.module.css";
import { useNavigate } from "react-router-dom";

const Recomended = ({ item, header }) => {
const navigate = useNavigate()

  return (
    <div>
      <h1 className={styles.recomended_header}>{header}</h1>
      <div className={styles.recomended_cardContainer}>
        <div onClick={()=>navigate("/men")} className={styles.recomended_card}>
          <img
            // src="https://www.jcrew.com/s7-img-facade/BM120_NA5929?wid=376"
            src={item?.Product_colors[0]?.images[0]}
            alt=""
            className={styles.recomended_image}
          />
          <div className={styles.intro}>
            <p className={styles.item_name}>{item.name}</p>
            <p className={styles.item_price}>{item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomended;
