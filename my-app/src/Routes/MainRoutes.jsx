
import { Routes, Route } from "react-router-dom"
import React from 'react'
import HomePage from "../Components/HomePage"
import Signup from "../Pages/Signup"
import Signin from "../Pages/Signin"
import Men from "../Pages/Men/Men"
import Women from "../Pages/Women/Women"
import SingleProduct from "../Pages/SingleProduct/SingleProduct"
import Cart from "../Pages/Cart/Cart"
import CheckoutForm from "../Pages/CheckoutForm/CheckoutForm"
import CheckOut from "../Pages/CheckOut/CheckOut"

import { ChakraProvider } from "@chakra-ui/react";
import PrivateRoute from "../Components/PrivateRoute";
import Checkout from "../Components/Checkout"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>Home Page</Route>
      <Route
        path="/signup"
        element={
          <ChakraProvider>
            <Signup />
          </ChakraProvider>
        }
      ></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route
        path="/signin"
        element={
          <ChakraProvider>
            <Signin />
          </ChakraProvider>
        }
      ></Route>
      <Route path="/men" element={<ChakraProvider><Men /></ChakraProvider>}></Route>
      <Route path="/women" element={<ChakraProvider><Women /></ChakraProvider>}></Route>
      <Route path="/single/:id" element={<SingleProduct/>}></Route>
      <Route
        path="/cart"
        element={
          // <PrivateRoute>
            <Cart />
          // </PrivateRoute>
        }
      ></Route>
      <Route
        path="/checkout"
        element={
          // <PrivateRoute>
            <CheckOut />
          // </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default MainRoutes;
