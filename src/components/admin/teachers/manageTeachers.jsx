import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom"; // Import Link from react-router-dom
import TeachersTable from "./TeachersTable";

export default function ManageTeachers() {
  return (
    <div className="flex justify-start w-full">
      <div className="w-full rounded-lg shadow-lg p-2">
        <Link
          to="/admin/teachers/createTeachers"
          className="text-sm mb-2 inline-block px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-green-500 hover:to-green-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add Teacher
        </Link>

        <div
          className="overflow-x-auto shadow-md rounded-md"
          style={{ maxHeight: "400px", overflowY: "scroll" }}
        >
          <table className="w-full bg-white border border-gray-200 rounded">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  <span>First&nbsp;Name</span>
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  <span>Last&nbsp;Name</span>
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  Password
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  Department
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  Email
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  Address
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  Phone
                </th>
                <th className="py-2 px-4  border-b border-gray-200 text-center">
                  Gender
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <TeachersTable />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
