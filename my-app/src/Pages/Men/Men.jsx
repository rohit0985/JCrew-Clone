import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../Redux/AppReducer/action'


const Men = () => {
const dispatch = useDispatch()
const data = useSelector((reduxStore)=> reduxStore.AppReducer.products)

data && data.men && data.men.map((el)=> console.log(el) )


useEffect(()=>{
  dispatch(getData)
},[])




  return (
    <div>
      
    </div>
  )
}

export default Men
