'use client';

import { useState } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState('No song selected');

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Music Player</h1>
        
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <div className="w-64 h-64 bg-gray-700 rounded-lg mx-auto mb-6 flex items-center justify-center">
            <span className="text-6xl">🎵</span>
          </div>
          
          <h2 className="text-2xl font-bold mb-2">{currentSong}</h2>
          <p className="text-gray-400 mb-8">Artist Name</p>
          
          <div className="flex items-center justify-center space-x-4">
            <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600">⏮️</button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-4 bg-green-500 rounded-full hover:bg-green-600 text-2xl"
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600">⏭️</button>
          </div>
        </div>
      </div>
    </div>
  );
}