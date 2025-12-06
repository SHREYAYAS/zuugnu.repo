import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-40 pb-24 bg-gradient-to-b from-gray-100 to-gray-200 text-center">
      <div className="container mx-auto max-w-6xl px-5">
        <h1 className="text-5xl font-bold text-gray-900 mb-5">Empower Your Gig Journey with Zuugnu</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join India's fastest-growing community-driven platform for pre-paid gigs, bidding opportunities, and
          skill-building. Earn by creating, amplifying, and delivering value—secured by escrow, powered by trust.
        </p>
        <div className="flex gap-5 justify-center mb-12 flex-col sm:flex-row">
          <Link
            href="#signup"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="#training"
            className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold border border-indigo-600 hover:bg-gray-50 transition-colors"
          >
            Explore Training
          </Link>
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <Image
            src="/home1.png"
            alt="Zuugnu Community"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
