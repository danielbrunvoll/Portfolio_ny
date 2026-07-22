import { findProjectBySlug } from '../models/projects.js'

/** @param {string | undefined} slug */
export function useProjectDetailViewModel(slug) {
  const project = slug ? findProjectBySlug(slug) : null
  return { project, notFound: !project }
}
