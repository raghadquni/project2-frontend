import React from "react";
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


import './App.css';

function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/Cart" element={<Cart />} />
    <Route exact path="/Login" element={<Login />} />
    <Route exact path="/FAQ" element={<FAQ />} />
    <Route exact path="/NewCollection" element={<NewCollection />} />
    <Route exact path="/Shop" element={<Shop />} />
    <Route exact path="/SignUp" element={<SignUp />} />
    <Route exact path="/StorePolicies" element={<StorePolicies />} />
    <Route exact path="/Support" element={<Support />} />
    </Routes>
    <Footer />

    </>
  )}
export default App;
