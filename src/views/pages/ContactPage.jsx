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
  } = useContactViewModel()

  return (
    <section className="page">
      <h1>Contact</h1>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
      >
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Message
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit" disabled={!canSubmit}>
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
        {status === 'sent' ? <p>Thanks — message received.</p> : null}
        {status === 'error' ? <p>Something went wrong.</p> : null}
      </form>
    </section>
  )
}
