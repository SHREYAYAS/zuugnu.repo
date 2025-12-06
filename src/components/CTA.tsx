import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-center text-white" id="signup">
      <div className="container mx-auto max-w-6xl px-5">
        <h2 className="text-4xl font-bold mb-5">Ready to Start Earning?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
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
