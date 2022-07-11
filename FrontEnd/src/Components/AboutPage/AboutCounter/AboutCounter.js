import React from "react";
import "../AboutCounter/AboutCounter.css";
export default function AboutCounter() {
  return (
    <div className="achive-main">
      <div class="container">
        <h1 class="main-heading text-center mt-5" id="achieve">
          <span style={{ color: "orange" }}>Our</span> Achievements
        </h1>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div id="acA">
              <a href="#client">
                {" "}
                <h2 class="label success">Our Clients</h2>{" "}
              </a>
              <ul id="ac_list">
                <li id="ac_list">
                  <i
                    class="fas fa-angle-double-right"
                    style={{ marginRight: "5px", color: "red" }}
                  ></i>
                  Two-Way Street — ideas and information flow openly and
                  regularly, based on a foundation of mutual trust
                </li>
                <img id="AC_Client" src="assets/images/Client_suceess.png" />
                <li id="ac_list">
                  <i
                    class="fas fa-angle-double-right"
                    style={{ marginRight: "5px", color: "red" }}
                  ></i>
                  Long-Term relationship has the value add of deep-rooted
                  industry and company knowledge and relationships.
                </li>
              </ul>

              <ul>
                <li>.</li>
                <li>.</li>
                <li>.</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h2 class="label success">Projects</h2>
            <ul>
              <li>.</li>
              <li>.</li>
              <li>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
