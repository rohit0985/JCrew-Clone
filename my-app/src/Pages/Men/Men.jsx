import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropdownFilterButton from "../../Components/DropDownfilter/DropdownFilterButton";
import SingleProductCard from "../../Components/SingleProductCard";
import { getData } from "../../Redux/AppReducer/action";
import styles from "./Mens.module.css";

const Men = () => {

  const dispatch = useDispatch();
  const data = useSelector((reduxStore) => reduxStore.AppReducer.products);

  data && data.map((el) => console.log(el));

  let men = data && data.filter((el) => el.belongsTo === "men");

  useEffect(() => {
    dispatch(getData);
  }, []);

  const category = [
    "Sweaters",
    "Coats & Jackets",
    "Pants",
    "Denims",
    "Shirts",
    "Dress Shirts",
    "Suiting",
  ];
  const size = ["x-small", "small", "medium", "large", "x-large"];
  const color = ["black", "blue", "brown", "denim", "green"];
  const pattern = ["Gingham", "color Block", "Graphics", "Plaid"];
  const discount = [
    "60% - 70% Off (8)",
    "40% - 60% Off (151)",
    "Less Than 40% Off (1)",
  ];
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
          <DropdownFilterButton name={"Category"} categoryArr={category} />
          <hr />
          <DropdownFilterButton name={"Size"} categoryArr={size} />
          <hr />
          <DropdownFilterButton name={"Color"} categoryArr={color} />
          <hr />
          <DropdownFilterButton name={"Pattern"} categoryArr={pattern} />
          <hr />
          <DropdownFilterButton name={"Discount"} categoryArr={discount} />
          <hr />
        </div>
        <div className={styles.allproducts_div}>
          {/* {mensData.map((data) => (
            <SingleProductCard key={data.name} data={data} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Men;
