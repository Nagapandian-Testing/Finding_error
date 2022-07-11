import React from "react";
import BackToTop from "../../Components/BackToTop/BackToTop";
import Footer1 from "../../Components/HomePage/Footer1/Footer1";
import ServiceBanner from "../../Components/ServicePage/ServiceBanner/ServiceBanner";
import ServiceContent from "../../Components/ServicePage/ServiceContent/ServiceContent";


const Services = () => {
  return (
    <div>
      {/* <ServiceBanner /> */}
      <ServiceContent />
      <BackToTop/>
      <Footer1 />
    
    </div>
  );
};
export default Services;
