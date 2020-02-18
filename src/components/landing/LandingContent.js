import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import animateScrollTo from 'animated-scroll-to';
import {motion} from 'framer-motion' 
import AOS from 'aos'
import 'aos/dist/aos.css';

const LandingContent = () => {
  const data = useStaticQuery(graphql`
  query {
    lineDrawingMain: file(relativePath: { eq: "line-drawing-main.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  
  function handleScroll() {
    animateScrollTo(document.getElementById('aboutMe'));
  }
  AOS.init();
  return (
    
    <div className="container">
      <div className="textContainer">
        <div className="lineContainer">
          <motion.div 
          initial={{x: '-100px'}}
          animate={{
            x: 0
          }}
          transition={{duration: 0.5}}
          ></motion.div>
          <h2 data-aos="fade-in" data-aos-duration="4000" data-aos-delay="400">Hey</h2>
          </div>
          <h1 data-aos-delay="600" data-aos="fade-up" data-aos-easing="ease-out">My name's Jeff</h1>
          <h2 data-aos="fade-right" data-aos-delay="1200" data-aos-easing="ease-in-out">I build <span>websites.</span></h2>
          <div className="buttonContainer">
          <button data-aos-delay="1600" data-aos="fade-up" onClick={handleScroll}>ABOUT ME</button>
          <button data-aos-delay="1600" data-aos="fade-up">DOWNLOAD CV</button>
      </div>
    </div>
    
    <div className="imageContainer">
    <Img fluid={data.lineDrawingMain.childImageSharp.fluid} />
    </div>
    </div>
    )
  }
  
  export default LandingContent