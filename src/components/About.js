import React from 'react';
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>Main Stage</h1>
        <p>This project began as an idea while I was studying at the Epicodus bootcamp and became and idea for my capstone project.  It will allow artists to provide live shows to their fans without having to fill a venue and especially right now when quarantine rules have got us staying home.  We all love to see/hear live music am I right??</p>
        <p>You can contact me to give <Link to='/contact'>feedback</Link></p>
    </div>
  )
}

export default About;