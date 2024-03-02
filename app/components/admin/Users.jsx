import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

const Users= () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  useEffect(() => {
    const fetchUsers = () => {
      const db = getDatabase();
      const usersRef = ref(db, 'users');

      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      // Listen for changes to the users collection
      onValue(usersRef, (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
          
          const userList = Object.keys(userData)
            .map((uid) => ({ uid, ...userData[uid] }))
            .filter((user) => user.role === 'user')
            .slice(startIndex, endIndex);
          setUsers(userList);
        } else {
          setUsers([]);
        }
      });
    };

    fetchUsers();
  }, [page, pageSize]);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        {users.length > 0 ? (
          <>
            <ul className="divide-y divide-gray-200">
              {users.map((user) => (
                <li key={user.uid} className="py-4">
                  <span className="text-lg font-semibold">{user.email}</span>
                  <p className="text-gray-600">Role: {user.role}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              <button onClick={prevPage} disabled={page === 1} className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-900">
                Previous Page
              </button>
              <button onClick={nextPage} className="py-2 px-4 bg-lime-400 text-white rounded-md hover:bg-lime-900">
                Next Page
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-600">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Users;
