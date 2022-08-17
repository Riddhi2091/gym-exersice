import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// import { textTransform } from "@mui/system";
import { exerciseOptions, fetchData } from "../utils/fetchData"; 
import HorizontalScrollbar from "./HorizontalScrollbar";



export default function SearchExercises({setExercises,bodyPart,setBodyPart}) {

  const [search,setSearch] = useState("")
  const [bodyParts,setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async() => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      console.log(bodyPartsData);
      setBodyParts(['all',...bodyPartsData])
    }
    fetchExercisesData();
  },[])

  // Handlesearch
  const handleSearch = async() => {
    if(search) {
      const exercisesData = await fetchData
        ("https://exercisedb.p.rapidapi.com/exercises",exerciseOptions) 
      
        const searchedExercises = exercisesData.filter(
          (item) =>
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search)
        );

        setSearch('');
        setExercises(searchedExercises)

        // console.log(exercisesData);
       
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercies you <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700px", border: "none", borderRedius: "4px" },
            width: {lg:"700px", xs:"50vw"}, margin:"0 auto",
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
        type="submit"
          className="search-btn"
          onClick={handleSearch}
          sx={{ bgcolor: "#ff2625", color: "#fff", textTransform: "none",width: {lg:'175px',sx:'80px'}, fontSize: {lg: '20px',xs: '14px'},height:"56px",position:"absolute",right: '0'}}>
          Search</Button>
      </Box>
      <Box sx={{position:'relative',width: '100%',p:'200px'}}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  );
}
