import { useAboutViewModel } from '../../viewmodels/useAboutViewModel.js'

export default function AboutPage() {
  useAboutViewModel()
  return (
    <section className="page">
      <h1>About</h1>
    </section>
  )
}
