import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhotoBook from './components/PhotoBook';
import BackgroundMusic from './components/BackgroundMusic';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <BackgroundMusic audioFile="/song.mp3" />
      <PhotoBook />
    </div>
  );
}

export default App;