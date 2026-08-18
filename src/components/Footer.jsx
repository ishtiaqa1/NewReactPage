import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <div className='footer-inner section-wrapper'>
      <div className='footer-left'>
        <img src='/favicon.svg' alt='' className='footer-logo' />
        <span className='footer-name'>Ishtiaq Akanda</span>
      </div>
      <p className='footer-copy'>© {new Date().getFullYear()} · Built with React & Vite</p>
      <ul className='footer-links'>
        {[
          { href: 'https://www.linkedin.com/in/ishtiaq-akanda/', label: 'LinkedIn', icon: <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'><path d='M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.12 8h4.76V24H.12V8zm7.64 0h4.56v2.16h.06c.64-1.2 2.2-2.46 4.52-2.46 4.84 0 5.74 3.18 5.74 7.32V24h-4.76v-7.44c0-1.76-.03-4.04-2.46-4.04-2.46 0-2.84 1.92-2.84 3.92V24H7.76V8z'/></svg> },
          { href: 'https://github.com/ishtiaqa1', label: 'GitHub', icon: <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'><path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.932 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.244 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.628-5.475 5.922.43.372.814 1.102.814 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z'/></svg> },
          { href: 'mailto:ishtiaqa2003@gmail.com', label: 'Email', icon: <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><rect x='2' y='4' width='20' height='16' rx='2'/><path d='M2 7l10 7 10-7'/></svg> },
        ].map(l => (
          <li key={l.label}>
            <a href={l.href} target='_blank' rel='noopener noreferrer' aria-label={l.label} className='footer-icon-link'>
              {l.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;