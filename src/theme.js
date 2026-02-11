import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E3A8A', // azul SaaS profesional
    },
    background: {
      default: '#F9FAFB',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

export default theme;
