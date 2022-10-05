import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';

function App() {
  return (
    <Box width="400px" sx={{ width: {xl: "1488px"}}} m="auto" className='dark'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="exercise/:id" element={<ExerciseDetails/>} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
