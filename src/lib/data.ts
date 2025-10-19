import { Github, Linkedin, Twitter, Code2, Cpu, Server, Mail, Phone, MapPin, Briefcase, GraduationCap, CodeSquare, ComponentIcon, ComputerIcon } from "lucide-react";

export const PROFILE_DATA = {
  name: 'Umang Bhut',
  title: 'Front-End Developer & AI Enthusiast',
  email: 'umangbhut10@gmail.com',
  phone: '+91 878 088 1010',
  location: 'Nikol, Ahmedabad, India',
  bio: 'A creative and detail-oriented developer with a passion for building beautiful, functional, and user-centric web applications. Specializing in modern JavaScript frameworks and exploring the frontiers of AI.',
  about: "I'm a Front-end developer with a knack for turning complex problems into elegant solutions. My passion for technology drives me to constantly learn and adapt to new challenges. When I'm not coding, you can find me exploring new hiking trails or experimenting with new recipes in the kitchen.",
  socials: [
    { name: 'GitHub', url: 'https://github.com/umang-eng', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/umang-bhut-24521b300/', icon: Linkedin },
    { name: 'Twitter', url: 'https://x.com/bhut_umang7', icon: Twitter },
  ]
};

export const SKILLS_DATA = [
  {
    title: 'AI Enthusiast',
    icon: ComputerIcon,
    skills: ['ChatGPT', 'Gemeni', 'Vercel-0', 'GitHub Copilot', 'Google - Fire base','Claude ai' ],
  },
  {
    title: 'Majority Work',
    icon: ComponentIcon,
    skills: ['AI-Skills', 'Prompt Engineering', 'Web Development', 'Front-End Development'],
  },
  {
    title: 'Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python-basics', 'HTML5', 'CSS3', 'SQL', 'c++', 'Java', 'c' ],
  },
  {
    title: 'Frontend',
    icon: Cpu,
    skills: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Firebase'],
  },
];

export const PROJECTS_DATA = [
  {
    title: 'Shopping Platform',
    description: 'A full-featured e-commerce shoping site, including user authentication, product management, and a Stripe-integrated checkout process.',
    tech: ['Next.js','TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
    link: 'https://umang-eng.github.io/Shoping-site/',
  },
  {
    title: 'Coffee Shop',
    description: 'High-fidelity UI/UX design and responsive front-end development using HTML5, CSS3, and modern frameworks.',
    tech: ['CSS','HTML5', 'React', 'Tailwind CSS'],
    link: 'https://umang-eng.github.io/Caffee-Demo/',
  },
  {
    title: 'Animated Cafe Website',
    description: 'Clean, minimalist UI with responsive layout, high-fidelity visuals, and modern HTML5/CSS structure.',
    tech: ['React', 'Node.js', 'HTML5', 'Tailwind CSS'],
    link: 'https://umang-eng.github.io/Coffee-shop/aura-cafe.html',
  },
];

export const EXPERIENCE_DATA = [
    {
        title: "Curruntly Studying",
        description: "I am a highly motivated 3rd-year college student deeply passionate about Front-End Development. While my professional journey is just beginning, my academic work and personal projects serve as my primary experience, proving my capability to deliver high-quality results. My dedication to crafting flawless user interfaces is absolute; I am fully accurate with my work, and the process of building and perfecting a smooth digital experience is what makes my day fulfilled."
    },
];

export const EDUCATION_DATA = [
    {
        school: "Vedant international school",
        degree: "Science (PCM)",
        date: "2021 - 2023",
    },
    {
        school: "Indus institute of Technology and Engineering",
        degree: "B.Tech in Information Technology",
        date: "2023 - 2027",
    }
];
