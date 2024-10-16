import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Language } from '@shared/types';
import en from './locales/en.json';
import ru from './locales/ru.json';

const defaultLanguage = localStorage.getItem('language') || Language.EN;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  lng: defaultLanguage,
  fallbackLng: Language.EN,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
