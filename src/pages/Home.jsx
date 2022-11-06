<<<<<<< HEAD
import { Box } from '@mui/material';
import React, { useState } from 'react';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState(['all']);
=======
import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";

const Home = ({ scrollToRef }) => {
  const [bodyPart, setBodyPart] = useState(["all"]);
>>>>>>> 60b22894082861f3015e0e36346c1d18f4e0b1a4
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
<<<<<<< HEAD
=======
        scrollToRef={scrollToRef}
>>>>>>> 60b22894082861f3015e0e36346c1d18f4e0b1a4
      />
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
<<<<<<< HEAD
=======
        scrollToRef={scrollToRef}
>>>>>>> 60b22894082861f3015e0e36346c1d18f4e0b1a4
      />
    </Box>
  );
};

export default Home;
