import portfolioWireframe from '../assets/projects/portfolio-wireframe.png'
import portfolioVisualDirection from '../assets/projects/portfolio-visual-direction.png'
import portfolioLayout from '../assets/projects/portfolio-layout.png'

/**
 * Text that differs per language. A plain string is used as-is in both
 * languages, which suits names that should not be translated.
 * @typedef {string | { en: string, no: string }} LocalizedText
 *
 * @typedef {Object} GalleryImage
 * @property {string} src
 * @property {LocalizedText} caption
 *
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} slug
 * @property {LocalizedText} title
 * @property {LocalizedText} summary
 * @property {number} year
 * @property {string} [cover]
 * @property {LocalizedText} [body]
 * @property {GalleryImage[]} [gallery]
 * @property {{ label: string, href: string }[]} [links]
 */

/** @type {Project[]} */
const projects = [
  {
    id: '1',
    slug: 'portfolio',
    title: { en: 'Portfolio', no: 'Portefølje' },
    summary: {
      en: 'Designing and building my own portfolio site from the first sketch through to a finished React app.',
      no: 'Design og utvikling av min egen porteføljeside fra første skisse til ferdig React-app.',
    },
    year: 2026,
    cover: portfolioVisualDirection,
    body: {
      en: 'This site is the project. I began with rough sketches to work out what the page actually needed to say, then settled on a warm off-white palette and Montserrat so the focus stays on the work rather than the decoration. It is built in React and the whole site is available in both English and Norwegian.',
      no: 'Denne siden er prosjektet. Jeg startet med grove skisser for å finne ut hva siden faktisk måtte si, og landet på en varm off-white palett og Montserrat slik at fokuset ligger på arbeidet framfor dekorasjonen. Den er bygget i React og hele siden finnes på både engelsk og norsk.',
    },
    gallery: [
      {
        src: portfolioWireframe,
        caption: {
          en: 'First sketch, very nice.',
          no: 'Første skisse veldig flott',
        },
      },
      {
        src: portfolioVisualDirection,
        caption: {
          en: 'Settling the palette and the typography.',
          no: 'Fastsetting av palett og typografi.',
        },
      },
      {
        src: portfolioLayout,
        caption: {
          en: 'Full layout with portrait and project carousel.',
          no: 'Ferdig layout med portrett og prosjektkarusell.',
        },
      },
    ],
  },

  // PLACEHOLDER DATA — replace these with your real projects.
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

/**
 * @param {LocalizedText | undefined} value
 * @param {'en' | 'no'} language
 */
export function localizeText(value, language) {
  if (!value) return ''
  return typeof value === 'object' ? (value[language] ?? value.en ?? '') : value
}

/**
 * Resolves every translatable field on a project for one language, so views
 * only ever deal with plain strings.
 * @param {Project} project
 * @param {'en' | 'no'} language
 */
export function localizeProject(project, language) {
  return {
    ...project,
    title: localizeText(project.title, language),
    summary: localizeText(project.summary, language),
    body: localizeText(project.body, language),
    gallery: (project.gallery ?? []).map((image) => ({
      ...image,
      caption: localizeText(image.caption, language),
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
