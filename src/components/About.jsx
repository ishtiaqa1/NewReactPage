import React from 'react'
import './About.css';
import { GitHubCalendar } from "react-github-calendar";

const About = () => {
  return (
    <div className='about-container'>
      <h1>Hi! Im Ishtiaq Akanda</h1>
      <h2>
        F'25 Software Engineering Fellow at The Marcy Lab School. Passionate about games, anime, sports, and of course the outside world time to time.
      </h2>

      <h2>My GitHub Contributions</h2>
      <GitHubCalendar username="ishtiaqa1" />

      <h2>Programming Languages</h2>
      <ul>
        <li>Python</li>
        <li>JavaScript</li>
        <li>Scala</li>
        <li>SQL</li>
        <li>PHP</li>
        <li>C</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>

      <h2>Frameworks/Tools</h2>
      <ul>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Linux</li>
        <li>Git</li>
        <li>Github</li>
        <li>VSCode</li>
        <li>VMWare</li>
        <li>Cloudflare</li>
      </ul>

      <h2>Data Tools</h2>
      <ul>
        <li>Stata</li>
        <li>Tableau</li>
        <li>IBM Watson</li>
        <li>MySQL</li>
        <li>phpMyAdmin</li>
        <li>XAMPP</li>
      </ul>

      <h2>Skills</h2>
      <p>
Password hashing/authentication, form validation, state management, Agile, Scrum, Data analysis, Data 
Cleaning, Data Mining, Web Development, Code Review, Code Testing, Excel, Word, PowerPoint
 </p>

      <h2>Languages</h2>
      <ul>
        <li>English (Native)</li> 
        <li>Bengali (Casual)</li>
      </ul>
    </div>
  )
}

export default About