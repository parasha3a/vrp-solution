import { useEffect } from 'react'
import { gsap } from 'gsap'

export const useScrollAnimations = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          
          // GSAP animation for different elements
          if (entry.target.classList.contains('fade-up')) {
            gsap.fromTo(entry.target, 
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
            )
          }
          
          if (entry.target.classList.contains('fade-left')) {
            gsap.fromTo(entry.target,
              { opacity: 0, x: -50 },
              { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
            )
          }
          
          if (entry.target.classList.contains('fade-right')) {
            gsap.fromTo(entry.target,
              { opacity: 0, x: 50 },
              { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
            )
          }

          if (entry.target.classList.contains('scale-in')) {
            gsap.fromTo(entry.target,
              { opacity: 0, scale: 0.8 },
              { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
            )
          }
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .fade-up, .fade-left, .fade-right, .scale-in')
    animatedElements.forEach((element) => observer.observe(element))

    return () => {
      animatedElements.forEach((element) => observer.unobserve(element))
    }
  }, [])
}
