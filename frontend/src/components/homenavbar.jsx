import React from "react";

export default function HomeNavbar() {
  return (
    <>
      <div className="page-wrapper">
        {/*<---Breadcrumbs--->*/}
        <div className="page-header d-print-none">
          <div className="container-xl">
            <ol className="breadcrumb" aria-label="breadcrumbs">
              <li className="breadcrumb-item">
                <a href="/homenavbar">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a href="/">Test Account's Team</a>
              </li>
            </ol>
          </div>
        </div>

        {/*<---Page body--->*/}
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-deck row-cards">
              <div className="col-12">
                <div className="row row-cards">
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body p-3 text-center">
                        <div className="d-flex align-items-center">
                          <div className="subheader">Revenue</div>
                          <div className="ms-auto lh-1">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle text-secondary"
                                href="/"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Last 7 days
                              </a>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                style={{}}
                              >
                                <a className="dropdown-item active" href="/">
                                  Last 7 days
                                </a>
                                <a className="dropdown-item" href="/">
                                  Last 30 days
                                </a>
                                <a className="dropdown-item" href="/">
                                  Last 3 months
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="h1 m-0" style={{ color: "#23bf6a" }}>
                          ₹0.00
                        </div>
                        <div className="text-muted">30 Days Revenue</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body p-3 text-center">
                        <div className="h1 m-0">0kg</div>
                        <div className="text-muted">30 Days Output</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="row row-cards">
                  <div className="col-sm-6 col-lg-3">
                    <div className="card">
                      <div className="card-body p-3 text-center">
                        <div className="h1 m-0">1</div>
                        <div className="text-muted">Nurseries</div>
                      </div>
                    </div>
                  </div>
                  <div className="ccol-sm-6 col-lg-3">
                    <div className="card">
                      <div className="card-body p-3 text-center">
                        <div className="h1 m-0">0</div>
                        <div className="text-muted">Active Batches</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card">
                      <div className="card-body p-3 text-center">
                        <div className="h1 m-0"></div>
                        <div className="text-muted">Current Revenue</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card">
                      <div className="card-body p-3 text-center">
                        <div className="h1 m-0"></div>
                        <div className="text-muted">Current Output</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card ">
                  <div className="card-header">
                    <h3 className="card-title">Test Account's team</h3>
                    <div className="card-actions">
                      <a href="/" className="btn btn-primary">
                        Edit
                      </a>
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

              <div className="col-12">
                <div className="card ">
                  <div className="card-header">
                    <h3 className="card-title">Nurseries</h3>
                    <div className="card-actions">
                      <a href="/" className="btn btn-primary">
                        Edit
                      </a>
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
                            <a href="/">Mayuresh</a>
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

              <div className="col-12">
                <div className="card ">
                  <div className="card-header">
                    <h3 className="card-title">Farms</h3>
                    <div className="card-options">
                      <div className="card-actions">
                        <a href="/" className="btn btn-primary">
                          Edit
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
          </div>
        </div>
      </div>
    </>
  );
}
