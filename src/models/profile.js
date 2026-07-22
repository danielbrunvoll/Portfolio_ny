/**
 * @typedef {Object} NavItem
 * @property {string} id
 * @property {string} label
 * @property {string} to
 * @property {boolean} [end]
 *
 * @typedef {Object} Profile
 * @property {string} name
 * @property {string} role
 */

/** @type {Profile} */
const profile = {
  name: 'Daniel Brunvoll',
  role: 'UX Designer',
}

/** @type {NavItem[]} */
const navItems = [
  { id: 'projects', label: 'Projects', to: '/projects' },
  { id: 'about', label: 'About me', to: '/about' },
  { id: 'contact', label: 'Contact', to: '/contact' },
]

export function getProfile() {
  return profile
}

export function getNavItems() {
  return navItems
}