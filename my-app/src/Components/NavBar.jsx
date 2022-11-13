import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { HeartIcon, MainLogo } from "./SvgIcons";
import { User } from "./Icons";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import {useNavigate}  from 'react-router-dom'
import Cartdropdown from "./Cartdropdown/Cartdropdown"
import { getCdata } from "../Redux/CartReducer/action";

export default function Navbar() {

    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const cartData = useSelector((reduxStore)=> reduxStore.CartReducer.products)

const handleShow = ()=>{
    setShow(!show)
}
const cancleShow = ()=>{
setShow(false)
}


useEffect(()=>{
    dispatch(getCdata(`http://localhost:8080/cart`))
},[])

    return (
        <div style={{position:"relative"}} className={styles.nav_parent}>
            <div className={styles.nav_logo}>
                <MainLogo />
                <div className={styles.nav_linkWrap}>
                <Link to="/">
                        <h4>Gifts</h4>
                    </Link>
                    <Link to="/">
                        <h4>New</h4>
                    </Link>
                    <Link to="/women">
                        <h4>Women</h4>
                    </Link>
                    <Link to="/mens">
                        <h4>Men</h4>
                    </Link>
                    <Link to="/kids">
                        <h4>Kids</h4>
                    </Link>
                    <Link to="/cashmeres">
                        <h4>Cashmere</h4>
                    </Link>
                    <Link to="/products/home">
                        <h4>Home</h4>
                    </Link>
                    <Link to="/stories">
                        <h4>Stories</h4>
                    </Link>
                    <Link to="/sale">
                        <h4>Sale</h4>
                    </Link>
                </div>
            </div>



            <div className={styles.nav_end}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        style={{ marginRight: "-25px", zIndex: 2 }}
                        src="https://www.jcrew.com/next-static/images/jcrew/svg/icon_search_d.svg"
                        alt=""
                    />
                    <Link to='search' >
                    <input
                        type="search"
                        className={styles.nav_searchInput}
                        placeholder="Search J.Crew"
                        // value=""
                        data-qaid="navDesktopSearchInput"
                        autoComplete="off"
                        autoCapitalize="off"
                        autoCorrect="off"
                        maxLength="50"
                        style={{ height: 36, width: 180 }}  ></input>
                  </Link>
                </div>
                <div className={styles.nav_logIN}>
                   <Signin />
                </div>
                <div className={styles.nav_logIN}>
                   <Signup />
                </div>
                <div className={styles.nav_icons}>
                    <HeartIcon />
                </div>
                <div
                    className={styles.nav_icons}
                    onMouseOver={handleShow}
                    onClick={() => {
                        navigate("/cart");
                    }}>
                
                   
                    <img
                        src="https://www.jcrew.com/next-static/images/jcrew/svg/icon_bag_d.svg"
                        alt=""/> <span>{cartData && cartData.length}</span>
                    
                  
                    
                </div>
            </div>
            <div style={{position:"absolute", top:'60px', right:'0px'}}>
               {show ? <Cartdropdown cancleShow = {cancleShow}/> : null} 
            </div>
        </div>
        
    );
}
