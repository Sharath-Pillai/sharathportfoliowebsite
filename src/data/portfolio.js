export const profile = {
  name: 'Sharath Pillai',
  title: 'Full-Stack Software Developer',
  location: 'Kerala, India',
  email: 'spillai.developer@gmail.com',
  phone: '+91 9048299677',
  tagline:
    'Former HSE professional transitioning into software development — building scalable full-stack applications with React, Node.js, and .NET.',
  bio: `Aspiring software engineer with hands-on experience building responsive web applications using HTML5, CSS3, JavaScript, React, Node.js, and .NET. Proficient in modern tools like Git, Vite, and Netlify. Developed 30+ learning projects and 10+ React applications, with a strong focus on clean UI, API design, and real-world problem solving.`,
  openToWork: true,
  cvPath: '/my-cv.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/sharath-pillai-software-developer/',
    github: 'https://github.com/sharath-pillai-software-developer',
    leetcode: 'https://leetcode.com/u/sharathpillai/',
  },
};

export const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Built', value: '40+' },
  { label: 'React Apps', value: '10+' },
  { label: 'Technologies', value: '15+' },
];

export const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'C#', '.NET', 'REST APIs', 'JWT Authentication'],
  },
  {
    category: 'Database & Tools',
    items: ['MongoDB', 'Git', 'Vite', 'Netlify', 'Cloudinary', 'Postman'],
  },
  {
    category: 'Practices',
    items: ['Full-Stack Development', 'UI/UX', 'Agile', 'Problem Solving', 'Code Review'],
  },
];

export const experience = [
  {
    period: '2024 – Present',
    role: 'Full-Stack Developer',
    company: 'Bridgeon',
    description:
      'Building production-ready web applications with React and .NET. Collaborating on API design, frontend architecture, and delivering client-focused solutions.',
  },
  {
    period: '2023 – 2024',
    role: 'Freelance Software Developer',
    company: 'Self-employed',
    description:
      'Delivered custom web solutions for clients — from landing pages to interactive React apps with backend integrations.',
  },
  {
    period: '2022 – 2023',
    role: 'Freelance Frontend Developer',
    company: 'Self-employed',
    description:
      'Created responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React for small businesses and personal brands.',
  },
];

export const education = [
  {
    period: '2025',
    degree: 'Full-Stack Development (React.js & .NET)',
    school: 'Bridgeon',
  },
  {
    period: '2023',
    degree: 'Frontend Development',
    school: 'Online Learning Platforms',
  },
  {
    period: '2017',
    degree: 'B.Tech',
    school: 'University of Kerala',
  },
];

export const featuredProjects = [
  {
    id: 'hrms',
    title: 'HRMS Pro — HR Management System',
    category: 'fullstack',
    description:
      'Full-stack Human Resource Management System with employee records, attendance tracking, leave management, payroll, and role-based access control. Built with React and a .NET backend.',
    tech: ['React', 'Node.js', '.NET', 'MongoDB', 'JWT', 'Tailwind CSS'],
    thumbnail: '/images/hrms-thumb.png',
    liveUrl: 'https://hr-management-system-frontend-rho.vercel.app',
    githubUrl: null,
    featured: true,
  },
  {
    id: 'quickpark',
    title: 'QuickPark — Smart Parking Platform',
    category: 'fullstack',
    description:
      "India's smartest parking management platform — find, book, and manage parking spaces in real time. Features GPS-based slot discovery, live availability, secure payments, and 24/7 support.",
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST API'],
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
