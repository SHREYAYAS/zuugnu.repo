export default function HowItWorks() {
  const steps = [
    {
      icon: '🔍',
      title: 'Browse Gigs',
      description: 'Explore pre-paid gigs or bid on assignments that match your skills and interests.',
    },
    {
      icon: '🤝',
      title: 'Secure Agreement',
      description: 'Agree on terms with clients. Payments are held in escrow for your security.',
    },
    {
      icon: '💻',
      title: 'Deliver & Earn',
      description: 'Complete the gig, submit your work, and receive payment—all through Zuugnu\'s platform.',
    },
    {
      icon: '⭐',
      title: 'Build Reputation',
      description: 'Earn ratings and reviews. Unlock more opportunities as you grow your Zuugnu profile.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">How Zuugnu Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl text-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
