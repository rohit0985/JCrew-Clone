
import { Routes, Route} from "react-router-dom"
import React from 'react'
import HomePage from "../Components/HomePage"
import Signup from "../Pages/Signup"
import Signin from "../Pages/Signin"
import Men from "../Pages/Men/Men"
import Women from "../Pages/Women/Women"
import SingleProduct from "../Pages/SingleProduct/SingleProduct"
import Cart from "../Pages/Cart/Cart"
import CheckOut from "../Pages/CheckOut/CheckOut"

import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "../Pages/HomePage";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import Men from "../Pages/Men/Men";
import Women from "../Pages/Women/Women";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Cart from "../Pages/Cart/Cart";
import CheckOut from "../Pages/CheckOut/CheckOut";

import { ChakraProvider } from "@chakra-ui/react";
import PrivateRoute from "../Components/PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        Home Page
      </Route>
      <Route
        path="/signup"
        element={
          <ChakraProvider>
            <Signup />
          </ChakraProvider>
        }
      ></Route>
      <Route
        path="/signin"
        element={
          <ChakraProvider>
            <Signin />
          </ChakraProvider>
        }
      ></Route>
      <Route path="/men" element={<Men />}></Route>
      <Route path="/women" element={<Women />}></Route>
      <Route path="/single" element={<SingleProduct />}></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default MainRoutes;
