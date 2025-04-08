import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #00BCD4 30%, #263238 100%)', // Gradient with Cyan to Slate
        color: '#FFFFFF', // White text for contrast
        textAlign: 'center',
        py: 16,
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            maxWidth: '1000px',
            mx: 'auto',
            fontWeight: 900,
            fontSize: { xs: '2.5rem', md: '5rem' },
            letterSpacing: '-0.015em',
            lineHeight: 1.1,
            color: '#FFFFFF',
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            animation: 'fadeIn 1.5s ease-in-out',
          }}
        >
          Unleash Your Potential with Hono Technology
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '1.25rem', md: '2rem' },
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
            lineHeight: 1.5,
            color: '#FFFFFF',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            animation: 'slideUp 2s ease-in-out',
          }}
        >
          Teaming up with Zvertex AI, we craft innovative IT solutions to supercharge your career and skyrocket your business to new heights.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="https://zvertexai.com"
            target="_blank"
            sx={{
              bgcolor: '#263238', // Dominant Slate
              color: '#FFFFFF',
              borderRadius: '50px',
              px: 6,
              py: 2,
              fontSize: '1.25rem',
              fontWeight: 700,
              boxShadow: '0 8px 20px rgba(38, 50, 56, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#263238',
                boxShadow: '0 12px 30px rgba(38, 50, 56, 0.5)',
                transform: 'scale(1.05)',
              },
            }}
          >
            Discover More
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            component="a"
            href="/contact"
            sx={{
              borderColor: '#FFFFFF',
              color: '#FFFFFF',
              borderRadius: '50px',
              px: 6,
              py: 2,
              fontSize: '1.25rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#FFFFFF',
                color: '#263238',
                borderColor: '#FFFFFF',
                transform: 'scale(1.05)',
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
      {/* CSS Animation Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection;