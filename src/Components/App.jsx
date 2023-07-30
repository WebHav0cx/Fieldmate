import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "../pages/Homepage";
import About from "./Landing/About";

import ForgotPassword from "./Auth/ForgotPassword";

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
