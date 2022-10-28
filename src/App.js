import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';

import './App.css';

const App = () => {
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      {/* fe */}
      <Footer />
    </Box>
  );
};

export default App;
