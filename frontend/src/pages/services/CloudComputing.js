import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const CloudComputing = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Cloud Computing
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Scale effortlessly with our cloud computing services. Zvertex AI optimizes your cloud environment for performance and cost.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Use Case: E-Learning Platform
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          An education provider handled 10x user growth with our cloud solution, maintaining 99.9% uptime.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Flexible, secure cloud setups.<br />
          - AI-optimized resource use.<br />
          - Expert migration support.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Move to the cloud with us!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CloudComputing;