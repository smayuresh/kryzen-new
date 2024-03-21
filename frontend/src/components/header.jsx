import React from 'react'

export default function Header() {
  return (
    <div>
      



      <header className="navbar navbar-expand-md navbar-light">
        <div className="container-xl">
          <a
            href="/homenavbar"
            className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pr-0 pr-md-3"
          >
            <img
              src="https://app.kryzen.com/packs/media/images/kryzen-logo2-3500bcbbdeb667df12ee3d574941ce09.png"
              alt="Kryzen"
              className="navbar-brand-image"
              style={{ width: 110, height: 32 }}
            />
          </a>
          <div className="navbar-nav flex-row order-md-last">
            <div className="nav-item dropdown d-md-flex mr-3">
              <a href="/" className="nav-link px-0">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="bell"
                  className="svg-inline--fa fa-bell fa-w-14 icon"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"
                  />
                </svg>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-card dropdown-menu-arrow ">
                <div className="card">
                  <div className="card-body">No new notification.</div>
                </div>
              </div>
            </div>
            <div className="navbar-nav flex-row order-md-last">
              <div className="nav-item dropdown user-dropdown my-2">
                <a
                  href="/"
                  className="nav-link d-flex lh-1 text-reset p-0 my-2"
                >
                  <span className="user-avatar avatar" />
                  <div className="d-none d-xl-block pl-2">
                    <div>Test Account</div>
                    <div className="mt-1 small text-muted">
                      Test Account's team
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow ">
                  <a className="dropdown-item" href="/auth/legacy/sign_out">
                    🪂 Sign out
                  </a>
                </div>
              </div>
              <button
                className="navbar-toggler my-2 ml-2"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
