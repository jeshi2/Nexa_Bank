import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import DataSummary from './DataSummary';
import UserEngagementMetrics from './UserEngagementMetrics';
import GeographicData from './GeographicData'

const Analytics = () => {
  const [userData, setUserData] = useState({});
  //const [loading, setLoading] = useState(true);

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
       // setLoading(false);
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

  // Process user data to get the count of users with the role of 'user'
  const userCount = Object.values(userData).filter(user => user.role === 'user').length;

  // Chart data
  const chartData = {
    labels: ['Users'],
    datasets: [
      {
        label: 'Number of Users',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [userCount],
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Configure Chart.js scales globally
  Chart.defaults.scale = {
    ...Chart.defaults.scale,
    y: {
      type: 'linear',
      beginAtZero: true,
    },
  };

  return (
    <>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div className="shadow-lg rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">User Analytics</h2>
        <div style={{ height: '400px', width: '100%' }}>
          <Bar  data={chartData} options={chartOptions} />
        </div>
      </div>
      <div className="shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Data Metrics</h2>
        <DataSummary />
      </div>
      <div className="shadow-lg rounded-lg p-4">
        <UserEngagementMetrics />
      </div>
      <div className="shadow-lg rounded-lg p-4">
        <GeographicData />
      </div>
    </div>
    </>
  );
  
};

export default Analytics;
