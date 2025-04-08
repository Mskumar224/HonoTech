import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AppDevelopment = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: 'background.default', py: 12, minHeight: '100vh' }}>
      <Container>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate(-1)}
          sx={{ mb: 4 }}
        >
          Back
        </Button>
        <Typography variant="h2" gutterBottom>
          App Development
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          At Hono Technology, our app development services create seamless, user-friendly applications tailored to your needs. Whether you’re an individual launching a personal project or a business scaling operations, we deliver high-performance apps powered by Zvertex AI for smarter functionality.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Use Case: E-Commerce Platform
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          A retail client approached us to build a mobile app to boost their online sales. We developed a custom solution with AI-driven product recommendations, secure payment integration, and real-time inventory updates. The result? A 40% increase in customer engagement and a streamlined shopping experience.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" sx={{ mb: 6 }}>
          - Expertise in native and cross-platform development.<br />
          - AI-enhanced features for a competitive edge.<br />
          - End-to-end support from concept to launch.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Ready to bring your app idea to life? Reach out to us!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="mailto:Hr@honotech.com"
            size="large"
          >
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AppDevelopment;