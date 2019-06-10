import React from "react"
import "./DownArrows.scss"

const DownArrows = () => {
  return (
    <div className="downArrow arrows downArrow--flex">
      <i className="downArrow--animated" />
      <i className="downArrow--animated downArrow--bottom" />
    </div>
  )
}

export default DownArrows
