import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css"; 

const BASE_URL = "http://localhost:5000";

const Shop = () => {
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    const products = await axios.get(`${BASE_URL}/products/allProduct`);
    setProduct(products.data);
  };

  const inside = (id) => {
    console.log(id);
    navigate(`/product`);
  };

  return (
    <>
      <div className="allProduct">
        {products.map((item, i) => {
          return (
            <div className="all">
              <div
                onClick={() => {
                  inside(item._id);
                }}>
                <img className="proImg" src={item.productImg} alt="proImg" />
                <h5> {item.productName} </h5>
                <h5> {item.price} SR </h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
