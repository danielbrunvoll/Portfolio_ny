import { useHomeViewModel } from '../../viewmodels/useHomeViewModel.js'

export default function HomePage() {
  const {
    headingLines,
    intro,
    portrait,
    portraitAlt,
    portraitPlaceholder,
    featured,
  } = useHomeViewModel()

  return (
    <section className="page page-home">
      <div className="hero">
        <div className="hero-text">
          <h1 className="hero-title">
            {headingLines.map((line) => (
              <span key={line} className="hero-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="hero-intro">{intro}</p>
        </div>

        <div className="hero-photo">
          {portrait ? (
            <img src={portrait} alt={portraitAlt} />
          ) : (
            <span className="hero-photo-placeholder">{portraitPlaceholder}</span>
          )}
        </div>
      </div>

      {featured.length === 0 ? null : (
        <ul className="featured">
          {featured.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
