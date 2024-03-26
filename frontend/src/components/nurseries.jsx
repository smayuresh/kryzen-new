import React from "react";

export default function Nurseries() {
  return (
    
  
        <div className="page-wrapper">
          {/* Page body */}
          <div className="page-body">
            <div className="container-xl d-flex flex-column justify-content-center">
              <div className="empty">
                <div className="empty-img">
                  <img
                    src="./static/illustrations/undraw_printing_invoices_5r4r.svg"
                    height={128}
                    alt=""
                  />
                </div>
                <p className="empty-title">No results found</p>
                <p className="empty-subtitle text-secondary">
                  Try adjusting your search or filter to find what you're
                  looking for.
                </p>
                <div className="empty-action">
                  <a href="./." className="btn btn-primary">
                    {/* Download SVG icon from http://tabler-icons.io/i/plus */}
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
                      <path d="M12 5l0 14" />
                      <path d="M5 12l14 0" />
                    </svg>
                    Add your first client
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
  
  );
}
