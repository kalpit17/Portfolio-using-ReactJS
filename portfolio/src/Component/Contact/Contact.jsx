import React from 'react'
import { Container, Row,Col } from 'reactstrap'
import './Contact.css'
import Form from './Form'
const Contact = () => {
  return (
    <section id='contact'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>Get in Touch</h2>
                </Col>
                <Col lg='6' md='6'>
                    <div className="contact__info__container d-flex align-items-center gap-4">
                        <div className="single__info-box  w-50">
                            <h6>Address</h6>
                            <p>Ahmedabad, Gujarat, India</p>
                        </div>
                        <div className="single__info-box w-50">
                            <h6>Phone Number</h6>
                            <p>+91 12345 67890</p>
                        </div>
                    </div>
                    <div className="contact__info__container d-flex align-items-center gap-4">
                        <div className="single__info-box w-50">
                            <h6>Email</h6>
                            <p>kalpit@gmail.com</p>
                        </div>
                        <div className="single__info-box w-50">
                            <h6>Phone Number</h6>
                            <p>+91 12345 67890</p>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <Form/>
                </Col>
            </Row>
        </Container>
      
    </section>
  )
}

export default Contact
