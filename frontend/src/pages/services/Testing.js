import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Testing = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Testing
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Ensure flawless performance with our testing services. Zvertex AI automates and enhances testing for superior quality.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Use Case: App Launch
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A client launched a bug-free app thanks to our AI-driven testing, achieving a 5-star rating on day one.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Automated testing with AI.<br />
          - Thorough quality checks.<br />
          - Fast turnaround times.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Test with the best—contact us!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Testing;