import React from 'react'
import { InfoLinkProps } from '../InfoCard';

import "./InfoCardLink.scss"

const InfoCardLink = ({address,description,icon}: InfoLinkProps) => {
  return (
    <div className="InfoCardLink">
      <div className="InfoCardLink-Svg">{icon}</div>
      <a className="InfoCardLink-link" href={address}>{description}</a>
    </div>
  )
}

export default InfoCardLink
