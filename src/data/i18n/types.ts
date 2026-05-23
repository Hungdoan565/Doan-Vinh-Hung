export interface Translations {
  nav: {
    about: string
    skills: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    subtitle: string
    badge: string
    available: string
    tagline: string
    downloadCv: string
    scrollDown: string
    cta: {
      github: string
      linkedin: string
      email: string
      cv: string
    }
  }
  about: {
    heading: string
    title: string
    bio: string
    location: string
    year: string
    school: string
    statProjects: string
    statRoles: string
    statYear: string
    stats: {
      projects: string
      coding: string
      technologies: string
    }
  }
  skills: {
    heading: string
    title: string
    levels: {
      expert: string
      proficient: string
      familiar: string
    }
  }
  projects: {
    heading: string
    title: string
    viewCode: string
    liveDemo: string
    screenshots: string
    viewCaseStudy: string
    viewCase: string
    close: string
    caseStudy: {
      problem: string
      whatIBuilt: string
      keyDecisions: string
      result: string
    }
    role: string
  }
  contact: {
    heading: string
    title: string
    subheading: string
    subtitle: string
  }
  footer: {
    copyright: string
    builtWith: string
  }
  scrollToTop: string
  timeline: {
    heading: string
    items: Array<{
      date: string
      title: string
      description: string
    }>
  }
  learning: {
    heading: string
    subtitle: string
    items: Array<{
      title: string
      description: string
      tags: string[]
      links?: Array<{ label: string; url: string }>
    }>
    quote: string
  }
  experience: {
    heading: string
    subtitle: string
  }
  testimonials: {
    heading: string
    subtitle: string
  }
}
