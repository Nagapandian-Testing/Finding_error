import React from "react";
import Footer from "../HomePage/Footer/Footer";
import "../IOS_Page/Ios.css";
export default function IOS() {
  return (
    <div>
      <>
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
                    <li
                      id="li_des"
                      style={{
                        backgroundImage:
                          "linear-gradient(-45deg, orange 0%, white 100%)",
                        fontWeight: "bold",
                      }}
                    >
                      IOS Development
                    </li>
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
                    <li id="li_des">Web Scrapping</li>
                  </a>
                </ul>
              </div>

              <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                <div class="container" id="content_design">
                  {/* <div class="con1">
                    <div class="thumbanail left">
                      <img src="assets/images/iphone dev.jpg" alt="" />
                      <div class="overlay_ios">
                        <p class="vericaltext">
                          <h1 id="vertical_service"> IOS Development</h1>
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <h2 id="mad_head">
                    <span style={{ color: "orange", fontSize: "20px" }}>
                      IOS{" "}
                    </span>
                    Development
                  </h2>

                  <p style={{ textIndent: "50px" }}>
                    When it comes to the mobile phones, Apple iPhones are a
                    class apart esp concerning their design, usability and
                    security. It's no wonder that Apple is the industry leader
                    in smartphone manufacturers esp in the United States and
                    Europe with a rapid customer base building up in China and
                    other countries selling more than 200 million iPhones every
                    year. The iOS Operating system is a unique platform that is
                    the real differentiating factor behind the popularity of
                    Apple products such as iPhones and iPods. Studies indicate
                    that an iPhone user is more likely to spend on premium app
                    services and products. Building the right iOS app with
                    intuitive UI/UX design and robust functionality can be a
                    game-changer for your business idea to take wings and
                    establish your brand image as a premium product.
                  </p>
                  <p>
                    At Szigony we are a team of skilled iOS/iPhone App
                    developers with proven expertise in building bespoke Apps
                    that can drive businesses to great heights. Our focus is
                    always on meeting customer requirements and exceeding
                    expectations by providing a seamless service and high-
                    performance deliverables.
                  </p>

                  <h2 id="border_head">
                    {" "}
                    <span style={{ color: "black" }}>Why Choose Us?</span>
                  </h2>
                  <div>
                    <ul style={{marginLeft:'-30px'}}>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        We provide end-to-end solutions that cover all aspects
                        of mobile application development lifecycle
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        A strong focus on ensuring the Quality of all our
                        deliverables
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        Rapid design,implementation, integration and deployment
                        of apps and solutions using Agile processes and DevOP
                        methodologies
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        A skilled team with an in-depth understanding of Apple
                        design principles and guidelines with strong knowledge
                        of OOPs, Swift and Apple iOS lifecycle.
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        Focus on building Smart solutions that are compatible
                        across a range of iPhone models and iOS versions
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
             <Footer></Footer>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
