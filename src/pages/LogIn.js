import React, { Component, useState, useEffect,useContext } from "react";
import "../App.css";
import firebase from "firebase";
import StopWatch from "./Stopwatch";
import SignUp from "./SignUp";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";

const LogIn = () => {
  const handleSubmit = (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
      } catch (error) {
        alert(error);
      }
    };
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
      return <Redirect to="/stopwatch" />;
    }
  return (

        <form onSubmit={handleSubmit} className="login-block">
         <h1>Login</h1>
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
            <button type="submit"  className="submit-btn">Submit</button>
             </form>

  );
};

export default LogIn;
