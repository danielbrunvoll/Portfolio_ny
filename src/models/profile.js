import portrait from '../assets/danielbilde.jpg'

/**
 * @typedef {Object} NavItem
 * @property {string} id
 * @property {string} to
 * @property {boolean} [end]
 *
 * @typedef {Object} Profile
 * @property {string} name
 * @property {string | null} portrait Imported from src/assets; null shows a placeholder instead.
 */

/** @type {Profile} */
const profile = {
  name: 'Daniel Brunvoll',
  portrait,
}

/** @type {NavItem[]} */
const navItems = [
  { id: 'home', to: '/', end: true },
  { id: 'projects', to: '/projects' },
  { id: 'about', to: '/about' },
  { id: 'contact', to: '/contact' },
]

export function getProfile() {
  return profile
}

export function getNavItems() {
  return navItems
}
