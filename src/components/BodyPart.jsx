import { Stack, Typography } from '@mui/material';
import React from 'react';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack type="button" alignItems="center" justifyContent="center" className="bodyPart-card" sx={{borderTop: bodyPart === item ? '4px solid #ff2625': '', backgroundColor: '#f1f1f1', borderBottomLeftRadius: '20px', width: '270px', height: '280px', cursor: 'pointer',gap: '47px'}} onClick={() =>{setBodyPart(item); window.scrollTo({top: 1800, left:100, behavior: 'smooth'});}}>
        <img src={Icon} alt="dumbell" style={{width:'60px', height:'60px'}} />

        <Typography color="#3A1212" fontSize="24px" fontWeight="bold" textTransform="capitalize">{item}</Typography>
    </Stack>
  );
}

export default BodyPart;
