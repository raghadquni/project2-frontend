import React from "react";
import { Link, useLocation } from "react-router-dom";
import BannerImg1 from "../Images/MANGO2.jpeg";
import { RiTShirt2Line } from "react-icons/ri";
import { GiSkirt } from "react-icons/gi";
import { GiHighHeel } from "react-icons/gi";
import { GiDress } from "react-icons/gi";
import { FcBusinesswoman } from "react-icons/fc";
import { Icon } from '@iconify/react';
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


import "./style.css";
import Slider from "react-slick";

const Home = () => {
  
  // let settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };
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

      <div className="about">
        <h2>About Our Store</h2>
        <h4> A Life of Fashion </h4>
        <p>ForYou has been bringing exceptional style to shoppers far and wide since our founding,
           and we don’t intend on stopping anytime soon. Our vision is fast-paced, forward-thinking and fashion-centered at its core, 
           and all of our products reflect these ideals. We invite you to browse through our site to find just what you have been looking for.</p>
      </div>

      <div className="Contact">
      <ul className="con">
      <li className="big"> Contact Us </li>
        <li> Buridah Alqassim, SA 12345</li>
        <li> raghadqu97raghadqu@gmail.com </li>
        <li> (+966) 55 921 3865</li>
        <li className="inLine"> <a href="https://www.linkedin.com/in/raghad-alquni/">
          <BsLinkedin /> </a> </li>
          <li className="inLine">
          <a href="https://twitter.com/">
          <BsTwitter />
          </a>
          </li>
      </ul>      
      </div>
    </>
  );
};

export default Home;
