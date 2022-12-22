import {
  ChevronDownIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import DropdownFilterButton from "../../Components/DropDownfilter/DropdownFilterButton";
import FilterButton from "../../Components/FilterButton";
import SingleProductCard from "../../Components/SingleProductCard";
import { getData } from "../../Redux/AppReducer/action";
import styles from "./Mens.module.css";

const Men = () => {
  useEffect(() => {
    dispatch(getData("http://localhost:8080/products"));
  }, []);

  const [filterOpen, setFilterOpen] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((reduxStore) => reduxStore.AppReducer.products);

  // data && data.map((el) => console.log(el));

  let men = data && data?.filter((el) => el.belongsTo === "men");

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
        <div
          onClick={() => setFilterOpen(!filterOpen)}
          className={`${styles.filter_button} ${styles.filter_button1}`}
        >
          <h5>Show Filters</h5>
          {filterOpen ? <TriangleDownIcon /> : <TriangleUpIcon />}
        </div>
        <div className={`${styles.filter_button} ${styles.filter_button2}`}>
          <FilterButton />
        </div>
      </div>

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
          {men &&
            men.map((data) => <SingleProductCard key={data.id} data={data} />)}
        </div>
      </div>
    </div>
  );
};

export default Men;
