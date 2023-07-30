import React from "react";
import log from "../../assets/images/log.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

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
          <div className="flex flex-col gap-4">
            <div className="flex justify-around pt-2">
              <p className="text-3xl">FIELDMATE</p>
              <div className="flex gap-4">
                <p>have an account?</p>

                <Link to="/login" className="text-primary-100">
                  Sign in!
                </Link>
              </div>
            </div>
            <div className="flex flex-col m-auto max-w-[29rem]">
              <div className="flex flex-col gap-6 justify-center items-center">
                <div className=" flex flex-col text-center gap-5">
                  <h2 className="text-4xl font-bold">
                    Get Started With FIELDMATE
                  </h2>
                  <p className="text-faded-100">Getting started is easy</p>
                </div>
                <div className="flex flex-row gap-4">
                  <button className="flex p-4 w-36 justify-center rounded-md gap-4 text-xs bg-white items-center">
                    <Icon className="text-2xl" icon="flat-color-icons:google" />
                    Google
                  </button>
                  <button className="flex p-4 w-36 justify-center rounded-md gap-4 text-xs bg-white items-center">
                    <Icon className="text-2xl" icon="logos:facebook" />
                    Facebook
                  </button>
                </div>
                <div className="bar">
                  <hr />
                  <span>or continue with</span>
                </div>
                <div></div>
              </div>
              <form className="flex flex-col gap-4 w-full">
                <input
                  required
                  className="p-3 rounded-lg border-none outline-none focus:outline-none"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  required
                  className="p-3 rounded-lg border-none outline-none focus:outline-none"
                  type="email"
                  placeholder="Email"
                />
                <input
                  required
                  className="p-3 rounded-lg border-none outline-none focus:outline-none"
                  type="password"
                  placeholder="Password"
                />

                <input
                  type="password"
                  required
                  className="p-3 rounded-lg border-none outline-none focus:outline-none"
                  placeholder="password"
                />

                <button
                  className="bg-default-green p-3 rounded-lg text-white"
                  type="submit"
                >
                  Create Account
                </button>

                <p className="text-sm font-light text-terms-100">
                  By continuing you indicate that you read and agreed to the
                  Terms of Use
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
// translate transform , relative
