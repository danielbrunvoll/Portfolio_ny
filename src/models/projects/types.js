/**
 * Shared shapes for project data. Kept in its own file so each project file can
 * reference the same typedefs without importing anything at runtime.
 *
 * Text that differs per language. A plain string is used as-is in both
 * languages, which suits names that should not be translated.
 * @typedef {string | { en: string, no: string }} LocalizedText
 *
 * @typedef {Object} SectionImage
 * @property {string} src
 * @property {LocalizedText} caption
 *
 * A case study is told as a run of sections so the pictures sit next to the
 * text they illustrate, rather than all of the text followed by all of the
 * images. `layout: 'side'` places the images beside the text on wide screens,
 * `layout: 'full'` places them underneath at full width.
 * @typedef {Object} ProjectSection
 * @property {LocalizedText} [text]
 * @property {SectionImage[]} [images]
 * @property {'side' | 'full'} [layout]
 *
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} slug
 * @property {LocalizedText} title
 * @property {LocalizedText} summary
 * @property {number} year
 * @property {string} [cover]
 * @property {ProjectSection[]} [sections]
 * @property {{ label: string, href: string }[]} [links]
 */

export {}
