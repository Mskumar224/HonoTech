import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFFFFF', // White background
        color: '#800020', // Burgundy text
        textAlign: 'center',
        py: 16, // Generous padding for breathing room
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '20%', // Subtle top gradient
          background: 'linear-gradient(to bottom, rgba(128, 0, 32, 0.1), transparent)', // Faint Burgundy fade
          zIndex: 1,
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '20%', // Subtle bottom gradient
          background: 'linear-gradient(to top, rgba(128, 0, 32, 0.1), transparent)', // Faint Burgundy fade
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
            fontWeight: 800, // Bold for impact
            fontSize: { xs: '2.5rem', md: '4.5rem' }, // Responsive and prominent
            letterSpacing: '0.02em', // Slight spacing for elegance
            lineHeight: 1.1,
            color: '#800020', // Burgundy
            textShadow: '0 2px 6px rgba(255, 255, 255, 0.5)', // White shadow for lift
          }}
        >
          Elevate Your Career and Business with Hono Technology
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500, // Medium weight for balance
            fontSize: { xs: '1.25rem', md: '1.75rem' }, // Responsive
            maxWidth: '800px',
            mx: 'auto',
            mb: 6, // Space before button
            lineHeight: 1.6, // Open and readable
            color: '#800020', // Burgundy
            textShadow: '0 1px 4px rgba(255, 255, 255, 0.4)', // Subtle White shadow
          }}
        >
          Partnered with Zvertex AI, we deliver cutting-edge IT solutions to empower individuals and businesses for success.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="https://zvertexai.com"
          target="_blank"
          sx={{
            bgcolor: '#800020', // Burgundy
            color: '#FFFFFF', // White text
            borderRadius: '40px', // More rounded for authenticity
            px: 6, // Wider button
            py: 2, // Taller button
            fontSize: '1.25rem', // Larger text
            fontWeight: 600,
            boxShadow: '0 6px 14px rgba(128, 0, 32, 0.2)', // Burgundy-toned shadow
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: '#800020', // Stays Burgundy
              boxShadow: '0 10px 20px rgba(128, 0, 32, 0.3)', // Enhanced shadow
              transform: 'translateY(-3px)', // Gentle lift
            },
          }}
        >
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;