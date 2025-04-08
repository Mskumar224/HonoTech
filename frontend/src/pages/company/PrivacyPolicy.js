import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Privacy Policy
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Hono Technology values your privacy. Our policies ensure your data is secure, with Zvertex AI enhancing our protection measures.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Our Commitment
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Strict data protection standards.<br />
          - Transparent usage policies.<br />
          - AI-driven security enhancements.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Questions about privacy? Reach out!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;