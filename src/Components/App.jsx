import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Landing/Header";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "../pages/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
