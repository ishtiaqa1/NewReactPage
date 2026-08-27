import portfolioPic from '../assets/Portfolio-site.png';
import mahjong from '../assets/mahjong.jpg';
import mangohub from '../assets/mangohub.png';
import fred from '../assets/freddashboard.png';
import marcySimulation from '../assets/marcy-the-simulation.png';
import kin from '../assets/kin.png';

// Ordered newest first (reverse-chronological) to match the Journey timeline on the About page.
export const PROJECTS = [
  {
    title: 'Kin',
    img: kin,
    badge: 'heart',
    description: 'A full-stack caregiving coordination platform giving families a shared, permissioned dashboard for an aging relative’s bills, prescriptions, and accounts. 1st place, Elder Care — Marcy Lab Applied AI Residency capstone.',
    bullets: [
      'Built full-stack (React/Vite, FastAPI, PostgreSQL/SQLAlchemy) so families coordinate care through one shared source of truth instead of group texts and spreadsheets.',
      'Designed a database-enforced permission system (CircleMember model) giving each caregiver scoped, per-resource visibility into bills and prescriptions.',
      'Integrated Plaid for bank-account linking and shipped an LLM-backed "Ask Kin" assistant that flags likely scam calls/texts in plain language.',
    ],
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Plaid', 'LLM/AI'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Care4Kin/kin', icon: 'gh' },
      { label: 'Live', url: 'https://kin-frontend.onrender.com/', icon: 'live' },
    ],
  },
  {
    title: 'Marcy: The Simulation',
    img: marcySimulation,
    badge: 'game',
    description: 'A React career-journey game simulating the path through Marcy Lab School — qualify, get through bootcamp, land the job, and climb. 1st place, Best in Creativity — Marcy Lab School × Envelope hackathon.',
    bullets: [
      'Built a full React game across 15 screens simulating the coding-career journey — Qualifying, Bootcamp, Hiring, Employment, and Executive stages — with a shop, upgrades, and a leaderboard.',
      'Refactored an original ~150k-character single-component prototype into a modular architecture: a central game-engine hook, pure data/lib layers, and one presentational component per screen.',
      'Integrated the public Piston API to run and grade a live in-browser coding challenge, with all game state persisted to localStorage and no backend required.',
    ],
    tags: ['React', 'Vite', 'JavaScript', 'Game Design'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Ish-Darlin-Sina/marcy-the-simulation', icon: 'gh' },
    ],
  },
  {
    title: 'MangoHub',
    img: mangohub,
    badge: 'mango',
    description: 'A framework-free anime/manga discovery app, built with a partner in one week.',
    bullets: [
      'Engineered a zero-dependency UI in vanilla JS — no framework — with interactive modals and dynamic content rendering.',
      'Integrated the Jikan REST API and built a client-side search/filter engine returning instant results across a large dataset.',
      'Shipped an anime/manga toggle, trailer modal, top-ranked and ongoing sections, and a favorites system.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Jikan API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Ishtiaq-William-mls/mod-4-project', icon: 'gh' },
      { label: 'Live', url: 'https://ishtiaq-william-mls.github.io/mod-4-project/', icon: 'live' },
      { label: 'Slides', url: 'https://docs.google.com/presentation/d/1bGw4HxgtZ2RmUKXpLxJB6hlkobkVdPqYuR-vfDmN6tw/edit?usp=sharing', icon: 'sl' },
    ],
  },
  {
    title: 'FRED Dashboard',
    img: fred,
    badge: 'chart',
    description: 'A full-stack dashboard visualizing macroeconomic data from the FRED (Federal Reserve) API — GDP, unemployment, inflation, and interest rates.',
    bullets: [
      'Built a custom Express backend to normalize inconsistent FRED API data into clean JSON, automating the data-fetching pipeline.',
      'Implemented interactive Chart.js visualizations for real-time trend analysis across all four indicators.',
      'Deployed and maintained the app in a Linux environment, managing process lifecycle, environment variables, and production logging.',
    ],
    tags: ['React', 'Express', 'Chart.js', 'REST API', 'Data Viz'],
    links: [
      { label: 'GitHub', url: 'https://github.com/ishtiaqa1/Fred-DashBoard', icon: 'gh' },
      { label: 'Live', url: 'https://freddashboard.vercel.app/', icon: 'live' },
    ],
  },
  {
    title: 'Mahjong',
    img: mahjong,
    badge: 'mahjong',
    description: 'An interactive, multiplayer American Mahjong game built with a 3-person team over 3 months — real-time gameplay, user authentication, and live leaderboards.',
    bullets: [
      'Led full-stack implementation (React frontend, PHP/SQL backend) supporting 100+ concurrent users, resolving real-time state-sync issues with persistent database triggers to eliminate race conditions.',
      'Deployed to University at Buffalo Linux servers via SSH and WinSCP over a Cisco AnyConnect VPN, managing the full remote deployment pipeline.',
      'Coordinated the team using Git — enforcing branching conventions and running code reviews.',
    ],
    tags: ['React', 'PHP', 'MySQL', 'Multiplayer', 'Auth'],
    links: [
      { label: 'GitHub', url: 'https://github.com/ishtiaqa1/Mahjong', icon: 'gh' },
      { label: 'Figma', url: 'https://www.figma.com/design/poXUVDO8YHUaDKAV9BOqlB/Team-Jokers?node-id=0-1', icon: 'fi' },
      { label: 'Live', url: 'https://mahjong-seven-sage.vercel.app/', icon: 'live' },
    ],
  },
  {
    title: 'Portfolio Site',
    img: portfolioPic,
    badge: 'live',
    description: 'This portfolio site — built in React with a GitHub activity integration and Cloudflare CDN. Averaging 2.34k+ unique visitors per month.',
    tags: ['React', 'CSS3', 'Vite', 'Cloudflare'],
    links: [
      { label: 'GitHub', url: 'https://github.com/ishtiaqa1/NewReactPage', icon: 'gh' },
      { label: 'Live', url: 'https://ishtiaqakanda.dev/', icon: 'live' },
    ],
  },
];
