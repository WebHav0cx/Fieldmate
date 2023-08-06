import React from "react";
import Header from "../Components/Catalogue/Header";
import Welcome from "../Components/Catalogue/Welcome";
import Equiplist from "../Components/Catalogue/Equiplist";
import Footer from "../common/Footer";

function EquipmentCatalogue() {
  return (
    <div>
      <Header />
      <Welcome />
      <Equiplist />
      <Footer />
    </div>
  );
}

export default EquipmentCatalogue;
