import { useTranslation } from 'react-i18next'
import { useInView } from '../../hooks/useInView'

const PILLARS = ['pillar1', 'pillar2', 'pillar3']

export default function Women() {
  const { t } = useTranslation()
  const [ref, inView] = useInView()

  return (
    <section id="women" className="bg-bone-light py-32 section-pad overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: Image stack */}
          <div className={`relative h-[600px] transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* BG accent */}
            <div className="absolute top-8 left-8 right-8 bottom-8 border border-gold/20" />

            {/* Main portrait */}
            <div className="absolute top-0 left-0 w-3/4 h-4/5 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80"
                alt="Women's bespoke"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>

            {/* Secondary image */}
            <div className="absolute bottom-0 right-0 w-1/2 h-2/5 overflow-hidden border-4 border-bone-light shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=400&auto=format&fit=crop&q=80"
                alt="Fabric detail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gold label card */}
            <div className="absolute bottom-16 left-0 bg-navy px-6 py-4 shadow-xl">
              <div className="font-sans text-[9px] tracking-ultra text-gold uppercase mb-1">The Petite Standard</div>
              <div className="font-display text-bone text-lg">4'11" — Redefined</div>
            </div>
          </div>

          {/* Right: Copy */}
          <div>
            <div className={`editorial-label mb-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {t('women.eyebrow')}
            </div>
            <div className={`gold-rule transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`} />
            <h2
              className={`luxury-heading text-navy text-4xl md:text-5xl lg:text-6xl leading-tight mb-3 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ whiteSpace: 'pre-line' }}
            >
              {t('women.headline')}
            </h2>
            <div className={`font-sans text-xs tracking-ultra uppercase text-crimson mb-8 transition-all duration-700 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
              {t('women.subheadline')}
            </div>
            <p className={`font-sans text-navy/60 text-sm leading-relaxed mb-12 transition-all duration-700 delay-[600ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {t('women.body')}
            </p>

            {/* Three pillars */}
            <div className="flex flex-col gap-8 mb-12">
              {PILLARS.map((key, i) => (
                <div
                  key={key}
                  className={`flex gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${700 + i * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-px bg-gold self-stretch" />
                  <div>
                    <h4 className="font-display text-navy text-lg mb-2">{t(`women.${key}_title`)}</h4>
                    <p className="font-sans text-navy/50 text-xs leading-relaxed">{t(`women.${key}_desc`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className={`btn-gold transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '1000ms' }}
            >
              {t('women.cta')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
