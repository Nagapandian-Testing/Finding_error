import React from "react";
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <>
      <footer id="footer_service">
        <div className="">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center">
              <a href="/" class="brand-logo">
                <img
                  id="img-footer2"
                  src="assets/images/logo_white.png"
                  alt="..."
                />
              </a>
</div>
<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center">
              <ul class="list-inline ">
                <li class="list-inline-item" id="fo_linkAll1">
                  <a href="/" id="fo_link">
                    Home <span style={{color:'white'}}>|</span>
                  </a>
                </li>
                <li class="list-inline-item" id="fo_linkAll1">
                  <a href="/about" id="fo_link">
                    About <span style={{color:'white'}}>|</span>
                  </a>
                </li>
                <li class="list-inline-item" id="fo_linkAll1">
                  <a href="/service" id="fo_link">
                    Services <span style={{color:'white'}}>|</span>
                  </a>
                </li>

                <li class="list-inline-item" id="fo_linkAll1">
                  <a href="/career" id="fo_link">
                    Career <span style={{color:'white'}}>|</span>
                  </a>
                </li>
                <li class="list-inline-item" id="fo_linkAll1">
                  <a href="/contact" id="fo_link">
                    Contact
                  </a>
                </li>
              </ul>
              {/* <div class="social-icons mt-3">
                <a
                  href="https://www.facebook.com/Szigony-Technologies-Pvt-Ltd-357914624752800/?ref=br_tf"
                  class="mx-2"
                >
                  <i id="icon_color" class="fab fa-facebook-f"></i>
                </a>

                <a
                  href="https://twitter.com/SzigonyT/status/1062692688808431616"
                  class="mx-2"
                >
                  <i id="icon_color" class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/szigony-technologies/"
                  class="mx-2"
                >
                  <i id="icon_color" class="fab fa-linkedin-in"></i>
                </a>
              </div> */}
            </div>
          </div>
          {/* <div class="text-center pt-2 pb-2 mt-4 border-top">
            <p class="mb-0" id="copywrite">
              Copyright © 2022 Szigonytech. All rights reserved.
            </p>
          </div> */}
        </div>
      </footer>

   
    </>
  );
};
export default Footer;
