import React from 'react'
import styles from "./ThankYouPage.module.css"
import { useLocation } from 'react-router-dom'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

const ThankYouPage = () => {
  const navigate = useNavigate()
    const location = useLocation()
    
setTimeout(()=>{
  navigate("/")
},3000)

  return (
    <ThankYouWrapper>
     <ThankYouNote>
<h1>{location.state.name} !</h1>
<p>Thank You for Shoping with us 😄.</p>
<i>Your total ammount is <span>{location.state.bill}</span></i>
<div className='comp'>
<i>-@styleBasket</i>
</div>
     </ThankYouNote>
    </ThankYouWrapper>
  )
}

export default ThankYouPage


const ThankYouWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`
const ThankYouNote = styled.div`
height: 350px;
width: 300px;
/* border: 1px solid gray; */
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

h1{
    text-transform: capitalize;
    font-size: 25px;
    font-weight: 500;
}
.comp{
   width: 90%;
   text-align: end;
}
`