import React from "react";
import { NavLink } from "react-bootstrap";


import "../Navbar1/Navbar1.css";
export default function Navbar1() {

  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="/">
        <img src="assets/images/logo_white.png" />
      </a>
      <button
       class="navbar-toggler navbar-toggler-right collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
     <span class="toggle_change" id="icon_color1">
          <i class="fas fa-chevron-circle-down"></i>
        </span>
        <span className=" close" id="icon_color1">
        <i class="fas fa-chevron-circle-up"></i>
        
        </span>
      </button>
      
     
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <ul
          class="nav   navbar-nav ml-auto"
        >
         
          <li class="nav-item">
        
            <a class="nav-link "  href="/">
              Home
            </a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link"  href="/about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/service">
              Service
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/career">
              Career
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>   
      </div>
    </nav>
  );
}
