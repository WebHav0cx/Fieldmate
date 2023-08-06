import React, { useState } from "react";
import { Icon } from "@iconify/react";

function Testimonial() {
  const testimonials = [
    {
      text: "FIELDMATE made farming equipment so easy and affordable. Their website is user-friendly and their customer service is top-notch. Thank you for making my farming journey easy",
      name: "Joel Emmanuel",
      location: "Ikere ekiti",
    },
    {
      text: "I'm extremely satisfied with FIELDMATE's products and services. They have revolutionized the way I approach farming, and I can't imagine my work without their equipment.",
      name: "Alice Thompson",
      location: "Oye Ekiti",
    },
    {
      text: "As a seasoned farmer, I've tried various equipment brands, but FIELDMATE stands out. The quality and reliability of their tools are exceptional.",
      name: "Michael Johnson",
      location: "Ado Ekiti",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="font-inria">
      <section className="flex flex-col justify-center items-center bg-default-background gap-6">
        <h2 className="text-primary-100 text-5xl font-bold">Testimonials</h2>
        <div className="testimonial-container flex justify-center items-center p-8 w-full bg-gradient-to-r from-custom-orange to-transparent relative">
          <button
            className="testimonial-arrow absolute left-0 w-9 h-8 flex justify-center items-center"
            onClick={handlePrev}
          >
            <Icon
              className="w-14 h-14"
              icon="ic:sharp-arrow-back-ios"
              color="white"
            />
          </button>
          <div className="w-[77.875rem] h-[26.875rem] flex flex-col justify-center items-center gap-[1.62rem]">
            <p className="text-4xl font-bold text-center">
              {testimonials[currentIndex].text}
            </p>
            <div className="flex flex-col justify-center items-center">
              <p className="text-4xl font-bold">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-4xl font-bold">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>
          <button
            className="testimonial-arrow absolute right-0 w-9 h-8 flex justify-center items-center"
            onClick={handleNext}
          >
            <Icon
              className="w-14 h-14 transform rotate-180"
              icon="ic:sharp-arrow-back-ios"
              color="white"
            />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
