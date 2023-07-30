import React from "react";
import Search from "./Search";
import Tractor from "../../assets/images/tractor.png";
import Harrow from "../../assets/images/harrow.png";
import Cultivator from "../../assets/images/cultivator.png";
import Plow from "../../assets/images/plow.png";
import Harvester from "../../assets/images/plow.png";
import Drill from "../../assets/images/seeddrill.png";

function Categories() {
  return (
    <div className="font-inria">
      <section className=" flex flex-col gap-56 bg-default-background pb-10">
        <div className="relative">
          <div className="absolute -bottom-44 left-28 mx-auto">
            <Search />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="font-bold text-2xl">
              We Promise To Find You The Right Equipment
            </p>
            <h2 className="text-5xl font-bold text-primary-100">
              Browse Machinery Categories
            </h2>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-4">
            <div className="inline-flex flex-col items-center justify-center gap-4">
              <img
                className="w-[38rem] h-[35rem]"
                src={Tractor}
                alt="Tractor Png"
              />
              <p>TRACTOR</p>
            </div>
            <div className="inline-flex flex-col items-center justify-center gap-4">
              <img
                className="w-[38rem] h-[35rem]"
                src={Harrow}
                alt="Harrow png"
              />
              <p>HARROW</p>
            </div>
            <div className="inline-flex flex-col items-center justify-center gap-4">
              <img
                className="w-[38rem] h-[35rem]"
                src={Cultivator}
                alt="Cultivator png"
              />
              <p>CULTIVATOR</p>
            </div>
            <div className="inline-flex flex-col items-center justify-center gap-4">
              <img className="w-[38rem] h-[35rem]" src={Plow} alt="Plow png" />
              <p>PLOW</p>
            </div>
            <div className="inline-flex flex-col items-center justify-center gap-4">
              <img
                className="w-[38rem] h-[35rem]"
                src={Drill}
                alt="Seed drill png"
              />
              <p>SEED DRILL</p>
            </div>
            <div className="inline-flex flex-col items-center justify-center gap-4">
              <img
                className="w-[38rem] h-[35rem]"
                src={Harvester}
                alt="Harvester png"
              />
              <p>HARVESTER</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
