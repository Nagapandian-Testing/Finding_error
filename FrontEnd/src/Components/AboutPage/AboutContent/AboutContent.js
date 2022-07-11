import React from "react";
import "../AboutContent/AboutContent.css";
export default function AboutContent() {
  return (
    <div id="ac-full">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <p id="abt-p">
              <i id="fa-pointt" class="fas fa-code"></i>
              <span style={{ marginLeft: "10px" }}></span>Since the last ----
              years we have been instrumental in helping businesses across
              diverse domains in turning their business ideas into successful
              products and solutions.
            </p>
            <p id="abt-p">
              <i id="fa-pointt" class="fas fa-leaf"></i>
              <span style={{ marginLeft: "10px" }}></span> We are experts in
              delivering end-to-end customized solutions in the field of
            </p>
            <ul>
              <li>Enterprise Mobile App Development, </li>
              <li>Web development, </li>
              <li>Web-Scraping,</li>
              <li>
                {" "}
                Test Automation Services and more, with integrated AI features
                while leveraging DevOps principles.{" "}
              </li>
            </ul>
            <p id="abt-p"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
