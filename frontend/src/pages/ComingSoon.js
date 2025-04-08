import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: 'background.default', py: 12, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Button variant="outlined" color="primary" onClick={() => navigate(-1)} sx={{ mb: 4 }}>
          Back
        </Button>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, color: '#003087' }}>
          Coming Soon
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 500, mb: 4, color: '#003087' }}>
          We’re Working Hard to Bring You Something Great!
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, maxWidth: '600px', mx: 'auto', color: '#003087' }}>
          This page is under construction. Stay tuned for exciting updates as we craft a professional and authentic experience tailored to elevate your journey with Hono Technology. Check back soon or reach out to us for more information!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="mailto:Hr@honotech.com"
          size="large"
          sx={{ bgcolor: '#003087', color: '#FFFFFF' }}
        >
          Contact Us
        </Button>
      </Container>
    </Box>
  );
};

export default ComingSoon;