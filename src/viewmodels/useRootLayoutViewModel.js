import { getNavItems } from '../models/profile.js'

export function useRootLayoutViewModel() {
  const navItems = getNavItems()
  return { navItems }
}
