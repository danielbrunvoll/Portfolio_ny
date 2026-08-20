import { Link } from 'react-router-dom'
import { useProjectsViewModel } from '../../viewmodels/useProjectsViewModel.js'

export default function ProjectsPage() {
  const { visibleProjects, text } = useProjectsViewModel()

  return (
    <section className="page">
      <h1>{text.title}</h1>

      {visibleProjects.length === 0 ? (
        <p>{text.empty}</p>
      ) : (
        <ul className="project-grid">
          {visibleProjects.map((p) => (
            <li key={p.id}>
              <Link to={`/projects/${p.slug}`}>
                {p.cover ? (
                  <div className="project-grid-media">
                    <img src={p.cover} alt="" loading="lazy" />
                  </div>
                ) : null}
                <h2>{p.title}</h2>
                <p>{p.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
