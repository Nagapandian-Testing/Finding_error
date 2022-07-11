import React from "react";
import "../DrivingFactors/DrivingFactors.css";
export default function DrivingFactors() {
  return (
    <div id="df-full">
      <div class="container">
        <div class="row">
          <h1 class="main-heading text-center" id="achieve">
            <span style={{ color: "orange" }}>Our</span> Driving Factors
          </h1>
          <p style={{ fontWeight: "500", color: "black" }}>
            We are driven by the 3 core values that our trident stands for.
          </p>

          <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <div class="con">
              <div class="text-center" id="onee">
                <div class="md-circle-12 rounded-circle border-white bg-success d-flex justify-content-center align-items-center mx-auto mb-md-4 mb-3">
                  <img id="driven-img" src="assets/images/quality-white.png" />
                </div>
                <p class="h3 text-capitalize " id="dri_head">
                  Quality
                </p>
                <br></br>
                <p className="points_DF">
                  <ul id="ul_DF">
                    <li id="li_DF">
                      Ensuring top-notch quality that exceeds customer
                      expectations is at the crux of our work.{" "}
                    </li>
                    <br></br>
                    <li id="li_DF">
                      Over the last 3 years our team has successively delivered
                      market-leading products and solutions
                    </li>
                    <br></br>
                    <li id="li_DF">
                      that ensure optimal performance in the most mission-
                      critical operation environment and volatile infrastructure
                      such as remote and rural access locations.
                    </li>
                    <br></br>
                    <li id="li_DF">
                      Our team works closely with you to ensure end-to-end
                      communication and transparency at every step.
                    </li>
                  </ul>
                </p>
              </div>

              <div class="overlay">
                <p class="vericaltext">
                  <h1 id="vertical"> QUALITY</h1>
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <div class="con">
              <div class="text-center" id="onee">
                <div class="md-circle-12 rounded-circle border-white bg-warning d-flex justify-content-center align-items-center mx-auto mb-md-4 mb-3">
                  <img id="driven1-img" src="assets/images/trust2.png" />
                </div>
                <p class="h3 text-capitalize " id="dri_head">
                  Trust
                </p>
                <br></br>
                <p className="text-left">
                  <ul id="ul_DF">
                    <li id="li_DF">
                      At Szigony, we know that trust can only be built by
                      integrity and consistency.
                    </li>
                    <br></br>
                    <li id="li_DF">
                      Hence we have aligned our growth story with the success of
                      our clients.
                    </li>

                    <br></br>
                    <li id="li_DF">
                      Our flexible project management approaches and Agile
                      execution model ensure that we deliver optimal solutions
                      keeping the constraints of time, cost and scope in check
                      while maintaining minimal risk.
                    </li>
                    <br></br>
                    <li id="li_DF">
                      We aspire to be your trusted Solutions partner, which can
                      reach out to for all your digital transformation needs.
                    </li>
                  </ul>
                </p>

                <div class="overlay1">
                  <p class="vericaltext">
                    <h1 id="vertical"> TRUST</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <div class="con">
              <div class="text-center" id="onee">
                <div class="md-circle-12 rounded-circle border-white bg-danger d-flex justify-content-center align-items-center mx-auto mb-md-4 mb-3">
                  <img
                    id="driven2-img"
                    src="assets/images/inovation-white.png"
                  />
                </div>
                <p class="h3 text-capitalize " id="dri_head">
                  Innovation
                </p>
                <br></br>
                <p className="text-left">
                  <ul id="ul_DF">
                    <li id="li_DF">
                      Our team of experienced architects, designers and
                      developers take pride in creating solutions that are a
                      perfect balance of innovation, design and functionality.
                    </li>
                    <br></br>
                    <li id="li_DF">
                      Our enterprise mobility applications and solutions are
                      driven by intuitive UI/UX features and a strong
                      cloud-based infrastructure with immersive AI features and
                      solutions inbuilt.
                    </li>
                    <br></br>
                    <li id="li_DF">
                      We endeavor is to deliver products and solutions that will
                      be a game-changer for our customers in terms of business
                      momentum, brand perception.
                    </li>
                  </ul>
                </p>

                <div class="overlay2">
                  <p class="vericaltext">
                    <h1 id="vertical"> INOVATION</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
