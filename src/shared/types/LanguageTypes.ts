export enum Language {
  EN = 'en',
  RU = 'ru',
}

export interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
}
