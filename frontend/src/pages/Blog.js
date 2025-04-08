import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Blog = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom color="text.primary">
          Hono Technology Blog
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Real stories of how our services transform lives and businesses.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" color="primary">Scaling with Cloud Computing</Typography>
                <Typography variant="body2" color="text.secondary">
                  A startup used our cloud solutions to handle a 300% traffic surge during their product launch, ensuring zero downtime.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" color="primary">Securing Data with IT Security</Typography>
                <Typography variant="body2" color="text.secondary">
                  A financial client avoided a major breach thanks to our proactive security measures, saving millions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" color="primary">Mobile Apps for Growth</Typography>
                <Typography variant="body2" color="text.secondary">
                  An entrepreneur’s app, built by us, reached 50,000 downloads in its first month with AI-driven features.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;