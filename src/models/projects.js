/**
 * @typedef {'design' | 'code'} ProjectKind
 *
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} summary
 * @property {ProjectKind} kind
 * @property {number} year
 * @property {string[]} tags
 * @property {string} [cover]
 * @property {string} [body]
 * @property {{ label: string, href: string }[]} [links]
 */

/** @type {Project[]} */
const projects = []

export function getAllProjects() {
  return projects
}

/** @param {string} slug */
export function findProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null
}

/** @param {ProjectKind | 'all'} kind */
export function filterProjectsByKind(list, kind) {
  return kind === 'all' ? list : list.filter((p) => p.kind === kind)
}

/** @param {string | null} tag */
export function filterProjectsByTag(list, tag) {
  return tag ? list.filter((p) => p.tags.includes(tag)) : list
}

export function sortProjectsByYearDesc(list) {
  return [...list].sort((a, b) => b.year - a.year)
}

export function collectAllTags(list) {
  return [...new Set(list.flatMap((p) => p.tags))].sort()
}
