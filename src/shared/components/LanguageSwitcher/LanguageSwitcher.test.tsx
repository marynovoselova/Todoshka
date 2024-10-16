import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@mocks/react-i18next';
import LanguageContext from '@shared/context/LanguageContext';
import { renderWithProviders } from '@shared/utils';
import { Language } from '@shared/types';
import LanguageSwitcher from './LanguageSwitcher';

describe('LanguageSwitcher', () => {
  const toggleLanguageMock = jest.fn();

  const renderLanguageSwitcher = (language: Language) => {
    return renderWithProviders(
      <LanguageContext.Provider value={{ language, toggleLanguage: toggleLanguageMock }}>
        <LanguageSwitcher />
      </LanguageContext.Provider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display English icon when the current language is English', () => {
    renderLanguageSwitcher(Language.EN);
    const icon = screen.getByLabelText('Switch language');

    expect(icon).toBeInTheDocument();
  });

  it('should display English icon when the current language is English', () => {
    renderLanguageSwitcher(Language.RU);
    const icon = screen.getByLabelText('Switch language');

    expect(icon).toBeInTheDocument();
  });

  it('should call toggleLanguage when icon button is clicked', () => {
    renderLanguageSwitcher(Language.EN);

    fireEvent.click(screen.getByRole('button'));
    expect(toggleLanguageMock).toHaveBeenCalledTimes(1);
  });
});
