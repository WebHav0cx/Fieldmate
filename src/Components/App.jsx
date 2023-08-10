import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "../pages/Homepage";
import About from "./Landing/About";
import RegistrationSuccess from "./Auth/RegistrationSuccess";
import ForgotPassword from "./Auth/ForgotPassword";
import EquipmentCatalogue from "../pages/EquipmentCatalogue";
import Equiplist from "./Catalogue/Equiplist";
import Review from "../pages/Review";
import { UserProvider } from "../context/UserContext";
import ProfileInfo from "./Auth/ProfileInfo";
import EquipmentList from "../pages/EquipmentList";

function App() {
  return (
    <UserProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/registration-success"
              element={<RegistrationSuccess />}
            />
            <Route
              path="/equipment-catalogue"
              element={<EquipmentCatalogue />}
            />
            <Route path="/review" element={<Review />} />
            <Route path="/profile/" element={<ProfileInfo />} />

            <Route path="/equipment-list" element={<EquipmentList />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </UserProvider>
  );
}

export default App;
