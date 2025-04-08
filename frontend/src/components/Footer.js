import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#0F1C2E', color: '#DDE1E6', py: 8 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 800 }}>
              Hono Technology
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              5900 Balcones Dr #16790<br />
              Austin, Texas 78731<br />
              <Link href="tel:+17372390920" color="inherit">+1 737-239-0920</Link><br />
              <Link href="mailto:Hr@honotech.com" color="inherit">Hr@honotech.com</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 800 }}>
              Services
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              <Link href="#" color="inherit">App Development</Link> •{' '}
              <Link href="#" color="inherit">Data Engineering</Link><br />
              <Link href="#" color="inherit">IT Consulting</Link> •{' '}
              <Link href="#" color="inherit">Cloud Computing</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 800 }}>
              Connect With Us
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Link href="https://www.linkedin.com/company/honotechnology/" color="inherit" target="_blank" sx={{ mr: 2 }}>
                <LinkedIn />
              </Link>
              <Link href="https://facebook.com" color="inherit" target="_blank" sx={{ mr: 2 }}>
                <Facebook />
              </Link>
              <Link href="https://instagram.com" color="inherit" target="_blank">
                <Instagram />
              </Link>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              <Link href="#" color="inherit">Privacy Policy</Link> |{' '}
              <Link href="#" color="inherit">Terms of Service</Link>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4, fontWeight: 400 }}>
          © 2023 Hono Technology. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;