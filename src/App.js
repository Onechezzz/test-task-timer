import React, { useEffect } from "react";
import "./App.css";
import firebase from "firebase";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import StopWatch from "./pages/Stopwatch";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/stopwatch" component={StopWatch} />
    </div>
  );
};

export default App;
