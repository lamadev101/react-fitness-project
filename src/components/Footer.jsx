import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/logo.png';

const Footer = () => (
  <Box mt="20px" className='footer'>
    <Stack sx={{ alignItems: 'center' }} flexWrap="wrap">
      <img src={Logo} alt="logo" style={{ width: '300px', height: '300px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" pb="20px">Made with ❤️ by Khatra Gym Center</Typography>
    <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '12px' } }} textAlign="center" pb="5px" borderTop="1px solid gray">&copy; 2022 Khatra Gym Center. All rights reserved.</Typography>
  </Box>
);

export default Footer;
