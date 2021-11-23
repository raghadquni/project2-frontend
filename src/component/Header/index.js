import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";
import "./style.css";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [logged, setlogged] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("User"))) {
      setlogged(true);
    }
  }, []);

  return (
    <div className="nav">
      {/* <div>
        <ul>
          <li>
          <h1>AR</h1>
          </li>
        </ul>
      </div> */}
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
        <li>
          <Link to="/Cart">
            <RiShoppingBagLine />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
