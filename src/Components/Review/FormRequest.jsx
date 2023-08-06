import React from "react";

function FormRequest() {
  return (
    <div>
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
            type="email"
            placeholder="Email Address"
            name="name"
            id=""
          />
          <input
            className="border border-solid border-black py-4 pl-2 w-full"
            type="text"
            placeholder="Equipment Name"
            name="name"
            id=""
          />
          <input
            className="border border-solid border-black py-4 pl-2 w-full"
            type="text"
            placeholder="Location"
            name="name"
            id=""
          />
          <textarea
            className="px-2 py-4 w-[57.8rem] h-64 border border-solid border-black"
            placeholder="Give your feedback..."
            name="text"
            id=""
          ></textarea>
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

export default FormRequest;
