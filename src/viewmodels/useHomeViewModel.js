import { useLanguage } from '../context/languageStore.js'
import { getProfile } from '../models/profile.js'

export function useHomeViewModel() {
  const { t } = useLanguage()
  const { name, portrait } = getProfile()

  return {
    headingLines: [name, t.home.role],
    intro: t.home.intro,
    portrait,
    portraitAlt: t.home.photoAlt,
    portraitPlaceholder: t.home.photoPlaceholder,
  }
}
