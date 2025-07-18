import React from 'react'
import about from "../assets/about.png"
import './About.css'
const About = () => {
  return (
    <>
    <div className='heading'>
        <h1>About Us </h1>
        <p>Manage your projects efficiently with streamlined task assignments and progress tracking.</p>
    </div>
    <section className='about-us'>
    <img src={about} alt="" />
    <div className='content'>
        <h2>Stay on Track with Every Task</h2>
        <p>Our platform helps teams collaborate and stay organized through detailed project breakdowns, progress monitoring, and task management features.</p>
     
    </div>
    </section>
    </>
  )
}

export default About