import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';

import React from 'react'
import WorkCardPhotoshoot from "../Components/WorkCardPhotoshoot";

const Photoshoot = () => {
  return (
    <div className="">
        <Navbar/>
        <HeroImg2 heading="PHOTOSHOOTS" text="Some of my best photoshoots!" />
        <WorkCardPhotoshoot/>
        <Footer/>
    </div>
  )
}

export default Photoshoot