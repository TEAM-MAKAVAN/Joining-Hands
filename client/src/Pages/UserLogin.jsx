import React from 'react';


const Login = () => {
  return (
    <div>
      
      <main className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">User Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="usernameOrEmail" className="block text-gray-700 mb-2">Username or Email</label>
              <input
                type="text"
                id="usernameOrEmail"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
                placeholder="Enter your username or email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
             <a href="/user-access">Login</a>
            </button>
          </form>
        </div>
      </main>
      
    </div>
  );
}

export default Login;
