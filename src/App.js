<<<<<<< HEAD
import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';

import './App.css';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
=======
import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

import "./App.css";

const App = () => {
  const [isHidden, setIsHidden] = useState(false);
  const scrollToRef = useRef();
  const url = window.location.pathname;

  useEffect(() => {
    if (!url.includes("exercise")) setIsHidden(true);
  }, [url]);
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar
        scrollToRef={scrollToRef}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      />
      <Routes>
        <Route path="/" element={<Home scrollToRef={scrollToRef} />} />
>>>>>>> 60b22894082861f3015e0e36346c1d18f4e0b1a4
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
