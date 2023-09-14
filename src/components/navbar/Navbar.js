import { useState } from 'react'
import './Navbar.css'
import React from 'react'
import {SiAnaconda} from 'react-icons/si'
import {FaBars} from 'react-icons/fa'
import {RiCloseLine} from 'react-icons/ri'

const Navbar = () => {
  const [showIcon, setShowIcon] = useState(false)  //making responsive

  const toggleMenu = () => {
    setShowIcon(!showIcon)
  }



  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <div className='logo'>
          <p>Arash</p>
          <span>X</span>
          <SiAnaconda color='#fff' size={30}/>
        </div>
        <ul className='nav-links' id={showIcon? 'show-links' : 'hide-links'}>
          <li><a href='#header'>Home</a></li>
          <li><a href='#features'>Features</a></li>
          <li><a href='#download'>Download</a></li>
          <li><a href='#subscribe'>Subscription</a></li>
          <li className='li-btn'><a href='' className='btn-learn'>Learn More</a></li>
        </ul>
        <div className='responsive-icons' onClick={toggleMenu}>
          {
            showIcon ? 
            <RiCloseLine size={35} color={"#fff"} cursor={"pointer"}/>:
            <FaBars size={35} color={"#fff"} cursor={"pointer"}/>
          }

        </div>
      </nav>
    </div>
  )
}

export default Navbar
