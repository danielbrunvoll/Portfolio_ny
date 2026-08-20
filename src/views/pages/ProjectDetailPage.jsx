import { Link, useParams } from 'react-router-dom'
import { useProjectDetailViewModel } from '../../viewmodels/useProjectDetailViewModel.js'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const { project, notFound, text } = useProjectDetailViewModel(slug)

  if (notFound) {
    return (
      <section className="page">
        <h1>{text.notFound}</h1>
        <Link to="/projects">{text.back}</Link>
      </section>
    )
  }

  return (
    <section className="page">
      <Link to="/projects">{text.backShort}</Link>
      <h1>{project.title}</h1>
      <p>{project.summary}</p>
      {project.body ? <div className="project-body">{project.body}</div> : null}
    </section>
  )
}
