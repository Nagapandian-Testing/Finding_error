import React from "react";
import "../AboutContact/AboutContact.css";
export default function AboutContact() {
  return (
    <div className="con-full">
      <div className="">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div
            className=""
            id="bg_img_idea"
            style={{ backgroundImage: "url('assets/images/idea-1.png')" }}
          >
            <div className="d-flex justify-content-between align-items-start flex-column ms-3">
              <div className="">
                <p style={{ fontStyle: "italic" }}>
                  Have an idea? We are listening.
                </p>
              </div>
              <a
                className="btn btn-warning text-capitalize mt-2"
                href="/contact#achieve1"
                role="button"
              >
                Reach Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
