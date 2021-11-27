import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { RiShoppingBagLine } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import "./style.css";


const Header = ({logged,checkUser}) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  // const [logged, setlogged] = useState(false);

  useEffect(() => {
    checkUser()
  });

  const navigate = useNavigate();
  
  const LOGOUT = () => {
      navigate("/");
    localStorage.removeItem("User");
    window.location.reload(false)
    // navigate("/");
  };

  return (
    <div className="nav">
     
      
      <ul className="ulNav">
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/">Home</Link>{" "}
        </li>
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/Shop">Shop</Link>{" "}
        </li>
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/FAQ">FAQ</Link>{" "}
        </li>
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/StorePolicies">Store Policies</Link>{" "}
        </li>
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/NewCollection">New Collection</Link>{" "}
        </li>
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/Support">Support</Link>{" "}
        </li>

        {!logged && (
          <>
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to="/Login">Log In</Link>
            </li>
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to="/SignUp">Register</Link>
            </li>
          </>
        )}

        {logged && (
          <>
          <li>
          <Link to="/Cart">
            <RiShoppingBagLine size={22} />
          </Link>
        </li>
            <li className="logOuut" onClick={LOGOUT}>
            <Link to = "/">
            <BiLogIn size={23}/> LogOut
            </Link>
             </li>
           
            {/* <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to="/UserProfile">Profile</Link>
            </li> */}
          </>
        )}
        
      </ul>
    </div>
  );
};

export default Header;
