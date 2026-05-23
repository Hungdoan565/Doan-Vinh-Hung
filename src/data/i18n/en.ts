import type { Translations } from './types'

export const en: Translations = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Đoàn Vĩnh Hưng',
    subtitle: 'I turn messy real-world problems into clean, working software.',
    badge: 'Open to opportunities',
    available: 'Open to opportunities',
    tagline: 'I turn messy real-world problems into clean, working software.',
    downloadCv: 'Download CV',
    scrollDown: 'Scroll down',
    cta: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      cv: 'Download CV',
    },
  },
  about: {
    heading: 'About Me',
    title: 'About Me',
    bio: "I'm a 4th-year Computer Science student at Nam Can Tho University, passionate about building software that solves real problems. I love the whole stack — from database design to pixel-perfect interfaces. I'm currently looking for opportunities to grow as a developer and contribute to meaningful projects.",
    location: 'Can Tho, Vietnam',
    year: '4th Year Student',
    school: 'Nam Can Tho University',
    statProjects: 'Projects',
    statRoles: 'Tech Skills',
    statYear: 'Year Experience',
    stats: {
      projects: 'Projects',
      coding: 'Years Coding',
      technologies: 'Technologies',
    },
  },
  skills: {
    heading: 'Skills',
    title: 'Skills',
    levels: {
      expert: 'Expert',
      proficient: 'Proficient',
      familiar: 'Familiar',
    },
  },
  projects: {
    heading: 'Projects',
    title: 'Projects',
    viewCode: 'View Code',
    liveDemo: 'Live Demo',
    screenshots: 'Screenshots',
    viewCaseStudy: 'Case Study',
    viewCase: 'Case Study',
    close: 'Close',
    caseStudy: {
      problem: 'Problem',
      whatIBuilt: 'What I Built',
      keyDecisions: 'Key Decisions',
      result: 'Result',
    },
    role: 'My Role',
  },
  contact: {
    heading: "Let's work together",
    title: "Let's work together",
    subheading: "I'm available for full-time roles and freelance projects. Let's build something great.",
    subtitle: "I'm available for full-time roles and freelance projects. Let's build something great.",
  },
  footer: {
    copyright: '© 2026 Đoàn Vĩnh Hưng',
    builtWith: 'Built with React + Tailwind',
  },
  scrollToTop: 'Scroll to top',
  timeline: {
    heading: 'My Journey',
    items: [
      {
        date: '2022',
        title: 'Started CS at Nam Can Tho University',
        description: 'Began my Computer Science journey, learning fundamentals of programming, algorithms, and software design.',
      },
      {
        date: 'Jul 2025',
        title: 'Skill Master — Solo Full-Stack + AI Chatbot',
        description: 'Built a 5-role education management system with React, Express, Supabase, and an AI chatbot powered by Groq.',
      },
      {
        date: 'Feb 2026',
        title: 'RestaurantPOS — Solo Java Desktop POS',
        description: 'Developed a full-featured POS system with Java Swing, MySQL, Kitchen Display System, and reporting.',
      },
      {
        date: 'Mar 2026',
        title: 'ViLaw — Team Project, Full Frontend',
        description: 'Led the entire frontend of an AI legal platform with Next.js 15, TypeScript, and streaming AI chat.',
      },
      {
        date: 'Now',
        title: 'Portfolio + Learning AI/RAG',
        description: 'Building this portfolio and diving into RAG pipelines, AI agents, and prompt engineering.',
      },
    ],
  },
  learning: {
    heading: 'Currently Learning',
    subtitle: "What I'm exploring next — building toward AI-powered applications.",
    items: [
      {
        title: 'RAG Pipeline',
        description: 'Building retrieval-augmented generation systems with LangChain and ChromaDB for document-aware AI chatbots.',
        tags: ['LangChain', 'ChromaDB', 'Embeddings', 'Vector DB'],
        links: [{ label: 'GitHub Repo', url: 'https://github.com/Hungdoan565' }],
      },
      {
        title: 'AI Agent Frameworks',
        description: 'Learning to build autonomous AI agents that can reason, plan, and use tools to complete complex tasks.',
        tags: ['LangGraph', 'CrewAI', 'Tool Use', 'Multi-Agent'],
        links: [{ label: 'Experiments', url: 'https://github.com/Hungdoan565' }],
      },
      {
        title: 'Prompt Engineering',
        description: 'Mastering techniques for effective AI communication — chain-of-thought, few-shot learning, and structured outputs.',
        tags: ['CoT', 'Few-Shot', 'System Prompts', 'Structured Output'],
        links: [{ label: 'Prompt Library', url: 'https://github.com/Hungdoan565' }],
      },
    ],
    quote: 'The best time to start learning AI was yesterday. The second best time is now.',
  },
  experience: {
    heading: 'Experience',
    subtitle: 'Real-world projects where I applied my skills — from solo builds to team collaboration.',
  },
  testimonials: {
    heading: 'What People Say',
    subtitle: 'Feedback from teammates and mentors I\'ve worked with.',
  },
}
