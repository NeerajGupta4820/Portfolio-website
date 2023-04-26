import React,{ useContext } from 'react'
import { themeContext } from "../../context";
import './Experience.css'
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience' id='experience' >
        <div className='achievement'>
            <div className='circle'style={{color: darkMode?'':'var(--orange)'}}>2+</div>
            <span>Years</span>
            <span> Experience</span>
        </div>
        <div className='achievement' style={{color: darkMode?'':'var(--orange)'}}>
            <div className='circle'>20+</div>
            <span>Completed</span>
            <span> Projects</span>
        </div>
        <div className='achievement' style={{color: darkMode?'':'var(--orange)'}}>
            <div className='circle'>1+</div>
            <span>Companies</span>
            <span>Work</span>
        </div>

    </div>
  )
}

export default Experience;
