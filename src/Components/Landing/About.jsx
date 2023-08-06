import React from "react";
import Nav from "../../common/Nav";
import Welcome from "../../assets/images/tractor1.png";
import Mission from "../../assets/images/tractor2.png";
import Passion from "../../assets/images/tractor3.png";

import Footer from "../../common/Footer";
function About() {
  return (
    <div className="font-inria">
      <section className="bg-default-background-100">
        <div className="bg-farm-bg bg-no-repeat bg-center bg-cover w-full h-[28.3125rem]">
          <Nav />
          <h2 className="text-center mt-44 text-7xl font-bold">
            Welcome to FIELDMATE
          </h2>
        </div>
        <div className="flex justify-center items-center flex-col flex-wrap gap-8 pt-8 pb-8">
          <div className="flex flex-wrap justify-center items-center gap-16">
            <p className="text-3xl w-[46.75rem] font-normal">
              Welcome to FIELDMATE an innovative digital platform built to
              connect farmers in your community. We empower you to share, lend,
              and borrow farm equipment with ease, fostering a strong spirit of
              collaboration and support among fellow farmers. Our user-friendly
              interface and robust functionality make equipment listings,
              availability management, and booking requests a breeze. Seamlessly
              communicate with other farmers to coordinate sharing arrangements
              and exchange valuable insights to optimize your farming practices.
            </p>
            <img src={Welcome} alt="Welcome to FIELDMATE" />
          </div>
          <div className="flex flex-wrap flex-row-reverse justify-center items-center gap-28">
            <p className="w-[39.625rem] text-3xl">
              Our Mission: Our mission is to empower farmers with access to
              modern and reliable farming equipment without the burden of
              ownership costs. We believe that every farmer should have the
              opportunity to access the latest tools and technology to enhance
              productivity and ensure sustainable agricultural practices.
            </p>
            <img src={Mission} alt="Mission statement" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-[0.9375rem]">
            <p className="w-[44.6875rem] text-3xl">
              At FIELDMATE we are passionate about supporting farmers and
              agricultural businesses by providing top-quality farming equipment
              for rent. With years of experience in the industry, we understand
              the challenges farmers face and strive to be your trusted partner
              in meeting your equipment needs.
            </p>
            <img src={Passion} alt="Passion of FIELDMATE" />
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default About;
