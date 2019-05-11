import React from "react"
import "./App.scss"
import Menu from "../Menu/Menu"
import MainParallax from "../MainParallax/MainParallax"
import parallax from "../../photo/parallax.jpg"
import ContentSection from "../ContentSection/ContentSection"

const App = () => {
  return (
    <>
      <Menu />
      <MainParallax parallaxImage={parallax} />
      <ContentSection />
      // projects
      // kontakt
      //
    </>
  )
}

export default App
