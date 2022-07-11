import React from "react";
import BackToTop from "../../Components/BackToTop/BackToTop";
import ContactBanner from "../../Components/ContactPage/ContactBanner/ContactBanner";
import ContactMain from "../../Components/ContactPage/ContactMain/ContactMain";
import Content from "../../Components/HomePage/Content/Content";
import Footer1 from "../../Components/HomePage/Footer1/Footer1";
const Contact = () => {
  return (
    <div>
      <ContactBanner />
      <ContactMain />
    <BackToTop/>
      <Footer1 />
     
    </div>
  );
};
export default Contact;
