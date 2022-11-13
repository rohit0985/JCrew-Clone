import React from "react";
import styles from "./DropdownFilterButton.module.css";
import { useState } from "react";

const DropdownFilterButton = ({ name, categoryArr }) => {
  const [isClose, setIsClose] = useState(true);

  return (
    <div className={styles.main_div}>
      <div
        className={styles.filterCategory_name}
        onClick={() => setIsClose(!isClose)}
      >
        <span className={styles.span1}>{name}</span>
        <span className={styles.span2}>{isClose ? "+" : "-"}</span>
      </div>

      <div
        className={`${isClose ? styles.tohide_Content : styles.toshow_Content}`}
      >
        {categoryArr.map((res) => (
          <div className={styles.filterCategories}>
            <input type="checkbox" />
            <label className={styles.filterCategories_label}>{res}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownFilterButton;
