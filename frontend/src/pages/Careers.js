import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';

const Careers = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom color="text.primary">
          Careers at Hono Technology
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Join us to work on groundbreaking projects that shape the future of technology, powered by Zvertex AI.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Futuristic Projects
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" color="primary">AI-Powered Healthcare</Typography>
                <Typography variant="body2" color="text.secondary">
                  Developing smart diagnostics and patient care systems.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" color="primary">Sustainable Cloud Solutions</Typography>
                <Typography variant="body2" color="text.secondary">
                  Building eco-friendly infrastructure for global enterprises.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" color="primary">Next-Gen Mobile Apps</Typography>
                <Typography variant="body2" color="text.secondary">
                  Creating intuitive apps with AI-driven personalization.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h4" gutterBottom color="text.primary">
          Opportunities
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          - **Internships**: Gain hands-on experience with real-world projects.<br />
          - **Part-Time**: Flexible roles for students and professionals.<br />
          - **Full-Time**: Lead innovation with a dynamic team.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Ready to join us? Apply now!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            href="mailto:Hr@honotech.com?subject=Career%20Application"
            size="large"
          >
            Apply Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Careers;