import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-md text-white py-12 sm:py-16 border-t border-white/10" id="contact">
      <div className="container mx-auto max-w-6xl px-3 sm:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-5">Zuugnu</h3>
            <p className="text-gray-400 mb-5">
              India's leading community-driven gig platform for pre-paid demand, bidding, and skill development.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white text-xl hover:text-indigo-400 transition-colors">
                f
              </Link>
              <Link href="#" className="text-white text-xl hover:text-indigo-400 transition-colors">
                𝕏
              </Link>
              <Link href="#" className="text-white text-xl hover:text-indigo-400 transition-colors">
                📷
              </Link>
              <Link href="#" className="text-white text-xl hover:text-indigo-400 transition-colors">
                in
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#training" className="text-gray-400 hover:text-white transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-400 hover:text-white transition-colors">
                  Career Explorer
                </Link>
              </li>
              <li>
                <Link href="/master-tables" className="text-gray-400 hover:text-white transition-colors">
                  Master Tables
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">For Freelancers</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Browse Gigs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Bid on Assignments
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Skills Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Escrow Payments
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">For Businesses</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Post a Gig
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  UGC Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Social Media Amplification
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Branding Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Business Plans
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-5 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Zuugnu. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
