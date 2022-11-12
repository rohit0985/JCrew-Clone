import React, {useState} from "react";
import styles from "./Card.module.css";










const Card = ({prod}) => {

  const [quantity, setQuantity] = useState(1)

  function decreaseQnty(el){
    setQuantity(quantity-1)
   
  }

  function increaseQnty(el){
    setQuantity(quantity+1)
    
  }


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
                <p>Item 65</p>
              </div>
              <div className={styles.measures}>
                <p>Color: {prod.colors[0].colorName}</p>
                <p>Size: {prod.colors[0].availableSize[0]}</p>
              </div>
              <div className={styles.btns}>
                <a href="#">Remove</a>
                <a href="#">Save for Later</a>
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        <div className={styles.quantity}>
         <div className={styles.btn}>
         <button disabled={quantity==1} onClick={()=>decreaseQnty(prod)} >-</button>
         <button>{quantity}</button>
         <button disabled={quantity==9} onClick={()=>increaseQnty(prod)}  >+</button>
         </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        INR {prod.price}
      </div>
    </div>
  );
};

export default Card;
