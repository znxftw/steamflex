import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import './index.css';
import App from './App.tsx';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0b0e14',
      paper: 'rgba(255, 255, 255, 0.03)',
    },
    primary: {
      main: '#00d2ff',
    },
    text: {
      primary: '#f8f9fa',
      secondary: '#a1a1aa',
    },
  },
  typography: {
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    button: {
      textTransform: 'lowercase',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-image: 
            radial-gradient(circle at 15% 50%, rgba(58, 141, 245, 0.15), transparent 25%),
            radial-gradient(circle at 85% 30%, rgba(0, 210, 255, 0.1), transparent 25%);
          background-attachment: fixed;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'lowercase',
        },
      },
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
