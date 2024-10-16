export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

export interface ThemeContextProps {
  toggleTheme: () => void;
  mode: ThemeMode;
}
