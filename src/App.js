import React from "react";
import "./index.css";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import About from "./Routes/About";

import {Router, Route, Routes} from "react-router-dom";
import Photoshoot from "./Routes/Photoshoot";
import Videoshoot from "./Routes/Videoshoot";
import GraphicDesign from "./Routes/GraphicDesign";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/photoshoot" element={<Photoshoot />}/>
        <Route path="/videoshoot" element={<Videoshoot />}/>
        <Route path="/graphicdesign" element={<GraphicDesign />}/>
      </Routes>
    </>
  );
}

export default App;
