import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: 'background.default', py: 12, minHeight: '100vh' }}>
      <Container>
        <Button variant="outlined" color="primary" onClick={() => navigate(-1)} sx={{ mb: 4 }}>
          Back
        </Button>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Hono Technology is committed to delivering innovative IT solutions powered by Zvertex AI. Based in Austin, Texas, we serve clients worldwide with a focus on excellence and empowerment.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;