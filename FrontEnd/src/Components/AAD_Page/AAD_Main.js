import React from "react";
import "../AAD_Page/AAD_Main.css";
import Footer from "../HomePage/Footer/Footer";
import Footer1 from "../HomePage/Footer1/Footer1";
export default function AAD_Main() {
  return (
    <>
      <div id="marg_in">
        <div className="container">
          <div className="row">
            <div
              className="d-none d-md-block col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
              id="height_fixed"
            >
              <ul id="listt_link">
                <a href="/mobile-app-development" id="a_dec">
                  <li id="li_des">Mobile App Development</li>
                </a>
                <a href="/android-app-development" id="a_dec">
                  <li
                    id="li_des"
                    style={{
                      backgroundImage:
                        "linear-gradient(-45deg, orange 0%, white 100%)",
                      fontWeight: "bold",
                    }}
                  >
                    Android App Development
                  </li>
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
                <a href="/devops" id="a_dec">
                  {" "}
                  <li id="li_des">Devops</li>
                </a>
                <a href="/automation-testing" id="a_dec">
                  <li id="li_des">Automation Testing</li>
                </a>
                <a href="/webscraping" id="a_dec">
                  {" "}
                  <li id="li_des">Web Scrapping</li>
                </a>
              </ul>
            </div>

            <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
              <div className="container" id="content_design">
                {/* <div className="con1">
                  <div className="thumbanail left">
                    <img src="assets/images/android.jpg" alt="" />
                    <div className="overlay_android">
                      <p className="vericaltext">
                        <h1 id="vertical_service"> Android App Development</h1>
                      </p>
                    </div>
                  </div>
                </div> */}
                <h2 id="mad_head">
                  <span style={{ color: "orange", fontSize: "20px" }}>
                    Android{" "}
                  </span>
                  App Development
                </h2>
                <p style={{ textIndent: "50px" }}>
                  As of 2020,there are more than 3 billion Android smartphone
                  users in the world with the number expected to rise
                  exponentially in the coming years. Szigony is an emerging
                  android app development company based in Bangalore India that
                  specializes in building high-performance android apps with
                  strong backend architecture and appealing UI designs that will
                  exceed your expectations.
                </p>

                <h2 id="border_head">
                  {" "}
                  <span style={{ color: "black" }}>What we offer?</span>
                </h2>
                <div>
                  <ul style={{ marginLeft: "-30px" }}>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>
                      Custom made designs
                    </li>
                    <li>
                      Implementation of Agile Processes that shorten the gap
                      between ideation to product delivery timeline
                    </li>
                    <br></br>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>
                      Proven expertise in the entire app design lifecycle, from
                      custom interface design to robust back-end architecture
                    </li>
                    <br></br>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>
                      A strong technical team with expertise in Android Studio,
                      GitHub, Jenkins and Jira.
                    </li>{" "}
                    <br></br>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>
                      Robust QA processes.
                    </li>{" "}
                    <br></br>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>
                      On-time Delivery
                    </li>{" "}
                    <br></br>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>
                      Solutions that suit your budget.
                    </li>
                  </ul>
                  <h2 style={{ color: "black" }}>
                    Types of Android App Services offered by us:
                  </h2>
                  <ul style={{ marginLeft: "-30px" }}>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>
                      Customised App Solutions
                    </li>{" "}
                    <br></br>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>
                      Enterprise Mobile Applications
                    </li>{" "}
                    <br></br>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>
                      Installation, Upgrade and Migration Services
                    </li>{" "}
                    <br></br>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>
                      Application Support and Maintenance
                    </li>{" "}
                    <br></br>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>
                      Application Testing and QA
                    </li>{" "}
                    <br></br>
                    <li>
                      <i
                        className="fas fa-angle-double-right"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>
                      Cloud-Based Solutions
                    </li>
                  </ul>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
                    <a href="/service" id="fa_siz_center">
                      All services
                    </a>
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
