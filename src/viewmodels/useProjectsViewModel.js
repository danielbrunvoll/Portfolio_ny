import { useMemo } from 'react'
import { getAllProjects, sortProjectsByYearDesc } from '../models/projects.js'

export function useProjectsViewModel() {
  const all = getAllProjects()

  const visibleProjects = useMemo(() => sortProjectsByYearDesc(all), [all])

  return { visibleProjects }
}
