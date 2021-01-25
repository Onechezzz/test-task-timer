import React, { Component, useState, useEffect } from "react";
import "../App.css";
import firebase from "firebase";
import LogIn from "./LogIn";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [hasAccount, setHasAccount] = useState(false);
  const [id, setId] = useState(null);

  const handleChange = ({ target: { value, id } }) => {
    setId(value);
    console.log(value);
  };
  const createAccount = (value) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setHasAccount(true);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="login-block">
      <h4>Register</h4>
      <input
        type="text"
        id="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <NavLink
        to={{
          pathname: "./",
        }}
      >
        <input
          type="submit"
          value="Register"
          className="submit-btn"
          onClick={createAccount}
        />
      </NavLink>
    </div>
  );
};

export default SignUp;
