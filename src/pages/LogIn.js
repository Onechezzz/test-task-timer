import React, { Component, useState, useEffect } from "react";
import "../App.css";
import firebase from "firebase";
import StopWatch from "./Stopwatch";
import SignUp from "./SignUp";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [hasAccount, setHasAccount] = useState(false);
  const [id, setId] = useState(null);

  const handleChange = ({ target: { value, id } }) => {
    setId(value);
    console.log(value);
  };
  const loginToAccount = (value) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setHasAccount(true);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="login-block">
      <h4>Login</h4>
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
          pathname: "./stopwatch",
        }}
      >
        <input
          type="submit"
          value="Login"
          className="submit-btn"
          onClick={loginToAccount}
        />
      </NavLink>
      <p>
        Don’t have an account yet?
        <NavLink
          to={{
            pathname: "./signup",
          }}
        >
          Register
        </NavLink>
      </p>
    </div>
  );
};

export default LogIn;
