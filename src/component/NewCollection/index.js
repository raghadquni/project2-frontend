import React, { useEffect , useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css"

const BASE_URL = "http://localhost:5000";

const NewCollection = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getlastProduct();
  },[])

  const getlastProduct = async () => {
    const products = await axios.get(`${BASE_URL}/products/lastproduct`);
    setProducts(products.data);
  
  };

  const inside = (id) => {
    console.log(id);
    navigate(`/OneProduct/${id}`);
  };

  return (
    <>
          <h1> All New Collection </h1>
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
    </>
  );
};

export default NewCollection;
