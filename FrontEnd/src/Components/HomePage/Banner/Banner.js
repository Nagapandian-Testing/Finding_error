import React from 'react';
import ReactDOM from 'react-dom';
import '../Banner/Banner.css'
import Carousel from 'react-bootstrap/Carousel';

export default function Banner() {

  return (
//     <div className='hei_banner'>
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

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/images/Szigony Banner1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/images/Szigony Banner2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/images/Szigony Banner3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  )
}
