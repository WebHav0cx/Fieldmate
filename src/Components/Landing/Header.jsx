import React from "react";
import Nav from "../../common/Nav";
import { Icon } from "@iconify/react";

// import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="font-inria">
      <div className="bg-header-bg min-h-[1043px] overflow-hidden bg-no-repeat bg-cover bg-center">
        <Nav />
        <div className="flex flex-col justify-center items-center gap-4 max-w-full">
          <div className="flex flex-col justify-center items-center gap-8 mt-20 mx-auto h-[449px] w-[799px]">
            <h1 className="text-center font-bold font-inria leading-normal text-7xl">
              Farm equipment sharing network digital platform connects farmers
            </h1>
            <p className="shadow-inner text-[2rem] font-bold text-white w-[27rem]">
              Boost Your Farming Efficiency
            </p>
          </div>
          <div className="flex justify-between gap-8 rounded-lg w-[44rem] bg-white p-3">
            <input
              className="border-none px-5 w-[30rem] outline-none focus:outline-none "
              placeholder="Search for Something..."
              type="text"
            />
            <div className="border border-r-1 border-black ml-0"></div>
            <button className="flex gap-4 justify-center items-center py-1 rounded-md ">
              <Icon className="w-8 h-8" icon="majesticons:search-line" />
              <p className="text-3xl font-bold text-search-100 pr-10">Search</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
