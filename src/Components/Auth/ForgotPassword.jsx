import React from "react";
import log from "../../assets/images/log.png";
import { Link } from "react-router-dom";

function ForgotPassword() {
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
              <Link to="/" className="text-3xl">
                FIELDMATE
              </Link>
              <div className="flex gap-4">
                <p>Don’t have an account?</p>

                <Link to="/signup" className="text-primary-100">
                  Sign up!
                </Link>
              </div>
            </div>
            <div className="flex flex-col m-auto max-w-[29rem]">
              <div className="flex flex-col gap-6 justify-center items-center">
                <div className=" flex flex-col text-center gap-5">
                  <h2 className="text-4xl font-bold">Forgot password</h2>
                  <p className="text-faded-100">
                    Enter your email address to send a link to reset your
                    password
                  </p>
                </div>
              </div>
              <form className="flex flex-col gap-10 w-full mt-16">
                <input
                  required
                  className="p-3 rounded-lg"
                  type="email"
                  placeholder="Email Address"
                />

                <button
                  className="bg-default-green p-3 rounded-lg text-white"
                  type="submit"
                >
                  Send reset password link
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
// <Icon icon="fluent-emoji:check-mark" />
