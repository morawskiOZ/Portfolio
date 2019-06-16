import React, { useEffect, useState } from "react"

import Typed from "typed.js"
import "./ParallaxTitle.scss"

const ParallaxTitle = () => {
  let typed

  useEffect(() => {
    var options = {
      strings: [
        "Hi! <br/> I'm Piotr! <br /> Front-End Developer<span class='parallaxTitle-blinking'>.</span>"
      ],
      typeSpeed: 40,
      showCursor: false
    }

    typed = new Typed(".parallaxTitle", options)
  }, [])

  return <div className="parallaxTitle">{typed}</div>
}

export default ParallaxTitle
