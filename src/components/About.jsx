import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CERTIFICATIONS, AWARDS } from '../data/awards';
import './About.css';

const SKILL_GROUPS = [
  { label: 'Languages', items: ['JavaScript', 'Python', 'SQL', 'Scala', 'HTML5', 'CSS3', 'PHP', 'C'] },
  { label: 'Frameworks & Libraries', items: ['React', 'Node.js', 'Express', 'FastAPI', 'Chart.js'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLAlchemy', 'Alembic', 'phpMyAdmin', 'ETL / Data Pipeline Design', 'Data Validation & QA'] },
  { label: 'Cloud & DevOps', items: ['AWS (Solutions Architect, in progress)', 'Render', 'Vercel', 'Docker', 'GitHub Actions', 'CI/CD'] },
  { label: 'Systems & Tools', items: ['Linux', 'Git/GitHub', 'SSH', 'VPN (Cisco AnyConnect)', 'Figma', 'Tableau', 'JIRA', 'Agile/Scrum'] },
  { label: 'Integrations', items: ['Plaid', 'Twilio', 'LLM APIs (Groq)', 'JWT Auth', 'OAuth (Google)'] },
  { label: 'AI-Assisted Development', items: ['Claude Code', 'Cursor'] },
];

const TIMELINE = [
  { year: '2020', title: 'Safe Medical Care', sub: 'Data Operations Intern' },
  { year: '2021', title: 'University at Buffalo', sub: 'B.A. Computer Science & Economics' },
  { year: '2024', title: 'Portfolio Launch', sub: 'ishtiaqakanda.dev, 2.34k+ visitors/mo' },
  { year: '2025', title: 'American Mahjong App', sub: 'Fully functional multiplayer Mahjong game — University at Buffalo team project' },
  { year: '2025', title: 'Marcy Lab School', sub: 'Software Engineering Fellow' },
  { year: '2026', title: 'MangoHub Anime/Manga Dashboard', sub: 'Discover anime and manga' },
  { year: '2026', title: 'US Economic Dashboard', sub: 'Visualize governmental data on GDP, inflation, etc.' },
  { year: '2026', title: 'Marcy: The Simulation', sub: '1st place, Best in Creativity — Marcy Lab School × Envelope hackathon' },
  { year: '2026', title: 'Kin', sub: '1st place, Elder Care category (Marcy Lab Applied AI Residency capstone)' },
  { year: '2026', title: 'Arkestro', sub: 'Software Engineer Associate' },
];

const EXPERIENCE = [
  {
    title: 'Software Engineer Associate',
    org: 'Arkestro',
    meta: 'Remote · Aug 2026 – Present',
    bullets: [
      'Contributing to full-stack engineering initiatives within a cross-functional squad, building procurement software that helps teams evaluate and act on sourcing opportunities.',
    ],
  },
  {
    title: 'Data Operations Intern',
    org: 'Safe Medical Care',
    meta: 'Bronx, NY · Dec 2020 – Feb 2021',
    bullets: [
      'Processed and validated 500+ patient records into a clinical EHR portal, enforcing data integrity standards that reduced processing errors and cut record-retrieval time by 30%.',
      'Wrote Python scripts to automate data validation and flag inconsistencies, reducing manual review time across a 3-person operations team.',
      'Analyzed patient intake workflows to identify scheduling bottlenecks, improving appointment throughput by 20%.',
    ],
  },
];

const EDUCATION = [
  {
    title: 'Software Engineering Fellowship',
    org: 'The Marcy Lab School',
    meta: 'Brooklyn, NY · Sep 2025 – Aug 2026',
    bullets: [
      'Completed 2,000+ hours of intensive coursework in CS fundamentals, leadership development, and full-stack development using the PERN stack (PostgreSQL, Express, React, Node.js).',
    ],
  },
  {
    title: 'B.A. Computer Science & Economics (100+ credits, on pause)',
    org: 'University at Buffalo',
    meta: 'Buffalo, NY · Aug 2021 – Present',
    bullets: [
      'Coursework: Data Structures, Algorithms, Software Engineering, Microeconomic & Macroeconomic Theory, Economic Statistics.',
      'Systems exposure: SSH, Cisco AnyConnect VPN, WinSCP, and VMware/Xpra remote Linux environments for coursework and lab access.',
    ],
  },
];

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
              First-generation Bengali-American software engineer from the Bronx. Curious by nature,
              hands-on by design.
            </p>
          </div>
        </section>

        <div className='about-grid'>
          <section className='about-story reveal'>
            <h2 className='about-h2'>My Story</h2>
            <p>
              Growing up in the Bronx, I was always the kid poking around in browser dev tools, inspecting
              HTTP headers, tweaking cookies, and figuring out how the internet actually worked. My parents
              and grandparents saw it before I did: <em>"Maybe he'll work with those someday."</em>
            </p>
            <p>
              I worked towards a dual degree in <strong>Computer Science and Economics</strong> at the University at Buffalo.
              CS gave me the foundations, and Economics taught me to think in systems, but I craved something
              more hands-on. A friend introduced me to <a href='https://www.marcylabschool.org/' target='_blank' rel='noopener noreferrer' className='inline-link'>Marcy Lab School</a>, a
              rigorous software engineering fellowship focused on practical, production-level development.
              Compared to college, it was exactly what I was looking for.
            </p>
            <p>
              I want to write software that makes a real impact. That focus paid off with{' '}
              <Link to='/projects' className='inline-link'>Kin</Link>, a family caregiving platform I
              built at Marcy Lab School for my Applied AI Residency capstone. It won 1st place in the
              Elder Care category, and my team and I were selected to present it to industry stakeholders
              at Cognizant.
            </p>
            <p>
              I recently joined Arkestro as a Software Engineer Associate, where I'm continuing to build
              full-stack applications and explore everything from backend architecture to data engineering.
            </p>
          </section>

          <aside className='about-sidebar reveal'>
            <div className='sidebar-card'>
              <h3 className='sidebar-card-title'>Quick Facts</h3>
              <ul className='facts-list'>
                <li>Software Engineer Associate @ Arkestro</li>
                <li>Bronx, New York</li>
                <li>CS & Economics, UB</li>
                <li>Full-stack & Data Engineering</li>
                <li>AWS Solutions Architect (in progress)</li>
                <li>2.34k+ visitors/mo on portfolio</li>
              </ul>
            </div>

            <div className='sidebar-card'>
              <h3 className='sidebar-card-title'>Interests</h3>
              <div className='tags'>
                {['Data Engineering', 'Backend Dev', 'Full-Stack', 'Applied AI', 'Cloud Infrastructure', 'Open Source'].map(t => (
                  <span key={t} className='tag'>{t}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className='journey-grid'>
          <section className='timeline-section reveal'>
            <h2 className='about-h2'>Journey</h2>
            <div className='timeline'>
              {TIMELINE.map((item, i) => (
                <div key={i} className='timeline-item'>
                  <div className='timeline-year'>{item.year}</div>
                  <div className='timeline-content'>
                    <div className='timeline-title'>{item.title}</div>
                    <div className='timeline-sub'>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className='skills-section reveal'>
            <h2 className='about-h2'>Tech Stack</h2>
            {SKILL_GROUPS.map(g => (
              <div key={g.label} className='skill-group'>
                <h3 className='skill-group-label'>{g.label}</h3>
                <div className='skills-grid'>
                  {g.items.map(s => <span key={s} className='skill-chip'>{s}</span>)}
                </div>
              </div>
            ))}
          </section>
        </div>

        <section className='exp-section reveal'>
          <h2 className='about-h2'>Experience</h2>
          {EXPERIENCE.map((e, i) => (
            <div key={i} className='exp-item'>
              <div className='exp-head'>
                <h3 className='exp-title'>{e.title}, {e.org}</h3>
                <span className='exp-meta'>{e.meta}</span>
              </div>
              <ul className='exp-bullets'>
                {e.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className='exp-section reveal'>
          <h2 className='about-h2'>Education</h2>
          {EDUCATION.map((e, i) => (
            <div key={i} className='exp-item'>
              <div className='exp-head'>
                <h3 className='exp-title'>{e.title}, {e.org}</h3>
                <span className='exp-meta'>{e.meta}</span>
              </div>
              <ul className='exp-bullets'>
                {e.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className='certs-section reveal'>
          <h2 className='about-h2'>Certifications & Awards</h2>

          <h3 className='skill-group-label'>Awards</h3>
          <div className='cert-grid'>
            {AWARDS.map((a, i) => (
              <div key={i} className='cert-card cert-card-award'>
                {a.img && (
                  <div className='cert-card-img-wrap'>
                    <img src={a.img} alt={a.title} className='cert-card-img' />
                  </div>
                )}
                <span className='cert-card-title'>{a.title}</span>
                <span className='cert-card-org'>{a.org}</span>
              </div>
            ))}
          </div>

          <h3 className='skill-group-label cert-subheading'>Certifications</h3>
          <div className='cert-grid'>
            {CERTIFICATIONS.map((c, i) => (
              <div key={i} className='cert-card'>
                <span className='cert-card-title'>{c.title}</span>
                <span className='cert-card-org'>{c.org}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
