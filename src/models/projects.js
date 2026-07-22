/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} summary
 * @property {number} year
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

export function sortProjectsByYearDesc(list) {
  return [...list].sort((a, b) => b.year - a.year)
}
