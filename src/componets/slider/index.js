import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import React , { Component } from 'react';
import slide11 from "../../img/slide1.jpg";
import slide22 from "../../img/slide2.jpg";
import slide33 from "../../img/slide3.jpg";

class Slide extends Component  {
  render(){
  return (
   <section className='Slider'>
    <div className='contanier'>
      
    <center><h2>SOME OF OWER MEALS</h2></center>
    <div className='row row1'>
        <div className='col-lg-12 col-sm-12' >
        <Carousel variant="dark">
      <Carousel.Item>
        <img className='slide' src={slide11}  alt="vaild"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='slide' src={slide22}  alt="vaild"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='slide'  src={slide33}  alt="vaild"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    </div>
   </div>
   </section>
  );
}
}
export default Slide;

