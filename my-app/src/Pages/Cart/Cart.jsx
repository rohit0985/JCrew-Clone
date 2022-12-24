import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Cart.module.css";
import WishCard from "./WishCard";
import { useDispatch, useSelector } from "react-redux";
import { getCdata } from "../../Redux/CartReducer/action";
import { getLSdata } from "../../Redux/ShopLaterReducer/action";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Cart = () => {
  const [promo, setPromo] = useState("");
  const [text, setText] = useState("");
  const [discount, setDiscount] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartData = useSelector((reduxStore) => reduxStore.CartReducer.products);
  const shopLaterData = useSelector((reduxStore) => reduxStore.ShopLaterReducer.products);


  console.log(cartData)
  console.log(shopLaterData)

  let actPromo = "masai10";
  let sum = cartData?.reduce(
    (acc, el) => acc + Number(el.price) * Number(el.cartQuantity),
    0
  );

  const applyPromo = () => {
    if (text) {
      setPromo(text);
    }
    if (promo === text) {
      setDiscount(true);
    }
  };

  useEffect(() => {
    dispatch(getCdata());
  }, []);

  useEffect(() => {
    dispatch(getLSdata());
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainLeft}>
        <div className={styles.leftWrapper}>
          <div className={styles.top}>
            <h3>SHOPPING BAG ({cartData.length})</h3>
            <p>
              Have an account?
              <span>
                <a href="#">Sign in</a>
              </span>{" "}
            </p>
          </div>

          <div className={styles.header}>
            <div className={styles.item}>ITEM</div>
            <div className={styles.qty}>QTY</div>
            <div className={styles.price}>PRICE</div>
          </div>

          <div className={styles.content}>
            {cartData &&
              cartData.map((prod, i) => <Card prod={prod} key={i} />)}
          </div>
        </div>

        <div className={styles.widh}>
          <div className={styles.leftWrapper}>
            <div className={styles.top}>
              <h3>SAVED FOR LATER ({shopLaterData.length})</h3>
            </div>

            <div className={styles.header}>
              <div className={styles.item}>ITEM</div>
              <div className={styles.price}>PRICE</div>
            </div>

            <div className={styles.content}>
              {shopLaterData &&
                shopLaterData.map((el, i) => <WishCard prod={el} key={i} />)}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightWrapper}>
        <div className={styles.subtotal}>
          <p>Item Subtotal</p>
          <p>INR {sum}</p>
        </div>

        <div className={styles.estitotal}>
          <div>
            <p>Estimated Total</p>
            <p>INR {promo === actPromo ? sum * 0.9 : sum}</p>
          </div>
          <p>Shipping calculated in Checkout</p>
        </div>

        <Link to={{ pathname: "/checkout", state: { val: "hello" } }}>
          <button className={styles.checkout}>CHECKOUT</button>
        </Link>

        <h3>Checkout with ESW</h3>
        <p>
          By clicking ‘Check Out Now’, you will be redirected to the ESW
          checkout page where payment will be taken and your order fulfilled by
          ESW, J.Crew's preferred partner for international sales.
        </p>

        <hr />

        <div className={styles.promo}>
          <label>Add a promo </label>
          <div>
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              placeholder="Promo"
            />
            <button onClick={applyPromo} className={styles.apply}>
              APPLY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
