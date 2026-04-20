import { useEffect } from 'react';
import './Projects.css';
import mahjong from '../assets/mahjong.jpg';
import fred from '../assets/freddashboard.png';
import cli from '../assets/command-line.jpg';
import portfolioPic from '../assets/Portfolio-site.png';
import mangohub from '../assets/mangohub.png';

const PROJECTS = [
  {
    title: 'Mahjong',
    img: mahjong,
    description: 'Collaborated with a team of 5 to build a full-featured multiplayer American Mahjong web app in 3 months. Includes real-time gameplay, user authentication, and live leaderboards.',
    tags: ['React', 'PHP', 'MySQL', 'Multiplayer', 'Auth'],
    highlights: ['Team of 5 devs', '3-month build', 'Real-time multiplayer'],
    links: [
      { label: 'GitHub', url: 'https://github.com/ishtiaqa1/Mahjong', icon: 'gh' },
      { label: 'Figma', url: 'https://www.figma.com/design/poXUVDO8YHUaDKAV9BOqlB/Team-Jokers?node-id=0-1', icon: 'fi' },
      { label: 'Live', url: 'https://mahjong-seven-sage.vercel.app/', icon: 'live' },
    ],
    featured: true,
  },
  {
    title: 'FRED Dashboard',
    img: fred,
    description: 'Economic data visualization tool pulling live data from the Federal Reserve API. Displays GDP, Unemployment, Inflation, and Interest Rate trends with interactive Chart.js time-series charts.',
    tags: ['React', 'Express', 'Chart.js', 'REST API', 'Data Viz'],
    highlights: ['4 economic indicators', 'Live FRED API', 'Interactive charts'],
    links: [
      { label: 'GitHub', url: 'https://github.com/ishtiaqa1/Fred-DashBoard', icon: 'gh' },
      { label: 'Live', url: 'https://freddashboard.vercel.app/', icon: 'live' },
    ],
    featured: true,
  },
  {
    title: 'MangoHub',
    img: mangohub,
    description: 'Anime and manga discovery app built with a partner in one week. Features a toggle between anime/manga modes, a trailer modal, top-ranked and ongoing sections, and a favorites system.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Jikan API'],
    highlights: ['2-dev collab', '1-week sprint', 'Jikan API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Ishtiaq-William-mls/mod-4-project', icon: 'gh' },
      { label: 'Live', url: 'https://ishtiaq-william-mls.github.io/mod-4-project/', icon: 'live' },
      { label: 'Slides', url: 'https://docs.google.com/presentation/d/1bGw4HxgtZ2RmUKXpLxJB6hlkobkVdPqYuR-vfDmN6tw/edit?usp=sharing', icon: 'sl' },
    ],
  },
  {
    title: 'Portfolio Site',
    img: portfolioPic,
    description: 'This portfolio site — built in React with a GitHub activity integration and Cloudflare CDN. Averaging 2.34k+ unique visitors per month.',
    tags: ['React', 'CSS3', 'Vite', 'Cloudflare'],
    highlights: ['2.34k+ visitors/mo', 'Custom domain', 'GitHub integration'],
    links: [
      { label: 'GitHub', url: 'https://github.com/ishtiaqa1/NewReactPage', icon: 'gh' },
      { label: 'Live', url: 'https://ishtiaqakanda.dev/', icon: 'live' },
    ],
  },
  {
    title: 'CLI Rock Paper Scissors',
    img: cli,
    description: 'Command-line game where players challenge the computer and track personal win/loss stats across sessions. Focused on clean OOP design and file-based persistence.',
    tags: ['Python', 'CLI', 'OOP'],
    highlights: ['Stat tracking', 'Clean OOP', 'File persistence'],
    links: [
      { label: 'GitHub', url: 'https://github.com/ishtiaqa1/swe-project-1-cli-app', icon: 'gh' },
    ],
  },
];

const LinkIcon = ({ type }) => {
  if (type === 'gh') return <svg width='14' height='14' viewBox='0 0 24 24' fill='currentColor'><path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.932 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.244 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.628-5.475 5.922.43.372.814 1.102.814 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z'/></svg>;
  if (type === 'live') return <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3'/></svg>;
  return <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><rect x='2' y='3' width='20' height='14' rx='2'/><path d='M8 21h8M12 17v4'/></svg>;
};

const Projects = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 70);
      });
    }, { threshold: 0.06 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className='projects-master'>
      <div className='section-wrapper'>
        <div className='projects-header reveal'>
          <h1 className='section-heading'>Projects<span className='accent-dot'>.</span></h1>
          <p className='section-subheading'>Things I've built — spanning web apps, data tools, and multiplayer experiences.</p>
        </div>

        <div className='projects-grid'>
          {PROJECTS.map((p, i) => (
            <article key={i} className={`project-card reveal${p.featured ? ' featured' : ''}`}>
              {p.featured && <span className='featured-badge'>Featured</span>}
              <div className='project-img-wrap'>
                <img src={p.img} alt={p.title} className='project-img' />
                <div className='project-img-overlay'>
                  <div className='overlay-links'>
                    {p.links.map(l => (
                      <a key={l.label} href={l.url} target='_blank' rel='noopener noreferrer' className='overlay-link'>
                        <LinkIcon type={l.icon} />
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className='project-body'>
                <h2 className='project-title'>{p.title}</h2>
                <p className='project-desc'>{p.description}</p>

                <div className='project-highlights'>
                  {p.highlights.map(h => (
                    <span key={h} className='highlight'>{h}</span>
                  ))}
                </div>

                <div className='project-tags'>
                  {p.tags.map(t => (
                    <span key={t} className='project-tag'>{t}</span>
                  ))}
                </div>

                <div className='project-links'>
                  {p.links.map(l => (
                    <a key={l.label} href={l.url} target='_blank' rel='noopener noreferrer' className='project-link'>
                      <LinkIcon type={l.icon} />
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;