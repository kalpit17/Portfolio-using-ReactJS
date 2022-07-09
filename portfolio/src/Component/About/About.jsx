import React,{useState} from 'react';
import './About.css';
import {Container,Row,Col} from 'reactstrap';
import profile from '../../assets/profile.png';
import Education from './Education';
import Skills from './Skills';

const About = () => {

    const [aboutFilter,setAboutFilter]=useState('about')
  return (
    <section id="about">
        <Container>
            <Row>
                <Col lg='12' className='mb-5'><h2>About Me</h2></Col>
                <Col lg='4' md='3' xs='12'>
                    <div className="about__btns d-flex flex-column align-items-center">
                        <button className={`about__btn ${aboutFilter === 'about'?'about__btn-active':''} ` } onClick={()=>setAboutFilter('about') } >
                            About Me
                        </button>
                        <button className={`about__btn ${aboutFilter === 'education'?'about__btn-active':''} ` }onClick={()=>setAboutFilter('education') }>
                            Education
                        </button>
                        <button className={`about__btn ${aboutFilter === 'skills'?'about__btn-active':''} ` } onClick={()=>setAboutFilter('skills') }>
                            Skills
                        </button>
                    </div>
                </Col>
                <Col lg='8' md='9' xs='12'>
                    {aboutFilter === 'about' && <div className="about__content__wrapper d-flex gap-5">
                        <div className='about__img'>
                            <img src={profile} alt="Profile Pic"/>
                        </div> 
                        <div className='about__Content'>
                            <h2>I'm Kalpit Prajapati</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis vel necessitatibus, aliquam debitis distinctio iusto beatae. Voluptas non minima officiis dignissimos facere error esse eveniet deserunt velit id, repellat dolore eligendi odio alias beatae in accusamus nam autem expedita optio aperiam ut hic laborum!</p>

                            <div className='social__links'>
                                <h6 className='mb-3'>Connect with me</h6>
                                <span><a href='#a'><i className="ri-facebook-line"></i></a></span>
                                <span><a href='#a'><i className="ri-github-line"></i></a></span>
                                <span><a href='#a'><i className="ri-instagram-line"></i></a></span>
                                <span><a href='#a'><i className="ri-linkedin-line"></i></a></span>
                            </div>
                        </div>

                    </div> }
                    
                    {aboutFilter=== 'education' && <Education/>}
                    {aboutFilter=== 'skills' && <Skills/>}


                </Col>
               
            </Row>
        </Container>
    </section>
  )
}

export default About
