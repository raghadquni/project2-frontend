import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const BASE_URL = "http://localhost:5000";

const SignUp = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
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
      if (item.email === email || item.userName === userName) {
        check = false;
      }
    });
    if (check) {
      try {
        axios.post(`${BASE_URL}/users/user` , {
          userName: userName,
          email: email,
          password: password,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert( "This email or username already have an account! log in!" );
      
    }
  }

 

  return (
    <>
    <div className = "RegBox">
      <form className="form1" onSubmit={ckeck}>
      <h1 className="reg"> Register </h1>
      <h4 className="Enter0"> Enter your Email: </h4>
        <input className="inp22"
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <h4 className="Enter11"> Enter your Email: </h4>
        <input className="inp22"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h4 className="Enter22"> Enter your password: </h4>
        <input className="inp22"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="btn12" type="submit" value="Register" />
        <h5 className="acc1">Already have an account? <Link to="/Login">Login</Link>   </h5>   
        </form>
    </div>
    </>
  );
};



export default SignUp;