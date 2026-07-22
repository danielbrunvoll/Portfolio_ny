import { getProfile } from '../models/profile.js'
import {
  getAllProjects,
  sortProjectsByYearDesc,
} from '../models/projects.js'

export function useHomeViewModel() {
  const { name, role } = getProfile()
  const featured = sortProjectsByYearDesc(getAllProjects()).slice(0, 3)
  return { headingLines: [name, role], featured }
}
