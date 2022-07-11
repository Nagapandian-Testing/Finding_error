import React from "react";
import $ from "jquery";
import "../MAD_Main/MAD_Main.css";
import Footer from "../../HomePage/Footer/Footer";
import Footer1 from "../../HomePage/Footer1/Footer1";
export default function MAD_Main() {
  return (
    <>
      <div id="marg_in">
        <div class="container">
          <div class="row">
            <div
              class="d-none d-md-block col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 "
              id="mob_res"
            >
              <ul id="listt_link">
                <a href="/mobile-app-development" id="a_dec">
                  <li
                    id="li_des"
                    style={{
                      backgroundImage:
                        "linear-gradient(-45deg, orange 0%, white 100%)",
                      fontWeight: "bold",
                    }}
                  >
                    Mobile App Development
                  </li>
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

            <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
              <div class="container" id="content_design">
            
                <div id="job_top1">
                  <h2 id="mad_head">
                    <span style={{ color: "orange", fontSize: "20px" }}>
                      Mobile{" "}
                    </span>
                    App Development Services
                  </h2>
                  <p style={{ textIndent: "50px" }}>
                    As of 2021,there are more than 3.5 billion smartphone users
                    worldwide. More than two-thirds of internet users use mobile
                    apps for shopping. And more than 70% of users use mobile
                    apps for product research before making a purchase. For any
                    business today, giving your clients a seamless and enriching
                    mobile app experience is not only a requirement but an
                    opportunity to stand apart from the competition. At Szigony
                    we aim to be your trusted partner who can take care of your
                    technology needs while you focus on the business. Our team
                    of expert mobile app developers, designers and testers bring
                    their rich experience and knowledge of different Operating
                    systems, associated API and APKs, coding languages, AI and
                    DevOps to the table. To create highly efficient, customized
                    mobile apps with rich UI/UX features, seamless portability
                    across platforms, immersive AI experience along with stable
                    backend architecture that can withstand downtimes and ensure
                    robust ROI.
                  </p>
                  <p>
                    It is a long fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English.
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many websites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like).
                  </p>

                  <h2 style={{ color: "black" }}>
                    Our App Development Lifecycle comprises:
                  </h2>
                  <div>
                    <ul style={{marginLeft:'-30px'}}>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        Customer Requirement Gathering: We work with you closely
                        to understand and define the exact requirements as per
                        your business objectives and goals.
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        <span style={{ fontWeight: "bold" }}>Define:</span>{" "}
                        Define the App specifications wrt to platform, features
                        and feasibility
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        <span style={{ fontWeight: "bold" }}>Design:</span>
                        Working in sync with clients to finalize the design
                        details.
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        <span style={{ fontWeight: "bold" }}>Develop:</span>{" "}
                        Developing robust, high-performance apps within the
                        shortest iterative cycles by integrating Agile and
                        DevOps processes and methodologies
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        <span style={{ fontWeight: "bold" }}>Quality:</span> We
                        take utmost care in maintaining high standards of
                        Quality Assurance in each iterative build cycle to
                        ensure smooth operations and deliverables that are high
                        performing, robust and secure.
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        <span style={{ fontWeight: "bold" }}>Support:</span> We
                        offer end-to-end support and maintenance during and
                        after product launch.
                        
                      </li>
                    </ul>
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
      </div>
   
              
    </>
  );
}
