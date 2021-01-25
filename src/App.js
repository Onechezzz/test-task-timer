import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import firebase from "firebase";
// import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import StopWatch from "./pages/Stopwatch";
import { AuthProvider } from "./pages/Auth";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/stopwatch" component={StopWatch} />
        </Switch>
        </Router>
      </AuthProvider>
  );
};

export default App;
