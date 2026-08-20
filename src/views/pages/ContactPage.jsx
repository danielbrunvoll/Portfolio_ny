import { useContactViewModel } from '../../viewmodels/useContactViewModel.js'

export default function ContactPage() {
  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    status,
    canSubmit,
    submit,
    text,
  } = useContactViewModel()

  return (
    <section className="page">
      <h1>{text.title}</h1>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
      >
        <label>
          {text.name}
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          {text.email}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          {text.message}
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit" disabled={!canSubmit}>
          {status === 'sending' ? text.sending : text.send}
        </button>
        {status === 'sent' ? <p>{text.sent}</p> : null}
        {status === 'error' ? <p>{text.error}</p> : null}
      </form>
    </section>
  )
}
