import React, { ReactElement, useState, ReactNode, useEffect } from "react"
import useWindowScrollPosition from '@rehooks/window-scroll-position'

import "./Menu.scss"
// podkreslenie 80% wartosci szerokkosci buttona
const Menu = (): ReactElement => {
  const [activeButton, setActiveButton] = useState<number>(null)
  const [open, setOpen] = useState<boolean>(false)
  const buttonArray: any[] = [
    1,
    "About me",
    1,
    "Tech stack",
    1,
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
      setOpen(true)
      setActiveButton(null)
    }
  },[position])

  return (
    <div className="menu-container">
      {open && <nav className="menu">
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
              {element}
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
