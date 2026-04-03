import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const CHANNELS = [
  { id: 'whatsapp', label: 'WhatsApp', color: '#25D366', icon: '💬' },
  { id: 'line', label: 'LINE', color: '#00C300', icon: '💚' },
  { id: 'telegram', label: 'Telegram', color: '#2CA5E0', icon: '✈️' },
  { id: 'kakao', label: 'KakaoTalk', color: '#FAE100', icon: '💛' },
]

const BOT_RESPONSES = [
  "Of course. Our master cutter would be delighted to discuss your commission in complete confidence.",
  "Senseman offers complimentary fabric consultations at our atelier. Shall I arrange a private viewing?",
  "Our Liquid Drape system was developed specifically for the founding generation. The Petite Edition begins at a bespoke consultation.",
  "The Zegna Trofeo cloth is available in 47 colourways this season. I can arrange swatches to be delivered discreetly to your address.",
  "An appointment can be arranged within 72 hours. May I note your preferred day and time?",
]

export default function OmniBot() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: 'bot', text: t('omnibot.greeting') }])
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = (text) => {
    if (!text.trim()) return
    setMessages(m => [...m, { from: 'user', text }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      const reply = BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)]
      setMessages(m => [...m, { from: 'bot', text: reply }])
    }, 1800)
  }

  const quickActions = [
    { label: t('omnibot.commission'), icon: '◆' },
    { label: t('omnibot.schedule'), icon: '◇' },
    { label: t('omnibot.fabrics_btn'), icon: '◈' },
  ]

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-navy shadow-2xl flex items-center justify-center group hover:bg-navy-light transition-all duration-300"
        style={{ boxShadow: '0 8px 40px rgba(13,27,42,0.4)' }}
      >
        {open ? (
          <svg className="w-5 h-5 text-bone" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-5 h-5 text-bone group-hover:text-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {/* Gold pulse */}
            <span className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full animate-ping" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full" />
          </>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-28 right-8 z-50 w-80 md:w-96 bg-bone-light shadow-2xl flex flex-col transition-all duration-500 origin-bottom-right ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ maxHeight: '520px', boxShadow: '0 20px 80px rgba(13,27,42,0.3)' }}
      >
        {/* Gold top bar */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Header */}
        <div className="bg-navy px-5 py-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-gold/20 flex items-center justify-center flex-shrink-0">
            <span className="text-gold text-xs">S</span>
          </div>
          <div>
            <div className="font-display text-bone text-sm">Senseman Concierge</div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              <span className="font-sans text-[9px] text-bone/40 tracking-wide">Available now</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-3 min-h-0" style={{ maxHeight: '260px' }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] px-4 py-3 font-sans text-xs leading-relaxed ${
                  msg.from === 'user'
                    ? 'bg-navy text-bone ml-8'
                    : 'bg-bone-dark text-navy mr-8'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-bone-dark px-4 py-3 mr-8">
                <span className="font-sans text-[10px] text-navy/40 italic">{t('omnibot.typing')}</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick actions */}
        <div className="px-5 pb-3 flex flex-wrap gap-2">
          {quickActions.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => send(label)}
              className="font-sans text-[9px] tracking-wide border border-navy/20 text-navy/60 px-3 py-1.5 hover:border-gold hover:text-gold transition-all duration-200"
            >
              {icon} {label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-bone-dark px-4 py-3 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder={t('omnibot.placeholder')}
            className="flex-1 bg-transparent font-sans text-xs text-navy placeholder-navy/30 focus:outline-none"
          />
          <button
            onClick={() => send(input)}
            className="w-8 h-8 bg-navy flex items-center justify-center hover:bg-gold transition-colors duration-300 flex-shrink-0"
          >
            <svg className="w-3 h-3 text-bone" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Channel bar */}
        <div className="border-t border-bone-dark px-5 py-3">
          <div className="font-sans text-[9px] tracking-ultra uppercase text-navy/30 mb-2">{t('omnibot.channels')}</div>
          <div className="flex gap-3">
            {CHANNELS.map(ch => (
              <button
                key={ch.id}
                title={ch.label}
                className="font-sans text-[9px] tracking-wide text-navy/40 hover:text-navy transition-colors duration-200 flex items-center gap-1"
              >
                <span>{ch.icon}</span>
                <span>{ch.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
