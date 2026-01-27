import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import './NavBar.css';
import Hamburger from './Hamburger.jsx';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth > 760);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) {
        setMenuOpen(true);  
      } else {
        setMenuOpen(false); 
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className='navBar'>
      <div className='nav-container'>
        <h1 className="nav-logo"><Link to='/'>Ishtiaq Akanda</Link></h1>

        {menuOpen && (
          <ul className="nav-links">
            <li className='navElement'><Link to='/'>Home</Link></li>
            <li className='navElement'><Link to='/about'>About</Link></li>
            <li className='navElement'><Link to='/projects'>Projects</Link></li>
            <li className='navElement'><Link to='/contact'>Contact</Link></li>
          </ul>
        )}

        {window.innerWidth <= 760 && (
          <Hamburger onClick={() => setMenuOpen(!menuOpen)} />
        )}
      </div>
    </nav>
  )
}

export default NavBar;
