import { useMemo, useState } from 'react'
import {
  collectAllTags,
  filterProjectsByKind,
  filterProjectsByTag,
  getAllProjects,
  sortProjectsByYearDesc,
} from '../models/projects.js'

export function useProjectsViewModel() {
  const [kind, setKind] = useState(/** @type {'all' | 'design' | 'code'} */ ('all'))
  const [tag, setTag] = useState(/** @type {string | null} */ (null))

  const all = getAllProjects()
  const tags = useMemo(() => collectAllTags(all), [all])

  const visibleProjects = useMemo(() => {
    const byKind = filterProjectsByKind(all, kind)
    const byTag = filterProjectsByTag(byKind, tag)
    return sortProjectsByYearDesc(byTag)
  }, [all, kind, tag])

  return {
    visibleProjects,
    tags,
    kind,
    setKind,
    tag,
    setTag,
    clearFilters: () => {
      setKind('all')
      setTag(null)
    },
  }
}
