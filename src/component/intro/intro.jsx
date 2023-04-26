import React,{useContext} from 'react'
import './intro.css'
import FloatingDiv from '../FloatingDiv/floatingdiv'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import { themeContext } from "../../context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";





const Intro = () => {
    const transition = { duration: 2, type: "spring" };

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
            <span style={{ color: darkMode ? "" : "white" }}>Hey! I Am</span>
                <span>Neeraj Gupta</span>
                <span>Frontend Developer with intermidate level of experince in web designing and dovelopment,producting the quality work</span>
            </div>
            <Link to="contact" smooth={true} spy={true}>
            <button className='button i-button'>Hire Me</button>
            </Link>
            <div className='i-icons'> 
                <a href=''><img src={Github} alt='' /></a>
                <a href=''><img src={LinkedIn} alt='' /></a>
                <a href=''><img src={Instagram} alt='' /></a>
            </div>
        </div>
        <div className='i-right'>
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
              {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
            <FloatingDiv  image={crown} text1='Web' text2='Developer' />
            </motion.div>

            <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        ><FloatingDiv  image={thumbup} text1='Best-Design' text2='Award' /> 
        </motion.div>

            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            <div className='blur'  style={{background:'#C1F5FF',top:'17rem' ,width:'21rem',height:'11rem',left:'-9rem' }} ></div>
        </div>

    </div>
  );
};

export default Intro;
