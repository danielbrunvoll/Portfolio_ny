import { Link } from 'react-router-dom'
import { useNotFoundViewModel } from '../../viewmodels/useNotFoundViewModel.js'

export default function NotFoundPage() {
  const { text } = useNotFoundViewModel()

  return (
    <section className="page">
      <h1>{text.title}</h1>
      <Link to="/">{text.home}</Link>
    </section>
  )
}
