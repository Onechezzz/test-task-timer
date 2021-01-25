import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import firebase from "firebase";

require("firebase/firestore");

const StopWatch = () => {
  const [mobileTimer, setMobileTimer] = useState(null);
  const [desktopTimer, setDesktopTimer] = useState(null);
  const incrementMobile = useRef(null);
  const incrementDesktop = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [uid, setUid] = useState(0);
  const InnerWidth = window.innerWidth;
  const db = firebase.firestore();

  const handleSendData = () => {
    console.log("Console: desk", desktopTimer, "mob:", mobileTimer);
    // e.preventDefault();
    const currentUserRef = db.collection("users").doc(uid);

    {
      isDesktop
        ? currentUserRef
            .update({
              DesktopStopWatchValue: desktopTimer,
            })
            .then(function () {
              console.log("Document successfully updated!");
            })
            .catch(function (error) {
              console.error("Error updating document: ", error);
            })
        : currentUserRef
            .update({
              MobileStopWatchValue: mobileTimer,
            })
            .then(function () {
              console.log("Document successfully updated!");
            })
            .catch(function (error) {
              console.error("Error updating document: ", error);
            });
    }
  };
  useEffect(() => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(
            `${doc.id} => ${JSON.stringify(doc.data().DesktopStopWatchValue)}`
          );
          setUid(doc.id);
          setMobileTimer(doc.data().MobileStopWatchValue);
          setDesktopTimer(doc.data().DesktopStopWatchValue);
        });
      });
    console.log("Inner", InnerWidth);
    let isMobileLet,
      isDesktopLet = null;
    {
      InnerWidth < 720 ? (isMobileLet = true) : (isMobileLet = false);
    }
    {
      InnerWidth > 720 ? (isDesktopLet = true) : (isDesktopLet = false);
    }
    {
      InnerWidth > 720 ? setIsDesktop(true) : setIsDesktop(false);
    }
    {
      isDesktopLet ? handleDesktopStart() : handleMobileStart();
    }
    console.log("IsMobile", isMobileLet, "isDesktop", isDesktopLet);
    // window.addEventListener("beforeunload", handleReset)
  }, []);

  const handleMobileStart = () => {
    incrementMobile.current = setInterval(() => {
      setMobileTimer((mobileTimer) => mobileTimer + 1);
    }, 1000);
  };
  const handleDesktopStart = () => {
    incrementDesktop.current = setInterval(() => {
      setDesktopTimer((desktopTimer) => desktopTimer + 1);
    }, 1000);
  };

  const formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div>
      <div className="app">
        <h3>Desktop</h3>
        <div className="stopwatch-card">
          <p>{formatTime(desktopTimer)}</p>
          <div className="buttons">
            <button onClick={handleSendData}>Send data</button>
          </div>
        </div>
      </div>
      <div className="app">
        <h3>Mobile </h3>
        <div className="stopwatch-card">
          <p>{formatTime(mobileTimer)}</p>
          <div className="buttons">
            <button onClick={handleSendData}>Send data</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
