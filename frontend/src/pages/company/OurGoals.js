import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const OurGoals = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Our Goals
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          At Hono Technology, our goals are ambitious yet grounded in our commitment to excellence and innovation. We aim to redefine the IT landscape by integrating Zvertex AI into every solution we offer.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Key Objectives
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Pioneer AI-driven IT solutions for global impact.<br />
          - Empower individuals and businesses with accessible technology.<br />
          - Achieve carbon-neutral operations by 2030.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Want to learn more about our vision? Get in touch!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            href="mailto:Hr@honotech.com"
            size="large"
          >
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OurGoals;