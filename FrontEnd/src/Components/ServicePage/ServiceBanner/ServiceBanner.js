import React from "react";
import "../ServiceBanner/ServiceBanner.css";
export default function ServiceBanner() {
  return (
    <div id="service_top">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
            id="firstcon"
          >
            <p id="service_head">
              {" "}
              <span style={{ color: "orange" }}>Our</span> Services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
