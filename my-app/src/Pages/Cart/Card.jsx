import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import {updateCdata, deleteCdata, getCdata} from "../../Redux/CartReducer/action";
import { addLSdata, getLSdata } from "../../Redux/ShopLaterReducer/action";
import { Link } from "react-router-dom";

const Card = ({ prod }) => {

  const dispatch = useDispatch();
  const cartData = useSelector((reduxStore) => reduxStore.CartReducer.products);

  const deleteFromCart = (id) => {
    dispatch(deleteCdata(id));
  };

  const deleteAndSave = (prod, id) => {
    dispatch(addLSdata(prod));
    dispatch(deleteCdata(id));
  };

  const increaseQuantity = () => {
    let newQuantity = Number(prod.cartQuantity) + 1;
    let payload = { cartQuantity: newQuantity };
    dispatch(updateCdata(prod.id, payload));
  };
  const decreaseQuantity = () => {
    let newQuantity = Number(prod.cartQuantity) - 1;
    let payload = { cartQuantity: newQuantity };
    dispatch(updateCdata(prod.id, payload));
  };

  useEffect(()=>{
    dispatch(getCdata())
  },[])

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.leftContainer}>
        <div className={styles.card}>
          <div className={styles.left}>
            <img src={prod.image} alt="#" />
          </div>
          <div className={styles.right}>
            <div className={styles.details}>
              <p>{prod.name}</p>
              <p>Item {prod.id + 1}</p>
            </div>
            <div className={styles.measures}>
              <p>Color: {prod.colors}</p>
              <p>Size: {prod.size}</p>
            </div>
            <div className={styles.btns}>
              <p onClick={() => deleteFromCart(prod.id)}>Remove</p>
              <p onClick={() => deleteAndSave(prod, prod.id)}>Save for Later</p>
              <Link to={`/single/${prod.id}`}>
                <p>Edit</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.quantity}>
          <div className={styles.btn}>
            <button
              disabled={prod.cartQuantity == 1}
              onClick={decreaseQuantity}
            >
              -
            </button>
            <button>{prod.cartQuantity}</button>
            <button
              disabled={prod.cartQuantity == 9}
              onClick={increaseQuantity}
            >
              +
            </button>
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
