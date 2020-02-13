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
          <Card imgsrc={img1} title="Portfolio Website" text="Built using Gatsby.js with styled components and Spring.js." overview="My portfolio website. Built using Gatsby.js, this was my first time building in a React environment. I used Styled Components for the first time and built all components from scratch. The initial design of the site was created in Adobe XD." problems="Lots! From having to rebuild the entire site due to poorly thought out design problems, to having to learn a lot of React... I learned a LOT of valuable lessons about planning larger projects ahead of time that I will implement in future." solutions="I rebuilt the site due to design inconsistencies that were making it difficult to proceed. I went back to the drawing board and learned about wireframing and prototyping with Adobe XD. This helped with creating a more consistent aesthetic." improvements="A lot of things need improved. Accessibility has been tested for contrast and semantic headings are correct, but Aria labelling needs added. I also need to replace the portfolio and skills component on desktop as it doesn't work as intended at present. Styling is an issue on tablet due to font size issues that need to be corrected." className="card" id="portfolioCard"/>

          <Card imgsrc={img2} title="RGB Colour Picker" text="A larger project to test your RGB colour knowledge." overview="A colour picker game to test your RBG colour knowledge. I built this as a follow along project as a means of observing how larger Javascript projects are assembled." problems="Keeping pace with the instructor was challenging as I was pretty new to Javascript when I completed this project." solutions="I took my time with this one, and as new concepts were introduced I took the time to research what they were on MDN and by following Youtube video tutorials." improvements="To try and make my own version of a larger project in React to help further my understanding of data flow and how to compose components." className="card"/>

          <Card imgsrc={img3} title="Javascript Piano" text="A javascript piano that works across one octave." overview="A simple Javascript piano to practice vanilla Javascript skills." problems="Binding the sound files to the relevant keyboard keys to make the piano comfortable to play." solutions="Researched key binding on MDN and implemented it into the project." improvements="To make the piano work over a number of octaves, and to find higher quality sound files." className="card"/>

          <Card imgsrc={img4} title="Weather App" text="A weather app that shows the weather based on your location." overview="A basic weather app that pulls data from an API to display weather information based on your location, and updated an SVG image to match the type of weather." problems="This was one of my first times working with an API, so it was a fun challenge working with different data sources." solutions="Practiced making different requests from the API for various types of weather display, such as pulling in data about humidity rather than temperature etc." improvements="Adding search functionality would improve the versatility of the app, as well as adding different types of weather information." className="card"/> 
          
    </div>
    </>
    )
  }

  export default SkillsCardContent