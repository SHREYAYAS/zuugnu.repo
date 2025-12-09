'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const countries = [
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+1', name: 'USA', flag: '🇺🇸' },
    { code: '+44', name: 'UK', flag: '🇬🇧' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+971', name: 'UAE', flag: '🇦🇪' },
    { code: '+65', name: 'Singapore', flag: '🇸🇬' },
    { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+86', name: 'China', flag: '🇨🇳' },
    { code: '+82', name: 'South Korea', flag: '🇰🇷' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
    { code: '+33', name: 'France', flag: '🇫🇷' },
    { code: '+39', name: 'Italy', flag: '🇮🇹' },
    { code: '+34', name: 'Spain', flag: '🇪🇸' },
    { code: '+7', name: 'Russia', flag: '🇷🇺' },
    { code: '+55', name: 'Brazil', flag: '🇧🇷' },
    { code: '+52', name: 'Mexico', flag: '🇲🇽' },
    { code: '+27', name: 'South Africa', flag: '🇿🇦' },
    { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
    { code: '+20', name: 'Egypt', flag: '🇪🇬' },
    { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
    { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
    { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+977', name: 'Nepal', flag: '🇳🇵' },
    { code: '+66', name: 'Thailand', flag: '🇹🇭' },
    { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
    { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
    { code: '+63', name: 'Philippines', flag: '🇵🇭' },
    { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
    { code: '+852', name: 'Hong Kong', flag: '🇭🇰' },
    { code: '+886', name: 'Taiwan', flag: '🇹🇼' },
    { code: '+90', name: 'Turkey', flag: '🇹🇷' },
    { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+974', name: 'Qatar', flag: '🇶🇦' },
    { code: '+965', name: 'Kuwait', flag: '🇰🇼' },
    { code: '+968', name: 'Oman', flag: '🇴🇲' },
    { code: '+973', name: 'Bahrain', flag: '🇧🇭' },
    { code: '+962', name: 'Jordan', flag: '🇯🇴' },
    { code: '+961', name: 'Lebanon', flag: '🇱🇧' },
    { code: '+98', name: 'Iran', flag: '🇮🇷' },
    { code: '+93', name: 'Afghanistan', flag: '🇦🇫' },
    { code: '+254', name: 'Kenya', flag: '🇰🇪' },
    { code: '+256', name: 'Uganda', flag: '🇺🇬' },
    { code: '+255', name: 'Tanzania', flag: '🇹🇿' },
    { code: '+233', name: 'Ghana', flag: '🇬🇭' },
    { code: '+213', name: 'Algeria', flag: '🇩🇿' },
    { code: '+212', name: 'Morocco', flag: '🇲🇦' },
    { code: '+251', name: 'Ethiopia', flag: '🇪🇹' },
    { code: '+46', name: 'Sweden', flag: '🇸🇪' },
    { code: '+47', name: 'Norway', flag: '🇳🇴' },
    { code: '+45', name: 'Denmark', flag: '🇩🇰' },
    { code: '+358', name: 'Finland', flag: '🇫🇮' },
    { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
    { code: '+32', name: 'Belgium', flag: '🇧🇪' },
    { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
    { code: '+43', name: 'Austria', flag: '🇦🇹' },
    { code: '+48', name: 'Poland', flag: '🇵🇱' },
    { code: '+351', name: 'Portugal', flag: '🇵🇹' },
    { code: '+30', name: 'Greece', flag: '🇬🇷' },
    { code: '+420', name: 'Czech Republic', flag: '🇨🇿' },
    { code: '+36', name: 'Hungary', flag: '🇭🇺' },
    { code: '+40', name: 'Romania', flag: '🇷🇴' },
    { code: '+353', name: 'Ireland', flag: '🇮🇪' },
    { code: '+54', name: 'Argentina', flag: '🇦🇷' },
    { code: '+56', name: 'Chile', flag: '🇨🇱' },
    { code: '+57', name: 'Colombia', flag: '🇨🇴' },
    { code: '+51', name: 'Peru', flag: '🇵🇪' },
    { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
    { code: '+506', name: 'Costa Rica', flag: '🇨🇷' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Login attempt:', { phoneNumber, password });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4 py-12">
      {/* Back to Home Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 bg-white bg-opacity-80 backdrop-blur-sm hover:bg-opacity-100 text-gray-700 hover:text-indigo-600 font-semibold px-4 py-2 rounded-lg shadow-md transition-all transform hover:scale-105 border border-purple-200"
      >
        <span className="text-xl">←</span>
        <span className="text-xl">🏠</span>
        <span>Home</span>
      </Link>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Register Card */}
          <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-purple-200 shadow-2xl hover:shadow-purple-300 transition-all">
            <div className="text-center mb-8">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/zuugnu-removebg-preview.png"
                  alt="Zuugnu"
                  width={120}
                  height={60}
                  style={{ maxWidth: '120px', height: 'auto' }}
                  className="w-auto"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
                <span className="text-2xl">👤</span> Register
              </h2>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-700 font-semibold mb-3">Whatsapp <span className="text-pink-500">"Register + Your Full Name"</span></p>
              </div>

              <div className="text-center">
                <p className="text-gray-600 text-sm">To receive Login Password</p>
                <p className="text-yellow-600 font-semibold text-sm mt-1">ex: Register John Doe</p>
              </div>

              <div className="pt-4 border-t border-purple-300">
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  className="w-full bg-white text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <Link
                  href="https://wa.me/918800607598"
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Open WhatsApp Chat
                </Link>
              </div>
            </div>
          </div>

          {/* Sign In Card */}
          <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-purple-200 shadow-2xl hover:shadow-purple-300 transition-all">
            <div className="text-center mb-8">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/zuugnu-removebg-preview.png"
                  alt="Zuugnu"
                  width={120}
                  height={60}
                  style={{ maxWidth: '120px', height: 'auto' }}
                  className="w-auto"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
                <span className="text-2xl">↪️</span> Sign In
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-white border-2 border-purple-300 rounded-lg px-3 py-2 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                    size={1}
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter your whatsapp number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="flex-1 bg-white text-gray-800 placeholder-gray-400 rounded-lg px-4 py-2 border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-xl">🔒</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="flex-1 bg-white text-gray-800 placeholder-gray-400 rounded-lg px-4 py-2 border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-600 hover:text-gray-800 transition-colors text-xl"
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>✓</span> {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </div>

              <div className="text-center pt-4">
                <Link href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors font-medium">
                  Forgot Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-gray-600 text-sm font-medium">© 2025 Zuugnu.com | All rights reserved</p>
      </div>
    </div>
  );
}
