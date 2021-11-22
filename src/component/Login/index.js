import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

const Login = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

useEffect(() => {
    getAllUsers();
  }, []);

const getAllUsers = async () => {
    const users = await axios.get(`${BASE_URL}/users/allUser`);
    setUsers(users.data);
  };


  const ckeck = (e) => {
    e.preventDefault();


    let check = true;
    users.map((item) => {
      if (item.email === email && item.password === password) {
        check = false;
      }
    });
    if (check) {
      alert( "The email or password is incorrect" );
    } else
    try {
      axios.post(`${BASE_URL}/users/user` , {
        email: email,
        password: password,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  
  }

  return (
    <>
     <div className = "RegBox">
      <form onSubmit={ckeck}>
      <h1> LOG IN </h1>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="btn" type="submit" value="LOGIN" />
        <h5>You don't have an account? <Link to="/SignUp">Register</Link>   </h5>   
        </form>
    </div>
    </>
  );
};

export default Login;