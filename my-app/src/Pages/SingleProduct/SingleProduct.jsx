import React, { Children, useEffect, useState } from "react";
import styles from "./SingleProduct.module.css";
import { BsSuitHeart, BsPinterest, BsTwitter, BsTypeH1 } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { SlSocialTumblr } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";
import { getSingleProduct } from "../../Redux/SingleProduct/action";

import {
  addCdata,
  getCdata,
  updateCdata,
} from "../../Redux/CartReducer/action";

import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [size, setSize] = useState("")

  const product = useSelector(
    (reduxStore) => reduxStore.SingleProductReducer.product
  );
  console.log(product);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  return (
    <div className={styles.mainContainer}>
      {product && (
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.small}>
              {product.Product_colors[0].images.map((smallImage, i) => {
                return (
                  <img
                    onMouseEnter={() => setImage(smallImage)}
                    className={
                      image === smallImage
                        ? styles.selectedImage
                        : styles.smallImage
                    }
                    src={smallImage}
                  />
                );
              })}
            </div>
            <div className={styles.big}>
              <img src={image || product.Product_colors[0].images[0]} alt="" />
            </div>
          </div>


          <div className={styles.right}>
            <p className={styles.category}>{product.category}</p>
            <h3 className={styles.name}>{product.name}</h3>

            <div className={styles.ratingReview}>
              <div className={styles.rating}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className={styles.reviewCount}>235 revews</p>
            </div>

            <h3 className={styles.price}>INR {product.price}</h3>

            <div className={styles.color}>
              <p className={styles.colorName}>
                <span>Color:</span>
                {product.Product_colors[0].colorName}
              </p>
              <img  
              className={
                styles.colorImg
              }
              src={product.Product_colors[0].images[0]} 
              alt={product.Product_colors[0].colorName} />
            </div>

<div className={styles.size}>

<div className={styles.sizeInfo}>
<div>
<span>Size:</span>
  <p>{size ? size : "Select a Size"}</p>
</div>
  <p>All sizes are US sizes.</p>
</div>


<div className={styles.sizeWrapper}>
  {
    product.Product_colors[0].availableSize.map((el)=> <div 
    onClick={()=>setSize(el)} 
    className={size === el ? styles.choosedSize : styles.chooseSize}>{el}</div> )
  }
</div>


</div>


<div className={styles.quantity}>
<label htmlFor=""></label>
</div>

          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
