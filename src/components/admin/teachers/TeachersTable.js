import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';

const TeachersTable = () => {
  const [fetchError, setFetchError] = useState(null);
  const [teachersTable, setTeachersTable] = useState([]);
  const [editRowId, setEditRowId] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const supabase = createClient(
      "https://dccfmatyokehzrduqgwn.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjY2ZtYXR5b2tlaHpyZHVxZ3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MDMyNTksImV4cCI6MjAzNDk3OTI1OX0.oPZr_EbcIZoAIkgd17fssthEr2dju_v6M0NHLxo3De4"
    );

    const fetchTeachersData = async () => {
      let { data, error } = await supabase
        .from('ManageTeachers')
        .select('*');

      if (error) {
        setFetchError("Data unable to fetch");
        setTeachersTable([]);
        console.error(error);
      } else {
        setTeachersTable(data);
        setFetchError(null);
      }
    };

    fetchTeachersData();
  }, []);

  const handleEdit = (teacher) => {
    setEditRowId(teacher.id);
    setFormData(teacher);
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
      setTeachersTable(teachersTable.map(teacher => (teacher.id === editRowId ? formData : teacher)));
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
      setTeachersTable(teachersTable.filter((teacher) => teacher.id !== id));
    }
  };

  return (
    <>
      {fetchError && (<tr><td colSpan="10" className="text-center">{fetchError}</td></tr>)}
      {teachersTable.length > 0 ? (
        teachersTable.map(teacher => (
          <tr key={teacher.id}>
            {editRowId === teacher.id ? (
              <>
                <td className="py-3 px-3 border-b border-gray-200">
                  <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-3 px-3 border-b border-gray-200">
                  <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-3 px-3 border-b border-gray-200">
                  <input type="text" name="password" value={formData.password} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-3 px-3 border-b border-gray-200">
                  <input type="text" name="department" value={formData.department} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-3 px-3 border-b border-gray-200">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-3 px-3 border-b border-gray-200">
                  <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-3 px-3 border-b border-gray-200">
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-3 px-3 border-b border-gray-200">
                  <input type="text" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-2 py-1 border rounded"/>
                </td>
                <td className="py-3 px-3 border-b border-gray-200 flex space-x-2">
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
                <td className="py-3 px-3 border-b border-gray-200">{teacher.firstname}</td>
                <td className="py-3 px-3 border-b border-gray-200">{teacher.lastname}</td>
                <td className="py-3 px-3 border-b border-gray-200">{teacher.password}</td>
                <td className="py-3 px-3 border-b border-gray-200">{teacher.department}</td>
                <td className="py-3 px-3 border-b border-gray-200">{teacher.email}</td>
                <td className="py-3 px-3 border-b border-gray-200">{teacher.address}</td>
                <td className="py-3 px-3 border-b border-gray-200">{teacher.phone}</td>
                <td className="py-3 px-3 border-b border-gray-200">{teacher.gender}</td>
                <td className="py-3 px-3 border-b border-gray-200 flex space-x-2">
                  <button onClick={() => handleEdit(teacher)} className="text-blue-500 hover:text-blue-700">
                    <FaEdit fontSize={15}/>
                  </button>
                  <button onClick={() => handleDelete(teacher.id)} className="text-red-500 hover:text-red-700">
                    <FaTrash fontSize={15}/>
                  </button>
                </td>
              </>
            )}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="10" className="py-3 px-3 border-b border-gray-200 text-center">
            No teachers data available
          </td>
        </tr>
      )}
    </>
  );
};

export default TeachersTable;
