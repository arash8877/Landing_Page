import React from 'react'
import './Footer.css'
import {FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe} from 'react-icons/fa'
import {SiAnaconda} from 'react-icons/si'

const Footer = () => {
  return (
    <section id='footer'>
      <div className='container footer'>
        <div className='footer-logo'>
          <div className='logo'>
          <p>Arash</p>
          <span>X</span>
          <SiAnaconda color='#fff' size={30}/>
          </div>
          <p className='copy'>&copy; Copyright 2023. www.arash.com</p>
        </div>
        <div className='contact'>
          <h4>Contact</h4>
          <div className='footer-contact'>
            <p><FaMapMarkerAlt/> &nbsp; Address: Copenhagen 22</p>
            <p><FaPhoneAlt/> &nbsp; Telephone: +45 22334455</p>
            <p><FaFax/> &nbsp; Fax: +45 22334466</p>
            <p><FaEnvelope/> &nbsp; E-mail: support@arash.com</p>
            <p><FaGlobe/> &nbsp; Webpage: www.arash.com</p>
          </div>
        </div>
        <div className='education'>
        <h4>Education</h4>
          <div className='footer-links'>
            <a href='#'>&bull; Training</a>
            <a href='#'>&bull; Development</a>
            <a href='#'>&bull; Deals</a>
            <a href='#'>&bull; Students</a>
            <a href='#'>&bull; Appointments</a>
          </div>
        </div>
        <div className='about'>
          <h4>About us</h4>
          <div className='footer-links'>
            <a href='#'>&bull; Newsroom</a>
            <a href='#'>&bull; Leadership</a>
            <a href='#'>&bull; Careers</a>
            <a href='#'>&bull; Investors</a>
            <a href='#'>&bull; Events</a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Footer
