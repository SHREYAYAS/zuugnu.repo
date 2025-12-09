'use client';

import Link from 'next/link';
import { CareerExplorer } from '@/components/CareerExplorer';

export default function CareerPage() {
  return (
    <div>
      {/* Back to Home Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-white bg-opacity-80 backdrop-blur-sm hover:bg-opacity-100 text-gray-700 hover:text-indigo-600 font-semibold px-4 py-2 rounded-lg shadow-md transition-all transform hover:scale-105 border border-purple-200"
      >
        <span className="text-xl">←</span>
        <span className="hidden sm:inline">🏠 Home</span>
      </Link>

      <CareerExplorer />
    </div>
  );
}
