import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Careers = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: 'background.default', py: 12, minHeight: '100vh', textAlign: 'center' }}>
      <Container>
        <Button variant="outlined" color="primary" onClick={() => navigate(-1)} sx={{ mb: 4 }}>
          Back
        </Button>
        <Typography variant="h2" gutterBottom>
          Careers
        </Typography>
        <Typography variant="h4" sx={{ mb: 4, color: 'text.secondary' }}>
          Feature Coming Soon!
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}>
          We’re working hard to bring you exciting career opportunities at Hono Technology. Stay tuned for updates on how you can join our team and work on cutting-edge projects with Zvertex AI.
        </Typography>
        <Button variant="contained" color="accent" href="mailto:Hr@honotech.com" size="large">
          Contact Us for Inquiries
        </Button>
      </Container>
    </Box>
  );
};

export default Careers;