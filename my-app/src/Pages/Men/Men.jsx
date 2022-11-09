import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../Redux/AppReducer/action'


const Men = () => {
const dispatch = useDispatch()
const data = useSelector((reduxStore)=> reduxStore.AppReducer.products)

console.log(data)


data && data.map((el)=> console.log(el) )


let men = data && data.filter((el)=> el.belongsTo === "men")
console.log(men)


useEffect(()=>{
  dispatch(getData)
},[])




  return (
    <div>
      
    </div>
  )
}

export default Men
