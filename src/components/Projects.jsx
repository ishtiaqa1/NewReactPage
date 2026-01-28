import React from 'react'
import './Projects.css'
import mahjong from '../assets/mahjong.jpg'
import fred from '../assets/freddashboard.png'

const Projects = () => {
  return (
    <section className='projects-container'>
      <h1>Projects</h1>
      <ul id='project-grid'>
        <li className='projectElement'>
          <figure>
            <img src={mahjong} alt="A Mahjong Game" />
          </figure>
          </li>
        <li className='projectElement'>
          <figure>
            <img src={fred} alt="A US Economic Dashboard" />
          </figure>
        </li>
        <li className='projectElement'></li>
        <li className='projectElement'></li>
      </ul>
    </section>
  )
}

export default Projects