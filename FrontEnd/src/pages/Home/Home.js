import React from "react";
import BackToTop from "../../Components/BackToTop/BackToTop";
import AboutIntro from "../../Components/HomePage/AboutIntro/AboutIntro";
import Banner1 from "../../Components/HomePage/Banner1/Banner1"
import Clients from "../../Components/HomePage/Clients/Clients";
import Content from "../../Components/HomePage/Content/Content";
import Design from "../../Components/HomePage/Design/Design";
import Footer1 from "../../Components/HomePage/Footer1/Footer1";


import Wwo from "../../Components/HomePage/Wwo/Wwo";

const Home = () => {
  return (
    <>
 
 <Banner1/>
      <Content />
      
      <Wwo />
      <Design />
      <AboutIntro />
      <Clients />
      <BackToTop/>
      <Footer1 />
     
    </>
  );
};
export default Home;
