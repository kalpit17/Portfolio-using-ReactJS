import React from 'react'
import { Container, Row,Col } from 'reactstrap'
import './Contact.css'
import Form from './Form'
const Contact = () => {
  return (
    <section id='contact'>
        <Container>
            <Row>
                <Col lg='12' className='mt-3'>
                    <p style={{color:'var(--primary-color)'}}>Contact</p>
                    <h2>Get in Touch</h2>
                </Col>
                <Col lg='6' md='12'>
                    <div className="contact__info__container d-flex align-items-center gap-4">
                        <div className="single__info-box  w-50">
                                <h6><i class="ri-home-6-fill"></i> Address</h6>
                            <p>Ahmedabad, Gujarat, India</p>
                        </div>
                        <div className="single__info-box w-50">
                            <h6><i class="ri-phone-fill"></i> Phone Number</h6>
                            <p>+91 12345 67890</p>
                        </div>
                    </div>
                    <div className="contact__info__container d-flex align-items-center gap-4">
                        <div className="single__info-box w-50">
                            <h6><i class="ri-mail-fill"></i> Email</h6>
                            <p>kalpitprajapati17@gmail.com</p>
                        </div>
                        <div className="single__info-box w-50">
                            <h6>Find Me</h6>
                            <p>
                                <span><a href='#a'><i className="ri-facebook-line"></i></a></span>
                                <span><a href='#a'><i className="ri-instagram-line"></i></a></span>
                                <span><a href='#a'><i className="ri-linkedin-line"></i></a></span>
                            </p>
                            
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='12'>
                    <Form/>
                </Col>
            </Row>
        </Container>
      
    </section>
  )
}

export default Contact
