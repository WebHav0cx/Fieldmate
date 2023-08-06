import React from "react";
import Nav from "../../common/Nav";

function Header() {
  return (
    <div className="font-inria">
      <section className="bg-default-background-100">
        <div className="bg-farm-bg flex flex-col justify-center flex-wrap bg-no-repeat bg-center bg-cover w-full h-[28.3125rem]">
          <Nav />
          <h2 className="text-center flex justify-center flex-wrap items-center mx-auto my-auto text-[4.374rem] w-[65.875rem] font-bold">
            Reviews and Feedback
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Header;
