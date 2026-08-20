import { useLanguage } from '../context/languageStore.js'
import { getNavItems } from '../models/profile.js'

export function useRootLayoutViewModel() {
  const { t, language, setLanguage, languages } = useLanguage()

  const navItems = getNavItems().map((item) => ({
    ...item,
    label: t.nav[item.id],
  }))

  return {
    navItems,
    languages,
    language,
    setLanguage,
    languageLabel: t.language.selector,
  }
}
