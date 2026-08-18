// Identity and contact details. Shared by every persona and every portfolio —
// change an address here and it updates everywhere.
export const profile = {
  name: 'Mo Shahid',
  location: 'Noida, India',
  email: 'shahid.mansoori.378@gmail.com',
  phone: '+91 7570917829',

  links: {
    linkedIn: 'https://www.linkedin.com/in/moshahid378/',
    gitHub: 'https://github.com/shahid378',
    mail: 'mailto:shahid.mansoori.378@gmail.com',
    // Overwrite this file in public/ to publish a new CV; the path stays stable.
    resume: '/portfolio/Resume_Shahid.pdf',
  },

  avatar: '/portfolio/images/moshahidpic.png',
}

// Per-persona positioning. `tagline` is the hero headline, `pitch` the
// supporting line, `cta` the primary button.
export const personas = {
  tech: {
    id: 'tech',
    label: 'Tech',
    role: 'Full-Stack Engineer · React & Agentic AI',
    tagline: 'I build commerce platforms and AI products that hold up in production.',
    pitch:
      '5+ years shipping React and Vue at scale — storefront infrastructure serving 100+ retail brands, ' +
      'sub-100ms server-rendered pages, and LLM features that real customers use every day.',
    cta: { label: 'Start a project', href: 'mailto:shahid.mansoori.378@gmail.com' },
    themeColor: '#07080b',
    seo: {
      title: 'Mo Shahid — Full-Stack Engineer, React & Agentic AI',
      description:
        'Full-stack engineer with 5+ years in React, Vue, Node and production LLM integration. ' +
        'Available for freelance and contract work.',
    },
  },

  creative: {
    id: 'creative',
    label: 'Creative',
    role: 'Writer · Comedy, Screenplay & Sketch',
    tagline: 'The other half of my brain writes.',
    pitch:
      'Story, comedy, sketch and screenplay writing. Same instinct for structure I use in engineering, ' +
      'pointed at character, timing and the shape of a joke.',
    cta: { label: "Let's write something", href: 'mailto:shahid.mansoori.378@gmail.com' },
    themeColor: '#f4ecdd',
    seo: {
      title: 'Mo Shahid — Writer: Comedy, Screenplay & Sketch',
      description:
        'Story, comedy, sketch and screenplay writing. Available for freelance writing commissions.',
    },
  },
}

export const PERSONA_IDS = Object.keys(personas)
export const DEFAULT_PERSONA = 'tech'
