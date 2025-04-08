import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const ApplicationManagement = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Application Management
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Keep your applications running smoothly with our management services. Zvertex AI enhances performance and predicts issues before they arise.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Use Case: Healthcare App
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A hospital relied on us to manage their patient app. Our AI tools reduced crashes by 80%, improving care delivery.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Proactive maintenance with AI.<br />
          - Comprehensive app support.<br />
          - Cost-effective solutions.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Need app management? Contact us!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ApplicationManagement;