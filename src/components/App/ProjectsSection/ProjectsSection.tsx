import React from 'react'
import "./ProjectsSection.scss"

const ProjectsSection = ({children}) => {
  return (
    <>
    <div className="ProjectsSection-container">
      <h2 className="ProjectsSection-title">Projects  </h2>
      <div className="ProjectsSection-firstDot">
        <div className="ProjectsSection-firstDot--inner" />
      </div>
      <div className="ProjectsSection-secondLine" />
      <div className="ProjectsSection-secondDot">
        <div className="ProjectsSection-secondDot--inner" />
        <div className="ProjectsSection-thirdLine" />
      </div>
      
    </div>
        {children}
    </>
  )
}

export default ProjectsSection
