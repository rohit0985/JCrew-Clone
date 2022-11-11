import React from 'react'
import styles from "./SimilarCard.module.css"
import { BsSuitHeart } from "react-icons/bs";

const SimilarCard = () => {
  return (
    <div className={styles.box}>
    <BsSuitHeart size={20} className={styles.heart}/>
      <img src="https://www.jcrew.com/s7-img-facade/BJ474_WZ2256?wid=488" alt="#" />

      <div className={styles.quickShop}>QUICK SHOP</div>
      <p>Ludlow Classic-fit double-breasted tuxedo jacket in English corduroy</p>
      <p>INR {68838.15}</p>
    </div>
  )
}

export default SimilarCard
