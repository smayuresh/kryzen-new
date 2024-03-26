import React from "react";

export default function HomeNavbar() {
  return (
    <>
      <div>
        <div>
          
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/p/a">Accounts</a>
                </li>
                <li className="breadcrumb-item">Test Account's team</li>
              </ol>
            </nav>

            <div className="row">
              <div className="col-6 col-sm-4 col-lg-6">
                <div className="card">
                  <div className="card-body p-3 text-center">
                    <div className="h1 m-0" style={{ color: "#23bf6a" }}>
                      ₹0.00
                    </div>
                    <div className="text-muted">30 Days Revenue</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-lg-6">
                <div className="card">
                  <div className="card-body p-3 text-center">
                    <div className="h1 m-0">0kg</div>
                    <div className="text-muted">30 Days Output</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-sm-4 col-lg-3">
                <div className="card">
                  <div className="card-body p-3 text-center">
                    <div className="h1 m-0">1</div>
                    <div className="text-muted">Nurseries</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-lg-3">
                <div className="card">
                  <div className="card-body p-3 text-center">
                    <div className="h1 m-0">0</div>
                    <div className="text-muted">Active Batches</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-lg-3">
                <div className="card">
                  <div className="card-body p-3 text-center">
                    <div className="h1 m-0"></div>
                    <div className="text-muted">Current Revenue</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-lg-3">
                <div className="card">
                  <div className="card-body p-3 text-center">
                    <div className="h1 m-0"></div>
                    <div className="text-muted">Current Output</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cards">
              <div className="col-12">
                <div className="card ">
                  <div className="card-header">
                    <h3 className="card-title">Test Account's team</h3>
                    <div className="card-options">
                      <div className="btn-list">
                        <a
                          className="btn btn-primary btn-sm"
                          href="/p/a/1509/edit"
                        >
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-4">Name</dt>
                      <dd className="col-sm-8">Test Account's team</dd>
                      <dt className="col-sm-4">Farm count</dt>
                      <dd className="col-sm-8">0</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cards">
              <div className="col-12">
                <div className="card ">
                  <div className="card-header">
                    <h3 className="card-title">Nurseries</h3>
                    <div className="card-options">
                      <div className="btn-list">
                        <a
                          className="btn btn-primary btn-sm"
                          href="/p/a/1509/nurseries/new"
                        >
                          New
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-outline table-vcenter text-nowrap card-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Active Batches</th>
                          <th>Number of Plants</th>
                          <th>Germinated Plants</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="/p/a/1509/nurseries/2403">Kryzen</a>
                          </td>
                          <td>0 batches</td>
                          <td>0</td>
                          <td>0</td>
                          <td className="text-right">
                            <a
                              className="btn btn-primary btn-sm"
                              href="/p/a/1509/nurseries/2403"
                            >
                              View
                            </a>
                            <a
                              className="btn btn-danger btn-sm"
                              data-confirm="Delete shubham?"
                              rel="nofollow"
                              data-method="delete"
                              href="/p/a/1509/nurseries/2403"
                            >
                              <i className="fe fe-trash"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer text-right">
                    <div className="row">
                      <div className="col-12"></div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <a
                          className="btn btn-primary btn-sm"
                          href="/p/a/1509/nurseries"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cards">
              <div className="col-12">
                <div className="card ">
                  <div className="card-header">
                    <h3 className="card-title">Farms</h3>
                    <div className="card-options">
                      <div className="btn-list">
                        <a
                          className="btn btn-primary btn-sm"
                          href="/p/a/1509/farms/new"
                        >
                          New
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-outline table-vcenter text-nowrap card-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Aream (sqft)</th>
                          <th>Structure</th>
                          <th>Last Output</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                  <div className="card-footer text-right">
                    <div className="row">
                      <div className="col-12"></div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <a
                          className="btn btn-primary btn-sm"
                          href="/p/a/1509/farms"
                        >
                          View all
                        </a>
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
                      Copyright ©️ 2024 Kryzen Biotech. All rights reserved.
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
        </div>
      </div>
    </>
  );
}
