import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export const useIntersectionObserver = ({
  threshold = 0,
  rootMargin = '0%',
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        
        if (entry.isIntersecting && freezeOnceVisible) {
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, freezeOnceVisible])

  return [ref, isVisible] as const
}
