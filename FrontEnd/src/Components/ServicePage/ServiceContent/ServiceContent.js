import React from "react";
import Footer from "../../HomePage/Footer/Footer";
import Footer1 from "../../HomePage/Footer1/Footer1";
import "../ServiceContent/ServiceContent.css";
export default function ServiceContent() {
  return (
    <div id="bg_design_service" style={{ backgroundImage: "url('assets/images/bg_Design.jpg')" }}>
      <div class="container mt-5 mb-5" >
        <div class="row">
          <div class="col-md-4">
            <div
              id="sam"
              class="md-circle1  border-white d-flex justify-content-center align-items-center mb-md-4 mb-3 flex-shrink-0"
            >
              <i class="fas fa-mobile-alt" id="fonaws"></i>
            </div>
            <a href="/mobile-app-development">
              <div class="box">
                <div class="our-services settings">
                  <div class="icon">
                    {" "}
                    <img src="" />{" "}
                  </div>
                  <h4 id="headd"> Mobile App Development </h4>
                </div>
              </div>
            </a>
          </div>

          <div class="col-md-4">
            <div
              id="sam"
              class="md-circle2  border-white d-flex justify-content-center align-items-center mb-md-4 mb-3 flex-shrink-0"
            >
              <i class="fab fa-android" id="fonaws"></i>
            </div>
            <a href="/android-app-development">
              <div class="box">
                <div class="our-services speedup">
                  <div class="icon">
                    {" "}
                    <img src="" />{" "}
                  </div>
                  <h4 id="headd"> Android App Development </h4>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <div
              id="sam"
              class="md-circle3  border-white d-flex justify-content-center align-items-center mb-md-4 mb-3 flex-shrink-0"
            >
              <i class="fab fa-apple" id="fonaws"></i>
            </div>
            <a href="/ios-development">
              <div class="box">
                <div class="our-services privacy">
                  <div class="icon">
                    {" "}
                    <img src="" />{" "}
                  </div>
                  <h4 id="headd"> IOS Development </h4>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div
              id="sam"
              class="md-circle4  border-white d-flex justify-content-center align-items-center mb-md-4 mb-3 flex-shrink-0"
            >
              <img
                src="assets/images/flutterNew.png"
                style={{ width: "60px" }}
              />
            </div>
            <a href="/flutter-app-development">
              <div class="box">
                <div class="our-services backups">
                  <div class="icon">
                    {" "}
                    <img src="" />{" "}
                  </div>
                  <h4 id="headd"> Flutter app development </h4>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <div
              id="sam"
              class="md-circle5  border-white d-flex justify-content-center align-items-center mb-md-4 mb-3 flex-shrink-0"
            >
              <h1 id="ai">AI</h1>
            </div>
            <a href="/AI-solution">
              <div class="box">
                <div class="our-services ssl">
                  <div class="icon">
                    {" "}
                    <img src="" />{" "}
                  </div>
                  <h4 id="headd"> AI Solutions</h4>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <div
              id="sam"
              class="md-circle6  border-white d-flex justify-content-center align-items-center mb-md-4 mb-3 flex-shrink-0"
            >
              <i class="fas fa-laptop-code" id="fonaws"></i>
            </div>
            <a href="/web-development">
              <div class="box">
                <div class="our-services database">
                  <div class="icon">
                    {" "}
                    <img src="" />{" "}
                  </div>
                  <h4 id="headd"> Web Development </h4>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <div
              id="sam"
              class="md-circle7  border-white d-flex justify-content-center align-items-center mb-md-4 mb-3 flex-shrink-0"
            >
              <i class="fas fa-infinity" id="fonaws"></i>
            </div>
            <a href="/devops">
              <div class="box">
                <div class="our-services speedup">
                  <div class="icon">
                    {" "}
                    <img src="" />{" "}
                  </div>
                  <h4 id="headd"> DevOPs </h4>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <div
              id="sam"
              class="md-circle8  border-white d-flex justify-content-center align-items-center mb-md-4 mb-3 flex-shrink-0"
            >
              <i class="fas fa-cogs" id="fonaws"></i>
            </div>
            <a href="/automation-testing">
              <div class="box">
                <div class="our-services settings">
                  <div class="icon">
                    {" "}
                    <img src="" />{" "}
                  </div>
                  <h4 id="headd"> Automation Testing </h4>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <div
              id="sam"
              class="md-circle9  border-white d-flex justify-content-center align-items-center mb-md-4 mb-3 flex-shrink-0"
            >
              <i class="fas fa-search" id="fonaws"></i>
            </div>
            <a href="/webscraping">
              <div class="box">
                <div class="our-services backups">
                  <div class="icon">
                    {" "}
                    <img src="" />{" "}
                  </div>
                  <h4 id="headd"> Web-Scraping </h4>
                </div>
              </div>
            </a>
          </div>
       
        </div>
      </div>
    
    </div>
   
  );
}
