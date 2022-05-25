import React from 'react'
import Cards from '../components/Cards';

function About() {
  return (
    <div className="about-container">
        <h1>Hi I am Ben</h1>
        <hr />
        <Cards title={"Learning"} info={"I have been working on Front end projects and I am studying now to strength my skills to be come a Web Developer"}/>
        <Cards title={"Skills"} points={["Javascript", "CSS", "SQl", "React","React Native"]}/>
        <Cards title={"Hobbys"} info={"Love to fix projects that I am working on, things like web development, game development and other side project. When I take a break I plays some games and call it a night"}/>
        <hr />
    </div>
  )
}

export default About