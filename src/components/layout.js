import React from "react"
import PropTypes from "prop-types"
import 'normalize.css'
import "./layout.css"
import styled from 'styled-components'

const Layout = ({ children }) => {

  return (
    <>
        
        <main>{children}</main>
        <Footer>
          Built by Jeff Graham with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>  © {new Date().getFullYear()}
          <p>PNG Illustrations Designed By ngupakarti From <a href="https://pngtree.com/">Pngtree.com</a></p>
        </Footer>
    </>
  )
}
const Footer = styled.footer`
  width: 80%;
  text-align: center;
  margin: 1rem auto;
  font-family: 'montserrat';
`
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
