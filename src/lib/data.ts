import { Github, Linkedin, Twitter, Code2, Cpu, Server, Briefcase, GraduationCap } from "lucide-react";

export const PROFILE_DATA = {
  name: 'Alex Doe',
  title: 'Full Stack Developer & AI Enthusiast',
  bio: 'A creative and detail-oriented developer with a passion for building beautiful, functional, and user-centric web applications. Specializing in modern JavaScript frameworks and exploring the frontiers of AI.',
  about: "I'm a software developer with a knack for turning complex problems into elegant solutions. With several years of experience in the industry, I've had the opportunity to work on a wide range of projects, from small business websites to large-scale enterprise applications. My passion for technology drives me to constantly learn and adapt to new challenges. When I'm not coding, you can find me exploring new hiking trails or experimenting with new recipes in the kitchen.",
  socials: [
    { name: 'GitHub', url: 'https://github.com', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
  ]
};

export const SKILLS_DATA = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3/SASS'],
  },
  {
    title: 'Frontend',
    icon: Cpu,
    skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Redux', 'Zustand'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'Firebase', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
];

export const PROJECTS_DATA = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site built with Next.js and Firebase, including user authentication, product management, and a Stripe-integrated checkout process.',
    tech: ['Next.js', 'React', 'Firebase', 'Stripe', 'Tailwind CSS'],
    link: 'https://github.com',
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'A customer service chatbot using a custom-trained model to provide instant support and answer user queries on a documentation website.',
    tech: ['Python', 'Genkit', 'React', 'Node.js'],
    link: 'https://github.com',
  },
  {
    title: 'Project Management Tool',
    description: 'A Kanban-style project management application that helps teams organize tasks, track progress, and collaborate effectively in real-time.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    link: 'https://github.com',
  },
];

export const EXPERIENCE_DATA = [
    {
        company: "Tech Solutions Inc.",
        title: "Senior Full Stack Developer",
        date: "2020 - Present",
        description: "Leading the development of a new SaaS platform, mentoring junior developers, and architecting scalable backend services. Implemented a new CI/CD pipeline, reducing deployment times by 40%."
    },
    {
        company: "Web Innovators LLC",
        title: "Frontend Developer",
        date: "2018 - 2020",
        description: "Developed and maintained responsive user interfaces for various client websites using React. Collaborated with designers and backend developers to create seamless user experiences."
    },
];

export const EDUCATION_DATA = [
    {
        school: "University of Technology",
        degree: "M.S. in Computer Science",
        date: "2016 - 2018",
    },
    {
        school: "State University",
        degree: "B.S. in Software Engineering",
        date: "2012 - 2016",
    }
];
