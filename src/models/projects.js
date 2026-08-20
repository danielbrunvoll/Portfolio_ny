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

// PLACEHOLDER DATA — replace these with your real projects.
// Emptying this array (`const projects = []`) falls back to the "No projects yet" message.
/** @type {Project[]} */
const projects = [
  {
    id: '1',
    slug: 'project-one',
    title: 'Project one',
    summary: 'Short description of what this project was about.',
    year: 2026,
  },
  {
    id: '2',
    slug: 'project-two',
    title: 'Project two',
    summary: 'Short description of what this project was about.',
    year: 2025,
  },
  {
    id: '3',
    slug: 'project-three',
    title: 'Project three',
    summary: 'Short description of what this project was about.',
    year: 2024,
  },
  {
    id: '4',
    slug: 'project-four',
    title: 'Project four',
    summary: 'Short description of what this project was about.',
    year: 2023,
  },
  {
    id: '5',
    slug: 'project-five',
    title: 'Project five',
    summary: 'Short description of what this project was about.',
    year: 2022,
  },
]

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
