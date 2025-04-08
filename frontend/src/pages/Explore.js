import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom color="text.primary">
          Explore Hono Technology
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Discover how we’re shaping the future of IT with innovative solutions and Zvertex AI integration.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" color="primary">Cutting-Edge Services</Typography>
                <Typography variant="body2" color="text.secondary">
                  From app development to cloud computing, explore our wide range of services designed to empower you.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" color="primary">Zvertex AI Partnership</Typography>
                <Typography variant="body2" color="text.secondary">
                  Leverage AI-driven insights and solutions through our collaboration with Zvertex AI.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" color="primary">Career Opportunities</Typography>
                <Typography variant="body2" color="text.secondary">
                  Join our team and work on futuristic projects that redefine technology.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h4" gutterBottom color="text.primary">
            Ready to Collaborate?
          </Typography>
          <Button variant="contained" color="secondary" component={Link} to="/contact" size="large">
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Explore;