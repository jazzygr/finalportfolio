import React, {useEffect} from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import animateScrollTo from 'animated-scroll-to';
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
  useEffect(AOS.init);
  return (
    
    <div className="container">
      <div className="textContainer">
        <div className="lineContainer">
          <div
          data-aos='slide-right'
          data-aos-offset="100"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          ></div>
          <h2 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">Hey</h2>
          </div>
          <h1 data-aos-delay="600" data-aos="fade-up" data-aos-easing="ease-out">My name's Jeff</h1>
          <h2 data-aos="fade-right" data-aos-delay="1000" data-aos-easing="ease-in-out">I build <span>websites.</span></h2>
          <div className="buttonContainer">
          <button data-aos-delay="1300" data-aos="fade-up" data-aos-once="true" data-aos-offset="-100" onClick={handleScroll}>ABOUT ME</button>
          <button data-aos-delay="1300" data-aos="fade-up" data-aos-once="true" data-aos-offset="-100">DOWNLOAD CV</button>
      </div>
    </div>
    
    <div className="imageContainer">
    <Img fluid={data.lineDrawingMain.childImageSharp.fluid} />
    </div>
    </div>
    )
  }
  
  export default LandingContent