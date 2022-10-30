import { Box } from '@mui/material';
import React, { useState } from 'react';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px"></Box>
  );
};

export default Exercises;
