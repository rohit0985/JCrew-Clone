import React, {useEffect} from "react";
import "./checkoutcartproduct.css";
import {useDispatch, useSelector} from 'react-redux'
import { getCdata } from "../Redux/CartReducer/action";
import { useNavigate } from "react-router-dom";



const CheckoutCardProduct = ({delExt}) => {
const navigate = useNavigate()
  const dispatch = useDispatch()
const cartData = useSelector((reduxStore)=> reduxStore.CartReducer.products)

let sum = cartData && cartData.reduce((acc, el)=> (acc + Number(el.price) * Number(el.cartQuantity)),0).toFixed(2)
let delivery = (Number(delExt) * Number(sum)).toFixed(2)

useEffect(()=>{
  dispatch(getCdata(`http://localhost:8080/cart`))
},[])

  return (
    <div className="CheckoutCardProduct-container">
      <button className="back-cart" onClick={()=>navigate(`/cart`)}>BACK TO CART</button>

{
  cartData && cartData.map((el, i)=>
  
  <div className="CheckoutCardProduct-products">
        <p>{el.name}</p>
        <div className="CheckoutCardProduct-products-flex">
          <div className="CheckoutCardProduct-img">
            <img
              src={el.image}
              alt="#"
            />
          </div>
          <div className="CheckoutCardProduct-intro-flex">
            <div>
              <p>Quality:</p>
              <p>Color:</p>
              <p>Size:</p>
              <p>Price:</p>
            </div>
            <div>
              <p>{el.cartQuantity}</p>
              <p>{el.colors}</p>
              <p>{el.size}</p>
              <p>{el.price}</p>
            </div>
          </div>
        </div>
        <button onClick={()=>navigate(`/single/${el.id}`)} className="viewmore-btn">VIEW MORE</button>
      </div>

  )
}

     
      
      <hr />
      <div className="totalamount">
        <div>
          <p>Items</p>
          <p>INR {sum}</p>
        </div>
        <div>
          <p>Delivery</p>
          <p>INR {delivery}</p>
        </div>
        <div>
          <p>TOTAL</p>
          <p>INR {Number(sum) + Number(delivery)}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCardProduct;
