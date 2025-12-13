import Link from 'next/link';
import Image from 'next/image';

export default function Training() {
  return (
    <section className="py-12 sm:py-20 bg-transparent" id="training">
      <div className="container mx-auto max-w-6xl px-3 sm:px-5">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Upskill with Zuugnu Academy</h2>
          <p className="text-sm sm:text-base text-gray-200 mt-3 sm:mt-4">Boost your earning potential with certified training in UGC, SMA, and digital branding.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex justify-center mb-8 lg:mb-0">
            <img
              src="/home.image.png"
              alt="Zuugnu Training"
              className="rounded-lg shadow-lg w-full max-w-md h-auto"
            />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Certified Courses</h3>
            <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6">
              From beginner to advanced, our courses are designed by industry experts to help you master in-demand
              skills.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Freemium Model</h3>
            <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6">
              Start with free basic modules. Upgrade to premium certifications and mentorship for a competitive edge.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Earn While You Learn</h3>
            <p className="text-sm sm:text-base text-gray-200 mb-6 sm:mb-8">
              Apply your new skills to real gigs on Zuugnu. Our training programs are designed to get you earning
              faster.
            </p>

            <Link
              href="#signup"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors inline-block"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
