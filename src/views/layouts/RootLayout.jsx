import { NavLink, Outlet } from 'react-router-dom'
import { useRootLayoutViewModel } from '../../viewmodels/useRootLayoutViewModel.js'

export default function RootLayout() {
  const { navItems, languages, language, setLanguage, languageLabel } =
    useRootLayoutViewModel()

  return (
    <>
      <header className="site-nav">
        <div className="language-switch" role="group" aria-label={languageLabel}>
          {languages.map((option) => (
            <button
              key={option.code}
              type="button"
              className={option.code === language ? 'active' : undefined}
              aria-pressed={option.code === language}
              onClick={() => setLanguage(option.code)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <nav>
          {navItems.map((item) => (
            <NavLink key={item.id} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
    </>
  )
}
