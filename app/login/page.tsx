'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'signin' | 'register'>('signin');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-3">Discover. Decide. Shine</h1>
          <p className="text-xl text-purple-200">Where Science Meets Soul</p>
        </div>

        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Register Section */}
          <div
            className={`rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 cursor-pointer ${
              activeTab === 'register'
                ? 'bg-gray-900/80 border border-purple-500/30 shadow-2xl'
                : 'bg-gray-900/40 border border-gray-700/30 hover:bg-gray-900/60'
            }`}
            onClick={() => setActiveTab('register')}
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <span className="text-4xl">👤</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Register</h2>
            </div>

            {activeTab === 'register' && (
              <form className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    WhatsApp Number
                  </label>
                  <div className="flex gap-2">
                    <select className="w-20 bg-gray-800 border border-gray-700 rounded-lg px-3 py-3 text-white focus:outline-none focus:border-purple-500">
                      <option>IN +91</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="8800607598"
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 text-center">
                  <p className="text-gray-300 text-sm mb-2">To receive Login Password</p>
                  <p className="text-purple-300 font-semibold">ex: Register John Doe</p>
                </div>

                <input
                  type="text"
                  placeholder='"Register + Your Full Name"'
                  className="w-full bg-white rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />

                <button type="button" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <span>💬</span> Open WhatsApp Chat
                </button>
              </form>
            )}

            {activeTab !== 'register' && (
              <div className="text-center text-gray-400">
                <p className="text-sm">Click to register</p>
              </div>
            )}
          </div>

          {/* Sign In Section */}
          <div
            className={`rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 cursor-pointer ${
              activeTab === 'signin'
                ? 'bg-gray-900/80 border border-blue-500/30 shadow-2xl'
                : 'bg-gray-900/40 border border-gray-700/30 hover:bg-gray-900/60'
            }`}
            onClick={() => setActiveTab('signin')}
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <span className="text-4xl">🔐</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
            </div>

            {activeTab === 'signin' && (
              <form className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    WhatsApp Number
                  </label>
                  <div className="flex gap-2">
                    <select className="w-20 bg-gray-800 border border-gray-700 rounded-lg px-3 py-3 text-white focus:outline-none focus:border-blue-500">
                      <option>IN +91</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Enter your whatsapp number"
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-white text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-3 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>

                <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <span>✉️</span> Submit
                </button>

                <button type="button" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <span>📊</span> Dashboard
                </button>

                <div className="text-center">
                  <button type="button" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                    Forgot Password?
                  </button>
                </div>
              </form>
            )}

            {activeTab !== 'signin' && (
              <div className="text-center text-gray-400">
                <p className="text-sm">Click to sign in</p>
              </div>
            )}
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="text-purple-300 hover:text-purple-200 transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
