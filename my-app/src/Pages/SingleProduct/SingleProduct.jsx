import React, { Children, useEffect, useState } from "react";
import styles from "./SingleProduct.module.css"
import NoReview from "./NoReview";
import { BsSuitHeart, BsPinterest, BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { SlSocialTumblr } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";
import SimilarCard from "./SimilarCard";

import { addCdata, getCdata } from "../../Redux/CartReducer/action"
import { getData } from "../../Redux/AppReducer/action";
import { useDispatch, useSelector } from 'react-redux'
import { InputGroup } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";




// const product =  {
//   "id": 1,
//   "name": "Ludlow Classic-fit double-breasted tuxedo jacket in English corduroy",
//   "price": "68838.0",
//   "brand": "zara",
//   "category": "pant",
//   "belongsTo": "men",
//   "productDetails": {
//     "desc": "Inspired by vintage mountain gear, the J.Crew Nordic Collection is engineered to keep you frost-free on the chilliest days. Built to endure everything from flurries to blizzards with eco-friendly, high-performance materials, our warmest layers are designed to look sharp in all conditions, whether you're hiking a mountain or trekking closer to home. The Nordic puffer vest is made with a recycled-nylon shell and filled with PrimaLoft Rise, a lightweight insulation made entirely from plastic bottles.",
//     "highlightPoints": [
//       "100% polyamide.",
//       "Standing collar.",
//       "Snap closure with hidden zip.",
//       "Patch pockets with flaps.",
//       "Fully lined.",
//       "Online only.",
//       "Item BJ068."
//     ]
//     },
//   "colors": [
//     {
//       "colorName": "Varsity Navy",
//       "images": [
//         "https://www.jcrew.com/s7-img-facade/BK936_WZ2103_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//         "https://www.jcrew.com/s7-img-facade/BK936_WZ2103_d5?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160"
//       ],
//       "availableSize": [
//         "X-Small",
//         "Small",
//         "Medium",
//         "Large",
//         "X-Large",
//         "XX-Large"
//       ]
//     }
//   ]
// };

const SingleProduct = () => {
  const [color, setColor] = useState("");
  const [colorname, setColorname] = useState(color.colorName);
  const [image, setImage] = useState();
  const [quantity, setQuantity ] = useState(1)
  const [size, setSize] = useState('')
  const dispatch = useDispatch()
  
  const prod = useSelector((state)=> state.AppReducer.products)
  const loading = useSelector((state)=> state.AppReducer.isLoading)
  const error = useSelector((state)=> state.AppReducer.isError)





  useEffect(()=>{
    // dispatch(getCdata(`http://localhost:8080/cart`))
   dispatch(getData(`http://localhost:8080/products/7`))
   
  },[])


 

  let prodc = {
    "id": 2,
    "name": "484 Slim-fit tech pant",
    "offer": "(50% Off)",
    "is-lowercase": "",
    "price": "13,230.00",
    "brand": "Zara",
    "category": "Pants",
    "belongsTo": "men",
    "productDetails": {
        "desc": "Inspired by vintage mountain gear, the J.Crew Nordic Collection is engineered to keep you frost-free on the chilliest days. Built to endure everything from flurries to blizzards with eco-friendly, high-performance materials, our warmest layers are designed to look sharp in all conditions, whether you're hiking a mountain or trekking closer to home. The Nordic puffer vest is made with a recycled-nylon shell and filled with PrimaLoft Rise, a lightweight insulation made entirely from plastic bottles.",
        "highlightPoints": [
            "100% polyamide.",
            "Standing collar.",
            "Snap closure with hidden zip.",
            "Patch pockets with flaps.",
            "Fully lined.",
            "Online only.",
            "Item BJ068."
        ]
    },
    "Product_colors": [
        {
            "colorName": "Gray",
            "images": [
                "https://www.jcrew.com/s7-img-facade/AW005_NA0965?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                "https://www.jcrew.com/s7-img-facade/AW005_NA0965?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
            ],
            "availableSize": [
                "X-Small",
                "Small",
                "Medium",
                "Large",
                "X-Large",
                "XX-Large"
            ]
        }
    ]
}

const handleImage = (el)=>{
  setImage(el)
}
  const handleColor = (el) => {
    setColor(el);
    setImage(el.images[0]);
  };
  const handleSize =(el="Medium")=>{
    setSize(el)
  }




const addToCart = () =>{
  let payload = {
    "id": prod.id,
    "name": prod.name,
    "price": Number(prod.price.replace(",","")),
    "brand": prod.brand,
    "category": prod.category,
    "belongsTo": prod.belongsTo,
    "cartQuantity": Number(quantity),
    "colors": color.colorName,
    "image": color.images[0],
    "size": size
  }

  dispatch(addCdata(`http://localhost:8080/cart`,payload))

}

  return (

    <div className={styles.mainContainer}>
    {
      prod && 
      <div className={styles.container}>

<div className={styles.left}>
{prod && prod?.Product_colors[0]?.images?.map((el, i) => (<img src={el} alt="#" key={i} onMouseOver={() =>handleImage(el)} />))}
</div>


<div className={styles.mid}>
<img src={image? image : prod?.Product_colors[0]?.images[0]} alt="#" />
<BsSuitHeart size={25} className={styles.heart}/>
</div>

<div className={styles.right}>

<p className={styles.category}>{prod?.category}</p>
<p className={styles.name}>{prod?.name}</p>

<div className={styles.ratingReview}>
  <div className="ratingCount">
    {new Array(Number(3)).fill("").map((_,i) => (<AiFillStar key={i} />))}
  </div>

  <div className="reviewCount">
    <a href="@"><span>{1} review</span></a>
  </div>
</div>

<p className={styles.price}>INR {prod?.price}</p>

<div className={styles.colors}>
  <p className={styles.color}><span>Color:</span> {color ? color.colorName : prod?.Product_colors[0]?.colorName}</p>

  <div className={styles.colorContainer}>
    {
       prod.Product_colors && prod?.Product_colors?.map((el, i) => <div key={i} className={styles.colorOuter} onMouseOver={() => setColorname(el.colorName)} onClick={() => handleColor(el)}>

        <div className={styles.colorInner}>
          <img src={el.images[el.images.length - 1]} />
        </div>
      </div>
      ) 
    }
  </div>
</div>

<div className={styles.size}>
  <div className={styles.top}>
    <div className={styles.size}>
      <p className={styles.SelectedSize}>
        <span>Size: </span>{size ? size : "Select a Size"}
      </p>
    </div>
    <div className={styles.chart}>
      <a href="#">Size chart</a>
    </div>
  </div>

  <i className={styles.instruction}>All sizes are US sizes.</i>

  <div className={styles.sizes}>
    {
      prod && prod?.Product_colors[0]?.availableSize?.map((el, i) => <div onClick={()=>handleSize(el)} className={styles.sizeAvailable} key={i}>{el}</div>)
    }
  </div>
</div>

<div className={styles.quantity}>
  <label>
    <span>Quantity: </span>
  </label>
  <select onChange={(e)=>setQuantity(e.target.value)}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
  </select>
</div>

<div className={styles.btn}>
  <i>Prices include duties and taxes.</i>
  <div>
    <button onClick={addToCart} className={styles.atb}>ADD TO BAG</button>
    <button className={styles.atc}><BsSuitHeart size={20}/></button>
  </div>
</div>


<hr />

<div className={styles.description}>
  <h4>Product Details</h4>
  <p>{prod?.productDetails?.desc}</p>
  <ul>
    {
      prod?.productDetails?.highlightPoints?.map((el, i) => <li key={i}>{el}</li>)
    }
  </ul>
</div>

<div className={styles.more}>
  <a href="#">Learn More</a>
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
    }
  

<NoReview/>

<div className={styles.similarProducts}>
{/* {
  new Array(5).fill("").map((el,i)=> <SimilarCard key={i}/>)
} */}
</div>

<hr />

  </div>
);
};

export default SingleProduct;
