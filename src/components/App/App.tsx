import AutoCarousel from "components/AutoCarousel/AutoCarousel"
import Footer from "components/Footer/Footer"
import InfoCard from "components/InfoCard/InfoCard"
import InfoCardSection from "components/InfoCardSection/InfoCardSection"
import IntroSection from "components/IntroSection/IntroSection"
import DownArrows from "components/MainParallax/DownArrows/DownArrows"
import ParallaxTitle from "components/MainParallax/ParallaxTitle/ParallaxTitle"
import ProjectCardContainer from "components/ProjectCardContainer/ProjectCardContainer"
import React from "react"
import Sticky from "react-sticky-el"
import parallax from "../../photo/parallax3.jpg"
import photoID from "../../photo/photoID.png"
import IntroText from "../IntroText/IntroText"
import MainParallax from "../MainParallax/MainParallax"
import Menu from "../Menu/Menu"
import ProjectsSection from "../ProjectsSection/ProjectsSection"
import "./App.scss"
import { frontEndIcons, backEndIcons, developmentIcons, links } from "./AppData"

const App = () => {
  return (
    <>
      <Sticky className="menu--sticky" topOffset={30}>
        <Menu />
      </Sticky>
      <MainParallax parallaxImage={parallax}>
        <ParallaxTitle />
        <DownArrows href={"#Intro"} />
      </MainParallax>
      <div className="appFrame-timeLineZone">
        <div className="TimeLine-thirdLine" />
        <IntroSection id={"Intro"}>
          <AutoCarousel
            items={[...frontEndIcons, ...backEndIcons, ...developmentIcons]}
          />
          <IntroText />
        </IntroSection>
        <ProjectsSection id={"Projects"}>
          <ProjectCardContainer />
        </ProjectsSection>
        <InfoCardSection id={"Contact"}>
          <InfoCard
            city={"Wroclaw"}
            email={"piotrmorawski90@gmail.com"}
            fullName={"Piotr Morawski"}
            title={"Front-End Developer"}
            links={links}
            photoUrl={photoID}
          />
        </InfoCardSection>
      </div>
      <Footer />
    </>
  )
}

export default App
