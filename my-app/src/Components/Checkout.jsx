import React from "react";
import "./checkout.css";
import CheckoutCardProduct from "./CheckoutCardProduct";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="flex-container">
        <div className="left-container">
          <div className="deliverymethod">
            <h2>Delivery Method</h2>
            <div className="flex1">
              <input type="radio" />
              <div className="flex">
                <p>STANDARD Delivery</p>
                <p>INR 1,710.00</p>
              </div>
            </div>
            <div className="flex1">
              <input type="radio" />
              <div className="flex">
                <p>STANDARD Delivery</p>
                <p>INR 1,710.00</p>
              </div>
            </div>
          </div>
          <div className="address-form">
            <h1>Delivery Address</h1>
            <div className="inputboxes">
              <div className="inputflex">
                <div className="inputwrap">
                  <input type="text" required />
                  <label>*First Name</label>
                </div>
                <div className="inputwrap">
                  <input type="text" required />
                  <label>*Last Name</label>
                </div>
              </div>
              <div className="inputwrap">
                <input type="text" required />
                <label>*AddressLine 1</label>
              </div>
              <div className="inputwrap">
                <input type="text" required />
                <label>*AddressLine 2</label>
              </div>
              <div className="inputflex">
                <div className="inputwrap">
                  <input type="text" required />
                  <label>*Postal</label>
                </div>
                <div className="inputwrap">
                  <input type="text" required />
                  <label>*City</label>
                </div>
              </div>
              <div className="inputwrap">
                <input type="text" required />
                <label>
                  <span>*</span> Phone Number
                </label>
              </div>
              <br />
              <div className="inputwrap">
                <input type="text" required />
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
            <button className="paymentbtn">CONTINUE TO PAYMENT</button>
          </div>

          <div className="payment">
            <h3>PAYMENT</h3>
          </div>
        </div>
        <div className="rightcontainer">
          <CheckoutCardProduct />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
