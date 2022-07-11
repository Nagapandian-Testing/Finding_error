import React from "react";
import "../AboutIntro/AboutIntro.css";

export default function AboutIntro() {
  return (
    <div style={{ backgroundColor: "rgb(245, 247, 255)" }}>
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <img src="assets/images/circleTable.png" id="serviceHome-img" />
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 py-lg-5 py-5">
            <h2 class="text-left" id="p2-clients">
              <span style={{ color: "orange" }}>Our</span> Services
            </h2>
            <p>
              At Szigony we aim to be your trusted partner who can take care of
              your technology needs while you focus on the business.
            </p>
            <ul id="WD_ul1">
              <a href="/mobile-app-development">
                <li id="a1">Mobile App </li>
              </a>
              <a href="/android-app-development">
                <li id="a1">Android App </li>
              </a>
              <a href="/flutter-app-development">
                <li id="a1">Flutter App </li>
              </a>
              <a id="a1_a" href="/automation-testing">
                <li id="a1">Automation Testing </li>
              </a>
              <a href="/AI-solution">
                <li id="a1">AI Solutions </li>
              </a>
              <a href="/devops">
                <li id="a1">DevOPs </li>
              </a>
              <a href="/webscraping">
                <li id="a1">Web Scraping </li>
              </a>
              <a href="/ios-development">
                <li id="a1">IOS Development </li>
              </a>
              <a href="/web-development">
                <li id="a1">Web Development </li>
              </a>
              <a href="/service">
                <li id="a2">All service </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
