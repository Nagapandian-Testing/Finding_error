import React from 'react';
import ReactDOM from 'react-dom';
import '../Banner1/Banner1.css'

import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Banner() {

  return (
<div id='hei_banner' className=''>
<OwlCarousel className='owl'  autoplay={true}  items={1}loop>
<div class="item">
     <img src="assets/images/home_Banner1.png" alt="Banner1" className='fade-in-image' id="banner_styles"/>
   </div>
   <div class="item">
     <img src="assets/images/home_Banner2.png" alt="Banner2" className='fade-in-image' id="banner_styles"/>
   </div>
   <div class="item">
     <img src="assets/images/home_Banner3.png" alt="Banner3" id="banner_styles" />
   </div>

    
</OwlCarousel>


</div>

   
//      <div className='hei_banner'>
// <div id="demo" class="carousel slide" data-ride="carousel">

// <div class="carousel-inner" style={{marginTop:'10px'}}>
//   <div class="carousel-item active">
//     <img src="assets/images/Szigony Banner1.png" alt="Banner1" id="banner_styles"/>
//   </div>
//   <div class="carousel-item">
//     <img src="assets/images/Szigony Banner2.png" alt="Banner2" id="banner_styles"/>
//   </div>
//   <div class="carousel-item">
//     <img src="assets/images/Szigony Banner3.png" alt="Banner3" id="banner_styles"/>
//   </div>

// </div>
// <a class="carousel-control-prev" href="#demo" data-slide="prev">
//   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
// </a>
// <a class="carousel-control-next" href="#demo" data-slide="next">
//   <span class="carousel-control-next-icon" aria-hidden="true"></span>
// </a>

// </div>
//  </div>
   


  )
}
