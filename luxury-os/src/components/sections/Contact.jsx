import { useTranslation } from 'react-i18next'
import { useInView } from '../../hooks/useInView'

export default function Contact() {
  const { t } = useTranslation()
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="bg-navy py-32 section-pad" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* Left: Headline */}
          <div>
            <div className={`editorial-label mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {t('contact.eyebrow')}
            </div>
            <div className={`gold-rule transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`} />
            <h2
              className={`luxury-heading text-bone text-5xl md:text-6xl lg:text-7xl leading-tight mb-10 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ whiteSpace: 'pre-line' }}
            >
              {t('contact.headline')}
            </h2>
            <p className={`font-sans text-bone/50 text-sm leading-relaxed mb-12 max-w-sm transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
              {t('contact.body')}
            </p>
            <a
              href="mailto:concierge@senseman.com"
              className={`btn-gold transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {t('contact.cta')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Details + form */}
          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Info blocks */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="editorial-label mb-3">{t('contact.address_label')}</div>
                <p className="font-sans text-xs text-bone/50 leading-relaxed">
                  Senseman Atelier<br />
                  No. 5, Jian Guo Men Wai Ave<br />
                  Beijing, 100022
                </p>
              </div>
              <div>
                <div className="editorial-label mb-3">{t('contact.hours_label')}</div>
                <p className="font-sans text-xs text-bone/50 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                  {t('contact.hours')}
                </p>
              </div>
            </div>

            {/* Enquiry form */}
            <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-transparent border-b border-bone/20 py-3 font-sans text-xs text-bone placeholder-bone/30 focus:outline-none focus:border-gold transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-b border-bone/20 py-3 font-sans text-xs text-bone placeholder-bone/30 focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>
              <select className="bg-transparent border-b border-bone/20 py-3 font-sans text-xs text-bone/50 focus:outline-none focus:border-gold transition-colors duration-300 appearance-none">
                <option value="" disabled selected>Commission Type</option>
                <option>Full Bespoke</option>
                <option>Made-to-Measure</option>
                <option>Women's Bespoke</option>
                <option>Corporate Wardrobe</option>
              </select>
              <textarea
                rows={3}
                placeholder="Your message..."
                className="bg-transparent border-b border-bone/20 py-3 font-sans text-xs text-bone placeholder-bone/30 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
              />
              <button
                type="submit"
                className="btn-gold self-start mt-2"
              >
                Send Private Enquiry
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
