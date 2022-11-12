import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropdownFilterButton from "../../Components/DropDownfilter/DropdownFilterButton";
import SingleProductCard from "../../Components/SingleProductCard";
import { getData } from "../../Redux/AppReducer/action";
import styles from "./Mens.module.css";

const Men = () => {
  const mensData = [
    {
      name: "Flannel pajama set",
      offer: "13,384",
      "is-lowercase": "select colors",
      price: "6,760",
      brand: "Zara",
      category: "Sweater",
      belongsTo: "men",
      productDetails: {
        desc: "Inspired by vintage mountain gear, the J.Crew Nordic Collection is engineered to keep you frost-free on the chilliest days. Built to endure everything from flurries to blizzards with eco-friendly, high-performance materials, our warmest layers are designed to look sharp in all conditions, whether you're hiking a mountain or trekking closer to home. The Nordic puffer vest is made with a recycled-nylon shell and filled with PrimaLoft Rise, a lightweight insulation made entirely from plastic bottles.",
        highlightPoints: [
          "100% polyamide.",
          "Standing collar.",
          "Snap closure with hidden zip.",
          "Patch pockets with flaps.",
          "Fully lined.",
          "Online only.",
          "Item BJ068.",
        ],
      },
      Product_colors: [
        {
          colorName: "Varsity Navy",
          images: [
            "https://www.jcrew.com/s7-img-facade/BM300_SR0357?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            "https://www.jcrew.com/s7-img-facade/BM300_SR0357?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          ],
          availableSize: [
            "X-Small",
            "Small",
            "Medium",
            "Large",
            "X-Large",
            "XX-Large",
          ],
        },
      ],
    },
  ];

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
          {mensData.map((data) => (
            <SingleProductCard key={data.name} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Men;
