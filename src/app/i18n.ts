import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import frTranslation from './locales/fr.json';
import enTranslation from './locales/en.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'fr',
  lng: 'fr',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  resources: {
    fr: {
      translation: frTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
});

export default i18n;
