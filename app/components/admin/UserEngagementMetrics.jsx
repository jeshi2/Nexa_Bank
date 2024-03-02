import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { Pie } from 'react-chartjs-2';

const UserEngagementMetrics = () => {
  const [userData, setUserData] = useState({});
 // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const usersRef = ref(db, 'users');

        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setUserData(data);
        }
        //setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        //setLoading(false);
      }
    };

    fetchData();
  }, []);

  /*if (loading) {
    return <div>Loading...</div>;
  }*/

  
  const activeUsersCount = Object.values(userData).filter(user => user.role === 'user' && user.isFrozen).length;
  const inactiveUsersCount = Object.values(userData).filter(user => user.role === 'user' && !user.isFrozen).length;
  
  const chartData = {
    labels: ['Active Users', 'Inactive Users'],
    datasets: [
      {
        label: 'User Engagement Metrics',
        data: [activeUsersCount, inactiveUsersCount],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full h-auto">
      <h2 className="text-xl font-bold mb-4">User Engagement Metrics</h2>
      <div className="w-full h-auto overflow-x-auto">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default UserEngagementMetrics;
