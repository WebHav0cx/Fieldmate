import React from "react";
import Header from "../InfoPage/Header";
import InfoUpdate from "../InfoPage/infoUpdate";
import EquipmentUpdate from "../InfoPage/EquipmentUpdate";
import Footer from "../../common/Footer";

function ProfileInfo() {
  return (
    <div>
      <Header />
      <InfoUpdate />
      <EquipmentUpdate />
      <Footer />
    </div>
  );
}

export default ProfileInfo;
