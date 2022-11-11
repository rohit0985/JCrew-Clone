import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropdownFilterButton from "../../Components/DropDownfilter/DropdownFilterButton";
import { getData } from "../../Redux/AppReducer/action";
import styles from "./Mens.module.css";

const Men = () => {
  const dispatch = useDispatch();
  const data = useSelector((reduxStore) => reduxStore.AppReducer.products);

  console.log(data);

  data && data.map((el) => console.log(el));

  let men = data && data.filter((el) => el.belongsTo === "men");
  console.log(men);

  useEffect(() => {
    dispatch(getData);
  }, []);

  return (
    <div>
      <div className={styles.top_heading}>
        <span className={styles.top_heading_span}>
          <span className={styles.top_heading_span1}>The Holiday</span>
          <br />
          Collection
        </span>
      </div>

      <div className={styles.dropdownbuttons}> buttons here </div>

      <div className={styles.products_container}>
        <div className={styles.filtering_div}>
          <DropdownFilterButton />
        </div>
        <div className={styles.allproducts_div}></div>
      </div>
    </div>
  );
};

export default Men;
