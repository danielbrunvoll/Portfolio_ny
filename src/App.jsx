import { Route, Routes } from 'react-router-dom'
import RootLayout from './views/layouts/RootLayout.jsx'
import HomePage from './views/pages/HomePage.jsx'
import ProjectsPage from './views/pages/ProjectsPage.jsx'
import ProjectDetailPage from './views/pages/ProjectDetailPage.jsx'
import AboutPage from './views/pages/AboutPage.jsx'
import ContactPage from './views/pages/ContactPage.jsx'
import NotFoundPage from './views/pages/NotFoundPage.jsx'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:slug" element={<ProjectDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
