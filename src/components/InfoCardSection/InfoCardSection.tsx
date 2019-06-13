import React, { ReactElement, Component } from 'react'
import "./InfoCardSection.scss"


const InfoCardSection = ({children}) => {
  return (
    <>
    <div className="InfoCardSection-container">
      <h2 className="InfoCardSection-title">Contact  </h2>
      <div className="InfoCardSection-firstDot">
        <div className="InfoCardSection-firstDot--inner" />
      </div>
      <div className="InfoCardSection-secondLine" />
      <div className="InfoCardSection-secondDot">
        <div className="InfoCardSection-secondDot--inner" />
        <div className="InfoCardSection-thirdLine" />
      </div>
      
    </div>
        {children}
    </>
  )
}

export default InfoCardSection
