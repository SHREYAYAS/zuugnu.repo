import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-1000">
      <nav className="container mx-auto max-w-6xl px-5 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-indigo-600">Zuugnu</div>
        <ul className="hidden md:flex list-none gap-7">
          <li>
            <Link href="#features" className="text-gray-800 font-medium hover:text-indigo-600 transition-colors">
              Features
            </Link>
          </li>
          <li>
            <Link href="#how-it-works" className="text-gray-800 font-medium hover:text-indigo-600 transition-colors">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="#training" className="text-gray-800 font-medium hover:text-indigo-600 transition-colors">
              Training
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="text-gray-800 font-medium hover:text-indigo-600 transition-colors">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-800 font-medium hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
        <Link
          href="#signup"
          className="bg-indigo-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
        >
          Join Now
        </Link>
      </nav>
    </header>
  );
}
