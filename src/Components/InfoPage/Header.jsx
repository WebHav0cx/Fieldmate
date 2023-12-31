import React from "react";
import Nav from "../../common/Nav";

function Header() {
  return (
    <div>
      <section className="bg-default-background-100">
        <div className="bg-farm-bg flex flex-col justify-center flex-wrap bg-no-repeat bg-center bg-cover w-full h-[20.3125rem]">
          <Nav />
          <h2 className="text-center flex justify-center flex-wrap items-center mx-auto my-auto text-[4.374rem] font-bold">
            Profile Information
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Header;
