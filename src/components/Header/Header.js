import React, { useState, useEffect } from "react";
import { Feather, Search } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import { clearAlldata } from "../../actions/profileAction";
import SearchBar from "../SearchBar/SearchBar";

const styles = {
  container: {
    position: "relative",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    jusitfyContent: "center",
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
  },
  homeButton: {
    textDecoration: "none",
    color: "white",
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 20,
  },
  rightContainer: {
    display: "flex",
    jusitfyContent: "space-between",
    alignItems: "center",
  },
  button: {
    textDecoration: "none",
    backgroundColor: "white",
    color: "black",
    fontWeight: "600",
    fontSize: 14,
    padding: "10px 20px 10px 20px",
    borderRadius: 5,
  },
  linkButton: {
    textDecoration: "none",
    color: "white",
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10,
  },
};

const Header = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state?.profile);
  const successLogin = profile?.successLogin;

  const movies = useSelector((state) => state?.movie);
  const cart = movies?.cart;

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(clearAlldata());
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        <span style={styles.title}>FILMA24.5</span>
        {successLogin?.data?.token && (
          <Link to="/" style={styles.homeButton}>
            Home
          </Link>
        )}
      </div>
      <div style={styles.rightContainer}>
        {!successLogin?.data?.token ? (
          <>
            <Link to="/register" style={styles.button}>
              Register
            </Link>
            <Link to="/login" style={styles.linkButton}>
              Login
            </Link>
          </>
        ) : (
          <>
            <SearchBar />{" "}
            <div style={{ position: "relative" }}>
              <Link to="/cart" style={{ ...styles.linkButton }}>
                Cart
              </Link>
              {cart?.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -8,
                    right: 5,
                    color: "red",
                  }}
                >
                  {cart?.length}
                </span>
              )}
            </div>
            <input
              type="button"
              onClick={logout}
              value="Logout"
              style={styles.button}
            />{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
