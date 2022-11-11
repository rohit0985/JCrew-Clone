import { Routes, Route} from "react-router-dom"
import React from 'react'
import HomePage from "../Pages/HomePage"
import Signup from "../Pages/Signup"
import Signin from "../Pages/Signin"
import Men from "../Pages/Men/Men"
import Women from "../Pages/Women/Women"
import SingleProduct from "../Pages/SingleProduct/SingleProduct"


const MainRoutes = () => {
  return (
    <Routes>
  <Route path="/" element={<HomePage/>}>Home Page</Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route path="/signin" element={<Signin/>}></Route>
  <Route path="/men" element={<Men/>}></Route>
  <Route path="/women" element={<Women/>}></Route>
  <Route path="/single" element={<SingleProduct/>}></Route>
    </Routes>
  )
}

export default MainRoutes
