import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import styles from "./FilterButton.module.css"

const FilterButton = () => {
    const [isOpen,setIsOpen] = useState(true)
  return (
    <div style={{ width: "120px", height: "40px", border: "1px solid black" }}>
      <div onClick={()=>setIsOpen(!isOpen)}
        style={{
          width: "120px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        Features {isOpen ? <TriangleDownIcon /> : <TriangleUpIcon />}
      </div>
      <div className={`${isOpen? styles.hide : styles.show}`}>
      <div 
        style={{
          width: "160px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <h5 style={{ marginLeft: "8px" }}>Price : low - high</h5>
      </div>
      <div
        style={{
          width: "160px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <h5 style={{ marginLeft: "8px" }}>Price : high - low</h5>
      </div>
      <div
        style={{
          width: "160px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <h5 style={{ marginLeft: "8px" }}>Top Rated</h5>
      </div>
      <div
        style={{
          width: "160px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <h5 style={{ marginLeft: "8px" }}>New Arrival</h5>
      </div>
      </div>
    </div>
  );
};

export default FilterButton;
