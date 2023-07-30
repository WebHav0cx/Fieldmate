import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="flex flex-col bg-default-green h-[22rem] justify-center my items-center gap-7">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-white text-4xl font-normal">FIELDMATE</h1>
          <ul className="flex text-white text-xl gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Equipment Catalog</li>
            <li>Review</li>
          </ul>
          <div className="flex gap-5">
            <Icon className="w-8 h-8" icon="fe:instagram" color="white" />
            <Icon className="w-8 h-8" icon="ri:twitter-fill" color="white" />
            <Icon className="w-8 h-8" icon="uiw:linkedin" color="white" />
            <Icon
              className="w-8 h-8"
              icon="akar-icons:facebook-fill"
              color="white"
            />
          </div>
        </div>
        <div className="h-[0.0625rem;] w-full bg-white mt-14"></div>
        <div className="flex items-center justify-center gap-1">
          <Icon icon="bx:copyright" color="white" />
          <p className="text-white">
            FIELDMATE, {currentYear} All rights reserved{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
