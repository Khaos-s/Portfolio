import breedSmartOtonIcon from '../assets/images/continuos_evnet/breedsmart.png';
import mangaflixCover from '../assets/images/mangaflix.jpg';
import teamCollaborationImg from '../assets/Awarding/team collaboration.webp';
import webDesignAwardingImg from '../assets/Awarding/webdesign_champion1-9bPkXgsv.webp';
import webDesignTeamImg from '../assets/Awarding/webdesign_champion2-BtAF-fbt.webp';
import carPassHomepage from '../assets/images/projects/car-pass-homepage.jpg';
import plustechHomepage from '../assets/images/projects/plustech-homepage.jpg';
import eThriftHomepage from '../assets/images/projects/e-thrift-homepage.jpg';
import virtualSpaceHomepage from '../assets/images/projects/virtual-space-offices-homepage.jpg';
import portfolioHomepage from '../assets/images/projects/portfolio-website-homepage.jpg';
import breedSmartHomepage from '../assets/images/projects/breedsmart-oton-homepage.jpg';

export const profile = {
  name: 'John Arvy Lopez',
  role: 'Full-stack Developer',
  location: 'Iloilo, Philippines',
  summary: 'I design and build responsive web interfaces with a focus on clear interaction, maintainable code, and thoughtful details.',
  about: 'I’m John Arvy, a fourth-year Bachelor of Science in Information Technology (BSIT) student and full-stack developer. I enjoy connecting thoughtful interface design with practical application logic, turning ideas into useful web experiences.',
  email: 'Johnarveylopez0@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Khaos-s', isPlaceholder: false },
    { label: 'LinkedIn', href: 'https://linkedin.com/', isPlaceholder: true },
  ],
};

