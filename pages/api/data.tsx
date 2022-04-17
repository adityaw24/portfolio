import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { BsCircleFill } from 'react-icons/bs'
import {
  Category,
  ProfileService,
  ProjectType,
  Skill,
  Tools
} from '../../utils/type'

export const service: ProfileService[] = [
  {
    id: 1,
    title: 'Frontend Dev',
    about:
      'Handle UI with <strong>JavaScript</strong> and <strong>React</strong> and variety of frameworks and libraries, including <strong>Bootstrap</strong>, <strong>MaterialUI</strong>, and <strong>TailwindCSS</strong>.',
    Icon: RiComputerLine
    // Icon: FaServer
  },
  {
    id: 2,
    title: 'Backend Dev',
    about:
      'Handle database, server and API using <strong>Go</strong> and <strong>PostgreSQL</strong>.',
    Icon: FaServer
  }
]

export const language: Skill[] = [
  {
    name: 'Javascript',
    level: 80,
    Icon: BsCircleFill
  },
  {
    name: 'Typescript',
    level: 50,
    Icon: BsCircleFill
  },
  {
    name: 'React JS',
    level: 70,
    Icon: BsCircleFill
  },
  {
    name: 'Next JS',
    level: 70,
    Icon: BsCircleFill
  },
  {
    name: 'Bootstrap',
    level: 85,
    Icon: BsCircleFill
  },
  {
    name: 'Material UI',
    level: 70,
    Icon: BsCircleFill
  },
  {
    name: 'Tailwind CSS',
    level: 70,
    Icon: BsCircleFill
  },
  {
    name: 'Go',
    level: 50,
    Icon: BsCircleFill
  }
]

export const tools: Tools[] = [
  {
    name: 'VS Code',
    level: 80,
    Icon: BsCircleFill
  },
  {
    name: 'Photoshop',
    level: 60,
    Icon: BsCircleFill
  },
  {
    name: 'ColerDraw',
    level: 90,
    Icon: BsCircleFill
  },
  {
    name: 'Figma',
    level: 70,
    Icon: BsCircleFill
  }
]

export const projects: ProjectType[] = [
  {
    name: 'Movie App',
    description:
      'This app shows trending and popular movies with moviedb API',
    image: '/images/movie-app.png',
    github: 'https://github.com/adityaw24/moviedb-app-main',
    deployed: 'https://official-movie-app.vercel.app/home',
    category: ['react'],
    techStack: ['React', 'Axios', 'Material UI']
  },
  {
    name: 'Payroll App',
    description:
      'This app has a feature payroll management system such as manage payrolls and salary employee, and also manage leave balance like sick leave, annual leave, and permit leave',
    image: '/images/fe-payroll.png',
    github: 'https://github.com/adityaw24/fe-payroll',
    deployed: 'https://fe-payroll.vercel.app/dashboard/user/summary',
    category: ['react', 'go'],
    techStack: ['React', 'Redux', 'Axios', 'Material UI', 'Go']
  },
  {
    name: 'Calculator App',
    description: 'This app shows result of calculation numbers',
    image: '/images/calculator.png',
    github: 'https://github.com/adityaw24/calculator-web',
    deployed: 'https://html-calculator.vercel.app/',
    category: ['HTML'],
    techStack: ['HTML', 'Javascript', 'Bootstrap', 'jQuery']
  },
  {
    name: 'Mockup Website Disporapar Balikpapan',
    description:
      'This page shows landing page of Official Website Disporapar Balikpapan',
    image: '/images/disporapar-bpp.png',
    github:
      'https://github.com/adityaw24/Frontend-Website-Disporapar-Balikpapan',
    deployed: 'https://mockup-disporapar-balikpapan.vercel.app/',
    category: ['HTML'],
    techStack: ['HTML', 'CSS']
  },
  {
    name: 'Personal Portfolio',
    description:
      'This app shows portfolio with short resume and some projects',
    image: '/images/portfolio.png',
    github: 'https://github.com/adityaw24/portfolio',
    deployed: 'https://purwa-aditya-wisnu-wardhana.vercel.app/about',
    category: ['react', 'nextjs'],
    techStack: ['React', 'Next Js', 'Typescript', 'Tailwind CSS']
  }
]

export const category: Category[] = [
  'all',
  'react',
  'nextjs',
  'go',
  'HTML'
]

// export const category: Category[] = ['react', 'nextjs', 'go', 'HTML']
