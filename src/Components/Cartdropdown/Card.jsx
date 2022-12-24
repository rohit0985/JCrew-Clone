import React from 'react'
import styles from "./Card.module.css"
import { useNavigate } from 'react-router-dom'
import { deleteCdata } from '../../Redux/CartReducer/action'
import {useDispatch} from "react-redux"

const Card = ({prod, cancleShow}) => {
  const dispatch = useDispatch()
const navigate = useNavigate()

const handleRemove=(id)=>{
dispatch(deleteCdata(id))
}

function edit(id){
  navigate(`/single/${id}`)
  cancleShow()
}

  return (
    <div className={styles.card}>
   
    <div className={styles.left}>
    <img  src={prod.image} alt="#" />
    </div>
     <div className={styles.right}>
      <div className={styles.details}>
      <p>{prod.name}</p>
      <p>INR {prod.price}</p>
      </div>
      <div className={styles.measures}>
       <p>Color: {prod.colors}</p>
      <p>Size: {prod.size}</p>
      </div>
      <div className={styles.btns}>
        <a onClick={()=>edit(prod.id)} href="#">Edit</a>
        <a onClick={()=>handleRemove(prod.id)} href="#">Remove</a>
      </div>
     </div>
   
    </div>
 
  )
}

export default Card
