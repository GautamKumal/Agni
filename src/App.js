import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/admin/sidebar";

import Homepage from "./components/landingPage/homepage";
import LoginPage from "./components/landingPage/loginPage";

import DashBoard from "./components/admin/dashboard";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [loggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      {/* <div className="flex h-screen overflow-hidden"> Ensure full height layout */}
      {/* <Header /> */}
      {/* <div className="fixed inset-y-0 left-0 mt-16 w-52 md:w-72"> {/* Fixed sidebar adjusted for header height */}
      {/* <TeacherSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> */}
      {/* </div> */} {/* Content area */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin/teachers/dashboard" element={<DashBoard />} />
        <Route path="/admin/sidebar" element={<Sidebar />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
