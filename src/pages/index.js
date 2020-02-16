import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navigation/Navbar"
import LandingPage from "../components/landing/LandingPage"
import About from "../components/about/About"
import Skills from "../components/skills/Skills"
import OtherSkills from "../components/otherSkills/OtherSkills"
import Contact from "../components/contact/Contact"
// import SidebarText from "../components/navigation/SidebarText"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <SidebarText /> */}
    <Navbar />
    <LandingPage />
    <About />
    <Skills />
    <OtherSkills />
    <Contact />
  </Layout>
)

export default IndexPage
