import React from 'react'
import './About.css';
import javascriptIcon from '../assets/icons/javascript-original.svg'
import CIcon from '../assets/icons/C.svg'
import HTMLIcon from '../assets/icons/HTML5.svg'
import CSSIcon from '../assets/icons/CSS3.svg'
import ScalaIcon from '../assets/icons/Scala.svg'
import PythonIcon from '../assets/icons/Python.svg'
import SQLIcon from '../assets/icons/SQL Developer.svg'
import PHPIcon from '../assets/icons/PHP.svg'
import ReactIcon from '../assets/icons/React.svg'
import NodeIcon from '../assets/icons/Node.js.svg'
import ExpressIcon from '../assets/icons/Express.svg'
import GitIcon from '../assets/icons/Git.svg'
import GithubIcon from '../assets/icons/GitHub.svg'
import VMWareIcon from '../assets/icons/vmware-1.svg'
import CloudflareIcon from '../assets/icons/Cloudflare.svg'
import TableauIcon from '../assets/icons/tableau-svgrepo-com.svg'
import StataIcon from '../assets/icons/Stata.svg'
import FigmaIcon from '../assets/icons/Figma.svg'

const About = () => {
  return (
    <section className='about-container'>
      <h1>Hi! Im Ishtiaq Akanda!</h1>

      <section id='about-section'>

        <section id='about-me'>
          <h2>About Me</h2>
          <p>
            Hey! I'm Ishtiaq Akanda, a born and raised first-generation Bengali-American from the Bronx, NY. As a kid I've always been curios how the web works,
            makes sense from me growing up around computers and the internet. I even used to manipulate http headers, work with dev tools and experiment with changing 
            cookies to sign myself into Netflix or Hulu in a strange way. All these things and my parents and grandparents saying "Hey maybe he'll work with those someday"
            made me realize I can give into my curiosity and make a impact one day.
          </p>
          <p>
            I eventually made it to the University at Buffalo, studying computer science, I thought I was closer to my dream. However, where I thought my way of learning hands-on 
            would be fullfilled, I quickly learned computer science was mostly theoretical, and not pushing me in the way I wanted to be pushed. Then, came my friend who mentioned 
            <a href='https://www.marcylabschool.org/'> the Marcy Lab School</a> how it was hands-on, practical, and how it helped him break into the tech world, I knew immediately 
            that this was the place for me. Even right now, I know I made the right choice.
          </p>
        </section>

        <section id='tools'>

        <h2>Programming Languages</h2>

        <ul className='skills'>
        <li>
            <figure>
              <img src={HTMLIcon} alt="HTML Logo" />
              <figcaption>HTML5</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={CSSIcon} alt="CSS Logo" />
              <figcaption>CSS3</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={javascriptIcon} alt="Javascript Logo" />
              <figcaption>Javascript</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={ScalaIcon} alt="Scala Logo" />
              <figcaption>Scala</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={PythonIcon} alt="Python Logo" />
              <figcaption>Python</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={CIcon} alt="C Logo" />
              <figcaption>C</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={SQLIcon} alt="SQL Logo" />
              <figcaption>SQL</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={PHPIcon} alt="PHP Logo" />
              <figcaption>PHP</figcaption>
            </figure>
          </li>
        </ul>

        <h2>Frameworks</h2>
        <ul className='skills'>
          <li>
            <figure>
              <img src={ReactIcon} alt="React Logo" />
              <figcaption>ReactJS</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={NodeIcon} alt="Node Logo" />
              <figcaption>NodeJS</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={ExpressIcon} alt="Express Logo" />
              <figcaption>ExpressJS</figcaption>
            </figure>
          </li>
        </ul>

        <h2>Dev Tools</h2>
        <ul className='skills'>
          <li>
            <figure>
              <img src={GitIcon} alt="Git Logo" />
              <figcaption>Git</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={GithubIcon} alt="Github Logo" />
              <figcaption>GitHub</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={CloudflareIcon} alt="Cloudflare Logo" />
              <figcaption>CloudFlare</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={FigmaIcon} alt="Figma Logo" />
              <figcaption>Figma</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={VMWareIcon} alt="VMWare Logo" />
            </figure>
          </li>
          <li>
            <figure>
              <img src={TableauIcon} alt="Tableau Logo" />
              <figcaption>Tableau</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={StataIcon} alt="Stata Logo" />
            </figure>
          </li>
        </ul>
        </section>
      </section>
    </section>
  )
}

export default About