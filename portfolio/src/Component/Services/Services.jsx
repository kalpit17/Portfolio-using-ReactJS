import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Services.css";

const servicesData = [
  {
    icon: "ri-code-line",
    title: "Web Design",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At temporibus repudiandae a! Rem quis, nisi id asperiores necessitatibus hic dolore!",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Development",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At temporibus repudiandae a! Rem quis, nisi id asperiores necessitatibus hic dolore!",
  },
  {
    icon: "ri-qr-code-line",
    title: "App Development",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At temporibus repudiandae a! Rem quis, nisi id asperiores necessitatibus hic dolore!",
  },
  {
    icon: "ri-search-line",
    title: "SEO",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At temporibus repudiandae a! Rem quis, nisi id asperiores necessitatibus hic dolore!",
  },
  {
    icon: "ri-gallery-line",
    title: "UI / UX",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At temporibus repudiandae a! Rem quis, nisi id asperiores necessitatibus hic dolore!",
  },
];

const Services = () => {
  return (
    <Container id="services">
      <Row>
        <Col lg="12" className="services__top mb-5">
          <h6>Features</h6>
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
  );
};

export default Services;
