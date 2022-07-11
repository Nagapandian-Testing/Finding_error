import React from "react";
import AboutContact from "../../Components/AboutPage/AboutContact/AboutContact";
import AboutContent from "../../Components/AboutPage/AboutContent/AboutContent";
import AboutContent1 from "../../Components/AboutPage/AboutContent1/AboutContent1";

import AboutCounter from "../../Components/AboutPage/AboutCounter/AboutCounter";
import BannerAbout from "../../Components/AboutPage/BannerAbout/BannerAbout";
import DrivingFactors from "../../Components/AboutPage/DrivingFactors/DrivingFactors";
import Languages from "../../Components/AboutPage/Languages/Languages";

import Footer1 from "../../Components/HomePage/Footer1/Footer1";
import Design from "../../Components/HomePage/Design/Design";
import WhatWeOffer from "../../Components/AboutPage/WhatWeOffer/WhatWeOffer";
import BackToTop from "../../Components/BackToTop/BackToTop";
const About = () => {
  return (
    <div>
      <BannerAbout />
      <AboutContent1 />
      <Design />
      <DrivingFactors />
      <WhatWeOffer />
      <AboutContact />
     <BackToTop/>
      <Footer1 />
    </div>
  );
};
export default About;
