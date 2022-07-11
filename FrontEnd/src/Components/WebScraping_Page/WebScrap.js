import React from "react";
import Footer from "../HomePage/Footer/Footer";
import Footer1 from "../HomePage/Footer1/Footer1";
import "../WebScraping_Page/WebScrap.css";
export default function WebScrap() {
  return (
    <div id="heig_scrap">
      <div id="marg_in">
        <div class="container">
          <div class="row">
            <div class="d-none d-md-block col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <ul id="listt_link">
                <a href="/mobile-app-development" id="a_dec">
                  <li id="li_des">Mobile App Development</li>
                </a>
                <a href="/android-app-development" id="a_dec">
                  <li id="li_des">Android App Development</li>
                </a>
                <a href="/ios-development" id="a_dec">
                  {" "}
                  <li id="li_des">IOS Development</li>
                </a>
                <a href="/flutter-app-development" id="a_dec">
                  {" "}
                  <li id="li_des">Flutter App Development</li>
                </a>
                <a href="/AI-solution" id="a_dec">
                  {" "}
                  <li id="li_des">AI Solution</li>
                </a>
                <a href="/web-development" id="a_dec">
                  <li id="li_des">Web Development</li>
                </a>
                <a href="/devops/" id="a_dec">
                  {" "}
                  <li id="li_des">Devops</li>
                </a>
                <a href="/automation-testing" id="a_dec">
                  <li id="li_des">Automation Testing</li>
                </a>
                <a href="/webscraping" id="a_dec">
                  {" "}
                  <li
                    id="li_des"
                    style={{
                      backgroundImage:
                        "linear-gradient(-45deg, orange 0%, white 100%)",
                      fontWeight: "bold",
                    }}
                  >
                    Web Scrapping
                  </li>
                </a>
              </ul>
            </div>

            <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
              <div class="container" id="content_design">
                {/* <div class="con1">
                  <div class="thumbanail left">
                    <img src="assets/images/webscraping.png" alt="" />
                    <div class="overlay_Flutter">
                      <p class="vericaltext">
                        <h1 id="vertical_service"> Web Scrapping</h1>
                      </p>
                    </div>
                  </div>
                </div> */}
                <h2 id="mad_head">
                  <span style={{ color: "orange", fontSize: "20px" }}>
                    Web{" "}
                  </span>
                  Scrapping
                </h2>

                <p style={{ textIndent: "50px" }}>
                  There are many Data Analytic companies which are in need of
                  data from various sources such as e-commerce websites, social
                  media network and so on. We are specialized in extracting data
                  from unstructured media to structured format, Comparison of
                  data from one competitor with another is made easier with
                  visualization tools, However, the set of inter-comparable data
                  is not in state in which only the data needs to be compared.
                  This state is attributed to lack of Artificial Intelligence in
                  the visualization tools.
                </p>
                <br></br>
                <p>
                  We provide the solution to extract data from various sources
                  and cleanse the same, which is needed to render the
                  multi-source data as “state in which comparison can start”...
                </p>
                <br></br>
                <p>
                  <strong style={{ color: "black" }}>Technologies Used:</strong>{" "}
                  Node.js, Perl, Python, selenium, Redis, RabbitMq and Mysql.
                </p>
                <br></br>
                <p>
                  <strong style={{ color: "black" }}>
                    Ethical Collection Policies:
                  </strong>{" "}
                  We strictly follow General Data Protection Regulation (GDPR)
                  guidelines while collecting data from any external sources.
                </p>

                <div class="container">
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
                      <a href="/service" id="fa_siz_center">
                        All services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