export const projects = [
  {
    slug: 'phinma-event-remake', title: 'PHINMA UI Event', type: 'Campus event board', category: 'application', featured: true,
    summary: 'A campus event board where scoped organizers submit proposals and administrators review events for public discovery.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    role: null,
    outcome: 'Visitors browse approved events by department, course, organizer, year, and time. Organizers prepare and preview submissions, while administrators manage events and organizer access.',
    challenge: 'Keep campus events easy to discover while separating public announcements from private organizer submissions.',
    solution: 'Next.js renders the public board and workspaces. Supabase provides authentication, storage, and database policies that scope organizer access and protect draft submissions.',
    contributions: [], liveUrl: 'https://phinma-ui-event.vercel.app/events', repoUrl: 'https://github.com/Khaos-s/phinma-event-remake',
  },
  {
    slug: 'ai-agent-office-hq', title: 'AI Agent Office HQ', type: 'Interactive agent-office simulation', category: 'application', featured: true,
    summary: 'A pixel-art virtual office with nine agent departments, shared memory, and a human approval queue.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Canvas', 'Supabase'],
    role: null,
    outcome: 'An interactive 2D office combines animated agent characters, a searchable shared-memory explorer, audited approval decisions, and scored sample repositories.',
    challenge: 'Make agent roles, shared knowledge, and operator decisions visible in one interactive workspace.',
    solution: 'Canvas renders the office, Next.js API routes manage state, and Supabase stores production records and operator accounts. Agent responses and external actions are simulations; Radar uses sample fixtures rather than live discovery.',
    contributions: [], liveUrl: null, repoUrl: 'https://github.com/Khaos-s/AI-Agent-Office-HQ-',
  },
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
    slug: 'car-pass', title: 'Car-Pass', type: 'Parking management prototype', category: 'application', cover: 'car-pass', glyph: 'CP', featured: true,
    screenshot: carPassHomepage,
    summary: 'A campus parking prototype with user and administrator dashboards for vehicle registration, parking slots, and renewals.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Express', 'MySQL'],
    role: null, outcome: 'The React client includes parking, vehicle, renewal, notification, reporting, and user-management screens. The Express server currently mounts authentication routes; vehicle APIs are not connected.',
    challenge: 'Coordinate vehicle and parking workflows across user and administrator roles.', solution: 'A React/Vite client separates user and administrator areas. An Express server uses MySQL and session-based authentication; parking workflows remain a frontend prototype.', contributions: [],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/car-pass',
  },
  {
    slug: 'plustech', title: 'Plustech', type: 'Recycling rewards prototype', category: 'application', cover: 'plustech', glyph: 'PT', featured: true,
    screenshot: plustechHomepage,
    summary: 'A student-focused recycling rewards prototype with role-aware dashboards, environmental-impact views, and smart-bin management screens.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Firebase', 'Express'],
    role: null, outcome: 'The repository includes public, student, and administrator routes, rewards and earning views, smart-bin management screens, analytics, and reports. Physical smart-bin integration is not verified.',
    challenge: 'Make sustainable recycling activity visible and rewarding for students while giving administrators operational views.', solution: 'A React/Vite client provides separate public, student, and admin routes; Firebase and Express services support authentication, data, and application workflows.', contributions: [],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/plustech',
  },
  {
    slug: 'phinma-event', title: 'PHINMA Event', type: 'Early campus website prototype', category: 'application', cover: 'phinma-event', glyph: 'PE', featured: false,
    summary: 'An early PHINMA University of Iloilo website prototype exploring campus navigation, event pages, and account layouts.',
    technologies: ['HTML', 'CSS', 'Python', 'Flask', 'MySQL'],
    role: null, outcome: 'The original repository contains HTML/CSS campus and account layouts alongside older Flask/MySQL student-record exercises. The current event-management application is a separate remake.',
    challenge: 'Explore a campus website structure and learn how page layouts connect to basic server-side records.', solution: 'HTML and CSS define the campus interface; archived Flask/MySQL exercises explore creating, listing, and updating student records.', contributions: [],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/Phinma-Event',
  },
  {
    slug: 'e-thrift', title: 'E-Thrift', type: 'Fashion e-commerce prototype', category: 'application', cover: 'e-thrift', glyph: 'ET', featured: true,
    screenshot: eThriftHomepage,
    summary: 'A PHP thrift-fashion storefront prototype with product browsing, account forms, and a cart/checkout interface.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
    role: null, outcome: 'The repository includes PHP account handlers, reusable storefront components, product assets, and a sample cart/checkout page. Payment processing is not implemented in the inspected checkout.',
    challenge: 'Present a coherent online thrift-shopping experience with account and purchase flows.', solution: 'Reusable PHP components build the storefront, with Bootstrap and jQuery interactions, MySQL account queries, and a prototype cart/checkout page.', contributions: [],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/E-Thrift',
  },
  {
    slug: 'virtual-space-offices', title: 'Virtual Space Offices', type: 'Workspace booking prototype', category: 'application', cover: 'virtual-space', glyph: 'VS', featured: true,
    screenshot: virtualSpaceHomepage,
    summary: 'A workspace-booking prototype with public browsing and separate administrator and office-owner interface areas.',
    technologies: ['React', 'Vite', 'Express', 'MongoDB'],
    role: null, outcome: 'The React source includes office, booking, message, and user-management screens. The mounted Express routes cover authentication, user data, and role checks; booking and listing APIs are not connected.',
    challenge: 'Connect workspace discovery and reservation requests with owner-managed listings.', solution: 'React provides the public and role-protected interface areas. Express and MongoDB support accounts and sessions; listing and booking schemas are present as foundations for later API integration.', contributions: [],
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
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Resend'], role: 'Personal project', outcome: 'A responsive portfolio that brings project work, capabilities, and contact information together.',
    challenge: 'Present applications, design work, and a BSIT learning journey in one coherent portfolio.', solution: 'A content-driven React site combines a static featured-project grid, a college timeline, accessible dialogs, and a Vercel/Resend contact endpoint.', contributions: ['Information architecture', 'Interface implementation'], liveUrl: 'https://johnarvylopez.vercel.app/', repoUrl: 'https://github.com/Khaos-s/Portfolio',
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
    description: 'My first-year college project was PHINMA Event, an early campus website prototype exploring university information and event pages.',
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
    description: 'I’m currently in my fourth year of Bachelor of Science in Information Technology (BSIT), building on the experience of these projects as I continue my development journey.',
    projectSlugs: [],
  },
];

export const experienceGallery = {
  title: 'Web Design Champion',
  category: 'Web Design Champion',
  description: 'Moments with the team, from collaborating at the keyboard to celebrating our web design achievement.',
  photos: [
    { image: webDesignAwardingImg, alt: 'The web design team at the awarding ceremony' },
    { image: webDesignTeamImg, alt: 'The web design champion team posing together' },
    { image: teamCollaborationImg, alt: 'Teammates collaborating at the keyboard during a campus event' },
  ],
};

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

