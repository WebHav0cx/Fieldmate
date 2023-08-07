import React from "react";
import Header from "../Components/Landing/Header";
import Footer from "../common/Footer";
import Categories from "../Components/Landing/Categories";
import Services from "../Components/Landing/Services";
import Testimonial from "../Components/Landing/Testimonial";
import Subscribe from "../Components/Landing/Subscribe";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Services />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
}
