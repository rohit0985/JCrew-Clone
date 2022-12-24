import React from 'react'

const CheckoutCard = () => {
  return (
    <div className="CheckoutCardProduct-products">
    <p>Ludlow Classic-fit cocktail jacket in mixed tartan English wool</p>
    <div className="CheckoutCardProduct-products-flex">
      <div className="CheckoutCardProduct-img">
        <img
          src="https://www.jcrew.com/s7-img-facade/BK941_WZ2350?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=408&hei=408"
          alt=""
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
          <p>2</p>
          <p>TARTAN MIX</p>
          <p>36/R</p>
          <p>INR 73,979.00</p>
        </div>
      </div>
    </div>
    <button className="viewmore-btn">VIEW MORE</button>
  </div>
  )
}

export default CheckoutCard
