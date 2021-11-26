import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
            title: 'Success',
            showConfirmButton: false,
            timer: 2000
      });
    }



 
  useEffect(() => {
    getOneProdect();
  }, []);

  const getOneProdect = async () => {
    const product = await axios.get(`${BASE_URL}/products/allProduct`);
    console.log(product);

    setProduct(product.data.find((elm) => elm._id == id));
  };

  return (
    <div>
      {product ? (
        <div className="product">
          <img className="proImg" src={product.productImg} alt="mmm" />
          <h5> {product.productName} </h5>
          <h5> {product.price} SR </h5>
          <button onClick={() => addtoCart(product._id)}> Add to Cart 
          
          </button>

        </div>
      ) : null}
    </div>
  );
};
export default OneProduct;
