import { Link, useParams } from 'react-router-dom'
import { useProjectDetailViewModel } from '../../viewmodels/useProjectDetailViewModel.js'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const { project, notFound } = useProjectDetailViewModel(slug)

  if (notFound) {
    return (
      <section className="page">
        <h1>Project not found</h1>
        <Link to="/projects">Back to projects</Link>
      </section>
    )
  }

  return (
    <section className="page">
      <Link to="/projects">← Projects</Link>
      <h1>{project.title}</h1>
      <p>{project.summary}</p>
      {project.body ? <div className="project-body">{project.body}</div> : null}
    </section>
  )
}
