import React from 'react'
import styles from "./NoReview.module.css"
import { AiFillStar } from "react-icons/ai";




const NoReview = () => {

  return (
    <div className={styles.container}>
        <div className={styles.box}>
    <div  className={styles.stars}>
{
    new Array(5).fill("").map((_,i)=> <AiFillStar size={30}/>)
}
    </div>
<div className={styles.review}>
    <p>There are no reviews for this product. Be the first to comment. </p>
    <a href="#">Write a Review</a>
</div>
    </div>
    </div>
  )
}

export default NoReview
