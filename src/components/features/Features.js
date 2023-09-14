import React, {useEffect} from 'react'
import './Features.css'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import { featureList } from './data'
import {BsHexagon} from 'react-icons/bs'

import AOS from 'aos';  // animation package
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
    }, []);


  return (
    <section id='features'>
      <div className='container features'>
        <div className='title' data-aos="fade-up">
          <BsFillBookmarkStarFill color='orangered' size='30'/>
          <h2>Features</h2>
          <p>Lorem ipsum scrambled it to make a type book</p>
        </div>
        <div className='features-content'>
          <div className='features-left' data-aos="fade-left">
            <img src='https://cdn.jotfor.ms/p/products/mobile-forms/assets/img-min//business.svg'></img>
          </div>
          <div className='features-right' data-aos="fade-right">
            {
              featureList.map(item => (
                <div className='feature' key={item.id}>
                  <div className='feature-icon'>
                    <BsHexagon color='#fc5412' size={55}/>
                    <div className='inner-icon'>{item.icon}</div>
                  </div>
                  <div className='feature-text'>
                    <h2>{item.header}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Features
