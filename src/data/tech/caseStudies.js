// Structured problem -> approach -> impact, because that is the shape a client
// evaluates. `links` are public and verifiable; nothing here points at an
// internal tool a visitor cannot open.
export const caseStudies = [
  {
    id: 'theme-ai',
    title: 'AI-Powered Storefront Designer',
    org: 'Fynd (via Programming.com)',
    period: '2024 — present',
    tags: ['React', 'Node.js', 'Multi-LLM', 'GraphQL'],
    problem:
      'Retailers had to hand off storefront changes to developers. Design work that should take ' +
      'minutes was queued behind engineering time.',
    approach:
      'Built the React experience for an LLM-driven designer that edits storefronts from plain-English ' +
      'instructions. It surfaces tool/function-call results back to the user, keeps session context across ' +
      'multi-step edits, and drives a live preview. Natural-language prompts are converted to GraphQL via ' +
      'schema introspection, with OpenAI, Claude and Gemini behind a single interface.',
    impact: [
      'Storefront design time cut from hours to minutes for non-technical users',
      'Multi-LLM support for copy, HTML templates, image generation and SEO metadata',
      'AI section generation from a screenshot via GPT-4o Vision, including brand-colour extraction',
    ],
    links: [
      { label: 'Fynd Storefront', href: 'https://www.fynd.com/storefront' },
      {
        label: 'Theme docs',
        href: 'https://docs.fynd.com/partners/commerce/themes-doc/get-started/',
      },
    ],
  },

  {
    id: 'storefront-platform',
    title: 'Storefront Rendering Pipeline',
    org: 'Fynd (via Programming.com)',
    period: '2024 — present',
    tags: ['SSR', 'Redis', 'Kafka', 'Vue', 'React'],
    problem:
      'A white-label storefront platform serving 100+ retail brands needed pages fast enough for ' +
      'mobile shoppers, while every brand rendered different content from different data.',
    approach:
      'Architected an SSR pipeline with a worker-thread pool for parallel page generation, multi-layer ' +
      'caching (Redis for HTML, LRU for compiled bundles) and hash-based invalidation. Storefront content ' +
      'is driven by a schema-based block model fed by an event-driven theme metadata service over Kafka, ' +
      'so brand changes propagate without a redeploy.',
    impact: [
      'Sub-100ms render times across 10K+ daily storefront page loads',
      'Powers 100+ live brands including Superdry, Hugo Boss and Naksh Jaipur',
      'Retailer-supplied templates rendered safely via isolated-vm sandboxing, closing off XSS and injection',
    ],
    links: [
      {
        label: 'Brands built on Fynd',
        href: 'https://www.fynd.com/storefront/brand-showcase',
      },
      {
        label: 'Superdry case study',
        href: 'https://fynd.com/platform/commerce/customer-stories/superdry-amritsar',
      },
    ],
  },

  {
    id: 'embeddable-editor',
    title: 'Embeddable Visual Editor',
    org: 'Fynd (via Programming.com)',
    period: '2024 — present',
    tags: ['Web Components', 'React 18', 'Socket.io', 'Redux Toolkit'],
    problem:
      'Partners wanted the storefront design tool inside their own admin dashboards, which were not ' +
      'necessarily React applications.',
    approach:
      'Shipped the editor as a framework-agnostic web component (r2wc) with configurable routing, dynamic ' +
      'props and session-based auth, published to CDN for partner integration. Added real-time collaboration ' +
      'over Socket.io and drag-and-drop layout editing.',
    impact: [
      'Editor embeds into any admin dashboard regardless of host framework',
      'Plugin-extensible GraphQL middleware with AST-level query merging across 40+ partner extensions',
      '60% less API integration complexity and 35% smaller browser payloads via selection optimisation',
    ],
    links: [
      {
        label: 'Developer tooling (FDK)',
        href: 'https://docs.fynd.com/partners/commerce/developer-tools/',
      },
    ],
  },

  {
    id: 'callerai',
    title: 'CallerAi',
    org: 'Personal project',
    period: '2024',
    tags: ['React', 'Redux', 'Tailwind'],
    problem:
      'Wanted a hands-on build of a voice agent that could handle both inbound and outbound calls.',
    approach:
      'A React and Redux front end for an AI assistant that places and receives calls, with call state ' +
      'and transcript handling in the UI.',
    impact: ['Live demo and full source available'],
    links: [
      { label: 'Live demo', href: 'https://shahid378.github.io/callerai/' },
      { label: 'Source', href: 'https://github.com/shahid378/callerai' },
    ],
  },
]
