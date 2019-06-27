import React, { useEffect, useRef } from "react"
import Typed from "typed.js"
import "./ParallaxTitle.scss"

const ParallaxTitle = () => {
  let typed = useRef(null)

  useEffect(() => {
    var options = {
      strings: [
        "Hi! <br/> I'm Piotr! <br /> Front-End Developer<span class='parallaxTitle-blinking'>.</span>"
      ],
      typeSpeed: 40,
      showCursor: false
    }

    typed.current = new Typed(".parallaxTitle", options)
  }, [])

  return <div className="parallaxTitle">{typed.current}</div>
}

export default ParallaxTitle
