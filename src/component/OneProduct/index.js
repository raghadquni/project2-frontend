import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./style.css";

const BASE_URL = "http://localhost:5000";

const OneProduct = () => {
    const id = useParams().id;
    const [product, setProduct] = useState([]);
    const [user , setUser] = useState("");


    const getUSerFromLocal = async () => {
      const loggedUser = await JSON.parse(localStorage.getItem("User"));
      setUser(loggedUser);
    };

    useEffect(() => {
        getUSerFromLocal();
      }, []);


    const addtoCart = async (id) => {
        console.log(user,"user");
        console.log(id,"id");
       await axios.put(`http://localhost:5000/users/cart/${user.email}/${id}`);
        getUSerFromLocal();
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'ADD TO CART',
            showConfirmButton: false,
            timer: 2000
      });
    }



 
  useEffect(() => {
    getOneProdect();
    // eslint-disable-next-line
  }, []);

  const getOneProdect = async () => {
    const product = await axios.get(`${BASE_URL}/products/allProduct`);
    console.log(product);
// eslint-disable-next-line
    setProduct(product.data.find((elm) => elm._id == id));
  };

  return (
    <div>
      {product ? (
        <div className="product">
          <img className="proImg" src={product.productImg} alt="mmm" />
          <h5> {product.productName} </h5>
          <h5 className="des"> Description : {product.description} SR </h5>
          <h4 className="price"> {product.price} SR </h4>
          <button className="btnOne" onClick={() => addtoCart(product._id)}> Add to Cart 
          
          </button>

        </div>
      ) : null}
    </div>
  );
};
export default OneProduct;
