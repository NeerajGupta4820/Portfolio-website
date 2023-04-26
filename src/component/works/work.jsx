import React,{useContext} from 'react'
import './work.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazone from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { themeContext } from "../../context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'


const Work = () => {
    // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
         <div className='awesome'>
        <span style={{ color: darkMode ? "" : "white" }} >Works for All these</span>
      <span>Brands & clients</span>
      <span> 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia inventore 
        <br/>
            assumenda labore modi, dignissimos maioresamet consectetur adipisicing
        <br/>
            amet consectetur adipisicing  Lorem, ipsum dolor sit 
        <br/>
        assumenda labore consectetur adipisicing 
       </span>
       <Link to="contact" smooth={true} spy={true}>
            <button className='button i-button'>Hire Me</button>
            </Link>
      <div className='blur s-blurl' style={{background: '#ABF1FF94'}}></div>
      </div>
      <div className='w-right'>
        <div className='w-maincircle'>
            <div className='w-secCircle'>
                <img src={Upwork} alt='' />
            </div>
            <div className='w-secCircle'>
                <img src={Fiverr} alt='' />
            </div>
            <div className='w-secCircle'>
                <img src={Amazone} alt='' />
            </div>
            <div className='w-secCircle'>
                <img src={Shopify} alt='' />
            </div>
            <div className='w-secCircle'>
                <img src={Facebook} alt='' />
            </div>
        </div>
        <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
      </div>
    </div>
  )
}

export default Work
