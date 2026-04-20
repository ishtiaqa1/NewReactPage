import { useEffect, useRef } from 'react';
import './HomePage.css';

const ROLES = ['Software Engineer', 'Full-Stack Developer', 'Data Enthusiast', 'Problem Solver'];

const STATS = [
  { value: '2.34k+', label: 'Monthly visitors' },
  { value: '5+', label: 'Projects shipped' },
  { value: 'CS + Econ', label: 'UB dual background' },
  { value: 'Bronx, NY', label: 'Born & raised' },
];

const HomePage = () => {
  const roleRef = useRef(null);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const type = () => {
      const current = ROLES[roleIndex.current];
      if (!deleting.current) {
        charIndex.current++;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIndex.current);
        if (charIndex.current === current.length) {
          deleting.current = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        charIndex.current--;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIndex.current);
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % ROLES.length;
        }
      }
      setTimeout(type, deleting.current ? 45 : 80);
    };
    const t = setTimeout(type, 400);
    return () => clearTimeout(t);
  }, []);

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
      <div className='hero-bg'>
        <div className='hero-grid'></div>
        <div className='hero-orb hero-orb-1'></div>
        <div className='hero-orb hero-orb-2'></div>
      </div>

      <section className='hero-section section-wrapper'>
        <div className='hero-badge reveal'>
          <span className='badge-dot'></span>
          Open to opportunities · Marcy Lab School Fellow
        </div>

        <h1 className='hero-title reveal'>
          Hi, I'm <span className='hero-name'>Ishtiaq Akanda</span>
        </h1>

        <h2 className='hero-role reveal'>
          <span ref={roleRef} className='role-text'></span>
          <span className='cursor'>|</span>
        </h2>

        <p className='hero-bio reveal'>
          First-gen Bengali-American from the Bronx. CS & Economics from University at Buffalo (100+ Credits).
          Now sharpening my craft at <a href='https://www.marcylabschool.org/' target='_blank' rel='noopener noreferrer' className='inline-link'>Marcy Lab School</a> — building things I care about, one commit at a time.
        </p>

        <div className='hero-actions reveal'>
          <a href='/projects' className='btn btn-primary'>
            <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><rect x='3' y='3' width='7' height='7'/><rect x='14' y='3' width='7' height='7'/><rect x='14' y='14' width='7' height='7'/><rect x='3' y='14' width='7' height='7'/></svg>
            View Projects
          </a>
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
      </section>

      <section className='github-section section-wrapper reveal'>
        <p className='github-label'>GitHub Activity</p>
        <img
          src='https://github-readme-stats.vercel.app/api?username=ishtiaqa1&show_icons=true&theme=transparent&hide_border=true&title_color=6c63ff&icon_color=6c63ff&text_color=8888a0&bg_color=00000000'
          alt='GitHub Stats'
          className='github-stats-img'
        />
      </section>
    </main>
  );
};

export default HomePage;