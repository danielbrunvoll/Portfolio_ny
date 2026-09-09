import { ifinavet } from './ifinavet.js'
import { navguard } from './navguard.js'
import { neatheat } from './neatheat.js'
import { portfolio } from './portfolio.js'
import { placeholders } from './placeholders.js'

/**
 * The project register, in the order they appear on the site. Reorder this list
 * to reorder the carousel and the projects page.
 *
 * To add a project: create a folder for its images under
 * `src/assets/projects/<slug>/`, write `src/models/projects/<slug>.js`, then
 * import it and put it where you want it in this list.
 * @type {import('./types.js').Project[]}
 */
const projects = [ifinavet, navguard, neatheat, portfolio, ...placeholders]

/**
 * @param {import('./types.js').LocalizedText | undefined} value
 * @param {'en' | 'no'} language
 */
export function localizeText(value, language) {
  if (!value) return ''
  return typeof value === 'object' ? (value[language] ?? value.en ?? '') : value
}

/**
 * Resolves every translatable field on a project for one language, so views
 * only ever deal with plain strings.
 * @param {import('./types.js').Project} project
 * @param {'en' | 'no'} language
 */
export function localizeProject(project, language) {
  return {
    ...project,
    title: localizeText(project.title, language),
    summary: localizeText(project.summary, language),
    sections: (project.sections ?? []).map((section) => ({
      layout: section.layout ?? 'side',
      text: localizeText(section.text, language),
      images: (section.images ?? []).map((image) => ({
        ...image,
        type: image.type ?? 'image',
        caption: localizeText(image.caption, language),
      })),
    })),
  }
}

export function getAllProjects() {
  return projects
}

/** @param {string} slug */
export function findProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null
}
