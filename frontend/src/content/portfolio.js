import breedSmartOtonIcon from '../assets/images/continuos_evnet/breedsmart.png';
import mangaflixCover from '../assets/images/mangaflix.jpg';
import workshopImg from '../assets/images/gallery/workshop.jpg';
import hackathonImg from '../assets/images/gallery/hackathon.jpg';
import presentationImg from '../assets/images/gallery/presentation.jpg';
import carPassHomepage from '../assets/images/projects/car-pass-homepage.jpg';
import plustechHomepage from '../assets/images/projects/plustech-homepage.jpg';
import phinmaEventHomepage from '../assets/images/projects/phinma-event-homepage.jpg';
import eThriftHomepage from '../assets/images/projects/e-thrift-homepage.jpg';
import virtualSpaceHomepage from '../assets/images/projects/virtual-space-offices-homepage.jpg';
import portfolioHomepage from '../assets/images/projects/portfolio-website-homepage.jpg';
import breedSmartHomepage from '../assets/images/projects/breedsmart-oton-homepage.jpg';

export const profile = {
  name: 'John Arvy Lopez',
  role: 'Full-stack Developer',
  location: 'Iloilo, Philippines',
  summary: 'I design and build responsive web interfaces with a focus on clear interaction, maintainable code, and thoughtful details.',
  about: 'I’m John Arvy, a fourth-year BS Information Technology (BS IT) student and full-stack developer. I enjoy connecting thoughtful interface design with practical application logic, turning ideas into useful web experiences.',
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
    screenshot: carPassHomepage,
    summary: 'A parking-management application with distinct user and administrator experiences for vehicle, parking-slot, and renewal workflows.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Express', 'MySQL'],
    role: null, outcome: 'The public source includes separate user and admin routes plus parking, vehicle, renewal, notification, reporting, and user-management modules.',
    challenge: 'Coordinate vehicle and parking workflows across user and administrator roles.', solution: 'A React/Vite client separates user and admin route areas, while an Express server and MySQL database support the application data and workflows.', contributions: [],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/car-pass',
  },
  {
    slug: 'plustech', title: 'Plustech', type: 'Smart recycling rewards platform', category: 'application', cover: 'plustech', glyph: 'PT', featured: true,
    screenshot: plustechHomepage,
    summary: 'A student-focused sustainability platform for recycling rewards, environmental-impact tracking, and smart-bin management.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Firebase', 'Express'],
    role: null, outcome: 'The public source includes student and administrator dashboards, rewards and earning views, smart-bin management, analytics, reports, and role-aware routing.',
    challenge: 'Make sustainable recycling activity visible and rewarding for students while giving administrators operational views.', solution: 'A React/Vite client provides separate public, student, and admin routes; Firebase and Express services support authentication, data, and application workflows.', contributions: [],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/plustech',
  },
  {
    slug: 'phinma-event', title: 'PHINMA Event', type: 'University event management application', category: 'application', cover: 'phinma-event', glyph: 'PE', featured: true,
    screenshot: phinmaEventHomepage,
    summary: 'A PHINMA University of Iloilo event platform with public campus pages, student registration, and administrator event management.',
    technologies: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
    role: null, outcome: 'The local application includes public event pages, student and administrator accounts, event filters, registration, and image uploads.',
    challenge: 'Connect campus event information with student participation and administrator workflows.', solution: 'Flask serves shared templates and event endpoints backed by MySQL, with separate student and administrator session guards.', contributions: [],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/Phinma-Event',
  },
  {
    slug: 'e-thrift', title: 'E-Thrift', type: 'Fashion e-commerce prototype', category: 'application', cover: 'e-thrift', glyph: 'ET', featured: true,
    screenshot: eThriftHomepage,
    summary: 'A thrift-fashion e-commerce prototype with product imagery, account flows, and checkout functionality.',
    technologies: ['PHP', 'HTML', 'CSS', 'Bootstrap'],
    role: null, outcome: 'The public project includes PHP authentication files, a checkout page, reusable user interface components, and fashion-store product assets.',
    challenge: 'Present a coherent online thrift-shopping experience with account and purchase flows.', solution: 'A PHP-based storefront combines reusable layout components, Bootstrap styling, authentication pages, and a checkout route.', contributions: [],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/E-Thrift',
  },
  {
    slug: 'virtual-space-offices', title: 'Virtual Space Offices', type: 'Workspace booking application', category: 'application', cover: 'virtual-space', glyph: 'VS', featured: true,
    screenshot: virtualSpaceHomepage,
    summary: 'An office and workspace booking platform for browsing spaces, requesting reservations, and managing listings and inquiries.',
    technologies: ['React', 'Vite', 'Express', 'MongoDB'],
    role: null, outcome: 'The local source includes member, office-owner, and administrator workflows for listings, bookings, inquiries, and account management.',
    challenge: 'Connect workspace discovery and reservation requests with owner-managed listings.', solution: 'A React interface connects to an Express API with MongoDB-backed accounts, listings, bookings, and sessions.', contributions: [],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/Virutal-Space-Offices',
  },
  {
    slug: 'breedsmart-oton', title: 'BreedSmart Oton', type: 'Live web application', category: 'application', cover: 'breedsmart', glyph: 'BS', featured: true,
    logo: breedSmartOtonIcon,
    screenshot: breedSmartHomepage,
    summary: 'A livestock services platform connecting farmers in Oton with cattle records, service requests, and agricultural technicians.',
    technologies: [],
    role: null, outcome: null,
    challenge: null, solution: null, contributions: [],
    liveUrl: 'https://www.breedsmartoton.site/', repoUrl: null,
  },
  {
    slug: 'portfolio-website', title: 'Portfolio Website', type: 'Personal site', category: 'application', cover: 'portfolio', glyph: 'PL', featured: false,
    screenshot: portfolioHomepage,
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

// College years and project order are confirmed by John; calendar dates are not inferred.
export const experienceRoadmap = [
  {
    id: 'first-year', year: '1st year', title: 'A first platform',
    description: 'My first-year college project was PHINMA Event, a university event platform bringing campus information and participation together.',
    projectSlugs: ['phinma-event'],
  },
  {
    id: 'second-year', year: '2nd year', title: 'Into e-commerce',
    description: 'In my second year, I worked on E-Thrift, exploring an online storefront with product browsing, accounts, and shopping flows.',
    projectSlugs: ['e-thrift'],
  },
  {
    id: 'third-year', year: '3rd year', title: 'Connecting the stack',
    description: 'My third year brought four applications across workspace booking, recycling rewards, campus parking, and livestock services.',
    projectSlugs: ['virtual-space-offices', 'plustech', 'car-pass', 'breedsmart-oton'],
  },
  {
    id: 'fourth-year', year: '4th year', title: 'The next chapter', current: true,
    description: 'I’m currently in my fourth year of BS Information Technology (BS IT), building on the experience of these projects as I continue my development journey.',
    projectSlugs: [],
  },
];

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

