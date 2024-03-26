import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="navbar-expand-md navbar-top-header">
        <div className="collapse navbar-collapse " id="navbar-menu">
          <div className="navbar navbar-light">
            <div className="container-xl">
              <ul className="navbar-nav">
                <li className="nav-item py-2  ">
                  <a href="/homenavbar" className="nav-link">
                    <span className="nav-link-title">🏠 Home</span>
                  </a>
                </li>
                <li className="nav-item py-2  active">
                  <a
                    aria-current="page"
                    className="nav-link"
                    href="/pricewatcher"
                  >
                    <span className="nav-link-title">🗓️ Pricewatcher</span>
                  </a>
                </li>
                <li className="nav-item py-2  ">
                  <a
                    aria-current="page"
                    className="nav-link"
                    href="/buyerconnect"
                  >
                    <span className="nav-link-title">🙋🏽‍♂️ Buyer Connect</span>
                  </a>
                </li>
                <li className="nav-item py-2  ">
                  <a aria-current="page" href="/nurseries" className="nav-link">
                    <span className="nav-link-title">🌱 Nurseries</span>
                  </a>
                </li>
                <li className="nav-item py-2  ">
                  <a href="/" className="nav-link">
                    <span className="nav-link-title">🥬 Farms</span>
                  </a>
                </li>
                <li className="nav-item py-2  ">
                  <a href="/" className="nav-link">
                    <span className="nav-link-title">🎯 Market Prices</span>
                  </a>
                </li>
                <li className="nav-item py-2  ">
                  <a href="/" className="nav-link">
                    <span className="nav-link-title">🧑🏽‍🌾 Workforce</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
