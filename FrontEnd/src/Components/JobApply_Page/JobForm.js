import React, { Component } from "react";
import "../JobApply_Page/JobForm.css";
import axios from "axios";
import Popup from "../ContactPage/Popup/Popup";

import { Message } from "semantic-ui-react";
export default class JobForm extends Component {
  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Fname: "",
      Lname: "",
      Role: localStorage.getItem("role"),
      Number: "",
      Email: "",
      Address: "",
      Resume: "",
      sent: false,
      showPopup: false,
      required:true
    };
  }
  handleFName(e) {
    console.log(e);
    this.setState({ Fname: e.target.value });
  }

  handleLname(e) {
    this.setState({ Lname: e.target.value });
  }

  handleRole(e) {
    this.setState({ Role: e.target.value });
  }

  handleNumber(e) {
    this.setState({ Number: e.target.value });
  }
  handleEmail(e) {
    this.setState({ Email: e.target.value });
  }
  handleAddress(e) {
    this.setState({ Address: e.target.value });
  }

  onFileChange(e) {
    this.setState({ File: e.target.files[0] });
  }


  onSubmit = async (e) => {
    console.log(this.state, "fff");
    debugger;
    e.preventDefault();

    const headers = {
      "content-type": "multipart/form-data",
    };

    await axios
      .post(process.env.REACT_APP_JOB_FORM_API, this.state, {
        headers,
      })
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
    //   Fname: "",
    //   Lname: "",
    //   Email: "",
    //   Number: "",
    //   Role: "",
    //   Address: "",
    //   File: "",
    //   sent: false,
    //   Resume:"",
    //   showPopup: false,
      
    // });
  };
  render() {
    return (
      <div
        id="job_top1"
        style={{ backgroundImage: "url('assets/images/jobpagebanner.jpg')" }}
      >
        <div class="container-xxl">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
              <form
                onSubmit={this.onSubmit}
                className="container"
                id="job_form_des"
              >
                <div class=" row mb-4">
                  <p id="job_headding1">
                    <span id="job_headding2">Job</span> Form
                  </p>

                  <div class="col">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="form6Example1"
                        placeholder="First Name"
                        class="form-control"
                        required
                        name="fname"
                        value={this.state.Fname}
                        onChange={this.handleFName.bind(this)}
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="form6Example2"
                        placeholder="Last Name"
                        class="form-control"
                        name="lname"
                        value={this.state.Lname}
                        onChange={this.handleLname.bind(this)}
                      />
                    </div>
                  </div>
                </div>

                <div class=" row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <input
                        style={{ color: "gray", fontWeight: "bold" }}
                        type="text"
                        id="jobRole"
                        value={localStorage.getItem("role")}
                        disabled
                        class="form-control"
                        onChange={this.handleRole.bind(this)}
                      />
                    </div>
                  </div>

                  <div class="col">
                    <div class="form-outline">
                      <input
                        type="tel"
                        id="form6Example6"
                        required
                        placeholder="Mobile Number"
                        class="form-control"
                        value={this.state.Number}
                        onChange={this.handleNumber.bind(this)}
                      />
                    </div>
                  </div>
                </div>
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form6Example5"
                    placeholder="Email"
                    class="form-control"
                    name="email"
                    required
                    value={this.state.Email}
                    onChange={this.handleEmail.bind(this)}
                  />
                </div>
                <div class="form-outline mb-4">
                  <textarea
                    rows="2"
                    id="form6Example4"
                    placeholder="Address"
                    class="form-control"
                    name="address"
                    required
                    value={this.state.Address}
                    onChange={this.handleAddress.bind(this)}
                  />
                </div>

                <div class=" row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <label>Upload Resume </label>
                      <input
                        type="file"
                        id="Resume"
                       
                        name="Resume"
                        required
                        accept=".jpg, .png, .jpeg, .pdf, .doc, .docx"
                        onChange={this.onFileChange}
                      />
                    </div>
                  </div>

                  <div class="col">
                    <div class="form-outline">
                      <button
                        type="submit"
                        class="btn btn-warning btn-block btn-lg mt-5"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              {this.state.sent && this.state.showPopup ? (
                <Popup
                  msg="Thank You, message has been Sent!"
                  resetForm={this.resetForm}
                />
              ) :this.state.showPopup ? (
                <Popup
                  msg="message has not been sent something wrong"
                  resetForm={this.resetForm}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
