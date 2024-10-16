import {
  FC,
  ReactNode,
  createContext,
  useState,
  useCallback,
  useLayoutEffect,
  useMemo,
} from 'react';
import i18n from '@shared/config/i18n/i18n';
import { Language, LanguageContextProps } from '@shared/types';

const LanguageContext = createContext<LanguageContextProps>({
  language: Language.EN,
  toggleLanguage: () => {},
});

export const LanguageContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(Language.EN);

  const changeLanguage = useCallback(async (newLanguage: Language) => {
    try {
      await i18n.changeLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
      setLanguage(newLanguage);
    } catch (error) {
      console.error('Failed to change language:', error);
      alert(i18n.t('failed_to_change_language'));
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    const newLanguage = language === Language.EN ? Language.RU : Language.EN;
    changeLanguage(newLanguage).catch((error) => {
      console.error('Error toggling language:', error);
    });
  }, [language, changeLanguage]);

  const languageProviderValue = useMemo(
    () => ({ language, toggleLanguage }),
    [language, toggleLanguage]
  );

  useLayoutEffect(() => {
    const savedLanguage = (localStorage.getItem('language') as Language) || Language.EN;
    changeLanguage(savedLanguage).catch((error) => {
      console.error('Error applying saved language:', error);
    });
  }, [changeLanguage]);

  return (
    <LanguageContext.Provider value={languageProviderValue}>{children}</LanguageContext.Provider>
  );
};

export default LanguageContext;
