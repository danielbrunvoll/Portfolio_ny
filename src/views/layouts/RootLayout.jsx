import { NavLink, Outlet } from 'react-router-dom'
import { useRootLayoutViewModel } from '../../viewmodels/useRootLayoutViewModel.js'

export default function RootLayout() {
  const { navItems } = useRootLayoutViewModel()

  return (
    <>
      <header className="site-nav">
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
