import { createTheme } from '@mui/material';
import { CSSObject } from '@mui/system';

const commonThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'lighter',
          textTransform: 'none' as CSSObject['textTransform'],
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: 'light',
    background: {
      default: 'rgb(255, 255, 255)',
      paper: 'rgb(249, 249, 249)',
    },
    text: {
      primary: 'rgb(32, 32, 32)',
      secondary: 'rgb(153, 153, 153)',
    },
    primary: {
      main: 'rgb(99, 126, 96)',
    },
    error: {
      main: 'rgb(220, 76, 62)',
    },
    divider: 'rgb(230, 230, 230)',
  },
});

export const darkTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(33, 33, 33)',
      paper: 'rgb(23, 23, 23)',
    },
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(230, 230, 230)',
    },
    primary: {
      main: 'rgb(99, 126, 96)',
    },
    error: {
      main: 'rgb(220, 76, 62)',
    },
    divider: 'rgb(230, 230, 230)',
  },
});
