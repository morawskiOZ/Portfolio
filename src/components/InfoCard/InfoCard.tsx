import React, { ReactElement } from "react"

import "./InfoCard.scss"
import InfoCardLink from "./InfoCardLink/InfoCardLink"

export interface InfoLinkProps {
  icon: ReactElement
  address: string
  description: string
}

export interface InfoCardProps {
  fullName: string
  title: string
  city?: string
  email?: string
  photoUrl?: any
  links?: InfoLinkProps[]
}

export const InfoCard = ({
  fullName,
  email,
  links,
  photoUrl,
  title,
  city
}: InfoCardProps) => {
  const inlineStyles = {
    backgroundImage: `url(${photoUrl})`
  }
  return (
    <div className="infoCard">
      <div className="infoCard-infoContainer">
        <div className="infoCard-photo" style={inlineStyles} />
        <div className="infoCard-info">
          <h3 className="infoCard-name">{fullName}</h3>
          <h4 className="infoCard-title">{title}</h4>
          <p className="infoCard-description">{city}</p>
          <div className="infoCard-links">
            {links.map(link => (
              <InfoCardLink
                address={link.address}
                description={link.description}
                icon={link.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
