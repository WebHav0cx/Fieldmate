import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Catalogue/Header";

const EquipmentDetails = ({ equipmentList }) => {
  const { equipmentId } = useParams(); // Use useParams to get the equipment ID from the URL

  // Find the equipment based on the equipmentId
  const selectedEquipment = equipmentList.find(
    (equipment) => equipment.id === equipmentId
  );

  if (!selectedEquipment) {
    return <div>Equipment not found</div>;
  }

  function EquipmentDetails() {
    return (
      <div className="font-inria">
        <Header title={selectedEquipment.name} />

        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold">{selectedEquipment.name}</h2>
          <img src={selectedEquipment.imgUrl} alt={selectedEquipment.name} />
          <p className="my-4">{selectedEquipment.description}</p>
        </div>
      </div>
    );
  }
};

export default EquipmentDetails;
