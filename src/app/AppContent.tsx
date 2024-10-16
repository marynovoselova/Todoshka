import { FC, memo, useMemo } from 'react';
import { Container, ThemeProvider, CssBaseline } from '@mui/material';
import { TodoPage } from '@pages/TodoPage';
import { useThemeContext } from '@shared/context/ThemeContext';
import { lightTheme, darkTheme } from '@shared/config/theme';
import { Header } from '@widgets/Header';
import { ErrorBoundary } from '@shared/components';

const AppContent: FC = () => {
  const { mode } = useThemeContext();
  const theme = useMemo(() => {
    return mode === 'light' ? lightTheme : darkTheme;
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <CssBaseline />
        <Header />
        <Container maxWidth="sm">
          <TodoPage />
        </Container>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default memo(AppContent);
