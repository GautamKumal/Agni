import React, { useState } from "react";
import { supabase } from "../../../config/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function CreateStudents() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [faculty, setFaculty] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !firstname ||
      !lastname ||
      !password ||
      !faculty ||
      !email ||
      !address ||
      !phone ||
      !gender
    ) {
      setFormError("All fields are required.");
      return;
    }

    const { data, error } = await supabase.from("ManageStudents").insert([
      {
        firstname,
        lastname,
        password,
        faculty,
        email,
        address,
        phone,
        gender,
      },
    ]);

    if (error) {
      console.log(error);
      setFormError("An error occurred while submitting the form.");
      setFormSuccess(null);
    } else {
      console.log("Successfully Added");
      setFormError(null);
      setFormSuccess("Form created successfully.");
      setTimeout(() => {
        navigate("/admin/students/managestudents");
      }, 2000);
    }
  };

  return (
    <div className=" w-max flex justify-center items-center m-4 shadow-md ">
      <div className="w-full p-3  m-3 first-line:shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-6 text-center text-gray-800">
          Create Student
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                onChange={(e) => setFirstname(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                onChange={(e) => setLastname(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Faculty
              </label>
              <input
                type="text"
                name="faculty"
                onChange={(e) => setFaculty(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
                placeholder="Department"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
                placeholder="Phone"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Gender
              </label>
              <select
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className=" justify-end">
            <button
              type="submit"
              className=" justify-between p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            >
              Create Student
            </button>
          </div>

          {formError && (
            <p className="text-red-500 mt-4 text-sm">{formError}</p>
          )}
          {formSuccess && (
            <p className="text-green-500 mt-4 text-sm">{formSuccess}</p>
          )}
        </form>
      </div>
    </div>
  );
}
