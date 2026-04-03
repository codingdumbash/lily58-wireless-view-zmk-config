import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'zh', label: 'ZH', name: '中文' },
  { code: 'jp', label: 'JP', name: '日本語' },
  { code: 'kr', label: 'KR', name: '한국어' }
]

export default function Navigation() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const setLang = (code) => {
    i18n.changeLanguage(code)
    setLangOpen(false)
  }

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-bone-light/95 backdrop-blur-sm border-b border-bone-dark shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="section-pad flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span className="font-display text-2xl tracking-luxury text-navy group-hover:text-gold transition-colors duration-300">
            SENSEMAN
          </span>
          <span className="font-sans text-[9px] tracking-ultra text-gold uppercase">
            Presidential Heritage Bespoke
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {['heritage', 'bespoke', 'women', 'fabrics', 'atelier'].map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="font-sans text-[10px] tracking-ultra uppercase text-navy/70 hover:text-navy transition-colors duration-300 relative group"
            >
              {t(`nav.${key}`)}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-6">
          {/* Language Toggle */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="font-sans text-[10px] tracking-ultra uppercase text-navy/70 hover:text-gold transition-colors duration-300 flex items-center gap-1"
            >
              {currentLang.label}
              <svg className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-3 bg-bone-light border border-bone-dark shadow-xl py-2 min-w-[140px]">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLang(lang.code)}
                    className={`w-full text-left px-4 py-2 font-sans text-xs hover:bg-bone-dark transition-colors duration-200 flex items-center justify-between ${
                      i18n.language === lang.code ? 'text-gold' : 'text-navy/70'
                    }`}
                  >
                    <span className="tracking-ultra uppercase text-[10px]">{lang.label}</span>
                    <span className="text-[10px] opacity-60">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex btn-luxury text-[10px] py-3 px-6"
          >
            {t('hero.cta_primary')}
          </a>

          {/* Mobile Menu */}
          <button
            className="lg:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-px bg-navy transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`block h-px bg-navy transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-navy transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`lg:hidden bg-bone-light border-t border-bone-dark overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="section-pad py-8 flex flex-col gap-6">
          {['heritage', 'bespoke', 'women', 'fabrics', 'atelier', 'contact'].map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-xs tracking-ultra uppercase text-navy/70 hover:text-navy"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
