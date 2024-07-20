import React, { useState } from "react";
import { BiQuestionMark, BiTestTube } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { Link, Route, Routes } from "react-router-dom";

import ManageStudents from "./students/manageStudent";
import OnlineExam from "./onlineexams/onlineExams";
import CreateQuestions from "./questions/createQuestions";
import CourseMaterial from "./courseMaterial/courseMaterial";
import CreateSTudents from "./students/createStudents";
import TeacherDashboard from "./dashboard/dashboard";
import ViewQuestions from "./questions/viewQuestions";
import UploadCourse from "./courseMaterial/uploadCourse";

function TeacherSidebar() {
  const menus = [
    {
      name: "Dashboard",
      link: "/teacherPortal/dashboard/teacherdashboard",
      icon: MdOutlineDashboard,
    },
    {
      name: "Course Materials",
      link: "/teacherPortal/coursematerial/coursematerial",
      icon: FaChalkboardTeacher,
    },
    {
      name: "Manage Students",
      link: "/teacherPortal/students/managestudents",
      icon: PiStudentFill,
      margin: true,
    },
    {
      name: "Online Exams",
      link: "/teacherPortal/onlineexams/onlineexams",
      icon: BiTestTube,
    },
    {
      name: "Add Questions",
      link: "/teacherPortal/questions/createQuestions",
      icon: BiQuestionMark,
    },
    {
      name: "ViewQuestions",
      link: "/teacherPortal/questions/viewQuestions",
      icon: BiQuestionMark,
      margin: true,
    },
    {
      name: "Submitted Exams",
      link: "/teacherPortal/onlineexams/onlineexams",
      icon: BiTestTube,
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
        <div className="mt-4 flex flex-col gap-4 relative w-48  max-h-screen">
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
      <div className="m-3 text-xl bg-white flex-1">
        <Routes>
          <Route
            path="/teacherPortal/dashboard/teacherdashboard"
            element={<TeacherDashboard />}
          />
          <Route
            path="/teacherPortal/coursematerial/coursematerial"
            element={<CourseMaterial />}
          />
          <Route
            path="/teacherPortal/students/managestudents"
            element={<ManageStudents />}
          />
          <Route path="/teacherPortal/onlineexams" element={<OnlineExam />} />
          <Route
            path="/teacherPortal/questions/createquestions"
            element={<CreateQuestions />}
          />
          <Route
            path="/teacherPortal/questions/viewquestions"
            element={<ViewQuestions />}
          />
          <Route
            path="/teacherPortal/students/createstudents"
            element={<CreateSTudents />}
          />
          <Route
            path="/teacherPortal/courseMaterial/uploadcourse"
            element={<UploadCourse />}
          />
        </Routes>
      </div>
    </section>
  );
}

export default TeacherSidebar;
