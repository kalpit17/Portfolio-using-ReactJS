import React from 'react'
import { Fragment } from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Portfolio from '../Portfolio/Portfolio'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'

const Layout = () => {
  return (
    <Fragment>
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </Fragment>
  )
}

export default Layout
