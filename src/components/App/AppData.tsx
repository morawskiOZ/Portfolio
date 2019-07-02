import { InfoLinkProps } from "components/InfoCard/InfoCard"
import React from "react"
import { mongoDbIcon, nodeJSIcon } from "../../icons/backEndIcons"
import { gitIcon, ubuntuIcon } from "../../icons/developmentIcons"
import {
  css3Icon,
  html5Icon,
  jQueryIcon,
  JSIcon,
  reactIcon,
  SassIcon
} from "../../icons/frontEndIcons"
import { ReactComponent as GitHubSvg } from "../../icons/github.svg"
import { ReactComponent as HomeSvg } from "../../icons/home.svg"
import { ReactComponent as LinkedInSvg } from "../../icons/linkedIn.svg"

export const links: InfoLinkProps[] = [
  {
    address: "#",
    description: "Portfolio",
    icon: <HomeSvg />
  },
  {
    address: "https://www.linkedin.com/in/piotrmorawski90/",
    description: "LinkedIn",
    icon: <LinkedInSvg />
  },
  {
    address: "https://github.com/morawskioz",
    description: "GitHub",
    icon: <GitHubSvg />
  }
]

export const frontEndIcons = [
  reactIcon,
  css3Icon,
  html5Icon,
  jQueryIcon,
  JSIcon,
  SassIcon
]
export const backEndIcons = [mongoDbIcon, nodeJSIcon]
export const developmentIcons = [gitIcon, ubuntuIcon]
