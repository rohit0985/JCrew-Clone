import React from 'react'
import styles from "./Card.module.css"

const Card = () => {
  return (
   <div className={styles.cardWrapper}>
    <div className={styles.leftContainer}>
    <div className={styles.card}>
   
   <div className={styles.left}>
   <img src="https://www.jcrew.com/s7-img-facade/BK936_WZ2103_d5?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160" alt="#" />
   </div>
    <div className={styles.right}>
     <div className={styles.details}>
     <p>Ludlow Classic-fit double-breasted tuxedo jacket in English corduroy</p>
     <p>Item 64</p>
     </div>
     <div className={styles.measures}>
      <p>Color: Blue</p>
     <p>Size: Medium</p>
     </div>
     <div className={styles.btns}>
       <a href="#">Remove</a>
       <a href="#">Save for Later</a>
       <a href="#">Edit</a>
     </div>
    </div>
  
   </div>
   <div className={styles.quantity}>
quantity
   </div>

   </div>
   <div className={styles.pr}>
    rifht
   </div>
   </div>
  )
}

export default Card
