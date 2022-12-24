import React, {useState, useEffect} from "react";
import styles from "./Cartdropdown.module.css"
import { IoIosClose } from "react-icons/io";
import Card from "./Card";
import { getCdata, deleteCdata } from "../../Redux/CartReducer/action";
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import Checkout from "../Checkout";
import { url } from "../../url";

const Cartdropdown = ({cancleShow}) => {
const navigate = useNavigate()
  const dispatch = useDispatch()
const cartData = useSelector((reduxStore)=> reduxStore.CartReducer.products)

let sum = cartData?.reduce((acc, el)=> (acc + Number(el.price) * Number(el.cartQuantity)),0).toFixed(2);


const checkout =()=>{
cancleShow()
  navigate("/checkout")
}

useEffect(()=>{
  dispatch(getCdata(`${url}cart`))
},[])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 style={{fontWeight:"bold"}}>SHOPPING BAG</h3>
        <IoIosClose size={30} onClick={cancleShow} />
      </div>
<div className={styles.cardContainer}>
{
  cartData && cartData.map((el,i)=>  <Card prod={el} cancleShow={cancleShow}/>)
}
</div>

<div className={styles.totalButton}>
<p>Subtotal: {sum}</p>
<button onClick={()=>checkout()}>CHECKOUT</button>
</div>
    </div>
  );
};

export default Cartdropdown;
