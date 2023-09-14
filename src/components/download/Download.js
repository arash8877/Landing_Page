import React, {useEffect} from 'react'
import './Download.css'
import {FaApple, FaWindows} from 'react-icons/fa'
import {GrAndroid} from 'react-icons/gr'

import AOS from 'aos';  // animation package
import 'aos/dist/aos.css';

const Download = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
    }, []);


  return (
    <section id='download'>
      <div className='container download' data-aos="fade-up">
        <div className='download-title'>
          <h2>Download the application</h2>
          <p>You can find our application in all platforms</p>
        </div>
        <div className='download-apps'>
          <div className='download-app'>
            <FaApple/>
            <p>iOS</p>
          </div>
          <div className='download-app'>
            <FaWindows/>
            <p>Windows</p>
          </div>
          <div className='download-app'>
            <GrAndroid/>
            <p>Android</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
