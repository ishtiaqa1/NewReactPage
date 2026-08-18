import { useEffect } from 'react';
import Resume from '../assets/Resume.pdf';
import contactPhoto from '../assets/cognizant-presentation-cropped.jpg';
import './Contact.css';

const QUICK_FACTS = [
  { label: 'Location', value: 'Open to anywhere: in-person, remote, or hybrid' },
  { label: 'Looking for', value: 'Full-time SWE roles, internships, collabs' },
  { label: 'Response time', value: 'Usually within 24-48 hours' },
];

const LOOKING_FOR_TAGS = ['Full-time', 'Internships', 'Freelance', 'Collaborations'];

const LINKS = [
  {
    label: 'Email',
    value: 'ishtiaqa2003@gmail.com',
    url: 'mailto:ishtiaqa2003@gmail.com',
    icon: <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'><rect x='2' y='4' width='20' height='16' rx='2'/><path d='M2 7l10 7 10-7'/></svg>,
  },
  {
    label: 'LinkedIn',
    value: 'ishtiaq-akanda',
    url: 'https://www.linkedin.com/in/ishtiaq-akanda/',
    icon: <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'><path d='M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.12 8h4.76V24H.12V8zm7.64 0h4.56v2.16h.06c.64-1.2 2.2-2.46 4.52-2.46 4.84 0 5.74 3.18 5.74 7.32V24h-4.76v-7.44c0-1.76-.03-4.04-2.46-4.04-2.46 0-2.84 1.92-2.84 3.92V24H7.76V8z'/></svg>,
  },
  {
    label: 'GitHub',
    value: 'ishtiaqa1',
    url: 'https://github.com/ishtiaqa1',
    icon: <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'><path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.932 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.244 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.628-5.475 5.922.43.372.814 1.102.814 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z'/></svg>,
  },
  {
    label: 'Resume',
    value: 'View PDF',
    url: Resume,
    icon: <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'><path d='M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z'/><polyline points='14 2 14 8 20 8'/><line x1='16' y1='13' x2='8' y2='13'/><line x1='16' y1='17' x2='8' y2='17'/><polyline points='10 9 9 9 8 9'/></svg>,
    newTab: true,
  },
];

const Contact = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 70);
      });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className='contact-master'>
      <div className='section-wrapper'>
        <div className='contact-header reveal'>
          <h1 className='section-heading'>Get in Touch<span className='accent-dot'>.</span></h1>
          <p className='section-subheading'>Open to full-time roles, internships, and collaborations.</p>
          <p className='contact-intro'>
            I'm wrapping up my Software Engineering Fellowship at Marcy Lab School and looking for full-time
            engineering roles, internships, or interesting collaborations, especially anything touching
            full-stack development, data engineering, or applied AI. Open to in-person, remote, or hybrid
            work, anywhere.
          </p>
        </div>

        <div className='contact-grid'>
          <aside className='contact-sidebar reveal'>
            <div className='contact-profile'>
              <img
                src={contactPhoto}
                alt='Ishtiaq Akanda'
                className='contact-avatar'
              />
              <div>
                <h2 className='contact-name'>Ishtiaq Akanda</h2>
                <p className='contact-role'>Software Engineer Fellow</p>
                <span className='contact-status'>Available for hire</span>
              </div>
            </div>

            <div className='contact-facts-card'>
              <h3 className='contact-facts-title'>Quick Facts</h3>
              <ul className='contact-facts-list'>
                {QUICK_FACTS.map(f => (
                  <li key={f.label}>
                    <span className='contact-facts-label'>{f.label}</span>
                    <span className='contact-facts-value'>{f.value}</span>
                  </li>
                ))}
              </ul>
              <div className='tags contact-facts-tags'>
                {LOOKING_FOR_TAGS.map(t => <span key={t} className='tag'>{t}</span>)}
              </div>
            </div>
          </aside>

          <section className='contact-form-section reveal'>
            <h2 className='form-heading'>Send a Message</h2>
            <form
              action='https://formspree.io/f/xnjdkjqa'
              method='POST'
              className='contact-form'
            >
              <div className='form-row'>
                <div className='form-field'>
                  <label htmlFor='name'>Name</label>
                  <input id='name' name='name' type='text' required placeholder='Your name' />
                </div>
                <div className='form-field'>
                  <label htmlFor='email'>Email</label>
                  <input id='email' name='email' type='email' required placeholder='you@example.com' />
                </div>
              </div>
              <div className='form-field'>
                <label htmlFor='inquiry'>Message</label>
                <textarea id='inquiry' name='inquiry' required placeholder='What are you working on?' rows='6'></textarea>
              </div>
              <button type='submit' className='btn btn-primary submit-btn'>
                Send Message
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><line x1='22' y1='2' x2='11' y2='13'/><polygon points='22 2 15 22 11 13 2 9 22 2'/></svg>
              </button>
            </form>
          </section>

          <div className='contact-links-col reveal'>
            <h2 className='form-heading'>Reach Me Directly</h2>
            <div className='contact-links-list'>
              {LINKS.map(l => (
                <a
                  key={l.label}
                  href={l.url}
                  target={l.newTab || l.url.startsWith('http') ? '_blank' : undefined}
                  rel='noopener noreferrer'
                  className='contact-link-item'
                >
                  <span className='contact-link-icon'>{l.icon}</span>
                  <div>
                    <div className='contact-link-label'>{l.label}</div>
                    <div className='contact-link-value'>{l.value}</div>
                  </div>
                  <svg className='contact-link-arrow' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M5 12h14M12 5l7 7-7 7'/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;