import React, {useEffect} from "react";
import "./Header.css";
import {BsMouse} from 'react-icons/bs'

import AOS from 'aos';  // animation package
import 'aos/dist/aos.css';

const Header = () => {

  useEffect(() => {
  AOS.init({duration: 1000});
  }, []);
  

  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-left">
          <img src="https://cdn.jotfor.ms/p/products/mobile-forms/assets/img-min//collab.svg"></img>
        </div>
        <div className="header-right" data-aos="fade-right">
          <h1>
            <span>Technology Pioneer</span>
            <span>Secure in all platforms</span>
            <span>Best customer service</span>
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>
          <div className="header-btn">
            <a href="" className="btn-start">
              Get started
            </a>
            <a href="" className="btn-how">
              How it works
            </a>
          </div>
        </div>

        <div className="floating-icon">
          <a href="#features">
            <BsMouse color={"#fff"} size={25} className={"mouse"}/>
          </a>
        </div>
      </div>
    </section>
  ); 
};

export default Header;
