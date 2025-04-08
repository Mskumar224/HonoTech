import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const WebDevelopment = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Web Development
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Create stunning, functional websites with our web development services. Zvertex AI adds smart features for a standout online presence.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Use Case: Brand Website
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A small business tripled its leads with our AI-enhanced website, featuring chatbots and analytics.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Responsive, modern designs.<br />
          - AI-powered interactivity.<br />
          - Fast, secure development.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Build your website with us!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default WebDevelopment;