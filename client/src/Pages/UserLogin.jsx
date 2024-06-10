// import React, { useState } from 'react';
// import { useNavigate , useOutletContext} from 'react-router-dom';
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
// const Login = () => {
//   const [formData, setFormData] = useState({
//     usernameOrEmail: '',
//     password: ''
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { setIsLoggedIn } = useOutletContext(); // Use context to access setIsLoggedIn
 

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8000/api/v1/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Success:', data);

//       // Redirect to the user-access page on successful login
//       setIsLoggedIn(true);
//       navigate('/user-access');
      
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Login failed. Please check your credentials and try again.');
//     }
//   };

//   return (
//     <div>
//       <main className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//           <h2 className="text-2xl font-bold mb-6 text-center">User Login</h2>
//           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="usernameOrEmail" className="block text-gray-700 mb-2">Username or Email</label>
//               <input
//                 type="text"
//                 id="usernameOrEmail"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
//                 placeholder="Enter your username or email"
//                 value={formData.usernameOrEmail}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Login
//             </button>
//           </form>
//           <p className='pl-44 pt-3'>or</p>
//         <div className=' pl-20 pt-6'> <GoogleLogin
//   onSuccess={credentialResponse => {
//    const credentialResponseDecoded=jwtDecode(credentialResponse.credential);
//    console.log(credentialResponseDecoded);
//   }}
//   onError={() => {
//     console.log('Login Failed');
//   }}
//      /></div> 
//         </div>
       
//       </main>
      
      
//     </div>
    
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode }from 'jwt-decode';

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: '', // Will be either email or username
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsLoggedIn } = useOutletContext(); // Use context to access setIsLoggedIn

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { identifier, password } = formData;

    // Determine if the identifier is an email or username
    const payload = identifier.includes('@') 
      ? { email: identifier, password }
      : { username: identifier, password };

    try {
      const response = await fetch('http://localhost:8000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);

      // Redirect to the user-access page on successful login
      setIsLoggedIn(true);
      navigate('/user-access');

    } catch (error) {
      console.error('Error:', error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <main className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">User Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="identifier" className="block text-gray-700 mb-2">Username or Email</label>
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
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
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
          <p className='pl-44 pt-3'>or</p>
          <div className='pl-20 pt-6'>
            <GoogleLogin
              onSuccess={credentialResponse => {
                const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                console.log(credentialResponseDecoded);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
