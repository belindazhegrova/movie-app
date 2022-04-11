import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Switcher from "./Switcher";
import Cart from "./pages/Cart/Cart";

function App() {
  const profile = useSelector((state) => state?.profile);
  const successLogin = profile?.successLogin;

  // console.log("TOKENI NLOCAL", localStorage.getItem("token"));

  return (
    <div>
      <Header />
      <Switcher />
      <Routes>
        {successLogin?.data?.token && <Route path="/" element={<Home />} />}
        <Route path="movieDetails" element={<MovieDetails />} />

        <Route path="login" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
