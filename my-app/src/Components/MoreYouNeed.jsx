import React from "react";
import "./moreyouneed.css";
import { Link } from "react-router-dom";

const MoreYouNeed = () => {
  return (
    <div>
      <div className="moreyouneed-container">
        <h1 className="moreyouneed-header">More you need to see</h1>
        <div className="moreyouneed-cardcontainer">
          <div className="moreyouneed-card">
            <img
              src="https://www.jcrew.com/s7-img-facade/BM170_SU8368_m?wid=416"
              alt=""
            />
            <Link to="/women">
              <p>New Arrivals</p>
            </Link>
          </div>
          <div className="moreyouneed-card">
            <img
              src="https://www.jcrew.com/s7-img-facade/BN019_PT3168_m?wid=416"
              alt=""
            />
            <Link to="/women">
              <p>Fair Isle Forever</p>
            </Link>
          </div>
          <div className="moreyouneed-card">
            <img
              src="https://www.jcrew.com/s7-img-facade/BM312_PT3361_m?wid=416"
              alt=""
            />
            <Link to="/women">
              <p>Be the Best-dressed Guest</p>
            </Link>
          </div>
          <div className="moreyouneed-card">
            <img
              src="https://www.jcrew.com/s7-img-facade/BN019_PT3168_m?wid=416"
              alt=""
            />
            <Link to="/women">
              <p>New Parkas, Topcoats & More</p>
            </Link>
          </div>
          <div className="moreyouneed-card">
            <img
              src="https://www.jcrew.com/s7-img-facade/BM874_YD2455_m?wid=416"
              alt=""
            />
            <Link to="/women">
              <p>New Parkas, Topcoats & More</p>
            </Link>
          </div>
          <div className="moreyouneed-card">
            <img
              src="https://www.jcrew.com/s7-img-facade/AB651_RD5371_m?wid=416"
              alt=""
            />
            <Link to="/women">
              <p>New Parkas, Topcoats & More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreYouNeed;
