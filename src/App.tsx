import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PillNav from './components/PillNav'
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
    <Router>
      <div className="App min-h-screen">
        <PillNav 
          items={navItems}
          baseColor="#3b82f6"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#1e40af"
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
      </div>
    </Router>
  )
}

export default App
