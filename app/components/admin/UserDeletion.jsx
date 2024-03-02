import React, { useState, useEffect } from 'react';
import { getDatabase, ref, remove, onValue } from 'firebase/database';

const UserDeletion = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      const db = getDatabase();
      const usersRef = ref(db, 'users');

      // Listen for changes to the users collection
      onValue(usersRef, (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
          // Convert the object of users into an array
          const userList = Object.keys(userData).map((uid) => ({ uid, ...userData[uid] }));
          // Filter users by role
          const filteredUsers = userList.filter((user) => user.role === 'user');
          setUsers(filteredUsers);
        } else {
          setUsers([]);
        }
      });
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = (uid) => {
    const db = getDatabase();
    const userRef = ref(db, `users/${uid}`);

    // Remove the user data from the database
    remove(userRef)
      .then(() => {
        console.log(`User with UID ${uid} deleted successfully.`);
        // Optionally, update the state to reflect the deletion
        setUsers((prevUsers) => prevUsers.filter((user) => user.uid !== uid));
      })
      .catch((error) => {
        console.error('Error deleting user:', error.message);
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mt-6 mb-4">Delete User Accounts</h2>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        {users.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {users.map((user) => (
              <li key={user.uid} className="flex justify-between items-center py-4">
                <span className="text-lg font-semibold">{user.email}</span>
                <button onClick={() => handleDeleteUser(user.uid)} className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserDeletion;
