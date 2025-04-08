import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#800020' }, // Burgundy
    secondary: { main: '#FFFFFF' }, // White
    background: { default: '#FFFFFF', paper: '#FFFFFF' }, // White for both
    text: { primary: '#800020', secondary: '#800020' }, // Burgundy for all text
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: { fontWeight: 700, fontSize: '3.5rem', letterSpacing: '-0.02em', color: '#800020' },
    h2: { fontWeight: 700, fontSize: '2.5rem', letterSpacing: '-0.01em', color: '#800020' },
    h4: { fontWeight: 600, fontSize: '1.75rem', color: '#800020' },
    h6: { fontWeight: 600, fontSize: '1.25rem', color: '#800020' },
    body1: { fontSize: '1rem', fontWeight: 400, color: '#800020' },
    body2: { fontSize: '0.875rem', fontWeight: 400, color: '#800020' }, // No secondary color, all Burgundy
    button: { textTransform: 'none', fontWeight: 600, fontSize: '1rem' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '10px 20px',
          boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          color: '#FFFFFF', // White text
          backgroundColor: '#800020', // Burgundy background
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-1px)',
            backgroundColor: '#800020', // No color change on hover, stays Burgundy
            opacity: 0.9, // Subtle opacity shift for hover effect
          },
        },
        outlined: {
          color: '#800020', // Burgundy text
          borderColor: '#800020', // Burgundy border
          backgroundColor: '#FFFFFF', // White background
          '&:hover': {
            backgroundColor: '#FFFFFF', // Stays White
            borderColor: '#800020',
            opacity: 0.9, // Subtle opacity shift
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease',
          backgroundColor: '#FFFFFF', // White cards
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF', // Stays White
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#800020', // Burgundy header
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#800020', // Burgundy text
          backgroundColor: '#FFFFFF', // White background
          '&:hover': {
            backgroundColor: '#FFFFFF', // Stays White
            opacity: 0.9, // Subtle opacity shift
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#800020', // All text is Burgundy
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#800020', // Burgundy for links
          '&:hover': {
            color: '#800020', // Stays Burgundy
            opacity: 0.9, // Subtle opacity shift
          },
        },
      },
    },
  },
});

export default theme;