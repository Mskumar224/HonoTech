import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const Contact = () => {
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
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>Contact Us</Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Reach out to us for inquiries, support, or collaboration opportunities.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={5}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
            Submit Inquiry
          </Button>
        </form>
        {status && (
          <Typography sx={{ mt: 2, color: status.includes('Failed') ? 'red' : 'green', textAlign: 'center' }}>
            {status}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Contact;