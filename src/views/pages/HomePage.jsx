import { useHomeViewModel } from '../../viewmodels/useHomeViewModel.js'

export default function HomePage() {
  const { featured } = useHomeViewModel()

  return (
    <section className="page">
      <h1>Portfolio</h1>
      <p>Design and code projects by Daniel Brunvoll.</p>
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
