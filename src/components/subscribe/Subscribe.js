import React, {useEffect} from 'react'
import './Subscribe.css'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {TiSocialGooglePlus} from 'react-icons/ti'

import AOS from 'aos';  // animation package
import 'aos/dist/aos.css';

const Subscribe = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
    }, []);

  return (
    <section id='subscribe'>
      <div className='container subscribe' data-aos="fade-up">
        <h2>Subscribe Now!</h2>
        <form>
          <input type='text' placeholder='Type your email...'/>
          <button type='subscribe'>Subscribe</button>
        </form>
        <div className='socials'>
          <a href='' className='social-icon'><FaFacebook/></a>
          <a href='' className='social-icon'><FaInstagram/></a>
          <a href='' className='social-icon'><FaTwitter/></a>
          <a href='' className='social-icon'><TiSocialGooglePlus/></a>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
