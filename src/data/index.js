import { profile, personas, PERSONA_IDS, DEFAULT_PERSONA } from './profile'
import { services as techServices } from './tech/services'
import { caseStudies } from './tech/caseStudies'
import { experience, education } from './tech/experience'
import { skillGroups } from './tech/skills'
import { services as creativeServices } from './creative/services'
import { samples } from './creative/samples'
import { manifesto, marquee } from './creative/manifesto'

/*
 * One entry point for content. Sections read from what this returns rather than
 * importing data files directly, so a persona owns its own shape and a section
 * that has no data simply receives an empty array and hides itself.
 */
const content = {
  tech: {
    persona: personas.tech,
    services: techServices,
    work: caseStudies,
    experience,
    education,
    skillGroups,
    manifesto: null,
    marquee: [],
  },
  creative: {
    persona: personas.creative,
    services: creativeServices,
    work: samples,
    experience: [],
    education: null,
    skillGroups: [],
    manifesto,
    marquee,
  },
}

export function getContent(personaId) {
  return content[personaId] ?? content[DEFAULT_PERSONA]
}

export { profile, personas, PERSONA_IDS, DEFAULT_PERSONA }
