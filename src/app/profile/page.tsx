import Link from 'next/link';

export default function ProfilePage() {
	return (
		<main className="min-h-screen bg-gray-50 text-gray-900">
			<section className="max-w-5xl mx-auto px-4 py-16 space-y-6">
				<div className="flex items-center gap-3 text-sm text-indigo-700 font-semibold">
					<Link href="/" className="inline-flex items-center gap-2 hover:text-indigo-900 transition-colors">
						<span aria-hidden>←</span>
						<span>Back to Home</span>
					</Link>
				</div>

				<header className="space-y-2">
					<p className="text-sm uppercase tracking-wide text-indigo-600 font-semibold">Profile</p>
					<h1 className="text-3xl sm:text-4xl font-bold">Your Zuugnu Profile</h1>
					<p className="text-gray-600 max-w-2xl">
						Manage your account information and preferences. This is a placeholder page; hook up your real profile data
						and actions here.
					</p>
				</header>

				<div className="grid gap-6 sm:grid-cols-2">
					<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
						<h2 className="text-lg font-semibold mb-2">Account</h2>
						<p className="text-sm text-gray-600">Name, email, and contact details.</p>
					</div>
					<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
						<h2 className="text-lg font-semibold mb-2">Security</h2>
						<p className="text-sm text-gray-600">Password, sessions, and device management.</p>
					</div>
				</div>
			</section>
		</main>
	);
}
