import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import ru from './locales/ru.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import zh from './locales/zh.json'
import jp from './locales/jp.json'
import kr from './locales/kr.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      es: { translation: es },
      fr: { translation: fr },
      de: { translation: de },
      zh: { translation: zh },
      jp: { translation: jp },
      kr: { translation: kr }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })

export default i18n
