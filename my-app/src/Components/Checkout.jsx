import React, { useState, useEffect } from "react";
import "./checkout.css";
import CheckoutCardProduct from "./CheckoutCardProduct";
import { useLocation } from "react-router-dom";
import CheckOut from "../Pages/CheckOut/CheckOut";
import {useDispatch, useSelector} from 'react-redux'
import { deleteAllCdata, deleteCdata, getCdata } from "../Redux/CartReducer/action";

const Checkout = () => {
const [pay, setPay] = useState(false)
const [delExt, setDelExt] = useState(.02)
const [adds, setAdds] = useState(
  {firstname:"",
  lastname:"",
  addln1:"",
  addln2:"",
  post:"",
  city:"",
  phone:"",
  email:""
}
)

console.log(adds)

const dispatch = useDispatch()
const cartData = useSelector((reduxStore)=> reduxStore.CartReducer.products)



const handleChange = (e)=>{
const {value, name} = e.target
console.log(e)
setAdds((prev)=> {
  return {...prev, [name] : value}
})
}


let sum = cartData && cartData.reduce((acc, el)=> (acc + Number(el.price) * Number(el.cartQuantity)),0).toFixed(2)
let delivery = (Number(delExt) * Number(sum)).toFixed(2)
let bill = Number(sum) + Number(delivery)
console.log(bill)


const thanksNote = ()=>{
  let newArr = cartData.map((el,i)=> el.id)
  newArr.forEach((el,i)=> dispatch(deleteCdata(`https://nice-tan-elk-tutu.cyclic.app/cart/${el}`)))
  dispatch(getCdata(`https://nice-tan-elk-tutu.cyclic.app/cart`))
}


const gotoPay = () =>{
  setPay(true)
}

useEffect(()=>{
  dispatch(getCdata(`http://localhost:8080/cart`))
},[])

  return (
    <div className="checkout-container">
      <div className="flex-container">
        <div className="left-container">
          <div className="deliverymethod">
            <h2 style={{fontWeight:"500"}}>{pay ? "Delivery Address" : "Delivery Method"}</h2>
           {
            pay ? <>
            <p style={{fontWeight:"400"}}>{adds.firstname} {adds.lastname}</p>
            <p>{adds.phone}</p>
            <i>{adds.email}</i>
            <p>{adds.city}</p>
            {/* <p>{adds.post}</p>
            <p>{adds.addln1}</p>
            <p>{adds.addln2}</p> */}
            </> : <> 
            <div className="flex1">
              <input type="radio" defaultChecked={delExt == .02} onChange={()=>setDelExt(.02)}  name="delMode" />
              <div className="flex">
                <div style={{display:'flex', flexDirection:"column", gap:"0px", marginLeft:"5px"}}>
                <p style={{fontSize:"12px"}}>STANDARD Delivery</p>
                <i style={{fontSize:"10px"}}>Delivered in 7 days with 2% delivery charge</i>
                
                </div>
                <p>INR {(Number(sum) * 1.02).toFixed(2)}</p>
              </div>
            </div>
            <div className="flex1">
              <input type="radio" name="delMode" onChange={()=>setDelExt(.07)}/>
              <div className="flex">
                <div style={{display:'flex', flexDirection:"column", gap:"0px", marginLeft:"5px"}}>
                <p style={{fontSize:"12px"}}>EXPRESS Delivery</p>
                <i style={{fontSize:"10px"}}>Delivered in 2 days with 7% delivery charge</i>
                </div>
                <p>INR {(Number(sum) * 1.07).toFixed(2)}</p>
              </div>
            </div></>
           }
          </div>
          {
            pay ? <CheckOut bill = {bill} name={adds.firstname} thanksNote={thanksNote}/> : 
            <div className="address-form">
            <h1>Delivery Address</h1>
            <div className="inputboxes">
              <div className="inputflex">
                <div className="inputwrap">
                  <input type="text" required onChange={handleChange} value={adds.firstname} name={"firstname"} />
                  <label>*First Name</label>
                </div>
                <div className="inputwrap">
                  <input type="text" required onChange={handleChange} value={adds.lastname} name={"lastname"}/>
                  <label>*Last Name</label>
                </div>
              </div>
              <div className="inputwrap">
                <input type="text" required onChange={handleChange} value={adds.addln1} name={"addln1"}/>
                <label>*AddressLine 1</label>
              </div>
              <div className="inputwrap">
                <input type="text" required onChange={handleChange} value={adds.addln2} name={"addln2"} />
                <label>*AddressLine 2</label>
              </div>
              <div className="inputflex">
                <div className="inputwrap">
                  <input type="text" required onChange={handleChange} value={adds.post} name={"post"}/>
                  <label>*Postal</label>
                </div>
                <div className="inputwrap">
                  <input type="text" required onChange={handleChange} value={adds.city} name={"city"}/>
                  <label>*City</label>
                </div>
              </div>
              <div className="inputwrap">
                <input type="text" required onChange={handleChange} value={adds.phone} name={"phone"}/>
                <label>
                  <span>*</span> Phone Number
                </label>
              </div>
              <br />
              <div className="inputwrap">
                <input type="text" required onChange={handleChange} value={adds.email} name={"email"}/>
                <label>*Email Address</label>
              </div>
            </div>
            <div className="term-container">
              <div className="term-flex">
                <input type="checkbox" />
                <p>
                  I have read and consent to ESW processing my information in
                  accordance with the Privacy Statement and Cookie Policy.
                </p>
              </div>
            </div>
            <button onClick={gotoPay} className="paymentbtn">CONTINUE TO PAYMENT</button>
          </div>
          }

          <div className="payment">
            <h3>PAYMENT</h3>
          </div>
        </div>
        <div className="rightcontainer">
          <CheckoutCardProduct delExt={delExt}  />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
