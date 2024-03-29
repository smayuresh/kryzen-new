import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const Meteo = ({ apiUrl }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "An error occurred");
      }
    };

    fetchData();
  }, [apiUrl]);

  const secondsToHours = (seconds) => {
    return (seconds / 3600).toFixed(2);
  };

  const extractChartData = (key) => {
    const labels = data.daily?.time.filter((_, index) => index % 2 === 0) || [];
    const filteredData = data.daily?.[key].filter((_, index) => index % 2 === 0) || [];

    if (key === "daylight_duration" || key === "sunshine_duration") {
      return {
        labels: labels,
        datasets: [
          {
            label: key,
            data: filteredData.map(secondsToHours),
            borderColor: key === "daylight_duration" ? "rgba(255,205,86,1)" : "rgba(54,162,235,1)",
            backgroundColor: key === "daylight_duration" ? "rgba(255,205,86,0.2)" : "rgba(54,162,235,0.2)",
            fill: false,
            yAxisID: "y-axis-1",
          },
        ],
      };
    }

    return {
      labels: labels,
      datasets: [
        {
          label: key,
          data: filteredData,
          borderColor: key === "temperature_2m_max" ? "rgba(75,192,192,1)" : "rgba(255,99,132,1)",
          backgroundColor: key === "temperature_2m_max" ? "rgba(75,192,192,0.2)" : "rgba(255,99,132,0.2)",
          fill: false,
          yAxisID: "y-axis-2",
        },
      ],
    };
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      yAxes: [
        {
          id: "y-axis-1",
          type: "linear",
          position: "left",
          ticks: {
            callback: function(value) {
              return value + (value === "0" ? "h" : " hrs");
            }
          },
          scaleLabel: {
            display: true,
            labelString: "Duration (hrs)"
          }
        },
        {
          id: "y-axis-2",
          type: "linear",
          position: "right",
          ticks: {
            callback: function(value) {
              return value + "°C";
            }
          },
          scaleLabel: {
            display: true,
            labelString: "Temperature (°C)"
          }
        },
      ],
    },
  };

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Daily Weather Data</h1>
      <div className="chart-container">
        <h2>Max Temperature (°C)</h2>
        <Line data={extractChartData("temperature_2m_max")} options={options} />

        <h2>Min Temperature (°C)</h2>
        <Line data={extractChartData("temperature_2m_min")} options={options} />

        <h2>Daylight Duration (hrs)</h2>
        <Line data={extractChartData("daylight_duration")} options={options} />

        <h2>Sunshine Duration (hrs)</h2>
        <Line data={extractChartData("sunshine_duration")} options={options} />
      </div>
    </div>
  );
};

export default Meteo;
