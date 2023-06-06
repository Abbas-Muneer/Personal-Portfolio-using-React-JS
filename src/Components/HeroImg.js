import './HeroImg.css';
import React from 'react';
import introimage from '../assets/img1.jpg';
import { Link } from 'react-router-dom';
import WorkCard from './WorkCard';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={introimage} alt='intro-image'></img>
        </div>
        <div className='content'>
            <p>HI, I'M A FREELANCE PHOTOGRAPHER</p>
            <h1>Abbas Muneer</h1>
            <div>
                <a href="/#hero" className="btn">PROJECTS</a>
                <Link to="/contact" className="btn btn-light">CONTACT</Link>
            </div>
        </div>

    </div>
  )
}

export default HeroImg