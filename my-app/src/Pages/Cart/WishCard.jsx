import React from 'react'
import styles from "./WishCard.module.css"
import { useLocation} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { updateCdata, deleteCdata, getCdata, addCdata } from "../../Redux/CartReducer/action"
import { addLSdata, getLSdata,deleteLSdata} from "../../Redux/ShopLaterReducer/action"
import { useEffect } from 'react';
import {Link} from "react-router-dom"


const WishCard = ({prod}) => {

const location = useLocation()

  const dispatch = useDispatch()
  const cartData = useSelector((reduxStore)=> reduxStore.CartReducer.products)
  
  const deleteFromShopLater = (id) =>{
  dispatch(deleteLSdata(id))
  }

  const deleteAndSave = (prod, id) =>{
    dispatch(addCdata(prod))
    dispatch(deleteLSdata(id))
  }

  useEffect(()=>{
   dispatch(getLSdata())
  },[])

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.leftContainer}>
      <div className={styles.card}>
            <div className={styles.left}>
            <img
                src={prod.image}
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
              <p>Color: {prod.colors}</p>
                <p>Size: {prod.size}</p>
              </div>
              <div className={styles.btns}>
                <p className={styles.remove} onClick={()=>deleteFromShopLater(prod.id)}>Remove</p>
                <Link to={`/single/${prod.id}`}><p >Edit</p></Link>
                <button  onClick={()=>deleteAndSave(prod,prod.id)} className={styles.tobag}>ADD TO BAG</button>
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
