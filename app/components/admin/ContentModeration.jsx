import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { FaSnowflake } from 'react-icons/fa';

const ContentModeration = () => {
  const [users, setUsers] = useState([]);
  
  // Function to fetch the list of users from the database
  useEffect(() => {
    const fetchUsers = () => {
      const db = getDatabase();
      const usersRef = ref(db, 'users');

      // Listen for changes to the users collection
      onValue(usersRef, (snapshot) => {
          const userData = snapshot.val();
          if (userData) {
              // Convert the object of users into an array
              const userList = Object.keys(userData)
                  .map((uid) => ({
                      uid,
                       ...userData[uid], ...userData[uid].additionalDetails,
                  }))
                  .filter((user) => user.role === 'user')
              setUsers(userList);
          } else {
              setUsers([]);
          }
      });
  };

    
    fetchUsers();
  }, []);
  
  // Function to toggle the account status (freeze/unfreeze)
  const toggleAccountStatus = async (uid, isFrozen) => {
    try {
      const db = getDatabase();
      const userRef = ref(db, `users/${uid}`);
      // Update the account status in the database
      await set(userRef, { ...users.find(user => user.uid === uid), isFrozen });
      // Update the local state to reflect the change
      setUsers(prevUsers => prevUsers.map(user => user.uid === uid ? { ...user, isFrozen } : user));
    } catch (error) {
      console.error('Error toggling account status:', error.message);
    }
  };
  
  return (
    <div>
      
      <div >
        <h3 className="text-lg font-semibold mt-4 text-center mb-2">Freeze User Accounts</h3>
        <div className="shadow border rounded-lg p-4">
          <ul>
            {users.map(user => (
              <li key={user.uid} className="flex items-center justify-between py-2">
                <span className="text-black-500">{user.fullName || 'N/A'}</span>
                <span className="text-black-500 ">{user.email}</span>
                <button 
                  onClick={() => toggleAccountStatus(user.uid, !user.isFrozen)}
                  className={`text-white rounded-md px-4 py-2 ${user.isFrozen ? 'bg-red-500' : 'bg-green-500'}`}
                >
                  {user.isFrozen ? (
                    <>
                      <FaSnowflake className="inline-block mr-2" /> Unfreeze
                    </>
                  ) : (
                    'Freeze'
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentModeration;
