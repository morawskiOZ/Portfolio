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
    <section className="appFrame-contentSection--centered">
      <p>My main area of expertise is front end development.</p>
    
      <p>
        During the office hours I work mainly with TS, React, Redux and SCSS.
        Creating reusable components is my jam, with strong emphasis on unit
        testing with Chain/Enzyme and Karma. Occasionally I make some work in Cypress tests.
      </p>
      <p>Currently I am part of an agile team. We work on SAAS project in the field of 
        enginirng simulation. Our main project is heavily dependent on multiply APIs and
        enourmous database. Thanks to that I feel comfortable in projects of high caliber, even abstract and
        very complicated/(synonym).
      </p>
      <p>
        After office hours I try to keep up with backend technologies, Mainly doing online 
        courses and working on my own projects. I did big online project with Next and also Express.
        I have first experience in writing ApolloGL mutations and queries to ocmuunicate with database 
        I created.
      </p>
    
    </section>
  )
}

export default ContentSection
