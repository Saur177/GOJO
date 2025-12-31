'use client';

import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [data, setData] = useState([]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              Recently Played
            </h3>
            <p className="text-gray-400">Your recent music streaming activity will appear here</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              Your Playlists
            </h3>
            <p className="text-gray-400">Manage your saved content</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
            <p className="text-gray-400">Discover new content based on your preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
}