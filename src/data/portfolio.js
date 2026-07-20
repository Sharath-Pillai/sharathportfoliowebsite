export const profile = {
  name: 'Sharath Pillai',
  title: 'Full Stack Developer',
  location: 'Alappuzha, Kerala, India',
  email: 'spillai.developer@gmail.com',
  phone: '+91 9048299677',
  tagline:
    'Proficient in full stack development, with hands-on experience in building responsive, user-friendly and efficient websites.',
  bio: `Proficient in full stack development, with hands-on experience in building responsive, user-friendly and efficient websites, performing testing, debugging, problem-solving and project management. Adept at collaborating with cross-functional teams and delivering high-quality solutions. I am seeking a lucrative job to enhance my abilities as well as the goals of the company.`,
  openToWork: true,
  cvPath: '/images/SHARATH_PILLAI_CV.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/sharath-pillai-software-developer/',
    github: 'https://github.com/sharath-pillai-software-developer',
    leetcode: 'https://leetcode.com/u/sharathpillai/',
  },
};

export const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Built', value: '20+' },
  { label: 'React Apps', value: '10+' },
  { label: 'Technologies', value: '10+' },
];

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'C-Sharp (C#)', 'Python (Basic)', 'Java (Basic)'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'ASP.NET CORE MVC', '.NET WEB API', 'ADO.NET', 'Entity Framework'],
  },
  {
    category: 'Database & Tools',
    items: ['MongoDB', 'PostgreSQL', 'MS SQL', 'Git', 'GitHub', 'Vercel', 'Render', 'VS Code'],
  },
];

export const experience = [
  {
    period: '2026',
    role: 'Student',
    Institute: 'Scope India',
    Stack: 'React & .NET Core MVC,WEB API',
    Project: 'QuickPark Parking Managment, Scope India Website',
    description:
      'Building production-ready web applications with MERN stack Collaborating on API design, frontend architecture, and delivering client-focused solutions.',
  },
  {
    period: '2025',
    role: 'Student',
    Institute: 'Brototype',
    Stack: 'MERN',
    Project: 'HRMS,E-Commerce website',
    description:
      'Delivered custom web solutions for clients — from landing pages to interactive React apps with backend integrations.',
  },
  {
    period: '2025',
    role: 'Student',
    Institute: 'Bridgeon',
    Stack: 'MERN',
    Project: 'ShoeMart',
    description:
      'Building production-ready web applications with MERN stack Collaborating on API design, frontend architecture, and delivering client-focused solutions.',
  },

];

export const education = [
  {
    period: '2026',
    degree: 'Backend Development (C# ASP.NET CORE MVC)',
    school: 'Brototype',
  },
  {
    period: '2025',
    degree: 'Full-Stack Development (MERN)',
    school: 'Brototype',
  },
  {
    period: '2025',
    degree: 'Full-Stack Development (MERN)',
    school: 'Bridgeon',
  },
  {
    period: 'Apr 2013 – Apr 2017',
    degree: 'Bachelor of Technology in Mechanical Engineering',
    school: 'University of Kerala, Kerala, India',
  },
];

export const featuredProjects = [
  {
    id: 'hrms',
    title: 'HRMS PRO — HR Management Website',
    category: 'fullstack',
    description:
      'MongoDB schema design with real-world validation. Express.js MVC Architecture. React.js Context API for global state. Features JWT strategy, RBAC, and Socket.IO real-time push notifications.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Git'],
    thumbnail: '/images/hrms-thumb.png',
    liveUrl: 'https://hr-management-system-frontend-rho.vercel.app',
    githubUrl: null,
    featured: true,
  },
  
  {
    id: 'quickpark',
    title: 'QuickPark — Parking Management Website',
    category: 'fullstack',
    description:
      'RESTful API Design, Dependency Injection, Repository/Service Layer Pattern. Features EF Core Code-First Migrations, JWT Role-Based Authorization, and Google Maps integration.',
    tech: ['React', 'ASP.NET CORE MVC', 'WEB API', 'Entity', 'PostgreSQL', 'Git'],
    thumbnail: '/images/quickpark-thumb.png',
    liveUrl: 'https://quickparkproject-parkingmanagements-sigma.vercel.app',
    githubUrl: null,
    featured: true,
  },
  {
    id: 'shoemart',
    title: 'ShoeMart — Fashion & Footwear Store',
    category: 'fullstack',
    description:
      'MERN stack e-commerce platform for browsing and purchasing fashion footwear. Features product search, category filters, wishlist, cart, secure checkout, and admin product management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Cloudinary'],
    thumbnail: '/images/shoemart-thumb.png',
    liveUrl: 'https://shoe-mart-frontend.vercel.app',
    githubUrl: null,
    featured: true,
  },
  {
    id: 'forever',
    title: 'Forever — E-commerce Website',
    category: 'fullstack',
    description:
      'Designed and developed a clean and modern responsive e-commerce website. A CRUD application exposed using a RESTful API made with Node.js. Features include Axios for backend connection and Role-Based Access Control.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Git'],
    thumbnail: '/images/forever-thumb.png',
    liveUrl: 'https://e-commerce-website-cloth-sellerfron.vercel.app/',
    githubUrl: null,
    featured: true,
  },
];

export const miniProjects = [
  {
    id: 'mybuddy',
    title: 'My Buddy App',
    category: 'frontend',
    description:
      'Interactive web application for task automation and utility management — built with modern React patterns and deployed on Netlify.',
    tech: ['React', 'JavaScript', 'Netlify'],
    thumbnail: '',
    liveUrl: 'https://mybuddybot.netlify.app/',
    githubUrl: null,
  },
  {
    id: 'age-calculator',
    title: 'Age Calculator',
    category: 'frontend',
    description:
      'Calculate exact age in years, months, and days with leap-year handling and future-date validation.',
    tech: ['React', 'JavaScript'],
    thumbnail: '',
    liveUrl: 'https://agefinder1.netlify.app/',
    githubUrl: null,
  },
  {
    id: 'bill-split',
    title: 'Bill Split App',
    category: 'frontend',
    description:
      'Split bills with friends — tip calculator, per-person cost, and instant results for dining out.',
    tech: ['React', 'JavaScript'],
    thumbnail: '',
    liveUrl: 'https://bill-split-1.netlify.app/',
    githubUrl: null,
  },
];

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];
