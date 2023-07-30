import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <header className="pt-2">
        <nav className="flex justify-around w-full items-center flex-row">
          <p className="text-3xl">FIELDMATE</p>
          <div className="flex gap-28">
            <ul className="flex justify-center items-center gap-8">
              <li>Home</li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>Equipment Catalog</li>

              <li>Review</li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Link
              to="/login"
              className="bg-default-green w-24 h-10 justify-center items-center flex rounded-lg"
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
