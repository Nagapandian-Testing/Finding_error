import React, { Component } from "react";
import axios from "axios";
import "../ContactMain/ContactMain.css";
import Popup from "../Popup/Popup";

export default class ContactMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      sent: false,
      showPopup: false,
    };
  }

  handleName(e) {
    console.log(e);
    this.setState({ name: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleSubject(e) {
    this.setState({ subject: e.target.value });
  }

  handleMessage(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // const REACT_APP_CONTACT_FORM_API = process.env.REACT_APP_CONTACT_FORM_API;
    await axios
      .post(process.env.REACT_APP_CONTACT_FORM_API, this.state)

      .then((res) => {
        this.setState({
          sent: true,
        });
      })
      .then(() =>
        this.setState({
          showPopup: true,
        })
      )
      .catch(() =>
        this.setState({
          showPopup: true,
        })
      );
  };

  resetForm = () => {
    window.location.reload()
    // this.setState({
    //   name: "",
    //   email: "",
    //   subject: "",
    //   message: "",
    //   sent: false,
    //   showPopup: false,
    // });
  };

  render() {
    return (
      <div>
        <div class="text-center ">
          <h2 class="main-heading text-center mt-5" id="achieve1">
            Get in
            <span style={{ color: "orange" }}> Touch</span>
          </h2>
        </div>
        <div class="container">
          <div class="row ">
            <div
              class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 bg-dark border"
              id="col1_details"
            >
              <div
                class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 "
                id="contact-box"
              >
                <div class="d-flex justify-content-center align-items-center flex-column  text-center mt-5">
                  <h2 style={{ color: "orange" }}>
                    <i class="fas fa-address-book" id="fa_cont"></i>Venue
                    Address
                  </h2>

                  <span
                    style={{ Color: "rgb(0, 0, 0)" }}
                    className="text-center"
                  >
                    {" "}
                    <p style={{ color: "white" }}>
                      No 43, Aryan Grand Residency, Byagadadenahalli,
                      Karnataka-562106{" "}
                    </p>
                  </span>
                </div>
              </div>


              <div class="container">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <div class="d-flex justify-content-center align-items-center flex-column  text-center mb-5">
                  <h2 style={{ color: "orange" }}>
                    <i class="fas fa-phone" id="fa_cont1"></i>Number
                  </h2>
                  <span>
                    <a href="tel:+91 9686953002 " id="lin_dec">
                      {" "}
                      +919686953002{" "}
                    </a>
                  </span>
                </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <div class="d-flex justify-content-center align-items-center flex-column  text-center mb-5 ">
                  <h2 style={{ color: "orange" }}>
                    <i class="fas fa-envelope" id="fa_cont1"></i>Email
                  </h2>
                  <span>
                    <a
                      href="mailto:info@szigonytech.com"
                      class="text-decoration-none"
                      id="lin_dec"
                    >
                      {" "}
                      info@szigonytech.com{" "}
                    </a>
                  </span>
                </div>
        </div>
    </div>
</div>

           
            </div>

            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-5">
                <form class="row g-3" onSubmit={this.handleSubmit.bind(this)}>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="inputFirstname4" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputFirstname4"
                      value={this.state.name}
                      required
                      onChange={this.handleName.bind(this)}
                    />
                  </div>

                  <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="inputEmail4" class="form-label">
                      Email
                    </label>
                    <input
                      name="user_email"
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      value={this.state.email}
                      required
                      onChange={this.handleEmail.bind(this)}
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
                      value={this.state.subject}
                      required
                      onChange={this.handleSubject.bind(this)}
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
                      value={this.state.message}
                      required
                      onChange={this.handleMessage.bind(this)}
                    ></textarea>
                  </div>

                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              {this.state.sent && this.state.showPopup ? (
                <Popup
                  msg="Thank You, message has been Sent!"
                  resetForm={this.resetForm}
                />
              ) : this.state.showPopup ? (
                <Popup
                  msg="message has not been sent something wrong"
                  resetForm={this.resetForm}
                />
              ) : null}
            </div>
          </div>
        </div>

        <div class="mt-5">
          <iframe
            src="https://maps.google.com/maps?q=SzigonyTechnology&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  }
}
