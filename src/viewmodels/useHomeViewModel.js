import { useLanguage } from '../context/languageStore.js'
import { getProfile } from '../models/profile.js'
import {
  getAllProjects,
  sortProjectsByYearDesc,
} from '../models/projects.js'

export function useHomeViewModel() {
  const { t } = useLanguage()
  const { name, portrait } = getProfile()
  const featured = sortProjectsByYearDesc(getAllProjects()).slice(0, 3)

  return {
    headingLines: [name, t.home.role],
    intro: t.home.intro,
    portrait,
    portraitAlt: t.home.photoAlt,
    portraitPlaceholder: t.home.photoPlaceholder,
    featured,
  }
}
