import React from "react";
import Header from "../Components/Review/Header";
import ReviewText from "../Components/Review/ReviewText";
import FormRequest from "../Components/Review/FormRequest";
import Footer from "../common/Footer";

function Review() {
  return (
    <div className="bg-default-background">
      <Header />
      <ReviewText />
      <FormRequest />
      <Footer />
    </div>
  );
}

export default Review;
