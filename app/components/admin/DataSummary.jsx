import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';

const DataSummary = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const usersRef = ref(db, 'users');

        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("Fetched data:", data);
          setUserData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const usersWithUserRole = Object.values(userData).filter(user => user.role === 'user');

  const totalUsers = usersWithUserRole.length;
  const activeUsers = usersWithUserRole.filter(user => user.role === 'user' && !user.isFrozen).length;

  let totalBalance = 0;
  usersWithUserRole.forEach(user => {
    totalBalance += user.balance || 0;
  });

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-800">
        <thead>
          <tr>
            <th className="border border-gray-800 p-2">Full Name</th>
            <th className="border border-gray-800 p-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          {usersWithUserRole.map(user => (
            <tr key={user.uid}>
              <td className="border border-gray-800 p-2">{user.additionalDetails && user.additionalDetails.fullName ? user.additionalDetails.fullName : "N/A"}</td>
              <td className="border border-gray-800 p-2">${user.balance || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Total Users: {totalUsers}</p>
        <p>Active Users: {activeUsers}</p>
        <p>Total Balance Across All Accounts: ${totalBalance}</p>
      </div>
    </div>
  );
};

export default DataSummary;
