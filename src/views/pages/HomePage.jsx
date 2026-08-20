import { useHomeViewModel } from '../../viewmodels/useHomeViewModel.js'

export default function HomePage() {
  const { headingLines, featured } = useHomeViewModel()

  return (
    <section className="page page-home">
      <h1 className="hero-title">
        {headingLines.map((line) => (
          <span key={line} className="hero-line">
            {line}
          </span>
        ))}
      </h1>
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
