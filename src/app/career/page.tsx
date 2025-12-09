'use client';

import Link from 'next/link';
import { CareerExplorer } from '@/components/CareerExplorer';

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-white flex flex-col items-center justify-start relative pb-16">
      {/* Back to Home Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-white bg-opacity-80 backdrop-blur-sm hover:bg-opacity-100 text-gray-700 hover:text-indigo-600 font-semibold px-4 py-2 rounded-lg shadow-md transition-all transform hover:scale-105 border border-purple-200"
      >
        <span className="text-xl">←</span>
        <span className="hidden sm:inline">🏠 Home</span>
      </Link>

      {/* Elegant Header Section */}
      <header className="w-full max-w-3xl mx-auto text-center mt-24 mb-10 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 drop-shadow-lg mb-4 animate-fade-in">
          Explore Careers
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 font-medium mb-2 animate-fade-in delay-100">
          Discover your path, unlock your potential.
        </p>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 rounded-full mb-2 animate-fade-in delay-200" />
      </header>

      {/* Main Content */}
      <main className="w-full max-w-4xl mx-auto px-4">
        <div className="bg-white bg-opacity-80 rounded-2xl shadow-xl p-6 sm:p-10 mb-8 border border-indigo-100 animate-fade-in delay-300">
          <CareerExplorer />
        </div>
      </main>

      {/* Subtle Decorative Particles (optional, if you have a ParticlesWavesBackground component) */}
      {/* <ParticlesWavesBackground /> */}
    </div>
  );
}
