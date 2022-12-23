import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import DropdownFilterButton from "../Components/DropDownfilter/DropdownFilterButton";
import SingleProductCard from "../Components/SingleProductCard";
import styles from "./Men/Mens.module.css";
import { getData } from "../Redux/AppReducer/action";

const New = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("");

  const data = useSelector((reduxStore) => reduxStore.AppReducer.products);

  useEffect(() => {
    const category = searchParams.getAll("category");
    const queryParam = {
      params: {
        category: category,
      },
    };
    dispatch(getData(sortBy, queryParam));
  }, [location.search, sortBy]);

  const category = [
    "Sweater",
    "Pants",
    "Shirts",
    "Suiting",
    "Polos",
    "T-Shirt",
    "Shoes",
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
      <hr />
      <div className={styles.have_a_que}>
        Have a question? We can help.{" "}
        <img
          style={{ width: "10px" }}
          src="https://www.jcrew.com/s7-img-facade/TR"
          alt=""
        />
      </div>
      <hr />
      <div className={styles.top_heading}>
        <span className={styles.top_heading_span}>
          <span className={styles.top_heading_span1}>The Holiday</span>
          <br />
          Collection
        </span>
      </div>

      <div className={styles.dropdownbuttons}>
        <div className={`${styles.filter_button} ${styles.filter_button2}`}>
          {/* <FilterButton/> */}
          <label htmlFor="">Sort</label>
          <select
            name="Sort"
            id="Sort"
            style={{ outline: "0px" }}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value=""></option>
            <option value="asc">High-To-Low</option>
            <option value="desc">low-To-High</option>
          </select>
        </div>
      </div>

      <div className={styles.products_container}>
        <div className={styles.filtering_div}>
          <DropdownFilterButton name={"Category"} categoryArr={category} />
          <hr />
          {/* <DropdownFilterButton name={"Size"} categoryArr={size} />
          <hr />
          <DropdownFilterButton name={"Color"} categoryArr={color} />
          <hr />
          <DropdownFilterButton name={"Pattern"} categoryArr={pattern} />
          <hr />
          <DropdownFilterButton name={"Discount"} categoryArr={discount} />
          <hr /> */}
        </div>
        <div className={styles.allproducts_div}>
          {data &&
            data?.map((data) => (
              <SingleProductCard key={data.id} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default New;
