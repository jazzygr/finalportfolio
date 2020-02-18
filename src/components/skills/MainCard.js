import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import theme from "../styles/Global"

const MainCard = props => {
  const data = useStaticQuery(graphql`
    query {
      preview: file(relativePath: { eq: "preview.png" }) {
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
      <CardImage>
      <Img fluid={data.preview.childImageSharp.fluid} />
      <BannerText>
        <p>Coming Soon!</p>
        </BannerText>
    </CardImage>
    </>
  )
}

const BannerText = styled.h2`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

const CardImage = styled.div`
display: grid;
position: relative;
overflow: hidden;
text-align: center;
font-size: 1rem;
cursor: pointer;
box-shadow: 0px 3px 6px rgb(20,20,20, 0.16); 
border: 1px solid ${theme.accent};
div:first-child{
-webkit-filter: blur(10px);
  filter: blur(10px);
  :hover{
    transition: transform 2s, 0.3s ease-in;
    transform: scale(1.1);
      img{
        transition: transform 2s, 0.3s ease-in;
        transform: scale(1.1);
      }
    }
}`

export default MainCard
