import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/contact`, formData);
      setStatus(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message');
    }
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12 }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom color="text.primary">
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Let’s discuss how we can support your goals.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            margin="normal"
            required
            sx={{ bgcolor: 'white' }}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            margin="normal"
            required
            sx={{ bgcolor: 'white' }}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            required
            sx={{ bgcolor: 'white' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 3, width: '200px', mx: 'auto', display: 'block' }}
          >
            Send
          </Button>
        </form>
        {status && (
          <Typography
            sx={{ mt: 3, textAlign: 'center', color: status.includes('Failed') ? 'error.main' : 'accent.main' }}
          >
            {status}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default ContactForm;