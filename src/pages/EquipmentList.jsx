import React from "react";
import Header from "../Components/EquipList/Header";
import ListForm from "../Components/EquipList/ListForm";
import ListText from "../Components/EquipList/ListText";
import Footer from "../common/Footer";

function EquipmentList() {
  return (
    <div>
      <Header />
      <ListText />
      <ListForm />
      <Footer />
    </div>
  );
}

export default EquipmentList;
