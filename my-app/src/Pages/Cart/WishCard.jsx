import React from 'react'
import styles from "./WishCard.module.css"

const WishCard = ({prod}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.leftContainer}>
      <div className={styles.card}>
            <div className={styles.left}>
              <img
                src={prod.colors[0].images[0]}
                alt="#"
              />
            </div>
            <div className={styles.right}>
              <div className={styles.details}>
                <p>
                {prod.name}
                </p>
                <p>Item 64</p>
              </div>
              <div className={styles.measures}>
                <p>Color: {prod.colors[0].colorName}</p>
                <p>Size: {prod.colors[0].availableSize[0]}</p>
              </div>
              <div className={styles.btns}>
                <a href="#">Remove</a>
                <a href="#">Edit</a>
                <button className={styles.tobag} href="#">ADD TO BAG</button>
              </div>
            </div>
          </div>
       
      </div>

      <div className={styles.rightContainer}>
      INR {prod.price}
      </div>
    </div>
  )
}

export default WishCard
