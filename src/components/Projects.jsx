import { useEffect } from 'react';
import './Projects.css';
import { PROJECTS } from '../data/projects';

const ProjectGlyph = ({ type }) => {
  if (type === 'mahjong') {
    return (
      <svg width='18' height='18' viewBox='0 0 24 24' className='glyph-wobble'>
        <rect x='3' y='2' width='18' height='20' rx='3' fill='#f2ece0' stroke='rgba(0,0,0,0.15)' />
        <circle cx='9' cy='8' r='2' fill='#c0392b' />
        <circle cx='12' cy='12' r='2' fill='#c0392b' />
        <circle cx='15' cy='16' r='2' fill='#c0392b' />
      </svg>
    );
  }
  if (type === 'heart') {
    return (
      <svg width='17' height='17' viewBox='0 0 24 24' fill='#e08a94' className='glyph-pulse'>
        <path d='M12 21s-7-4.35-9.5-9C1 8.5 2.5 5 6 5c2 0 3.5 1.2 4 2 .5-.8 2-2 4-2 3.5 0 5 3.5 3.5 7-2.5 4.65-9.5 9-9.5 9z' />
      </svg>
    );
  }
  if (type === 'chart') {
    return (
      <svg width='16' height='16' viewBox='0 0 24 24'>
        <rect x='4' y='12' width='4' height='8' rx='1' fill='#d7d2c4' className='glyph-bar1' />
        <rect x='10' y='8' width='4' height='12' rx='1' fill='#d7d2c4' className='glyph-bar2' />
        <rect x='16' y='4' width='4' height='16' rx='1' fill='#d7d2c4' className='glyph-bar3' />
      </svg>
    );
  }
  if (type === 'mango') {
    return (
      <svg width='18' height='18' viewBox='0 0 24 24' className='glyph-sway'>
        <path d='M12 3c3 1 6 4 6 9a6 6 0 01-12 0c0-3 1-6 3-8' fill='#f0a860' />
        <path d='M11 3c1-1 2-1.5 3-1' stroke='#5a9c5f' strokeWidth='1.5' fill='none' strokeLinecap='round' />
      </svg>
    );
  }
  if (type === 'live') {
    return (
      <svg width='14' height='14' viewBox='0 0 24 24' className='glyph-pulse'>
        <circle cx='12' cy='12' r='7' fill='#5fd97a' />
      </svg>
    );
  }
  if (type === 'cli') {
    return (
      <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#d7d2c4' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M5 6l5 5-5 5' />
        <rect x='13' y='16' width='6' height='2' fill='#d7d2c4' stroke='none' className='glyph-blink' />
      </svg>
    );
  }
  return null;
};

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
            <article key={i} className='project-card reveal'>
              <div className='project-img-wrap'>
                <img src={p.img} alt={p.title} className='project-img' />
                {p.badge && (
                  <div className='project-glyph'>
                    <ProjectGlyph type={p.badge} />
                  </div>
                )}
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

                {p.bullets && (
                  <ul className='project-bullets'>
                    {p.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                )}

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
