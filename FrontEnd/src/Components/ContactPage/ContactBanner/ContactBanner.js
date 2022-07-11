import React from "react";
import "../ContactBanner/ContactBanner.css";
export default function ContactBanner() {
  return (
    <div>
      <div id="contact_top">
        <div className="container">
          <div class="row">
            <div class=" col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
              <p id="contact_Head">
                Contact <span style={{ color: "orange" }}>Us</span>
              </p>
              <p className="text" id="para_ban">
                Your trusted Solutions Partner for the digital transformation of
                you and your company.
              </p>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <img
                id="contact_imgg"
                src="/assets/images/Contact_pageMap.png"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
