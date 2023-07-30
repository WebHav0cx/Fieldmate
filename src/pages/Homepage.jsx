import React from "react";
import Header from "../Components/Landing/Header";
import Footer from "../common/footer";
import Categories from "../Components/Landing/Categories";
import Services from "../Components/Landing/Services";
import Testimonial from "../Components/Landing/Testimonial";
import Suscribe from "../Components/Landing/Suscribe";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Services />
      <Testimonial />
      <Suscribe />
      <Footer />
    </div>
  );
}
