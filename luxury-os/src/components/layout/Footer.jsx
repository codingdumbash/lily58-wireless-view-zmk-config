import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-navy text-bone py-20 section-pad">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="font-display text-3xl tracking-luxury text-bone mb-2">
              SENSEMAN
            </div>
            <div className="font-sans text-[9px] tracking-ultra text-gold uppercase mb-6">
              Presidential Heritage Bespoke
            </div>
            <p className="font-sans text-xs text-bone/50 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="editorial-label mb-6">Atelier</div>
            <div className="flex flex-col gap-3">
              {['heritage', 'bespoke', 'women', 'fabrics', 'atelier', 'contact'].map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="font-sans text-xs text-bone/50 hover:text-gold transition-colors duration-300 tracking-wide"
                >
                  {t(`nav.${key}`)}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="editorial-label mb-6">Private Contact</div>
            <div className="flex flex-col gap-3 text-xs text-bone/50 font-sans leading-relaxed">
              <p>By private appointment only</p>
              <p>concierge@senseman.com</p>
              <div className="flex gap-4 mt-4">
                {['WA', 'LINE', 'TG', 'KK'].map(ch => (
                  <span key={ch} className="font-sans text-[10px] tracking-ultra text-gold/60 hover:text-gold cursor-pointer transition-colors">
                    {ch}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-bone/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] text-bone/30 tracking-wide">
            © {new Date().getFullYear()} Senseman. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['privacy', 'terms', 'appointments'].map((key) => (
              <a
                key={key}
                href="#"
                className="font-sans text-[10px] tracking-ultra uppercase text-bone/30 hover:text-gold transition-colors duration-300"
              >
                {t(`footer.${key}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
