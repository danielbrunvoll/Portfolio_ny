import { useEffect, useState } from 'react'
import {
  getDictionary,
  getLanguages,
  isSupportedLanguage,
} from '../models/i18n.js'
import { LanguageContext } from './languageStore.js'

const STORAGE_KEY = 'language'
const DEFAULT_LANGUAGE = 'en'

function readInitialLanguage() {
  if (typeof localStorage === 'undefined') return DEFAULT_LANGUAGE
  const stored = localStorage.getItem(STORAGE_KEY)
  return isSupportedLanguage(stored) ? stored : DEFAULT_LANGUAGE
}

export default function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  function setLanguage(code) {
    if (isSupportedLanguage(code)) setLanguageState(code)
  }

  const value = {
    language,
    setLanguage,
    languages: getLanguages(),
    t: getDictionary(language),
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
