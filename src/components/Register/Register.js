import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../Api/Requests";
import "../Register/Register.css";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleOnChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(register(email, password, confirmPassword));
  };

  return (
    <div className="Register">
      <div className="form-outline mb-4">
        <label class="form-label" for="form2Example1">
          Email address
        </label>
        <input
          type="text"
          id="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleOnChangeEmail}
        />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" for="form2Example2">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control"
          name="password"
          value={password}
          onChange={handleOnChangePassword}
        />
      </div>
      <div className="form-outline mb-4">
        <label className="form-label" for="form2Example2">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChangeConfirmPassword}
        />
      </div>

      <button
        onClick={handleOnSubmit}
        type="button"
        className="btn btn-primary btn-block mb-4"
      >
        Sign in
      </button>
    </div>
  );
};

export default Register;
