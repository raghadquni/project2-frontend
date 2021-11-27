import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Login from "./component/Login";
import FAQ from "./component/FAQ";
import NewCollection from "./component/NewCollection";
import Shop from "./component/Shop";
import SignUp from "./component/SignUp";
import StorePolicies from "./component/StorePolicies";
import Support from "./component/Support";
import OneProduct from "./component/OneProduct"
import Shoes from "./component/Shoes"
import Tops from "./component/Tops"
import BottomClothes from "./component/BottomClothes"
import Dress from "./component/Dress"




import './App.css';

function App() {
  const [logged, setlogged] = useState(false);


  const checkUser = () => {
    if (JSON.parse(localStorage.getItem("User"))?.email) {
      setlogged(true);
    }
  }

  return (
    <>
    <Header logged={logged} checkUser={checkUser}/>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/Cart" element={<Cart />} />
    <Route exact path="/Login" element={<Login checkUser={checkUser}/>} />
    <Route exact path="/FAQ" element={<FAQ />} />
    <Route exact path="/NewCollection" element={<NewCollection />} />
    <Route exact path="/Shop" element={<Shop />} />
    <Route exact path="/SignUp" element={<SignUp />} />
    <Route exact path="/StorePolicies" element={<StorePolicies />} />
    <Route exact path="/Support" element={<Support />} />
    <Route exact path="/OneProduct/:id" element={<OneProduct />} />
    <Route exact path="/Shoes" element={<Shoes />} />
    <Route exact path="/Tops" element={<Tops />} />
    <Route exact path="/BottomClothes" element={<BottomClothes />} />
    <Route exact path="/Dress" element={<Dress />} />


    {/* <Route exact path="/LogOut" element={<LogOut />} /> */}
    </Routes>
    <Footer />

    </>
  )}
export default App;
