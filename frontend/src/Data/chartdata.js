import React from 'react';
import Chart from '.components/Chart';

export default function App() {
  const chartData = [
    { date: '2024-03-01', price: 10.5 },
    { date: '2024-03-02', price: 11.2 },
    { date: '2024-03-03', price: 10.8 },
    // Add more data points as needed
  ];

  return (
    <div>
      <h1>Chart Demo</h1>
      <Chart chartdata={chartData} />
    </div>
  );
}
