import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#263238' }, // Dark Slate Gray-Blue - 60%
    secondary: { main: '#00BCD4' }, // Vibrant Cyan - 30%
    tertiary: { main: '#E0E0E0' }, // Light Gray - 10%
    background: { default: '#FFFFFF', paper: '#FFFFFF' }, // White for backgrounds
    text: { primary: '#263238', secondary: '#263238' }, // Dark Slate Gray-Blue text
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: { fontWeight: 700, fontSize: '3.5rem', letterSpacing: '-0.02em', color: '#263238' },
    h2: { fontWeight: 700, fontSize: '2.5rem', letterSpacing: '-0.01em', color: '#263238' },
    h4: { fontWeight: 600, fontSize: '1.75rem', color: '#263238' },
    h6: { fontWeight: 600, fontSize: '1.25rem', color: '#263238' },
    body1: { fontSize: '1rem', fontWeight: 400, color: '#263238' },
    body2: { fontSize: '0.875rem', fontWeight: 400, color: '#263238' },
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
          color: '#FFFFFF',
          backgroundColor: '#263238', // Dominant Dark Slate Gray-Blue
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-1px)',
            backgroundColor: '#263238',
            opacity: 0.9,
          },
        },
        outlined: {
          color: '#263238',
          borderColor: '#E0E0E0', // Light Gray accent
          backgroundColor: '#00BCD4', // Secondary Cyan
          '&:hover': {
            backgroundColor: '#E0E0E0', // Light Gray on hover
            borderColor: '#263238',
            opacity: 0.9,
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
          backgroundColor: '#FFFFFF', // White background
          border: '1px solid #E0E0E0', // Light Gray accent
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#263238', // Dominant Dark Slate Gray-Blue
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#263238',
          backgroundColor: '#00BCD4', // Secondary Cyan
          '&:hover': {
            backgroundColor: '#E0E0E0', // Light Gray accent
            opacity: 0.9,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#263238', // Dominant Dark Slate Gray-Blue
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#263238', // Dominant Dark Slate Gray-Blue
          '&:hover': {
            color: '#00BCD4', // Secondary Cyan on hover
          },
        },
      },
    },
  },
});

export default theme;