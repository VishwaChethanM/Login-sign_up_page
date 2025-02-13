import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="lg:h-screen lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h1 className="lg:font-bold lg:text-4xl lg:absolute lg:top-10 lg:text-center lg:text-black">
          Log in page
        </h1>
        <div className="lg:flex lg:items-center lg:space-x-4 lg:p-4">
          <h1 className="lg:font-bold lg:text-2xl">User name:</h1>
          <input
            type="text"
            placeholder="Enter your name"
            className="lg:p-2 lg:text-black lg:rounded lg:border lg:border-gray-700"
          />
        </div>
        <div className="lg:flex lg:items-center lg:space-x-4 lg:p-4">
          <h1 className="lg:font-bold lg:text-2xl">Password:</h1>
          <input
            className="lg:p-2 lg:text-black lg:rounded lg:border required lg:border-gray-700"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="lg:flex lg:space-x-4 lg:mt-4">
          <button className="lg:bg-blue-500 lg:text-white lg:font-bold lg:py-2 lg:px-4 lg:rounded">
            Submit
          </button>
          <Link to="/sigup">
            <button className="lg:bg-green-500 lg:text-white lg:font-bold lg:py-2 lg:px-4 lg:rounded">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
