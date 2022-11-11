import React from "react";
import styles from "./Cartdropdown.module.css"
import { IoIosClose } from "react-icons/io";
import Card from "./Card";

const Cartdropdown = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>SHOPPING BAG</h3>
        <IoIosClose size={30} />
      </div>
<div className={styles.cardContainer}>
{
  new Array(7).fill("").map((el,i)=>  <Card/>)
}
</div>

<div className={styles.totalButton}>
<p>Subtotal: 77853.23</p>
<button>CHECKOUT</button>
</div>
    </div>
  );
};

export default Cartdropdown;
