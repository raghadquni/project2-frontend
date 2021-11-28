import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import Swal from "sweetalert2";

const BASE_URL = "http://localhost:5000";

const Login = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("User"))) {
      navigate("/");
    } else {
      getAllUsers();
    }
  }, [email]);

  const getAllUsers = async () => {
    const users = await axios.get(`${BASE_URL}/users/allUser`);
    setUsers(users.data);
    setLoading(false);
  };

  const ckeck = (e) => {
    e.preventDefault();

    let check = false;
    users.map((item) => {
      if (item.email === email && item.password === password) {
        check = true;
      }
    });
    if (check) {
      try {
        navigate("/");
        localStorage.setItem("User", JSON.stringify({ email }));
        console.log("your in ", email);
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The email or password is incorrect',
      })
    }
  };

  return (
    <>
      <div className="RegBox11">
        <form className="form" onSubmit={ckeck}>
          <h1 className="loog"> LOG IN </h1>
          <h4 className="Enter"> Enter your email: </h4>
          <input
            className="inpuut1"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4 className="Enter2"> Enter your Password: </h4>
          <input
            className="inpuut1"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="btn11" type="submit" value="LOGIN" />
          <h5 className="acc">
            You don't have an account? <Link to="/SignUp">Register</Link>{" "}
          </h5>
        </form>
      </div>
    </>
  );
};

export default Login;
