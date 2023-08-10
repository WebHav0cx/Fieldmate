import React from "react";

function ListForm() {
  return (
    <div className="bg-default-background">
      <section className="flex justify-center items-center py-8">
        <form className="flex w-[57.8rem] flex-col justify-center items-start gap-12">
          <input
            className="border border-solid border-black py-4 pl-2 w-full"
            type="text"
            placeholder="Full Name"
            name="name"
            id=""
          />
          <input
            className="border border-solid border-black py-4 pl-2 w-full"
            type="tel"
            placeholder="Phone Number"
            name="tel"
            id=""
          />
          <input
            className="border border-solid border-black py-4 pl-2 w-full"
            type="email"
            placeholder="Email Address"
            name="email"
            id=""
          />
          <input
            className="border border-solid border-black py-4 pl-2 w-full"
            type="text"
            placeholder="Equipment Name"
            name="equipment_name"
            id=""
          />
          <input
            className="border border-solid border-black py-4 pl-2 w-full"
            type="text"
            placeholder="Equipment description"
            name="equipment_description"
            id=""
          />
          <input
            className="border border-solid border-black py-4 pl-2 w-full"
            type="text"
            placeholder="Location"
            name="location"
            id=""
          />
          <input
            className="border border-solid border-black py-4 pl-2 w-full"
            type="text"
            placeholder="Rental Rate"
            name="rate"
            id=""
          />
          <input
            className="border border-solid border-black py-4 pl-2 w-full"
            type="text"
            placeholder="Additional Information"
            name="info"
            id=""
          />
          <input type="file" name="image_upload" accept="image/*" id="" />

          <button
            className="bg-default-green text-2xl text-white rounded-[0.625rem] py-7 px-24"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ListForm;
