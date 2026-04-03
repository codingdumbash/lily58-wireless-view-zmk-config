import { useTranslation } from 'react-i18next'
import { useInView } from '../../hooks/useInView'

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1594938298603-c8148c4b5b30?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80',
]

const SERVICE_KEYS = ['bespoke', 'mtm', 'corporate', 'occasion']

export default function Services() {
  const { t } = useTranslation()
  const [ref, inView] = useInView()

  return (
    <section id="bespoke" className="bg-bone py-32 section-pad" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`editorial-label mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {t('services.eyebrow')}
          </div>
          <div className={`gold-rule mx-auto transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`} />
          <h2
            className={`luxury-heading text-navy text-4xl md:text-5xl leading-tight transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ whiteSpace: 'pre-line' }}
          >
            {t('services.headline')}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bone-dark">
          {SERVICE_KEYS.map((key, i) => (
            <div
              key={key}
              className={`group bg-bone-light hover:bg-navy transition-all duration-700 overflow-hidden relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={SERVICE_IMAGES[i]}
                  alt={t(`services.${key}_title`)}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Content */}
              <div className="p-8">
                <div className="editorial-label mb-3 group-hover:text-gold transition-colors duration-300">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl text-navy group-hover:text-bone transition-colors duration-500 mb-4">
                  {t(`services.${key}_title`)}
                </h3>
                <p className="font-sans text-xs text-navy/60 group-hover:text-bone/60 leading-relaxed transition-colors duration-500">
                  {t(`services.${key}_desc`)}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a href="#contact" className="font-sans text-[10px] tracking-ultra uppercase text-gold border-b border-gold pb-0.5">
                    Enquire →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
