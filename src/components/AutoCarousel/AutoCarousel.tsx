import React, { useState } from "react"
import {throttle as _throttle} from "lodash"
import CarouselsItem from "./CarouselsItem/CarouselsItem"
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup"
import "./AutoCarousel.scss"
import "./foundation-icon/foundation-icons.scss"


interface AutoCarouselProps {
  items: any
  autoRotate?: boolean
}

const AutoCarousel = ({ items }: AutoCarouselProps) => {
  const [activeElementIndex, setActiveElementIndex] = useState<number>(5)
  const [direction, setDirection] = useState<string>("")

  const generateItems = itemsArray => {
    let carouselItems = []
    let level
    console.log(activeElementIndex)
    for (let i = activeElementIndex - 2; i < activeElementIndex + 3; i++) {
      let index = i
      if (i < 0) {
        index = itemsArray.length + i
      } else if (i >= itemsArray.length) {
        index = i % itemsArray.length
      }
      level = activeElementIndex - i
      carouselItems.push(
        <CarouselsItem
          key={index}
          id={index}
          level={level}
          component={itemsArray[index]}
        />
      )
    }
    return carouselItems
  }

  // const onClickHandler = ({ target }: any) => {
  //   const name: any = target.getAttribute("data-tag");
  //   [`move${name}`]()
  // }

  const moveLeft = (itemsArray: any) => {
    setActiveElementIndex(prevActiveElementIndex =>
     ( prevActiveElementIndex - 1) < 0
        ? itemsArray.length - 1
        : prevActiveElementIndex - 1
    )
    setDirection("left")
  }
  const denouncedMoveLeft = _throttle(moveLeft, 1000)

  const moveRight = (itemsArray: any) => {
    setActiveElementIndex(
      prevActiveElementIndex => (prevActiveElementIndex + 1) % itemsArray.length
    )
    setDirection("right")
  }
  return (
    <div id="carousel" className="noselect">
      <div
        className="arrow arrow-left"
        onClick={() => moveLeft(items)}
      >
        <i className="fi-arrow-left" />
      </div>
        <CSSTransitionGroup
        component="div"
        className="carouselItem-container"
          transitionName={direction}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          
          {generateItems(items)}
        </CSSTransitionGroup>
      <div
        className="arrow arrow-right"
        onClick={() => moveRight(items)}
      >
        <i className="fi-arrow-right" />
      </div>
    </div>
  )
}

export default AutoCarousel
