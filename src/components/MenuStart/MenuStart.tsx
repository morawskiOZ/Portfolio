import React from "react"
import "./MenuStart.scss"

const MenuStart = ({ children }) => {
  return (
    <>
    <div className="MenuStart-container">
      <div className="MenuStart-firstLine" />
      <h2 className="MenuStart-title">Intro </h2>
      <div className="MenuStart-firstDot">
        <div className="MenuStart-firstDot--inner" />
      </div>
      <div className="MenuStart-secondLine" />
      <div className="MenuStart-secondDot">
        <div className="MenuStart-secondDot--inner" />
        <div className="MenuStart-thirdLine" />
      </div>
      
    </div>
        {children}
    </>
  )
}

export default MenuStart
