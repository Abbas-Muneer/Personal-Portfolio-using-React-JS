import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import React from 'react'
import HeroImg2 from "../Components/HeroImg2";
import WorkCardVideoshoot from "../Components/WorkCardVideoshoot";

const Videoshoot = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="VIDEOSHOOTS" text="Some of my best videoshoots!" />
        <WorkCardVideoshoot/>
        <Footer/>
    </div>
  )
}

export default Videoshoot