import React from "react";
import { Link, useLocation } from "react-router-dom";
import BannerImg1 from "../Images/MANGO2.jpeg";
import { RiTShirt2Line } from "react-icons/ri";
import { GiSkirt } from "react-icons/gi";
import { GiHighHeel } from "react-icons/gi";
import { GiDress } from "react-icons/gi";


import "./style.css";

const Home = () => {
  return (
    <>
      <div className="banner">
        <img className="BannerImg1" src={BannerImg1} alt="womanHome" />
        <div className="fashion">
          <h1>Welcome</h1>
          <h4>Fashion You'll Love</h4>
        </div>
      </div>

      <div className="categories">
        <ul className="cato">
          
          <li>
            <Link to="/Tops">
              <RiTShirt2Line className="cat"/>
            </Link>
          </li>
          <li>
            <Link to="/BottomClothes">
              <GiSkirt className="cat"/>
            </Link>
          </li>
          <li>
            <Link to="/Shoes">
              <GiHighHeel className="cat"/>
            </Link>
          </li>
          <li>
            <Link to="/Dress">
              <GiDress className="cat"/>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
