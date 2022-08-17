import React from 'react'


const About = (): JSX.Element => {
    const number = 10;
    const date = new Date()
  return (
    <div>
        <h1>About {number}</h1>
        <h3>Date:- {date.toDateString()}</h3>
        <h3>this is About Page</h3>
    </div>
  )
}

export default About