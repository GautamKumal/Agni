import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../config/supabaseClient";
// Adjust the import based on your project structure

const LoginForm = ({ isVisible }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (email === "admin@gmail.com" && password === "admin") {
      navigate("/admin/sidebar");
      setLoading(false);
      return;
    }

    try {
      // Query the student table
      const { data: studentData, error: studentError } = await supabase
        .from("ManageStudents")
        .select("*")
        .eq("email", email)
        .single();

      if (studentData && !studentError) {
        if (studentData.password === password) {
          navigate("/studentdash");
          setLoading(false);
          return;
        } else {
          setError("Invalid email or password");
          setLoading(false);
          return;
        }
      }

      // Query the teacher table
      const { data: teacherData, error: teacherError } = await supabase
        .from("ManageTeachers")
        .select("*")
        .eq("email", email)
        .single();

      if (teacherData && !teacherError) {
        if (teacherData.password === password) {
          navigate("/teacherPortal/sidebar");
          setLoading(false);
          return;
        } else {
          setError("Invalid email or password");
          setLoading(false);
          return;
        }
      }

      setError("Invalid email or password");
    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`absolute top-20 right-0 bg-white shadow-lg p-6 rounded-md w-72 transition-all duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <form onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
