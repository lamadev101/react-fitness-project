import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import {ExerciseOption, fetchData} from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top: 1800, behavior: 'smooth'});
  }

  useEffect(() => {
    const fetchExercisesData = async ()=>{
      let exercisesData = [];

      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', ExerciseOption);
      }else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, ExerciseOption);
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Box id="exercises" sx={{mt:{lg: '110px'}}} mt="50px" p="20px">
      <Typography variant="h3" mb="46px" color="teal" textAlign="center">Showing Results</Typography>
      <Stack direction="row" sx={{display: 'flex',justifyContent:"center", alignItems:"center", gap:"10px", flexWrap: 'wrap'}}>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (<Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} size="large" />)}
      </Stack>
    </Box>
  );
}

export default Exercises;
