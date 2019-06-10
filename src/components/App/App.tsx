import React from "react"
import Sticky from "react-sticky-el"

import "./App.scss"
import Menu from "../Menu/Menu"
import MainParallax from "../MainParallax/MainParallax"
import parallax from "../../photo/parallax2.jpg"
import photoID from "../../photo/photoID.png"

import ContentSection from "../ContentSection/ContentSection"

import AutoCarousel from "components/AutoCarousel/AutoCarousel"
import {
  reactIcon,
  css3Icon,
  html5Icon,
  jQueryIcon,
  JSIcon,
  SassIcon
} from "../../icons/frontEndIcons"
import { mongoDbIcon, nodeJSIcon } from "../../icons/backEndIcons"
import { gitIcon, ubuntuIcon } from "../../icons/developmentIcons"
import ProjectCardContainer from "components/ProjectCardContainer/ProjectCardContainer"
import InfoCard, { InfoLinkProps } from "components/InfoCard/InfoCard"

import { ReactComponent as HomeSvg } from "../../icons/home.svg"
import { ReactComponent as LinkedInSvg } from "../../icons/linkedIn.svg"
import { ReactComponent as GitHubSvg } from "../../icons/github.svg"
import SectionsTitle from "components/SectionTitle/SectionsTitle"
import ParallaxTitle from "components/MainParallax/ParallaxTitle/ParallaxTitle"
import DownArrows from "components/MainParallax/DownArrows/DownArrows";
import MenuStart from "components/MenuStart/MenuStart";

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

// const stickyStyles = {
//   backgroundColor: "black",
// }
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
        <Sticky>
          <Menu />
        </Sticky>
      </div>

      <MainParallax parallaxImage={parallax}>
        <ParallaxTitle />
        <DownArrows />
      </MainParallax>
      <MenuStart >
      <AutoCarousel
        items={[...frontEndIcons, ...backEndIcons, ...developmentIcons]}
      />
      <ContentSection />
      </MenuStart>
      {/* <SectionsTitle title={"Projects"} />
      <ProjectCardContainer />
      <SectionsTitle title={"Contact"} />
      <InfoCard
        city={"Wroclaw"}
        email={"pm@gmail.com"}
        fullName={"Jan Kowalksi"}
        title={"Magik"}
        links={links}
        photoUrl={photoID}
      /> */}

      {/* // projects // kontakt // */}
    </div>
  )
}

export default App
