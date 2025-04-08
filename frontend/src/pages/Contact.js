import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#FFFFFF', py: 12, minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Button
          variant="outlined"
          onClick={() => navigate(-1)}
          sx={{ mb: 4 }}
        >
          Back
        </Button>
        <Typography variant="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Reach out to us for any inquiries or support. We’re here to help you succeed with our IT solutions.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Email:</strong>{' '}
          <a href="mailto:Hr@honotech.com" style={{ color: '#00AEEF' }}>
            Hr@honotech.com
          </a>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Phone:</strong> +1 737-239-0920
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>Address:</strong> 5900 Balcones Dr #16790, Austin, Texas 78731
        </Typography>
        <Button variant="contained" href="mailto:Hr@honotech.com">
          Send Email
        </Button>
      </Container>
    </Box>
  );
};

export default Contact;