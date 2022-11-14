import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { HeartIcon, MainLogo } from "./SvgIcons";
import { User } from "./Icons";

export default function Navbar() {
    
    return (
        <div className={styles.nav_parent}>
            <div className={styles.nav_logo}>
                <Link to="/"><MainLogo /></Link>
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
                <div>
                   <h4>sign in</h4>
                </div>
                <div className={styles.nav_icons}>
                    <HeartIcon />
                </div>
                <div
                    className={styles.nav_icons}
                    onClick={() => {
                        ("/cart");
                    }}>
                
                   
                    <img
                        src="https://www.jcrew.com/next-static/images/jcrew/svg/icon_bag_d.svg"
                        alt=""/>
                    
                  
                    
                </div>
            </div>
        </div>
        
    );
}
