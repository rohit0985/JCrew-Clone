import React from 'react'
import styles from './CheckOut.module.css'
import styled from "styled-components"
import CheckoutCardProduct from "../../Components/CheckoutCardProduct"
import { Link } from 'react-router-dom'
import { useState } from 'react'



const CheckOut = ({bill, name, thanksNote}) => {
const [atmDetails, setAtmDetails] = useState({
  atmNumber:"",
  month:"",
  year:"",
  cvv:"",
  cardHolder:""
})

const handleChange = (e)=>{
  const {value, name} = e.target
 
  setAtmDetails((prev)=>{
    return {...prev, [name] : value}
  })
}

const handlePay = ()=>{
if(!atmDetails.atmNumber || 
  !atmDetails.month || 
  !atmDetails.year || 
  !atmDetails.cvv || 
  !atmDetails.cardHolder ||
  atmDetails.atmNumber.length !== 16 ||
  atmDetails.month.length !== 2 ||
  atmDetails.year.length !== 2 ||
  atmDetails.cvv.length < 3 ||
  atmDetails.cvv.length > 4){
  alert ("Please fill correct ATM details")
}else
alert("Payment done successfully")
thanksNote()
  }
  

  return (
    <div className={styles.container}>  
    <div className={styles.deliveredAdd}></div>
    <div className={styles.payment}>
<h2>Payment</h2>

<div className={styles.check}>
<input type="checkbox" />
<label>Billing Address is same as delivered address.</label>
</div>

<button className={styles.cardbtn}>Card</button>


<div className={styles.atmCard}>

<div className={styles.top}>
    <InputField placeholder='ATM Number.'  onChange={handleChange} name={"atmNumber"} value={atmDetails.atmNumber} />
</div>
<div className={styles.middle}>
   <div>
   <input maxLength={2} placeholder='MM'  onChange={handleChange} name={"month"} value={atmDetails.month}  />
/
   <input maxLength={2} placeholder='YY'  onChange={handleChange} name={"year"} value={atmDetails.year} />
   </div>
  <div>
  <InputField maxLength={4} style={{textAlign:"start"}} placeholder='CVV'  onChange={handleChange} name={"cvv"} value={atmDetails.cvv} />
  </div>
</div>
<div className={styles.bottom}>
    <InputField placeholder='Name on Card'  onChange={handleChange} name={"cardHolder"} value={atmDetails.cardHolder} />
</div>
</div>


<p className={styles.terms}>By clicking Pay Now, you agree to eShopWorld's <a href="#">Terms and Conditions</a>.</p>

{/* <Link to={"/thankyou"} state={{bill: bill, name: name}} ><button onClick={thanksNote} className={styles.payBtn}>PAY NOW</button></Link> */}

<button onClick={handlePay} className={styles.payBtn}>PAY NOW</button>
    </div>




    </div>
  )
}

export default CheckOut


const InputField = styled.input`
flex:1;
height: 100%;
width: 100%;
border: 1px solid gray;
padding: 0 10px;
`