import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 md:pt-28 pb-32 sm:pb-40 md:pb-56 text-center overflow-hidden">
      {/* Content layer on top */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 leading-tight drop-shadow-lg">
          Empower Your Gig Journey with Zuugnu
        </h1>
        <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          Join India's fastest-growing community-driven platform for pre-paid gigs, bidding opportunities, and
          skill-building. Earn by creating, amplifying, and delivering value—secured by escrow, powered by trust.
        </p>
        <div className="flex gap-3 sm:gap-5 justify-center mb-8 sm:mb-12 flex-col sm:flex-row px-2 sm:px-0">
          <Link
            href="/login"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors text-sm sm:text-base whitespace-nowrap"
          >
            Get Started
          </Link>
          <Link
            href="#training"
            className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold border border-indigo-600 hover:bg-gray-50 transition-colors text-sm sm:text-base whitespace-nowrap"
          >
            Explore Training
          </Link>
        </div>
        <div className="w-full max-w-4xl mx-auto px-2 sm:px-0">
          <Image
            src="/home1.png"
            alt="Zuugnu Community Platform - Connect, Bid, and Earn"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
