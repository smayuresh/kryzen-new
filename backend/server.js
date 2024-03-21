const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000; // You can change the port number if needed

app.use(cors());
app.use(express.json());

// Data
const data = [
  {
    productname: "Italian Basil",
    wholesaleprice: "₹33.80",
    retailprice: "₹52.00",
    weekshigh: "₹59.00",
    weekslow: "₹47.00",
    trend: "",
    href: "/",
  },
  {
    productname: "Swiss Chard",
    wholesaleprice: "₹31.20",
    retailprice: "₹48.00",
    weekshigh: "₹59.00",
    weekslow: "₹48.00",
    trend: "",
    href: "/",
  },
  {
    productname: "Broccoli",
    wholesaleprice: "₹29.90",
    retailprice: "₹46.00",
    weekshigh: "₹59.00",
    weekslow: "₹46.00",
    trend: "",
    href: "/broccoli",
  },

  {
    productname: "Kale",
    wholesaleprice: "₹31.20",
    retailprice: "₹48.00",
    weekshigh: "₹59.00",
    weekslow: "₹48.00",
    trend: "",
    href: "/",
  },
  {
    productname: "Celery",
    wholesaleprice: "₹31.20",
    retailprice: "₹48.00",
    weekshigh: "₹59.00",
    weekslow: "₹48.00",
    trend: "",
    href: "/",
  },
  // Add more data here
];

const broccoliData = [
  {
    data: "7 Mar 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    data: "6 Mar 2024",
    retailprice: "₹49.00",
    wholesaleprice: "₹31.00 - ₹33.00",
    priceatfarm: "₹32.00 - ₹29.00",
  },
  {
    data: "5 Mar 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    data: "4 Mar 2024",
    retailprice: "₹55.00",
    wholesaleprice: "₹35.00 - ₹37.00",
    priceatfarm: "₹36.00 - ₹33.00",
  },
  {
    data: "3 Mar 2024",
    retailprice: "₹54.00",
    wholesaleprice: "₹34.00 - ₹37.00",
    priceatfarm: "₹35.00 - ₹32.00",
  },
  {
    data: "2 Mar 2024",
    retailprice: "₹59.00",
    wholesaleprice: "₹37.00 - ₹40.00",
    priceatfarm: "₹38.00 - ₹35.00",
  },
  {
    data: "1 Mar 2024",
    retailprice: "₹55.00",
    wholesaleprice: "₹35.00 - ₹37.00",
    priceatfarm: "₹36.00 - ₹33.00",
  },
  {
    data: "29 Feb 2024",
    retailprice: "₹57.00",
    wholesaleprice: "₹36.00 - ₹39.00",
    priceatfarm: "₹37.00 - ₹34.00",
  },
  {
    data: "28 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    data: "27 Feb 2024",
    retailprice: "₹52.00",
    wholesaleprice: "₹33.00 - ₹35.00",
    priceatfarm: "₹34.00 - ₹31.00",
  },
  {
    data: "26 Feb 2024",
    retailprice: "₹51.00",
    wholesaleprice: "₹32.00 - ₹35.00",
    priceatfarm: "₹33.00 - ₹31.00",
  },
  {
    data: "25 Feb 2024",
    retailprice: "₹50.00",
    wholesaleprice: "₹32.00 - ₹34.00",
    priceatfarm: "₹33.00 - ₹30.00",
  },
  {
    data: "24 Feb 2024",
    retailprice: "₹47.00",
    wholesaleprice: "₹30.00 - ₹32.00",
    priceatfarm: "₹31.00 - ₹28.00",
  },
  {
    data: "23 Feb 2024",
    retailprice: "₹52.00",
    wholesaleprice: "₹33.00 - ₹35.00",
    priceatfarm: "₹34.00 - ₹31.00",
  },
  {
    data: "22 Feb 2024",
    retailprice: "₹56.00",
    wholesaleprice: "₹35.00 - ₹38.00",
    priceatfarm: "₹36.00 - ₹34.00",
  },
  {
    data: "21 Feb 2024",
    retailprice: "₹49.00",
    wholesaleprice: "₹31.00 - ₹33.00",
    priceatfarm: "₹32.00 - ₹29.00",
  },
  {
    data: "20 Feb 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    data: "19 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    data: "18 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    data: "17 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    data: "16 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    data: "15 Feb 2024",
    retailprice: "₹54.00",
    wholesaleprice: "₹34.00 - ₹37.00",
    priceatfarm: "₹35.00 - ₹32.00",
  },
  {
    data: "14 Feb 2024",
    retailprice: "₹54.00",
    wholesaleprice: "₹34.00 - ₹37.00",
    priceatfarm: "₹35.00 - ₹32.00",
  },
  {
    data: "13 Feb 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    data: "12 Feb 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    data: "11 Feb 2024",
    retailprice: "₹48.00",
    wholesaleprice: "₹30.00 - ₹33.00",
    priceatfarm: "₹31.00 - ₹29.00",
  },
  {
    data: "10 Feb 2024",
    retailprice: "₹47.00",
    wholesaleprice: "₹30.00 - ₹32.00",
    priceatfarm: "₹31.00 - ₹28.00",
  },
];



{/*const chartData = {
  labels: ['Jan 15', 'Jan 31', 'Feb 15', 'Feb 29', 'Mar 15', 'Mar 31', 'Apr 15', 'Apr 30', 'May 15', 'May 31', 'Jun 15', 'Jun 30'],
  datasets: [{
      label: 'Retail Price (Per Kg)',
      data: [20, 46, 30, 70,] // Actual data points
  }]
};*/}


const combinedData = {

  broccoliData: broccoliData
};


app.get("/api/combinedData", (req, res) => {
  res.json(combinedData);
});
app.get("/api/chartData", (req, res) => {
  res.json(chartData);
});



// Endpoint for fetching paginated data
app.get("/api/data", (req, res) => {
  // Pagination parameters
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
  const elementsPerPage = 10;
  const startIndex = (page - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;

  // Extract the subset of data for the requested page
  const paginatedData = data.slice(startIndex, endIndex);

  // Respond with the paginated data
  res.json(paginatedData);
});

app.get("/api/broccolidata", (req, res) => {
  res.json(broccoliData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
