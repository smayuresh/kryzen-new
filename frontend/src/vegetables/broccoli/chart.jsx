import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const LineChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch broccoli data from the server
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/broccolidata"
        );
        const broccolidata = response.data.reverse(); // Reverse the data

        // Extract retail prices from broccolidata
        const retailPrices = broccolidata.map((item) =>
          parseFloat(item.retailprice.replace("₹", "").trim())
        );

        // Set chart data
        setChartData({
          labels: broccolidata.map((item) => item.data),
          datasets: [
            {
              label: "Retail Price (Per Kg)",
              data: retailPrices,
            },
          ],
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching broccoli data:", error);
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartData) {
      // Create the chart once data is available
      const myChart = new Chart(chartRef.current, {
        type: "line",
        data: chartData,
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });

      // Cleanup function to destroy the chart when component unmounts
      return () => {
        myChart.destroy();
      };
    }
  }, [chartData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="card-title">
      <h2 className="card-title">Price Trend</h2>
      <canvas style={{ minHeight: "240px" }} ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart;
