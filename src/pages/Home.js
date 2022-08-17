import React,{useState} from "react"
import {Box} from '@mui/material'

import HeroBanner from "../Comonents/HeroBanner"
import SearchExercises from "../Comonents/SearchExercises"
import Exercises from "../Comonents/Exercises"

function Home({data}) {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
}

export default Home;