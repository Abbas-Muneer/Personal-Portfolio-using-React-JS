import React from 'react'
import "./WorkingCardGraphic.css"
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";
import img27 from "../assets/img27.jpg";
import img28 from "../assets/img28.jpg";
import img29 from "../assets/img29.jpg";
import img30 from "../assets/img30.jpg";
import img31 from "../assets/img31.jpg";
import img33 from "../assets/img33.jpg";
import img34 from "../assets/img34.jpg";
import img35 from "../assets/img35.jpg";
import img36 from "../assets/img36.jpg";
import img37 from "../assets/img37.jpg";
import img38 from "../assets/img38.jpg";
import img39 from "../assets/img39.jpg";
import img40 from "../assets/img40.png";
import img41 from "../assets/img41.jpg";


const WorkCardGraphicDesign = () => {
    let data = [
        {
            id:1,
            imgSrc: img25,
        },
        {
            id:2,
            imgSrc: img26,
        },
        {
            id:3,
            imgSrc: img27,
        },
        {
            id:4,
            imgSrc: img28,
        },
        {
            id:5,
            imgSrc: img29,
        },
        {
            id:6,
            imgSrc: img30,
        },
        {
            id:7,
            imgSrc: img31,
        },
        {
            id:8,
            imgSrc: img33,
        },
        {
            id:9,
            imgSrc: img34,
        },
        {
            id:10,
            imgSrc: img35,
        },
        {
            id: 11,
            imgSrc: img36,
        },
        {
            id:12,
            imgSrc: img37,
        },
        {
            id:13,
            imgSrc: img38,
        },
        {
            id:14,
            imgSrc: img39,
        },
        {
            id:15,
            imgSrc: img40,
        },
        {
            id:16,
            imgSrc: img41,
        }
    ]






  return (
    <div>
        <h1 className="project-heading">Grpahical Posters & Digital Art</h1>
        <div className='gallery'>
            {data.map((item, index)=>{
                return(
                    <div className='pics' key={index}>
                        <img src={item.imgSrc} style={{width: '100%'}} />
                    </div>
                )
            }
            )}
        </div>
    </div>
  )
}

export default WorkCardGraphicDesign