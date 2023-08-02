import React from "react";
import Nav from "../../common/Nav";

function Header() {
  return (
    <div className="font-inria">
      <section className="bg-default-background-100">
        <div className="bg-farm-bg bg-no-repeat bg-center bg-cover w-full h-[28.3125rem]">
          <Nav />
          <h2 className="text-center flex justify-center items-center mx-auto my-auto pb-40 mt-44 text-[4.374rem] w-[65.875rem] h-[11.3125rem] font-bold">
            Explore our farm equipment catalogue
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Header;
