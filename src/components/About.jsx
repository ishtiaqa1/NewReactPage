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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, minus voluptatum! Rem numquam dicta iure ratione! Assumenda omnis rerum accusamus velit deleniti cumque. Sapiente necessitatibus dolore odit voluptate consequatur tempora aliquam, repellendus repudiandae maxime? Dignissimos nemo maxime perferendis voluptate explicabo molestiae consequuntur laboriosam nostrum, doloribus expedita! Corporis tenetur cumque voluptates repudiandae sunt eligendi deserunt quos. Repudiandae, beatae. Maiores tempore iusto quo vero natus at facilis sunt officia, quos odio, laborum debitis doloremque explicabo, commodi velit autem deleniti optio pariatur eaque? Sed est quibusdam tenetur corporis nobis laborum quae voluptates libero reprehenderit earum dolorum quam similique deleniti ipsam modi doloribus neque iusto ipsa, ratione corrupti saepe repellat eaque. Dolores ipsum ullam ab laboriosam ut quasi soluta nesciunt! Autem similique ipsam tenetur, veniam debitis veritatis impedit sint ab unde incidunt qui numquam consequatur quasi? Veritatis molestiae explicabo autem fuga placeat quia! Suscipit tempore odit consequatur aliquam perspiciatis consequuntur voluptate. Facilis consectetur, saepe accusantium dolore dolores eligendi distinctio voluptates possimus quas enim eaque, omnis doloremque libero sequi aliquam veritatis fugiat fuga. Inventore, dolorem? Accusamus quae sint voluptas cum? Sapiente ut voluptas tempora qui tempore voluptatum soluta sed, odit iure, impedit quam, necessitatibus nesciunt nihil veniam sunt natus modi ab ipsa voluptates debitis autem.
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