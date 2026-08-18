// Two tiers on purpose. `proven` is everything backed by shipped production
// work, so it can survive a client's questions. `expanding` is honestly labelled
// as in-progress rather than padded into the headline offering.
export const services = {
  proven: [
    {
      id: 'frontend',
      title: 'Frontend Engineering',
      summary:
        'React and Vue applications built to survive real traffic — SSR pipelines, design systems, ' +
        'and editors complex enough that non-technical users still find them obvious.',
      bullets: [
        'React 18/19, Vue 2/3, Redux Toolkit, Vuex',
        'Server-side rendering, caching and Core Web Vitals work',
        'Embeddable widgets and micro-frontends',
      ],
      stack: ['React', 'Vue', 'TypeScript', 'Tailwind', 'Webpack/Vite'],
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Delivery',
      summary:
        'End-to-end features: API design, data modelling and the event plumbing behind them — ' +
        'not just the screen, but everything the screen depends on.',
      bullets: [
        'Node.js and Express services, REST and GraphQL',
        'MongoDB, Redis caching, Kafka event pipelines',
        'GraphQL schema design, introspection and query optimisation',
      ],
      stack: ['Node.js', 'Express', 'GraphQL', 'MongoDB', 'Redis', 'Kafka'],
    },
    {
      id: 'ai',
      title: 'Agentic AI & LLM Integration',
      summary:
        'LLM features that ship — tool and function calling, MCP servers and clients, and agent state ' +
        'that survives a multi-step conversation instead of falling apart on turn three.',
      bullets: [
        'OpenAI, Anthropic Claude and Google Gemini in production',
        'Model Context Protocol servers and clients',
        'Tool/function calling, agent memory and state management',
      ],
      stack: ['GPT', 'Claude', 'Gemini', 'MCP', 'FAL AI'],
    },
  ],

  // Rendered smaller and clearly marked, so range is signalled without
  // inviting a client to test a claim that has no project behind it yet.
  expanding: {
    note: 'Actively building depth here — happy to talk about scope before you commit.',
    items: ['Power BI', 'Power Automate', 'DevOps & CI/CD', 'Data Analytics'],
  },
}
