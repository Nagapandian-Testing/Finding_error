import { useState } from "react";
import "../Career_Page/CareerJobs.css";
import "../JobApply_Page/JobForm.js";

export default function CareerJobs() {
  function role(role) {
    localStorage.setItem("role", role);
  }

  return (
    <div id="careerjobHeight">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <p id="career_sizes">
              Our <span style={{ color: "orange" }}>Career</span>{" "}
            </p>
            <p id="career_banner_p">
            At Szigony, we're always on the lookout for someone who believes in
            putting consumers above everyone and everything else, while
            envisioning growth and pursuing excellence for the years to come.
            Sounds like you?
          </p>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <img src="assets/images/carrer_icon.png" id="image-sizes" />
          </div>
        </div>

        <div class="row"></div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <h1 class="main-heading text-center" id="joinSz">
            Join the <span style={{ color: "orange" }}>Szigony</span> Team!
          </h1>
        
          <h1 class="main-heading ">Why Work With Us?</h1>
          <p>
            <i
              class="fas fa-angle-double-right"
              style={{ marginRight: "5px", color: "red" }}
            ></i>
            Our team works closely with you to ensure end-to-end communication
            and transparency at every step.
          </p>
          <p>
            <i
              class="fas fa-angle-double-right"
              style={{ marginRight: "5px", color: "red" }}
            ></i>
            Our flexible project management approaches and Agile execution model
            ensure that we deliver optimal solutions keeping the constraints of
            time, cost and scope in check while maintaining minimal risk.
          </p>
          <p>
            <i
              class="fas fa-angle-double-right"
              style={{ marginRight: "5px", color: "red" }}
            ></i>
            Our team of experienced architects, designers and developers take
            pride in creating solutions that are a perfect balance of
            innovation, design and functionality.
          </p>
        </div>
      </div>

      <div>
        <div class="container mt-3 " id="bg-colourr">
          <div>
            <h1 class="main-heading text-left mb-3" id="simOpen">
              Similar <span style={{ color: "orange" }}>Openings</span>
            </h1>
          </div>

          <table class="table table-bordered table-striped text-center">
            <thead class="thead-dark text-center">
              <tr>
                <th scope="col"></th>
                <th scope="col" colspan="3">
                  Job Role
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
              <tr>
                <th scope="row">1</th>
                <td colspan="3">React Js</td>
                <td>
                  <a
                    id="apply_form"
                    href="/Job-Apply"
                    onClick={() => role("Role - ( React JS )")}
                    role="button"
                  >
                    Apply
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td colspan="3">Node JS</td>
                <td>
                  <a
                    id="apply_form"
                    href="/Job-Apply"
                    onClick={() => role("Role - ( Node JS )")}
                    role="button"
                  >
                    Apply
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="3">Angular</td>
                <td>
                  <a
                    id="apply_form"
                    href="/Job-Apply"
                    onClick={() => role("Role - ( Angular )")}
                    role="button"
                  >
                    Apply
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td colspan="3">Python</td>
                <td>
                  <a
                    id="apply_form"
                    href="/Job-Apply"
                    onClick={() => role("Role - ( Python )")}
                    role="button"
                  >
                    Apply
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td colspan="3">Java</td>
                <td>
                  <a
                    id="apply_form"
                    href="/Job-Apply"
                    onClick={() => role("Role - ( Java )")}
                    role="button"
                  >
                    Apply
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td colspan="3">PHP</td>
                <td>
                  <a
                    id="apply_form"
                    href="/Job-Apply"
                    onClick={() => role("Role - ( PHP )")}
                    role="button"
                  >
                    Apply
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
