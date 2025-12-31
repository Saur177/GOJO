'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          MusicApp
        </Link>
        
        <div className="flex-1 max-w-md mx-8">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 rounded-full text-white placeholder-gray-400"
          />
        </div>
        
        <nav className="flex items-center space-x-4">
          <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          <Link href="/auth/login" className="hover:text-gray-300">Login</Link>
        </nav>
      </div>
    </header>
  );
}