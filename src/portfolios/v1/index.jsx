import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ParticlesBackground from './components/ParticlesBackground'
import AboutPage from './components/pages/AboutPage'
import HomePage from './components/pages/HomePage'
import SocialLinks from './components/SocialLinks'
import GeneralFooter from './components/GeneralFooter'
import AllProjectsPage from './components/pages/AllProjectsPage'
import AllTechsPage from './components/pages/AllTechsPage'
import './v1.css'

// Portfolio v1 (2024). Frozen: kept deployable via VITE_PORTFOLIO=1, but new
// work goes into v2. It owns its own router because v2 is a single-page scroll
// and needs none.
function PortfolioV1() {
  return (
    <BrowserRouter basename="/portfolio/">
      <ParticlesBackground />
      <SocialLinks />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/technologies" element={<AllTechsPage />} />
      </Routes>

      <GeneralFooter />
    </BrowserRouter>
  )
}

export default PortfolioV1
