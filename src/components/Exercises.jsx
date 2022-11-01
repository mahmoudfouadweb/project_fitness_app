import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { allExercises } from '../utils/allExercises';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];
      // console.log(bodyPart);
      if (bodyPart === 'all') {
        // exerciseData = await fetchData(
        //   'https://exercisedb.p.rapidapi.com/exercises',
        //   exerciseOptions
        // );
        exerciseData = allExercises;
      } else {
        // exerciseData = await fetchData(
        //   `https://exercisedb.p.rapidapi.com/exercises/${bodyPart}`,
        //   exerciseOptions
        // );
        exerciseData = allExercises.filter(
          exercise => exercise.bodyPart == bodyPart
        );
      }
      setExercises(exerciseData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  // console.log(indexOfLastExercise, indexOfFirstExercise, currentExercises);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  // if (!exercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h3" sx={{ mb: '46px' }}>
        Showing Result
      </Typography>
      <Stack
        direction={'row'}
        sx={{
          gap: { lg: '110px', xs: '50px' },
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            size="large"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
