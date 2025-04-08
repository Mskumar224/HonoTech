import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom color="text.primary">
          About Hono Technology
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
          At Hono Technology, we’re more than an IT solutions provider—we’re your partner in progress. With a deep commitment to innovation and excellence, we harness the power of Zvertex AI to deliver transformative solutions for individuals and businesses alike.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Our Mission
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          To empower our clients with cutting-edge technology that drives growth, enhances careers, and builds a sustainable future.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Our Future Goals
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          - Expand our AI-driven offerings to revolutionize industries.<br />
          - Foster a global community of tech talent through education and opportunity.<br />
          - Lead the way in sustainable IT practices for a greener tomorrow.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Our Deeds
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          From developing robust applications to securing enterprise infrastructures, we’ve helped countless clients achieve their goals. Our partnership with Zvertex AI amplifies our impact, delivering intelligent solutions that matter.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" color="secondary" component={Link} to="/contact" size="large">
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;