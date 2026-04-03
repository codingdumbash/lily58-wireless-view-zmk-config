import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function FabricModal({ fabric, onClose }) {
  const { t } = useTranslation()

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative bg-bone-light max-w-2xl w-full shadow-2xl animate-fade-up">
        {/* Gold top bar */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="p-10">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-navy/40 hover:text-navy transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div
              className="flex-shrink-0 w-16 h-16 border border-bone-dark shadow-inner"
              style={{ backgroundColor: fabric.color }}
            />
            <div>
              <div className="editorial-label mb-2">Fabric Provenance</div>
              <h3 className="font-display text-2xl text-navy mb-1">{t(fabric.nameKey)}</h3>
              <div className="font-sans text-xs text-gold tracking-ultra uppercase">{t(fabric.originKey)}</div>
            </div>
          </div>

          <div className="gold-rule" />

          {/* Hotspot detail (if opened from pin) */}
          {fabric.hotspotDetail && (
            <div className="bg-navy/5 border-l-2 border-gold p-4 mb-6">
              <div className="editorial-label mb-2">{fabric.hotspotLabel}</div>
              <p className="font-sans text-sm text-navy/70 leading-relaxed">{fabric.hotspotDetail}</p>
            </div>
          )}

          {/* Description */}
          <p className="font-sans text-sm text-navy/70 leading-relaxed mb-8">
            {t(fabric.descKey)}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-6 border-t border-bone-dark pt-6">
            <div>
              <div className="editorial-label mb-1">Weight</div>
              <div className="font-display text-navy text-lg">{t(fabric.weightKey)}</div>
            </div>
            <div>
              <div className="editorial-label mb-1">Fineness</div>
              <div className="font-display text-navy text-lg">{t(fabric.micronKey)}</div>
            </div>
            <div>
              <div className="editorial-label mb-1">Grade</div>
              <div className="flex gap-1 mt-1">
                {fabric.tags.map(tag => (
                  <span key={tag} className="font-sans text-[9px] tracking-wide px-2 py-0.5 border border-navy/20 text-navy/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a href="#contact" onClick={onClose} className="btn-luxury text-[10px]">
              Commission in This Fabric →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
