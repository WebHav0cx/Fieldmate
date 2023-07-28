import React from "react";
import Logo from "../../assets/images/logo.png";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="font-inria">
      <div className="bg-header-bg min-h-[1043px] overflow-hidden bg-no-repeat bg-cover bg-center">
        <header>
          <nav className="flex justify-around w-full items-center flex-row">
            <img className="w-32 h-28" src={Logo} alt="Fieldmate logo" />
            <div className="flex gap-28">
              <ul className="flex justify-center items-center gap-8">
                <li>About</li>
                <li>Equipment Catalog</li>
                <li>Profiles</li>
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
                className=" w-24 h-10 justify-center items-center flex rounded-lg"
              >
                Signup
              </Link>
            </div>
          </nav>
        </header>
        <div className="flex flex-col justify-center items-center gap-4 max-w-full">
          <div className="flex flex-col justify-center items-center gap-8 mx-auto h-[449px] w-[799px]">
            <h1 className="text-center font-bold font-inria leading-normal text-7xl">
              Farm equipment sharing network digital platform connects farmers
            </h1>
            <p className="shadow-inner text-white">
              Boost Your Farming Efficiency
            </p>
            {/* text-align: center; font-family: Inria Sans; font-size: 4.375rem;
            font-style: normal; font-weight: 700; line-height: normal; */}
          </div>
          <div className="flex justify-around gap-8 rounded-lg w-96 bg-white p-3">
            <input
              className="border-none outline-none focus:outline-none"
              placeholder="Search for Something..."
              type="text"
            />
            <div className=""></div>
            <button className="px-2 py-1 rounded-md hover:bg-default-green hover:text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
