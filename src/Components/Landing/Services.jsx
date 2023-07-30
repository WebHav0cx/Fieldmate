import React from "react";
import Farm from "../../assets/images/tractor1.png";
import Expert from "../../assets/images/tractor2.png";
import Connect from "../../assets/images/tractor3.png";
function Services() {
  return (
    <div className="font-inria">
      <section className="flex flex-col flex-wrap justify-center items-center gap-11 bg-default-background pb-16 ">
        <h2 className="text-primary-100 text-5xl font-bold">Our Services</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <div className="inline-flex flex-col justify-center items-center w-[23.375rem] h-[26.375rem] gap-4">
            <img
              className="w-[21rem] h-[18.75rem]"
              src={Farm}
              alt="Farming equipment rental"
            />
            <p className="font-bold text-4xl text-center">
              Farming equipment rental
            </p>
          </div>
          <div className="inline-flex flex-col justify-center items-center w-[23.375rem] h-[26.375rem] gap-4">
            <img
              className="w-[21rem] h-[18.75rem]"
              src={Expert}
              alt="Farming equipment rental"
            />
            <p className="font-bold text-4xl text-center">
              Expert equipment maintenance
            </p>
          </div>
          <div className="inline-flex flex-col justify-center items-center w-[23.375rem] h-[26.375rem] gap-4">
            <img
              className="w-[21rem] h-[18.75rem]"
              src={Connect}
              alt="Farming equipment rental"
            />
            <p className="font-bold text-4xl text-center">
              Connect with farmers anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
