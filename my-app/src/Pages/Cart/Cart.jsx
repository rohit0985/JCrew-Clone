import React from 'react'
import Card from './Card'
import styles from "./Cart.module.css"

const Cart = () => {
  return (
    <div className={styles.wrapper}>

<div className={styles.leftWrapper}>

<div className={styles.top}>
    <h3>SHOPPING BAG (3)</h3>
    <p>Have an account? <span><a href="#">Sign in</a></span> </p>
</div>


    <div className={styles.header}>
        <div className={styles.item}>ITEM</div>
        <div className={styles.qty}>QTY</div>
        <div className={styles.price}>PRICE</div>
    </div>



<div className={styles.content}>
<Card/>
<Card/>
<Card/>
<Card/>
</div>

</div>
     


     <div className={styles.rightWrapper}></div>


    </div>
  )
}

export default Cart
