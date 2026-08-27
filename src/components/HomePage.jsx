import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GitHubCalendar } from 'react-github-calendar';
import { PROJECTS } from '../data/projects';
import { AWARDS } from '../data/awards';
import { LINKEDIN_POSTS } from '../data/linkedinPosts';
import heroPhoto from '../assets/cognizant-presentation-cropped.jpg';
import './HomePage.css';
import 'react-activity-calendar/tooltips.css';

const ROLES = ['Software Engineer', 'Full-Stack Developer', 'Data Enthusiast', 'Problem Solver'];

const STATS = [
  { value: '2.34k+', label: 'Monthly visitors' },
  { value: '5+', label: 'Projects shipped' },
  { value: 'CS + Econ', label: 'UB dual background' },
  { value: 'Bronx, NY', label: 'Born & raised' },
];

const FEATURED_TITLES = ['Kin', 'Mahjong', 'FRED Dashboard', 'MangoHub'];
const FEATURED_PROJECTS = FEATURED_TITLES.map(t => PROJECTS.find(p => p.title === t)).filter(Boolean);

const TrophyIcon = () => (
  <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
    <path d='M8 21h8M12 17v4M7 4h10v4a5 5 0 01-10 0V4z'/>
    <path d='M7 5H4a3 3 0 003 3M17 5h3a3 3 0 01-3 3'/>
  </svg>
);

const HomePage = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className='homepage-master'>
      <section className='hero-section section-wrapper'>
        <div className='hero-photo reveal'>
          <img src={heroPhoto} alt='Ishtiaq Akanda presenting Kin at Cognizant' className='hero-photo-img' />
          <p className='hero-photo-caption'>Presenting Kin to industry stakeholders at Cognizant</p>
        </div>

        <div className='hero-main'>
          <p className='hero-badge reveal'>Software Engineer Associate at Arkestro</p>

          <h1 className='hero-title reveal'>
            Hi, I'm Ishtiaq Akanda<span className='accent-dot'>.</span>
          </h1>

          <h2 className='hero-role reveal'>{ROLES.join(' · ')}</h2>

          <p className='hero-bio reveal'>
            First-gen Bengali-American from the Bronx. I studied Computer Science & Economics at the
            University at Buffalo and completed the Software Engineering Fellowship at Marcy Lab School.
            Now a Software Engineer Associate at Arkestro.
          </p>

          <div className='hero-actions reveal'>
            <a href='/projects' className='btn btn-primary'>View Projects</a>
            <a href='/contact' className='btn btn-secondary'>Get in Touch</a>
            <a href='https://github.com/ishtiaqa1' target='_blank' rel='noopener noreferrer' className='btn btn-ghost'>
              <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'><path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.932 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.244 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.628-5.475 5.922.43.372.814 1.102.814 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z'/></svg>
              GitHub
            </a>
          </div>

          <div className='hero-stats reveal'>
            {STATS.map((s, i) => (
              <div key={i} className='stat-item'>
                <span className='stat-value'>{s.value}</span>
                <span className='stat-label'>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='featured-section section-wrapper reveal'>
        <div className='work-header'>
          <h2 className='work-heading'>Featured Projects</h2>
          <Link to='/projects' className='work-all-link'>
            All projects
            <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M5 12h14M12 5l7 7-7 7'/></svg>
          </Link>
        </div>

        <div className='featured-grid'>
          {FEATURED_PROJECTS.map((p, i) => (
            <Link to='/projects' key={i} className='work-card'>
              <div className='work-img-wrap'>
                <img src={p.img} alt={p.title} className='work-img' />
              </div>
              <h3 className='work-title'>{p.title}</h3>
              <p className='work-desc'>{p.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className='awards-section section-wrapper reveal'>
        <div className='work-header'>
          <h2 className='work-heading'>Awards & Recognition</h2>
          <Link to='/about' className='work-all-link'>
            Full background
            <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M5 12h14M12 5l7 7-7 7'/></svg>
          </Link>
        </div>

        <div className='award-row-list'>
          {AWARDS.map((a, i) => (
            <div key={i} className='award-row'>
              {a.img ? (
                <img src={a.img} alt={a.title} className='award-row-img' />
              ) : (
                <span className='award-row-icon'><TrophyIcon /></span>
              )}
              <div>
                <div className='award-row-title'>{a.title}</div>
                <div className='award-row-org'>{a.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {LINKEDIN_POSTS.length > 0 && (
        <section className='linkedin-section section-wrapper reveal'>
          <div className='work-header'>
            <h2 className='work-heading'>Latest on LinkedIn</h2>
            <a href='https://www.linkedin.com/in/ishtiaq-akanda/' target='_blank' rel='noopener noreferrer' className='work-all-link'>
              View profile
              <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M5 12h14M12 5l7 7-7 7'/></svg>
            </a>
          </div>
          <div className='linkedin-grid'>
            {LINKEDIN_POSTS.map((src, i) => (
              <div key={i} className='linkedin-embed-card'>
                <iframe
                  src={src}
                  height='570'
                  width='100%'
                  frameBorder='0'
                  allowFullScreen
                  title={`LinkedIn post ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className='github-section section-wrapper reveal'>
        <p className='github-label'>GitHub Activity</p>
        <div className='github-calendar-wrap'>
          <GitHubCalendar
            username='ishtiaqa1'
            colorScheme='dark'
            theme={{ dark: ['#17171b', '#d7d2c4'] }}
            blockSize={11}
            blockMargin={4}
            fontSize={13}
            showColorLegend={false}
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
