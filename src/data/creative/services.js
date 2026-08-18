/*
 * Offer-led rather than skill-led: each card opens with the situation someone
 * is actually in when they would hire me. `hook` is the pitch, `title` is the
 * label. `nascent: true` marks work I am starting rather than shipping, so the
 * UI can say so plainly instead of overclaiming.
 */
export const services = {
  proven: [
    {
      id: 'human-writing',
      title: 'Human-Touch Writing',
      hook: 'Going on vacation and do not want an AI finishing your book?',
      summary:
        'Ghostwriting, continuation and rewriting that still sounds like a person wrote it — ' +
        'because one did. I will match a voice rather than flatten it into the same clean mush.',
      bullets: ['Ghostwriting & continuation', 'Rewrites and voice matching', 'Editing and punch-up'],
      stack: ['Ghostwriting', 'Editing', 'Voice'],
    },
    {
      id: 'reels',
      title: 'Reels & Content',
      hook: 'Want to make new content? Let us collab.',
      summary:
        'Concepts, scripts and hooks for short-form video — built around a premise that earns the ' +
        'next three seconds instead of hoping the algorithm is kind.',
      bullets: ['Short-form concepts and scripts', 'Hooks and cold opens', 'Collaboration on series ideas'],
      stack: ['Reels', 'Short-form', 'Collab'],
      nascent: true,
    },
    {
      id: 'comedy',
      title: 'Comedy & Sketch',
      hook: 'Need something that actually lands?',
      summary:
        'Sketches, bits and short-form comedy built around a premise that escalates instead of ' +
        'just repeating. Written for performance, not for the page.',
      bullets: ['Sketch and skit writing', 'Bits and social video', 'Punch-up and joke passes'],
      stack: ['Sketch', 'Stand-up', 'Punch-up'],
    },
    {
      id: 'screenplay',
      title: 'Screenplay & Script',
      hook: 'Have a story but not a script?',
      summary:
        'Short films, episodic pilots and branded narrative work — structured properly, formatted ' +
        'properly, and written to be shot rather than admired.',
      bullets: ['Short film and pilot scripts', 'Industry-standard formatting', 'Structure and beat sheets'],
      stack: ['Short film', 'Pilot', 'Branded'],
    },
    {
      id: 'modelling',
      title: 'Modelling & On-Camera',
      hook: 'Need a face for a shoot?',
      summary:
        'Available for shoots, campaigns and on-camera work, paid or volunteer. Happy to start ' +
        'with collaborative projects while the book comes together.',
      bullets: ['Stills and campaign shoots', 'On-camera and presenting', 'Collaborative / TFP projects'],
      stack: ['Stills', 'On-camera', 'Collab'],
      nascent: true,
    },
    {
      id: 'brainstorm',
      title: 'Brainstorming & Ideas',
      hook: 'Stuck on something and need to think out loud?',
      summary:
        'Concept sessions for people who have a rough idea and need someone to pull on it — ' +
        'find the angle, kill the boring version, and leave with something worth making.',
      bullets: ['Concept and ideation sessions', 'Angle-finding and positioning', 'Creative direction input'],
      stack: ['Ideation', 'Concept', 'Direction'],
    },
  ],

  expanding: null,
}
