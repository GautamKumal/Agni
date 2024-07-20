import React, { useState } from "react";
import { BiQuestionMark, BiTestTube } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { Link, Route, Routes } from "react-router-dom";
import DashBoard from "./dashboard";
import OnlineExam from "./onlineExam";
import Questions from "./questions";
import ManageTeachers from "./teachers/manageTeachers";
import CreateTeachers from "./teachers/createTeachers";
import ManageStudents from "./students/manageStudents";
import CreateStudents from "./students/createStudents";
import Header from "./header";

function SideBar() {
  const menus = [
    {
      name: "Dashboard",
      link: "/admin/dashboard",
      icon: MdOutlineDashboard,
    },
    {
      name: "Manage Teachers",
      link: "/admin/teachers/manageteachers",
      icon: FaChalkboardTeacher,
    },
    {
      name: "Manage Students",
      link: "/admin/students/managestudents",
      icon: PiStudentFill,
      margin: true,
    },
    {
      name: "Online Exams",
      link: "/admin/onlineexams",
      icon: BiTestTube,
    },
    {
      name: "Questions",
      link: "/admin/questions",
      icon: BiQuestionMark,
      margin: true,
    },
    {
      name: "Logout",
      link: "/logout",
      icon: MdOutlineDashboard,
    },
  ];

  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-96" : "w-16"
        } duration-500 text-white px-4 m-2 rounded-sm`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative w-48">
          {menus.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              className={`flex items-center font-medium gap-3 py-2 text-white hover:text-zinc-400 ${
                menu.margin ? "mt-5" : ""
              }`}
            >
              <div className="hover:bg-fuchsia-800">
                {React.createElement(menu.icon, { size: 20 })}
              </div>

              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl bg-white">
        <Routes>
          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route
            path="/admin/teachers/manageteachers"
            element={<ManageTeachers />}
          />
          <Route
            path="/admin/students/managestudents"
            element={<ManageStudents />}
          />
          <Route path="/admin/onlineexams" element={<OnlineExam />} />
          <Route path="/admin/questions" element={<Questions />} />
          <Route
            path="/admin/teachers/createteachers"
            element={<CreateTeachers />}
          />
          <Route
            path="/admin/students/createstudents"
            element={<CreateStudents />}
          />
        </Routes>
      </div>
    </section>
  );
}

export default SideBar;
