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
      // make technology carousel
      <p>
        During the office hours I work mainly with TS, React, Redux and SCSS.
        Creating reusable components is my jam with strong emphasis on unit
        testing with Chain/Enzyme and Karma. Occasionally I make some work
      </p>
      <h3>Web</h3>
      <ul>
        <li>Javascript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Pug</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>SCSS</li>
      </ul>
      <h3>Server</h3>
      <ul>
        <li>Node</li>
        <li>Express</li>
        <li>Next</li>
        <li>NoSQL</li>
        <li>MongoDB</li>
        <li>Apollo</li>
        <li>GraphQL</li>
      </ul>
      <h3>Development</h3>
      <ul>
        <li>Webpack</li>
        <li>WebStorm</li>
        <li>VSC</li>
      </ul>
      <h3>Testing</h3>
      <ul>
        <li>Enzyme</li>
        <li>Chai</li>
        <li>Karma</li>
        <li>Cypress</li>
      </ul>
      <h3>Project management </h3>
      <ul>
        <li>JIRA</li>
        <li>Kanban</li>
        <li>Scrum</li>
      </ul>
    </section>
  )
}

export default ContentSection
