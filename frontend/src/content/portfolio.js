import breedSmartOtonIcon from '../assets/images/continuos_evnet/breedsmart.png';
import mangaflixCover from '../assets/images/mangaflix.jpg';
import workshopImg from '../assets/images/gallery/workshop.jpg';
import hackathonImg from '../assets/images/gallery/hackathon.jpg';
import presentationImg from '../assets/images/gallery/presentation.jpg';

export const profile = {
  name: 'John Arvy Lopez',
  role: 'Full-stack Developer',
  location: 'Iloilo, Philippines',
  summary: 'I design and build responsive web interfaces with a focus on clear interaction, maintainable code, and thoughtful details.',
  about: 'I’m John Arvy, a full-stack developer with a Computer Science background. I enjoy connecting thoughtful interface design with practical application logic, turning ideas into useful web experiences.',
  email: null,
  socials: [
    { label: 'GitHub', href: 'https://github.com/Khaos-s', isPlaceholder: false },
    { label: 'LinkedIn', href: 'https://linkedin.com/', isPlaceholder: true },
  ],
};

export const projects = [
  {
    slug: 'mangaflix', title: 'MangaFlix', type: 'Digital media platform UI', category: 'design', cover: 'mangaflix', glyph: 'MF', featured: true,
    logo: mangaflixCover,
    summary: 'A cinematic digital media platform mockup for a TV interface.',
    technologies: ['UI/UX Design', 'Generative AI'],
    role: 'UI/UX Designer', outcome: 'Designed an immersive, high-contrast modern UI/UX with glowing select effects and dynamic background transitions.',
    challenge: 'Create a cinematic TV interface with a dynamic highlighted carousel.', solution: 'Designed a horizontal scrolling carousel where the central active item is scale-enhanced and brightly lit, seamlessly blending its vibrant colors into the blurred background.', contributions: ['Concept Creation', 'Visual Design'],
    liveUrl: null, repoUrl: null,
  },
  {
    slug: 'car-pass', title: 'Car-Pass', type: 'Full-stack parking management app', category: 'application', cover: 'car-pass', glyph: 'CP', featured: true,
    summary: 'A parking-management application with distinct user and administrator experiences for vehicle, parking-slot, and renewal workflows.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Express', 'MySQL'],
    role: null, outcome: 'The public source includes separate user and admin routes plus parking, vehicle, renewal, notification, reporting, and user-management modules.',
    challenge: 'Coordinate vehicle and parking workflows across user and administrator roles.', solution: 'A React/Vite client separates user and admin route areas, while an Express server and MySQL database support the application data and workflows.', contributions: [],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/car-pass',
  },
  {
    slug: 'plustech', title: 'Plustech', type: 'Smart recycling rewards platform', category: 'application', cover: 'plustech', glyph: 'PT', featured: true,
    summary: 'A student-focused sustainability platform for recycling rewards, environmental-impact tracking, and smart-bin management.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Firebase', 'Express'],
    role: null, outcome: 'The public source includes student and administrator dashboards, rewards and earning views, smart-bin management, analytics, reports, and role-aware routing.',
    challenge: 'Make sustainable recycling activity visible and rewarding for students while giving administrators operational views.', solution: 'A React/Vite client provides separate public, student, and admin routes; Firebase and Express services support authentication, data, and application workflows.', contributions: [],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/plustech',
  },
  {
    slug: 'phinma-event', title: 'PHINMA Event', type: 'University events interface prototype', category: 'design', cover: 'phinma-event', glyph: 'PE', featured: true,
    summary: 'A static PHINMA University of Iloilo administration interface prototype with course, member, campus, account, and event navigation.',
    technologies: ['HTML', 'CSS'],
    role: null, outcome: 'The public project contains a PHINMA administration header and navigation paths for dashboard, lists, members, campus, courses, events, settings, and account areas.',
    challenge: 'Give university administration and event information a clear, familiar navigation structure.', solution: 'A static HTML and CSS prototype establishes the information hierarchy and interface direction before a full application implementation.', contributions: [],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/Phinma-Event',
  },
  {
    slug: 'e-thrift', title: 'E-Thrift', type: 'Fashion e-commerce prototype', category: 'application', cover: 'e-thrift', glyph: 'ET', featured: true,
    summary: 'A thrift-fashion e-commerce prototype with product imagery, account flows, and checkout functionality.',
    technologies: ['PHP', 'HTML', 'CSS', 'Bootstrap'],
    role: null, outcome: 'The public project includes PHP authentication files, a checkout page, reusable user interface components, and fashion-store product assets.',
    challenge: 'Present a coherent online thrift-shopping experience with account and purchase flows.', solution: 'A PHP-based storefront combines reusable layout components, Bootstrap styling, authentication pages, and a checkout route.', contributions: [],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/E-Thrift',
  },
  {
    slug: 'breedsmart-oton', title: 'BreedSmart Oton', type: 'Live web application', category: 'application', cover: 'breedsmart', glyph: 'BS', featured: true,
    logo: breedSmartOtonIcon,
    summary: 'A livestock services platform connecting farmers in Oton with cattle records, service requests, and agricultural technicians.',
    technologies: [],
    role: null, outcome: null,
    challenge: null, solution: null, contributions: [],
    liveUrl: 'https://www.breedsmartoton.site/', repoUrl: null,
  },
  {
    slug: 'portfolio-website', title: 'Portfolio Website', type: 'Personal site', category: 'application', cover: 'portfolio', glyph: 'PL', featured: false,
    summary: 'This portfolio’s visual system, project navigation, and content model.',
    technologies: ['React', 'Vite', 'CSS'], role: 'Personal project', outcome: 'A responsive portfolio that brings project work, capabilities, and contact information together.',
    challenge: 'Present work clearly without relying on heavy visual effects.', solution: 'A project-first layout, shared design tokens, accessible navigation, and a responsive project grid.', contributions: ['Information architecture', 'Interface implementation'], liveUrl: null, repoUrl: null,
  },
];

