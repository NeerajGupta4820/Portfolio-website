import React, { useContext } from 'react'
import './portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import 'swiper/css'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import { themeContext } from "../../context";

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio'>
        <span style={{color: darkMode?'': 'white'}}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={2}
        modules={[Pagination]}
        pagination={{clickable: true}}
        grabCursor={true}
        className='porfolio-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt=''/>
            </SwiperSlide> 
        </Swiper>
    </div>
  )
}

export default Portfolio
