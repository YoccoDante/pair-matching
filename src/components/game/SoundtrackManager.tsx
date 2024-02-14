// Soundtrack.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useSettingsContext } from '../../contexts/SettingsContext';

const SoundtrackManager: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
  const { playMusic } = useSettingsContext();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handlePlay);

    return () => {
      document.removeEventListener('click', handlePlay);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      if (playMusic) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playMusic, isPlaying]);

  return (
    <audio ref={audioRef} src="/clown-soundtrack.mp3" loop>
      Your browser does not support the audio element.
    </audio>
  );
};

export default SoundtrackManager;