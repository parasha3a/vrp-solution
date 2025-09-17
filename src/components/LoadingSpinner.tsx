import React from 'react'

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-500 to-accent-500">
      <div className="text-center">
        <div className="loading-spinner mx-auto mb-4"></div>
        <p className="text-white text-lg font-medium">Загрузка VRP Solution...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
