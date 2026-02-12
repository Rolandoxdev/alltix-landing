import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B00', // Alltix primary orange
    },
    background: {
      default: '#FFFFFF', // Pure white background
      paper: '#F5F5F5', // Cards and accent background
    },
    text: {
      primary: '#1A1A1A', // Primary text/headings
      secondary: '#666666', // Secondary text
    },
  },
  typography: {
    // Base fonts
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    
    // Headings use Plus Jakarta Sans
    h1: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem', // 56px
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: '#1A1A1A',
    },
    h2: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '3rem', // 48px
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: '#1A1A1A',
    },
    h3: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem', // 40px
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: '#1A1A1A',
    },
    h4: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '2rem', // 32px
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: '#1A1A1A',
    },
    h5: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem', // 24px
      lineHeight: 1.4,
      color: '#1A1A1A',
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem', // 20px
      lineHeight: 1.5,
      color: '#1A1A1A',
    },
    // Body text
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem', // 16px
      lineHeight: 1.6,
      fontWeight: 400,
      color: '#1A1A1A',
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem', // 14px
      lineHeight: 1.6,
      fontWeight: 400,
      color: '#666666',
    },
    // Buttons
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
  // Breakpoints for responsive design
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
