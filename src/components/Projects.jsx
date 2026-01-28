import React from 'react'
import './Projects.css'
import mahjong from '../assets/mahjong.jpg'
import fred from '../assets/freddashboard.png'
import cli from '../assets/command-line.jpg'
import portolio from '../assets/Portfolio-site.png'

const Projects = () => {
  return (
    <section className='projects-container'>
      <h1>Projects</h1>
      <ul id='project-grid'>
        <li className='projectElement'>
          <figure>
            <div className="img"> <img src={mahjong} alt="A Mahjong Game" /></div>
            <figcaption>
              Collaborated with a team of five developers to design and develop an interactive American Mahjong app website,
integrating user authentication, real-time leaderboards, and multiplayer gameplay, within three months.
            </figcaption>
            <a href="https://github.com/ishtiaqa1/Mahjong" target='_blank'>GitHub</a>
          </figure>
          </li>
        <li className='projectElement'>
          <figure>
            <div className='img'>
            <img src={fred} alt="A US Economic Dashboard" />
            </div>
            <figcaption>
              Built a Economic Dashboard using data in json format from FRED (Federal Reserve Economic Data) API, in ExpressJS and ReactJS for a frontend design. 
            </figcaption>
            <a href='https://github.com/ishtiaqa1/Fred-DashBoard' target='_blank'>Github</a>
          </figure>
        </li>
        <li className='projectElement'>
          <figure>
            <div className='img'>
              <img src={cli} alt='A Rock Paper Scissors Game'/>
            </div>
            <figcaption>
              Created a rock paper scissors game for the command line, where players can play against the computer and view their own stats.
            </figcaption>
            <a href='https://github.com/ishtiaqa1/swe-project-1-cli-app' target='_blank'>Github</a>
          </figure>
        </li>
        <li className='projectElement'>
          <figure>
            <div className='img'>
              <img src={portolio} alt='My portfolio site'/>
            </div>
              <figcaption>
                Built this portfolio site, using ReactJS, CSS3, and a API. Resulting in a site with over 2.34k unique visitors per month!
              </figcaption>
              <a href='https://github.com/ishtiaqa1/NewReactPage' target='_blank'>Github</a>
          </figure>
        </li>
      </ul>
    </section>
  )
}

export default Projects