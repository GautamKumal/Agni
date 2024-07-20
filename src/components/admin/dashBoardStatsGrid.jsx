import React from "react";
import { GiArchiveRegister, GiNotebook, GiTeacher } from "react-icons/gi";

function DashBoardStatsGrid() {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="flex items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500 shadow-md">
            <GiTeacher fontSize={24} className="text-2xl text-white" />
          </div>
          <div className="pl-7">
            <span className="text-sm text-gray-500 font-light">Teachers</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                162
              </strong>
            </div>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="rounded-full h-12 w-12 flex items-center justify-cente bg-red-700 shadow-md">
            <GiTeacher fontSize={24} className="text-2xl text-white ml-3" />
          </div>
          <div className="pl-7">
            <span className="text-sm text-gray-500 font-light">Students</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                162
              </strong>
            </div>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400 shadow-md">
            <GiNotebook fontSize={24} className="text-2xl text-white" />
          </div>
          <div className="pl-7">
            <span className="text-sm text-gray-500 font-light">Questions</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                162
              </strong>
            </div>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500 shadow-md">
            <GiArchiveRegister fontSize={24} className="text-2xl text-white" />
          </div>
          <div className="pl-7">
            <span className="text-sm text-gray-500 font-light">Exams</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                162
              </strong>
            </div>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

export default DashBoardStatsGrid;
function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1  border-gray-200 flexitems-center">
      {children}
    </div>
  );
}
