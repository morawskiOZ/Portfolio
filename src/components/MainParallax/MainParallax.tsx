import React from "react"
import "./MainParallax.scss"
import Menu from "components/Menu/Menu";

interface MainParallaxProps {
  parallaxImage: string
}

const MainParallax = ({ parallaxImage }: MainParallaxProps) => {
  const inlineStyles = {
    backgroundImage: `url(${parallaxImage})`
    
  }
  return (
    <>
 
      <div className="mainParallax-container">
        <div className="mainParallax-image" style={inlineStyles}>
        </div>
      </div>
    </>
  )
}

export default MainParallax
