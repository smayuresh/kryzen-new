import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const MeteoChart = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                // Fetch weather data from the Open-Meteo API
                const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,uv_index_max');
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    useEffect(() => {
        if (weatherData && weatherData.forecast) {
            // Extract necessary data for chart
            const temperatures = weatherData.forecast.map(day => day.temperature);
            const dates = weatherData.forecast.map(day => new Date(day.time * 1000).toLocaleDateString());

            // Create the chart
            const ctx = document.getElementById('weatherChart');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Temperature (°C)',
                        data: temperatures,
                        borderColor: 'blue',
                        borderWidth: 1,
                        fill: false
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        }
    }, [weatherData]);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Weather Forecast</h5>
                <div className="chart-container">
                    <canvas id="weatherChart"></canvas>
                </div>
            </div>
        </div>
    );
};

export default MeteoChart;
