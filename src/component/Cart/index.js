import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const [proudct, setProduct] = useState([]);
  const [email, setEmail] = useState("");

  const getUSerFromLocal = async () => {
    const user = await JSON.parse(localStorage.getItem("User"));
    // console.log(user);
    setEmail(user);
  };

  useEffect(() => {
    getUSerFromLocal();
  }, []);

  const getProducts = async () => {
    // console.log("users.id",{email});
    const product = await axios.get(
      `http://localhost:5000/users/cart/${email.email}`
    );
    // console.log(product.data);
    setProduct(product.data);
  };

  useEffect(() => {
    getProducts();
  }, [email]);

  const getproduct = (id) => {
    console.log(id);
    navigate(`/products/product`);
  };

  const DelFromCart = (id) => {
    axios.put(`http://localhost:5000/users/remove/${email.email}/${id}`);
    getUSerFromLocal();
    window.location.reload(false);
  };


const checOut = () => {
  navigate('/CheckOut')

}

  
  return (
    <>
      <h1> Your Shopping Cart is have {proudct.length}</h1>
      <h1> Your Shopping Cart is have {proudct.length}</h1>
      <h1> Your Shopping Cart is have {proudct.length}</h1>
      <h1> Your Shopping Cart is have {proudct.length}</h1>
      <h1> Your Shopping Cart is have {proudct.length}</h1>

      {proudct &&
        proudct.map((ele, i) => {
          return (
            <>
              <div onClick={() => getproduct(ele.name)}>
                {" "}
                <img src={ele.productImg} alt="CartImg" />
                <h4> {ele.productName} </h4>
                <h4> {ele.size} </h4>
                <h4> {ele.color} </h4>
                <h4> {ele.price} </h4>
              </div>
              <button onClick={() => DelFromCart(ele._id)}> Remove </button>
              <hr />
            </>
          );
        })}
      <div className="checkOut">
        <h3> Total: {proudct.reduce((total, item)=>total+(item.price),0)} SR </h3>
        <button onClick={() => checOut()}> Add to Cart 
          
          </button>
      </div>
    </>
  );
};

export default Cart;

