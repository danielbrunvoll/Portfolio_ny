import { Link } from 'react-router-dom'
import { useProjectsViewModel } from '../../viewmodels/useProjectsViewModel.js'

export default function ProjectsPage() {
  const { visibleProjects, tags, kind, setKind, tag, setTag, clearFilters } =
    useProjectsViewModel()

  return (
    <section className="page">
      <h1>Projects</h1>

      <div className="filters">
        <div className="kinds">
          {['all', 'design', 'code'].map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={kind === k}
              onClick={() => setKind(k)}
            >
              {k}
            </button>
          ))}
        </div>
        {tags.length === 0 ? null : (
          <div className="tags">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={tag === t}
                onClick={() => setTag(tag === t ? null : t)}
              >
                {t}
              </button>
            ))}
          </div>
        )}
        {kind !== 'all' || tag ? (
          <button type="button" onClick={clearFilters}>
            Clear
          </button>
        ) : null}
      </div>

      {visibleProjects.length === 0 ? (
        <p>No projects yet.</p>
      ) : (
        <ul className="project-grid">
          {visibleProjects.map((p) => (
            <li key={p.id}>
              <Link to={`/projects/${p.slug}`}>
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
