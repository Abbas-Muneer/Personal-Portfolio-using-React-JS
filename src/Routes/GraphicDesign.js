import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import React from 'react'
import HeroImg2 from "../Components/HeroImg2";
import WorkCardGraphicDesign from "../Components/WorkCardGraphicDesign";

const GraphicDesign = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="GRAPHIC DESIGNS" text="Some of my best graphic designs and digital arts!" />
        <WorkCardGraphicDesign/>
        <Footer/>
    </div>
  )
}

export default GraphicDesign