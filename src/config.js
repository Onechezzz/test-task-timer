import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDDyhtHkoanQkm6Hv7g2G2tyZBLY5pz5ps",
  authDomain: "fir-basics-b5433.firebaseapp.com",
  databaseURL: "https://fir-basics-b5433-default-rtdb.firebaseio.com",
  projectId: "fir-basics-b5433",
  storageBucket: "fir-basics-b5433.appspot.com",
  messagingSenderId: "1001019565427",
  appId: "1:1001019565427:web:3062b95c6f85104d5e1106"
});

export default firebaseConfig;
