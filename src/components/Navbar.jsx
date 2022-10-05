import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sm: '122px', sx: '40px'}, pt: {sm: '32px', sx: '20px'}, alignItems: 'center', justifyContent: "none"}} px="20px">
      <Link to="/">
        <img src={Logo} alt="Logo" style={{width: '100px', height: '100px', margin: '0 20px'}} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{textDecoration: 'none', color: "#3A1212", borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a href="#ecercises" style={{textDecoration: 'none', color: "#3A1212"}}>Exercises</a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
