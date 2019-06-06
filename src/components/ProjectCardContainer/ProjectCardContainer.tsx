import React from 'react'    
import ProjectCard, {
  ProjectCardProps
} from "components/ProjectCard/ProjectCard"
import fruits from "../../photo/fruits_small.png"

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

