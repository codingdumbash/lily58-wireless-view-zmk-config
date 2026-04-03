import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from '../../hooks/useInView'
import { FABRICS, SUIT_HOTSPOTS } from '../../data/fabrics'
import FabricModal from '../ui/FabricModal'

export default function FabricHotspots() {
  const { t } = useTranslation()
  const [ref, inView] = useInView()
  const [selectedFabric, setSelectedFabric] = useState(null)
  const [activeHotspot, setActiveHotspot] = useState(null)

  const handleHotspot = (hotspot) => {
    const fabric = FABRICS.find(f => f.id === hotspot.fabricId)
    setSelectedFabric({ ...fabric, hotspotDetail: hotspot.detail, hotspotLabel: hotspot.label })
    setActiveHotspot(hotspot.id)
  }

  return (
    <section id="fabrics" className="bg-bone py-32 section-pad" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className={`editorial-label mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {t('fabrics.eyebrow')}
          </div>
          <div className={`gold-rule mx-auto transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`} />
          <h2
            className={`luxury-heading text-navy text-4xl md:text-5xl leading-tight mb-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ whiteSpace: 'pre-line' }}
          >
            {t('fabrics.headline')}
          </h2>
          <p className={`font-sans text-xs text-navy/40 tracking-wide transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            {t('fabrics.instruction')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Suit image with hotspots */}
          <div className={`relative aspect-[3/4] max-w-md mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img
              src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&auto=format&fit=crop&q=80"
              alt="Bespoke suit"
              className="w-full h-full object-cover"
            />

            {/* Hotspot pins */}
            {SUIT_HOTSPOTS.map((hotspot) => (
              <button
                key={hotspot.id}
                onClick={() => handleHotspot(hotspot)}
                className="absolute group"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: 'translate(-50%, -50%)' }}
                title={hotspot.label}
              >
                {/* Pulse ring */}
                <span className={`absolute inset-0 rounded-full border border-gold animate-ping opacity-60 ${activeHotspot === hotspot.id ? 'opacity-100' : 'opacity-40'}`} />
                {/* Core dot */}
                <span className={`relative flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${activeHotspot === hotspot.id ? 'bg-gold border-gold' : 'bg-navy/60 border-gold/70 group-hover:bg-gold group-hover:border-gold'}`}>
                  <span className="text-bone text-xs font-light">+</span>
                </span>
                {/* Tooltip */}
                <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-navy text-bone font-sans text-[9px] tracking-ultra uppercase whitespace-nowrap px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {hotspot.label}
                </span>
              </button>
            ))}
          </div>

          {/* Fabric swatches */}
          <div className={`flex flex-col gap-6 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {FABRICS.map((fabric, i) => (
              <button
                key={fabric.id}
                onClick={() => setSelectedFabric(fabric)}
                className={`group text-left border transition-all duration-500 p-6 flex items-center gap-6 ${selectedFabric?.id === fabric.id ? 'border-gold bg-navy text-bone' : 'border-bone-dark hover:border-gold bg-bone-light'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Swatch */}
                <div
                  className="flex-shrink-0 w-14 h-14 border border-bone-dark"
                  style={{ backgroundColor: fabric.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className={`font-display text-lg mb-1 ${selectedFabric?.id === fabric.id ? 'text-bone' : 'text-navy group-hover:text-navy'}`}>
                    {t(fabric.nameKey)}
                  </div>
                  <div className={`font-sans text-[10px] tracking-ultra uppercase ${selectedFabric?.id === fabric.id ? 'text-gold' : 'text-navy/40'}`}>
                    {t(fabric.originKey)}
                  </div>
                  <div className="flex gap-3 mt-2">
                    {fabric.tags.map(tag => (
                      <span key={tag} className={`font-sans text-[9px] tracking-wide px-2 py-0.5 border ${selectedFabric?.id === fabric.id ? 'border-gold/40 text-gold/70' : 'border-navy/20 text-navy/40'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <svg className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${selectedFabric?.id === fabric.id ? 'text-gold' : 'text-navy/20 group-hover:text-gold'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fabric detail modal */}
      {selectedFabric && (
        <FabricModal
          fabric={selectedFabric}
          onClose={() => { setSelectedFabric(null); setActiveHotspot(null) }}
        />
      )}
    </section>
  )
}
