import { useLanguage } from '../context/languageStore.js'

export function useNotFoundViewModel() {
  const { t } = useLanguage()
  return { text: t.notFound }
}
