import React, { useState, useEffect } from "react";

const Tabletable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const elementsPerPage = 5; // Number of elements per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/data");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / elementsPerPage);

  // Calculate index range for current page
  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;

  // Get elements for current page
  const currentElements = data.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <div className="page-content d-flex flex-fill max-w-full full-height">
        <div className="flex-fill px-lg-2 mw-100">
          <div className="container my-4">
            <div className="row">
              <div className="col col-12">
                <div className="card">
                  <div
                    className="card-header py-2"
                    style={{ display: "block" }}
                  >
                    <div className="float-left">
                      <h3 className="card-title">Price Watchlist: India</h3>
                      <p className="card-subtitle p-0 m-0">
                        Find price of different comodities.
                      </p>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="dimmer">
                      <div className="loader" />
                      <div className="dimmer-content">
                        <div className="table-responsive">
                          <table className="table table-vcenter text-nowrap table-hover">
                            <thead>
                              <tr>
                                <th>Product Name</th>
                                <th>Wholesale Price</th>
                                <th>Retail Price</th>
                                <th>Weeks High</th>
                                <th>Weeks Low</th>
                                <th>Trend</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentElements.map((item, index) => (
                                <tr key={index}>
                                  <td>
                                    <a
                                      href={`/${item.productname.toLowerCase()}`}
                                    >
                                      {item.productname}
                                    </a>
                                  </td>
                                  <td>{item.wholesaleprice}</td>
                                  <td>{item.retailprice}</td>
                                  <td>{item.weekshigh}</td>
                                  <td>{item.weekslow}</td>
                                  <td>{item.trend}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div className="d-flex justify-content-center my-2">
                            <button
                              className="btn btn-md btn-primary m-2"
                              disabled={currentPage === 1}
                              onClick={goToPreviousPage}
                            >
                              Previous
                            </button>
                            <span>
                              Page {currentPage} of {totalPages}
                            </span>
                            <button
                              className="btn btn-md btn-primary m-2"
                              disabled={currentPage === totalPages}
                              onClick={goToNextPage}
                            >
                              Next
                            </button>
                          </div>
                        </div>

                        <div className="my-2">
                          <h3>Disclosure:</h3>
                          <ol>
                            <li>
                              This lists are made available on as available
                              basis.
                            </li>
                            <li>
                              Do not consider this pricing as selling or buying
                              price.
                            </li>
                            <li>
                              Price watcher only helps you to understand the
                              market directions.
                            </li>
                            <li>
                              if you want to suggest any changes or want to add
                              any crop here give us call on 9870-424-425 or
                              email us at contact@kryzen.com
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
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
              <div className="row align-items-center" />
            </div>
            <div className="col col-12 col-lg-auto mt-3 mt-lg-0 text-center">
              <div className="text-center">
                Copyright © 2023 Kryzen Biotech. All rights reserved.
                <br /> Made with{" "}
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
                  />
                </svg>{" "}
                in India.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Tabletable;
