import React from 'react'
import './floatingdiv.css'
// import { themeContext } from '../../context'
// import { useContext } from 'react'

const Floatingdiv = ({image,text1,text2}) => {
  // const theme=useContext(themeContext)
  // const darkMode=theme.state.darkMode;
  return (
    <div className='floatingdiv'>
       <img src={image} alt='' />
            <span>{text1}
            <br/>
            {text2}
       </span>
    </div>
  );
};

export default Floatingdiv;
