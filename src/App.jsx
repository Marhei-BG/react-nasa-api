import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ApodPage from './components/ApodPage';
import MarsPage from './components/MarsPage';
import AsteroidsPage from './components/AsteroidsPage';
import NasaImageSearch from './components/NasaImageSearch';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ApodPage />} />
          <Route path="/mars-photos" element={<MarsPage />} />
          <Route path="/asteroids" element={<AsteroidsPage />} />
          <Route path="/nasa-images" element={<NasaImageSearch />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;