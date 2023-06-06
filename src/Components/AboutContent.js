import { Link } from "react-router-dom";
import "./AboutContent.css";
import img1 from "../assets/img1.jpg";
import img46 from "../assets/img46.png";
import img47 from "../assets/img47.png";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am Abbas Muneer, a freelance Photographer & Filmmaker.
                I do photoshoots & videoshoots for events and brands.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
            <div className="img-stack top">
                    <img src={img46} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={img47} className="img" alt="true"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutContent