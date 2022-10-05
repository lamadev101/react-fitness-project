import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`} >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"  />

      <Stack direction="row">
        <Button sx={{ml: '21px', color: '#fff', backgroundColor: '#ffa9a9', fontSize: '12px', borderRadius:'10px', textTrasform: 'capitalize'}}>{exercise.bodyPart}</Button>
        <Button sx={{ml: '21px', color: '#fff', backgroundColor: '#fcc757', fontSize: '12px', borderRadius:'10px', textTrasform: 'capitalize'}}>{exercise.target}</Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold">{exercise.name}</Typography>
    </Link>
  );
}

export default ExerciseCard;
