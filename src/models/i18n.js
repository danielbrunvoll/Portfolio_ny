/**
 * @typedef {'en' | 'no'} LanguageCode
 *
 * @typedef {Object} Language
 * @property {LanguageCode} code
 * @property {string} label
 */

/** @type {Language[]} */
const languages = [
  { code: 'en', label: 'EN' },
  { code: 'no', label: 'NO' },
]

const dictionaries = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About me',
      contact: 'Contact',
    },
    language: { selector: 'Language' },
    home: { role: 'UX Designer' },
    projects: { title: 'Projects', empty: 'No projects yet.' },
    about: { title: 'About' },
    contact: {
      title: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending…',
      sent: 'Thanks — message received.',
      error: 'Something went wrong.',
    },
    projectDetail: {
      notFound: 'Project not found',
      back: 'Back to projects',
      backShort: '← Projects',
    },
    notFound: { title: 'Page not found', home: 'Home' },
  },
  no: {
    nav: {
      home: 'Hjem',
      projects: 'Prosjekter',
      about: 'Om meg',
      contact: 'Kontakt',
    },
    language: { selector: 'Språk' },
    home: { role: 'UX-designer' },
    projects: { title: 'Prosjekter', empty: 'Ingen prosjekter ennå.' },
    about: { title: 'Om meg' },
    contact: {
      title: 'Kontakt',
      name: 'Navn',
      email: 'E-post',
      message: 'Melding',
      send: 'Send',
      sending: 'Sender…',
      sent: 'Takk — meldingen er mottatt.',
      error: 'Noe gikk galt.',
    },
    projectDetail: {
      notFound: 'Prosjekt ikke funnet',
      back: 'Tilbake til prosjekter',
      backShort: '← Prosjekter',
    },
    notFound: { title: 'Siden finnes ikke', home: 'Hjem' },
  },
}

export function getLanguages() {
  return languages
}

/** @param {string | null | undefined} code */
export function isSupportedLanguage(code) {
  return languages.some((l) => l.code === code)
}

/** @param {LanguageCode} code */
export function getDictionary(code) {
  return dictionaries[code] ?? dictionaries.en
}
