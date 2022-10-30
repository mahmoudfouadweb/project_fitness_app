import { Box } from '@mui/material';
import React, { useState } from 'react';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  const [bodyParts, setBodyParts] = useState(['all']);
  const [exercises, setExercises] = useState([]);
  console.log('exercises', exercises);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyParts={bodyParts}
        setBodyParts={setBodyParts}
        setExercises={setExercises}
      />
      <Exercises
        bodyParts={bodyParts}
        setBodyParts={setBodyParts}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;
