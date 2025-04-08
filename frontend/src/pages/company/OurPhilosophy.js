import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const OurPhilosophy = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Our Philosophy
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          At Hono Technology, we believe technology should empower, not complicate. Our philosophy drives us to deliver simple, impactful solutions with Zvertex AI at the core.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Core Beliefs
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Innovation with purpose.<br />
          - Client success above all.<br />
          - Sustainability through tech.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Curious about our approach? Contact us!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OurPhilosophy;