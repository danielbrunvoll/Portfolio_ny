import { useState } from 'react'
import { useLanguage } from '../context/languageStore.js'

export function useContactViewModel() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(/** @type {'idle' | 'sending' | 'sent' | 'error'} */ ('idle'))

  const canSubmit =
    name.trim().length > 0 &&
    /.+@.+\..+/.test(email) &&
    message.trim().length > 0 &&
    status !== 'sending'

  async function submit() {
    if (!canSubmit) return
    setStatus('sending')
    // wire real transport later
    setStatus('sent')
  }

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    status,
    canSubmit,
    submit,
    text: t.contact,
  }
}
