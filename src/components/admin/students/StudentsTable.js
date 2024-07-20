import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';

const StudentsTable = () => {
  const [fetchError, setFetchError] = useState(null);
  const [studentsTable, setStudentsTable] = useState([]);
  const [editRowId, setEditRowId] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const supabase = createClient(
      "https://dccfmatyokehzrduqgwn.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjY2ZtYXR5b2tlaHpyZHVxZ3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MDMyNTksImV4cCI6MjAzNDk3OTI1OX0.oPZr_EbcIZoAIkgd17fssthEr2dju_v6M0NHLxo3De4"
    );

    const fetchTeachersData = async () => {
      let { data, error } = await supabase
        .from('ManageStudents')
        .select('*');

      if (error) {
        setFetchError("Data unable to fetch");
        setStudentsTable([]);
        console.error(error);
      } else {
        setStudentsTable(data);
        setFetchError(null);
      }
    };

    fetchTeachersData();
  }, []);

  const handleEdit = (student) => {
    setEditRowId(student.id);
    setFormData(student);
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
      .from('ManageTeachers')
      .update(formData)
      .eq('id', editRowId);

    if (error) {
      console.error(error);
    } else {
      setStudentsTable(studentsTable.map(student => (student.id === editRowId ? formData : student)));
      setEditRowId(null);
      setFormData({});
    }
  };

  const handleDelete = async (id) => {
    const supabase = createClient(
      "https://dccfmatyokehzrduqgwn.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjY2ZtYXR5b2tlaHpyZHVxZ3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MDMyNTksImV4cCI6MjAzNDk3OTI1OX0.oPZr_EbcIZoAIkgd17fssthEr2dju_v6M0NHLxo3De4"
    );
    let { error } = await supabase
      .from('ManageTeachers')
      .delete()
      .eq('id', id);

    if (error) {
      console.error(error);
    } else {
      setStudentsTable(studentsTable.filter((student) => student.id !== id));
    }
  };

  return (
    <>
      {fetchError && (<tr><td colSpan="10" className="text-center ">{fetchError}</td></tr>)}
      {studentsTable.length > 0 ? (
        studentsTable.map(student => (
          <tr key={student.id}>
            {editRowId === student.id ? (
              <>
                <td className="py-4 px-4 border-b border-gray-200">
                  <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  <input type="text" name="password" value={formData.password} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  <input type="text" name="faculty" value={formData.faculty} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
              
                <td className="py-4 px-4 border-b border-gray-200">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  <input type="text" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-4 px-4 border-b border-gray-200 flex space-x-2">
                  <button onClick={handleSave} className="text-green-500 hover:text-green-700">
                    <FaSave fontSize={15}/>
                  </button>
                  <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">
                    <FaTimes fontSize={15}/>
                  </button>
                </td>
              </>
            ) : (
              <>
            
                <td className="py-4 px-4 border-b border-gray-200 w-24">{student.firstname}</td>
                <td className="py-4 px-4 border-b border-gray-200">{student.lastname}</td>
                <td className="py-4 px-4 border-b border-gray-200">{student.password}</td>
                <td className="py-4 px-4 border-b border-gray-200">{student.faculty}</td>
            
                <td className="py-4 px-4 border-b border-gray-200">{student.email}</td>
                <td className="py-4 px-4 border-b border-gray-200">{student.address}</td>
                <td className="py-4 px-4 border-b border-gray-200">{student.phone}</td>
                <td className="py-4 px-4 border-b border-gray-200">{student.gender}</td>
                <td className="py-4 px-4 border-b border-gray-200 flex space-x-2">
                  <button onClick={() => handleEdit(student)} className="text-blue-500 hover:text-blue-700">
                    <FaEdit fontSize={15}/>
                  </button>
                  <button onClick={() => handleDelete(student.id)} className="text-red-500 hover:text-red-700">
                    <FaTrash fontSize={15}/>
                  </button>
                </td>
              </>
            )}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="10" className="py-4 px-4 border-b border-gray-200 text-center">
            No teachers data available
          </td>
        </tr>
      )}
    </>
  );
};

export default StudentsTable;
