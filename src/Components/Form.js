import { NavLink } from "react-router-dom";
import "./Form.css";

import React from 'react'
import { FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here"/>
            <button className="btn">Submit</button>
        </form>

        <div className="Social-links">
            <NavLink to="https://instagram.com/_abbas_muneer?igshid=MzNlNGNkZWQ4Mg==" className="link">
                <h2> <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem", marginTop: "2rem"}}/> DM me in Instagram for shoots</h2>
            </NavLink>
            <NavLink to="" className="link">
                <h2> <FaPhone size={30} style={{color:"#fff", marginRight: "1rem", marginTop: "2rem"}}/> Call 077-669-9899 to book me for a shoot</h2>
            </NavLink>
            <NavLink to="" className="link">
                <h2> <FaMailBulk size={30} style={{color:"#fff", marginRight: "1rem", marginTop: "2rem"}}/> Mail me at abbas.muneer101@gmail.com</h2>
            </NavLink>
        </div>
        
        

    </div>
  )
}

export default Form