import React, { ReactElement, useState, ReactNode, useEffect } from "react"
import useWindowScrollPosition from '@rehooks/window-scroll-position'
import AnchorLink from 'react-anchor-link-smooth-scroll'


import "./Menu.scss"
// podkreslenie 80% wartosci szerokkosci buttona
// TODO:
// 1. Burger button animation
//
const Menu = (): ReactElement => {
  const [activeButton, setActiveButton] = useState<number>(null)
  const [open, setOpen] = useState<boolean>(false)
  const [isStartPosition, setIsStartPosition] = useState<boolean>(false)
  const buttonArray: any[] = [
    1,
    "Intro",
    1,
    // "Tech stack",
    // 1,
    "Projects",
    1,
    "Info",
    1
  ]

  let options = {
    throttle: 100,
  }
  let position = useWindowScrollPosition(options)

  useEffect(() => {
    if (position.y === 0) {
      setIsStartPosition(true)
      setActiveButton(null)
    } else {
      setIsStartPosition(false)
    }
  },[position])

  return (
    <div className="menu-container">
      {(open || isStartPosition) && <nav className="menu">
        {buttonArray.map((element, index) => {
          if (element === 1) {
            return <div className="menu-item--divider"> </div>
          }
          return (
            <button
              className={`menu-item ${activeButton === index &&
                "menu-item--active"}`}
              onClick={() => setActiveButton(index)}
            >
              <AnchorLink href={`#${element}`} offset='100'> {element}</AnchorLink>
            </button>
          )
        })}
      </nav>}
      <div className={`menu-burgerMenu ${open ? "menu-burgerMenu--open" : ""}`} onClick={() => setOpen(!open)}>
        <div className="menu-bar1" key="b1" />
        <div className="menu-bar2" key="b2" />
        <div className="menu-bar3" key="b3" />
      </div>
    </div>
  )
}

export default Menu
