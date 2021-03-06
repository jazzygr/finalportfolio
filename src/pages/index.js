import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navigation/Navbar"
import LandingPage from "../components/landing/LandingPage"
import About from "../components/about/About"
import Skills from "../components/skills/Skills"
import Services from '../components/Services'
import OtherSkills from "../components/otherSkills/OtherSkills"
import Contact from "../components/contact/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <LandingPage />
    <About />
    <Skills />
    <Services />
    <OtherSkills />
    <Contact />
  </Layout>
)

export default IndexPage
