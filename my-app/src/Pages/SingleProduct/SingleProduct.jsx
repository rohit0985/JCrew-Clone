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
const [image, setImage] = useState("")

  const product = useSelector(
    (reduxStore) => reduxStore.SingleProductReducer.product
  );

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);


  return (
    <div className={styles.mainContainer}>
      {product && (
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.small}>
              {
                product.Product_colors[0].images.map((smallImage,i)=>{
                return  <img onMouseEnter={()=>setImage(smallImage)} className={image === smallImage ? styles.selectedImage : "smallImage"} src={smallImage}/>
                })
              }
            </div>
            <div className={styles.big}>
              <img src={image || product.Product_colors[0].images[0]} alt="" />
            </div>
          </div>



          <div className={styles.right}>
            <h3></h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
