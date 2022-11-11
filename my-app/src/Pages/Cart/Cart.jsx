import React from 'react'
import Card from './Card'
import styles from "./Cart.module.css"
import WishCard from './WishCard'


const Cart = () => {
  return (
    <div className={styles.wrapper}>

<div className={styles.mainLeft}>
<div className={styles.leftWrapper}>

<div className={styles.top}>
    <h3>SHOPPING BAG (3)</h3>
    <p>Have an account?<span><a href="#">Sign in</a></span> </p>
</div>


    <div className={styles.header}>
        <div className={styles.item}>ITEM</div>
        <div className={styles.qty}>QTY</div>
        <div className={styles.price}>PRICE</div>
    </div>



<div className={styles.content}>
<Card/>
<Card/>
</div>

</div>

<div className={styles.widh}>
<div className={styles.leftWrapper}>

<div className={styles.top}>
    <h3>SAVED FOR LATER (2)</h3>
</div>


    <div className={styles.header}>
        <div className={styles.item}>ITEM</div>
        <div className={styles.price}>PRICE</div>
    </div>



<div className={styles.content}>
<WishCard/>
<WishCard/>
</div>

</div>
</div>

</div>
     


     <div className={styles.rightWrapper}>

     <div className={styles.subtotal}>
  <p>Item Subtotal</p>
  <p>4567</p>
</div>

<div className={styles.estitotal}>
  <div>
<p>Estimated Total</p>
<p>INR 56864</p>
  </div>
  <p>Shipping calculated in Checkout</p>
</div>

<button className={styles.checkout}>CHECKOUT</button>

<h3>Checkout with ESW</h3>
<p>By clicking ‘Check Out Now’, you will be redirected to the ESW checkout page where payment will be taken and your order fulfilled by ESW, J.Crew's preferred partner for international sales.</p>

<hr />

<div className={styles.promo}>
  <label>Add a promo</label>
  <div>
    <input type="text"  placeholder='Promo'/>
    <button className={styles.apply}>APPLY</button>
  </div>
</div>

     </div>
    </div>
  )
}

export default Cart
