import { useEffect, useRef } from 'react'

export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewport = window.innerHeight / 2
      const offset = (center - viewport) * speed
      const img = el.querySelector('.parallax-img')
      if (img) {
        img.style.transform = `scale(1.15) translateY(${offset}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return ref
}
