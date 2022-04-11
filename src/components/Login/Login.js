import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Api/Requests";
import { useNavigate, Link } from "react-router-dom";

import "../Login/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const profile = useSelector((state) => state.profile);
  const successLogin = profile?.successLogin;
  const errorLogin = profile?.errorLogin;
  // console.log("error", errorLogin);
  console.log("prifieee", profile);

  useEffect(() => {
    if (successLogin?.data?.token) {
      navigate("/");
    }
  }, [successLogin]);

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="Login">
      <span style={{ marginBottom: "30px", color: "red" }}>
        {errorLogin && "email or password incorrect"}
      </span>
      <div className="form-outline mb-4">
        <label style={{ color: "white" }}>Email address</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          className="form-control"
          onChange={handleOnChangeEmail}
        />
      </div>

      <div className="form-outline mb-4">
        <label style={{ color: "white" }} for="form2Example1">
          Pasword
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          className="form-control"
          onChange={handleOnChangePassword}
        />
      </div>
      <div className="text-center">
        <button
          style={{}}
          onClick={handleOnSubmit}
          type="button"
          className="btn btn-primary btn-block mb-4"
        >
          Login
        </button>
      </div>

      <div className="text-center">
        <p>
          <lable style={{ color: "white" }}>Not a member?</lable>
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
