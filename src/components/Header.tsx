'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#training', label: 'Training' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/10 backdrop-blur-md shadow-md sticky top-0 w-full z-50 border-b border-white/20">
      <nav className="container mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 flex justify-between items-center py-2 sm:py-3">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image 
            src="/zuugnu-removebg-preview.png" 
            alt="Zuugnu - Learning and Development Platform" 
            width={150} 
            height={60}
            priority
            style={{ maxWidth: '150px', height: 'auto' }}
            className="w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex list-none gap-1 flex-1 justify-center mx-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className="text-white font-medium hover:text-yellow-400 transition-colors px-2 py-1 text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <Link
          href="/login"
          className="hidden sm:inline-flex bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 transition-colors text-sm flex-shrink-0"
        >
          Join Now
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0 ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg 
            className="w-6 h-6 text-gray-700" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile CTA Button */}
        <Link
          href="/login"
          className="sm:hidden bg-indigo-600 text-white px-3 py-1 rounded-md font-semibold hover:bg-indigo-700 transition-colors text-sm flex-shrink-0 ml-1"
        >
          Join
        </Link>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 font-medium hover:text-indigo-600 transition-colors block px-3 py-2 rounded-lg hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 transition-colors text-sm block text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
