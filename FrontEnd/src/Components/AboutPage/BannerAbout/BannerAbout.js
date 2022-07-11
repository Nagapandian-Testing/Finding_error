import React from "react";
import "../BannerAbout/BannerAbout.css";
export default function BannerAbout() {
  return (
    <div id="BanerAbout">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pt-md-0 pt-4 my-auto">
            <p class="h2 text-capitalize" id="h2-About">
              About <span style={{ color: "orange" }}>Us</span>{" "}
            </p>
            <p id="banner-P"><u> </u></p>
            <p id="banner-P1">
              Your trusted Solutions Partner for the digital transformation of
              you and your company.{" "}
            </p>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
            <img
              src="assets/images/Aboutus_new.png"
              alt="..."
              className="aboutBanner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
