import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll'
import Toogle from '../toogle/toogle';
const navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>Neeraj</div>
            <Toogle/>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <Link to="contact" smooth={true} spy={true}>
            <button className='button n-button'>Hire Me</button>
            </Link>
        </div>
    </div>
  );
}

export default navbar;