export const skillGroups = [
  { title: 'Interfaces & frontend', description: 'Responsive layouts, reusable components, and interactions that make the next step clear.', skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Applications & backend', description: 'Connecting interfaces to application logic, APIs, and data.', skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'Flask'] },
  { title: 'Design & workflow', description: 'Moving from an early layout to a working interface, with room to test and refine.', skills: ['Git', 'Figma', 'Firebase', 'Responsive design', 'Accessibility'] },
];

export const approach = [
  { title: 'Understand the task.', description: 'Start with what people need to do. Make the important information easy to find and the next action easy to understand.' },
  { title: 'Build with intention.', description: 'Bring structure to both the interface and the code, using reusable patterns and clear interactions.' },
  { title: 'Refine the details.', description: 'Check the small screens, the keyboard paths, and the moments when something goes wrong.' },
];

export const timeline = [
  { title: 'BS Computer Science', meta: 'Education — details needed', description: 'Add your school name, attendance dates, relevant coursework, and achievements.' },
  { title: 'Frontend development focus', meta: 'Current', description: 'Building responsive user interfaces and developing stronger product, performance, and accessibility practices.' },
];

export const experienceChapters = {
  work: {
    period: '2024 — Present',
    role: 'Full-stack & Web Developer',
    subtitle: 'Independent & Collaborative Projects',
    description: 'Designing and building responsive interfaces, data-driven applications, and practical digital solutions through school, team, and independent projects.',
    tags: ['BreedSmart Oton', 'Car-Pass', 'PlusTech', 'MangaFlix', 'React', 'Node.js'],
    highlights: [
      'Developed modular client architectures using React, Vite, and responsive CSS/Tailwind.',
      'Built backend integrations and APIs with Express, MySQL, and Firebase for data workflows.',
      'Emphasized clean usability, accessible navigation, and thoughtful interface aesthetics.',
    ],
  },
  education: [
    {
      period: '2023 — Present',
      degree: "Bachelor's Degree",
      program: 'BS Information Technology / Computer Science',
      school: 'PHINMA University of Iloilo',
      location: 'Iloilo City, Philippines',
      note: 'Focusing on full-stack web engineering, algorithms, database systems, and user interface design.',
    },
    {
      period: '2021 — 2023',
      degree: 'Senior High School Diploma',
      program: 'Academic Track: STEM (Science, Technology, Engineering, Mathematics)',
      school: 'Senior High School',
      location: 'Philippines',
      note: 'Foundations in computer programming, logic, and analytical problem solving.',
    },
  ],
  community: {
    period: '2023 — Present · Student Organization',
    organization: 'University of Iloilo Programming Circle (UIPC)',
    role: 'Active Member & Tech Enthusiast',
    description: 'A community for workshops, collaborative hackathons, and peer learning. Connecting with fellow developers to turn curiosity about technology into shared momentum.',
    tags: ['Workshops', 'Hackathons', 'Student Community', 'Team Collaboration', 'Code Sprints'],
  },
};

export const experienceGallery = [
  {
    id: 'slide-1',
    title: 'Tech Workshops & Hands-on Coding',
    category: 'Student Workshops',
    description: 'Collaborative code sessions and technical workshops exploring modern web development, algorithms, and practical programming workflows.',
    image: workshopImg,
  },
  {
    id: 'slide-2',
    title: 'Hackathons & Rapid Prototyping',
    category: 'Team Collaboration',
    description: 'Brainstorming architectures, wireframing interfaces, and building working prototypes through focused team sprints.',
    image: hackathonImg,
  },
  {
    id: 'slide-3',
    title: 'Campus Tech Presentations',
    category: 'Showcase & Events',
    description: 'Demonstrating web applications and sharing design insights with student peers and faculty members.',
    image: presentationImg,
  },
];

/**
 * Achievements & Certifications
 * -------------------------------------------------------------
 * Currently empty so you can manually populate your certificates,
 * awards, and credentials as needed!
 *
 * Example structure to add:
 * {
 *   id: 'cert-1',
 *   title: 'ITE 186: Computer Programming 2',
 *   category: 'Academic',       // e.g. 'Academic', 'Certification', 'Competition'
 *   issuer: 'PHINMA University of Iloilo',
 *   year: '2024',
 *   image: '/path-or-imported-image',
 *   verified: true,
 * }
 */
export const achievements = [];

