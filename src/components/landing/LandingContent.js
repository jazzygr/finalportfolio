import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import animateScrollTo from 'animated-scroll-to';

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
    
    function handleScroll(t=()=>{}) {
      animateScrollTo(document.getElementById('aboutMe'));
  }
    return (

            <div className="container">

                <div className="textContainer">
                    <div className="lineContainer">
                        <div></div>
                        <h2>Hey</h2>
                    </div>
                    <h1>My name's Jeff</h1>
                    <h2>I build <span>websites.</span></h2>
                    <div className="buttonContainer">
                        <button onClick={handleScroll}>ABOUT ME</button>
                        <button>DOWNLOAD CV</button>
                    </div>
                </div>

                <div className="imageContainer">
                    <Img fluid={data.lineDrawingMain.childImageSharp.fluid} />
                </div>
            </div>
    )
}

export default LandingContent