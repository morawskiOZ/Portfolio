import React from "react"
import "./App.scss"
import Menu from "../Menu/Menu"
import MainParallax from "../MainParallax/MainParallax"
import parallax from "../../photo/parallax2.jpg"
import fruits from "../../photo/fruits_small.png"
import ContentSection from "../ContentSection/ContentSection"
import ProjectCard, {
  ProjectCardProps
} from "components/ProjectCard/ProjectCard"
import AutoCarousel from "components/AutoCarousel/AutoCarousel";
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

const projects: ProjectCardProps[] = [
  {
    codeLink: "www.wp.pl",
    description: "nice www",
    id: "id1",
    liveLink: "www.wp.pl",
    photoURL: fruits,
    title: "truskawki"
  },
  {
    codeLink: "www.wp.pl",
    description: "nice www",
    id: "id1",
    liveLink: "www.wp.pl",
    photoURL: fruits,
    title: "truskawki"
  },
  {
    codeLink: "www.wp.pl",
    description: "nice www",
    id: "id1",
    liveLink: "www.wp.pl",
    photoURL: fruits,
    title: "truskawki"
  },
  {
    codeLink: "www.wp.pl",
    description: "nice www",
    id: "id1",
    liveLink: "www.wp.pl",
    photoURL: fruits,
    title: "truskawki"
  },
  {
    codeLink: "www.wp.pl",
    description: "nice www",
    id: "id1",
    liveLink: "www.wp.pl",
    photoURL: fruits,
    title: "truskawki"
  },
  {
    codeLink: "www.wp.pl",
    description: "nice www",
    id: "id1",
    liveLink: "www.wp.pl",
    photoURL: fruits,
    title: "truskawki"
  }
]

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

const App = () => {
  return (
    <div className="appFrame ">
      
      <MainParallax parallaxImage={parallax} />
      <AutoCarousel
        items={[
          ...frontEndIcons,
          ...backEndIcons,
          ...developmentIcons
        ]}
      />
      <ContentSection />

      <div className="projectCard-container">
        {projects.map(
          ({ title, codeLink, description, id, liveLink, photoURL }) => {
            return (<ProjectCard
              title={title}
              codeLink={codeLink}
              description={description}
              key={id}
              liveLink={liveLink}
              photoURL={photoURL}
              id={id}
            />)
          }
        )}
      </div>
      {/* // projects // kontakt // */}
    </div>
  )
}

export default App
