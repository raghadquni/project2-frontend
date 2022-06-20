import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { BsFillTrashFill } from "react-icons/bs";
import "./style.css"
import Swal from "sweetalert2";


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
    // eslint-disable-next-line
  }, [email]);

  // eslint-disable-next-line
  const getproduct = (id) => {
    console.log(id);
    navigate(`/products/product`);
  };

  const DelFromCart = (id) => {
    axios.put(`http://localhost:5000/users/remove/${email.email}/${id}`);
    getUSerFromLocal();
    window.location.reload(false);
  };

// eslint-disable-next-line
const checOut = () => {
  navigate('/CheckOut')

}


const inside = (id) => {
  console.log(id);
  navigate(`/OneProduct/${id}`);
};

  
  return (
    <>
    <div className="h1Sh">
      <h1 className="cartShopping"> Your Shopping Cart </h1>
      </div>
      <div className= "row">
      {proudct &&
        proudct.map((ele, i) => {
          return (
            <>
            <div
                onClick={() => {
                  inside(ele._id);
                }}>
                <div className="horizontal-card">
                <img className="CartImg" src={ele.productImg} alt="CartImg" />
                
                <div class="horizontal-card-body">
                <span className="namePro">  {ele.productName} </span>
                <span className="sizePro">  size : {ele.size} </span>
                <span className="colorPro"> color : {ele.color} </span>
                <span className="pricePro">  {ele.price} SR </span>
              <button className="remove" onClick={() => DelFromCart(ele._id)}> <BsFillTrashFill /> </button>

              </div>
              </div>
              </div>
            </>
            
          );
        })}
                      </div>

      <div className="checkOut">
        <hr />
      <div className="horizontal-card-tot">
      <h3 className="total"> Shipping </h3>
        <h3 className="ship"> Total </h3>
        
        
        
        <div class="horizontal-card-body-tot">
        <span className="sipp"> 30.00 SR</span>
        <span className="tot"> {proudct.reduce((total, item)=>total+(item.price),30)} SR </span>
        
        
          </div>
          
      </div>
      <button className="btnCheck" onClick={() => Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `The request has been made.. <br /> we will be contacted you`,
          showConfirmButton: true,
          timer: 30000
        })}> CHECKOUT ({proudct.length})
          
          </button>
      </div>
    </>
  );
};

export default Cart;

