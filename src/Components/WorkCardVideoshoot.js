import "./WorkCard.css";

import React from 'react'
import img6 from "../assets/img6.jpg";
import img20 from "../assets/img20.png";
import img21 from "../assets/img21.png";
import img22 from "../assets/img22.png";
import img23 from "../assets/img23.png";
import img24 from "../assets/img24.png";
import img62 from "../assets/img62.jpg"
import { NavLink } from "react-router-dom";


const WorkCardVideoshoot = () => {
  return (
    <div className=""work-container>
      <h1 className="project-heading">VideoShoots</h1> 
      <div className="project-container">
        <div className="project-card">
            <img src={img20} alt="image" />
            <h2 className="project-title">Commercials for TEASER Beverages</h2>
            <div className="pro-details">
                <p>These contain commercials that was taken for TEASER Beverages Sri Lanka.</p>
                <div className="pro-btns">
                    <NavLink to="https://web.facebook.com/media/set/?set=a.258012773481211&type=3" className="btn">View</NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={img21} alt="image" />
            <h2 className="project-title">Commercials for OHDONUTS</h2>
            <div className="pro-details">
                <p>These contain commercials that was taken for OhDonuts Sri Lanka.</p>
                <div className="pro-btns">
                    <NavLink to="https://web.facebook.com/media/set/?set=a.258012823481206&type=3" className="btn">View</NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={img22} alt="image" />
            <h2 className="project-title">Koxa Launch AfterMovie</h2>
            <div className="pro-details">
                <p>Koxa Launch event after movie hosted by Skin by Dr. Cherry at Shangri La Sri Lanka.</p>
                <div className="pro-btns">
                    <NavLink to="https://www.instagram.com/reel/CsY4_SRIs5G/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" className="btn">View</NavLink>
                </div>
            </div>
        </div>
      </div> 

      <div className="project-container">
        <div className="project-card">
            <img src={img23} alt="image" />
            <h2 className="project-title">Commercials for Onelle Creams</h2>
            <div className="pro-details">
                <p>These contain commercials that was taken for Onelle Creams Sri Lanka.</p>
                <div className="pro-btns">
                    <NavLink to="https://www.facebook.com/media/set/?set=a.258013546814467&type=3" className="btn">View</NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={img24} alt="image" />
            <h2 className="project-title">Commercials for Skyvox Sri Lanka 2023</h2>
            <div className="pro-details">
                <p>These contain commercials that was taken for Skyvox Speakers.</p>
                <div className="pro-btns">
                    <NavLink to="https://www.facebook.com/media/set/?set=a.258013666814455&type=3" className="btn">View</NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={img62} alt="image" />
            <h2 className="project-title">Commercials for Dinemore Sri Lanka</h2>
            <div className="pro-details">
                <p>These contain commercials that was taken for Dinemore Sri Lanka.</p>
                <div className="pro-btns">
                    <NavLink to="https://web.facebook.com/media/set/?set=a.429527332996420&type=3" className="btn">View</NavLink>
                </div>
            </div>
        </div>
      </div> 
      
    </div>
  )
}

export default WorkCardVideoshoot