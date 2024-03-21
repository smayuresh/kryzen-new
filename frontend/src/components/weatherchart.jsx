import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const WeatherChart = () => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // Fetch chart data from the new API endpoint
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&forecast_days=16");
                // Modify the response data as needed to match the format expected by Chart.js
                const modifiedData = {
                    labels: response.data.forecast.map(day => day.date), // Example: Assuming date is available in the forecast data
                    datasets: [{
                        label: 'Max Temperature',
                        data: response.data.forecast.map(day => day.temperature_2m_max),
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }, {
                        label: 'Min Temperature',
                        data: response.data.forecast.map(day => day.temperature_2m_min),
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                };
                setChartData(modifiedData);
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (chartData) {
            // Create the chart once data is available
            const myChart = new Chart(chartRef.current, {
                type: 'line',
                data: chartData,
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

            // Cleanup function to destroy the chart when component unmounts
            return () => {
                myChart.destroy();
            };
        }
    }, [chartData]);

    return (
        <div className="card" style={{ width: '500px', float: 'right', marginRight: '20px' }}>
            <div className="card-body">
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
};

export default WeatherChart;
