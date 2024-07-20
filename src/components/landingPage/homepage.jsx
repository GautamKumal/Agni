import React, { useState } from "react";
import LoginForm from "./loginPage";

const Homepage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm((prev) => !prev);
  };
  return (
    <div className=" bg-white-100 ">
      <header className="bg-white shadow-md">
        <div className="fixed z-10 w-full bg-slate-50 shadow-lg">
          <div className="container mx-auto flex justify-between items-center py-1 px-2 relative">
            <img src="./logo.png" alt="AgniParikshya" className="h-16 w-auto" />
            <nav className="flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 py-2 px-3 rounded transition duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 py-2 px-3 rounded transition duration-300"
              >
                Benefit
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 py-2 px-3 rounded transition duration-300"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 py-2 px-3 rounded transition duration-300"
              >
                Contact
              </a>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                onClick={handleLoginClick}
              >
                Login
              </button>
            </nav>
            <LoginForm isVisible={showLoginForm} />
          </div>
        </div>
      </header>
      <main className="container mx-auto py-12">
        <div className=" overflow-y-auto flex-1   flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 mt-10">
            <h1 className="text-5xl font-bold text-gray-800 mb-10">
              Revolutionize how you evaluate your students
            </h1>
            <p className="text-gray-600 mb-12 text-2xl">
              AgniParikshya is an online exam system that delivers exam
              management, question bank management, automated grading, an
              analytical dashboard, and more.
            </p>
            <p className="text-2xl font-bold text-red-500 mb-4">
              "Say goodbye to exam papers, hello to online success!"
            </p>
            <div className="mt-32">
              <h2 className="text-3xl font-bold text-green-800 mb-4 -mr-5">
                Why AgniParikshya
              </h2>

              <p className="text-2xl text-grey-800">
                Randomizing Question Order, Scheduling Exam Start Date & Time,
                Storing Your Question Bank, And More.
              </p>
            </div>
            <div className="">
              <img
                src="online exam.jpg"
                alt="Hero Image"
                className=" z-0 absolute top-60 right-28 "
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12  ">
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="./reuse.png"
              alt="Reusable Questions"
              className="w-full h-auto mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Reusable Questions
            </h3>
            <p className="text-gray-600">
              Save your question bank and re-use it in different exams with
              different mark distributions.
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="./savetime.png"
              alt="Save Your Time"
              className="w-full h-60 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Save Your Time
            </h3>
            <p className="text-gray-600">
              Say goodbye to the hassle of paper-based exams and the
              time-consuming manual grading system.
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="process.png"
              alt="Simple Process"
              className="w-full h-60 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Simple Process
            </h3>
            <p className="text-gray-600">
              Streamline your examination process. Create exam, select questions
              from question bank, allocate marks, done!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12  ">
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="./autograding.jpg"
              alt="Reusable Questions"
              className="w-100 h-auto mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Automated Grading
            </h3>
            <p className="text-gray-600">
              Instantly scores the objective questions and reduces the workload
              on instructors, allowing them to focus on qualitative assessment.
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="./feedback.jpg"
              alt="Save Your Time"
              className="w-100 h-60 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Instant Feedback
            </h3>
            <p className="text-gray-600">
              Provides immediate feedback on results and enhances learning by
              allowing students to review correct answers and understand their
              mistakes.
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img
              src="environmently.jpg"
              alt="Simple Process"
              className="w-100 h-60 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Environmentally Friendly
            </h3>
            <p className="text-gray-600">
              Reduces paper waste and carbon footprint associated with
              traditional exams and supports sustainability initiatives in
              educational institutions.
            </p>
          </div>
        </div>
        <footer className="bg-white-100 py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <img src="logo.png" alt="agni" className="w-20 h-auto" />
                <div className="ml-4">
                  <h2 className="text-2xl font-bold">AgniParikshya</h2>
                  <p className="text-gray-600">©2024 </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ml-20 justify-items item-center ">
            <div className="mb-2 md:mb-3 ml-20">
              <h3 className="text-lg font-semibold mb-2">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="mb-2 md:mb-5 ml-20 ">
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#">Who, What, Why & How</a>
                </li>
              </ul>
            </div>
            <div className="mb-12 md:mb-8 ml-20">
              <h3 className="text-lg font-semibold mb-3">Social</h3>
              <ul className="space-y-2 flex items-center">
                <li>
                  <a href="#" className="mr-12">
                    <img
                      src="instagram-icon.jpg"
                      alt="Instagram"
                      className="w-8 h-8"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-12">
                    <img
                      src="youtube-icon.jpg"
                      alt="YouTube"
                      className="w-8 h-8"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4">
                    <img
                      src="facebook-icon.png"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Homepage;
