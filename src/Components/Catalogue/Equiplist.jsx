import React from "react";

import harrow from "../../assets/images/harrow.png";
import harvester from "../../assets/images/haverster.png";

const harrowImg = harrow;
const harvesterImg = harvester;

const EquipmentList = [
  {
    imgUrl: harrowImg,
    description:
      "The John Deere 6130R Tractor is a versatile workhorse designed to tackle various agricultural tasks with efficiency and precision.",
    name: "John Deere 6130R Tractor",
  },
  {
    imgUrl: harvesterImg,
    description:
      "The Disc Harrow - 20-Blade is a cutting-edge implement designed to level, break clods, and incorporate crop residues into the soil with 20 heavy-duty blades",
    name: "Disc Harrow - 20-Blade",
  },
  {
    imgUrl: harvesterImg,
    description:
      "The Disc Harrow - 20-Blade is a cutting-edge implement designed to level, break clods, and incorporate crop residues into the soil with 20 heavy-duty blades",
    name: "Disc Harrow - 20-Blade",
  },
  {
    imgUrl: harvesterImg,
    description:
      "The Disc Harrow - 20-Blade is a cutting-edge implement designed to level, break clods, and incorporate crop residues into the soil with 20 heavy-duty blades",
    name: "Disc Harrow - 20-Blade",
  },
];

function Equiplist() {
  return (
    <div className="font-inria">
      <section className="bg-default-background">
        <div className="flex justify-center items-center flex-wrap pt-10 pb-40">
          <ul
            role="list"
            className="flex flex-wrap gap-8 items-center gap-x-[2.9375rem] gap-y-[1.25rem] justify-center"
          >
            {EquipmentList.map((equipments) => (
              <li className="list-none" key={equipments.name}>
                <div className="flex flex-col rounded-md border border-black p-[1px] shadow-md items-center justify-start gap-4 w-[38.125rem] h-[53.9375rem]">
                  <img
                    className="h-[34.375rem] w-full"
                    src={equipments.imgUrl}
                    alt={equipments.name}
                  />
                  <div className="flex flex-col gap-4 p-4">
                    <h3 className="font-bold leading-7 text-4xl">
                      {equipments.name}
                    </h3>
                    <p className="text-[2rem] font-normal ">
                      {equipments.description}
                    </p>
                    <button className="font-normal text-2xl text-white mb-2 bg-default-green rounded-xl w-[10.625rem] h-14">
                      View more
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Equiplist;
