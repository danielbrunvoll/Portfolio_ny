import { Link } from 'react-router-dom'
import { useProjectCarouselViewModel } from '../../viewmodels/useProjectCarouselViewModel.js'

export default function ProjectCarousel() {
  const {
    projects,
    trackRef,
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
    text,
  } = useProjectCarouselViewModel()

  return (
    <section className="home-projects">
      <header className="home-projects-header">
        <h2>{text.title}</h2>
        <Link to="/projects" className="view-all">
          {text.viewAll}
        </Link>
      </header>

      {projects.length === 0 ? (
        <p className="home-projects-empty">{text.empty}</p>
      ) : (
        <div className="carousel">
          <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label={text.prev}
          >
            <span aria-hidden="true">‹</span>
          </button>

          <ul className="carousel-track" ref={trackRef}>
            {projects.map((project) => (
              <li key={project.id} className="carousel-card" data-carousel-card>
                <Link to={`/projects/${project.slug}`}>
                  <div className="carousel-card-media">
                    {project.cover ? (
                      <img src={project.cover} alt="" />
                    ) : (
                      <span className="carousel-card-placeholder">
                        {text.imagePlaceholder}
                      </span>
                    )}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label={text.next}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      )}
    </section>
  )
}
