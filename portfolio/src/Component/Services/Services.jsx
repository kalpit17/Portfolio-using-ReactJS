import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Services.css";

const servicesData = [
  {
    icon: "ri-code-line",
    title: "Web Design",
    desc:
      "I am a web designer with a passion for creating beautiful and functional web applications.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Frontend Development",
    desc:
      "I am a frontend developer with a passion for creating beautiful and functional web applications.",
  },
  {
    icon: "ri-qr-code-line",
    title: "Backend Development",
    desc:
      "I am a backend developer  with a passion for creating beautiful and functional web applications.",
  },
  // {
  //   icon: "ri-search-line",
  //   title: "SEO",
  //   desc:
  //     "I am a web designer with a passion for creating beautiful and functional web applications.",
  // },
  {
    icon: "ri-gallery-line",
    title: "MERN stack Developer",
    desc:
      "I am a MERN stack developer  with a passion for creating beautiful and functional web applications.",
  },
];

const Services = () => {
  return (
    <section  id="services">
      <Container>
      <Row>
        <Col lg="12" className="services__top mb-5">
          <h6 className="pt-3">Features</h6>
          <h2>What Services I Provide</h2>
        </Col>
        {servicesData.map((item, index) => (
          <Col lg="4" md="6" sm="6" key={index} className='mb-4'>
            <div className="single__service">
              <span className="service__icon">
                <i className={item.icon}></i>
              </span>
              <h2>{item.title}</h2>
              <p>
                {item.desc}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
    
  );
};

export default Services;
