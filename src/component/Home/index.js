import React from "react";
import BannerImg1 from "../Images/MANGO2.jpeg"
// import BannerImg2 from "../Images/Mango.jpeg"

import './style.css';


const Home = () => {
  return (
    <div className="banner">
        <img className="BannerImg1" src={BannerImg1} alt="womanHome" />
        <div className="fashion">
            <h1>Welcome</h1>
            <h4>Fashion You'll Love</h4>
        </div>
            </div>
  );
};

export default Home;