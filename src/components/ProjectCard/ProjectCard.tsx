import React, { useState } from "react"
import { ReactComponent as GitHubSvg } from "../../icons/github.svg"
import { ReactComponent as ReactSvg } from "../../icons/www.svg"
import "./ProjectCard.scss"

export interface ProjectCardProps {
  title: string
  photoURL: string
  description: string
  liveLink?: string
  codeLink: string
  id: string
}

const ProjectCard = ({
  title,
  codeLink,
  description,
  liveLink,
  photoURL,
  id
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const inlineStyle = { backgroundImage: `url(${photoURL})` }
  return (
    <div
      id={title}
      key={title}
      className="projectCard"
      onClick={() => {
        isHovered && setIsHovered(false)
        setIsClicked(prevState => !prevState)
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsClicked(false)
        setIsHovered(false)
      }}
    >
      <div className="projectCard-picture" style={inlineStyle} />
      <div
        className={`projectCard-overlay ${
          isHovered || isClicked ? "projectCard-overlay--shown" : ""
        }`}
      >
        <h3 className="projectCard-title">{title}</h3>
        <p className="projectCard-description">{description}</p>
        <div className="projectCard-links">
          {liveLink && (
            <a
              className="projectCard-link"
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactSvg className="projectCard-svg" />
              <p>Live link</p>
            </a>
          )}
          <a
            className="projectCard-link"
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubSvg className="projectCard-svg" />
            <p>See the code</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
