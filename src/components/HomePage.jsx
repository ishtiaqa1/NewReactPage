import './HomePage.css';
import { GitHubCalendar } from "react-github-calendar";

const HomePage = () => {
  return (
    <div id='homepage-master'>
    <div className="homepage-sections">
      <img src='/src/assets/Web-Dev-Png-Tree.png' alt='image from pngtree.com' className='homepage-png'/>
      <div className='homepage'>
        <h1 className="homepage-title">
          <span className="typing">Hi! I'm Ishtiaq Akanda</span>
        </h1>

        <p className="homepage-subtitle">Software Engineer Fellow at The Marcy Lab School</p>

        <p className="homepage-intro">
          I love to build interactive web applications, play with data, solve challenging problems, 
          and explore new technologies. Welcome to my portfolio!
        </p>

        <section className="homepage-buttons">
          <a href="/projects" className="btn btn-primary">View Projects</a>
          <a href="/contact" className="btn btn-secondary">Contact Me</a>
        </section>
      </div>
    </div>
      <img className='git'
        src="https://github-readme-stats.vercel.app/api?username=ishtiaqa1&show_icons=true&theme=dark"
        alt="GitHub Stats"
      />
    </div>
  )
}

export default HomePage;