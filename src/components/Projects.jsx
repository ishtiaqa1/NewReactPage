import React from 'react'
import './Projects.css'
import mahjong from '../assets/mahjong.jpg'
import fred from '../assets/freddashboard.png'
import cli from '../assets/command-line.jpg'
import portolio from '../assets/Portfolio-site.png'
import mangohub from '../assets/mangohub.png'

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
            <section className='project-links'>
                <a href="https://github.com/ishtiaqa1/Mahjong" target='_blank'>GitHub</a>
                <a href='https://www.figma.com/design/poXUVDO8YHUaDKAV9BOqlB/Team-Jokers?node-id=0-1&t=JEpWANIHD1Yue8EA-1' target='_blank'>Figma</a>
                <a href="https://mahjong-seven-sage.vercel.app/" target='_blank'>Deployed</a>
            </section>
          </figure>
        </li>
        <li className='projectElement'>
          <figure>
            <div className='img'>
            <img src={fred} alt="A US Economic Dashboard" />
            </div>
            <figcaption>
              Built a Economic Dashboard using data in json format from FRED (Federal Reserve Economic Data) API, in ExpressJS and ReactJS. This 
              displays four economic indicators GDP, Unemployment rate, Inflation rate, and Interest Rate. Then a indicator selector is used to chart
              out data over time (implemented in ChartJS).
            </figcaption>
            <section className='project-links'>
                <a href='https://github.com/ishtiaqa1/Fred-DashBoard' target='_blank'>Github</a>
                <a href='https://freddashboard.vercel.app/' target='_blank'>Deployed</a>
            </section>
          </figure>
        </li>
        <li className='projectElement'>
          <figure>
            <div className="img"> <img src={mangohub} alt="A Anime/Manga Dashboard" /></div>
            <figcaption>
              Collaborated with another developer to design and create an interactive anime and manga website,
integrating a anime manga selector that switches overall site content from anime or manga, an interactive modal that displays more details like a trailer,
 a top ranked section, an ongoing section, explore section and favorites section, within one week.
            </figcaption>
            <section className='project-links'>
                <a href="https://github.com/Ishtiaq-William-mls/mod-4-project" target='_blank'>GitHub</a>
                <a href='https://ishtiaq-william-mls.github.io/mod-4-project/' target='_blank'>Deployed</a>
                <a href='https://docs.google.com/presentation/d/1bGw4HxgtZ2RmUKXpLxJB6hlkobkVdPqYuR-vfDmN6tw/edit?usp=sharing' target='_blank'>Slides</a>
            </section>
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
              <section className='project-links'>
                <a href='https://github.com/ishtiaqa1/NewReactPage' target='_blank'>Github</a>
                <a href='https://ishtiaqakanda.dev/'>Deployed</a>
            </section>
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
            <section className='project-links'>
              <a href='https://github.com/ishtiaqa1/swe-project-1-cli-app' target='_blank'>Github</a>
              <a href="" style={{color: "red"}}>Not Yet Deployed!</a>
            </section>
          </figure>
        </li>
      </ul>
    </section>
  )
}

export default Projects