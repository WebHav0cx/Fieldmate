import React from "react";
import { Icon } from "@iconify/react";
function Suscribe() {
  return (
    <div className="font-inria">
      <section className="bg-suscribe-bg bg-no-repeat bg-center bg-cover w-full h-[29.375rem]">
        <div className="flex flex-col justify-center items-center my-auto gap-5">
          <h2 className="mt-40 text-[2rem] text-white font-bold">
            Subscribe to our newspaper to get daily updates
          </h2>
          <div className="flex gap-4">
            <input
              className="w-[34rem] outline-none focus:outline-none p-3 rounded-lg"
              placeholder="Input your email here"
              type="text"
            />
            <button className="bg-default-green p-3 rounded-md">
              <Icon className="h-6 w-6" icon="ion:send" color="white" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Suscribe;
