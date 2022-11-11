import React from 'react'
import styles from './CheckOut.module.css'
import styled from "styled-components"

const CheckOut = () => {
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
    <InputField placeholder='ATM Number.'/>
</div>
<div className={styles.middle}>
   <div>
   <InputField placeholder='Expiry Date'/>
   </div>
  <div>
  <InputField placeholder='CVV'/>
  </div>
</div>
<div className={styles.bottom}>
    <InputField placeholder='Name on Card'/>
</div>
</div>


<p className={styles.terms}>By clicking Pay Now, you agree to eShopWorld's <a href="#">Terms and Conditions</a>.</p>

<button className={styles.payBtn}>PAY NOW</button>


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