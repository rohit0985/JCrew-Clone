import React from 'react'
import styles from "./CheckoutForm.module.css"
import Checkout from '../../Components/Checkout'

const CheckoutForm = () => {
  return (
    <div className={styles.container}>
      <Checkout/>
    </div>
  )
}

export default CheckoutForm
