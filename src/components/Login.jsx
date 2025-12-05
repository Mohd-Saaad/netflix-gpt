import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
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
        action=""
        className="absolute mx-auto my-36 left-0 right-0 text-white w-4/12 p-12 bg-black/80"
      >
        <h1 className="font-bold text-3xl my-2">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 bg-red-700 my-4 w-full">
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
