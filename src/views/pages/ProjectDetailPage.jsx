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

      {project.sections.map((section, index) => (
        <div
          key={section.text || section.images[0]?.src || index}
          className={`project-section project-section-${section.layout}${
            section.images.length === 0 ? ' project-section-text-only' : ''
          }`}
        >
          {section.text ? (
            <div className="project-section-text">
              <p>{section.text}</p>
            </div>
          ) : null}

          {section.images.length === 0 ? null : (
            <div className="project-section-media">
              {section.images.map((image) => (
                <figure key={image.src}>
                  <img src={image.src} alt={image.caption} loading="lazy" />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
