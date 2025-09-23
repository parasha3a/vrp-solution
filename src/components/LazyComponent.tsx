import React, { Suspense } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface LazyComponentProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  threshold?: number
  rootMargin?: string
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  children, 
  fallback = <div className="h-64 bg-gray-200/20 rounded-lg animate-pulse" />,
  threshold = 0.1,
  rootMargin = '50px'
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true
  })

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {isVisible ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  )
}

export default LazyComponent
