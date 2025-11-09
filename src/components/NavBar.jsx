import HomePage from './HomePage'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navBar'>
      <div className='nav-container'>
        <h1 className="nav-logo">Ishtiaq<span>Dev</span></h1>
      <ul>
        <li className='navElement'><Link to='/'>Home</Link></li>
        <li className='navElement'><Link to='/about'>About</Link></li>
        <li className='navElement'><Link to='/projects'>Projects</Link></li>
        <li className='navElement'><Link to='/contact'>Contact</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar