import React, { ReactElement, useState, ReactNode } from "react"
import "./Menu.scss"
// podkreslenie 80% wartosci szerokkosci buttona
const Menu = (): ReactElement => {
  const [activeButton, setActiveButton] = useState<number>(null)
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

  return (
    <nav className="menu">
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
    </nav>
  )
}

export default Menu
