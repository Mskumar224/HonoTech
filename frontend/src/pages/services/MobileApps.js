import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const MobileApps = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Mobile Apps
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Build engaging mobile apps with Hono Technology. Zvertex AI adds smart features to captivate your users.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Use Case: Fitness App
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A fitness brand grew its user base by 60% with our AI-personalized mobile app, offering tailored workouts.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Cross-platform app expertise.<br />
          - AI-driven personalization.<br />
          - User-centric design.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Create your mobile app now!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default MobileApps;