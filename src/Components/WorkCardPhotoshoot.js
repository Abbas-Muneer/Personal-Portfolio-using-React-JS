import "./WorkCard.css";


import React from 'react'
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import { NavLink } from "react-router-dom";

const WorkCardPhotoshoot = () => {
    return (
        <div className=""work-container>
          <h1 className="project-heading">Photoshoots</h1> 
          <div className="project-container">
            <div className="project-card">
                <img src={img6} alt="image" />
                <h2 className="project-title">Last Man Standing</h2>
                <div className="pro-details">
                    <p>A standup comedy competition held in 2023 May. Organised by the Rotaract Club.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258003733482115&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={img7} alt="image" />
                <h2 className="project-title">IIT-Pongal 2023</h2>
                <div className="pro-details">
                    <p>Pongal Event hosted at Informatics Institute of Technology. Held in January 2023.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258007670148388&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={img8} alt="image" />
                <h2 className="project-title">IIT-Iftar 2023</h2>
                <div className="pro-details">
                    <p>Iftar Event hosted at Informatics Institute of Technology. Held in April 2023.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258007670148388&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
          </div> 

          <div className="project-container">
            <div className="project-card">
                <img src={img9} alt="image" />
                <h2 className="project-title">IIT-Christmas 2022</h2>
                <div className="pro-details">
                    <p>Christmas Event hosted at Informatics Institute of Technology. Held in December 2022.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258008043481684&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={img10} alt="image" />
                <h2 className="project-title">IIT-Iftar 2022</h2>
                <div className="pro-details">
                    <p>Iftar Event hosted at Informatics Institute of Technology. Held in April 2022.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258007546815067&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={img11} alt="image" />
                <h2 className="project-title">IIT-Pongal 2022</h2>
                <div className="pro-details">
                    <p>Pongal Event hosted at Informatics Institute of Technology. Held in January 2022.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258005343481954&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
          </div>

          <div className="project-container">
            <div className="project-card">
                <img src={img12} alt="image" />
                <h2 className="project-title">RIC-Diwali 2022</h2>
                <div className="pro-details">
                    <p>Diwali Event hosted at Royal Institute College. Held in December 2022.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258008443481644&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={img13} alt="image" />
                <h2 className="project-title">Portrait Model Photoshoot</h2>
                <div className="pro-details">
                    <p>A portrait photoshoot with a model. Held in February 2023.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258008553481633&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={img14} alt="image" />
                <h2 className="project-title">50th Birthday Party</h2>
                <div className="pro-details">
                    <p>50th Birthday Party hosted at Grand Orient Hotel. Held in April 2023.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258008670148288&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
          </div>

          <div className="project-container">
            <div className="project-card">
                <img src={img15} alt="image" />
                <h2 className="project-title">BCI Graduation 2022</h2>
                <div className="pro-details">
                    <p>Graduation Ceremony hosted at Belvoir College International. Held in May 2022.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258008820148273&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={img16} alt="image" />
                <h2 className="project-title">BCI Holi Party 2022</h2>
                <div className="pro-details">
                    <p>Holi Party hosted at Belvoir College International. Held in August 2022.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258009063481582&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={img17} alt="image" />
                <h2 className="project-title">BCI Talent Show 2022</h2>
                <div className="pro-details">
                    <p>Talent Show hosted at Belvoir College International. Held in February 2022.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258010126814809&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
          </div>

          <div className="project-container">
            <div className="project-card">
                <img src={img18} alt="image" />
                <h2 className="project-title">Portrait Photography</h2>
                <div className="pro-details">
                    <p>A compilation of portrait photography that was taken over the past years.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258010306814791&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={img19} alt="image" />
                <h2 className="project-title">Wedding Event</h2>
                <div className="pro-details">
                    <p>A compilation of wedding events that I shot over the past years.</p>
                    <div className="pro-btns">
                        <NavLink to="https://www.facebook.com/media/set/?set=a.258010403481448&type=3" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
    )
}

export default WorkCardPhotoshoot