import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '@shared/utils';
import { useThemeContext } from '@shared/context';
import { ThemeMode } from '@shared/types';
import '@mocks/react-i18next';
import ThemeSwitcher from './ThemeSwitcher';

jest.mock('@shared/context', () => ({
  useThemeContext: jest.fn(),
}));

describe('ThemeSwitcher', () => {
  let toggleThemeMock: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    toggleThemeMock = jest.fn();
  });

  const renderComponent = (mode: ThemeMode) => {
    (useThemeContext as jest.Mock).mockReturnValue({
      toggleTheme: toggleThemeMock,
      mode,
    });

    renderWithProviders(<ThemeSwitcher />);
  };

  it('should display LightMode icon when the current theme is dark', () => {
    renderComponent(ThemeMode.Dark);
    const icon = screen.getByLabelText('Switch to light theme');

    expect(icon).toBeInTheDocument();
  });

  it('should display DarkMode icon when the current theme is light', () => {
    renderComponent(ThemeMode.Light);
    const icon = screen.getByLabelText('Switch to dark theme');

    expect(icon).toBeInTheDocument();
  });

  it('should call toggleTheme when icon button is clicked', () => {
    renderComponent(ThemeMode.Light);
    fireEvent.click(screen.getByRole('button'));

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });
});
