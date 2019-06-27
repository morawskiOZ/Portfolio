import AutoCarousel from "components/AutoCarousel/AutoCarousel"
import Footer from "components/Footer/Footer"
import InfoCard, { InfoLinkProps } from "components/InfoCard/InfoCard"
import InfoCardSection from "components/InfoCardSection/InfoCardSection"
import IntroSection from "components/IntroSection/IntroSection"
import DownArrows from "components/MainParallax/DownArrows/DownArrows"
import ParallaxTitle from "components/MainParallax/ParallaxTitle/ParallaxTitle"
import ProjectCardContainer from "components/ProjectCardContainer/ProjectCardContainer"
import React from "react"
import Sticky from "react-sticky-el"
import { mongoDbIcon, nodeJSIcon } from "../../icons/backEndIcons"
import { gitIcon, ubuntuIcon } from "../../icons/developmentIcons"
import {
  css3Icon,
  html5Icon,
  jQueryIcon,
  JSIcon,
  reactIcon,
  SassIcon
} from "../../icons/frontEndIcons"
import { ReactComponent as GitHubSvg } from "../../icons/github.svg"
import { ReactComponent as HomeSvg } from "../../icons/home.svg"
import { ReactComponent as LinkedInSvg } from "../../icons/linkedIn.svg"
import parallax from "../../photo/parallax2.jpg"
import photoID from "../../photo/photoID.png"
import IntroText from "../IntroText/IntroText"
import MainParallax from "../MainParallax/MainParallax"
import Menu from "../Menu/Menu"
import ProjectsSection from "../ProjectsSection/ProjectsSection"
import "./App.scss"

const frontEndIcons = [
  reactIcon,
  css3Icon,
  html5Icon,
  jQueryIcon,
  JSIcon,
  SassIcon
]
const backEndIcons = [mongoDbIcon, nodeJSIcon]
const developmentIcons = [gitIcon, ubuntuIcon]

const links: InfoLinkProps[] = [
  {
    address: "www.portfolio.pl",
    description: "Portfolio",
    icon: <HomeSvg />
  },
  {
    address: "https://www.linkedin.com/in/piotrmorawski90/",
    description: "LinkedIn",
    icon: <LinkedInSvg />
  },
  {
    address: "https://github.com/morawskioz",
    description: "GitHub",
    icon: <GitHubSvg />
  }
]

const App = () => {
  return (
    <div className="appFrame ">
      <div className="appFrame-item--fullWidth appFrame-item--firstRow">
        <Sticky className="menu--sticky" topOffset={30}>
          <Menu />
        </Sticky>
      </div>

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
        <InfoCardSection id={"Info"}>
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
    </div>
  )
}

export default App
