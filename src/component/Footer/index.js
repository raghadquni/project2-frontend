import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import "./style.css";


const Footer = () => {
  
    return (
        <div className="Footer">
          <ul className="ulFot">
          <li>
          <a href="https://twitter.com/">
          <BsTwitter />
          </a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/raghad-alquni/">
          <BsLinkedin />
          </a>
          </li>
          </ul>
          <p> 
              ©2021 by ForYou. Proudly created with Wix.com
          </p>
        </div>
    )}

export default Footer;