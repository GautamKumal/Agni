import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom"; // Import Link from react-router-dom

import CourseTable from "./courseTable";

export default function CourseMaterial() {
  return (
    <div className="flex justify-start w-full">
      <div className="w-full rounded-lg shadow-lg p-2">
        <Link
          to="/teacherPortal/courseMaterial/uploadCourse"
          className="text-sm mb-2 inline-block px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-green-500 hover:to-green-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Uplaod Course
        </Link>

        <div
          className="overflow-x-auto shadow-md rounded-md"
          style={{ maxHeight: "400px", overflowY: "scroll" }}
        >
          <table className="w-full bg-white border border-gray-200 rounded">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  <span>Id</span>
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  <span>Level</span>
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  File
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  Title
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  Subject
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  Created By
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  Description
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <CourseTable />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
