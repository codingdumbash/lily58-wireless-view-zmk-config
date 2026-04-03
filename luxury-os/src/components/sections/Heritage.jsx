import { useTranslation } from 'react-i18next'
import { useInView } from '../../hooks/useInView'
import { useParallax } from '../../hooks/useParallax'

export default function Heritage() {
  const { t } = useTranslation()
  const [ref, inView] = useInView()
  const parallaxRef = useParallax(0.25)

  return (
    <section className="relative bg-navy overflow-hidden py-32" id="bespoke">
      {/* Parallax BG */}
      <div ref={parallaxRef} className="parallax-container absolute inset-0 opacity-20">
        <div
          className="parallax-img absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop&q=80')`
          }}
        />
      </div>

      <div className="relative section-pad max-w-7xl mx-auto" ref={ref}>
        <div className="max-w-2xl">
          <div className={`editorial-label mb-6 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            {t('heritage.eyebrow')}
          </div>
          <div className={`gold-rule transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`} />
          <h2
            className={`luxury-heading text-bone text-4xl md:text-5xl lg:text-6xl leading-tight mb-10 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ whiteSpace: 'pre-line' }}
          >
            {t('heritage.headline')}
          </h2>
          <p className={`font-sans text-bone/60 text-sm leading-relaxed mb-12 transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            {t('heritage.body')}
          </p>

          {/* Pull quote */}
          <blockquote className={`border-l-2 border-gold pl-8 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="font-display text-xl text-bone/80 italic leading-relaxed">
              {t('heritage.pull_quote')}
            </p>
          </blockquote>
        </div>
      </div>

      {/* Services grid */}
      <div className="relative section-pad max-w-7xl mx-auto mt-24">
        <div className={`editorial-label mb-8 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {t('services.eyebrow')}
        </div>
        <h3 className={`luxury-heading text-bone text-3xl md:text-4xl mb-16 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ whiteSpace: 'pre-line' }}>
          {t('services.headline')}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bone/10">
          {[
            { titleKey: 'services.bespoke_title', descKey: 'services.bespoke_desc', num: '01' },
            { titleKey: 'services.mtm_title', descKey: 'services.mtm_desc', num: '02' },
            { titleKey: 'services.corporate_title', descKey: 'services.corporate_desc', num: '03' },
            { titleKey: 'services.occasion_title', descKey: 'services.occasion_desc', num: '04' }
          ].map(({ titleKey, descKey, num }, i) => (
            <div
              key={num}
              className={`bg-navy p-10 group hover:bg-navy-light transition-all duration-500 cursor-default transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <div className="font-sans text-[10px] tracking-ultra text-gold/40 mb-6">{num}</div>
              <h4 className="font-display text-xl text-bone mb-4 group-hover:text-gold transition-colors duration-300">
                {t(titleKey)}
              </h4>
              <p className="font-sans text-xs text-bone/50 leading-relaxed">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
