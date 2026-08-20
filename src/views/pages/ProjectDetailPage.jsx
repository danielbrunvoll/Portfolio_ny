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
    <section className="page project-detail">
      <Link to="/projects" className="project-back">
        {text.backShort}
      </Link>
      <h1>{project.title}</h1>
      <p className="project-summary">{project.summary}</p>
      {project.body ? <p className="project-body">{project.body}</p> : null}

      {project.gallery.length === 0 ? null : (
        <ul className="project-gallery">
          {project.gallery.map((image) => (
            <li key={image.src}>
              <figure>
                <img src={image.src} alt={image.caption} loading="lazy" />
                <figcaption>{image.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
