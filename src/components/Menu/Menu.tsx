import React, { ReactElement } from 'react'
import "./Menu.scss"

const Menu = (): ReactElement => {
  return (
    <nav className="menu">
      <button>About Me</button>
      <button>Tech stack</button>
      <button>Projects</button>
      <button>Info</button>
    </nav>
  )
}

export default Menu
