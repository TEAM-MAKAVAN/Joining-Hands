import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManagerLogin = () => {
  const notify = () => toast();
  const [formData, setFormData] = useState({
    identifier: "", // Will be either email or username must be entered to login
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useOutletContext(); // Use context to access setIsLoggedIn

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { identifier, password } = formData;

    // Determine if the identifier is an email or username
    const payload = identifier.includes("@")
      ? { email: identifier, password }
      : { username: identifier, password };

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/admins//login-admin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        
        throw new Error(errorData.message || "Network response was not ok");
        
      }

      const data = await response.json();
      console.log("Success:", data);
      

      // Redirect to the manager-access page on successful login
      setIsLoggedIn(true);
      
      setTimeout(()=>navigate('/admin-access'),3000) 
    } catch (error) {
      console.error("Error:", error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div>
       <ToastContainer />
      <main className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Manager Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="identifier" className="block text-gray-700 mb-2">
                Username or Email
              </label>
              <input
                type="text"
                id="identifier"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
                placeholder="Enter your username or email"
                value={formData.identifier}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ManagerLogin;
