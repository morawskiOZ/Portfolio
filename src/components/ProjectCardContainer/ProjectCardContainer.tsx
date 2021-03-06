import React from 'react'    
import ProjectCard, {
  ProjectCardProps
} from "components/ProjectCard/ProjectCard"
import fruits from "../../photo/fruits.png"
import portfolio from "../../photo/portfolio.jpg"
import prime from "../../photo/prime.png"
import express from "../../photo/express.png"
import gameOfLife from "../../photo/gameOfLife.jpg"
import batman from "../../photo/batman.png"

const projects: ProjectCardProps[] = [
  {
    codeLink: "https://github.com/morawskiOZ/Portfolio",
    description: "React project with TypeScript and SCSS. Plus Node.js server with Express for mailing.",
    id: "portfolio",
    liveLink: "#",
    photoURL: portfolio,
    title: "Portfolio"
  },
  {
    codeLink: "https://github.com/morawskiOZ/Get_Prime_Numbers",
    description: "APP that shows prime numbers between given inputs. PUG front-end with Express API server. Mocha unit tests.",
    id: "Prime",
    liveLink: "https://where-are-my-primes.herokuapp.com/",
    photoURL: prime,
    title: "Prime Numbers"
  },
  {
    codeLink: "https://github.com/morawskiOZ/Node_Express_Server",
    description: "Express Server boilerplate with mailing. Easy to scale up with more routes and controllers. TypeScript ready.",
    id: "express",
    photoURL: express,
    title: "Express Server with mailing"
  },
  {
    codeLink: "https://github.com/morawskiOZ/Game_Of_Life",
    description: "Classic 0 player game - Game of Life. My second project in JS",
    id: "gameOfLife",
    liveLink: "https://morawskioz.github.io/Game_Of_Life/",
    photoURL: gameOfLife,
    title: "Game of Life"
  },
  {
    codeLink: "https://github.com/morawskiOZ/Fruits_Web",
    description: "Website created from pdf as a recruitment task, the very beginning of my Front-End career",
    id: "fruits",
    liveLink: "https://morawskioz.github.io/Fruits_Web/",
    photoURL: fruits,
    title: "Website - Fruits"
  },
  {
    codeLink: "https://github.com/morawskiOZ/Furry_Game",
    description: "My first game in JS. Very early stages of my Web technologies learning process",
    id: "batman",
    liveLink: "https://morawskioz.github.io/Furry_Game/",
    photoURL: batman,
    title: "Batman Game"
  }
]

const ProjectCardContainer = () => {
  return (
    
    <div className="projectCard-container">
    {projects.map(
      ({ title, codeLink, description, id, liveLink, photoURL }) => {
        return (
          <ProjectCard
            title={title}
            codeLink={codeLink}
            description={description}
            key={id}
            liveLink={liveLink}
            photoURL={photoURL}
            id={id}
          />
        )
      }
    )}
  </div>
  )
}

export default ProjectCardContainer

