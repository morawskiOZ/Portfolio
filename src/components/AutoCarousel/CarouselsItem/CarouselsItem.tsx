import React, { ReactElement } from "react"
import "./CarouselsItem.scss"

interface CarouselsItem {
  id: number
  level: number
  component: ReactElement
}

const CarouselsItem = ({ id, level, component }: CarouselsItem) => {
  const className = "item level" + level
  console.log(id)
  return (
    <div className={className} id={`${id}`} key={`${id}`}>
      {component}
    </div>
  )
}

export default CarouselsItem
