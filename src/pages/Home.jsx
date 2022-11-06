import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";

const Home = ({ scrollToRef }) => {
  const [bodyPart, setBodyPart] = useState(["all"]);
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
        scrollToRef={scrollToRef}
      />
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
        scrollToRef={scrollToRef}
      />
    </Box>
  );
};

export default Home;
