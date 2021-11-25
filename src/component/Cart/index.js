import React , {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email , setEmail] = useState("");


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
    setUsers(product.data);
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
    window.location.reload(false)
  };

  return (
    <>
    <h1> Your Shopping Cart</h1>
    {users.length && 
    users.map((ele, i) => {
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

        </>
      )
    })
}
    </>
  );
};

export default Cart;