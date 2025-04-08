import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const FullStackDevelopment = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Full Stack Development
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Our full stack development services cover front-end to back-end, delivering robust, scalable solutions. With Zvertex AI, we add intelligent features to enhance user experiences.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Use Case: SaaS Platform
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A client needed a SaaS tool for their team. We built a full stack solution with AI-driven automation, cutting operational costs by 30%.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - End-to-end development expertise.<br />
          - AI integration for smarter apps.<br />
          - Seamless deployment and support.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Ready to build your solution? Reach out!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FullStackDevelopment;