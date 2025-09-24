
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio, Headphones } from 'lucide-react';
import { getCurrentProgram } from '@/data/scheduleData';

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentShow, setCurrentShow] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);

  const streamUrl = "https://stream.zeno.f/qdgq60qkb3gvv";

  // Update current show every minute
  useEffect(() => {
    const updateCurrentShow = () => {
      setCurrentShow(getCurrentProgram());
    };
    
    updateCurrentShow();
    const interval = setInterval(updateCurrentShow, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Listen for video play events and pause radio
  useEffect(() => {
    const handleVideoPlay = () => {
      if (isPlaying && audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    // Listen for YouTube video events
    window.addEventListener('message', (event) => {
      if (event.data && typeof event.data === 'string') {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'video-play' || (data.info && data.info.playerState === 1)) {
            handleVideoPlay();
          }
        } catch (e) {
          // Ignore parsing errors
        }
      }
    });

    // Also check for any iframe that might contain a video
    const observer = new MutationObserver(() => {
      const iframes = document.querySelectorAll('iframe[src*="youtube.com/embed"]');
      if (iframes.length > 0) {
        handleVideoPlay();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [isPlaying]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Erreur lors de la lecture:', error);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  return (
    <div className="radio-sticky p-3 md:p-4 shadow-lg">
      <audio
        ref={audioRef}
        src={streamUrl}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => console.error('Erreur audio:', e)}
      />
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Info émission */}
        <div className="flex items-center space-x-2 md:space-x-3 text-white min-w-0 flex-1">
          <div className={`p-1.5 md:p-2 rounded-full bg-white/20 ${isPlaying ? 'animate-pulse-radio' : ''}`}>
            <Radio className="h-4 w-4 md:h-5 md:w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs md:text-sm font-medium truncate">{currentShow}</p>
            <p className="text-xs opacity-80">
              {isPlaying ? '🔴 En direct' : '⏸️ En pause'}
            </p>
          </div>
        </div>

        {/* Contrôles */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Bouton Play/Pause */}
          <button
            onClick={togglePlay}
            className="p-2 md:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 hover:scale-105"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 md:h-6 md:w-6 text-white" />
            ) : (
              <Play className="h-5 w-5 md:h-6 md:w-6 text-white ml-0.5" />
            )}
          </button>

          {/* Contrôles de volume (desktop) */}
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="h-4 w-4 md:h-5 md:w-5 text-white" />
              ) : (
                <Volume2 className="h-4 w-4 md:h-5 md:w-5 text-white" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-16 md:w-20 h-2 bg-white/20 rounded-lg appearance-none slider"
            />
          </div>

          {/* Indicateur live */}
          <div className="hidden md:flex items-center space-x-1 bg-white/20 px-2 md:px-3 py-1 rounded-full">
            <Headphones className="h-3 w-3 md:h-4 md:w-4 text-white" />
            <span className="text-xs font-medium text-white">LIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;
