import React from "react";

export default function Welcome() {
  return (
    <div className="page page-center">
      <div className="container container-tight py-4">
        <div className="text-center mb-4">
          <a href="/" className="navbar-brand navbar-brand-autodark">
            <img
              src="https://app.kryzen.com/packs/media/images/kryzen-logo2-3500bcbbdeb667df12ee3d574941ce09.png"
              width="300"
              height="150"
              alt="Tabler"
              className="navbar-brand-image"
            />
          </a>
        </div>
        <form
          className="card card-md"
          action="/"
          method="get"
          autocomplete="off"
          novalidate=""
        >
          <div className="card-body">
            <h2 className="card-title text-center mb-4">
              Log in to your account
            </h2>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                fdprocessedid="dxt97j"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group input-group-flat">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  autocomplete="off"
                  fdprocessedid="p4uhd5"
                />
                <span className="input-group-text">
                  <a
                    href="/"
                    className="link-secondary"
                    data-bs-toggle="tooltip"
                    aria-label="Show password"
                    data-bs-original-title="Show password"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="mb-3"></div>
            <div className="form-footer">
              <a href="/homenavbar"><button
                type="submit"
                className="btn btn-primary w-100"
                fdprocessedid="yi5r1k"
              >
                Sign in
              </button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
