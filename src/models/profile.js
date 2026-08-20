/**
 * @typedef {Object} NavItem
 * @property {string} id
 * @property {string} to
 * @property {boolean} [end]
 *
 * @typedef {Object} Profile
 * @property {string} name
 */

/** @type {Profile} */
const profile = {
  name: 'Daniel Brunvoll',
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
