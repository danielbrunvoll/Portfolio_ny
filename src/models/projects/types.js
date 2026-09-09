/**
 * Shared shapes for project data. Kept in its own file so each project file can
 * reference the same typedefs without importing anything at runtime.
 *
 * Text that differs per language. A plain string is used as-is in both
 * languages, which suits names that should not be translated.
 * @typedef {string | { en: string, no: string }} LocalizedText
 *
 * A picture or a video shown alongside a section's text. `type` defaults to
 * 'image'; set it to 'video' for an mp4, optionally with a `poster` still.
 * @typedef {Object} SectionImage
 * @property {string} src
 * @property {LocalizedText} caption
 * @property {'image' | 'video'} [type]
 * @property {string} [poster]
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
 * `cover` (the default) fills the card and crops; `contain` fits the whole
 * image inside it, which is what a wide logo needs so it is not sliced up.
 * @property {'cover' | 'contain'} [coverFit]
 * @property {ProjectSection[]} [sections]
 * @property {{ label: string, href: string }[]} [links]
 */

export {}
