import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

 const AboutImage = () => {
    const data = useStaticQuery(graphql`
    query {
      aboutMeMain: file(relativePath: { eq: "aboutMeMain.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)
    return (
                <div className="imageContainer">
                    <Img fluid={data.aboutMeMain.childImageSharp.fluid} />
                </div>
    )
}


export default AboutImage