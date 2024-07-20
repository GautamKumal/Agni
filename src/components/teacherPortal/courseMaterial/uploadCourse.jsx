import React, { useState } from "react";
import { supabase } from "../../../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@headlessui/react";

export default function CreateCourseMaterial() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [courseId, setCoursedId] = useState("");
  const [subject, setSubject] = useState("");
  const [createdBy, setCreated] = useState("");
  const [level, setClassLevel] = useState("");

  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !title ||
      !description ||
      !file ||
      !courseId ||
      !subject ||
      !createdBy ||
      !level
    ) {
      setFormError("All fields are required.");
      return;
    }

    // Upload file to Supabase Storage
    const { data: fileData, error: fileError } = await supabase.storage
      .from("CourseMaterial")
      .upload(`public/${file.name}`, file);

    if (fileError) {
      console.error("Upload error:", fileError);
      setFormError("An error occurred while uploading the file.");
      setFormSuccess(null);
      return;
    }

    // Insert course material details into the database
    const { data, error } = await supabase.from("CourseMaterial").insert([
      {
        title,
        description,
        file_url: fileData.path, // Use the file URL from the uploaded file
        course_id: courseId,
        subject,
        created_by: createdBy,
        level: level,
      },
    ]);

    if (error) {
      console.error("Database insert error:", error);
      setFormError("An error occurred while submitting the form.");
      setFormSuccess(null);
    } else {
      console.log("Successfully Added:", data);
      setFormError(null);
      setFormSuccess("Course material created successfully.");
      setTimeout(() => {
        navigate("/admin/course-materials");
      }, 2000);
    }
  };

  return (
    <div className="w-max flex justify-center items-center m-4 shadow-md">
      <div className="w-full p-3 m-3 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-6 text-center text-gray-800">
          Create Course Material
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
                placeholder="Title"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Level
              </label>
              <input
                type="text"
                name="classlevel"
                onChange={(e) => setClassLevel(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
                placeholder="Class level"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                File
              </label>
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Course ID
              </label>
              <input
                type="text"
                name="courseId"
                onChange={(e) => setCoursedId(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
                placeholder="Course ID"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Created By
              </label>
              <input
                type="text"
                name="created"
                onChange={(e) => setCreated(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
                placeholder="Created by"
              />
            </div>
          </div>
          <div className="grid gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Description
              </label>
              <Textarea
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
                placeholder="Description"
              />
            </div>
          </div>
          <div className="justify-end">
            <button
              type="submit"
              className="justify-between p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            >
              Create Course Material
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
