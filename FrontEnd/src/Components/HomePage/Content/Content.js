import React from "react";

import "../Content/Content.css";
const Content = () => {
  return (
    <>
      <div className="homeBanner">
        <div className="container">
          <div class="row">
            <div class=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
              <h1 className="text-center" id="szigonyHead">
                Welcome to <br></br>
                <span style={{ color: "orange" }}>Szigony</span> Technologies
              </h1>
              <p className="text-center " id="parahome">
                Your trusted Solutions Partner for the digital transformation of
                you and your company.
              </p>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
              <img
                id="img-banner"
                src="/assets/images/Home_Page_Banner.png"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
