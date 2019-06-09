import React, { ReactElement } from 'react'
import "./SectionTitle.scss"


const SectionsTitle = ({title}: {title: string}): ReactElement => {
  return (
    <h2 className="sectionTitle">
      {title}
    </h2>
  )
}

export default SectionsTitle
