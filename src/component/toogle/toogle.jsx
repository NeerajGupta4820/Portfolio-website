import React,{useContext} from 'react'
import './toogle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../context'


const Toogle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className='toogle' onClick={handleClick}>
      <Moon/>
      <Sun/>
      <div className='t-button'
       style={darkMode ? { left: "8px" } : { right: "8px" }}
       >

      </div>
    </div>
  );
};

export default Toogle;
