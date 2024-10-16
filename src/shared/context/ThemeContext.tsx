import {
  FC,
  ReactNode,
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import { ThemeContextProps, ThemeMode } from '@shared/types';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const ThemeContext = createContext<ThemeContextProps>({
  toggleTheme: () => {},
  mode: ThemeMode.Light,
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(ThemeMode.Light);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (savedTheme) setMode(savedTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
      localStorage.setItem('theme', newMode);
      return newMode;
    });
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const themeProviderValue = useMemo(() => ({ toggleTheme, mode }), [toggleTheme, mode]);

  return (
    <ThemeContext.Provider value={themeProviderValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
