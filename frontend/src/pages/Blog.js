import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: 'background.default', py: 12, minHeight: '100vh', textAlign: 'center' }}>
      <Container>
        <Button variant="outlined" color="primary" onClick={() => navigate(-1)} sx={{ mb: 4 }}>
          Back
        </Button>
        <Typography variant="h2" gutterBottom>
          Blog
        </Typography>
        <Typography variant="h4" sx={{ mb: 4, color: 'text.secondary' }}>
          Feature Coming Soon!
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}>
          Our blog is under construction! Soon, you’ll find real-world success stories, tech insights, and updates from Hono Technology and our partnership with Zvertex AI. Check back later!
        </Typography>
        <Button variant="contained" color="accent" href="mailto:Hr@honotech.com" size="large">
          Contact Us for Updates
        </Button>
      </Container>
    </Box>
  );
};

export default Blog;