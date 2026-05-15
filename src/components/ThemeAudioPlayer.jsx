import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function ThemeAudioPlayer() {
  const { isDarkMode } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Define the audio sources (ensure you add these files to public/audio folder)
  const darkThemeAudio = "/audio/dark.mpeg";
  const lightThemeAudio = "/audio/light.mpeg";

  useEffect(() => {
    if (audioRef.current) {
      const currentSrc = isDarkMode ? darkThemeAudio : lightThemeAudio;
      
      // Change src and play if the source is different
      if (!audioRef.current.src.endsWith(currentSrc)) {
        const wasPlaying = isPlaying;
        audioRef.current.src = currentSrc;
        if (wasPlaying) {
          audioRef.current.play().catch(e => {
            console.log("Audio play failed:", e);
            setIsPlaying(false);
          });
        }
      }
    }
  }, [isDarkMode, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(e => {
        console.log("Audio play failed:", e);
        alert("Please place 'dark-theme.mp3' and 'light-theme.mp3' inside the public/audio folder.");
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 glass p-3 rounded-full shadow-lg border border-slate-900/10 dark:border-white/10 transition-all hover:scale-105 group">
      <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500 relative overflow-hidden">
        {isPlaying && (
          <div className="absolute inset-0 bg-brand-500/20 animate-pulse rounded-full"></div>
        )}
        <Music size={18} className={isPlaying ? "animate-bounce" : ""} />
      </div>
      
      <div className="flex flex-col pr-2">
        <span className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
          {isDarkMode ? "Dark Theme" : "Light Theme"}
        </span>
        <span className="text-[10px] text-slate-500 dark:text-slate-600 dark:text-gray-400">
          {isPlaying ? "Playing..." : "Paused"}
        </span>
      </div>

      <button 
        onClick={togglePlay}
        className="w-10 h-10 rounded-full bg-brand-500 text-slate-900 dark:text-white flex items-center justify-center hover:bg-brand-600 transition-colors shadow-md ml-1"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
      </button>

      {/* Hidden audio element */}
      <audio ref={audioRef} loop />
    </div>
  );
}
