import { useEffect, useRef } from 'react'

/**
 * Wraps any section in a fade-in-on-scroll observer.
 * Adds `.visible` once the element enters the viewport,
 * then unobserves so the transition fires only once.
 */
export default function FadeInSection({ children, id, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id={id} className={`fade-section ${className}`.trim()}>
      {children}
    </section>
  )
}
