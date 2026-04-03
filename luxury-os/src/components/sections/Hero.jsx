import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParallax } from '../../hooks/useParallax'

export default function Hero() {
  const { t } = useTranslation()
  const [loaded, setLoaded] = useState(false)
  const parallaxRef = useParallax(0.2)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden bg-navy">
      {/* Parallax Background */}
      <div ref={parallaxRef} className="parallax-container absolute inset-0">
        <div
          className="parallax-img absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(
              165deg,
              rgba(6,13,20,0.85) 0%,
              rgba(13,27,42,0.5) 40%,
              rgba(6,13,20,0.7) 100%
            ), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1800&auto=format&fit=crop&q=80')`
          }}
        />
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-bone/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative section-pad pb-24 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`editorial-label mb-8 transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {t('hero.eyebrow')}
          </div>

          {/* Gold rule */}
          <div
            className={`gold-rule transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            } origin-left`}
          />

          {/* Headline */}
          <h1
            className={`luxury-heading text-bone text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-10 transition-all duration-1000 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ whiteSpace: 'pre-line' }}
          >
            {t('hero.headline')}
          </h1>

          {/* Subheadline */}
          <p
            className={`font-sans text-bone/60 text-base md:text-lg font-light leading-relaxed max-w-xl mb-12 transition-all duration-1000 delay-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {t('hero.subheadline')}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-[1200ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gold text-navy font-sans text-xs tracking-ultra uppercase px-8 py-4 hover:bg-gold-light transition-all duration-500"
            >
              {t('hero.cta_primary')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#heritage"
              className="inline-flex items-center gap-3 border border-bone/30 text-bone font-sans text-xs tracking-ultra uppercase px-8 py-4 hover:border-bone/70 hover:text-bone transition-all duration-500"
            >
              {t('hero.cta_secondary')}
            </a>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 opacity-40">
          <span className="font-sans text-[9px] tracking-ultra uppercase text-bone rotate-90 mb-4">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-bone to-transparent" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bone-light to-transparent" />
    </section>
  )
}
