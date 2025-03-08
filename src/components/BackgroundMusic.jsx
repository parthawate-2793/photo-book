import React, { useState, useEffect } from 'react';
import '../styles/BackgroundMusic.css';

const BackgroundMusic = ({ audioFile }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(audioFile));

  useEffect(() => {
    audio.loop = true;
  }, [audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      className="music-control" 
      onClick={togglePlay}
    >
      {isPlaying ? '🔇 Mute' : '🔊 Play Music'}
    </button>
  );
};

export default BackgroundMusic;