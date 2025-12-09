import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData, checValidateName } from "../utils/validate";
import { auth } from "../utils/firebaseConfig";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AVATAR } from "../utils/constansts";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleOnClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );

    let nameMsg = null;

    if (!isSignIn) {
      // Only in Sign Up mode
      nameMsg = checValidateName(name.current?.value);
    }
    setErrorMsg(nameMsg || message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMsg(error.code + " - " + error.message);
        });
    }
  };
  return (
    <>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/30c8b9f4-3db9-4b3b-a1ee-8fa56531b712/web/IN-en-20251201-TRIFECTA-perspective_c7623e8e-c406-43d2-9d9a-0140ce19ac84_large.jpg"
          alt="netflix-logo"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
        className="absolute mx-auto my-36 left-0 right-0 text-white w-4/12 p-12 bg-black/80"
      >
        <h1 className="font-bold text-3xl my-2">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 ">{errorMsg}</p>
        <button className="p-4 bg-red-700 my-4 w-full" onClick={handleOnClick}>
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
        <p className="py-4  cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registerd? Sign in now."}
        </p>
      </form>
    </>
  );
};

export default Login;
