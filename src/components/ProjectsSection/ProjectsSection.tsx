import React from 'react'
import "./ProjectsSection.scss"

const ProjectsSection = ({children}) => {
  return (
    <>
    <div className="ProjectsSection-container">
      <div className="TimeLine-firstDot">
      <h2 className="ProjectsSection-title">Projects  </h2>
        <div className="TimeLine-firstDot--inner" />
      </div>
      <div className="TimeLine-secondLine" />
      <div className="TimeLine-secondDot">
        <div className="TimeLine-secondDot--inner" />
      </div>
      
    </div>
        {children}
    </>
  )
}

export default ProjectsSection
