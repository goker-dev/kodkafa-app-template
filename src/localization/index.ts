import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import backend from 'i18next-http-backend';
import detector from 'i18next-browser-languagedetector';

// https://github.com/i18next/react-i18next/issues/1587
declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n
  .use(backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'tr'],
    fallbackLng: 'en',
    debug: false,
    detection: {
      lookupQuerystring: 'lng',
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    returnNull: false,
  });

export default i18n;
