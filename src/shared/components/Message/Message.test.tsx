import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Message from './Message';

describe('Message', () => {
  const renderWithTheme = (themeMode: 'light' | 'dark', ui: JSX.Element) => {
    const theme = createTheme({
      palette: {
        mode: themeMode,
      },
    });

    return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
  };

  it('should render text correctly', () => {
    renderWithTheme(
      'light',
      <Message text="No tasks available" iconName="NoTasks" iconAriaLabel="No tasks available" />
    );

    expect(screen.getByText('No tasks available')).toBeInTheDocument();
  });

  it('should apply dark theme styles when theme is dark', () => {
    const { container } = renderWithTheme(
      'dark',
      <Message text="No tasks available" iconName="NoTasks" iconAriaLabel="No tasks available" />
    );

    expect(container.firstChild).toHaveClass('messageContainerDark');
  });

  it('should apply light theme styles when theme is light', () => {
    const { container } = renderWithTheme(
      'light',
      <Message text="No tasks available" iconName="NoTasks" iconAriaLabel="No tasks available" />
    );

    expect(container.firstChild).toHaveClass('messageContainerLight');
  });
});
