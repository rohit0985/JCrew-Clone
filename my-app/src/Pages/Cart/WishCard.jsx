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
    dispatch(deleteLSdata(`https://nice-tan-elk-tutu.cyclic.app/shopLater/${id}`))
    dispatch(getLSdata(`https://nice-tan-elk-tutu.cyclic.app/shopLater`))
  }

  const deleteAndSave = (prod, id) =>{
    dispatch(deleteLSdata(`https://nice-tan-elk-tutu.cyclic.app/shopLater/${id}`))
    dispatch(addCdata(`https://nice-tan-elk-tutu.cyclic.app/shopLater`, prod))
    dispatch(getCdata(`https://nice-tan-elk-tutu.cyclic.app/cart`))
    dispatch(getLSdata(`https://nice-tan-elk-tutu.cyclic.app/shopLater`))
  }

  useEffect(()=>{
    dispatch(getCdata(`https://nice-tan-elk-tutu.cyclic.app/cart`))
    dispatch(getLSdata(`https://nice-tan-elk-tutu.cyclic.app/shopLater`))
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
