import { useEffect, useRef } from 'react'

/**
 * Animated grid rendered only inside the hero.
 * Fades out progressively as the user scrolls down.
 */
export default function GridBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      // Fade completes after scrolling ~55% of viewport height
      const progress = window.scrollY / (window.innerHeight * 0.55)
      ref.current.style.opacity = Math.max(0, 1 - progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div ref={ref} className="hero-grid" aria-hidden="true" />
}
