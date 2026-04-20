import { useEffect } from 'react';
import './About.css';

const LANGS = [
  { name: 'JavaScript', icon: 'JS', color: '#f0db4f' },
  { name: 'Python', icon: 'PY', color: '#4584b6' },
  { name: 'HTML5', icon: 'HT', color: '#e34f26' },
  { name: 'CSS3', icon: 'CS', color: '#1572b6' },
  { name: 'SQL', icon: 'SQ', color: '#336791' },
  { name: 'PHP', icon: 'PH', color: '#8892bf' },
  { name: 'Scala', icon: 'SC', color: '#dc322f' },
  { name: 'C', icon: 'C', color: '#a8b9cc' },
];

const FRAMEWORKS = [
  { name: 'React', icon: 'RE', color: '#61dafb' },
  { name: 'Node.js', icon: 'NO', color: '#68a063' },
  { name: 'Express', icon: 'EX', color: '#aaaaaa' },
  { name: 'Chart.js', icon: 'CH', color: '#f06969' },
];

const TOOLS = [
  { name: 'Git', icon: 'GI', color: '#f05032' },
  { name: 'GitHub', icon: 'GH', color: '#ffffff' },
  { name: 'Figma', icon: 'FI', color: '#f24e1e' },
  { name: 'Cloudflare', icon: 'CF', color: '#f48120' },
  { name: 'Tableau', icon: 'TA', color: '#e97627' },
  { name: 'VMware', icon: 'VM', color: '#607078' },
  { name: 'Stata', icon: 'ST', color: '#1a5276' },
];

const TIMELINE = [
  { year: '2021', title: 'University at Buffalo', sub: 'B.A. Computer Science & Economics', icon: '🎓' },
  { year: '2024', title: 'Portfolio Launch', sub: 'ishtiaqakanda.dev — 2.34k+ visitors/mo', icon: '🚀' },
  { year: '2025', title: 'American Mahjong App', sub: 'Fully Funtional Mahjong Game', icon: '🀄' },
  { year: '2025', title: 'Marcy Lab School', sub: 'Software Engineering Fellow', icon: '⚡' },
  { year: '2026', title: 'MangoHub Anime/Manga Dashboard', sub: 'Discover Anime and Manga', icon: '🥭' },
  { year: '2026', title: 'US Economic Dashboard', sub: 'Visualize Govermental Data on GDP, Inflation, etc.', icon: '💸' },
];

const SkillChip = ({ name, icon, color }) => (
  <div className='skill-chip'>
    <span className='skill-icon' style={{ background: `${color}22`, color }}>{icon}</span>
    <span className='skill-name'>{name}</span>
  </div>
);

const About = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 60);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className='about-master'>
      <div className='section-wrapper'>
        <section className='about-hero reveal'>
          <div className='about-hero-text'>
            <h1 className='section-heading'>About Me<span className='accent-dot'>.</span></h1>
            <p className='about-lead'>
              First-generation Bengali-American software engineer from the Bronx — curious by nature,
              hands-on by design.
            </p>
          </div>
        </section>

        <div className='about-grid'>
          <section className='about-story reveal'>
            <h2 className='about-h2'>My Story</h2>
            <p>
              Growing up in the Bronx, I was always the kid poking around in browser dev tools — inspecting
              HTTP headers, tweaking cookies, and figuring out how the internet actually worked. My parents
              and grandparents saw it before I did: <em>"Maybe he'll work with those someday."</em>
            </p>
            <p>
              I worked towards a dual degree in <strong>Computer Science and Economics</strong> at the University at Buffalo.
              CS gave me the foundations, Economics taught me to think in systems — but I craved something
              more hands-on. A friend introduced me to <a href='https://www.marcylabschool.org/' target='_blank' rel='noopener noreferrer' className='inline-link'>Marcy Lab School</a>, a
              rigorous software engineering fellowship focused on practical, production-level development.
              Compared to college, it was exactly what I was looking for.
            </p>
            <p>
              Today I build full-stack web applications, play with data pipelines, and explore everything
              from backend architecture to data engineering. I want to write software that makes a real impact.
            </p>
          </section>

          <aside className='about-sidebar reveal'>
            <div className='sidebar-card'>
              <h3 className='sidebar-card-title'>Quick Facts</h3>
              <ul className='facts-list'>
                <li><span className='fact-icon'>📍</span> Bronx, New York</li>
                <li><span className='fact-icon'>🎓</span> CS & Economics — UB</li>
                <li><span className='fact-icon'>⚡</span> Marcy Lab School Fellow</li>
                <li><span className='fact-icon'>💡</span> Full-stack & Data Engineering</li>
                <li><span className='fact-icon'>🎌</span> Anime & Manga enthusiast</li>
                <li><span className='fact-icon'>🌐</span> 2.34k+ visitors/mo on portfolio</li>
              </ul>
            </div>

            <div className='sidebar-card'>
              <h3 className='sidebar-card-title'>Interests</h3>
              <div className='tags'>
                {['Data Engineering', 'Backend Dev', 'Full-Stack', 'Data Analytics', 'Open Source', 'Anime/Manga'].map(t => (
                  <span key={t} className='tag'>{t}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className='timeline-section reveal'>
          <h2 className='about-h2'>Journey</h2>
          <div className='timeline'>
            {TIMELINE.map((item, i) => (
              <div key={i} className='timeline-item'>
                <div className='timeline-year'>{item.year}</div>
                <div className='timeline-icon'>{item.icon}</div>
                <div className='timeline-content'>
                  <div className='timeline-title'>{item.title}</div>
                  <div className='timeline-sub'>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='skills-section'>
          <h2 className='about-h2 reveal'>Tech Stack</h2>

          <div className='skill-group reveal'>
            <h3 className='skill-group-label'>Languages</h3>
            <div className='skills-grid'>
              {LANGS.map(s => <SkillChip key={s.name} {...s} />)}
            </div>
          </div>

          <div className='skill-group reveal'>
            <h3 className='skill-group-label'>Frameworks & Libraries</h3>
            <div className='skills-grid'>
              {FRAMEWORKS.map(s => <SkillChip key={s.name} {...s} />)}
            </div>
          </div>

          <div className='skill-group reveal'>
            <h3 className='skill-group-label'>Tools & Platforms</h3>
            <div className='skills-grid'>
              {TOOLS.map(s => <SkillChip key={s.name} {...s} />)}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;