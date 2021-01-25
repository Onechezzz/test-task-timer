import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";
import "firebase/auth";
import { BrowserRouter } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";


require("dotenv").config({ path: ".env" });
//
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyDDyhtHkoanQkm6Hv7g2G2tyZBLY5pz5ps",
//   authDomain: "fir-basics-b5433.firebaseapp.com",
//   databaseURL: "https://fir-basics-b5433-default-rtdb.firebaseio.com",
//   projectId: "fir-basics-b5433",
//   storageBucket: "fir-basics-b5433.appspot.com",
//   messagingSenderId: "1001019565427",
//   appId: "1:1001019565427:web:3062b95c6f85104d5e1106"
// };
//
// firebase.initializeApp(firebaseConfig);

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>{application}</React.StrictMode>,
  document.getElementById("root")
);
