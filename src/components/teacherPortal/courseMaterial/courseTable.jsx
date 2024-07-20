import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";

const CourseTable = () => {
  const [fetchError, setFetchError] = useState(null);
  const [courseTable, setCourseTable] = useState([]);
  const [editRowId, setEditRowId] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const supabase = createClient(
      "https://dccfmatyokehzrduqgwn.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjY2ZtYXR5b2tlaHpyZHVxZ3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MDMyNTksImV4cCI6MjAzNDk3OTI1OX0.oPZr_EbcIZoAIkgd17fssthEr2dju_v6M0NHLxo3De4"
    );

    const fetchTCourseData = async () => {
      let { data, error } = await supabase.from("CourseMaterial").select("*");

      if (error) {
        setFetchError("Data unable to fetch");
        setCourseTable([]);
        console.error(error);
      } else {
        setCourseTable(data);
        setFetchError(null);
      }
    };

    fetchTCourseData();
  }, []);

  const handleEdit = (course) => {
    setEditRowId(course.id);
    setFormData(course);
  };

  const handleCancel = () => {
    setEditRowId(null);
    setFormData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    const supabase = createClient(
      "https://dccfmatyokehzrduqgwn.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjY2ZtYXR5b2tlaHpyZHVxZ3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MDMyNTksImV4cCI6MjAzNDk3OTI1OX0.oPZr_EbcIZoAIkgd17fssthEr2dju_v6M0NHLxo3De4"
    );
    let { error } = await supabase
      .from("CourseMaterial")
      .update(formData)
      .eq("id", editRowId);

    if (error) {
      console.error(error);
    } else {
      setCourseTable(
        courseTable.map((course) =>
          course.id === editRowId ? formData : course
        )
      );
      setEditRowId(null);
      setFormData({});
    }
  };

  const handleDelete = async (id) => {
    const supabase = createClient(
      "https://dccfmatyokehzrduqgwn.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjY2ZtYXR5b2tlaHpyZHVxZ3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MDMyNTksImV4cCI6MjAzNDk3OTI1OX0.oPZr_EbcIZoAIkgd17fssthEr2dju_v6M0NHLxo3De4"
    );
    let { error } = await supabase.from("CourseMaterail").delete().eq("id", id);

    if (error) {
      console.error(error);
    } else {
      setCourseTable(courseTable.filter((course) => course.id !== id));
    }
  };

  return (
    <>
      {fetchError && (
        <tr>
          <td colSpan="10" className="text-center ">
            {fetchError}
          </td>
        </tr>
      )}
      {courseTable.length > 0 ? (
        courseTable.map((course) => (
          <tr key={course.id}>
            {editRowId === course.id ? (
              <>
                <td className="py-4 px-4 border-b border-gray-200">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  <input
                    type="text"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  <input
                    type="text"
                    name="file"
                    value={formData.file}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  <input
                    type="text"
                    name="subjectCode"
                    value={formData.subjectCode}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>

                <td className="py-4 px-4 border-b border-gray-200">
                  <input
                    type="created"
                    name="created"
                    value={formData.created}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
                <td className=" py-4 px-4 border-b  border-gray-200">
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>

                <td className="py-4 px-4 border-b border-gray-200 flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="text-green-500 hover:text-green-700"
                  >
                    <FaSave fontSize={15} />
                  </button>
                  <button
                    onClick={handleCancel}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes fontSize={15} />
                  </button>
                </td>
              </>
            ) : (
              <>
                <td className="py-4 px-4 border-b border-gray-200 w-24">
                  {course.title}
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  {course.level}
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  {course.file}
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  {course.subjectCode}
                </td>

                <td className="py-4 px-4 border-b border-gray-200">
                  {course.created}
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  {course.description}
                </td>

                <td className="py-4 px-4 border-b border-gray-200 flex space-x-2">
                  <button
                    onClick={() => handleEdit(course)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit fontSize={15} />
                  </button>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash fontSize={15} />
                  </button>
                </td>
              </>
            )}
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan="10"
            className="py-4 px-4 border-b border-gray-200 text-center"
          >
            No teachers data available
          </td>
        </tr>
      )}
    </>
  );
};

export default CourseTable;
