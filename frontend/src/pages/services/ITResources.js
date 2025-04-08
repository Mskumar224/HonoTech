import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const ITResources = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          IT-Resources
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Hono Technology provides top-tier IT resources to support your projects. From skilled professionals to cutting-edge tools, we ensure you have everything needed to succeed, enhanced by Zvertex AI capabilities.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Use Case: Startup Acceleration
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A tech startup lacked in-house IT expertise. We provided a dedicated team and AI tools, accelerating their product launch by 50%.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Access to expert IT talent.<br />
          - AI-enhanced resource management.<br />
          - Flexible support tailored to your needs.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Need IT resources? Let’s talk!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ITResources;