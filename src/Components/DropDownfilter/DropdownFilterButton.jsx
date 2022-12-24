import React, { useEffect } from "react";
import styles from "./DropdownFilterButton.module.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const DropdownFilterButton = ({ name, categoryArr }) => {
  const [isClose, setIsClose] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.getAll("category") || []);

  const handleChange =(e)=>{
    const option = e.target.value;
    let newCategory = [...category];

    if (newCategory.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  }

  useEffect(() => {
    const params = {};
    category && (params.category = category);
    setSearchParams(params);
  }, [category,setSearchParams]);

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
          <div key={res} className={styles.filterCategories}>
            <input type="checkbox" defaultChecked={category.includes(res)} className={styles.inp} value={res} onChange={handleChange}/>
            <label className={styles.filterCategories_label}>{res}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownFilterButton;
