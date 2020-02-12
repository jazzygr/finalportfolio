import React from 'react';
import Card from "./Card"
import MainCard from "./MainCard"
import img1 from "../../images/portfolio.png"
import img2 from "../../images/colourgame.png"
import img3 from "../../images/piano.png"
import img4 from "../../images/weatherapp.png"


const SkillsCardContent = () => {
  return (
    <>
    <div className="cardContainer">
        <MainCard />
          <Card imgsrc={img1} title="Portfolio Website" text="Built using Gatsby.js with styled components and Spring.js." overview="Props test nigga"/>
          <Card imgsrc={img2} title="RGB Colour Picker" text="A larger project to test your RGB colour knowledge."/>
          <Card imgsrc={img3} title="Javascript Piano" text="A javascript piano that works across one octave."/>
          <Card imgsrc={img4} title="Weather App" text="A weather app that shows the weather based on your location."/> 
    </div>
    </>
    )
  }
  
  
  export default SkillsCardContent