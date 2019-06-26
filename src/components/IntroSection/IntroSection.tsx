import React from "react"
import "./IntroSection.scss"
import "../TimeLine/TimeLine.scss"

const IntroSection = ({ children, id }) => {
  var body = document.body,
    html = document.documentElement

    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    


  console.log(scrollHeight)

  return (
    <>
      <div className="IntroSection-container" id={id}>
        <div className="TimeLine-firstLine" />
        
        <div className="TimeLine-firstDot">
          <h2 className="IntroSection-title">Intro </h2>
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

export default IntroSection
