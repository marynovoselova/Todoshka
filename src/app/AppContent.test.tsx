import React from 'react';
import { screen } from '@testing-library/react';
import { useThemeContext } from '@shared/context/ThemeContext';
import { lightTheme, darkTheme } from '@shared/config/theme';
import { renderWithProviders } from '@shared/utils';
import { ThemeMode } from '@shared/types';
import AppContent from './AppContent';

jest.mock('@shared/context/ThemeContext', () => ({
  useThemeContext: jest.fn(),
}));

jest.mock('@widgets/Header', () => ({
  Header: () => <div>Header Mock</div>,
}));

jest.mock('@pages/TodoPage', () => ({
  TodoPage: () => <div>TodoPage Mock</div>,
}));

describe('AppContent', () => {
  const mockUseThemeContext = useThemeContext as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseThemeContext.mockReturnValue({ mode: ThemeMode.Light });
  });

  const renderAndCheckTheme = (
    mode: ThemeMode,
    expectedTheme: typeof lightTheme | typeof darkTheme
  ) => {
    mockUseThemeContext.mockReturnValue({ mode });
    renderWithProviders(<AppContent />);

    const { backgroundColor } = window.getComputedStyle(document.body);

    expect(backgroundColor).toBe(expectedTheme.palette.background.default);
  };

  it('should render Header and TodoPage components', () => {
    renderWithProviders(<AppContent />);

    expect(screen.getByText('Header Mock')).toBeInTheDocument();
    expect(screen.getByText('TodoPage Mock')).toBeInTheDocument();
  });

  it('should apply light theme when mode is light', () => {
    renderAndCheckTheme(ThemeMode.Light, lightTheme);
  });

  it('should apply dark theme when mode is dark', () => {
    renderAndCheckTheme(ThemeMode.Dark, darkTheme);
  });
});
