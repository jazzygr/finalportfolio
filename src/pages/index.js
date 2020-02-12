import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navigation/Navbar"
import LandingPage from "../components/landing/LandingPage"
import About from "../components/about/About"
import Skills from "../components/skills/Skills"
import Contact from "../components/contact/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <LandingPage />
    <About />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
