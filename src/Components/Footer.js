import { FaBehance, FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";
import "./Footer.css";

import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Based in Colombo, Sri Lanka.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                        +94 77 669 9899
                    </h4> 
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                        abbas.muneer101@gmail.com
                    </h4> 
                </div>
            </div>
            <div className="right">
                <h4>
                   About the services that I provide 
                </h4>
                <p>Hi, I am Abbas Muneer. A freelance Photographer/Filmmaker/Graphic Designer.
                    I can do photoshoots and videograpghy based on your requirements for a very low budget with high quality result.
                    Contact me right now for your next shoot!!</p>
                <div className="social">
                    <Link to="https://www.facebook.com/profile.php?id=100078174700910">
                        <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                    </Link>
                    <Link to="https://instagram.com/_abbas_muneer?igshid=MzNlNGNkZWQ4Mg==">
                        <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                    </Link>
                    <Link to="https://www.behance.net/abbas_muneer">
                        <FaBehance size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                    </Link>
                    
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer