import React from "react";
import log from "../../assets/images/log.png";
import logo from "../../assets/images/logo.png";
import { Icon } from "@iconify/react";

function Signup() {
  return (
    <div className="font-inria">
      <div className="h-screen flex">
        <div className="w-1/2">
          <img
            className="h-full w-full object-cover"
            src={log}
            alt="Side image"
          />
        </div>
        <div className="w-1/2 bg-default-background">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <img
                className="w-[258px] h-[100px]"
                // src={logo}
                alt="Field mate logo"
              />
              <div className="flex gap-4">
                <p>Don’t have an account?</p>
                <a className="text-primary-100" href="">
                  Sign up!
                </a>
              </div>
            </div>
            <div className="flex flex-col m-auto max-w-md">
              <div className="flex flex-col gap-6 justify-center items-center">
                <div className=" flex flex-col text-center gap-5">
                  <h2 className="text-4xl font-bold">
                    Get Started With FIELDMATE
                  </h2>
                  <p className="text-faded-100">Getting started is easy</p>
                </div>
                <div className="flex flex-row gap-4">
                  <button className="flex p-4 justify-center rounded-md gap-4 text-xs bg-white items-center">
                    <Icon className="text-2xl" icon="flat-color-icons:google" />
                    Google
                  </button>
                  <button className="flex p-4 justify-center rounded-md gap-4 text-xs bg-white items-center">
                    <Icon className="text-2xl" icon="logos:facebook" />
                    Facebook
                  </button>
                </div>
                <div>
                  <p>or continue with</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Icon className="text" icon="flat-color-icons:google" /> */}
    </div>
  );
}

export default Signup;
