'use client';

import Link from 'next/link';

export default function Sidebar() {
  const menuItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Search', href: '/search', icon: '🔍' },
    { name: 'Your Library', href: '/library', icon: '📚' },
    { name: 'Playlists', href: '/playlists', icon: '🎵' },
    { name: 'Liked Songs', href: '/liked', icon: '❤️' },
  ];

  return (
    <aside className="w-64 bg-black text-white h-screen p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}