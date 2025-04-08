import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const OffshoreSoftwareDevelopment = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Offshore Software Development
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Leverage our offshore development teams for cost-effective, high-quality software. Zvertex AI ensures seamless collaboration and results.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Use Case: Global Product
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A company cut development costs by 40% with our offshore team, launching a global product on time.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Expert offshore talent.<br />
          - AI-driven project management.<br />
          - Transparent communication.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Go offshore with us—contact now!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OffshoreSoftwareDevelopment;