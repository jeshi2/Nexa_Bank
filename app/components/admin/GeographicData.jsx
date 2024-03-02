import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { Bar } from 'react-chartjs-2';

const GeographicData = () => {
  const [userData, setUserData] = useState({});

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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Process user data to get geographic distribution
  const geographicData = {};

  Object.values(userData).forEach(user => {
    // Check if the user has the role of "user" and if additionalDetails exist
    if (user.role === 'user' && user.additionalDetails && user.additionalDetails.residentialAddress) {
      const address = user.additionalDetails.residentialAddress;
      // Extracting country from the address, assuming the last word is the country
      const country = address.split(' ').pop();
      geographicData[country] = (geographicData[country] || 0) + 1;
    }
  });
  // Sort geographic data by country name
  const sortedGeographicData = Object.entries(geographicData).sort((a, b) => a[0].localeCompare(b[0]));

  // Extract countries and counts for chart data
  const countries = sortedGeographicData.map(entry => entry[0]);
  const counts = sortedGeographicData.map(entry => entry[1]);

  // Chart data
  const chartData = {
    labels: countries,
    datasets: [
      {
        label: 'Number of Users by Country',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: counts,
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
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Geographic Data</h2>
      <div className="h-40 rounded-md overflow-hidden shadow-lg">
        <Bar data={chartData} options={chartOptions} />
      </div>
      <div>
        <h3 className="text-lg font-semibold mt-2 mb-4">Geographic Distribution Table</h3>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Number of Users</th>
            </tr>
          </thead>
          <tbody>
            {sortedGeographicData.map(([country, count]) => (
              <tr key={country}>
                <td className="border px-4 py-2">{country}</td>
                <td className="border px-4 py-2">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GeographicData;
