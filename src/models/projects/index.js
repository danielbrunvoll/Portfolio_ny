import { portfolio } from './portfolio.js'
import { navguard } from './navguard.js'
import { placeholders } from './placeholders.js'

/**
 * The project register. To add a project: create a folder for its images under
 * `src/assets/projects/<slug>/`, write `src/models/projects/<slug>.js`, then
 * import it and add it to this list. Order here only breaks ties between
 * projects from the same year, since the views sort by year.
 * @type {import('./types.js').Project[]}
 */
const projects = [portfolio, navguard, ...placeholders]

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

export function sortProjectsByYearDesc(list) {
  return [...list].sort((a, b) => b.year - a.year)
}
