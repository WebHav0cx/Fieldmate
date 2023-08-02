import React from "react";
import { Icon } from "@iconify/react";

function Testimonial() {
  return (
    <div className="font-inria">
      <section className="flex flex-col justify-center items-center bg-default-background gap-6">
        <h2 className="text-primary-100 text-5xl font-bold">Testimonials</h2>
        <div className="flex justify-center items-center w-full bg-gradient-to-r from-custom-orange to-transparent">
          <button className=" w-9 h-8">
            <Icon
              className="w-14 h-14"
              icon="ic:sharp-arrow-back-ios"
              color="white"
            />
          </button>
          <div className="w-[77.875rem] h-[26.875rem] flex flex-col justify-center items-center gap-[1.62rem]">
            <p className="text-4xl font-bold text-center">
              FIELDMATE made farming equipment so easy and affordable. Their
              website is user-friendly and their customer service is top-notch.
              Thank you for making my farming journey easy
            </p>
            <div className="flex flex-col justify-center items-center">
              <p className="text-4xl font-bold">Joel Emmanuel</p>
              <p className="text-4xl font-bold">Ikere ekiti</p>
            </div>
          </div>
          <button>
            <Icon
              className="w-14 h-14"
              icon="ic:sharp-arrow-back-ios"
              color="white"
              rotate={2}
            />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
