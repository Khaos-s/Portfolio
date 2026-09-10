import breedSmartOtonIcon from '../assets/images/breedsmart-oton-icon.png';

export const profile = {
  name: 'John Arvy Lopez',
  role: 'Frontend Developer',
  location: 'Manila, Philippines',
  summary: 'I design and build responsive web interfaces with a focus on clear interaction, maintainable code, and thoughtful details.',
  about: 'I am a frontend-focused developer with a Computer Science background. I enjoy turning product ideas into useful, accessible, and polished web experiences.',
  email: 'johnarvy@email.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Khaos-s', isPlaceholder: false },
    { label: 'LinkedIn', href: 'https://linkedin.com/', isPlaceholder: true },
  ],
};

export const projects = [
  {
    slug: 'car-pass', title: 'Car-Pass', type: 'Full-stack parking management app', cover: 'car-pass', glyph: 'CP', featured: true,
    summary: 'A parking-management application with distinct user and administrator experiences for vehicle, parking-slot, and renewal workflows.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Express', 'MySQL'],
    role: 'Contribution scope to be confirmed', outcome: 'The public source includes separate user and admin routes plus parking, vehicle, renewal, notification, reporting, and user-management modules.',
    challenge: 'Coordinate vehicle and parking workflows across user and administrator roles.', solution: 'A React/Vite client separates user and admin route areas, while an Express server and MySQL database support the application data and workflows.', contributions: ['Project contribution details to be confirmed'],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/car-pass',
  },
  {
    slug: 'plustech', title: 'Plustech', type: 'Smart recycling rewards platform', cover: 'plustech', glyph: 'PT', featured: true,
    summary: 'A student-focused sustainability platform for recycling rewards, environmental-impact tracking, and smart-bin management.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Firebase', 'Express'],
    role: 'Contribution scope to be confirmed', outcome: 'The public source includes student and administrator dashboards, rewards and earning views, smart-bin management, analytics, reports, and role-aware routing.',
    challenge: 'Make sustainable recycling activity visible and rewarding for students while giving administrators operational views.', solution: 'A React/Vite client provides separate public, student, and admin routes; Firebase and Express services support authentication, data, and application workflows.', contributions: ['Project contribution details to be confirmed'],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/plustech',
  },
  {
    slug: 'phinma-event', title: 'PHINMA Event', type: 'University events interface prototype', cover: 'phinma-event', glyph: 'PE', featured: true,
    summary: 'A static PHINMA University of Iloilo administration interface prototype with course, member, campus, account, and event navigation.',
    technologies: ['HTML', 'CSS'],
    role: 'Contribution scope to be confirmed', outcome: 'The public project contains a PHINMA administration header and navigation paths for dashboard, lists, members, campus, courses, events, settings, and account areas.',
    challenge: 'Give university administration and event information a clear, familiar navigation structure.', solution: 'A static HTML and CSS prototype establishes the information hierarchy and interface direction before a full application implementation.', contributions: ['Project contribution details to be confirmed'],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/Phinma-Event',
  },
  {
    slug: 'e-thrift', title: 'E-Thrift', type: 'Fashion e-commerce prototype', cover: 'e-thrift', glyph: 'ET', featured: true,
    summary: 'A thrift-fashion e-commerce prototype with product imagery, account flows, and checkout functionality.',
    technologies: ['PHP', 'HTML', 'CSS', 'Bootstrap'],
    role: 'Contribution scope to be confirmed', outcome: 'The public project includes PHP authentication files, a checkout page, reusable user interface components, and fashion-store product assets.',
    challenge: 'Present a coherent online thrift-shopping experience with account and purchase flows.', solution: 'A PHP-based storefront combines reusable layout components, Bootstrap styling, authentication pages, and a checkout route.', contributions: ['Project contribution details to be confirmed'],
    liveUrl: null, repoUrl: 'https://github.com/Khaos-s/E-Thrift',
  },
  {
    slug: 'breedsmart-oton', title: 'BreedSmart Oton', type: 'Live web application', cover: 'breedsmart', glyph: 'BS', featured: true,
    logo: breedSmartOtonIcon,
    summary: 'A live BreedSmart Oton web application.',
    technologies: [],
    role: 'Project details to be verified', outcome: 'Live project added. Add its purpose, your role, technologies, and contributions to complete this case study.',
    challenge: 'Add the user problem and goals this application addresses.', solution: 'Add the key user flows, implementation decisions, and results.', contributions: ['Add verified contributions'],
    liveUrl: 'https://www.breedsmartoton.site/', repoUrl: null,
  },
  {
    slug: 'portfolio-website', title: 'Portfolio Website', type: 'Personal site', cover: 'portfolio', glyph: 'PL', featured: false,
    summary: 'This portfolio’s visual system, project navigation, and content model.',
    technologies: ['React', 'Vite', 'CSS'], role: 'Personal project', outcome: 'In progress — update after launch with actual outcomes.',
    challenge: 'Present work clearly without relying on heavy visual effects.', solution: 'A project-first layout, static content model, and responsive project reel.', contributions: ['Information architecture', 'Interface implementation'], liveUrl: null, repoUrl: null,
  },
];

export const skillGroups = [
  { title: 'Frontend', skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Backend foundations', skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'Flask'] },
  { title: 'Workflow & design', skills: ['Git', 'Figma', 'Firebase', 'Responsive design', 'Accessibility'] },
];

export const timeline = [
  { title: 'BS Computer Science', meta: 'Education — details needed', description: 'Add your school name, attendance dates, relevant coursework, and achievements.' },
  { title: 'Frontend development focus', meta: 'Current', description: 'Building responsive user interfaces and developing stronger product, performance, and accessibility practices.' },
];
