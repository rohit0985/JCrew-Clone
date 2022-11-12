import React from 'react'
import Card from './Card'
import styles from "./Cart.module.css"
import WishCard from './WishCard'

let cartList = [{
  "name": "Ludlow Classic-fit double-breasted tuxedo jacket in English corduroy",
  "price": "68838.0",
  "brand": "zara",
  "category": "pant",
  "belongsTo": "men",
  "productDetails": {
    "desc": "Inspired by vintage mountain gear, the J.Crew Nordic Collection is engineered to keep you frost-free on the chilliest days. Built to endure everything from flurries to blizzards with eco-friendly, high-performance materials, our warmest layers are designed to look sharp in all conditions, whether you're hiking a mountain or trekking closer to home. The Nordic puffer vest is made with a recycled-nylon shell and filled with PrimaLoft Rise, a lightweight insulation made entirely from plastic bottles.",
    "highlightPoints": [
      "100% polyamide.",
      "Standing collar.",
      "Snap closure with hidden zip.",
      "Patch pockets with flaps.",
      "Fully lined.",
      "Online only.",
      "Item BJ068."
    ]
    },
  "colors": [
    {
      "colorName": "Varsity Navy",
      "images": [
        "https://www.jcrew.com/s7-img-facade/BK936_WZ2103_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        "https://www.jcrew.com/s7-img-facade/BK936_WZ2103_d5?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160"
      ],
      "availableSize": [
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XX-Large"
      ]
    }
  ]
},
{
  "name": "Ludlow Classic-fit double-breasted tuxedo jacket in English corduroy",
  "price": "68838.0",
  "brand": "zara",
  "category": "pant",
  "belongsTo": "men",
  "productDetails": {
    "desc": "Inspired by vintage mountain gear, the J.Crew Nordic Collection is engineered to keep you frost-free on the chilliest days. Built to endure everything from flurries to blizzards with eco-friendly, high-performance materials, our warmest layers are designed to look sharp in all conditions, whether you're hiking a mountain or trekking closer to home. The Nordic puffer vest is made with a recycled-nylon shell and filled with PrimaLoft Rise, a lightweight insulation made entirely from plastic bottles.",
    "highlightPoints": [
      "100% polyamide.",
      "Standing collar.",
      "Snap closure with hidden zip.",
      "Patch pockets with flaps.",
      "Fully lined.",
      "Online only.",
      "Item BJ068."
    ]
    },
  "colors": [
    {
      "colorName": "Varsity Navy",
      "images": [
        "https://www.jcrew.com/s7-img-facade/BK936_WZ2103_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        "https://www.jcrew.com/s7-img-facade/BK936_WZ2103_d5?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160"
      ],
      "availableSize": [
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XX-Large"
      ]
    }
  ]
}]
let shopLaterList = [{
  "name": "Ludlow Classic-fit double-breasted tuxedo jacket in English corduroy",
  "price": "68838.0",
  "brand": "zara",
  "category": "pant",
  "belongsTo": "men",
  "productDetails": {
    "desc": "Inspired by vintage mountain gear, the J.Crew Nordic Collection is engineered to keep you frost-free on the chilliest days. Built to endure everything from flurries to blizzards with eco-friendly, high-performance materials, our warmest layers are designed to look sharp in all conditions, whether you're hiking a mountain or trekking closer to home. The Nordic puffer vest is made with a recycled-nylon shell and filled with PrimaLoft Rise, a lightweight insulation made entirely from plastic bottles.",
    "highlightPoints": [
      "100% polyamide.",
      "Standing collar.",
      "Snap closure with hidden zip.",
      "Patch pockets with flaps.",
      "Fully lined.",
      "Online only.",
      "Item BJ068."
    ]
    },
  "colors": [
    {
      "colorName": "Varsity Navy",
      "images": [
        "https://www.jcrew.com/s7-img-facade/BK936_WZ2103_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        "https://www.jcrew.com/s7-img-facade/BK936_WZ2103_d5?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160"
      ],
      "availableSize": [
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XX-Large"
      ]
    }
  ]
},
{
  "name": "Ludlow Classic-fit double-breasted tuxedo jacket in English corduroy",
  "price": "68838.0",
  "brand": "zara",
  "category": "pant",
  "belongsTo": "men",
  "productDetails": {
    "desc": "Inspired by vintage mountain gear, the J.Crew Nordic Collection is engineered to keep you frost-free on the chilliest days. Built to endure everything from flurries to blizzards with eco-friendly, high-performance materials, our warmest layers are designed to look sharp in all conditions, whether you're hiking a mountain or trekking closer to home. The Nordic puffer vest is made with a recycled-nylon shell and filled with PrimaLoft Rise, a lightweight insulation made entirely from plastic bottles.",
    "highlightPoints": [
      "100% polyamide.",
      "Standing collar.",
      "Snap closure with hidden zip.",
      "Patch pockets with flaps.",
      "Fully lined.",
      "Online only.",
      "Item BJ068."
    ]
    },
  "colors": [
    {
      "colorName": "Varsity Navy",
      "images": [
        "https://www.jcrew.com/s7-img-facade/BK936_WZ2103_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        "https://www.jcrew.com/s7-img-facade/BK936_WZ2103_d5?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160"
      ],
      "availableSize": [
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XX-Large"
      ]
    }
  ]
}]

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
{
  cartList && cartList.map((prod,i)=> <Card prod={prod} key={i}/>)
}
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
{
  shopLaterList && shopLaterList.map((prod, i)=> <WishCard prod={prod} key={i}/>)
}
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
