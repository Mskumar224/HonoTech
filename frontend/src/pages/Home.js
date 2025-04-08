import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <HeroSection />
    </Box>
  );
};

export default Home;