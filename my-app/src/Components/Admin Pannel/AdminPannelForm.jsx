import React from "react";
import "./adminpannelform.css";

const AdminPannelForm = () => {
  return (
    <div className="adminpannel-form">
      <div className="address-form">
        <h1>ADMIN PANNEL</h1>
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
        <button className="paymentbtn">CONTINUE TO PAYMENT</button>
      </div>
    </div>
  );
};

export default AdminPannelForm;
