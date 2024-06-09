// src/components/UserList.js
import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch('http://localhost:8000/api/v1/users/get-users');
        console.log('Response:', response); // Correct endpoint URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data.data);
      } catch (err) {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">All Users</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {users.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <div key={user._id} className="user-item bg-white p-4 shadow rounded">
              <p className="text-lg font-medium">Name: {user.name}</p>
              <p className="text-gray-600">Email: {user.email}</p>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;

