import React from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import {Box} from "@mui/material"

import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Navbar from './Comonents/Navbar'
import Footer from './Comonents/Footer'

function App() {
  return (
    <Box  sx={{ widtg: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App