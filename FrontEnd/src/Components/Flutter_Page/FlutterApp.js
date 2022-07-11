import React from "react";
import "../Flutter_Page/Flutter.css";
import Footer from "../HomePage/Footer/Footer";
import Footer1 from "../HomePage/Footer1/Footer1";
export default function FlutteFlutterAppr() {
  return (
    <div >
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
                    <li
                      id="li_des"
                      style={{
                        backgroundImage:
                          "linear-gradient(-45deg, orange 0%, white 100%)",
                        fontWeight: "bold",
                      }}
                    >
                      Flutter App Development
                    </li>
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
                      <img src="assets/images/Flutter_icon.png" alt="" />
                      <div class="overlay_Flutter">
                        <p class="vericaltext">
                          <h1 id="vertical_service"> Flutter Development</h1>
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <h2 id="mad_head">
                    <span style={{ color: "orange", fontSize: "20px" }}>
                      Flutter{" "}
                    </span>
                    App Development
                  </h2>

                  <p style={{ textIndent: "50px" }}>
                    Flutter is an open-source UI development kit by Google that
                    enables the development of beautiful natively compiled
                    applications for Android, iOS, Windows, Google, Linux, Mac
                    and the web from a single code base. First introduced in
                    2017, our team has been proactive in researching and
                    implementing Flutter frameworks to create highly customised
                    mobile apps with rich UI that work seamlessly across
                    platforms.
                  </p>

                  <h2 id="border_head">
                    {" "}
                    <span style={{ color: "black" }}>What we offer?</span>
                  </h2>
                  <div>
                    <ul style={{marginLeft:'-30px'}}>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        Faster app Development process: Flutter’s Hot reload
                        feature enables developers to build interactive UI, add
                        features and fix bugs faster by using a rich set of
                        fully customisable widgets. Our team works closely with
                        you to provide end-to-end design optimization and fast
                        turnaround time.
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        Native Performance: Flutter framework uses DART native
                        compilers and inbuilt widgets that can incorporate all
                        critical platform differences such as scrolling,
                        navigation, icons and fonts to build smooth animations
                        with a faster loading capacity. Our skilled team of
                        designers and developers work in tandem to build apps
                        that work seamlessly across platforms and have robust UI
                        and security features.
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        Expressive and Flexible UI: Flutter’s design frameworks
                        and widget library allow developers to delight end-users
                        with enthralling UI/UX designs built using Material
                        Design(Android) and Cupertino (iOS-flavor) widgets, rich
                        motion APIs, smooth natural scrolling, built with
                        platform awareness. Our team of experts has the required
                        expertise to build the right featured packed app that
                        will fit your business needs and budget.
                      </li>
                      <br></br>
                      <li>
                        <i
                          class="fas fa-angle-double-right"
                          style={{ marginRight: "5px", color: "red" }}
                        ></i>
                        A skilled team with in-depth understanding of Apple
                        design principles and guidelines with strong knowledge
                        on OOPs, Swift and Apple iOS lifecycle.
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

               <Footer/>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
