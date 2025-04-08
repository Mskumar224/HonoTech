import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Container sx={{ py: 12 }}>
        {/* About Us */}
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography variant="h2" gutterBottom color="text.primary">
            About Hono Technology
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Hono Technology is your trusted partner in navigating the digital landscape. With our expertise and Zvertex AI integration, we deliver solutions that empower businesses to thrive.
          </Typography>
        </Box>

        {/* Services */}
        <Box sx={{ mb: 12 }}>
          <Typography variant="h2" gutterBottom align="center" color="text.primary">
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {[
              'App Development', 'Data Engineering & Analysis', 'IT-Resources', 'Full Stack Development',
              'Infrastructure Services', 'Application Management', 'IT Consulting Services', 'IT Security',
              'Testing', 'Mobile Apps', 'Cloud Computing', 'Quality Assurance', 'Offshore Software Development', 'Web Development'
            ].map((service) => (
              <Grid item xs={12} sm={6} md={3} key={service}>
                <Card sx={{ bgcolor: 'background.paper' }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      color="primary"
                      component={Link}
                      to={`/services/${service.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                    >
                      {service}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Tailored solutions for your needs.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials */}
        <Box sx={{ mb: 12, textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom color="text.primary">
            Client Feedback
          </Typography>
          <Card sx={{ maxWidth: '600px', mx: 'auto', p: 3, bgcolor: 'background.paper' }}>
            <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
              "Hono Technology’s solutions have been a game-changer for our operations."
            </Typography>
            <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
              - Michael Tran, COO
            </Typography>
          </Card>
        </Box>

        {/* Consulting Pitch */}
        <Box
          sx={{
            bgcolor: 'accent.main',
            color: '#FFFFFF',
            py: 10,
            textAlign: 'center',
            borderRadius: 3,
            mb: 12,
          }}
        >
          <Typography variant="h2" gutterBottom>
            Partner with the Best
          </Typography>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 400 }}>
            Expert IT consulting to fuel your success.
          </Typography>
          <Button variant="contained" color="secondary" component={Link} to="/contact" size="large">
            Start Now
          </Button>
        </Box>

        {/* Newsletter */}
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography variant="h4" gutterBottom color="text.primary">
            Stay Updated
          </Typography>
          <Box component="form" sx={{ maxWidth: '600px', mx: 'auto', display: 'flex', gap: 2 }}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: 'white' }}
            />
            <Button variant="contained" color="secondary" size="large">
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
      <ContactForm />
    </>
  );
};

export default Home;