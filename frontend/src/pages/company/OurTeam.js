import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const OurTeam = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Our Team
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Meet the passionate experts at Hono Technology. Our diverse team combines technical prowess with innovative thinking, amplified by Zvertex AI collaboration.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Who We Are
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Skilled developers, engineers, and consultants.<br />
          - Leaders in AI and IT innovation.<br />
          - Committed to your success.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Want to meet us? Get in touch!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OurTeam;