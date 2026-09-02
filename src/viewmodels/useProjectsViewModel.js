import { useMemo } from 'react'
import { useLanguage } from '../context/languageStore.js'
import {
  getAllProjects,
  localizeProject,
  sortProjectsByYearDesc,
} from '../models/projects/index.js'

export function useProjectsViewModel() {
  const { language, t } = useLanguage()
  const all = getAllProjects()

  const visibleProjects = useMemo(
    () => sortProjectsByYearDesc(all).map((p) => localizeProject(p, language)),
    [all, language],
  )

  return { visibleProjects, text: t.projects }
}
