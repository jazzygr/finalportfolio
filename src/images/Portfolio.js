import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Portfolio = props => {
  const data = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Img fluid={data.portfolio.childImageSharp.fluid} />
    </>
  )
}



export default Portfolio
