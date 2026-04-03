import { useTranslation } from 'react-i18next'
import { useInView } from '../../hooks/useInView'

export default function Manifesto() {
  const { t } = useTranslation()
  const [ref, inView] = useInView()

  return (
    <section id="heritage" className="bg-bone-light py-32 section-pad" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <div className={`editorial-label mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              {t('manifesto.eyebrow')}
            </div>
            <div className={`gold-rule transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`} />
            <h2
              className={`luxury-heading text-navy text-4xl md:text-5xl lg:text-6xl leading-tight mb-10 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ whiteSpace: 'pre-line' }}
            >
              {t('manifesto.headline')}
            </h2>
            <p
              className={`font-sans text-navy/60 text-sm leading-relaxed max-w-lg mb-12 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              {t('manifesto.body')}
            </p>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-8 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                { num: 'stat1_num', label: 'stat1_label' },
                { num: 'stat2_num', label: 'stat2_label' },
                { num: 'stat3_num', label: 'stat3_label' }
              ].map(({ num, label }) => (
                <div key={num} className="border-l border-gold pl-4">
                  <div className="font-display text-3xl text-gold mb-1">
                    {t(`manifesto.${num}`)}
                  </div>
                  <div className="font-sans text-[10px] tracking-wide text-navy/50 leading-relaxed">
                    {t(`manifesto.${label}`)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Overlapping Image Grid */}
          <div className={`relative h-96 lg:h-[520px] transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Main image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4b5b30?w=600&auto=format&fit=crop&q=80"
                alt="Master tailor"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay image */}
            <div className="absolute -bottom-8 -right-6 w-48 h-64 overflow-hidden border-4 border-bone-light shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1603252110259-10b9b8e52a08?w=300&auto=format&fit=crop&q=80"
                alt="Fabric detail"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold accent box */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold opacity-40" />
          </div>
        </div>
      </div>
    </section>
  )
}
