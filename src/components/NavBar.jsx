import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hamburger from './Hamburger.jsx';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 760);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <nav className={`navBar${scrolled ? ' scrolled' : ''}`}>
      <div className='nav-container'>
        <Link to='/' className='nav-logo'>
          <span className='logo-ia'>IA</span>
          <span className='logo-name'>Ishtiaq Akanda</span>
        </Link>

        {!isMobile && (
          <ul className='nav-links'>
            {[['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/contact', 'Contact']].map(([path, label]) => (
              <li key={path} className={`navElement${location.pathname === path ? ' active' : ''}`}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
            <li>
              <a href='https://www.linkedin.com/in/ishtiaq-akanda/' target='_blank' rel='noopener noreferrer' className='nav-cta'>
                Hire Me
              </a>
            </li>
          </ul>
        )}

        {isMobile && (
          <Hamburger onClick={() => setMenuOpen(!menuOpen)} />
        )}
      </div>

      {isMobile && menuOpen && (
        <ul className='nav-mobile'>
          {[['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/contact', 'Contact']].map(([path, label]) => (
            <li key={path}><Link to={path}>{label}</Link></li>
          ))}
          <li>
            <a href='https://www.linkedin.com/in/ishtiaq-akanda/' target='_blank' rel='noopener noreferrer'>Hire Me</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;