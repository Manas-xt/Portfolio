'use client';

import { useEffect } from 'react';

interface LoadingSoundProps {
  isLoading: boolean;
  progress: number;
  isComplete: boolean;
}

export const useLoadingSound = ({ isLoading, progress, isComplete }: LoadingSoundProps) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let audioContext: AudioContext;
    
    const createAudioContext = () => {
      try {
        return new (window.AudioContext || (window as any).webkitAudioContext)();
      } catch {
        return null;
      }
    };

    const playStartupSound = () => {
      const context = createAudioContext();
      if (!context) return;
      audioContext = context;

      // Create a sophisticated startup chord
      const frequencies = [220, 330, 440]; // A3, E4, A4 - professional chord
      
      frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.03, audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1.5);
        
        oscillator.start(audioContext.currentTime + index * 0.1);
        oscillator.stop(audioContext.currentTime + 1.5);
      });
    };

    const playCompletionSound = () => {
      const context = createAudioContext();
      if (!context) return;
      audioContext = context;

      // Success notification sound
      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator1.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
      oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime); // E5
      
      oscillator1.type = 'sine';
      oscillator2.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4);
      
      oscillator1.start(audioContext.currentTime);
      oscillator2.start(audioContext.currentTime);
      oscillator1.stop(audioContext.currentTime + 0.4);
      oscillator2.stop(audioContext.currentTime + 0.4);
    };

    // Play startup sound
    if (isLoading && progress === 0) {
      setTimeout(playStartupSound, 500); // Slight delay for better UX
    }

    // Play completion sound
    if (isComplete) {
      playCompletionSound();
    }

    // Cleanup
    return () => {
      if (audioContext && audioContext.state !== 'closed') {
        audioContext.close();
      }
    };
  }, [isLoading, progress, isComplete]);
};

export default useLoadingSound;
