import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import HeroBannerImg from '../assets/banner1.png';

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '200px', xs:'70px'}, ml: {sm: '50px'}}} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg: '44px', xs: '40px'}}}>Sweat, Smile <br/> and Repeat</Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>Check out the most effective exercises</Typography>
      <Button variant="contained" color="error" href='#exercises'>Explore Exercises</Button>
      <Typography fontSize="200px" fontWeight={600} color="#ff2625" sx={{opacity: 0.1, display: {lg: 'block', xs: 'none' }}}>Exercise</Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img"/>
    </Box>
  );
}

export default HeroBanner;
