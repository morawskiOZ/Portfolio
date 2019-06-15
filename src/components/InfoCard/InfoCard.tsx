import React, { ReactElement } from "react"

import "./InfoCard.scss"
import InfoCardLink from "./InfoCardLink/InfoCardLink"
import ContactForm from "components/ContactForm/ContactForm";

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
          <h1 className="infoCard-name">{fullName}</h1>
          <h2 className="infoCard-title">{title}</h2>
          <h3 className="infoCard-description">{city}</h3>
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
        <ContactForm />
      </div>
    </div>
  )
}

export default InfoCard
