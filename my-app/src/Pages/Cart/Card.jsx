import React, {useState, useEffect} from "react";
import { addCart, deleteCart, updateCart } from "../../Redux/CartReducer/action";
import styles from "./Card.module.css";
import { getCart } from "../../Redux/CartReducer/action";

import { useDispatch, useSelector } from "react-redux";








const Card = ({prod}) => {
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  const cartData = useSelector((reduxStore)=> reduxStore.CartReducer.products)

// console.log(cartData)




  function decreaseQnty(el){
    setQuantity(quantity-1)

  }


  const increaseQnty = (el,q) =>{
    setQuantity(quantity+1)

   

 let payload = {"cart" : []}
    dispatch(updateCart(`http://localhost:8080/users/1`,payload))

  }




  const deleteFromCart = (id) =>{
    dispatch(deleteCart(`http://localhost:8080/users/1`))
    
  }

  useEffect(()=>{
    dispatch(getCart(`http://localhost:8080/users/1`))
  },[quantity])


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
                <p>Color: {prod.colors[0]?.colorName}</p>
                <p>Size: {prod.colors[0]?.availableSize[0]}</p>
              </div>
              <div className={styles.btns}>
                <a onClick={()=>deleteFromCart(prod.id)} href="#">Remove</a>
                <a href="#">Save for Later</a>
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        <div className={styles.quantity}>
         <div className={styles.btn}>
         <button disabled={quantity==1} onClick={()=>decreaseQnty(prod, prod.cartQuantity+1)}>-</button>
         <button>{quantity}</button>
         <button disabled={quantity==9} onClick={()=>increaseQnty(prod)} >+</button>
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
