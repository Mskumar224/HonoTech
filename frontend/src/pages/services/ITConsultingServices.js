import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const ITConsultingServices = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          IT Consulting Services
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Our IT consulting services guide you through digital transformation. With Zvertex AI, we provide strategic insights tailored to your goals.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Use Case: Digital Strategy
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A mid-sized firm modernized their operations with our consulting, increasing efficiency by 35% using AI-driven strategies.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Expert guidance with AI insights.<br />
          - Customized IT roadmaps.<br />
          - Proven success across industries.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Transform your IT with us!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ITConsultingServices;