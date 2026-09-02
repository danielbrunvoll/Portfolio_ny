import { useLanguage } from '../context/languageStore.js'
import { findProjectBySlug, localizeProject } from '../models/projects/index.js'

/** @param {string | undefined} slug */
export function useProjectDetailViewModel(slug) {
  const { language, t } = useLanguage()
  const match = slug ? findProjectBySlug(slug) : null
  const project = match ? localizeProject(match, language) : null

  return { project, notFound: !project, text: t.projectDetail }
}
