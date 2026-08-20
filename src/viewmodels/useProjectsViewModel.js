import { useMemo } from 'react'
import { useLanguage } from '../context/languageStore.js'
import { getAllProjects, sortProjectsByYearDesc } from '../models/projects.js'

export function useProjectsViewModel() {
  const { t } = useLanguage()
  const all = getAllProjects()

  const visibleProjects = useMemo(() => sortProjectsByYearDesc(all), [all])

  return { visibleProjects, text: t.projects }
}
