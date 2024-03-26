import React, { useState, useEffect } from "react";
import LineChart from "./chart";
import axios from "axios";

export default function Broccoli() {
  const [broccoliData, setBroccoliData] = useState([]);

  useEffect(() => {
    const fetchBroccoliData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/broccolidata");
        if (response.status !== 200) {
          throw new Error("Failed to fetch broccoli data");
        }
        setBroccoliData(response.data);
      } catch (error) {
        console.error("Error fetching broccoli data:", error);
      }
    };

    fetchBroccoliData();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-header d-print-none">
        <div className="container">
          <div className="row g-3 align-items-center">
            <div className="col-auto"></div>
            <div className="col">
              <h2 className="page-title">Broccoli</h2>
              <div className="text-secondary">
                <ul className="list-inline list-inline-dots mb-0">
                  <li className="list-inline-item"></li>
                  <li className="list-inline-item">Broccoli</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="row product-info">
  <div className="col-md-6 col-xl-3">
    <div className="card card-sm">
      <div className="card-body d-flex align-items-center">
        <span className="bg-yellow text-white stamp mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon ml-1"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="3 7 9 13 13 9 21 17" />
            <polyline points="21 10 21 17 14 17" />
          </svg>
        </span>
        <div className="mr-3 lh-sm">
          <div className="strong">
            ₹46.00<span> Today Retail</span>
          </div>
          <div className="text-muted">Online</div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-xl-3">
    <div className="card card-sm">
      <div className="card-body d-flex align-items-center">
        <span className="bg-yellow text-white stamp mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon ml-1"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="3 7 9 13 13 9 21 17" />
            <polyline points="21 10 21 17 14 17" />
          </svg>
        </span>
        <div className="mr-3 lh-sm">
          <div className="strong">
            ₹29.90<span> Today Wholesale</span>
          </div>
          <div className="text-muted">Offline</div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-xl-3">
    <div className="card card-sm">
      <div className="card-body d-flex align-items-center">
        <span className="bg-green text-white stamp mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon ml-1"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="3 17 9 11 13 15 21 7" />
            <polyline points="14 7 21 7 21 14" />
          </svg>
        </span>
        <div className="mr-3 lh-sm">
          <div className="strong">
            ₹59.00<span> Week Highest</span>
          </div>
          <div className="text-muted">(Wholesale)</div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-xl-3">
    <div className="card card-sm">
      <div className="card-body d-flex align-items-center">
        <span className="bg-yellow text-white stamp mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon ml-1"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="3 7 9 13 13 9 21 17" />
            <polyline points="21 10 21 17 14 17" />
          </svg>
        </span>
        <div className="mr-3 lh-sm">
          <div className="strong">
            ₹46.00<span> Week Lowest</span>
          </div>
          <div className="text-muted">(Wholesale)</div>
        </div>
      </div>
    </div>
  </div>
</div>


      <LineChart />

      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-12">
              <div className="card">
                <div className="card-table table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>DATE</th>
                        <th>RETAIL PRICE</th>
                        <th>WHOLESALE PRICE</th>
                        <th>PRICE AT FARM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Map over broccoliData and generate table rows */}
                      {broccoliData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.data}</td>
                          <td>{item.retailprice}</td>
                          <td>{item.wholesaleprice}</td>
                          <td>{item.priceatfarm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col col-auto ml-auto">
              <div className="row align-items-center"></div>
            </div>
            <div className="col col-12 col-lg-auto mt-3 mt-lg-0 text-center">
              <div className="text-center">
                Copyright © 2024 Kryzen Biotech. All rights reserved.
                <br />
                Made in India with{" "}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  className="svg-inline--fa fa-heart fa-w-16 icon text-danger"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                  ></path>
                </svg>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
