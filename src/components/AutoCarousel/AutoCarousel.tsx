import React, { useState, useEffect } from "react"
// import _ from "lodash"
import CarouselsItem from "./CarouselsItem/CarouselsItem"
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup"
import "./AutoCarousel.scss"
import "./foundation-icon/foundation-icons.scss"

// TODO add stop and go func on click, show diffrent coursor
// add pagination, kropki ktore pokazuja aktywny projekt i maja tez setery ustawiajace a
interface AutoCarouselProps {
  items: any
  autoRotate?: boolean
}

const AutoCarousel = ({ items, autoRotate }: AutoCarouselProps) => {
  const [activeElementIndex, setActiveElementIndex] = useState<number>(5)
  const [direction, setDirection] = useState<string>("")

  const generateItems = itemsArray => {
    let carouselItems = []
    let level
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
      prevActiveElementIndex - 1 < 0
        ? itemsArray.length - 1
        : prevActiveElementIndex - 1
    )
    setDirection("left")
  }

  // Debounce to add when there will be direction control in carousel

  // const denouncedMoveLeft = _.debounce((itemsArray: any) => {
  //   setActiveElementIndex(
  //     prevActiveElementIndex => (prevActiveElementIndex + 1) % itemsArray.length
  //   )
  //   setDirection("right")
  // }, 1000)

  const moveRight = (itemsArray: any) => {
    setActiveElementIndex(
      prevActiveElementIndex => (prevActiveElementIndex + 1) % itemsArray.length
    )
    setDirection("right")
  }

  const autoTurn = () => {
    if (direction === "left") {
      moveLeft(items)
    }
    moveRight(items)
  }
  // TODO add when user scrolls to this part, it stars moving
  useEffect(() => {
    const autoRotateInterval = setInterval(autoTurn, 1500)
    return () => {
      clearInterval(autoRotateInterval)
    }
  })

  return (
    <div>
      <div id="carousel" className="autoCarousel noselect">
        {autoRotate! && (
          <div className="arrow arrow-left" onClick={() => moveLeft(items)}>
            <i className="fi-arrow-left" />
          </div>
        )}
        <CSSTransitionGroup
          component="div"
          className="carouselItem-container"
          transitionName={direction}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
        >
          {generateItems(items)}
        </CSSTransitionGroup>
        {autoRotate! && (
          <div className="arrow arrow-right" onClick={() => moveRight(items)}>
            <i className="fi-arrow-right" />
          </div>
        )}
      </div>
    </div>
  )
}

export default AutoCarousel
