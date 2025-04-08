import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const QualityAssurance = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Quality Assurance
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Deliver perfection with our quality assurance services. Zvertex AI ensures your products meet the highest standards.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Use Case: Software Release
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A tech firm released error-free software with our QA, earning top user reviews and trust.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - AI-enhanced QA processes.<br />
          - Rigorous testing standards.<br />
          - Fast, reliable results.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Ensure quality—contact us!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default QualityAssurance;