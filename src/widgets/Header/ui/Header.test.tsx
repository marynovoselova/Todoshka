import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@shared/utils';
import Header from './Header';

jest.mock('@shared/components/ThemeSwitcher', () => ({
  ThemeSwitcher: () => <div>ThemeSwitcher Mock</div>,
}));

jest.mock('@shared/components/LanguageSwitcher', () => ({
  LanguageSwitcher: () => <div>LanguageSwitcher Mock</div>,
}));

jest.mock('@shared/components/Icon', () => ({
  Icon: ({ iconName }: { iconName: string }) => <div>{`${iconName} Icon Mock`}</div>,
}));

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    renderWithProviders(<Header />);
  });

  it('should render the logo', () => {
    expect(screen.getByText('Logo Icon Mock')).toBeInTheDocument();
  });

  it('should render the title', () => {
    expect(screen.getByText('Todoshka')).toBeInTheDocument();
  });

  it('should render the ThemeSwitcher', () => {
    expect(screen.getByText('ThemeSwitcher Mock')).toBeInTheDocument();
  });
  it('should render the LanguageSwitcher', () => {
    expect(screen.getByText('LanguageSwitcher Mock')).toBeInTheDocument();
  });
});
