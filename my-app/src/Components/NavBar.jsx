import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { HeartIcon, MainLogo } from "./SvgIcons";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import { useNavigate } from "react-router-dom";
import Cartdropdown from "./Cartdropdown/Cartdropdown";
import { getCdata } from "../Redux/CartReducer/action";
import {AiOutlineClose} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"

export default function Navbar() {
  const [open, setOpen] = useState(true)
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartData = useSelector((reduxStore) => reduxStore.CartReducer.products);

  const handleShow = () => {
    setShow(!show);
  };
  const cancleShow = () => {
    setShow(false);
  };

  useEffect(() => {
    dispatch(getCdata(`http://localhost:8080/cart`));
  }, []);

  return (
    <div style={{ position: "relative" }} className={styles.nav_parent}>
      <div className={styles.nav_logo}>
        {open ?<GiHamburgerMenu className={styles.ham} onClick={()=>setOpen(!open)}/> : <AiOutlineClose className={styles.ham} onClick={()=>setOpen(!open)}/>}
        <MainLogo />
        <div className={styles.nav_linkWrap_big}>
          <Link to="/new">
            <h4 onClick={()=>setOpen(!open)}>New</h4>
          </Link>
          <Link to="/women">
            <h4 onClick={()=>setOpen(!open)}>Women</h4>
          </Link>
          <Link to="/men">
            <h4 onClick={()=>setOpen(!open)}>Men</h4>
          </Link>
          <Link to="/kids">
            <h4 onClick={()=>setOpen(!open)}>Kids</h4>
          </Link>
        </div>
        <div className={open ? styles.navlink_active : styles.nav_linkWrap}>
          <Link to="/">
            <h4 onClick={()=>setOpen(!open)}>New</h4>
          </Link>
          <Link to="/women">
            <h4 onClick={()=>setOpen(!open)}>Women</h4>
          </Link>
          <Link to="/men">
            <h4 onClick={()=>setOpen(!open)}>Men</h4>
          </Link>
          <Link to="/kids">
            <h4 onClick={()=>setOpen(!open)}>Kids</h4>
          </Link>
          <div className={styles.auth_mobile} onClick={()=>setOpen(!open)}>
          <Signin/>
        </div>
        <div className={styles.auth_mobile} onClick={()=>setOpen(!open)}>
          <Signup />
        </div>
        </div>
      </div>
      <div className={styles.nav_end}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ marginRight: "-25px", zIndex: 2 }}
            src="https://www.jcrew.com/next-static/images/jcrew/svg/icon_search_d.svg"
            alt=""
          />
          <Link to="search">
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
            //   style={{ height: 36, width: 180 }}
            ></input>
          </Link>
        </div>
        <div className={styles.nav_logIN}>
          <Signin/>
        </div>
        <div className={styles.nav_logIN}>
          <Signup />
        </div>
        <div className={`${styles.nav_icons} ${styles.nav_icons_heart}`}>
          <HeartIcon />
        </div>
        <div
          className={styles.nav_icons}
          onMouseOver={handleShow}
          onClick={() => {
            navigate("/cart");
          }}
        >
          <img
            src="https://www.jcrew.com/next-static/images/jcrew/svg/icon_bag_d.svg"
            alt=""
          />{" "}
          <span>{cartData && cartData.length}</span>
        </div>
      </div>
      <div style={{ position: "absolute", top: "60px", right: "0px" }}>
        {show ? <Cartdropdown cancleShow={cancleShow} /> : null}
      </div>
    </div>
  );
}
