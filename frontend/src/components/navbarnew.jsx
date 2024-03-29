import React from "react";

export default function Navbarnew() {
  return (
    <div>
      <header className="navbar-expand-md">
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="navbar">
            <div className="container-xl">
              <div className="row flex-fill align-items-center">
                <div className="col">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="/homenavbar">
                        <span className="nav-link-title">🏠 Home</span>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/pricewatcher">
                        <span className="nav-link-title">🗓️ Pricewatcher</span>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/buyerconnect">
                        <span className="nav-link-title">🙋🏽‍♂️ Buyer Connect</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./emails.html">
                        <span className="nav-link-title">🌱 Nurseries</span>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="./form-elements.html">
                        <span className="nav-link-title">🥬 Farms</span>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="./form-elements.html">
                        <span className="nav-link-title">🎯 Market Prices</span>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="./form-elements.html">
                        <span className="nav-link-title">🧑🏽‍🌾 Workforce</span>
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#navbar-help"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        role="button"
                        aria-expanded="false"
                      >
                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                          {/* Download SVG icon from http://tabler-icons.io/i/lifebuoy */}
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
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M15 15l3.35 3.35" />
                            <path d="M9 15l-3.35 3.35" />
                            <path d="M5.65 5.65l3.35 3.35" />
                            <path d="M18.35 5.65l-3.35 3.35" />
                          </svg>
                        </span>
                        <span className="nav-link-title">Help</span>
                      </a>
                      <div className="dropdown-menu">
                        <a
                          className="dropdown-item"
                          href="https://tabler.io/docs"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Documentation
                        </a>
                        <a className="dropdown-item" href="./changelog.html">
                          Changelog
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://github.com/tabler/tabler"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source code
                        </a>
                        <a
                          className="dropdown-item text-pink"
                          href="https://github.com/sponsors/codecalm"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-inline me-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                          </svg>
                          Sponsor project!
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-2 d-none d-xxl-block">
                  <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                    <form
                      action="./"
                      method="get"
                      autoComplete="off"
                      noValidate=""
                    >
                      <div className="input-icon">
                        <span className="input-icon-addon">
                          {/* Download SVG icon from http://tabler-icons.io/i/search */}
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
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          defaultValue=""
                          className="form-control"
                          placeholder="Search…"
                          aria-label="Search in website"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
