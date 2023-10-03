import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {RiTwitterXFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JANEDOE</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><RiTwitterXFill/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JANE DOE Portofolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer