import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="font-inria">
      <header className="pt-2">
        <nav className="flex justify-around w-full items-center flex-row">
          <Link to="/" className="text-3xl">
            FIELDMATE
          </Link>
          <div className="flex gap-28">
            <ul className="flex justify-center items-center gap-8">
              <Link to="/">Home</Link>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/equipment-catalogue">Equipment Catalogue</Link>
              </li>

              <Link to="/rewiew">Review</Link>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Link
              to="/login"
              className="bg-default-green text-white w-24 h-10 justify-center items-center flex rounded-lg"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="border border-solid border-white w-24 h-10 justify-center items-center flex rounded-lg"
            >
              Signup
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
