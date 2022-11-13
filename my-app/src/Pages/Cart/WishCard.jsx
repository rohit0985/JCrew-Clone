import React from 'react'
import styles from "./WishCard.module.css"
import { useLocation} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { updateCdata, deleteCdata, getCdata, addCdata } from "../../Redux/CartReducer/action"
import { addLSdata, getLSdata,deleteLSdata} from "../../Redux/ShopLaterReducer/action"
import { useEffect } from 'react';




const WishCard = ({prod}) => {

const location = useLocation()

  const dispatch = useDispatch()
  const cartData = useSelector((reduxStore)=> reduxStore.CartReducer.products)
  
  const deleteFromShopLater = (id) =>{
    dispatch(deleteLSdata(`http://localhost:8080/shopLater/${id}`))
    dispatch(getLSdata(`http://localhost:8080/shopLater`))
  }

  const deleteAndSave = (prod, id) =>{
    dispatch(deleteLSdata(`http://localhost:8080/shopLater/${id}`))
    dispatch(addCdata(`http://localhost:8080/shopLater`, prod))
    dispatch(getCdata(`http://localhost:8080/cart`))
    dispatch(getLSdata(`http://localhost:8080/shopLater`))
  }

  useEffect(()=>{
    dispatch(getCdata(`http://localhost:8080/cart`))
    dispatch(getLSdata(`http://localhost:8080/shopLater`))
  },[location])

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
                <p onClick={()=>deleteFromShopLater(prod.id)}>Remove</p>
                <p >Edit</p>
                <button onClick={()=>deleteAndSave(prod,prod.id)} className={styles.tobag}>ADD TO BAG</button>
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
