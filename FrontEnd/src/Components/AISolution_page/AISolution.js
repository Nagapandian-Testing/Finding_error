import React from "react";
import "../AISolution_page/AISolution.css";
import Footer from "../HomePage/Footer/Footer";
export default function AISolution() {
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
                    <li id="li_des">IOS Development</li>
                  </a>
                  <a href="/flutter-app-development" id="a_dec">
                    {" "}
                    <li id="li_des">Flutter App Development</li>
                  </a>
                  <a href="/AI-solution" id="a_dec">
                    {" "}
                    <li
                      id="li_des"
                      style={{
                        backgroundImage:
                          "linear-gradient(-45deg, orange 0%, white 100%)",
                        fontWeight: "bold",
                      }}
                    >
                      AI Solution
                    </li>
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
                      <img src="assets/images/Illustrator.webp" alt="" />
                      <div class="overlay_AI">
                        <p class="vericaltext">
                          <h1 id="vertical_service"> AI Solution</h1>
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <h2 id="mad_head">
                    <span style={{ color: "orange", fontSize: "20px" }}>
                      AI{" "}
                    </span>
                    Solutions
                  </h2>
                  <h2 id="border_head">
                    {" "}
                    <span>What is AI?</span>
                  </h2>
                  <p>
                    AI technology is all-pervasive today. Everything from
                    intelligent search engines like Alexa and Siri to chatbots
                    to robotics and AR/VR gaming consoles run on AI. In a
                    competitive world of enterprise mobility solutions, AI can
                    be the much-needed game-changer for your product that can
                    transform end-user experience, elevating your business brand
                    perception and making your brand stand out.
                  </p>

                  <h2 id="border_head">
                    {" "}
                    <span>Why Us?</span>
                  </h2>
                  <p>
                    We at Szigony are an emerging AI Development Solutions
                    provider building highly immersive AI integrated solutions
                    that enhance human potential, by reducing decision-making
                    processes, eliminating human error and redundancy, and
                    aiding complex data processing and analysis.
                  </p>
                  <p>
                    Our team of highly skilled programmers and AI developers
                    have the competence to develop powerful AI powered products
                    for a wide range of industries from Healthcare to Gaming and
                    technology.
                  </p>
                  <div>
                    <h2 style={{ color: "black" }}>Our expertise includes</h2>
                    <ul style={{marginLeft:'-30px'}}>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        AI Consulting: We offer bespoke AI consulting services
                        that can help you identify how AI will fit into your
                        business model helping you reinvent your market reach.
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        Machine Language: Use of Machine language algorithms
                        help us build smart products for businesses that use
                        acquired data to give intelligent solutions and aid
                        decision making processes
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        Natural Language Processing: Our NLP driven tools and
                        services enable businesses to do in depth analysis of
                        market trends by accurately extracting information and
                        insights from social media and web apps
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
