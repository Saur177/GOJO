'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Spotify Clone
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience the best music streaming platform with modern features
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/register" className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-colors">
              Get Started
            </Link>
            <Link href="/auth/login" className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black rounded-full font-semibold transition-colors">
              Sign In
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
            <p>High-quality music streaming experience with crystal clear audio/video</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Unlimited Access</h3>
            <p>Access millions of songs</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Any Device</h3>
            <p>Listen/watch anywhere - mobile, tablet, computer, and more</p>
          </div>
        </div>
      </div>
    </div>
  );
}