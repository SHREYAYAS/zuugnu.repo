import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-12 sm:py-20 bg-transparent text-center text-white" id="signup">
      <div className="container mx-auto max-w-6xl px-3 sm:px-5">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5">Ready to Start Earning?</h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Join Zuugnu today and unlock a world of gig opportunities, secure payments, and skill-building resources.
        </p>
        <Link
          href="/login"
          className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
        >
          Sign Up Now
        </Link>
      </div>
    </section>
  );
}
