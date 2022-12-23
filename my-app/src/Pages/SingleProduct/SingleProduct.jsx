import React, { useEffect, useState } from "react";
import styles from "./SingleProduct.module.css";
import { BsSuitHeart, BsPinterest, BsTwitter, BsTypeH1 } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { SlSocialTumblr } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";
import { getSingleProduct } from "../../Redux/SingleProduct/action";
import { addCdata } from "../../Redux/CartReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import calPrice from "../../utils/calPrice";
import { addLSdata } from "../../Redux/ShopLaterReducer/action";




const SingleProduct = () => {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();

  const product = useSelector((reduxStore) => reduxStore.SingleProductReducer.product);
  

const handleAddToCart = ()=>{
let obj =  {
  "id": product.id,
  "name": product.name,
  "price": calPrice(product.price),
  "brand": product.brand,
  "category": product.category,
  "belongsTo": product.belongsTo,
  "cartQuantity": Number(quantity),
  "colors": product.Product_colors[0].colorName,
  "image": product.Product_colors[0].images[0],
  "size": size
}
if(size){
  dispatch(addCdata(obj))
  alert ("Product Added to the Cart")
}else{
  alert ("Please Select a size")
}
}


const handleAddToWish = ()=>{
let obj =  {
  "id": product.id,
  "name": product.name,
  "price": calPrice(product.price),
  "brand": product.brand,
  "category": product.category,
  "belongsTo": product.belongsTo,
  "cartQuantity": Number(quantity),
  "colors": product.Product_colors[0].colorName,
  "image": product.Product_colors[0].images[0],
  "size": size
}
if(size){
  dispatch(addLSdata(obj))
  alert ("Product Added to the ShopLater list")
}else{
  alert ("Please Select a size")
}
}


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
                className={styles.colorImg}
                src={product.Product_colors[0].images[0]}
                alt={product.Product_colors[0].colorName}
              />
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
                {product.Product_colors[0].availableSize.map((el) => (
                  <div
                    onClick={() => setSize(el)}
                    className={
                      size === el ? styles.choosedSize : styles.chooseSize
                    }
                  >
                    {el}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.quantity}>
              <span>Quantity</span>
              <select onChange={(e)=>setQuantity(e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
              </select>
            </div>

            <div className={styles.btn}>
            <i>Prices include duties and taxes.</i>
            <div>
              <button onClick={handleAddToCart}  className={styles.atb}>
                ADD TO BAG
              </button>
              <button onClick={handleAddToWish} className={styles.atc}>
                <BsSuitHeart size={20} />
              </button>
            </div>
          </div>


          <hr />

<div className={styles.description}>
  <h4 >Product Details</h4>
  <p>{product.productDetails.desc}</p>
  <ul>
    {product?.productDetails.highlightPoints.map((el, i) => (
      <li key={i}>{el}</li>
    ))}
  </ul>
</div>



<div className={styles.more}>
            <a href="https://www.jcrew.com/s/corporate-responsibility">Learn More</a>
            <a href="#">Shop All Re-imagined</a>
          </div>

          <hr />




          <div className={styles.social}>
            <span>Share</span>
            <BsPinterest />
            <AiFillFacebook />
            <BsTwitter />
            <SlSocialTumblr />
          </div>




          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
