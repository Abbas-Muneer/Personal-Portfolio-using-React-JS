import "./WorkCard.css";

import React from 'react'
import img6 from "../assets/img6.jpg";
import img43 from "../assets/img43.png";
import img44 from "../assets/img44.png";
import img45 from "../assets/img45.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className=""work-container>
      <h1 id="hero" className="project-heading">Projects</h1> 
      <div className="project-container">
        <div className="project-card">
            <img src={img43} alt="image" />
            <h2 className="project-title">Photoshoots</h2>
            <div className="pro-details">
                <p>Visit all the photoshoots that I have done so far for events, portraits, friends and etc</p>
                <div className="pro-btns">
                    <NavLink to="/photoshoot" className="btn">View</NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={img44} alt="image" />
            <h2 className="project-title">Videoshoots</h2>
            <div className="pro-details">
                <p>View all the videoshoots that I have done so far for brands, events, personal projects.</p>
                <div className="pro-btns">
                    <NavLink to="/videoshoot" className="btn">View</NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={img45} alt="image" />
            <h2 className="project-title">Graphic Designs</h2>
            <div className="pro-details">
                <p>View all the Graphic Designs & Digitial Arts that I have done for brands and personal projects.</p>
                <div className="pro-btns">
                    <NavLink to="/graphicdesign" className="btn">View</NavLink>
                </div>
            </div>
        </div>
      </div> 
      
    </div>
  )
}

export default WorkCard;