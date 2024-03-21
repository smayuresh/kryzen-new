import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const MeteoChart = () => {
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch weather data from OpenMeteo API
  const fetchWeatherData = async () => {
    try {
      // Make a GET request to fetch weather data
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min');
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      
      // Extracting relevant weather data (daily temperature)
      const dailyTemperatureData = data.daily;
      setWeatherData(dailyTemperatureData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  useEffect(() => {
    const renderChart = () => {
      if (weatherData) {
        const ctx = document.getElementById('weatherChart').getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: weatherData.map((entry, index) => index.toString()), // Assuming daily data, you can adjust labels accordingly
            datasets: [{
              label: 'Max Temperature (°C)',
              data: weatherData.map(entry => entry.temperature_2m_max),
              borderColor: 'rgb(255, 99, 132)',
              tension: 0.1
            }, {
              label: 'Min Temperature (°C)',
              data: weatherData.map(entry => entry.temperature_2m_min),
              borderColor: 'rgb(54, 162, 235)',
              tension: 0.1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    };

    renderChart(); // Call renderChart directly here

  }, [weatherData]); // Dependency array includes only weatherData

  return (
    <div>
      <h2>Weather Chart</h2>
      <canvas id="weatherChart" width="400" height="200"></canvas>
    </div>
  );
};

export default MeteoChart;
