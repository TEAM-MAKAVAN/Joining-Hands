import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const notify = () => toast("User Registered Successfully!");
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);

      // Handle successful registration (e.g., redirect to login page)

     setTimeout(()=>navigate('/user'),5000) 
    } catch (error) {
      console.error('Error:', error);
      // Handle errors (e.g., show error message to the user)
    }
  };

  return (
    <div>
      <ToastContainer />
      <main className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button onClick={notify}
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Register
            </button>
          </form>
          <p className='pl-16'>Already have an Account? <a className='text-blue-600' href="/user">Login</a></p>
        </div>
      </main>
    </div>
  );
}

export default Register;
