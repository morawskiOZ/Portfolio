import React from "react"
import "./ContentSection.scss"

const ContentSection = () => {
  const itemsTest = [
    <div>Lol</div>,
    <div>Lol</div>,
    <div>Lol</div>,
    <div>Lol</div>,
    <div>Lol</div>,
    <div>Lol</div>,
    <div>Lol</div>,
    <div>Lol</div>,
    <div>Lol</div>,
    <div>Lol</div>
  ]

  return (
    <section className="contentSection contentSection--centered">
      <p>Creating reusable components in React with TypeScript is my jam.</p>
      <br />
      <p>
        Everything can be tested is my motto. Unit tests with Chain/Enzyme and
        Karma. Occasionally some work in Cypress tests.
      </p>
      <br />
      {/* <p>
        I have experience as a member of an agile team working on a large-scale SAAS project in the field of 
        engineering simulation.
      </p>
      <br /> */}
      <p>
        My programming role model is Dan Abramov. I follow his blog and Twitter
        extensively.
      </p>
    </section>
  )
}

export default ContentSection
