import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Service/Services";

import Career from "./pages/Carrer/Career";
import MobileAppDevelopment from "./pages/MobileAppDevelopment/MobileAppDevelopment";
import AndroidApp from "./pages/AndroidAppDevelopment/AndroidApp";
import Devops from "./pages/Devops/Devops";
import Ios from "./pages/IosDevelopment/Ios";
import Flutter from "./pages/FlutterApp/Flutter";
import Ai from "./pages/AI/Ai";
import Automation from "./pages/Automation/Automation";
import WebDevelopment from "./pages/WebDevelopment/WebDevelopment";
import WebScrapping from "./pages/webScrapping/WebScrapping";
import Navbar1 from "./Components/HomePage/Navbar1/Navbar1";

import TestContact from "./Components/ContactPage/TestContact/TestContact";
import Job from "./pages/Job/Job";
import NextNProgress from "nextjs-progressbar";

const App = () => {
  return (
    <>
 
 <NextNProgress color="red"/>
    
    <Router>

      <Navbar1 />
 
      <main>
      
        <Switch>

          <Route path="/" exact>
  
            <Home />
            
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/service" exact>
            <Services />
          </Route>
          <Route path="/career" exact>
            <Career />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/mobile-app-development" exact>
            <MobileAppDevelopment />
          </Route>
          <Route path="/android-app-development" exact>
            <AndroidApp />
          </Route>
          <Route path="/ios-development" exact>
            <Ios />
          </Route>
          <Route path="/flutter-app-development" exact>
            <Flutter />
          </Route>
          <Route path="/AI-solution" exact>
            <Ai />
          </Route>
          <Route path="/web-development" exact>
            <WebDevelopment />
          </Route>
          <Route path="/devops" exact>
            <Devops />
          </Route>
          <Route path="/automation-testing" exact>
            <Automation />
          </Route>
          <Route path="/webscraping" exact>
            <WebScrapping />
          </Route>
          <Route path="/Job-Apply" exact>
            <Job />
          </Route>
          <Route path="/TestContact" exact>
            <TestContact />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
    </>
  );
};

export default App;
