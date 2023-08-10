import React from "react";
import avatar from "../../assets/images/avater.png";

function InfoUpdate() {
  return (
    <div>
      <section className="bg-default-background pt-8 pl-[6.25rem]">
        <div className="flex gap-4 flex-wrap">
          <img className="w-[17rem] h-[15rem]" src={avatar} alt="Ayomide Ojo" />
          <div className="flex flex-col gap-5 max-w-[44.4rem]">
            <ul className="flex gap-4">
              <li className="text-xl font-bold">Name: </li>
              <span className="text-xl">Ayodeji Ojo</span>
            </ul>
            <ul className="flex gap-4">
              <li className="text-xl font-bold">Location:</li>
              <span className="text-xl">
                No 42, Access Bank Road, Ajilosun, Ado Ekiti, Ekiti, Nigeria.
              </span>
            </ul>
            <ul className="flex gap-4">
              <li className="text-xl font-bold">Email address:</li>
              <span className="text-xl">ayodejiojo1@gmail.com</span>
            </ul>
            <ul className="flex gap-4">
              <li className="text-xl font-bold">Phone number:</li>
              <span className="text-xl">08167493689</span>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoUpdate;
