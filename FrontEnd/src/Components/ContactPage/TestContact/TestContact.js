import React from "react";
import "../ContactMain/ContactMain.css";
import emailjs from "emailjs-com";

import Swal from "sweetalert2";

export default function ContactMain() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h4dtsxl",
        "template_y1ratoc",
        e.target,
        "0UjUnZQdSLtpW_rjU"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success’",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <div class="">
        <div class="row p-5">
          <div
            class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
            id="col1_details"
          >
            <div
              class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 "
              id="contact-box"
            >
              <div class="d-flex justify-content-center align-items-center flex-column bg-white text-center p-1">
                <img
                  style={{ width: "80px", marginTop: "20px" }}
                  src="assets/images/location.png"
                />

                <strong>Venue Address</strong>
                <span style={{ Color: "rgb(0, 0, 0)" }}>
                  {" "}
                  Suite No 4, Colive, Sigma Soft Tech Park, Gamma Block, Varthur
                  Main Road Whitefield, Bangalore - 560066 Karnataka, India{" "}
                </span>
              </div>
            </div>

            <div
              class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
              id="contact-box"
            >
              <div class="d-flex justify-content-center align-items-center flex-column bg-white text-center p-4">
                <img style={{ width: "80px" }} src="assets/images/phone.png" />

                <strong>Phone Number</strong>
                <span>
                  <a href="tel:+91 9686953002 " class="text-decoration-none">
                    {" "}
                    +919686953002{" "}
                  </a>
                </span>
              </div>
            </div>

            <div
              class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
              id="contact-box"
            >
              <div class="d-flex justify-content-center align-items-center flex-column bg-white text-center p-4">
                <img
                  style={{ width: "80px" }}
                  src="assets/images/envelope.png"
                />

                <strong>Email Address</strong>
                <span>
                  <a
                    href="mailto:info@szigonytech.com"
                    class="text-decoration-none"
                    id="mail-text"
                  >
                    {" "}
                    info@szigonytech.com{" "}
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-5">
              <div class="text-center mb-4">
                <h1 class="main-heading text-center mt-5" id="achieve1">
                  Get in
                  <span style={{ color: "orange" }}> Touch</span>
                </h1>
              </div>
              <form class="row g-3" onSubmit={sendEmail}>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="inputFirstname4" class="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    id="inputFirstname4"
                    required
                  />
                </div>

                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="inputEmail4" class="form-label">
                    Email
                  </label>
                  <input
                    name="user_email"
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    required
                  />
                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Subject
                  </label>
                  <textarea
                    name="subject"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="1"
                    required
                  ></textarea>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <iframe
            src="https://maps.google.com/maps?q=szigony&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
