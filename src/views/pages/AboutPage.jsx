import { useAboutViewModel } from '../../viewmodels/useAboutViewModel.js'

export default function AboutPage() {
  const { text } = useAboutViewModel()
  return (
    <section className="page">
      <h1>{text.title}</h1>
    </section>
  )
}
