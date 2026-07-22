import {
  getAllProjects,
  sortProjectsByYearDesc,
} from '../models/projects.js'

export function useHomeViewModel() {
  const featured = sortProjectsByYearDesc(getAllProjects()).slice(0, 3)
  return { featured }
}
