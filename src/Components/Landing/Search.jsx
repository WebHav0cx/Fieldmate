import React from "react";
import { Icon } from "@iconify/react";

function Search() {
  return (
    <div className="font-inria">
      <div className="flex flex-col gap-9 w-[71rem] h-48 bg-default-green justify-center items-center my-auto mx-auto">
        <h2 className="text-5xl font-bold text-white">
          Find The Right Equipment
        </h2>
        <div className="flex gap-16">
          <input
            className="rounded-lg  w-[17.5rem] h-14 text-center"
            placeholder="Equipment Name..."
            type="search"
          />
          <input
            className="rounded-lg  w-[17.5rem] h-14 text-center"
            placeholder="Rental Duration Date..."
            type="search"
          />
          <button className="rounded-lg flex w-[17.5rem] gap-4 h-14 justify-center items-center bg-black text-white">
            <p>FIND EQUIPMENT</p>
            <Icon
              className="w-6 h-6"
              icon="tabler:circle-arrow-right"
              color="white"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
