import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const ITSecurity = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          IT Security
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Protect your digital assets with our IT security services. Zvertex AI enhances threat detection and response for unbeatable security.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Use Case: Financial Security
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A bank avoided a cyberattack with our AI-powered security, safeguarding sensitive data and customer trust.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Advanced AI threat detection.<br />
          - Comprehensive security audits.<br />
          - Rapid response to incidents.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Secure your future with us!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ITSecurity;