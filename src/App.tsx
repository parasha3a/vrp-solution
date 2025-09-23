import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PillNav from './components/PillNav'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import { useScrollAnimations } from './hooks/useScrollAnimations'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'))
const AdvantagesPage = React.lazy(() => import('./pages/AdvantagesPage'))
const TechnicalPage = React.lazy(() => import('./pages/TechnicalPage'))

const App: React.FC = () => {
  // Initialize scroll animations
  useScrollAnimations()

  const navItems = [
    { label: 'О проекте', href: '/' },
    { label: 'Преимущества', href: '/advantages' },
    { label: 'Технологии', href: '/technical' }
  ]

  return (
    <Router basename={import.meta.env.MODE === 'production' ? "/vrp-solution" : ""}>
      <div className="App min-h-screen">
        <PillNav 
          items={navItems}
          baseColor="#1e293b"
          pillColor="#f8fafc"
          hoveredPillTextColor="#f8fafc"
          pillTextColor="#334155"
        />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/advantages" element={<AdvantagesPage />} />
              <Route path="/technical" element={<TechnicalPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
