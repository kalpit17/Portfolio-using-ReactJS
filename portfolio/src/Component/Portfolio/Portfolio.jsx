import React from "react";
import "./Portfolio.css";
import { Container, Row, Col } from "reactstrap";
//import images from '../../assets/about01.png'

//For importing images
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}
const images = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);
const Portfolio = () => {
  const portfolioData = [
    {
      imgUrl: images["about01.png"],
      title: "React Landing Page",
      url: "#url",
    },
    {
      imgUrl: images["about02.png"],
      title: "React Landing Page",
      url: "#url",
    },
    {
      imgUrl: images["about03.png"],
      title: "React Landing Page",
      url: "#url",
    },
    {
        imgUrl: images["about04.png"],
        title: "React Landing Page",
        url: "#url",
      },
  ];

  return (
    <section id='portfolio'>
      <Container>
        <Row>
          <Col lg="12" className="portfolio__top mb-5">
            <h6>Explore my work and give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>
          {portfolioData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index} className='mb-4' >
              <div className="portfolio__card">
                <div className="portfolio__img">
                  <img
                    src={item.imgUrl} alt="Portfolio" className="w-100"/>
                </div>
                <div className="portfolio__content">
                  <h5>{item.title}</h5>
                  {/* <span><a href={item.url}>View Live demo</a></span> */}
                  <span><a href='#a'><i className="ri-github-line"></i> View Project</a></span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Portfolio;
