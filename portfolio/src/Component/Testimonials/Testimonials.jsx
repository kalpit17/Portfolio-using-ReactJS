import React from 'react'
import './Testimonials.css'
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

const Testimonials = () => {
    const settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        swipeToSlide:true,
      };
  return (
    <section id='testimonial'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5 testimonial__top' >
                <h6>Testimonials</h6>
                    <h2>What my clients says</h2>
                </Col>
                <Col lg='8' className='m-auto'>

                    <div className='m-3'>
                    <Slider {...settings}>
                        <div className='testimonial__main'>
                            <div className="single__testimonial">
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat necessitatibus repellendus cum porro natus magni veritatis laborum nemo, praesentium soluta, deleniti quo voluptate id cumque qui a delectus recusandae neque incidunt, facere corporis? Dolorem natus debitis possimus tempore error.
                               </p>
                               <h6>Martin Cooper</h6>
                               <p className='title'>Web Developer</p>
                            </div>
                        </div>
                        <div  className='testimonial__main'> 
                            <div className="single__testimonial">
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat necessitatibus repellendus cum porro natus magni veritatis laborum nemo, praesentium soluta, deleniti quo voluptate id cumque qui a delectus recusandae neque incidunt, facere corporis? Dolorem natus debitis possimus tempore error.
                               </p>
                               <h6>Martin Cooper</h6>
                               <p className='title'>Web Developer</p>
                            </div>
                        </div>
                    </Slider>

                    </div>

                    
                </Col>
            </Row>
        </Container>
      
    </section>
  )
}

export default Testimonials
