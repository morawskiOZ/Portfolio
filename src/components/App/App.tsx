import React from "react"
import "./App.scss"
import Menu from "../Menu/Menu"
import MainParallax from "../MainParallax/MainParallax"
import parallax from "../../photo/parallax.jpg"
import fruits from "../../photo/fruits_small.png"
import ContentSection from "../ContentSection/ContentSection"
import ProjectCard, {
  ProjectCardProps
} from "components/ProjectCard/ProjectCard"

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

const App = () => {
  return (
    <div className="appFrame ">
      <Menu />
      <MainParallax parallaxImage={parallax} />
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
      // projects // kontakt //
    </div>
  )
}

export default App
