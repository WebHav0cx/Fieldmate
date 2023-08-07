import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import log from "../../assets/images/log.png";

function RegistrationSuccess() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

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
            <div className="flex items-start justify-start pl-4 pt-2">
              <Link to="/" className="text-3xl">
                FIELDMATE
              </Link>
            </div>
            <div className="flex flex-col m-auto max-w-[29rem] pt-16">
              <div className="flex flex-col gap-6 justify-center items-center">
                <div className=" flex flex-col text-center gap-5">
                  <h2 className="text-4xl font-bold">Congratulations</h2>
                  <h2 className="text-4xl font-bold">
                    Your account is ready to use
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-10 w-full mt-16">
                <Icon
                  className="w-44 h-44"
                  icon="fluent-emoji-high-contrast:check-mark"
                  color="#025002"
                />

                <button
                  className="bg-default-green p-3 rounded-lg w-[31rem] text-white"
                  type="button"
                  onClick={handleGetStarted}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSuccess;
