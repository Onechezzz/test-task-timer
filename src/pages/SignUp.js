import React, { Component, useState, useEffect } from "react";
import "../App.css";
import firebase from "firebase";
import LogIn from "./LogIn";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import index from "../index";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../config";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
      return <Redirect to="/stopwatch" />;
  }
  return (

    <form onSubmit={handleSubmit} className="login-block">
     <h1>Register</h1>
     <input
       type="text"
       id="email"
       name="email"
       placeholder="Email"

     />
     <input
       type="password"
       id="password"
       name="password"
       placeholder="Password"

     />

       <button type="submit"  className="submit-btn">Register</button>

         </form>

  );
};

export default SignUp;
