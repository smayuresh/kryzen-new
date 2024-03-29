import React, { useState, useEffect } from "react";
import LineChart from "./chart";
import axios from "axios";

export default function Broccoli() {
  const [broccoliData, setBroccoliData] = useState([]);

  useEffect(() => {
    const fetchBroccoliData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/broccolidata"
        );
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
    /* Page header */
    <div className="page-wrapper">
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-3 align-items-center">
            <div className="col">
              <h2 className="page-title">Broccoli</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-deck row-cards">
            <div className="col-12">
              <div className="row row-cards">
                <div className="col-sm-6 col-lg-3">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-primary text-white avatar">
                            {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M7 7l10 10" />
                              <path d="M17 8l0 9l-9 0" />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">
                            ₹46 Today Retail
                          </div>
                          <div className="text-secondary">Online</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-green text-white avatar">
                            {/* Download SVG icon from http://tabler-icons.io/i/shopping-cart */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                              <path d="M17 17h-11v-14h-2" />
                              <path d="M6 5l14 1l-1 7h-13" />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">
                            ₹29.90 Today Wholesale
                          </div>
                          <div className="text-secondary">Offline</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-twitter text-white avatar">
                            {/* Download SVG icon from http://tabler-icons.io/i/brand-twitter */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-bar"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 21l0 -18" />
                              <path d="M15 6l-3 -3l-3 3" />
                              <path d="M9 21l6 0" />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">
                            ₹59.00 Week Highest
                          </div>
                          <div className="text-secondary">(Wholesale)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-facebook text-white avatar">
                            {/* Download SVG icon from http://tabler-icons.io/i/brand-facebook */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-bar"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 3v18" />
                              <path d="M9 18l3 3l3 -3" />
                              <path d="M9 3h6" />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">
                            ₹46 Week Lowest
                          </div>
                          <div className="text-secondary">(Wholesale)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<---Vegetable Data--->*/}
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-body text-center">
                    <img
                      src="https://app.kryzen.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBXUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--27c9553f623568cef6b887fe6c9a8172ffb52094/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRERJd01IZ3lNREFHT3daVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--f606db1ae713b4809df8c8e1a6c6eef1342456d4/Broccoli.jpg"
                      alt="Broccoli"
                    />
                    <h3 className="card-title mb-1">Broccoli</h3>
                    <div className="text-muted">Brassica oleracea-</div>
                  </div>

                  <div className="btn-list">
                    <a
                      href="https://www.ugaoo.com/catalogsearch/result/?q=broccoli%20seedshttps://www.ugaoo.com/catalogsearch/result/?q=broccoli%20seeds"
                      className="btn btn-primary w-100"
                    >
                      Purchase Seeds
                    </a>

                    <a href="/broccoli" className="btn btn-primary w-100">
                      View KnowledgeBase
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-8">
              <div className="card">
                <div className="card-body">
                  <LineChart />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="card my-3">
                    <div className="card-header">
                      <h3 className="card-title">Basic Info</h3>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table table-vcenter card-table wiki-table my-2">
                          <tbody className="">
                            <tr className="">
                              <td className="">Pollination :</td>
                              <td className="">Cross</td>
                            </tr>
                            <tr className="">
                              <td className="">Availibility : </td>
                              <td className="">Worldwide</td>
                            </tr>
                            <tr className="">
                              <td className="">Hydroponically grown :</td>
                              <td className="">Yes</td>
                            </tr>
                            <tr className="">
                              <td className="">Plant Type : </td>
                              <td className="">Edible</td>
                            </tr>
                            <tr className="">
                              <td className="">Native : </td>
                              <td className="">Asia (India)</td>
                            </tr>
                            <tr className="">
                              <td className="">Climate requirement :</td>
                              <td className="">Tropical climates</td>
                            </tr>
                            <tr className="">
                              <td className="">Culture : </td>
                              <td className="">Seeds</td>
                            </tr>
                            <tr className="">
                              <td className="">Wide Seeds Usage : </td>
                              <td className="">G.M.O.</td>
                            </tr>
                            <tr className="">
                              <td className="">Best Growth : </td>
                              <td className="">Hot &amp; Dry climate</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        Nutritional value per 100 g (3.5 oz)
                      </h3>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table table-vcenter card-table wiki-table  my-2">
                          <tbody className="">
                            <tr className="">
                              <td className="">Energy :</td>
                              <td className="">94 kJ (22 kcal)</td>
                            </tr>
                            <tr className="">
                              <td className="">Carbohydrates :</td>
                              <td className="">2.65 g</td>
                            </tr>
                            <tr className="">
                              <td className="">Sugars :</td>
                              <td className="">0.30 g</td>
                            </tr>
                            <tr className="">
                              <td className="">Dietary fiber :</td>
                              <td className="">1.6 g g</td>
                            </tr>
                            <tr className="">
                              <td className="">Fat :</td>
                              <td className="">0.64 g</td>
                            </tr>
                            <tr className="">
                              <td className="">Protein :</td>
                              <td className="">3.15 g</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table-responsive">
                        <table className="table table table-vcenter card-table wiki-table  my-2">
                          <thead className="">
                            <tr className="">
                              <th className="">Vitamins</th>
                              <th className="">Quantity (%RDV)</th>
                            </tr>
                          </thead>
                          <tbody className="">
                            <tr className="">
                              <td className="">Vitamin A equiv. :</td>
                              <td className="">264 μg (33%)</td>
                            </tr>
                            <tr className="">
                              <td className="">beta-Carotene :</td>
                              <td className="">3142 μg (29%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Thiamine (B1) :</td>
                              <td className="">0.034 mg (3%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Riboflavin (B2) :</td>
                              <td className="">0.076 mg (6%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Niacin (B3) :</td>
                              <td className="">0.902 mg (6%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Pantothenic (B5) :</td>
                              <td className="">0.209 mg (4%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Vitamin B6 :</td>
                              <td className="">0.155 mg (12%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Folate (B9) :</td>
                              <td className="">68 μg (17%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Choline :</td>
                              <td className="">11.4 mg (2%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Vitamin C :</td>
                              <td className="">18.0 mg (22%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Vitamin E :</td>
                              <td className="">0.80 mg (5%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Vitamin K :</td>
                              <td className="">414.8 μg (395%)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table-responsive">
                        <table className="table table table-vcenter card-table wiki-table  my-2">
                          <thead className="">
                            <tr className="">
                              <th className="">Minerals</th>
                              <th className="">Quantity (%RDV)</th>
                            </tr>
                          </thead>
                          <tbody className="">
                            <tr className="">
                              <td className="">Calcium :</td>
                              <td className="">177 mg (18%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Copper</td>
                              <td className="">0.385 mg (19%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Iron :</td>
                              <td className="">3.17 mg (24%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Magnesium :</td>
                              <td className="">64 mg (18%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Manganese :</td>
                              <td className="">1.148 mg (55%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Phosphorus :</td>
                              <td className="">56 mg (8%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Potassium :</td>
                              <td className="">295 mg (6%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Selenium :</td>
                              <td className="">0.3 μg (0%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Sodium :</td>
                              <td className="">4 mg (0%)</td>
                            </tr>
                            <tr className="">
                              <td className="">Zinc :</td>
                              <td className="">0.81 mg (9%)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table-responsive">
                        <table className="table table table-vcenter card-table wiki-table  my-2">
                          <thead className="">
                            <tr className="">
                              <th className="">Other Constituents</th>
                              <th className="">Quantity</th>
                            </tr>
                          </thead>
                          <tbody className="">
                            <tr className="">
                              <td className="">Water</td>
                              <td className="">92.06 g</td>
                            </tr>
                            <tr className="">
                              <td className="">Betaine</td>
                              <td className="">0.4 mg</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p>
                        Units: μg = micrograms; mg = milligrams; IU =
                        International units
                      </p>
                      <p>%RDV : Percentage of Daily Value</p>
                    </div>
                  </div>
                </div>

                {/*<div className="card-body text-center">
                  <img
                    src="https://app.kryzen.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBXUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--27c9553f623568cef6b887fe6c9a8172ffb52094/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRERJd01IZ3lNREFHT3daVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--f606db1ae713b4809df8c8e1a6c6eef1342456d4/Broccoli.jpg"
                    alt="Broccoli"
                  />
                  <h3 className="card-title mb-1">Broccoli</h3>
                  <div className="text-muted">Brassica oleracea-</div>
  </div>*/}
              </div>
            </div>

            <div className="col-md-12 col-lg-8">
              <div className="card">
                <div className="card-table table-responsive">
                  <table className="table text-nowrap table-hover">
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
