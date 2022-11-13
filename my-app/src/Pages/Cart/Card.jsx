import React, {useState, useEffect} from "react";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCdata, deleteCdata, getCdata } from "../../Redux/CartReducer/action"
import { addLSdata, getLSdata} from "../../Redux/ShopLaterReducer/action"



const Card = ({prod}) => {
 
  const dispatch = useDispatch()
  const cartData = useSelector((reduxStore)=> reduxStore.CartReducer.products)

  const increaseQnty = (id) =>{
    dispatch(updateCdata(`http://localhost:8080/cart/${id}`,{cartQuantity : Number(prod.cartQuantity) + 1}))
    dispatch(getCdata(`http://localhost:8080/cart`))
  }

  function decreaseQnty(id){
    dispatch(updateCdata(`http://localhost:8080/cart/${id}`,{cartQuantity : Number(prod.cartQuantity) - 1}))
    dispatch(getCdata(`http://localhost:8080/cart`))
   }

  const deleteFromCart = (id) =>{
    dispatch(deleteCdata(`http://localhost:8080/cart/${id}`))
    dispatch(getCdata(`http://localhost:8080/cart`))
  }

  const deleteAndSave = (prod, id) =>{
    dispatch(deleteCdata(`http://localhost:8080/cart/${id}`))
    dispatch(addLSdata(`http://localhost:8080/shopLater`, prod))
    dispatch(getCdata(`http://localhost:8080/cart`))
    dispatch(getLSdata(`http://localhost:8080/shopLater`))

  }

  useEffect(()=>{
    dispatch(getCdata(`http://localhost:8080/cart`))
  },[])


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
                <p onClick={()=>deleteFromCart(prod.id)}>Remove</p>
                <p onClick={()=>deleteAndSave(prod,prod.id)} >Save for Later</p>
                <p >Edit</p>
              </div>
            </div>
          </div>
        <div className={styles.quantity}>
         <div className={styles.btn}>
         <button disabled={prod.cartQuantity==1} onClick={()=>decreaseQnty(prod.id)}>-</button>
         <button>{prod.cartQuantity}</button>
         <button disabled={prod.cartQuantity==9} onClick={()=>increaseQnty(prod.id)} >+</button>
         </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        INR {Number(prod.price) * Number(prod.cartQuantity)}
      </div>
    </div>
  );
};

export default Card;
