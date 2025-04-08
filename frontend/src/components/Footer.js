import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#263238', color: '#FFFFFF', py: 8 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, color: '#FFFFFF' }}>
              Hono Technology
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 400, color: '#FFFFFF' }}>
              5900 Balcones Dr #16790<br />
              Austin, Texas 78731<br />
              <Link href="tel:+17372390920" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>+1 737-239-0920</Link><br />
              <Link href="mailto:Hr@honotech.com" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>Hr@honotech.com</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, color: '#FFFFFF' }}>
              Services
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 400, color: '#FFFFFF' }}>
              <Link href="/services/app-development" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>App Development</Link> •{' '}
              <Link href="/services/data-engineering-analysis" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>Data Engineering & Analysis</Link><br />
              <Link href="/services/it-resources" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>IT-Resources</Link> •{' '}
              <Link href="/services/full-stack-development" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>Full Stack Development</Link><br />
              <Link href="/services/infrastructure-services" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>Infrastructure Services</Link> •{' '}
              <Link href="/services/application-management" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>Application Management</Link><br />
              <Link href="/services/it-consulting-services" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>IT Consulting Services</Link> •{' '}
              <Link href="/services/it-security" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>IT Security</Link><br />
              <Link href="/services/testing" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>Testing</Link> •{' '}
              <Link href="/services/mobile-apps" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>Mobile Apps</Link><br />
              <Link href="/services/cloud-computing" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>Cloud Computing</Link> •{' '}
              <Link href="/services/quality-assurance" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>Quality Assurance</Link><br />
              <Link href="/services/offshore-software-development" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>Offshore Software Development</Link> •{' '}
              <Link href="/services/web-development" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>Web Development</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, color: '#FFFFFF' }}>
              Connect With Us
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Link href="https://www.linkedin.com/company/honotechnology/" target="_blank" sx={{ color: '#FFFFFF', mr: 2, '&:hover': { color: '#00BCD4' } }}>
                <LinkedIn />
              </Link>
              <Link href="https://facebook.com" target="_blank" sx={{ color: '#FFFFFF', mr: 2, '&:hover': { color: '#00BCD4' } }}>
                <Facebook />
              </Link>
              <Link href="https://instagram.com" target="_blank" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>
                <Instagram />
              </Link>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 400, color: '#FFFFFF' }}>
              <Link href="/company/privacy-policy" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>Privacy Policy</Link> |{' '}
              <Link href="#" sx={{ color: '#FFFFFF', '&:hover': { color: '#00BCD4' } }}>Terms of Service</Link>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4, fontWeight: 400, color: '#FFFFFF' }}>
          © 2023 Hono Technology. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;