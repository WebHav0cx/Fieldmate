import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Catalogue/Header";
import Footer from "../common/footer";

function EquipmentDetails() {
  const { equipmentName } = useParams(); // Get the equipment name from URL params

  // You can fetch more details about the equipment using the equipmentName

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 mt-10">
        {/* Display equipment details */}
        <h2 className="text-2xl font-bold mb-4">{equipmentName}</h2>
        {/* Display other equipment details like image, owner's name, full description, etc. */}
      </div>
      <Footer />
    </div>
  );
}

export default EquipmentDetails;
