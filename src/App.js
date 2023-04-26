import React  from 'react'
import Navbar from './component/navbars/navbar';
import './App.css';
import Intro  from './component/intro/intro';
import Services from './component/services/services'
import Experience from './component/Experience/Experience';
import Work from './component/works/work';
import Portfolio from './component/Portfolio/portfolio';
import Testimonial from './component/Testimonials/testimonial';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';
import { useContext } from "react";
import { themeContext } from "./context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "white" : "black",
        color: darkMode ? "black" : "white",
      }}>
  <Navbar/>
  <Intro/>
  <Services/>
  <Experience/>
  <Work/>
  <Portfolio/>
  <Testimonial/>
  <Contact/>
  <Footer/>
  </div>
  );
}

export default App;
