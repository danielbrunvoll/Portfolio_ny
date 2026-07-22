import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
      <header className="site-nav">
        <NavLink to="/" end className="brand">
          Daniel Brunvoll
        </NavLink>
        <nav>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
    </>
  )
}
