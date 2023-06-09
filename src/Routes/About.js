import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg3 from '../Components/HeroImg3';
import AboutContent from '../Components/AboutContent';


const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg3 heading="ABOUT ME" text="Photographer | Filmmaker | Graphic Designer" />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About