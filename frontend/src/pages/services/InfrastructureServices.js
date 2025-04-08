import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const InfrastructureServices = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Infrastructure Services
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          We design and manage IT infrastructure that scales with your needs. Powered by Zvertex AI, our services ensure reliability and efficiency.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Use Case: Enterprise Migration
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A corporation moved to the cloud with our help. We optimized their infrastructure, reducing downtime by 60%.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Robust, scalable infrastructure.<br />
          - AI-driven optimization.<br />
          - 24/7 monitoring and support.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Upgrade your infrastructure today!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default InfrastructureServices;