import React from 'react';
import './Home.css';
import resume from '../../assets/Kalpit Resume.pdf'

import { Container, Row, Col } from 'reactstrap';
import profile from '../../assets/profile.png';

// import { init } from 'ityped';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {

    const {text} = useTypewriter({
        words:['Kalpit Prajapati','a Web Developer'],
        loop:0,
        delaySpeed:1500,
        typeSpeed:100,
        deleteSpeed:50
      })

  return (
    <section className='hero__section' id="home">
        <Container>
            <div className='hero__container'>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content ">
                        <p className='mb-3'>Welcome to my world!</p>
                        {/* <h5 className='mb-4'>Hi</h5> */}
                        <h2 className='hero__title mb-4'>I'm <span> {text}</span><Cursor /></h2>
                        <p>A software engineer based in gujarat, india. I am specialized in both front-end and back-end web development.</p>
                        <div className="mt-4 hero__btns d-flex align-items-center gap-4">
                            <button className='hire__btn btn'><a href='#contact'>Contact</a></button>
                            <button className='btn resume__btn'> <a href={resume} target={'_blank'} rel="noreferrer">Download Resume</a></button>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="hero__img p-3 pb-0 ">
                        <img src={profile} alt="Profilr Pic" className='w-100'></img>
                    </div>
                </Col>
            </Row>

            </div>
            
        </Container>
    </section>
  )
}

export default Home
